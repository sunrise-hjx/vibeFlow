#!/usr/bin/env python3
"""Build the static OpenFOAM case library from local cases and tutorial metadata."""

from __future__ import annotations

import json
import re
import time
import zipfile
from dataclasses import dataclass
from pathlib import Path
from typing import Iterable
from urllib.parse import urljoin, urlparse

import requests
from bs4 import BeautifulSoup


ROOT = Path(__file__).resolve().parent
OPENFOAM_ROOT = ROOT / "cases" / "OpenFOAM"
CASE_SITE_DIR = ROOT / "cases"
DATA_DIR = CASE_SITE_DIR / "data"
DOWNLOAD_DIR = CASE_SITE_DIR / "downloads" / "openfoam"
IMAGE_DIR = CASE_SITE_DIR / "assets" / "openfoam"
XSIM_INDEX = "https://www.xsim.info/articles/OpenFOAM/en-US/Tutorials.html"
USER_AGENT = "Mozilla/5.0 (VibeFlow static case library builder)"
IMAGE_EXTS = {".png", ".jpg", ".jpeg", ".webp"}
FORMULA_IMAGE_RE = re.compile(
    r"(equation|formula|arrhenius|potentialflow|darcyforchheimer|watergasshift|"
    r"navierstokes|\\frac|\\partial|\\nabla|\\Delta|\\boldsymbol|\\{|\\})",
    re.I,
)


SECTION_ZH = {
    "Basics": "基础算例",
    "Direct numerical simulation (DNS)": "直接数值模拟",
    "Incompressible fluid": "不可压流体",
    "Compressible fluid": "可压缩流体",
    "Heat transfer": "传热",
    "Multiphase": "多相流",
    "Combustion": "燃烧",
    "Discrete method": "离散方法",
    "Electromagnetics": "电磁",
    "Lagrangian": "拉格朗日颗粒",
    "Mesh": "网格",
    "Stress analysis": "应力分析",
    "Financial": "金融模型",
}

SECTION_TYPE = {
    "Basics": "基础",
    "Direct numerical simulation (DNS)": "湍流",
    "Incompressible fluid": "单相",
    "Compressible fluid": "可压缩",
    "Heat transfer": "传热",
    "Multiphase": "多相",
    "Combustion": "燃烧",
    "Discrete method": "离散方法",
    "Electromagnetics": "电磁",
    "Lagrangian": "颗粒",
    "Mesh": "网格",
    "Stress analysis": "结构",
    "Financial": "金融",
}

SOLVER_HINTS = {
    "icoFoam": "不可压瞬态层流求解器",
    "pisoFoam": "不可压瞬态 PISO 求解器",
    "pimpleFoam": "不可压瞬态 PIMPLE 求解器",
    "simpleFoam": "不可压稳态 SIMPLE 求解器",
    "interFoam": "VOF 两相流求解器",
    "interIsoFoam": "界面重构两相流求解器",
    "twoPhaseEulerFoam": "欧拉-欧拉两相流求解器",
    "multiphaseEulerFoam": "多相欧拉求解器",
    "rhoSimpleFoam": "可压缩稳态 SIMPLE 求解器",
    "rhoPimpleFoam": "可压缩瞬态 PIMPLE 求解器",
    "rhoCentralFoam": "密度基可压缩瞬态求解器",
    "laplacianFoam": "拉普拉斯/热传导求解器",
    "chtMultiRegionFoam": "多区域共轭传热求解器",
    "buoyantSimpleFoam": "浮力驱动稳态传热求解器",
    "buoyantPimpleFoam": "浮力驱动瞬态传热求解器",
    "sprayFoam": "喷雾燃烧拉格朗日求解器",
    "reactingFoam": "反应流求解器",
    "fireFoam": "火灾与烟气模拟求解器",
    "solidDisplacementFoam": "固体位移求解器",
    "snappyHexMesh": "六面体主导自动网格工具",
    "blockMesh": "结构化网格生成工具",
}

TITLE_ZH = {
    "Heat conduction analysis of flange": "法兰热传导分析",
    "Potential flow around a cylinder": "圆柱绕流势流计算",
    "Potential flow in backstep geometry": "后台阶几何中的势流计算",
    "Scalar transport in backstep flow": "后台阶流动中的标量输运",
    "Combustion of hydrogen (Ordinary differential equations)": "氢气燃烧（常微分方程）",
    "Combustion of isooctane (Ordinary differential equations)": "异辛烷燃烧（常微分方程）",
    "Combustion of methane (Ordinary differential equations)": "甲烷燃烧（常微分方程）",
    "Flame propagation in a space with obstacles": "障碍物空间中的火焰传播",
    "n-Combustion of n-heptane (Ordinary differential equations)": "正庚烷燃烧（常微分方程）",
    "Axisymmetric subsonic flow and shock diamonds": "轴对称亚声速流与激波钻石",
    "Axisymmetric supersonic flow and Maxwell slip model": "轴对称超声速流与 Maxwell 滑移模型",
    "Bending channel with a porous media region": "含多孔介质区域的弯曲通道",
    "Helmholtz Resonance (Plenum Pressure Model)": "亥姆霍兹共振（腔体压力模型）",
    "Helmholtz Resonance (entire field)": "亥姆霍兹共振（全场模型）",
    "Leakage from high-pressure tank": "高压储罐泄漏",
    "Shock tube": "激波管",
    "Square channel with a curved section": "带弯曲段的方形通道",
    "Direct numerical simulation of turbulence at periodic boundaries": "周期边界湍流直接数值模拟",
    "Direct simulation Monte Carlo of oxygen/nitrogen mixtures (periodic boundary)": "氧氮混合气 DSMC 计算（周期边界）",
    "Direct simulation Monte Carlo of oxygen/nitrogen mixtures (uniform flow)": "氧氮混合气 DSMC 计算（均匀来流）",
    "Direct simulation Monte Carlo of supersonic argon gas flow": "超声速氩气流 DSMC 计算",
    "Direct simulation Monte Carlo of supersonic flow hitting on a slope": "超声速流撞击斜面的 DSMC 计算",
    "Molecular dynamics calculation for equilibrium state of argon": "氩平衡态分子动力学计算",
    "Molecular dynamics calculation for equilibrium state of water": "水平衡态分子动力学计算",
    "Molecular dynamics calculation of water in a nanoscale nozzle": "纳米尺度喷嘴内水的分子动力学计算",
    "Steady flow of electromagnetic fluid between parallel plates with magnetic fields": "磁场中平行板间电磁流体稳态流动",
    "Air cooling of heating plate": "加热板空气冷却",
    "Flow around the refrigerator in the igloo (ice chamber)": "冰室中冰箱周围流动",
    "Flow between plates with different temperatures": "不同温度平板间流动",
    "Heat exchanger": "换热器",
    "Heat transfer between multiple solids and fluids": "多固体与流体间传热",
    "Heat transfer between multiple solids and fluids (snappyHexMesh)": "多固体与流体间传热（snappyHexMesh）",
    "Heat transfer between multiple solids and fluids (with radiation)": "多固体与流体间传热（含辐射）",
    "Natural convection in a rectangular domain (Steady, Boussinesq approximation)": "矩形区域自然对流（稳态，Boussinesq 近似）",
    "Natural convection in a rectangular domain (Unsteady)": "矩形区域自然对流（非稳态）",
    "Natural convection in a rectangular domain (Unsteady, Boussinesq approximation)": "矩形区域自然对流（非稳态，Boussinesq 近似）",
    "Natural convection in a rectangular region with radiation": "矩形区域含辐射自然对流",
    "Natural convection in a rectangular region with radiation (fvDOM model)": "矩形区域含辐射自然对流（fvDOM 模型）",
    "2-dimensional analysis of a cylindrical mixer": "圆柱搅拌器二维分析",
    "Analysis of wind turbines placed on terrain data": "地形数据上的风机布置分析",
    "Bent pipe with multiple inlets": "多入口弯管流动",
    "Cavity flow": "方腔流动",
    "Cavity flow (mapping data to different mesh)": "方腔流动（映射数据到不同网格）",
    "Cavity flow (mapping data to different shape meshes)": "方腔流动（映射数据到不同形状网格）",
    "Flow around a rotating disk": "旋转圆盘绕流",
    "Flow around a running motorcycle": "行驶摩托车绕流",
    "Flow around an obstacle of a porous media": "多孔介质障碍物绕流",
    "Flow by shallow water equation": "浅水方程流动",
    "Rotor wit SRF function": "使用 SRF 功能的转子流动",
    "Steady flow around a 2-dimensional airfoil": "二维翼型稳态绕流",
    "Straight flow channel with porous media area": "含多孔介质区域的直通道流动",
    "Swirling flow through a pipe (1/4 model)": "管道旋流（1/4 模型）",
    "Wind environment around buildings": "建筑群周围风环境",
    "Dropping liquid from a funnel": "漏斗滴液",
    "Dropping liquid from a funnel (Calculating the initial state)": "漏斗滴液（初始状态计算）",
    "Ignition of mixture gas with coal dust and lime dust (2D)": "煤尘与石灰尘混合气点火（二维）",
    "Injection of water droplets into the flow channel": "向流道注入水滴",
    "Mass particle inflow into cyclone flow": "旋风分离器中的大质量颗粒入口流动",
    "Phase change of water in a vertical 3 way channel (unsteady)": "三通竖直通道中水的相变（非稳态）",
    "Phase change of water in a vertical 3-way channel (steady)": "三通竖直通道中水的相变（稳态）",
    "Phase change of water in a vertical 3-way channel (steady, local time stepping)": "三通竖直通道中水的相变（稳态，本地时间步）",
    "Spraying and burning of heptane": "庚烷喷雾与燃烧",
    "Spraying water into a channel with a filter": "向带过滤器的通道喷水",
    "Blob": "团块网格",
    "Flange": "法兰",
    "Making 3D mesh from 2D contours (by extrusion)": "由二维轮廓生成三维网格（拉伸）",
    "Making 3D mesh from 2D contours (by rotational extrusion)": "由二维轮廓生成三维网格（旋转拉伸）",
    "Making 3D mesh from 2D outline and Calculating the flow": "由二维外形生成三维网格并计算流动",
    "Mesh deformation": "网格变形",
    "Mesh refinement": "网格加密",
    "Mixing tank": "搅拌罐",
    "Simple shapes": "简单形状",
    "Agitation of liquid by a cylindrical mixer": "圆柱搅拌器搅动液体",
    "Blowing air into water column": "向水柱中鼓入空气",
    "Blowing air into water column (LES)": "向水柱中鼓入空气（LES）",
    "Blowing air into water column (Laminar)": "向水柱中鼓入空气（层流）",
    "Blowing air into water column (Laminar, IATE model)": "向水柱中鼓入空气（层流，IATE 模型）",
    "Blowing air into water column (RANS)": "向水柱中鼓入空气（RANS）",
    "Blowing air into water column with evaporation": "向水柱中鼓入空气并蒸发",
    "Blowing air into water column with evaporation and dissolution": "向水柱中鼓入空气并蒸发与溶解",
    "Blowing gas into a liquid": "向液体中鼓入气体",
    "Blowing steam into a liquid": "向液体中鼓入蒸汽",
    "Boiling at high temperature wall": "高温壁面沸腾",
    "Capillary rise": "毛细上升",
    "Cavitation around a bullet": "弹丸周围空化",
    "Cavitation around a propeller": "螺旋桨周围空化",
    "Centrifugal separation of air and water": "空气与水的离心分离",
    "Centrifugal separation of air, water, oil and mercury": "空气、水、油和汞的离心分离",
    "Dam-break problem (Laminar)": "溃坝问题（层流）",
    "Dam-break problem with two types of liquids": "两种液体的溃坝混合问题",
    "Dam-break problem with water, oil, and mercury": "水、油和汞的溃坝问题",
    "Dam-break problem with water, oil, and mercury (High resolution mesh)": "水、油和汞的溃坝问题（高分辨率网格）",
    "Expansion of an air bubble in water (2D)": "水中气泡膨胀（二维）",
    "Expansion of an air bubble in water (3D)": "水中气泡膨胀（三维）",
    "Fluidized bed (Laminar)": "流化床（层流）",
    "Fluidized bed (RANS)": "流化床（RANS）",
    "Mixing air, water, oil and mercury in a cylindrical mixer": "圆柱搅拌器中空气、水、油和汞混合",
    "Mixing of two types of liquids": "两种液体混合",
    "Reforming of carbon monoxide mixture gas by water-gas shift reaction": "通过水煤气变换反应重整一氧化碳混合气",
    "Waves generated by the oscillation of an object floating on the liquid surface": "浮体振荡产生的自由液面波",
    "Stress analysis of a flat plate with holes": "带孔平板应力分析",
}


