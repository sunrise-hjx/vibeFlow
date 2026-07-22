import { readFileSync, writeFileSync } from 'node:fs';

const [, , sourcePath, outputPath] = process.argv;
if (!sourcePath || !outputPath) {
  throw new Error('Usage: node tools/faststart-mp4.mjs input.mp4 output.mp4');
}

const source = readFileSync(sourcePath);

function readTopLevelBoxes(buffer) {
  const boxes = [];
  let offset = 0;
  while (offset + 8 <= buffer.length) {
    let size = buffer.readUInt32BE(offset);
    const type = buffer.toString('ascii', offset + 4, offset + 8);
    let headerSize = 8;
    if (size === 1) {
      size = Number(buffer.readBigUInt64BE(offset + 8));
      headerSize = 16;
    } else if (size === 0) {
      size = buffer.length - offset;
    }
    if (size < headerSize || offset + size > buffer.length) {
      throw new Error(`Invalid MP4 box ${type} at offset ${offset}`);
    }
    boxes.push({ type, offset, size });
    offset += size;
  }
  if (offset !== buffer.length) throw new Error('Trailing bytes found after final MP4 box');
  return boxes;
}

function patchChunkOffsets(moovBuffer, delta) {
  let patchedTables = 0;
  for (let typeOffset = 4; typeOffset + 12 <= moovBuffer.length; typeOffset += 1) {
    const type = moovBuffer.toString('ascii', typeOffset, typeOffset + 4);
    if (type !== 'stco' && type !== 'co64') continue;
    const boxStart = typeOffset - 4;
    const boxSize = moovBuffer.readUInt32BE(boxStart);
    const boxEnd = boxStart + boxSize;
    if (boxSize < 16 || boxEnd > moovBuffer.length) continue;
    const entryCount = moovBuffer.readUInt32BE(typeOffset + 8);
    const entrySize = type === 'stco' ? 4 : 8;
    const entriesStart = typeOffset + 12;
    if (entriesStart + entryCount * entrySize > boxEnd) continue;
    for (let index = 0; index < entryCount; index += 1) {
      const offset = entriesStart + index * entrySize;
      if (type === 'stco') {
        moovBuffer.writeUInt32BE(moovBuffer.readUInt32BE(offset) + delta, offset);
      } else {
        moovBuffer.writeBigUInt64BE(moovBuffer.readBigUInt64BE(offset) + BigInt(delta), offset);
      }
    }
    patchedTables += 1;
    typeOffset = boxEnd - 1;
  }
  if (!patchedTables) throw new Error('No stco/co64 chunk-offset table found in moov box');
  return patchedTables;
}

const boxes = readTopLevelBoxes(source);
const ftyp = boxes.find(box => box.type === 'ftyp');
const moov = boxes.find(box => box.type === 'moov');
const mdat = boxes.find(box => box.type === 'mdat');
if (!ftyp || !moov || !mdat) throw new Error('Expected ftyp, moov, and mdat boxes');

if (moov.offset < mdat.offset) {
  writeFileSync(outputPath, source);
  console.log('Input is already Fast Start; copied without modification.');
} else {
  const moovBuffer = Buffer.from(source.subarray(moov.offset, moov.offset + moov.size));
  const tableCount = patchChunkOffsets(moovBuffer, moov.size);
  const ordered = [
    source.subarray(ftyp.offset, ftyp.offset + ftyp.size),
    moovBuffer,
    ...boxes
      .filter(box => box !== ftyp && box !== moov)
      .map(box => source.subarray(box.offset, box.offset + box.size))
  ];
  writeFileSync(outputPath, Buffer.concat(ordered));
  console.log(`Fast Start MP4 written; patched ${tableCount} chunk-offset table(s).`);
}