@dataclass
class SourceItem:
    section: str
    title: str
    url: str


def fetch(session: requests.Session, url: str) -> str:
    last_error: Exception | None = None
    for attempt in range(4):
        try:
            response = session.get(url, timeout=25)
            response.encoding = "utf-8"
            response.raise_for_status()
            return response.text
        except Exception as exc:  # pragma: no cover - network resilience
            last_error = exc
            time.sleep(1.2 + attempt)
    raise RuntimeError(f"Failed to fetch {url}: {last_error}")


def slugify(value: str) -> str:
    value = value.strip().replace("\\", "/")
    value = re.sub(r"[^A-Za-z0-9/_-]+", "-", value)
    value = value.replace("/", "-")
    value = re.sub(r"-+", "-", value).strip("-")
    return value.lower() or "case"


def title_zh(title: str) -> str:
    return TITLE_ZH.get(title, title)


def text_after_heading(soup: BeautifulSoup, heading: str) -> str:
    h2 = None
    for tag in soup.find_all(["h2", "h3"]):
        if tag.get_text(" ", strip=True).lower() == heading.lower():
            h2 = tag
            break
    if h2 is None:
        return ""
    parts: list[str] = []
    for node in h2.next_siblings:
        if getattr(node, "name", None) in {"h2", "h3"}:
            break
        text = getattr(node, "get_text", lambda *args, **kwargs: "")(" ", strip=True)
        if text:
            parts.append(text)
    return " ".join(parts)


def parse_index(session: requests.Session) -> list[SourceItem]:
    soup = BeautifulSoup(fetch(session, XSIM_INDEX), "html.parser")
    items: list[SourceItem] = []
    seen: set[str] = set()
    section = ""
    for node in soup.find_all(["h2", "li"]):
        if node.name == "h2":
            section = node.get_text(" ", strip=True)
            continue
        anchor = node.find("a")
        if not anchor:
            continue
        href = anchor.get("href", "")
        if "tutorials/" not in href:
            continue
        url = urljoin(XSIM_INDEX, href)
        if url in seen:
            continue
        seen.add(url)
        items.append(SourceItem(section=section, title=anchor.get_text(" ", strip=True), url=url))
    return items


def local_case_dirs() -> set[str]:
    return {str(path.parent.relative_to(OPENFOAM_ROOT)) for path in OPENFOAM_ROOT.rglob("Allrun")}


def match_local_case(source_case_dir: str, local_dirs: set[str]) -> str:
    if source_case_dir in local_dirs:
        return source_case_dir
    parts = source_case_dir.split("/")
    for n in range(len(parts) - 1, 1, -1):
        candidate = "/".join(parts[:n])
        if candidate in local_dirs:
            return candidate
    candidates = [
        item
        for item in local_dirs
        if item.endswith("/" + source_case_dir)
        or item.endswith(source_case_dir)
        or source_case_dir.endswith("/" + item)
    ]
    return sorted(candidates, key=len)[0] if candidates else ""


def strip_comments(text: str) -> str:
    text = re.sub(r"/\\*.*?\\*/", "", text, flags=re.S)
    text = re.sub(r"//.*", "", text)
    return text


def foam_value(text: str, key: str) -> str:
    match = re.search(rf"\\b{re.escape(key)}\\s+([^;\\n]+);", strip_comments(text))
    return match.group(1).strip() if match else ""


def read_text(path: Path) -> str:
    try:
        return path.read_text(encoding="utf-8", errors="ignore")
    except OSError:
        return ""


def first_existing(paths: Iterable[Path]) -> Path | None:
    for path in paths:
        if path.exists():
            return path
    return None


def case_files(case_path: Path) -> dict[str, object]:
    control_path = first_existing(
        [
            case_path / "system" / "controlDict",
            *sorted(case_path.glob("*/system/controlDict")),
        ]
    )
    control = read_text(control_path) if control_path else ""
    application = foam_value(control, "application")

    allrun = read_text(case_path / "Allrun")
    command_tokens = []
    known_commands = [
        "blockMesh",
        "snappyHexMesh",
        "surfaceFeatureExtract",
        "setFields",
        "topoSet",
        "decomposePar",
        "reconstructPar",
        "renumberMesh",
        "transformPoints",
        "createPatch",
        "extrudeMesh",
        "refineMesh",
        "mapFields",
        "foamRun",
        "paraFoam",
        "foamToVTK",
    ]
    if application:
        known_commands.append(application)
    for command in known_commands:
        if re.search(rf"(^|\\s|/){re.escape(command)}(\\s|$)", allrun):
            command_tokens.append(command)

    if application and application not in command_tokens:
        command_tokens.append(application)

    zero_dir = first_existing([case_path / "0", case_path / "0.orig"])
    fields = []
    if zero_dir:
        fields = sorted(item.name for item in zero_dir.iterdir() if item.is_file() and not item.name.startswith("."))

    constant_dir = case_path / "constant"
    constants = []
    if constant_dir.exists():
        constants = sorted(
            item.name
            for item in constant_dir.iterdir()
            if item.is_file() and item.name not in {"README", "README.md"}
        )

    return {
        "application": application,
        "endTime": foam_value(control, "endTime"),
        "deltaT": foam_value(control, "deltaT"),
        "writeInterval": foam_value(control, "writeInterval"),
        "fields": fields[:10],
        "constants": constants[:10],
        "commands": command_tokens[:12],
    }


def infer_types(section: str, path: str, solver: str, title: str) -> list[str]:
    haystack = " ".join([section, path, solver, title]).lower()
    types: list[str] = []
    base_type = SECTION_TYPE.get(section)
    if base_type:
        types.append(base_type)
    keyword_map = [
        ("多相", ["multiphase", "interfoam", "twophase", "phase", "damBreak".lower(), "vof"]),
        ("单相", ["incompressible", "icofoam", "pisofoam", "simplefoam", "pimplefoam"]),
        ("传热", ["heat", "thermal", "cht", "buoyant", "laplacian"]),
        ("湍流", ["les", "ras", "dns", "turb", "komega", "kepsilon", "wallfunction"]),
        ("可压缩", ["compressible", "rho", "sonic", "shock", "supersonic", "acoustic"]),
        ("燃烧", ["combustion", "reacting", "fire", "flame", "chem", "spray"]),
        ("流固耦合", ["solid", "displacement", "fsi", "lumpedpoint", "motion"]),
        ("颗粒", ["lagrangian", "parcel", "particle", "dpm", "mppic", "dsmc", "molecular"]),
        ("网格", ["mesh", "snappy", "blockmesh", "extrude", "refine"]),
        ("优化", ["optimisation", "optimization", "adjoint"]),
    ]
    for label, words in keyword_map:
        if any(word in haystack for word in words):
            types.append(label)
    ordered = []
    for item in types:
        if item not in ordered:
            ordered.append(item)
    return ordered or ["通用"]


def solver_from_path(path: str, application: str) -> str:
    if application:
        return application
    parts = path.split("/")
    return parts[1] if len(parts) > 1 else parts[0]


def image_data(
    session: requests.Session,
    soup: BeautifulSoup,
    url: str,
    case_id: str,
    title: str,
    title_cn: str,
) -> list[dict[str, str]]:
    candidates: list[tuple[str, str]] = []
    for img in soup.find_all("img"):
        src = img.get("src")
        if not src or "logo" in src.lower():
            continue
        alt = img.get("alt") or img.get("title") or "OpenFOAM tutorial result"
        parsed = urlparse(urljoin(url, src))
        ext = Path(parsed.path).suffix.lower()
        image_text = f"{src} {alt}"
        if ext not in IMAGE_EXTS or FORMULA_IMAGE_RE.search(image_text):
            continue
        candidates.append((urljoin(url, src), alt.strip()))

    case_image_dir = IMAGE_DIR / case_id
    case_image_dir.mkdir(parents=True, exist_ok=True)
    images: list[dict[str, str]] = []
    for index, (image_url, _alt) in enumerate(candidates[:6], 1):
        parsed = urlparse(image_url)
        ext = Path(parsed.path).suffix.lower()
        stem = slugify(Path(parsed.path).stem)[:52] or f"result-{index:02d}"
        target = case_image_dir / f"result-{index:02d}-{stem}{ext}"
        if not target.exists():
            try:
                response = session.get(image_url, timeout=25)
                response.raise_for_status()
                if len(response.content) < 512:
                    continue
                target.write_bytes(response.content)
            except Exception:
                continue
        images.append(
            {
                "url": str(target.relative_to(CASE_SITE_DIR)).replace("\\", "/"),
                "alt": f"{title} result {index}",
                "altZh": f"{title_cn}结果图 {index}",
            }
        )
    return images


def zip_case(case_id: str, local_path: str) -> str:
    source = OPENFOAM_ROOT / local_path
    DOWNLOAD_DIR.mkdir(parents=True, exist_ok=True)
    target = DOWNLOAD_DIR / f"{case_id}.zip"
    with zipfile.ZipFile(target, "w", compression=zipfile.ZIP_DEFLATED) as zf:
        for item in sorted(source.rglob("*")):
            if item.is_file():
                arcname = Path("OpenFOAM") / local_path / item.relative_to(source)
                zf.write(item, arcname)
    return str(target.relative_to(CASE_SITE_DIR)).replace("\\", "/")


def field_role_text(fields: list[str]) -> str:
    roles: list[str] = []
    for field in fields:
        low = field.lower()
        if field == "U":
            roles.append("速度场 `U`")
        elif field in {"p", "p_rgh"}:
            roles.append(f"压力变量 `{field}`")
        elif field == "T":
            roles.append("温度场 `T`")
        elif field.startswith("alpha"):
            roles.append(f"相分数 `{field}`")
        elif field in {"k", "epsilon", "omega", "nut", "nuTilda"}:
            roles.append(f"湍流变量 `{field}`")
        elif field in {"D", "pointD"}:
            roles.append(f"固体位移 `{field}`")
        elif "rho" in low:
            roles.append(f"密度相关变量 `{field}`")
        elif field in {"Yi", "Ydefault"} or field.startswith("Y"):
            roles.append(f"组分质量分数 `{field}`")
        elif field:
            roles.append(f"`{field}`")
    if not roles:
        return "主要结果变量会在运行后的时间目录中生成，可重点查看速度、压力、温度、相分数或位移等与物理问题对应的场量。"
    return "主要关注变量包括" + "、".join(list(dict.fromkeys(roles))[:8]) + "，这些变量直接对应结果图中的流场、热场、界面或结构响应。"


def constant_role_text(constants: list[str]) -> str:
    roles: list[str] = []
    role_map = {
        "transportProperties": "流体物性与输运系数",
        "turbulenceProperties": "湍流模型选择",
        "thermophysicalProperties": "热物性与状态方程",
        "g": "重力方向与大小",
        "MRFProperties": "旋转参考系或搅拌区域",
        "dynamicMeshDict": "动网格运动方式",
        "mechanicalProperties": "固体弹性参数",
        "thermalProperties": "固体或热传导参数",
        "chemistryProperties": "化学反应求解设置",
        "combustionProperties": "燃烧模型设置",
        "radiationProperties": "辐射换热模型",
        "phaseProperties": "多相体系和相间模型",
        "momentumTransport": "动量输运和湍流模型",
    }
    for name in constants:
        if name in role_map:
            roles.append(f"`{name}` 定义{role_map[name]}")
    if not roles:
        return "配置重点通常位于 `0`、`constant` 和 `system` 三类文件：分别给出初始/边界条件、物性/模型参数和数值控制。"
    return "配置重点包括 " + "；".join(roles[:5]) + "。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"


def physical_problem_text(title: str, title_cn: str, local_path: str, solver: str, types: list[str]) -> str:
    hay = " ".join([title, title_cn, local_path, solver]).lower()

    def has(*words: str) -> bool:
        return all(word.lower() in hay for word in words)

    if has("flange") and has("laplacian"):
        return "本案例模拟法兰实体内的热传导过程，关注给定边界温度或热通量作用下温度场如何在复杂实体几何中扩散。它适合用来理解固体传热边界、温度梯度和稳态/瞬态扩散行为。"
    if has("potential", "cylinder"):
        return "本案例模拟圆柱周围的无旋势流，用来观察不可压理想流体绕过钝体时的速度势、流线和压力分布。它强调几何绕流造成的速度加速与压力变化，而不求解完整黏性边界层。"
    if has("potential", "pitzdaily"):
        return "本案例模拟后台阶通道内的势流，用来展示几何突扩对速度势和压力场的影响。它适合作为进入复杂通道流动前的低成本流场初始化或势流近似示例。"
    if has("scalartransport") or "标量输运" in title_cn:
        return "本案例模拟后台阶流动中的被动标量输运，关注标量在给定速度场中随对流和扩散传播的过程。它可用于理解温度、浓度或示踪剂一类标量场在复杂通道中的分布。"
    if has("combustion of") or has("chemfoam"):
        return f"本案例模拟{title_cn.replace('（常微分方程）', '')}的零维化学反应过程，将燃烧动力学写成常微分方程组求解。它重点考察温度、组分浓度和反应速率随时间的演化，适合验证反应机理和化学时间尺度。"
    if has("flame", "obstacles"):
        return "本案例模拟带障碍空间中的火焰传播过程，关注障碍物诱导的流动扰动如何改变火焰前锋、温度场和压力波传播。它用于理解阻塞空间内预混燃烧的加速与安全风险。"
    if has("shock diamonds"):
        return "本案例模拟喷流中的轴对称可压缩流动和激波钻石结构，关注欠膨胀喷流在出口后形成的膨胀波、压缩波和周期性压力结构。"
    if has("maxwell") or has("slip"):
        return "本案例模拟轴对称超声速外流，并引入 Maxwell 滑移边界模型，用于观察稀薄效应或壁面滑移条件对速度、压力和热边界行为的影响。"
    if has("porous") and (has("duct") or has("channel")):
        return "本案例模拟含多孔介质区域的通道流动，关注多孔阻力项如何造成压降、速度重分布和局部流动损失。它适合用于过滤器、蜂窝结构或多孔阻塞物的工程近似。"
    if has("helmholtz"):
        return "本案例模拟亥姆霍兹共振腔中的可压缩声学振荡，关注腔体压力、颈部速度和声压波动之间的耦合。它用于理解管腔系统的共振频率和压力响应。"
    if has("high-pressure") or "高压储罐" in title_cn:
        return "本案例模拟高压储罐泄漏后的可压缩液体/气体释放过程，关注压力骤降、射流速度和密度变化。它适合分析安全泄放、泄漏瞬态和压力波传播。"
    if has("shock tube"):
        return "本案例模拟典型激波管问题，高低压区域破膜后形成激波、接触间断和膨胀波。它是验证可压缩求解器激波捕捉能力和守恒性的标准算例。"
    if has("square") and has("bend"):
        return "本案例模拟带弯曲段的方形通道内可压缩流动，关注弯道引起的压力损失、速度偏转和湍流变量变化。"
    if has("dns") or has("direct numerical simulation"):
        return "本案例模拟周期边界条件下的湍流直接数值模拟，不使用湍流模型闭合，而是直接解析涡量和速度脉动的演化。它适合观察各向同性湍流结构和能量耗散过程。"
    if has("dsmc"):
        return "本案例模拟稀薄气体的直接模拟 Monte Carlo 过程，把气体分子运动和碰撞作为统计粒子问题处理。它适用于连续介质假设开始失效的高速、低密度或微尺度气体流动。"
    if has("molecular") or has("mdfoam") or has("mdequilibration"):
        return "本案例模拟分子动力学体系中粒子的相互作用和热平衡过程，关注原子/分子尺度下速度分布、温度、密度和壁面效应。它适合纳米通道、平衡态液体或气体微观行为分析。"
    if has("mhd") or "电磁" in title_cn:
        return "本案例模拟磁场作用下平行板间导电流体的 Hartmann 流，关注洛伦兹力如何改变速度剖面、压降和电磁阻尼。"
    if has("circuit") or "加热板" in title_cn:
        return "本案例模拟加热板或电路板周围的空气冷却过程，关注自然/强迫对流带走热量时的温度分布、速度场和热边界层。"
    if has("igloo") or "冰室" in title_cn:
        return "本案例模拟封闭冰室内冰箱周围的浮力驱动流动，关注冷热源形成的自然对流循环以及温度在室内空间中的分布。"
    if has("different temperatures") or "不同温度平板" in title_cn:
        return "本案例模拟两块不同温度平板之间的浮力驱动流动和热交换，关注温度梯度造成的自然对流、速度环流和热边界层。"
    if has("heat exchanger") or "换热器" in title_cn:
        return "本案例模拟换热器内流体与固体壁面之间的共轭传热，关注冷热流体通道、固体导热和界面热通量之间的耦合。"
    if has("multiregion") or "多固体与流体" in title_cn:
        return "本案例模拟多个固体区域与流体区域之间的共轭传热，关注固体导热、流体对流和区域界面温度连续性。"
    if has("natural convection") or "自然对流" in title_cn:
        return "本案例模拟矩形区域中的自然对流，热浮力驱动流体循环并形成温度分层。它重点观察温度场、速度场和辐射/非辐射模型对热输运的影响。"
    if has("mixer") and ("多相" in types or has("interfoam") or has("multiphase")):
        return "本案例模拟圆柱搅拌器驱动的多相液体运动，关注旋转区域诱导的剪切、界面变形和不同流体的混合/分离过程。"
    if has("mixer"):
        return "本案例模拟圆柱搅拌器周围的单相流动，关注旋转参考系或运动边界对速度场、涡结构和压力分布的影响。"
    if has("wind turbines"):
        return "本案例模拟复杂地形上风机布置后的来流绕行和尾流影响，关注地形起伏对风速分布、局部加速区和风机选址的影响。"
    if has("elbow") or "弯管" in title_cn:
        return "本案例模拟多入口弯管中的不可压瞬态流动，关注入口流股汇合、弯头二次流和压力/速度场重分布。"
    if has("cavity flow") or "方腔流动" in title_cn:
        return "本案例模拟经典顶盖驱动方腔流，移动壁面带动封闭腔体内形成主涡和角涡。它是验证不可压瞬态求解器、边界条件和网格收敛性的基础算例。"
    if has("rotating disk") or "旋转圆盘" in title_cn:
        return "本案例模拟旋转圆盘附近的黏性流动，关注旋转壁面诱导的切向速度、径向流动和近壁压力变化。"
    if has("motorcycle") or "摩托车" in title_cn:
        return "本案例模拟行驶摩托车外部绕流，关注车身几何造成的分离、尾迹、压力阻力和局部高速区域。"
    if has("shallow water") or "浅水" in title_cn:
        return "本案例模拟浅水方程控制的自由表面流动，关注地形凸起对水位、流速和波传播的影响。"
    if has("airfoil") or "翼型" in title_cn:
        return "本案例模拟二维翼型的稳态绕流，关注迎角下的速度加速、压力差和升阻力相关流动特征。"
    if has("pipe") or "管道" in title_cn:
        return "本案例模拟管道中的旋流或周期流动，关注周向速度、轴向压力梯度和周期边界对充分发展流的影响。"
    if has("buildings") or "建筑" in title_cn:
        return "本案例模拟建筑群周围的城市风环境，关注建筑遮挡、街谷加速、回流区和近地风速分布。"
    if has("funnel") or "漏斗" in title_cn:
        return "本案例模拟液滴从漏斗落下后的拉格朗日颗粒/液滴运动，关注重力、入口条件和颗粒轨迹如何形成初始喷洒状态。"
    if has("coal dust") or "煤尘" in title_cn:
        return "本案例模拟含煤尘和石灰尘混合气的点火过程，关注颗粒相、气相反应和温度升高之间的耦合。"
    if has("droplets") or "水滴" in title_cn:
        return "本案例模拟水滴注入通道后的颗粒输运过程，关注液滴在连续相流场中的惯性运动、蒸发/换热或与壁面/过滤器的相互作用。"
    if has("cyclone") or "旋风" in title_cn:
        return "本案例模拟颗粒进入旋风分离器后的旋转流动和颗粒分离过程，关注离心力驱动的颗粒迁移、壁面捕集和压力损失。"
    if has("phase change") or "相变" in title_cn:
        return "本案例模拟三通竖直通道中水的相变过程，关注液滴/蒸汽与连续相之间的热质交换以及局部时间推进对稳态收敛的影响。"
    if has("heptane") or "庚烷" in title_cn:
        return "本案例模拟庚烷喷雾燃烧过程，关注液滴雾化后的蒸发、混合、着火和温度/组分场演化。"
    if has("filter") or "过滤器" in title_cn:
        return "本案例模拟带过滤器通道中的喷水和颗粒/液滴穿过滤材过程，关注过滤区域造成的阻力、速度衰减和液滴分布。"
    if has("foamyhexmesh") or has("foamyquadmesh") or has("snappyhexmesh") or "网格" in types:
        return f"本案例演示 `{solver}` 或相关网格工具对{title_cn}的网格生成过程，重点不是求解物理场，而是观察几何捕捉、边界命名、局部加密和网格质量如何服务后续 CAE 计算。"
    if has("bubble column") or "水柱" in title_cn:
        return "本案例模拟气体注入水柱后的气泡羽流，关注气相体积分数、液体循环、相间动量交换以及层流/LES/RANS 模型对气泡柱结构的影响。"
    if has("gas into a liquid") or has("steam") or "鼓入" in title_cn:
        return "本案例模拟气体或蒸汽注入液体后的两相流动，关注射流破碎、气泡上升、相间传质/传热以及自由界面响应。"
    if has("boiling") or "沸腾" in title_cn:
        return "本案例模拟高温壁面附近的沸腾两相流，关注壁面汽泡生成、相变换热、气相体积分数和近壁温度场。"
    if has("capillary") or "毛细" in title_cn:
        return "本案例模拟毛细管或窄缝中的毛细上升，关注表面张力、接触角、重力和黏性阻力共同决定的液面高度演化。"
    if has("cavitation") or "空化" in title_cn:
        return "本案例模拟高速物体或螺旋桨附近的空化流动，关注低压区域内汽相生成、空泡分布和压力恢复过程。"
    if has("centrifugal") or "离心分离" in title_cn:
        return "本案例模拟旋转搅拌或离心作用下多相流体的分离过程，关注密度差、离心力和界面输运导致的相分布变化。"
    if has("dam-break") or "溃坝" in title_cn:
        return "本案例模拟重力作用下液柱突然坍塌后的溃坝流动，关注自由液面推进、波浪反射、空气卷吸以及多种液体之间的界面演化。"
    if has("air bubble") or "气泡膨胀" in title_cn:
        return "本案例模拟水中气泡在压力变化下的膨胀过程，关注可压缩效应、气液界面运动和压力波在水中的传播。"
    if has("fluidized bed") or "流化床" in title_cn:
        return "本案例模拟流化床中气固/液固两相运动，关注颗粒相体积分数、床层膨胀、相间阻力和流化结构随时间的演化。"
    if has("lockexchange") or "两种液体混合" in title_cn:
        return "本案例模拟两种密度或组分不同液体之间的锁交换流动，关注重力流前锋、界面卷吸和混合层发展。"
    if has("water-gas") or "水煤气" in title_cn:
        return "本案例模拟气泡柱中的水煤气变换反应，关注 CO 与水蒸气反应、气液传质、组分浓度和反应热耦合。"
    if has("oscillatingbox") or "自由液面波" in title_cn:
        return "本案例模拟浮体振荡诱导的自由液面波，关注物体运动、动网格/自由面边界和液面高度随时间的响应。"
    if has("platehole") or "应力" in title_cn:
        return "本案例模拟带孔平板在载荷或热作用下的固体变形与应力集中，关注孔边位移、等效应力和主应力分布。"

    if "多相" in types:
        return f"本案例模拟{title_cn}这一多相流问题，关注不同相之间的界面运动、相间动量交换和体积分数分布。"
    if "传热" in types:
        return f"本案例模拟{title_cn}中的热量传递过程，关注温度梯度、热通量和流动换热之间的耦合。"
    if "可压缩" in types:
        return f"本案例模拟{title_cn}这一可压缩流动问题，关注密度、压力、速度和波系结构的相互作用。"
    if "湍流" in types:
        return f"本案例模拟{title_cn}中的湍流结构，关注涡量、速度脉动、湍流模型或直接数值解析对结果的影响。"
    if "颗粒" in types:
        return f"本案例模拟{title_cn}中的离散颗粒/液滴运动，关注颗粒轨迹、相间耦合和输运过程。"
    if "结构" in types or "流固耦合" in types:
        return f"本案例模拟{title_cn}中的固体力学响应，关注位移、应力和边界载荷对结构安全性的影响。"
    return f"本案例模拟{title_cn}，用于展示该工程问题中的主要场变量、边界条件和数值求解流程。"


def tutorial_text(item: SourceItem, source_case_dir: str, local_path: str, solver: str, meta: dict[str, object]) -> dict[str, object]:
    section_zh = SECTION_ZH.get(item.section, item.section)
    solver_hint = SOLVER_HINTS.get(solver, "OpenFOAM 求解器或工具")
    fields = meta.get("fields") or []
    constants = meta.get("constants") or []
    commands = meta.get("commands") or []
    command_text = " -> ".join(commands) if commands else "Allrun"
    title_cn = title_zh(item.title)
    types = infer_types(item.section, local_path, solver, item.title)

    return {
        "intro": [
            physical_problem_text(item.title, title_cn, local_path, solver, types),
            f"数值上，该案例归入{section_zh}，使用 `{solver}`，可理解为 {solver_hint}。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
            f"{field_role_text(list(fields))}{constant_role_text(list(constants))}",
        ],
        "run": [
            f"进入下载后的案例目录：`cd OpenFOAM/{local_path}`。",
            "如需从干净状态开始，可先执行 `./Allclean`。",
            f"推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：{command_text}。",
            f"若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `{solver}`，结束时间 `{meta.get('endTime') or '未显式识别'}`，时间步长 `{meta.get('deltaT') or '未显式识别'}`，输出间隔 `{meta.get('writeInterval') or '未显式识别'}`。",
        ],
        "result": [
            "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
            "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。",
        ],
    }


def build_case_data() -> list[dict[str, object]]:
    session = requests.Session()
    session.headers.update({"User-Agent": USER_AGENT})
    items = parse_index(session)
    local_dirs = local_case_dirs()
    cases = []
    used_ids: set[str] = set()

    for item in items:
        soup = BeautifulSoup(fetch(session, item.url), "html.parser")
        body_text = soup.get_text("\n", strip=True)
        match = re.search(r"\$FOAM_TUTORIALS/([^\n]+)", body_text)
        source_case_dir = match.group(1).strip() if match else ""
        local_path = match_local_case(source_case_dir, local_dirs) if source_case_dir else ""
        if not local_path:
            continue

        case_path = OPENFOAM_ROOT / local_path
        meta = case_files(case_path)
        solver = solver_from_path(local_path, str(meta.get("application") or ""))
        case_id = slugify(local_path)
        if case_id in used_ids:
            case_id = f"{case_id}-{slugify(item.title)[:28]}"
        used_ids.add(case_id)
        download = zip_case(case_id, local_path)
        types = infer_types(item.section, local_path, solver, item.title)
        commands = list(meta.get("commands") or [])
        stack = ["OpenFOAM"]
        title_cn = title_zh(item.title)

        cases.append(
            {
                "id": case_id,
                "title": item.title,
                "titleZh": title_cn,
                "category": item.section,
                "categoryZh": SECTION_ZH.get(item.section, item.section),
                "types": types,
                "softwareStack": list(dict.fromkeys(stack)),
                "solver": solver,
                "localPath": local_path,
                "download": download,
                "images": image_data(session, soup, item.url, case_id, item.title, title_cn),
                "meta": meta,
                "tutorial": tutorial_text(item, source_case_dir, local_path, solver, meta),
            }
        )
    cases.sort(key=lambda item: (str(item["category"]), str(item["title"])))
    return cases


def json_script(cases: list[dict[str, object]]) -> str:
    payload = json.dumps(cases, ensure_ascii=False, indent=2)
    return "window.VF_OPENFOAM_CASES = " + payload + ";\n"


COMMON_STYLE = r"""
    @font-face { font-family:'Syne Local'; src:url('../assets/fonts/syne-latin.woff2') format('woff2'); font-weight:400 800; font-style:normal; font-display:swap; }
    @font-face { font-family:'DM Sans Local'; src:url('../assets/fonts/dm-sans-latin.woff2') format('woff2'); font-weight:300 600; font-style:normal; font-display:swap; }
    @font-face { font-family:'JetBrains Mono Local'; src:url('../assets/fonts/jetbrains-mono-latin.woff2') format('woff2'); font-weight:400 500; font-style:normal; font-display:swap; }
    @font-face { font-family:'Noto Sans SC Local'; src:url('../assets/fonts/noto-sans-sc-400-subset.woff2') format('woff2'); font-weight:400; font-style:normal; font-display:swap; }
    @font-face { font-family:'Noto Sans SC Local'; src:url('../assets/fonts/noto-sans-sc-600-subset.woff2') format('woff2'); font-weight:600; font-style:normal; font-display:swap; }
    @font-face { font-family:'Noto Sans SC Local'; src:url('../assets/fonts/noto-sans-sc-700-subset.woff2') format('woff2'); font-weight:700; font-style:normal; font-display:swap; }
    @font-face { font-family:'Noto Sans SC Local'; src:url('../assets/fonts/noto-sans-sc-800-subset.woff2') format('woff2'); font-weight:800; font-style:normal; font-display:swap; }
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
    :root{
      --bg:#05080F;--bg2:#09101C;--bg3:#0F1828;--border:rgba(255,255,255,.07);--border-hi:rgba(34,211,238,.28);
      --cyan:#22D3EE;--cyan-glow:rgba(34,211,238,.18);--purple:#A78BFA;--text:#E8EFF8;--text2:#8B98AE;--text3:#445065;
      --display:'Syne Local','Noto Sans SC Local',sans-serif;--body:'DM Sans Local','Noto Sans SC Local',sans-serif;--mono:'JetBrains Mono Local','Noto Sans SC Local',monospace;--cjk:'Noto Sans SC Local','Noto Sans CJK SC','Source Han Sans SC',sans-serif;--r:12px;--r-sm:8px;--ease:cubic-bezier(.4,0,.2,1)
    }
    html{scroll-behavior:smooth}body{background:var(--bg);color:var(--text);font-family:var(--body);line-height:1.65;overflow-x:hidden}::-webkit-scrollbar{width:5px}::-webkit-scrollbar-track{background:var(--bg)}::-webkit-scrollbar-thumb{background:var(--text3);border-radius:3px}
    .wrap{max-width:1200px;margin:0 auto;padding:0 28px}.en,.zh{display:inline}body.lang-zh .en{display:none}body.lang-en .zh{display:none}.zh,body.lang-zh .doc{font-family:var(--cjk)}
    .reveal{opacity:0;transform:translateY(24px);transition:opacity .65s var(--ease),transform .65s var(--ease)}.reveal.on{opacity:1;transform:none}.reveal.d1{transition-delay:.1s}.reveal.d2{transition-delay:.2s}
    #nav{position:fixed;top:0;left:0;right:0;z-index:90;padding:22px 0;transition:padding .3s var(--ease),background .3s var(--ease),border-color .3s var(--ease);border-bottom:1px solid transparent}
    #nav.stuck{padding:14px 0;background:rgba(5,8,15,.85);backdrop-filter:blur(20px) saturate(1.4);border-color:var(--border)}.nav-row{display:flex;align-items:center;max-width:1200px;margin:0 auto;padding:0 28px}.nav-logo{display:flex;align-items:center;gap:10px;text-decoration:none;flex-shrink:0;margin-right:auto}.nav-logo img{height:30px}.nav-logo-name{font-family:var(--display);font-weight:700;font-size:19px;letter-spacing:-.02em;color:var(--text)}.nav-links{display:flex;align-items:center;gap:32px;margin-right:32px}.nav-links a{font-size:14px;color:var(--text2);text-decoration:none;transition:color .2s}.nav-links a:hover{color:var(--text)}.nav-btns{display:flex;align-items:center;gap:10px}.btn-lang,.btn-theme{display:inline-flex;align-items:center;justify-content:center;padding:7px 14px;border:1px solid var(--border);background:none;color:var(--text2);font-family:var(--mono);font-size:11px;border-radius:6px;cursor:pointer;transition:.25s}.btn-lang:hover,.btn-theme:hover{border-color:var(--border-hi);color:var(--cyan)}.btn-dl{padding:8px 20px;background:var(--cyan);color:#05080F;font-weight:600;font-size:13px;border-radius:var(--r-sm);text-decoration:none;transition:.25s}.btn-dl:hover{background:#38BDF8;box-shadow:0 0 24px rgba(34,211,238,.4)}
    .doc-hero{position:relative;overflow:hidden;padding:150px 0 74px;border-bottom:1px solid var(--border);background:var(--bg)}.doc-hero::before{content:'';position:absolute;inset:0;pointer-events:none;background-image:linear-gradient(rgba(255,255,255,.016) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.016) 1px,transparent 1px);background-size:64px 64px}.doc-hero::after{content:'';position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse 70% 60% at 50% 50%,transparent 0%,var(--bg) 100%)}.doc-hero .wrap{position:relative;z-index:2}.eyebrow{display:inline-flex;align-items:center;gap:10px;font-family:var(--mono);font-size:11px;letter-spacing:.15em;text-transform:uppercase;color:var(--cyan);margin-bottom:22px}.eyebrow::before{content:'';width:20px;height:1px;background:var(--cyan)}h1{font-family:var(--display);font-size:clamp(44px,8vw,86px);font-weight:800;letter-spacing:-.05em;line-height:.95;margin-bottom:24px;background:linear-gradient(135deg,#fff 30%,var(--cyan) 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}.hero-sub{max-width:790px;color:var(--text2);font-size:17px;line-height:1.85}
    .chip{display:inline-flex;align-items:center;gap:6px;border:1px solid var(--border);border-radius:999px;padding:5px 10px;font-family:var(--mono);font-size:10px;color:var(--text2);text-transform:uppercase;letter-spacing:.05em}.chip.cyan{border-color:rgba(34,211,238,.24);color:var(--cyan);background:rgba(34,211,238,.06)}
    footer{border-top:1px solid var(--border);padding:34px 0;color:var(--text3);font-size:12px}.foot-row{display:flex;align-items:center;justify-content:space-between;gap:18px}.foot-row a{color:var(--text2);text-decoration:none}.foot-row a:hover{color:var(--cyan)}
    body.theme-light{--bg:#EAF1F7;--bg2:#DEE9F2;--bg3:#CAD9E6;--border:rgba(15,23,42,.08);--border-hi:rgba(34,211,238,.50);--text:#0F172A;--text2:#475569;--text3:#94A3B8;--cyan-glow:rgba(34,211,238,.15)}body.theme-light h1{background:linear-gradient(135deg,#0F172A 30%,var(--cyan) 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}body.theme-light .doc-hero::before{background-image:linear-gradient(rgba(0,0,0,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.06) 1px,transparent 1px)}body.theme-light #nav.stuck{background:rgba(234,241,247,.9)}
    @media(max-width:768px){.nav-links{display:none}}@media(max-width:480px){.wrap,.nav-row{padding:0 16px}#nav{padding:16px 0}#nav.stuck{padding:10px 0}.nav-logo img{height:26px}.nav-logo-name{font-size:17px}.btn-lang,.btn-theme{font-size:10px;padding:6px 10px}.btn-dl{font-size:12px;padding:7px 12px}.doc-hero{padding:104px 0 48px}.hero-sub{font-size:14px;line-height:1.75}.foot-row{flex-direction:column;align-items:flex-start}}
"""


NAV_HTML = r"""
<nav id="nav">
  <div class="nav-row">
    <a href="../index.html#hero" class="nav-logo">
      <img src="../assets/logo.svg" alt="VibeFlow">
      <span class="nav-logo-name">VibeFlow</span>
    </a>
    <nav class="nav-links">
      <a href="../index.html#modes"><span class="en">Modes</span><span class="zh">模式</span></a>
      <a href="../index.html#features"><span class="en">Features</span><span class="zh">功能</span></a>
      <a href="../index.html#workflow"><span class="en">Workflow</span><span class="zh">工作流</span></a>
      <a href="../index.html#gallery"><span class="en">Gallery</span><span class="zh">预览</span></a>
      <a href="index.html"><span class="en">Cases</span><span class="zh">案例库</span></a>
      <a href="../index.html#demo"><span class="en">Demo</span><span class="zh">演示</span></a>
      <a href="../index.html#pricing"><span class="en">Pricing</span><span class="zh">定价</span></a>
      <a href="../index.html#faq"><span class="en">FAQ</span><span class="zh">常见问题</span></a>
      <a href="../privacy.html"><span class="en">Privacy</span><span class="zh">隐私</span></a>
      <a href="../index.html#links"><span class="en">Docs</span><span class="zh">文档</span></a>
    </nav>
    <div class="nav-btns">
      <button class="btn-lang" id="langBtn" onclick="toggleLang()">English</button>
      <button class="btn-theme" id="themeBtn" onclick="toggleTheme()" title="Toggle theme" aria-label="Toggle theme">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
      </button>
      <a href="../index.html#download" class="btn-dl"><span class="en">Get Studio</span><span class="zh">下载 Studio</span></a>
    </div>
  </div>
</nav>
"""


BASE_SCRIPT = r"""
let lang = 'zh';
function toggleLang(){
  lang = lang === 'en' ? 'zh' : 'en';
  document.body.classList.toggle('lang-zh', lang === 'zh');
  document.body.classList.toggle('lang-en', lang === 'en');
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  document.getElementById('langBtn').textContent = lang === 'en' ? '中文' : 'English';
  if (typeof render === 'function') render();
}
document.body.classList.add('lang-zh');
let theme = localStorage.getItem('vf-theme') || 'dark';
function applyTheme(){
  document.body.classList.toggle('theme-light', theme === 'light');
  const btn = document.getElementById('themeBtn');
  if(btn){
    btn.innerHTML = theme === 'light'
      ? '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>'
      : '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>';
    btn.title = theme === 'light' ? 'Switch to Dark' : 'Switch to Light';
  }
}
function toggleTheme(){ theme = theme === 'dark' ? 'light' : 'dark'; localStorage.setItem('vf-theme', theme); applyTheme(); }
applyTheme();
const navEl = document.getElementById('nav');
window.addEventListener('scroll',()=>{navEl.classList.toggle('stuck',scrollY>50)},{passive:true});
const ro = new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('on')}),{threshold:.1});
document.querySelectorAll('.reveal').forEach(el=>ro.observe(el));
"""


def case_library_html() -> str:
    return f"""<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="VibeFlow OpenFOAM case library with searchable tutorial cases.">
  <title>VibeFlow — 案例库</title>
  <link rel="icon" href="../assets/logo.svg" type="image/svg+xml">
  <style>
{COMMON_STYLE}
    .library-tools{{padding:42px 0;background:var(--bg2);border-bottom:1px solid var(--border)}}
    .search-grid{{display:grid;grid-template-columns:minmax(220px,1fr) 220px 220px;gap:12px;align-items:end}}
    .field label{{display:block;font-family:var(--mono);font-size:10px;color:var(--text3);letter-spacing:.12em;text-transform:uppercase;margin-bottom:8px}}
    .field input,.field select{{width:100%;height:44px;border:1px solid var(--border);border-radius:var(--r-sm);background:var(--bg3);color:var(--text);font:14px var(--body);padding:0 12px;outline:none;transition:.2s}}
    .field input:focus,.field select:focus{{border-color:var(--border-hi);box-shadow:0 0 0 3px rgba(34,211,238,.08)}}
    .library-body{{padding:56px 0 96px}}
    .stat-row{{display:flex;justify-content:space-between;gap:18px;align-items:center;margin-bottom:24px;color:var(--text3);font:12px var(--mono);letter-spacing:.05em;text-transform:uppercase}}
    .case-grid{{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}}
    .case-card{{min-height:320px;display:flex;flex-direction:column;border:1px solid var(--border);border-radius:var(--r);background:var(--bg2);overflow:hidden;text-decoration:none;color:inherit;transition:.28s var(--ease)}}
    .case-card:hover{{border-color:var(--border-hi);background:var(--bg3);transform:translateY(-4px)}}
    .case-thumb{{height:134px;position:relative;overflow:hidden;background:#020811;border-bottom:1px solid var(--border)}}
    .case-thumb img{{width:100%;height:100%;object-fit:cover;display:block;opacity:.92;transition:transform .35s var(--ease)}}
    .case-card:hover .case-thumb img{{transform:scale(1.035)}}
    .case-thumb.empty{{display:flex;align-items:center;justify-content:center;background:radial-gradient(circle at 50% 30%,rgba(34,211,238,.16),transparent 60%),var(--bg3)}}
    .case-thumb.empty span{{font-family:var(--mono);font-size:11px;color:var(--cyan);letter-spacing:.1em;text-transform:uppercase}}
    .case-body{{padding:20px 20px 22px;display:flex;flex-direction:column;flex:1}}
    .case-title{{font-family:var(--display);font-size:18px;font-weight:740;letter-spacing:-.02em;line-height:1.25;margin:12px 0;color:var(--text)}}
    .case-desc{{font-size:13px;color:var(--text2);line-height:1.7;margin-bottom:18px}}
    .case-tags{{display:flex;flex-wrap:wrap;gap:7px;margin-top:auto}}
    .case-tags .chip{{font-size:9px;padding:4px 8px}}
    .empty-state{{padding:48px;border:1px solid var(--border);border-radius:var(--r);background:var(--bg2);text-align:center;color:var(--text2)}}
    @media(max-width:1024px){{.case-grid{{grid-template-columns:repeat(2,minmax(0,1fr))}}.search-grid{{grid-template-columns:1fr 1fr}}}}
    @media(max-width:620px){{.case-grid,.search-grid{{grid-template-columns:1fr}}.library-body{{padding:36px 0 70px}}.case-thumb{{height:160px}}}}
  </style>
</head>
<body class="lang-zh">
{NAV_HTML}
<main>
  <header class="doc-hero">
    <div class="wrap">
      <div class="eyebrow reveal"><span class="en">Case Library</span><span class="zh">案例库</span></div>
      <h1 class="reveal d1"><span class="en">Search CAE Cases</span><span class="zh">检索CAE案例</span></h1>
    </div>
  </header>
  <section class="library-tools">
    <div class="wrap">
      <div class="search-grid">
        <div class="field"><label><span class="en">Search</span><span class="zh">名称搜索</span></label><input id="q" type="search" placeholder="cavity, damBreak, interFoam..."></div>
        <div class="field"><label><span class="en">Case Type</span><span class="zh">算例类型</span></label><select id="typeSelect"><option value="">All types</option></select></div>
        <div class="field"><label><span class="en">Software Stack</span><span class="zh">软件栈</span></label><select id="stackSelect"><option value="">All stacks</option></select></div>
      </div>
    </div>
  </section>
  <section class="library-body">
    <div class="wrap">
      <div class="stat-row"><span id="caseCount"></span><span><span class="en">VibeFlow CAE Cases</span><span class="zh">VibeFlow CAE 案例库</span></span></div>
      <div class="case-grid" id="caseGrid"></div>
    </div>
  </section>
</main>
<footer><div class="wrap"><div class="foot-row"><span>© 2026 VibeFlow</span><a href="../index.html"><span class="en">Back to VibeFlow</span><span class="zh">返回 VibeFlow 首页</span></a></div></div></footer>
<script src="data/openfoam-cases.js"></script>
<script>
{BASE_SCRIPT}
const q = document.getElementById('q');
const typeSelect = document.getElementById('typeSelect');
const stackSelect = document.getElementById('stackSelect');
const grid = document.getElementById('caseGrid');
const count = document.getElementById('caseCount');
function allUnique(key){{
  return [...new Set(window.VF_OPENFOAM_CASES.flatMap(c => Array.isArray(c[key]) ? c[key] : [c[key]]).filter(Boolean))].sort((a,b)=>a.localeCompare(b));
}}
function setupFilters(){{
  allUnique('types').forEach(type => {{
    const opt = document.createElement('option'); opt.value = type; opt.textContent = type; typeSelect.appendChild(opt);
  }});
  allUnique('softwareStack').forEach(stack => {{ const opt = document.createElement('option'); opt.value = stack; opt.textContent = stack; stackSelect.appendChild(opt); }});
}}
function localizedCategory(c){{ return lang === 'zh' ? c.categoryZh : c.category; }}
function localizedTitle(c){{ return lang === 'zh' ? (c.titleZh || c.title) : c.title; }}
function render(){{
  const term = q.value.trim().toLowerCase();
  const type = typeSelect.value;
  const stack = stackSelect.value;
  const filtered = window.VF_OPENFOAM_CASES.filter(c => {{
    const hay = [c.title,c.titleZh,c.localPath,c.solver,c.category,c.categoryZh,...c.types,...c.softwareStack].join(' ').toLowerCase();
    return (!term || hay.includes(term)) && (!type || c.types.includes(type)) && (!stack || c.softwareStack.includes(stack));
  }});
  count.textContent = lang === 'zh' ? `显示 ${{filtered.length}} / ${{window.VF_OPENFOAM_CASES.length}} 个案例` : `Showing ${{filtered.length}} / ${{window.VF_OPENFOAM_CASES.length}} cases`;
  grid.innerHTML = filtered.length ? filtered.map(c => `
    <a class="case-card reveal on" href="openfoam-case.html?id=${{encodeURIComponent(c.id)}}">
      ${{c.images && c.images[0] ? `<div class="case-thumb"><img src="${{c.images[0].url}}" alt="${{c.images[0].alt}}"></div>` : `<div class="case-thumb empty"><span>OpenFOAM</span></div>`}}
      <div class="case-body">
        <div class="chip cyan">${{localizedCategory(c)}}</div>
        <h2 class="case-title">${{localizedTitle(c)}}</h2>
        <p class="case-desc">${{lang === 'zh' ? `求解器：${{c.solver}}；本地目录：${{c.localPath}}。` : `Solver: ${{c.solver}}; local case: ${{c.localPath}}.`}}</p>
        <div class="case-tags">${{c.types.slice(0,4).map(t=>`<span class="chip">${{t}}</span>`).join('')}}${{c.softwareStack.slice(0,3).map(t=>`<span class="chip">${{t}}</span>`).join('')}}</div>
      </div>
    </a>`).join('') : `<div class="empty-state"><span class="en">No matching cases.</span><span class="zh">没有匹配的案例。</span></div>`;
}}
q.addEventListener('input', render); typeSelect.addEventListener('change', render); stackSelect.addEventListener('change', render);
setupFilters(); render();
</script>
</body>
</html>
"""


def case_detail_html() -> str:
    return f"""<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="VibeFlow OpenFOAM case tutorial.">
  <title>VibeFlow — OpenFOAM 案例</title>
  <link rel="icon" href="../assets/logo.svg" type="image/svg+xml">
  <style>
{COMMON_STYLE}
    .case-toolbar{{display:flex;flex-wrap:wrap;gap:10px;margin-top:28px}}.btn-primary,.btn-ghost{{display:inline-flex;align-items:center;gap:8px;padding:12px 18px;border-radius:var(--r-sm);font-size:14px;font-weight:600;text-decoration:none;transition:.25s}}.btn-primary{{background:var(--cyan);color:#05080F}}.btn-primary:hover{{background:#38BDF8;box-shadow:0 8px 24px rgba(34,211,238,.28)}}.btn-ghost{{border:1px solid var(--border);color:var(--text2)}}.btn-ghost:hover{{border-color:var(--border-hi);color:var(--text)}}
    .detail-layout{{display:grid;grid-template-columns:minmax(0,1fr) 320px;gap:54px;padding:72px 0 110px}}.doc{{min-width:0}}.doc-section{{padding:0 0 42px;margin-bottom:42px;border-bottom:1px solid var(--border);scroll-margin-top:110px}}.doc-section h2{{font-family:var(--display);font-size:clamp(24px,3.5vw,34px);font-weight:750;letter-spacing:-.03em;line-height:1.18;margin-bottom:18px}}.doc-section p,.doc-section li{{color:var(--text2);font-size:15px;line-height:1.9}}.doc-section ul,.doc-section ol{{margin:16px 0 0 20px}}.doc-section li{{margin:9px 0;padding-left:4px}}code{{font-family:var(--mono);font-size:12px;color:var(--cyan);background:rgba(34,211,238,.07);padding:2px 6px;border-radius:4px}}
    .side{{position:sticky;top:110px;align-self:start;border-top:1px solid var(--border);border-bottom:1px solid var(--border);padding:22px 0}}.side h3{{font-family:var(--mono);font-size:10px;color:var(--text3);letter-spacing:.14em;text-transform:uppercase;margin-bottom:14px}}.meta-list{{display:flex;flex-direction:column;gap:12px}}.meta-row{{font-size:13px;color:var(--text2);line-height:1.5}}.meta-row b{{display:block;font-family:var(--mono);font-size:10px;color:var(--text3);letter-spacing:.1em;text-transform:uppercase;margin-bottom:3px}}.tagline{{display:flex;flex-wrap:wrap;gap:8px;margin-top:18px}}
    .result-grid{{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;margin-top:22px}}.result-card{{border:1px solid var(--border);border-radius:var(--r-sm);overflow:hidden;background:var(--bg2);text-decoration:none}}.result-card img{{width:100%;aspect-ratio:16/10;object-fit:cover;display:block;background:#020811}}.result-card span{{display:block;padding:10px 12px;color:var(--text2);font-size:12px;line-height:1.5}}
    @media(max-width:900px){{.detail-layout{{grid-template-columns:1fr;gap:24px}}.side{{position:static}}}}@media(max-width:620px){{.detail-layout{{padding:42px 0 70px}}.result-grid{{grid-template-columns:1fr}}}}
  </style>
</head>
<body class="lang-zh">
{NAV_HTML}
<main id="caseRoot"></main>
<footer><div class="wrap"><div class="foot-row"><span>© 2026 VibeFlow</span><a href="index.html"><span class="en">Back to Case Library</span><span class="zh">返回案例库</span></a></div></div></footer>
<script src="data/openfoam-cases.js"></script>
<script>
{BASE_SCRIPT}
function getCase(){{ const id = new URLSearchParams(location.search).get('id'); return window.VF_OPENFOAM_CASES.find(c => c.id === id) || window.VF_OPENFOAM_CASES[0]; }}
function list(items){{ return (items || []).map(item => `<li>${{item}}</li>`).join(''); }}
function chips(items){{ return (items || []).map(item => `<span class="chip">${{item}}</span>`).join(''); }}
function localizedTitle(c){{ return lang === 'zh' ? (c.titleZh || c.title) : c.title; }}
function render(){{
  const c = getCase();
  const caseTitle = localizedTitle(c);
  document.title = `VibeFlow — ${{caseTitle}}`;
  const introTitle = lang === 'zh' ? '介绍：算例配置和参数' : 'Introduction: Case Setup and Parameters';
  const runTitle = lang === 'zh' ? '如何运行' : 'How to Run';
  const resultTitle = lang === 'zh' ? '结果' : 'Results';
  const t = c.tutorial;
  document.getElementById('caseRoot').innerHTML = `
    <header class="doc-hero">
      <div class="wrap">
        <div class="eyebrow reveal on"><span class="en">OpenFOAM Case</span><span class="zh">OpenFOAM 案例</span></div>
        <h1 class="reveal on d1">${{caseTitle}}</h1>
        <div class="case-toolbar">
          <a class="btn-primary" href="${{c.download}}" download><span class="en">Download Case</span><span class="zh">下载算例</span></a>
          <a class="btn-ghost" href="index.html"><span class="en">Back to Library</span><span class="zh">返回案例库</span></a>
        </div>
      </div>
    </header>
    <div class="wrap">
      <div class="detail-layout">
        <article class="doc">
          <section class="doc-section"><h2>${{introTitle}}</h2>${{t.intro.map(p => `<p>${{p}}</p>`).join('')}}</section>
          <section class="doc-section"><h2>${{runTitle}}</h2><ol>${{list(t.run)}}</ol></section>
          <section class="doc-section"><h2>${{resultTitle}}</h2>${{t.result.map(p => `<p>${{p}}</p>`).join('')}}<div class="result-grid">${{(c.images || []).map(img => {{ const caption = lang === 'zh' ? (img.altZh || img.alt) : img.alt; return `<a class="result-card" href="${{img.url}}" target="_blank" rel="noopener"><img src="${{img.url}}" alt="${{caption}}"><span>${{caption}}</span></a>`; }}).join('')}}</div></section>
        </article>
        <aside class="side">
          <h3><span class="en">Case Metadata</span><span class="zh">案例元数据</span></h3>
          <div class="meta-list">
            <div class="meta-row"><b>Solver</b>${{c.solver}}</div>
            <div class="meta-row"><b>Local Path</b><code>${{c.localPath}}</code></div>
            <div class="meta-row"><b>Fields</b>${{(c.meta.fields || []).join(', ') || '-'}}</div>
            <div class="meta-row"><b>Constants</b>${{(c.meta.constants || []).join(', ') || '-'}}</div>
          </div>
          <div class="tagline">${{chips(c.types)}}${{chips(c.softwareStack)}}</div>
        </aside>
      </div>
    </div>`;
}}
render();
</script>
</body>
</html>
"""


def write_pages(cases: list[dict[str, object]]) -> None:
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    (DATA_DIR / "openfoam-cases.js").write_text(json_script(cases), encoding="utf-8")
    (CASE_SITE_DIR / "index.html").write_text(case_library_html(), encoding="utf-8")
    (CASE_SITE_DIR / "openfoam-case.html").write_text(case_detail_html(), encoding="utf-8")


def main() -> None:
    if not OPENFOAM_ROOT.exists():
        raise SystemExit(f"Missing {OPENFOAM_ROOT}")
    cases = build_case_data()
    write_pages(cases)
    print(f"Generated {len(cases)} OpenFOAM case records")
    print(f"Data: {DATA_DIR / 'openfoam-cases.js'}")
    print(f"Downloads: {DOWNLOAD_DIR}")


if __name__ == "__main__":
    main()
