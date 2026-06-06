window.VF_OPENFOAM_CASES = [
  {
    "id": "basic-laplacianfoam-flange",
    "title": "Heat conduction analysis of flange",
    "titleZh": "法兰热传导分析",
    "category": "Basics",
    "categoryZh": "基础算例",
    "types": [
      "基础",
      "传热"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "laplacianFoam",
    "localPath": "basic/laplacianFoam/flange",
    "download": "downloads/openfoam/basic-laplacianfoam-flange.zip",
    "images": [
      {
        "url": "assets/openfoam/basic-laplacianfoam-flange/result-01-frange-boundary1.png",
        "alt": "Heat conduction analysis of flange result 1",
        "altZh": "法兰热传导分析结果图 1"
      },
      {
        "url": "assets/openfoam/basic-laplacianfoam-flange/result-02-frange-boundary2.png",
        "alt": "Heat conduction analysis of flange result 2",
        "altZh": "法兰热传导分析结果图 2"
      },
      {
        "url": "assets/openfoam/basic-laplacianfoam-flange/result-03-frange-mesh.png",
        "alt": "Heat conduction analysis of flange result 3",
        "altZh": "法兰热传导分析结果图 3"
      },
      {
        "url": "assets/openfoam/basic-laplacianfoam-flange/result-04-frange-result.png",
        "alt": "Heat conduction analysis of flange result 4",
        "altZh": "法兰热传导分析结果图 4"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "T"
      ],
      "constants": [
        "transportProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟法兰实体内的热传导过程，关注给定边界温度或热通量作用下温度场如何在复杂实体几何中扩散。它适合用来理解固体传热边界、温度梯度和稳态/瞬态扩散行为。",
        "数值上，该案例归入基础算例，使用 `laplacianFoam`，可理解为 拉普拉斯/热传导求解器。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括温度场 `T`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `transportProperties` 定义流体物性与输运系数。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/basic/laplacianFoam/flange`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `laplacianFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "basic-potentialfoam-cylinder",
    "title": "Potential flow around a cylinder",
    "titleZh": "圆柱绕流势流计算",
    "category": "Basics",
    "categoryZh": "基础算例",
    "types": [
      "基础"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "potentialFoam",
    "localPath": "basic/potentialFoam/cylinder",
    "download": "downloads/openfoam/basic-potentialfoam-cylinder.zip",
    "images": [
      {
        "url": "assets/openfoam/basic-potentialfoam-cylinder/result-01-cylinder-boundary.png",
        "alt": "Potential flow around a cylinder result 1",
        "altZh": "圆柱绕流势流计算结果图 1"
      },
      {
        "url": "assets/openfoam/basic-potentialfoam-cylinder/result-02-cylinder-mesh.png",
        "alt": "Potential flow around a cylinder result 2",
        "altZh": "圆柱绕流势流计算结果图 2"
      },
      {
        "url": "assets/openfoam/basic-potentialfoam-cylinder/result-03-paraview-enable-streamfunction.png",
        "alt": "Potential flow around a cylinder result 3",
        "altZh": "圆柱绕流势流计算结果图 3"
      },
      {
        "url": "assets/openfoam/basic-potentialfoam-cylinder/result-04-cylinder-u.png",
        "alt": "Potential flow around a cylinder result 4",
        "altZh": "圆柱绕流势流计算结果图 4"
      },
      {
        "url": "assets/openfoam/basic-potentialfoam-cylinder/result-05-cylinder-p.png",
        "alt": "Potential flow around a cylinder result 5",
        "altZh": "圆柱绕流势流计算结果图 5"
      },
      {
        "url": "assets/openfoam/basic-potentialfoam-cylinder/result-06-cylinder-streamfunction.png",
        "alt": "Potential flow around a cylinder result 6",
        "altZh": "圆柱绕流势流计算结果图 6"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "U",
        "p"
      ],
      "constants": [],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟圆柱周围的无旋势流，用来观察不可压理想流体绕过钝体时的速度势、流线和压力分布。它强调几何绕流造成的速度加速与压力变化，而不求解完整黏性边界层。",
        "数值上，该案例归入基础算例，使用 `potentialFoam`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括速度场 `U`、压力变量 `p`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点通常位于 `0`、`constant` 和 `system` 三类文件：分别给出初始/边界条件、物性/模型参数和数值控制。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/basic/potentialFoam/cylinder`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `potentialFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "basic-potentialfoam-pitzdaily",
    "title": "Potential flow in backstep geometry",
    "titleZh": "后台阶几何中的势流计算",
    "category": "Basics",
    "categoryZh": "基础算例",
    "types": [
      "基础"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "potentialFoam",
    "localPath": "basic/potentialFoam/pitzDaily",
    "download": "downloads/openfoam/basic-potentialfoam-pitzdaily.zip",
    "images": [
      {
        "url": "assets/openfoam/basic-potentialfoam-pitzdaily/result-01-pitzdaily-mesh.png",
        "alt": "Potential flow in backstep geometry result 1",
        "altZh": "后台阶几何中的势流计算结果图 1"
      },
      {
        "url": "assets/openfoam/basic-potentialfoam-pitzdaily/result-02-paraview-enable-streamfunction.png",
        "alt": "Potential flow in backstep geometry result 2",
        "altZh": "后台阶几何中的势流计算结果图 2"
      },
      {
        "url": "assets/openfoam/basic-potentialfoam-pitzdaily/result-03-pitzdaily-u.png",
        "alt": "Potential flow in backstep geometry result 3",
        "altZh": "后台阶几何中的势流计算结果图 3"
      },
      {
        "url": "assets/openfoam/basic-potentialfoam-pitzdaily/result-04-pitzdaily-p.png",
        "alt": "Potential flow in backstep geometry result 4",
        "altZh": "后台阶几何中的势流计算结果图 4"
      },
      {
        "url": "assets/openfoam/basic-potentialfoam-pitzdaily/result-05-pitzdaily-streamfunction.png",
        "alt": "Potential flow in backstep geometry result 5",
        "altZh": "后台阶几何中的势流计算结果图 5"
      },
      {
        "url": "assets/openfoam/basic-potentialfoam-pitzdaily/result-06-pitzdaily-u-vector-zoom.png",
        "alt": "Potential flow in backstep geometry result 6",
        "altZh": "后台阶几何中的势流计算结果图 6"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "U",
        "p"
      ],
      "constants": [],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟后台阶通道内的势流，用来展示几何突扩对速度势和压力场的影响。它适合作为进入复杂通道流动前的低成本流场初始化或势流近似示例。",
        "数值上，该案例归入基础算例，使用 `potentialFoam`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括速度场 `U`、压力变量 `p`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点通常位于 `0`、`constant` 和 `system` 三类文件：分别给出初始/边界条件、物性/模型参数和数值控制。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/basic/potentialFoam/pitzDaily`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `potentialFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "basic-scalartransportfoam",
    "title": "Scalar transport in backstep flow",
    "titleZh": "后台阶流动中的标量输运",
    "category": "Basics",
    "categoryZh": "基础算例",
    "types": [
      "基础"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "scalarTransportFoam",
    "localPath": "basic/scalarTransportFoam",
    "download": "downloads/openfoam/basic-scalartransportfoam.zip",
    "images": [
      {
        "url": "assets/openfoam/basic-scalartransportfoam/result-01-pitzdaily-caliculatedu.png",
        "alt": "Scalar transport in backstep flow result 1",
        "altZh": "后台阶流动中的标量输运结果图 1"
      },
      {
        "url": "assets/openfoam/basic-scalartransportfoam/result-02-pitzdaily-mesh.png",
        "alt": "Scalar transport in backstep flow result 2",
        "altZh": "后台阶流动中的标量输运结果图 2"
      },
      {
        "url": "assets/openfoam/basic-scalartransportfoam/result-03-paraview-enable-t.png",
        "alt": "Scalar transport in backstep flow result 3",
        "altZh": "后台阶流动中的标量输运结果图 3"
      },
      {
        "url": "assets/openfoam/basic-scalartransportfoam/result-04-pitzdaily-t-0.png",
        "alt": "Scalar transport in backstep flow result 4",
        "altZh": "后台阶流动中的标量输运结果图 4"
      },
      {
        "url": "assets/openfoam/basic-scalartransportfoam/result-05-pitzdaily-t-0-02.png",
        "alt": "Scalar transport in backstep flow result 5",
        "altZh": "后台阶流动中的标量输运结果图 5"
      },
      {
        "url": "assets/openfoam/basic-scalartransportfoam/result-06-pitzdaily-t-0-1.png",
        "alt": "Scalar transport in backstep flow result 6",
        "altZh": "后台阶流动中的标量输运结果图 6"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [],
      "constants": [],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟后台阶流动中的被动标量输运，关注标量在给定速度场中随对流和扩散传播的过程。它可用于理解温度、浓度或示踪剂一类标量场在复杂通道中的分布。",
        "数值上，该案例归入基础算例，使用 `scalarTransportFoam`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要结果变量会在运行后的时间目录中生成，可重点查看速度、压力、温度、相分数或位移等与物理问题对应的场量。配置重点通常位于 `0`、`constant` 和 `system` 三类文件：分别给出初始/边界条件、物性/模型参数和数值控制。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/basic/scalarTransportFoam`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `scalarTransportFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "combustion-chemfoam-h2",
    "title": "Combustion of hydrogen (Ordinary differential equations)",
    "titleZh": "氢气燃烧（常微分方程）",
    "category": "Combustion",
    "categoryZh": "燃烧",
    "types": [
      "燃烧"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "chemFoam",
    "localPath": "combustion/chemFoam/h2",
    "download": "downloads/openfoam/combustion-chemfoam-h2.zip",
    "images": [
      {
        "url": "assets/openfoam/combustion-chemfoam-h2/result-01-combustion-chemfoam-h2-of_vs_chemkinii.png",
        "alt": "Combustion of hydrogen (Ordinary differential equations) result 1",
        "altZh": "氢气燃烧（常微分方程）结果图 1"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [],
      "constants": [
        "chemistryProperties",
        "initialConditions",
        "thermophysicalProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟氢气燃烧的零维化学反应过程，将燃烧动力学写成常微分方程组求解。它重点考察温度、组分浓度和反应速率随时间的演化，适合验证反应机理和化学时间尺度。",
        "数值上，该案例归入燃烧，使用 `chemFoam`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要结果变量会在运行后的时间目录中生成，可重点查看速度、压力、温度、相分数或位移等与物理问题对应的场量。配置重点包括 `chemistryProperties` 定义化学反应求解设置；`thermophysicalProperties` 定义热物性与状态方程。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/combustion/chemFoam/h2`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `chemFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "combustion-chemfoam-ic8h18",
    "title": "Combustion of isooctane (Ordinary differential equations)",
    "titleZh": "异辛烷燃烧（常微分方程）",
    "category": "Combustion",
    "categoryZh": "燃烧",
    "types": [
      "燃烧"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "chemFoam",
    "localPath": "combustion/chemFoam/ic8h18",
    "download": "downloads/openfoam/combustion-chemfoam-ic8h18.zip",
    "images": [
      {
        "url": "assets/openfoam/combustion-chemfoam-ic8h18/result-01-combustion-chemfoam-ic8h18-of_vs_chemkinii.png",
        "alt": "Combustion of isooctane (Ordinary differential equations) result 1",
        "altZh": "异辛烷燃烧（常微分方程）结果图 1"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [],
      "constants": [
        "chemistryProperties",
        "initialConditions",
        "thermophysicalProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟异辛烷燃烧的零维化学反应过程，将燃烧动力学写成常微分方程组求解。它重点考察温度、组分浓度和反应速率随时间的演化，适合验证反应机理和化学时间尺度。",
        "数值上，该案例归入燃烧，使用 `chemFoam`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要结果变量会在运行后的时间目录中生成，可重点查看速度、压力、温度、相分数或位移等与物理问题对应的场量。配置重点包括 `chemistryProperties` 定义化学反应求解设置；`thermophysicalProperties` 定义热物性与状态方程。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/combustion/chemFoam/ic8h18`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `chemFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "combustion-chemfoam-gri",
    "title": "Combustion of methane (Ordinary differential equations)",
    "titleZh": "甲烷燃烧（常微分方程）",
    "category": "Combustion",
    "categoryZh": "燃烧",
    "types": [
      "燃烧"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "chemFoam",
    "localPath": "combustion/chemFoam/gri",
    "download": "downloads/openfoam/combustion-chemfoam-gri.zip",
    "images": [
      {
        "url": "assets/openfoam/combustion-chemfoam-gri/result-01-combustion-chemfoam-gri-of_vs_chemkinii.png",
        "alt": "Combustion of methane (Ordinary differential equations) result 1",
        "altZh": "甲烷燃烧（常微分方程）结果图 1"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [],
      "constants": [
        "chemistryProperties",
        "initialConditions",
        "thermophysicalProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟甲烷燃烧的零维化学反应过程，将燃烧动力学写成常微分方程组求解。它重点考察温度、组分浓度和反应速率随时间的演化，适合验证反应机理和化学时间尺度。",
        "数值上，该案例归入燃烧，使用 `chemFoam`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要结果变量会在运行后的时间目录中生成，可重点查看速度、压力、温度、相分数或位移等与物理问题对应的场量。配置重点包括 `chemistryProperties` 定义化学反应求解设置；`thermophysicalProperties` 定义热物性与状态方程。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/combustion/chemFoam/gri`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `chemFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "combustion-pdrfoam-flamepropagationwithobstacles",
    "title": "Flame propagation in a space with obstacles",
    "titleZh": "障碍物空间中的火焰传播",
    "category": "Combustion",
    "categoryZh": "燃烧",
    "types": [
      "燃烧",
      "湍流"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "PDRFoam",
    "localPath": "combustion/PDRFoam/flamePropagationWithObstacles",
    "download": "downloads/openfoam/combustion-pdrfoam-flamepropagationwithobstacles.zip",
    "images": [
      {
        "url": "assets/openfoam/combustion-pdrfoam-flamepropagationwithobstacles/result-01-combustion-pdrfoam-flamepropagationwithobstacles-mod.png",
        "alt": "Flame propagation in a space with obstacles result 1",
        "altZh": "障碍物空间中的火焰传播结果图 1"
      },
      {
        "url": "assets/openfoam/combustion-pdrfoam-flamepropagationwithobstacles/result-02-combustion-pdrfoam-flamepropagationwithobstacles-mod.png",
        "alt": "Flame propagation in a space with obstacles result 2",
        "altZh": "障碍物空间中的火焰传播结果图 2"
      },
      {
        "url": "assets/openfoam/combustion-pdrfoam-flamepropagationwithobstacles/result-03-combustion-pdrfoam-flamepropagationwithobstacles-mes.png",
        "alt": "Flame propagation in a space with obstacles result 3",
        "altZh": "障碍物空间中的火焰传播结果图 3"
      },
      {
        "url": "assets/openfoam/combustion-pdrfoam-flamepropagationwithobstacles/result-04-combustion-pdrfoam-flamepropagationwithobstacles-mes.png",
        "alt": "Flame propagation in a space with obstacles result 4",
        "altZh": "障碍物空间中的火焰传播结果图 4"
      },
      {
        "url": "assets/openfoam/combustion-pdrfoam-flamepropagationwithobstacles/result-05-combustion-pdrfoam-flamepropagationwithobstacles-mes.png",
        "alt": "Flame propagation in a space with obstacles result 5",
        "altZh": "障碍物空间中的火焰传播结果图 5"
      },
      {
        "url": "assets/openfoam/combustion-pdrfoam-flamepropagationwithobstacles/result-06-combustion-pdrfoam-flamepropagationwithobstacles-xz-.png",
        "alt": "Flame propagation in a space with obstacles result 6",
        "altZh": "障碍物空间中的火焰传播结果图 6"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "Aw.gz",
        "B.gz",
        "CR.gz",
        "CT.gz",
        "Lobs.gz",
        "Nv.gz",
        "Su.gz",
        "T.gz",
        "Tu.gz",
        "U.gz"
      ],
      "constants": [
        "PDRProperties",
        "combustionProperties",
        "dynamicMeshDict",
        "g",
        "thermophysicalProperties",
        "turbulenceProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟带障碍空间中的火焰传播过程，关注障碍物诱导的流动扰动如何改变火焰前锋、温度场和压力波传播。它用于理解阻塞空间内预混燃烧的加速与安全风险。",
        "数值上，该案例归入燃烧，使用 `PDRFoam`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括`Aw.gz`、`B.gz`、`CR.gz`、`CT.gz`、`Lobs.gz`、`Nv.gz`、`Su.gz`、`T.gz`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `combustionProperties` 定义燃烧模型设置；`dynamicMeshDict` 定义动网格运动方式；`g` 定义重力方向与大小；`thermophysicalProperties` 定义热物性与状态方程；`turbulenceProperties` 定义湍流模型选择。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/combustion/PDRFoam/flamePropagationWithObstacles`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `PDRFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "combustion-chemfoam-nc7h16",
    "title": "n-Combustion of n-heptane (Ordinary differential equations)",
    "titleZh": "正庚烷燃烧（常微分方程）",
    "category": "Combustion",
    "categoryZh": "燃烧",
    "types": [
      "燃烧"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "chemFoam",
    "localPath": "combustion/chemFoam/nc7h16",
    "download": "downloads/openfoam/combustion-chemfoam-nc7h16.zip",
    "images": [
      {
        "url": "assets/openfoam/combustion-chemfoam-nc7h16/result-01-combustion-chemfoam-nc7h16-of_vs_chemkinii.png",
        "alt": "n-Combustion of n-heptane (Ordinary differential equations) result 1",
        "altZh": "正庚烷燃烧（常微分方程）结果图 1"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [],
      "constants": [
        "chemistryProperties",
        "initialConditions",
        "thermophysicalProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟正庚烷燃烧的零维化学反应过程，将燃烧动力学写成常微分方程组求解。它重点考察温度、组分浓度和反应速率随时间的演化，适合验证反应机理和化学时间尺度。",
        "数值上，该案例归入燃烧，使用 `chemFoam`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要结果变量会在运行后的时间目录中生成，可重点查看速度、压力、温度、相分数或位移等与物理问题对应的场量。配置重点包括 `chemistryProperties` 定义化学反应求解设置；`thermophysicalProperties` 定义热物性与状态方程。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/combustion/chemFoam/nc7h16`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `chemFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "compressible-rhocentralfoam-ladenburgjet60psi",
    "title": "Axisymmetric subsonic flow and shock diamonds",
    "titleZh": "轴对称亚声速流与激波钻石",
    "category": "Compressible fluid",
    "categoryZh": "可压缩流体",
    "types": [
      "可压缩"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "rhoCentralFoam",
    "localPath": "compressible/rhoCentralFoam/LadenburgJet60psi",
    "download": "downloads/openfoam/compressible-rhocentralfoam-ladenburgjet60psi.zip",
    "images": [
      {
        "url": "assets/openfoam/compressible-rhocentralfoam-ladenburgjet60psi/result-01-compressible-rhocentralfoam-ladenburgjet60psi-mesh.png",
        "alt": "Axisymmetric subsonic flow and shock diamonds result 1",
        "altZh": "轴对称亚声速流与激波钻石结果图 1"
      },
      {
        "url": "assets/openfoam/compressible-rhocentralfoam-ladenburgjet60psi/result-02-compressible-rhocentralfoam-ladenburgjet60psi-u.png",
        "alt": "Axisymmetric subsonic flow and shock diamonds result 2",
        "altZh": "轴对称亚声速流与激波钻石结果图 2"
      },
      {
        "url": "assets/openfoam/compressible-rhocentralfoam-ladenburgjet60psi/result-03-compressible-rhocentralfoam-ladenburgjet60psi-p.png",
        "alt": "Axisymmetric subsonic flow and shock diamonds result 3",
        "altZh": "轴对称亚声速流与激波钻石结果图 3"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "T.gz",
        "U.gz",
        "p.gz"
      ],
      "constants": [
        "thermophysicalProperties",
        "turbulenceProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟喷流中的轴对称可压缩流动和激波钻石结构，关注欠膨胀喷流在出口后形成的膨胀波、压缩波和周期性压力结构。",
        "数值上，该案例归入可压缩流体，使用 `rhoCentralFoam`，可理解为 密度基可压缩瞬态求解器。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括`T.gz`、`U.gz`、`p.gz`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `thermophysicalProperties` 定义热物性与状态方程；`turbulenceProperties` 定义湍流模型选择。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/compressible/rhoCentralFoam/LadenburgJet60psi`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `rhoCentralFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "compressible-rhocentralfoam-biconic25-55run35",
    "title": "Axisymmetric supersonic flow and Maxwell slip model",
    "titleZh": "轴对称超声速流与 Maxwell 滑移模型",
    "category": "Compressible fluid",
    "categoryZh": "可压缩流体",
    "types": [
      "可压缩"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "rhoCentralFoam",
    "localPath": "compressible/rhoCentralFoam/biconic25-55Run35",
    "download": "downloads/openfoam/compressible-rhocentralfoam-biconic25-55run35.zip",
    "images": [
      {
        "url": "assets/openfoam/compressible-rhocentralfoam-biconic25-55run35/result-01-compressible-rhocentralfoam-biconic25-55run35-mesh.png",
        "alt": "Axisymmetric supersonic flow and Maxwell slip model result 1",
        "altZh": "轴对称超声速流与 Maxwell 滑移模型结果图 1"
      },
      {
        "url": "assets/openfoam/compressible-rhocentralfoam-biconic25-55run35/result-02-compressible-rhocentralfoam-biconic25-55run35-mesh-z.png",
        "alt": "Axisymmetric supersonic flow and Maxwell slip model result 2",
        "altZh": "轴对称超声速流与 Maxwell 滑移模型结果图 2"
      },
      {
        "url": "assets/openfoam/compressible-rhocentralfoam-biconic25-55run35/result-03-compressible-rhocentralfoam-biconic25-55run35-u.png",
        "alt": "Axisymmetric supersonic flow and Maxwell slip model result 3",
        "altZh": "轴对称超声速流与 Maxwell 滑移模型结果图 3"
      },
      {
        "url": "assets/openfoam/compressible-rhocentralfoam-biconic25-55run35/result-04-compressible-rhocentralfoam-biconic25-55run35-p.png",
        "alt": "Axisymmetric supersonic flow and Maxwell slip model result 4",
        "altZh": "轴对称超声速流与 Maxwell 滑移模型结果图 4"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "T.gz",
        "U.gz",
        "p.gz"
      ],
      "constants": [
        "thermophysicalProperties",
        "turbulenceProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟轴对称超声速外流，并引入 Maxwell 滑移边界模型，用于观察稀薄效应或壁面滑移条件对速度、压力和热边界行为的影响。",
        "数值上，该案例归入可压缩流体，使用 `rhoCentralFoam`，可理解为 密度基可压缩瞬态求解器。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括`T.gz`、`U.gz`、`p.gz`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `thermophysicalProperties` 定义热物性与状态方程；`turbulenceProperties` 定义湍流模型选择。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/compressible/rhoCentralFoam/biconic25-55Run35`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `rhoCentralFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "compressible-rhosimplefoam-angledductexplicitfixedcoeff",
    "title": "Bending channel with a porous media region",
    "titleZh": "含多孔介质区域的弯曲通道",
    "category": "Compressible fluid",
    "categoryZh": "可压缩流体",
    "types": [
      "可压缩",
      "单相"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "rhoSimpleFoam",
    "localPath": "compressible/rhoSimpleFoam/angledDuctExplicitFixedCoeff",
    "download": "downloads/openfoam/compressible-rhosimplefoam-angledductexplicitfixedcoeff.zip",
    "images": [
      {
        "url": "assets/openfoam/compressible-rhosimplefoam-angledductexplicitfixedcoeff/result-01-poroussimplefoam-angledduct-model.png",
        "alt": "Bending channel with a porous media region result 1",
        "altZh": "含多孔介质区域的弯曲通道结果图 1"
      },
      {
        "url": "assets/openfoam/compressible-rhosimplefoam-angledductexplicitfixedcoeff/result-02-poroussimplefoam-angledduct-mesh.png",
        "alt": "Bending channel with a porous media region result 2",
        "altZh": "含多孔介质区域的弯曲通道结果图 2"
      },
      {
        "url": "assets/openfoam/compressible-rhosimplefoam-angledductexplicitfixedcoeff/result-03-paraview-enable-k-epsilon-2.png",
        "alt": "Bending channel with a porous media region result 3",
        "altZh": "含多孔介质区域的弯曲通道结果图 3"
      },
      {
        "url": "assets/openfoam/compressible-rhosimplefoam-angledductexplicitfixedcoeff/result-04-compressible-rhosimplefoam-angledductexplicitfixedco.png",
        "alt": "Bending channel with a porous media region result 4",
        "altZh": "含多孔介质区域的弯曲通道结果图 4"
      },
      {
        "url": "assets/openfoam/compressible-rhosimplefoam-angledductexplicitfixedcoeff/result-05-compressible-rhosimplefoam-angledductexplicitfixedco.png",
        "alt": "Bending channel with a porous media region result 5",
        "altZh": "含多孔介质区域的弯曲通道结果图 5"
      },
      {
        "url": "assets/openfoam/compressible-rhosimplefoam-angledductexplicitfixedcoeff/result-06-compressible-rhosimplefoam-angledductexplicitfixedco.png",
        "alt": "Bending channel with a porous media region result 6",
        "altZh": "含多孔介质区域的弯曲通道结果图 6"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "T",
        "U",
        "alphat",
        "epsilon",
        "k",
        "nut",
        "p"
      ],
      "constants": [
        "fvOptions",
        "thermophysicalProperties",
        "turbulenceProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟含多孔介质区域的通道流动，关注多孔阻力项如何造成压降、速度重分布和局部流动损失。它适合用于过滤器、蜂窝结构或多孔阻塞物的工程近似。",
        "数值上，该案例归入可压缩流体，使用 `rhoSimpleFoam`，可理解为 可压缩稳态 SIMPLE 求解器。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括温度场 `T`、速度场 `U`、相分数 `alphat`、湍流变量 `epsilon`、湍流变量 `k`、湍流变量 `nut`、压力变量 `p`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `thermophysicalProperties` 定义热物性与状态方程；`turbulenceProperties` 定义湍流模型选择。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/compressible/rhoSimpleFoam/angledDuctExplicitFixedCoeff`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `rhoSimpleFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "compressible-rhopimplefoam-laminar-helmholtzresonance-helmholtz-resonance-plenum-p",
    "title": "Helmholtz Resonance (Plenum Pressure Model)",
    "titleZh": "亥姆霍兹共振（腔体压力模型）",
    "category": "Compressible fluid",
    "categoryZh": "可压缩流体",
    "types": [
      "可压缩",
      "单相"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "rhoPimpleFoam",
    "localPath": "compressible/rhoPimpleFoam/laminar/helmholtzResonance",
    "download": "downloads/openfoam/compressible-rhopimplefoam-laminar-helmholtzresonance-helmholtz-resonance-plenum-p.zip",
    "images": [
      {
        "url": "assets/openfoam/compressible-rhopimplefoam-laminar-helmholtzresonance-helmholtz-resonance-plenum-p/result-01-compressible-rhopimplefoam-laminar-helmholtzresonanc.png",
        "alt": "Helmholtz Resonance (Plenum Pressure Model) result 1",
        "altZh": "亥姆霍兹共振（腔体压力模型）结果图 1"
      },
      {
        "url": "assets/openfoam/compressible-rhopimplefoam-laminar-helmholtzresonance-helmholtz-resonance-plenum-p/result-02-compressible-rhopimplefoam-laminar-helmholtzresonanc.png",
        "alt": "Helmholtz Resonance (Plenum Pressure Model) result 2",
        "altZh": "亥姆霍兹共振（腔体压力模型）结果图 2"
      },
      {
        "url": "assets/openfoam/compressible-rhopimplefoam-laminar-helmholtzresonance-helmholtz-resonance-plenum-p/result-03-compressible-rhopimplefoam-laminar-helmholtzresonanc.png",
        "alt": "Helmholtz Resonance (Plenum Pressure Model) result 3",
        "altZh": "亥姆霍兹共振（腔体压力模型）结果图 3"
      },
      {
        "url": "assets/openfoam/compressible-rhopimplefoam-laminar-helmholtzresonance-helmholtz-resonance-plenum-p/result-04-compressible-rhopimplefoam-laminar-helmholtzresonanc.png",
        "alt": "Helmholtz Resonance (Plenum Pressure Model) result 4",
        "altZh": "亥姆霍兹共振（腔体压力模型）结果图 4"
      },
      {
        "url": "assets/openfoam/compressible-rhopimplefoam-laminar-helmholtzresonance-helmholtz-resonance-plenum-p/result-05-compressible-rhopimplefoam-laminar-helmholtzresonanc.png",
        "alt": "Helmholtz Resonance (Plenum Pressure Model) result 5",
        "altZh": "亥姆霍兹共振（腔体压力模型）结果图 5"
      },
      {
        "url": "assets/openfoam/compressible-rhopimplefoam-laminar-helmholtzresonance-helmholtz-resonance-plenum-p/result-06-compressible-rhopimplefoam-laminar-helmholtzresonanc.png",
        "alt": "Helmholtz Resonance (Plenum Pressure Model) result 6",
        "altZh": "亥姆霍兹共振（腔体压力模型）结果图 6"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "T",
        "U",
        "p"
      ],
      "constants": [
        "thermophysicalProperties",
        "turbulenceProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟亥姆霍兹共振腔中的可压缩声学振荡，关注腔体压力、颈部速度和声压波动之间的耦合。它用于理解管腔系统的共振频率和压力响应。",
        "数值上，该案例归入可压缩流体，使用 `rhoPimpleFoam`，可理解为 可压缩瞬态 PIMPLE 求解器。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括温度场 `T`、速度场 `U`、压力变量 `p`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `thermophysicalProperties` 定义热物性与状态方程；`turbulenceProperties` 定义湍流模型选择。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/compressible/rhoPimpleFoam/laminar/helmholtzResonance`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `rhoPimpleFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "compressible-rhopimplefoam-laminar-helmholtzresonance",
    "title": "Helmholtz Resonance (entire field)",
    "titleZh": "亥姆霍兹共振（全场模型）",
    "category": "Compressible fluid",
    "categoryZh": "可压缩流体",
    "types": [
      "可压缩",
      "单相"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "rhoPimpleFoam",
    "localPath": "compressible/rhoPimpleFoam/laminar/helmholtzResonance",
    "download": "downloads/openfoam/compressible-rhopimplefoam-laminar-helmholtzresonance.zip",
    "images": [
      {
        "url": "assets/openfoam/compressible-rhopimplefoam-laminar-helmholtzresonance/result-01-compressible-rhopimplefoam-laminar-helmholtzresonanc.png",
        "alt": "Helmholtz Resonance (entire field) result 1",
        "altZh": "亥姆霍兹共振（全场模型）结果图 1"
      },
      {
        "url": "assets/openfoam/compressible-rhopimplefoam-laminar-helmholtzresonance/result-02-compressible-rhopimplefoam-laminar-helmholtzresonanc.png",
        "alt": "Helmholtz Resonance (entire field) result 2",
        "altZh": "亥姆霍兹共振（全场模型）结果图 2"
      },
      {
        "url": "assets/openfoam/compressible-rhopimplefoam-laminar-helmholtzresonance/result-03-compressible-rhopimplefoam-laminar-helmholtzresonanc.png",
        "alt": "Helmholtz Resonance (entire field) result 3",
        "altZh": "亥姆霍兹共振（全场模型）结果图 3"
      },
      {
        "url": "assets/openfoam/compressible-rhopimplefoam-laminar-helmholtzresonance/result-04-compressible-rhopimplefoam-laminar-helmholtzresonanc.png",
        "alt": "Helmholtz Resonance (entire field) result 4",
        "altZh": "亥姆霍兹共振（全场模型）结果图 4"
      },
      {
        "url": "assets/openfoam/compressible-rhopimplefoam-laminar-helmholtzresonance/result-05-compressible-rhopimplefoam-laminar-helmholtzresonanc.png",
        "alt": "Helmholtz Resonance (entire field) result 5",
        "altZh": "亥姆霍兹共振（全场模型）结果图 5"
      },
      {
        "url": "assets/openfoam/compressible-rhopimplefoam-laminar-helmholtzresonance/result-06-compressible-rhopimplefoam-laminar-helmholtzresonanc.png",
        "alt": "Helmholtz Resonance (entire field) result 6",
        "altZh": "亥姆霍兹共振（全场模型）结果图 6"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "T",
        "U",
        "p"
      ],
      "constants": [
        "thermophysicalProperties",
        "turbulenceProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟亥姆霍兹共振腔中的可压缩声学振荡，关注腔体压力、颈部速度和声压波动之间的耦合。它用于理解管腔系统的共振频率和压力响应。",
        "数值上，该案例归入可压缩流体，使用 `rhoPimpleFoam`，可理解为 可压缩瞬态 PIMPLE 求解器。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括温度场 `T`、速度场 `U`、压力变量 `p`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `thermophysicalProperties` 定义热物性与状态方程；`turbulenceProperties` 定义湍流模型选择。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/compressible/rhoPimpleFoam/laminar/helmholtzResonance`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `rhoPimpleFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "compressible-sonicliquidfoam",
    "title": "Leakage from high-pressure tank",
    "titleZh": "高压储罐泄漏",
    "category": "Compressible fluid",
    "categoryZh": "可压缩流体",
    "types": [
      "可压缩"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "sonicLiquidFoam",
    "localPath": "compressible/sonicLiquidFoam",
    "download": "downloads/openfoam/compressible-sonicliquidfoam.zip",
    "images": [
      {
        "url": "assets/openfoam/compressible-sonicliquidfoam/result-01-compressible-sonicliquidfoam-decompressiontank-mesh.png",
        "alt": "Leakage from high-pressure tank result 1",
        "altZh": "高压储罐泄漏结果图 1"
      },
      {
        "url": "assets/openfoam/compressible-sonicliquidfoam/result-02-compressible-sonicliquidfoam-decompressiontank-u-5.png",
        "alt": "Leakage from high-pressure tank result 2",
        "altZh": "高压储罐泄漏结果图 2"
      },
      {
        "url": "assets/openfoam/compressible-sonicliquidfoam/result-03-compressible-sonicliquidfoam-decompressiontank-p-5.png",
        "alt": "Leakage from high-pressure tank result 3",
        "altZh": "高压储罐泄漏结果图 3"
      },
      {
        "url": "assets/openfoam/compressible-sonicliquidfoam/result-04-compressible-sonicliquidfoam-decompressiontank-u-10.png",
        "alt": "Leakage from high-pressure tank result 4",
        "altZh": "高压储罐泄漏结果图 4"
      },
      {
        "url": "assets/openfoam/compressible-sonicliquidfoam/result-05-compressible-sonicliquidfoam-decompressiontank-p-10.png",
        "alt": "Leakage from high-pressure tank result 5",
        "altZh": "高压储罐泄漏结果图 5"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [],
      "constants": [],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟高压储罐泄漏后的可压缩液体/气体释放过程，关注压力骤降、射流速度和密度变化。它适合分析安全泄放、泄漏瞬态和压力波传播。",
        "数值上，该案例归入可压缩流体，使用 `sonicLiquidFoam`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要结果变量会在运行后的时间目录中生成，可重点查看速度、压力、温度、相分数或位移等与物理问题对应的场量。配置重点通常位于 `0`、`constant` 和 `system` 三类文件：分别给出初始/边界条件、物性/模型参数和数值控制。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/compressible/sonicLiquidFoam`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `sonicLiquidFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "compressible-rhocentralfoam-shocktube",
    "title": "Shock tube",
    "titleZh": "激波管",
    "category": "Compressible fluid",
    "categoryZh": "可压缩流体",
    "types": [
      "可压缩"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "rhoCentralFoam",
    "localPath": "compressible/rhoCentralFoam/shockTube",
    "download": "downloads/openfoam/compressible-rhocentralfoam-shocktube.zip",
    "images": [
      {
        "url": "assets/openfoam/compressible-rhocentralfoam-shocktube/result-01-compressible-rhocentralfoam-shocktube-mesh.png",
        "alt": "Shock tube result 1",
        "altZh": "激波管结果图 1"
      },
      {
        "url": "assets/openfoam/compressible-rhocentralfoam-shocktube/result-02-compressible-rhocentralfoam-shocktube-u-0.png",
        "alt": "Shock tube result 2",
        "altZh": "激波管结果图 2"
      },
      {
        "url": "assets/openfoam/compressible-rhocentralfoam-shocktube/result-03-compressible-rhocentralfoam-shocktube-u-0-003.png",
        "alt": "Shock tube result 3",
        "altZh": "激波管结果图 3"
      },
      {
        "url": "assets/openfoam/compressible-rhocentralfoam-shocktube/result-04-compressible-rhocentralfoam-shocktube-u-0-007.png",
        "alt": "Shock tube result 4",
        "altZh": "激波管结果图 4"
      },
      {
        "url": "assets/openfoam/compressible-rhocentralfoam-shocktube/result-05-compressible-rhocentralfoam-shocktube-p-0.png",
        "alt": "Shock tube result 5",
        "altZh": "激波管结果图 5"
      },
      {
        "url": "assets/openfoam/compressible-rhocentralfoam-shocktube/result-06-compressible-rhocentralfoam-shocktube-p-0-003.png",
        "alt": "Shock tube result 6",
        "altZh": "激波管结果图 6"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "T",
        "U",
        "p"
      ],
      "constants": [
        "thermophysicalProperties",
        "turbulenceProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟典型激波管问题，高低压区域破膜后形成激波、接触间断和膨胀波。它是验证可压缩求解器激波捕捉能力和守恒性的标准算例。",
        "数值上，该案例归入可压缩流体，使用 `rhoCentralFoam`，可理解为 密度基可压缩瞬态求解器。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括温度场 `T`、速度场 `U`、压力变量 `p`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `thermophysicalProperties` 定义热物性与状态方程；`turbulenceProperties` 定义湍流模型选择。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/compressible/rhoCentralFoam/shockTube`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `rhoCentralFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "compressible-sonicfoam-laminar-shocktube",
    "title": "Shock tube",
    "titleZh": "激波管",
    "category": "Compressible fluid",
    "categoryZh": "可压缩流体",
    "types": [
      "可压缩"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "sonicFoam",
    "localPath": "compressible/sonicFoam/laminar/shockTube",
    "download": "downloads/openfoam/compressible-sonicfoam-laminar-shocktube.zip",
    "images": [
      {
        "url": "assets/openfoam/compressible-sonicfoam-laminar-shocktube/result-01-compressible-sonicfoam-laminar-shocktube-mesh.png",
        "alt": "Shock tube result 1",
        "altZh": "激波管结果图 1"
      },
      {
        "url": "assets/openfoam/compressible-sonicfoam-laminar-shocktube/result-02-compressible-sonicfoam-laminar-shocktube-u-0.png",
        "alt": "Shock tube result 2",
        "altZh": "激波管结果图 2"
      },
      {
        "url": "assets/openfoam/compressible-sonicfoam-laminar-shocktube/result-03-compressible-sonicfoam-laminar-shocktube-u-0-003.png",
        "alt": "Shock tube result 3",
        "altZh": "激波管结果图 3"
      },
      {
        "url": "assets/openfoam/compressible-sonicfoam-laminar-shocktube/result-04-compressible-sonicfoam-laminar-shocktube-u-0-007.png",
        "alt": "Shock tube result 4",
        "altZh": "激波管结果图 4"
      },
      {
        "url": "assets/openfoam/compressible-sonicfoam-laminar-shocktube/result-05-compressible-sonicfoam-laminar-shocktube-p-0.png",
        "alt": "Shock tube result 5",
        "altZh": "激波管结果图 5"
      },
      {
        "url": "assets/openfoam/compressible-sonicfoam-laminar-shocktube/result-06-compressible-sonicfoam-laminar-shocktube-p-0-003.png",
        "alt": "Shock tube result 6",
        "altZh": "激波管结果图 6"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "T",
        "U",
        "p"
      ],
      "constants": [
        "thermophysicalProperties",
        "turbulenceProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟典型激波管问题，高低压区域破膜后形成激波、接触间断和膨胀波。它是验证可压缩求解器激波捕捉能力和守恒性的标准算例。",
        "数值上，该案例归入可压缩流体，使用 `sonicFoam`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括温度场 `T`、速度场 `U`、压力变量 `p`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `thermophysicalProperties` 定义热物性与状态方程；`turbulenceProperties` 定义湍流模型选择。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/compressible/sonicFoam/laminar/shockTube`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `sonicFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "compressible-rhosimplefoam-squarebend",
    "title": "Square channel with a curved section",
    "titleZh": "带弯曲段的方形通道",
    "category": "Compressible fluid",
    "categoryZh": "可压缩流体",
    "types": [
      "可压缩",
      "单相"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "rhoSimpleFoam",
    "localPath": "compressible/rhoSimpleFoam/squareBend",
    "download": "downloads/openfoam/compressible-rhosimplefoam-squarebend.zip",
    "images": [
      {
        "url": "assets/openfoam/compressible-rhosimplefoam-squarebend/result-01-compressible-rhosimplefoam-squarebend-mesh.png",
        "alt": "Square channel with a curved section result 1",
        "altZh": "带弯曲段的方形通道结果图 1"
      },
      {
        "url": "assets/openfoam/compressible-rhosimplefoam-squarebend/result-02-compressible-rhosimplefoam-squarebend-mesh-bend.png",
        "alt": "Square channel with a curved section result 2",
        "altZh": "带弯曲段的方形通道结果图 2"
      },
      {
        "url": "assets/openfoam/compressible-rhosimplefoam-squarebend/result-03-paraview-enable-k-epsilon-2.png",
        "alt": "Square channel with a curved section result 3",
        "altZh": "带弯曲段的方形通道结果图 3"
      },
      {
        "url": "assets/openfoam/compressible-rhosimplefoam-squarebend/result-04-compressible-rhosimplefoam-squarebend-u.png",
        "alt": "Square channel with a curved section result 4",
        "altZh": "带弯曲段的方形通道结果图 4"
      },
      {
        "url": "assets/openfoam/compressible-rhosimplefoam-squarebend/result-05-compressible-rhosimplefoam-squarebend-p.png",
        "alt": "Square channel with a curved section result 5",
        "altZh": "带弯曲段的方形通道结果图 5"
      },
      {
        "url": "assets/openfoam/compressible-rhosimplefoam-squarebend/result-06-compressible-rhosimplefoam-squarebend-k.png",
        "alt": "Square channel with a curved section result 6",
        "altZh": "带弯曲段的方形通道结果图 6"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "T",
        "U",
        "alphat",
        "epsilon",
        "k",
        "nut",
        "p"
      ],
      "constants": [
        "thermophysicalProperties",
        "turbulenceProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟带弯曲段的方形通道内可压缩流动，关注弯道引起的压力损失、速度偏转和湍流变量变化。",
        "数值上，该案例归入可压缩流体，使用 `rhoSimpleFoam`，可理解为 可压缩稳态 SIMPLE 求解器。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括温度场 `T`、速度场 `U`、相分数 `alphat`、湍流变量 `epsilon`、湍流变量 `k`、湍流变量 `nut`、压力变量 `p`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `thermophysicalProperties` 定义热物性与状态方程；`turbulenceProperties` 定义湍流模型选择。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/compressible/rhoSimpleFoam/squareBend`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `rhoSimpleFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "dns-dnsfoam-boxturb16",
    "title": "Direct numerical simulation of turbulence at periodic boundaries",
    "titleZh": "周期边界湍流直接数值模拟",
    "category": "Direct numerical simulation (DNS)",
    "categoryZh": "直接数值模拟",
    "types": [
      "湍流"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "dnsFoam",
    "localPath": "DNS/dnsFoam/boxTurb16",
    "download": "downloads/openfoam/dns-dnsfoam-boxturb16.zip",
    "images": [
      {
        "url": "assets/openfoam/dns-dnsfoam-boxturb16/result-01-boxturb16-mesh.png",
        "alt": "Direct numerical simulation of turbulence at periodic boundaries result 1",
        "altZh": "周期边界湍流直接数值模拟结果图 1"
      },
      {
        "url": "assets/openfoam/dns-dnsfoam-boxturb16/result-02-boxturb16-boxturb.png",
        "alt": "Direct numerical simulation of turbulence at periodic boundaries result 2",
        "altZh": "周期边界湍流直接数值模拟结果图 2"
      },
      {
        "url": "assets/openfoam/dns-dnsfoam-boxturb16/result-03-paraview-enable-enstrophy.png",
        "alt": "Direct numerical simulation of turbulence at periodic boundaries result 3",
        "altZh": "周期边界湍流直接数值模拟结果图 3"
      },
      {
        "url": "assets/openfoam/dns-dnsfoam-boxturb16/result-04-boxturb16-u.png",
        "alt": "Direct numerical simulation of turbulence at periodic boundaries result 4",
        "altZh": "周期边界湍流直接数值模拟结果图 4"
      },
      {
        "url": "assets/openfoam/dns-dnsfoam-boxturb16/result-05-boxturb16-p.png",
        "alt": "Direct numerical simulation of turbulence at periodic boundaries result 5",
        "altZh": "周期边界湍流直接数值模拟结果图 5"
      },
      {
        "url": "assets/openfoam/dns-dnsfoam-boxturb16/result-06-boxturb16-enstrophy.png",
        "alt": "Direct numerical simulation of turbulence at periodic boundaries result 6",
        "altZh": "周期边界湍流直接数值模拟结果图 6"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "U",
        "p"
      ],
      "constants": [
        "boxTurbDict",
        "transportProperties",
        "turbulenceProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟周期边界条件下的湍流直接数值模拟，不使用湍流模型闭合，而是直接解析涡量和速度脉动的演化。它适合观察各向同性湍流结构和能量耗散过程。",
        "数值上，该案例归入直接数值模拟，使用 `dnsFoam`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括速度场 `U`、压力变量 `p`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `transportProperties` 定义流体物性与输运系数；`turbulenceProperties` 定义湍流模型选择。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/DNS/dnsFoam/boxTurb16`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `dnsFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "discretemethods-dsmcfoam-freespaceperiodic",
    "title": "Direct simulation Monte Carlo of oxygen/nitrogen mixtures (periodic boundary)",
    "titleZh": "氧氮混合气 DSMC 计算（周期边界）",
    "category": "Discrete method",
    "categoryZh": "离散方法",
    "types": [
      "离散方法",
      "颗粒"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "dsmcFoam",
    "localPath": "discreteMethods/dsmcFoam/freeSpacePeriodic",
    "download": "downloads/openfoam/discretemethods-dsmcfoam-freespaceperiodic.zip",
    "images": [
      {
        "url": "assets/openfoam/discretemethods-dsmcfoam-freespaceperiodic/result-01-discretemethods-dsmcfoam-freespaceperiodic-model.png",
        "alt": "Direct simulation Monte Carlo of oxygen/nitrogen mixtures (periodic boundary) result 1",
        "altZh": "氧氮混合气 DSMC 计算（周期边界）结果图 1"
      },
      {
        "url": "assets/openfoam/discretemethods-dsmcfoam-freespaceperiodic/result-02-discretemethods-dsmcfoam-freespaceperiodic-rhom.png",
        "alt": "Direct simulation Monte Carlo of oxygen/nitrogen mixtures (periodic boundary) result 2",
        "altZh": "氧氮混合气 DSMC 计算（周期边界）结果图 2"
      },
      {
        "url": "assets/openfoam/discretemethods-dsmcfoam-freespaceperiodic/result-03-discretemethods-dsmcfoam-freespaceperiodic-dsmcparti.png",
        "alt": "Direct simulation Monte Carlo of oxygen/nitrogen mixtures (periodic boundary) result 3",
        "altZh": "氧氮混合气 DSMC 计算（周期边界）结果图 3"
      },
      {
        "url": "assets/openfoam/discretemethods-dsmcfoam-freespaceperiodic/result-04-discretemethods-dsmcfoam-freespaceperiodic-paraview.png",
        "alt": "Direct simulation Monte Carlo of oxygen/nitrogen mixtures (periodic boundary) result 4",
        "altZh": "氧氮混合气 DSMC 计算（周期边界）结果图 4"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "boundaryT",
        "boundaryU",
        "dsmcRhoN",
        "fD",
        "iDof",
        "internalE",
        "linearKE",
        "momentum",
        "q",
        "rhoM"
      ],
      "constants": [
        "dsmcProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟稀薄气体的直接模拟 Monte Carlo 过程，把气体分子运动和碰撞作为统计粒子问题处理。它适用于连续介质假设开始失效的高速、低密度或微尺度气体流动。",
        "数值上，该案例归入离散方法，使用 `dsmcFoam`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括`boundaryT`、`boundaryU`、密度相关变量 `dsmcRhoN`、`fD`、`iDof`、`internalE`、`linearKE`、`momentum`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点通常位于 `0`、`constant` 和 `system` 三类文件：分别给出初始/边界条件、物性/模型参数和数值控制。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/discreteMethods/dsmcFoam/freeSpacePeriodic`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `dsmcFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "discretemethods-dsmcfoam-freespacestream",
    "title": "Direct simulation Monte Carlo of oxygen/nitrogen mixtures (uniform flow)",
    "titleZh": "氧氮混合气 DSMC 计算（均匀来流）",
    "category": "Discrete method",
    "categoryZh": "离散方法",
    "types": [
      "离散方法",
      "颗粒"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "dsmcFoam",
    "localPath": "discreteMethods/dsmcFoam/freeSpaceStream",
    "download": "downloads/openfoam/discretemethods-dsmcfoam-freespacestream.zip",
    "images": [
      {
        "url": "assets/openfoam/discretemethods-dsmcfoam-freespacestream/result-01-discretemethods-dsmcfoam-freespacestream-model.png",
        "alt": "Direct simulation Monte Carlo of oxygen/nitrogen mixtures (uniform flow) result 1",
        "altZh": "氧氮混合气 DSMC 计算（均匀来流）结果图 1"
      },
      {
        "url": "assets/openfoam/discretemethods-dsmcfoam-freespacestream/result-02-discretemethods-dsmcfoam-freespacestream-umean.png",
        "alt": "Direct simulation Monte Carlo of oxygen/nitrogen mixtures (uniform flow) result 2",
        "altZh": "氧氮混合气 DSMC 计算（均匀来流）结果图 2"
      },
      {
        "url": "assets/openfoam/discretemethods-dsmcfoam-freespacestream/result-03-discretemethods-dsmcfoam-freespacestream-dsmcparticl.png",
        "alt": "Direct simulation Monte Carlo of oxygen/nitrogen mixtures (uniform flow) result 3",
        "altZh": "氧氮混合气 DSMC 计算（均匀来流）结果图 3"
      },
      {
        "url": "assets/openfoam/discretemethods-dsmcfoam-freespacestream/result-04-discretemethods-dsmcfoam-freespacestream-paraview.png",
        "alt": "Direct simulation Monte Carlo of oxygen/nitrogen mixtures (uniform flow) result 4",
        "altZh": "氧氮混合气 DSMC 计算（均匀来流）结果图 4"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "boundaryT",
        "boundaryU",
        "dsmcRhoN",
        "fD",
        "iDof",
        "internalE",
        "linearKE",
        "momentum",
        "q",
        "rhoM"
      ],
      "constants": [
        "dsmcProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟稀薄气体的直接模拟 Monte Carlo 过程，把气体分子运动和碰撞作为统计粒子问题处理。它适用于连续介质假设开始失效的高速、低密度或微尺度气体流动。",
        "数值上，该案例归入离散方法，使用 `dsmcFoam`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括`boundaryT`、`boundaryU`、密度相关变量 `dsmcRhoN`、`fD`、`iDof`、`internalE`、`linearKE`、`momentum`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点通常位于 `0`、`constant` 和 `system` 三类文件：分别给出初始/边界条件、物性/模型参数和数值控制。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/discreteMethods/dsmcFoam/freeSpaceStream`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `dsmcFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "discretemethods-dsmcfoam-supersoniccorner",
    "title": "Direct simulation Monte Carlo of supersonic argon gas flow",
    "titleZh": "超声速氩气流 DSMC 计算",
    "category": "Discrete method",
    "categoryZh": "离散方法",
    "types": [
      "离散方法",
      "可压缩",
      "颗粒"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "dsmcFoam",
    "localPath": "discreteMethods/dsmcFoam/supersonicCorner",
    "download": "downloads/openfoam/discretemethods-dsmcfoam-supersoniccorner.zip",
    "images": [
      {
        "url": "assets/openfoam/discretemethods-dsmcfoam-supersoniccorner/result-01-discretemethods-dsmcfoam-supersoniccorner-model.png",
        "alt": "Direct simulation Monte Carlo of supersonic argon gas flow result 1",
        "altZh": "超声速氩气流 DSMC 计算结果图 1"
      },
      {
        "url": "assets/openfoam/discretemethods-dsmcfoam-supersoniccorner/result-02-discretemethods-dsmcfoam-supersoniccorner-momentum-x.png",
        "alt": "Direct simulation Monte Carlo of supersonic argon gas flow result 2",
        "altZh": "超声速氩气流 DSMC 计算结果图 2"
      },
      {
        "url": "assets/openfoam/discretemethods-dsmcfoam-supersoniccorner/result-03-discretemethods-dsmcfoam-supersoniccorner-momentum-y.png",
        "alt": "Direct simulation Monte Carlo of supersonic argon gas flow result 3",
        "altZh": "超声速氩气流 DSMC 计算结果图 3"
      },
      {
        "url": "assets/openfoam/discretemethods-dsmcfoam-supersoniccorner/result-04-discretemethods-dsmcfoam-supersoniccorner-momentum-z.png",
        "alt": "Direct simulation Monte Carlo of supersonic argon gas flow result 4",
        "altZh": "超声速氩气流 DSMC 计算结果图 4"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "boundaryT",
        "boundaryU",
        "dsmcRhoN",
        "fD",
        "iDof",
        "internalE",
        "linearKE",
        "momentum",
        "q",
        "rhoM"
      ],
      "constants": [
        "dsmcProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟稀薄气体的直接模拟 Monte Carlo 过程，把气体分子运动和碰撞作为统计粒子问题处理。它适用于连续介质假设开始失效的高速、低密度或微尺度气体流动。",
        "数值上，该案例归入离散方法，使用 `dsmcFoam`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括`boundaryT`、`boundaryU`、密度相关变量 `dsmcRhoN`、`fD`、`iDof`、`internalE`、`linearKE`、`momentum`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点通常位于 `0`、`constant` 和 `system` 三类文件：分别给出初始/边界条件、物性/模型参数和数值控制。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/discreteMethods/dsmcFoam/supersonicCorner`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `dsmcFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "discretemethods-dsmcfoam-wedge15ma5",
    "title": "Direct simulation Monte Carlo of supersonic flow hitting on a slope",
    "titleZh": "超声速流撞击斜面的 DSMC 计算",
    "category": "Discrete method",
    "categoryZh": "离散方法",
    "types": [
      "离散方法",
      "可压缩",
      "颗粒"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "dsmcFoam",
    "localPath": "discreteMethods/dsmcFoam/wedge15Ma5",
    "download": "downloads/openfoam/discretemethods-dsmcfoam-wedge15ma5.zip",
    "images": [
      {
        "url": "assets/openfoam/discretemethods-dsmcfoam-wedge15ma5/result-01-discretemethods-dsmcfoam-wedge15ma5-mesh.png",
        "alt": "Direct simulation Monte Carlo of supersonic flow hitting on a slope result 1",
        "altZh": "超声速流撞击斜面的 DSMC 计算结果图 1"
      },
      {
        "url": "assets/openfoam/discretemethods-dsmcfoam-wedge15ma5/result-02-discretemethods-dsmcfoam-wedge15ma5-momentum.png",
        "alt": "Direct simulation Monte Carlo of supersonic flow hitting on a slope result 2",
        "altZh": "超声速流撞击斜面的 DSMC 计算结果图 2"
      },
      {
        "url": "assets/openfoam/discretemethods-dsmcfoam-wedge15ma5/result-03-discretemethods-dsmcfoam-wedge15ma5-internale.png",
        "alt": "Direct simulation Monte Carlo of supersonic flow hitting on a slope result 3",
        "altZh": "超声速流撞击斜面的 DSMC 计算结果图 3"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "boundaryT",
        "boundaryU",
        "dsmcRhoN",
        "fD",
        "iDof",
        "internalE",
        "linearKE",
        "momentum",
        "q",
        "rhoM"
      ],
      "constants": [
        "dsmcProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟稀薄气体的直接模拟 Monte Carlo 过程，把气体分子运动和碰撞作为统计粒子问题处理。它适用于连续介质假设开始失效的高速、低密度或微尺度气体流动。",
        "数值上，该案例归入离散方法，使用 `dsmcFoam`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括`boundaryT`、`boundaryU`、密度相关变量 `dsmcRhoN`、`fD`、`iDof`、`internalE`、`linearKE`、`momentum`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点通常位于 `0`、`constant` 和 `system` 三类文件：分别给出初始/边界条件、物性/模型参数和数值控制。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/discreteMethods/dsmcFoam/wedge15Ma5`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `dsmcFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "discretemethods-moleculardynamics-mdequilibrationfoam-periodiccubeargon",
    "title": "Molecular dynamics calculation for equilibrium state of argon",
    "titleZh": "氩平衡态分子动力学计算",
    "category": "Discrete method",
    "categoryZh": "离散方法",
    "types": [
      "离散方法",
      "颗粒"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "molecularDynamics",
    "localPath": "discreteMethods/molecularDynamics/mdEquilibrationFoam/periodicCubeArgon",
    "download": "downloads/openfoam/discretemethods-moleculardynamics-mdequilibrationfoam-periodiccubeargon.zip",
    "images": [
      {
        "url": "assets/openfoam/discretemethods-moleculardynamics-mdequilibrationfoam-periodiccubeargon/result-01-discretemethods-moleculardynamics-mdequilibrationfoa.png",
        "alt": "Molecular dynamics calculation for equilibrium state of argon result 1",
        "altZh": "氩平衡态分子动力学计算结果图 1"
      },
      {
        "url": "assets/openfoam/discretemethods-moleculardynamics-mdequilibrationfoam-periodiccubeargon/result-02-discretemethods-moleculardynamics-mdequilibrationfoa.png",
        "alt": "Molecular dynamics calculation for equilibrium state of argon result 2",
        "altZh": "氩平衡态分子动力学计算结果图 2"
      },
      {
        "url": "assets/openfoam/discretemethods-moleculardynamics-mdequilibrationfoam-periodiccubeargon/result-03-discretemethods-moleculardynamics-mdequilibrationfoa.png",
        "alt": "Molecular dynamics calculation for equilibrium state of argon result 3",
        "altZh": "氩平衡态分子动力学计算结果图 3"
      },
      {
        "url": "assets/openfoam/discretemethods-moleculardynamics-mdequilibrationfoam-periodiccubeargon/result-04-discretemethods-moleculardynamics-mdequilibrationfoa.png",
        "alt": "Molecular dynamics calculation for equilibrium state of argon result 4",
        "altZh": "氩平衡态分子动力学计算结果图 4"
      },
      {
        "url": "assets/openfoam/discretemethods-moleculardynamics-mdequilibrationfoam-periodiccubeargon/result-05-discretemethods-moleculardynamics-mdequilibrationfoa.png",
        "alt": "Molecular dynamics calculation for equilibrium state of argon result 5",
        "altZh": "氩平衡态分子动力学计算结果图 5"
      },
      {
        "url": "assets/openfoam/discretemethods-moleculardynamics-mdequilibrationfoam-periodiccubeargon/result-06-discretemethods-moleculardynamics-mdequilibrationfoa.png",
        "alt": "Molecular dynamics calculation for equilibrium state of argon result 6",
        "altZh": "氩平衡态分子动力学计算结果图 6"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "U"
      ],
      "constants": [
        "moleculeProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟分子动力学体系中粒子的相互作用和热平衡过程，关注原子/分子尺度下速度分布、温度、密度和壁面效应。它适合纳米通道、平衡态液体或气体微观行为分析。",
        "数值上，该案例归入离散方法，使用 `molecularDynamics`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括速度场 `U`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点通常位于 `0`、`constant` 和 `system` 三类文件：分别给出初始/边界条件、物性/模型参数和数值控制。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/discreteMethods/molecularDynamics/mdEquilibrationFoam/periodicCubeArgon`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `molecularDynamics`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "discretemethods-moleculardynamics-mdequilibrationfoam-periodiccubewater",
    "title": "Molecular dynamics calculation for equilibrium state of water",
    "titleZh": "水平衡态分子动力学计算",
    "category": "Discrete method",
    "categoryZh": "离散方法",
    "types": [
      "离散方法",
      "颗粒"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "molecularDynamics",
    "localPath": "discreteMethods/molecularDynamics/mdEquilibrationFoam/periodicCubeWater",
    "download": "downloads/openfoam/discretemethods-moleculardynamics-mdequilibrationfoam-periodiccubewater.zip",
    "images": [
      {
        "url": "assets/openfoam/discretemethods-moleculardynamics-mdequilibrationfoam-periodiccubewater/result-01-discretemethods-moleculardynamics-mdequilibrationfoa.png",
        "alt": "Molecular dynamics calculation for equilibrium state of water result 1",
        "altZh": "水平衡态分子动力学计算结果图 1"
      },
      {
        "url": "assets/openfoam/discretemethods-moleculardynamics-mdequilibrationfoam-periodiccubewater/result-02-discretemethods-moleculardynamics-mdequilibrationfoa.png",
        "alt": "Molecular dynamics calculation for equilibrium state of water result 2",
        "altZh": "水平衡态分子动力学计算结果图 2"
      },
      {
        "url": "assets/openfoam/discretemethods-moleculardynamics-mdequilibrationfoam-periodiccubewater/result-03-discretemethods-moleculardynamics-mdequilibrationfoa.png",
        "alt": "Molecular dynamics calculation for equilibrium state of water result 3",
        "altZh": "水平衡态分子动力学计算结果图 3"
      },
      {
        "url": "assets/openfoam/discretemethods-moleculardynamics-mdequilibrationfoam-periodiccubewater/result-04-discretemethods-moleculardynamics-mdequilibrationfoa.png",
        "alt": "Molecular dynamics calculation for equilibrium state of water result 4",
        "altZh": "水平衡态分子动力学计算结果图 4"
      },
      {
        "url": "assets/openfoam/discretemethods-moleculardynamics-mdequilibrationfoam-periodiccubewater/result-05-discretemethods-moleculardynamics-mdequilibrationfoa.png",
        "alt": "Molecular dynamics calculation for equilibrium state of water result 5",
        "altZh": "水平衡态分子动力学计算结果图 5"
      },
      {
        "url": "assets/openfoam/discretemethods-moleculardynamics-mdequilibrationfoam-periodiccubewater/result-06-discretemethods-moleculardynamics-mdequilibrationfoa.png",
        "alt": "Molecular dynamics calculation for equilibrium state of water result 6",
        "altZh": "水平衡态分子动力学计算结果图 6"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "U"
      ],
      "constants": [
        "moleculeProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟分子动力学体系中粒子的相互作用和热平衡过程，关注原子/分子尺度下速度分布、温度、密度和壁面效应。它适合纳米通道、平衡态液体或气体微观行为分析。",
        "数值上，该案例归入离散方法，使用 `molecularDynamics`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括速度场 `U`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点通常位于 `0`、`constant` 和 `system` 三类文件：分别给出初始/边界条件、物性/模型参数和数值控制。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/discreteMethods/molecularDynamics/mdEquilibrationFoam/periodicCubeWater`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `molecularDynamics`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "discretemethods-moleculardynamics-mdfoam-nanonozzle",
    "title": "Molecular dynamics calculation of water in a nanoscale nozzle",
    "titleZh": "纳米尺度喷嘴内水的分子动力学计算",
    "category": "Discrete method",
    "categoryZh": "离散方法",
    "types": [
      "离散方法",
      "颗粒"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "molecularDynamics",
    "localPath": "discreteMethods/molecularDynamics/mdFoam/nanoNozzle",
    "download": "downloads/openfoam/discretemethods-moleculardynamics-mdfoam-nanonozzle.zip",
    "images": [
      {
        "url": "assets/openfoam/discretemethods-moleculardynamics-mdfoam-nanonozzle/result-01-discretemethods-moleculardynamics-mdfoam-nanonozzle-.png",
        "alt": "Molecular dynamics calculation of water in a nanoscale nozzle result 1",
        "altZh": "纳米尺度喷嘴内水的分子动力学计算结果图 1"
      },
      {
        "url": "assets/openfoam/discretemethods-moleculardynamics-mdfoam-nanonozzle/result-02-discretemethods-moleculardynamics-mdfoam-nanonozzle-.png",
        "alt": "Molecular dynamics calculation of water in a nanoscale nozzle result 2",
        "altZh": "纳米尺度喷嘴内水的分子动力学计算结果图 2"
      },
      {
        "url": "assets/openfoam/discretemethods-moleculardynamics-mdfoam-nanonozzle/result-03-discretemethods-moleculardynamics-mdfoam-nanonozzle-.png",
        "alt": "Molecular dynamics calculation of water in a nanoscale nozzle result 3",
        "altZh": "纳米尺度喷嘴内水的分子动力学计算结果图 3"
      },
      {
        "url": "assets/openfoam/discretemethods-moleculardynamics-mdfoam-nanonozzle/result-04-discretemethods-moleculardynamics-mdfoam-nanonozzle-.png",
        "alt": "Molecular dynamics calculation of water in a nanoscale nozzle result 4",
        "altZh": "纳米尺度喷嘴内水的分子动力学计算结果图 4"
      },
      {
        "url": "assets/openfoam/discretemethods-moleculardynamics-mdfoam-nanonozzle/result-05-discretemethods-moleculardynamics-mdfoam-nanonozzle-.png",
        "alt": "Molecular dynamics calculation of water in a nanoscale nozzle result 5",
        "altZh": "纳米尺度喷嘴内水的分子动力学计算结果图 5"
      },
      {
        "url": "assets/openfoam/discretemethods-moleculardynamics-mdfoam-nanonozzle/result-06-discretemethods-moleculardynamics-mdfoam-nanonozzle-.png",
        "alt": "Molecular dynamics calculation of water in a nanoscale nozzle result 6",
        "altZh": "纳米尺度喷嘴内水的分子动力学计算结果图 6"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "U"
      ],
      "constants": [
        "moleculeProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟分子动力学体系中粒子的相互作用和热平衡过程，关注原子/分子尺度下速度分布、温度、密度和壁面效应。它适合纳米通道、平衡态液体或气体微观行为分析。",
        "数值上，该案例归入离散方法，使用 `molecularDynamics`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括速度场 `U`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点通常位于 `0`、`constant` 和 `system` 三类文件：分别给出初始/边界条件、物性/模型参数和数值控制。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/discreteMethods/molecularDynamics/mdFoam/nanoNozzle`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `molecularDynamics`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "electromagnetics-mhdfoam-hartmann",
    "title": "Steady flow of electromagnetic fluid between parallel plates with magnetic fields",
    "titleZh": "磁场中平行板间电磁流体稳态流动",
    "category": "Electromagnetics",
    "categoryZh": "电磁",
    "types": [
      "电磁"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "mhdFoam",
    "localPath": "electromagnetics/mhdFoam/hartmann",
    "download": "downloads/openfoam/electromagnetics-mhdfoam-hartmann.zip",
    "images": [
      {
        "url": "assets/openfoam/electromagnetics-mhdfoam-hartmann/result-01-hartmann-mesh.png",
        "alt": "Steady flow of electromagnetic fluid between parallel plates with magnetic fields result 1",
        "altZh": "磁场中平行板间电磁流体稳态流动结果图 1"
      },
      {
        "url": "assets/openfoam/electromagnetics-mhdfoam-hartmann/result-02-paraview-enable-b.png",
        "alt": "Steady flow of electromagnetic fluid between parallel plates with magnetic fields result 2",
        "altZh": "磁场中平行板间电磁流体稳态流动结果图 2"
      },
      {
        "url": "assets/openfoam/electromagnetics-mhdfoam-hartmann/result-03-hartmann-b.png",
        "alt": "Steady flow of electromagnetic fluid between parallel plates with magnetic fields result 3",
        "altZh": "磁场中平行板间电磁流体稳态流动结果图 3"
      },
      {
        "url": "assets/openfoam/electromagnetics-mhdfoam-hartmann/result-04-hartmann-u.png",
        "alt": "Steady flow of electromagnetic fluid between parallel plates with magnetic fields result 4",
        "altZh": "磁场中平行板间电磁流体稳态流动结果图 4"
      },
      {
        "url": "assets/openfoam/electromagnetics-mhdfoam-hartmann/result-05-hartmann-p.png",
        "alt": "Steady flow of electromagnetic fluid between parallel plates with magnetic fields result 5",
        "altZh": "磁场中平行板间电磁流体稳态流动结果图 5"
      },
      {
        "url": "assets/openfoam/electromagnetics-mhdfoam-hartmann/result-06-hartmann-sample.png",
        "alt": "Steady flow of electromagnetic fluid between parallel plates with magnetic fields result 6",
        "altZh": "磁场中平行板间电磁流体稳态流动结果图 6"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "B",
        "U",
        "p",
        "pB"
      ],
      "constants": [
        "transportProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟磁场作用下平行板间导电流体的 Hartmann 流，关注洛伦兹力如何改变速度剖面、压降和电磁阻尼。",
        "数值上，该案例归入电磁，使用 `mhdFoam`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括`B`、速度场 `U`、压力变量 `p`、`pB`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `transportProperties` 定义流体物性与输运系数。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/electromagnetics/mhdFoam/hartmann`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `mhdFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "heattransfer-buoyantsimplefoam-circuitboardcooling",
    "title": "Air cooling of heating plate",
    "titleZh": "加热板空气冷却",
    "category": "Heat transfer",
    "categoryZh": "传热",
    "types": [
      "传热",
      "单相"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "buoyantSimpleFoam",
    "localPath": "heatTransfer/buoyantSimpleFoam/circuitBoardCooling",
    "download": "downloads/openfoam/heattransfer-buoyantsimplefoam-circuitboardcooling.zip",
    "images": [
      {
        "url": "assets/openfoam/heattransfer-buoyantsimplefoam-circuitboardcooling/result-01-heattransfer-buoyantsimplefoam-circuitboardcooling-m.png",
        "alt": "Air cooling of heating plate result 1",
        "altZh": "加热板空气冷却结果图 1"
      },
      {
        "url": "assets/openfoam/heattransfer-buoyantsimplefoam-circuitboardcooling/result-02-heattransfer-buoyantsimplefoam-circuitboardcooling-u.png",
        "alt": "Air cooling of heating plate result 2",
        "altZh": "加热板空气冷却结果图 2"
      },
      {
        "url": "assets/openfoam/heattransfer-buoyantsimplefoam-circuitboardcooling/result-03-heattransfer-buoyantsimplefoam-circuitboardcooling-t.png",
        "alt": "Air cooling of heating plate result 3",
        "altZh": "加热板空气冷却结果图 3"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "T",
        "U",
        "alphat",
        "epsilon",
        "k",
        "nut",
        "p",
        "p_rgh"
      ],
      "constants": [
        "g",
        "thermophysicalProperties",
        "turbulenceProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟加热板或电路板周围的空气冷却过程，关注自然/强迫对流带走热量时的温度分布、速度场和热边界层。",
        "数值上，该案例归入传热，使用 `buoyantSimpleFoam`，可理解为 浮力驱动稳态传热求解器。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括温度场 `T`、速度场 `U`、相分数 `alphat`、湍流变量 `epsilon`、湍流变量 `k`、湍流变量 `nut`、压力变量 `p`、压力变量 `p_rgh`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `g` 定义重力方向与大小；`thermophysicalProperties` 定义热物性与状态方程；`turbulenceProperties` 定义湍流模型选择。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/heatTransfer/buoyantSimpleFoam/circuitBoardCooling`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `buoyantSimpleFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "heattransfer-buoyantboussinesqsimplefoam-igloowithfridges",
    "title": "Flow around the refrigerator in the igloo (ice chamber)",
    "titleZh": "冰室中冰箱周围流动",
    "category": "Heat transfer",
    "categoryZh": "传热",
    "types": [
      "传热",
      "单相"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "buoyantBoussinesqSimpleFoam",
    "localPath": "heatTransfer/buoyantBoussinesqSimpleFoam/iglooWithFridges",
    "download": "downloads/openfoam/heattransfer-buoyantboussinesqsimplefoam-igloowithfridges.zip",
    "images": [
      {
        "url": "assets/openfoam/heattransfer-buoyantboussinesqsimplefoam-igloowithfridges/result-01-heattransfer-buoyantboussinesqsimplefoam-igloowithfr.png",
        "alt": "Flow around the refrigerator in the igloo (ice chamber) result 1",
        "altZh": "冰室中冰箱周围流动结果图 1"
      },
      {
        "url": "assets/openfoam/heattransfer-buoyantboussinesqsimplefoam-igloowithfridges/result-02-heattransfer-buoyantboussinesqsimplefoam-igloowithfr.png",
        "alt": "Flow around the refrigerator in the igloo (ice chamber) result 2",
        "altZh": "冰室中冰箱周围流动结果图 2"
      },
      {
        "url": "assets/openfoam/heattransfer-buoyantboussinesqsimplefoam-igloowithfridges/result-03-heattransfer-buoyantboussinesqsimplefoam-igloowithfr.png",
        "alt": "Flow around the refrigerator in the igloo (ice chamber) result 3",
        "altZh": "冰室中冰箱周围流动结果图 3"
      },
      {
        "url": "assets/openfoam/heattransfer-buoyantboussinesqsimplefoam-igloowithfridges/result-04-heattransfer-buoyantboussinesqsimplefoam-igloowithfr.png",
        "alt": "Flow around the refrigerator in the igloo (ice chamber) result 4",
        "altZh": "冰室中冰箱周围流动结果图 4"
      },
      {
        "url": "assets/openfoam/heattransfer-buoyantboussinesqsimplefoam-igloowithfridges/result-05-heattransfer-buoyantboussinesqsimplefoam-igloowithfr.png",
        "alt": "Flow around the refrigerator in the igloo (ice chamber) result 5",
        "altZh": "冰室中冰箱周围流动结果图 5"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "T",
        "U",
        "alphat",
        "epsilon",
        "k",
        "nut",
        "p",
        "p_rgh"
      ],
      "constants": [
        "g",
        "transportProperties",
        "turbulenceProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟封闭冰室内冰箱周围的浮力驱动流动，关注冷热源形成的自然对流循环以及温度在室内空间中的分布。",
        "数值上，该案例归入传热，使用 `buoyantBoussinesqSimpleFoam`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括温度场 `T`、速度场 `U`、相分数 `alphat`、湍流变量 `epsilon`、湍流变量 `k`、湍流变量 `nut`、压力变量 `p`、压力变量 `p_rgh`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `g` 定义重力方向与大小；`transportProperties` 定义流体物性与输运系数；`turbulenceProperties` 定义湍流模型选择。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/heatTransfer/buoyantBoussinesqSimpleFoam/iglooWithFridges`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `buoyantBoussinesqSimpleFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "heattransfer-buoyantsimplefoam-buoyantcavity",
    "title": "Flow between plates with different temperatures",
    "titleZh": "不同温度平板间流动",
    "category": "Heat transfer",
    "categoryZh": "传热",
    "types": [
      "传热",
      "单相"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "buoyantSimpleFoam",
    "localPath": "heatTransfer/buoyantSimpleFoam/buoyantCavity",
    "download": "downloads/openfoam/heattransfer-buoyantsimplefoam-buoyantcavity.zip",
    "images": [
      {
        "url": "assets/openfoam/heattransfer-buoyantsimplefoam-buoyantcavity/result-01-heattransfer-buoyantsimplefoam-buoyantcavity-model.png",
        "alt": "Flow between plates with different temperatures result 1",
        "altZh": "不同温度平板间流动结果图 1"
      },
      {
        "url": "assets/openfoam/heattransfer-buoyantsimplefoam-buoyantcavity/result-02-heattransfer-buoyantsimplefoam-buoyantcavity-sample.png",
        "alt": "Flow between plates with different temperatures result 2",
        "altZh": "不同温度平板间流动结果图 2"
      },
      {
        "url": "assets/openfoam/heattransfer-buoyantsimplefoam-buoyantcavity/result-03-heattransfer-buoyantsimplefoam-buoyantcavity-mesh.png",
        "alt": "Flow between plates with different temperatures result 3",
        "altZh": "不同温度平板间流动结果图 3"
      },
      {
        "url": "assets/openfoam/heattransfer-buoyantsimplefoam-buoyantcavity/result-04-heattransfer-buoyantsimplefoam-buoyantcavity-mesh-zo.png",
        "alt": "Flow between plates with different temperatures result 4",
        "altZh": "不同温度平板间流动结果图 4"
      },
      {
        "url": "assets/openfoam/heattransfer-buoyantsimplefoam-buoyantcavity/result-05-heattransfer-buoyantsimplefoam-buoyantcavity-u-yz.png",
        "alt": "Flow between plates with different temperatures result 5",
        "altZh": "不同温度平板间流动结果图 5"
      },
      {
        "url": "assets/openfoam/heattransfer-buoyantsimplefoam-buoyantcavity/result-06-heattransfer-buoyantsimplefoam-buoyantcavity-t-yz.png",
        "alt": "Flow between plates with different temperatures result 6",
        "altZh": "不同温度平板间流动结果图 6"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "T",
        "U",
        "alphat",
        "epsilon",
        "k",
        "nut",
        "omega",
        "p",
        "p_rgh"
      ],
      "constants": [
        "g",
        "thermophysicalProperties",
        "turbulenceProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟两块不同温度平板之间的浮力驱动流动和热交换，关注温度梯度造成的自然对流、速度环流和热边界层。",
        "数值上，该案例归入传热，使用 `buoyantSimpleFoam`，可理解为 浮力驱动稳态传热求解器。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括温度场 `T`、速度场 `U`、相分数 `alphat`、湍流变量 `epsilon`、湍流变量 `k`、湍流变量 `nut`、湍流变量 `omega`、压力变量 `p`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `g` 定义重力方向与大小；`thermophysicalProperties` 定义热物性与状态方程；`turbulenceProperties` 定义湍流模型选择。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/heatTransfer/buoyantSimpleFoam/buoyantCavity`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `buoyantSimpleFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "heattransfer-chtmultiregionsimplefoam-heatexchanger",
    "title": "Heat exchanger",
    "titleZh": "换热器",
    "category": "Heat transfer",
    "categoryZh": "传热",
    "types": [
      "传热",
      "单相"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "chtMultiRegionSimpleFoam",
    "localPath": "heatTransfer/chtMultiRegionSimpleFoam/heatExchanger",
    "download": "downloads/openfoam/heattransfer-chtmultiregionsimplefoam-heatexchanger.zip",
    "images": [
      {
        "url": "assets/openfoam/heattransfer-chtmultiregionsimplefoam-heatexchanger/result-01-heattransfer-chtmultiregionsimplefoam-heatexchanger-.png",
        "alt": "Heat exchanger result 1",
        "altZh": "换热器结果图 1"
      },
      {
        "url": "assets/openfoam/heattransfer-chtmultiregionsimplefoam-heatexchanger/result-02-heattransfer-chtmultiregionsimplefoam-heatexchanger-.png",
        "alt": "Heat exchanger result 2",
        "altZh": "换热器结果图 2"
      },
      {
        "url": "assets/openfoam/heattransfer-chtmultiregionsimplefoam-heatexchanger/result-03-heattransfer-chtmultiregionsimplefoam-heatexchanger-.png",
        "alt": "Heat exchanger result 3",
        "altZh": "换热器结果图 3"
      },
      {
        "url": "assets/openfoam/heattransfer-chtmultiregionsimplefoam-heatexchanger/result-04-heattransfer-chtmultiregionsimplefoam-heatexchanger-.png",
        "alt": "Heat exchanger result 4",
        "altZh": "换热器结果图 4"
      },
      {
        "url": "assets/openfoam/heattransfer-chtmultiregionsimplefoam-heatexchanger/result-05-heattransfer-chtmultiregionsimplefoam-heatexchanger-.png",
        "alt": "Heat exchanger result 5",
        "altZh": "换热器结果图 5"
      },
      {
        "url": "assets/openfoam/heattransfer-chtmultiregionsimplefoam-heatexchanger/result-06-heattransfer-chtmultiregionsimplefoam-heatexchanger-.png",
        "alt": "Heat exchanger result 6",
        "altZh": "换热器结果图 6"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [],
      "constants": [
        "g",
        "regionProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟换热器内流体与固体壁面之间的共轭传热，关注冷热流体通道、固体导热和界面热通量之间的耦合。",
        "数值上，该案例归入传热，使用 `chtMultiRegionSimpleFoam`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要结果变量会在运行后的时间目录中生成，可重点查看速度、压力、温度、相分数或位移等与物理问题对应的场量。配置重点包括 `g` 定义重力方向与大小。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/heatTransfer/chtMultiRegionSimpleFoam/heatExchanger`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `chtMultiRegionSimpleFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "heattransfer-chtmultiregionfoam-multiregionheater",
    "title": "Heat transfer between multiple solids and fluids",
    "titleZh": "多固体与流体间传热",
    "category": "Heat transfer",
    "categoryZh": "传热",
    "types": [
      "传热",
      "流固耦合"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "chtMultiRegionFoam",
    "localPath": "heatTransfer/chtMultiRegionFoam/multiRegionHeater",
    "download": "downloads/openfoam/heattransfer-chtmultiregionfoam-multiregionheater.zip",
    "images": [
      {
        "url": "assets/openfoam/heattransfer-chtmultiregionfoam-multiregionheater/result-01-heattransfer-chtmultiregionfoam-multiregionheater-he.png",
        "alt": "Heat transfer between multiple solids and fluids result 1",
        "altZh": "多固体与流体间传热结果图 1"
      },
      {
        "url": "assets/openfoam/heattransfer-chtmultiregionfoam-multiregionheater/result-02-heattransfer-chtmultiregionfoam-multiregionheater-le.png",
        "alt": "Heat transfer between multiple solids and fluids result 2",
        "altZh": "多固体与流体间传热结果图 2"
      },
      {
        "url": "assets/openfoam/heattransfer-chtmultiregionfoam-multiregionheater/result-03-heattransfer-chtmultiregionfoam-multiregionheater-ri.png",
        "alt": "Heat transfer between multiple solids and fluids result 3",
        "altZh": "多固体与流体间传热结果图 3"
      },
      {
        "url": "assets/openfoam/heattransfer-chtmultiregionfoam-multiregionheater/result-04-heattransfer-chtmultiregionfoam-multiregionheater-bo.png",
        "alt": "Heat transfer between multiple solids and fluids result 4",
        "altZh": "多固体与流体间传热结果图 4"
      },
      {
        "url": "assets/openfoam/heattransfer-chtmultiregionfoam-multiregionheater/result-05-heattransfer-chtmultiregionfoam-multiregionheater-to.png",
        "alt": "Heat transfer between multiple solids and fluids result 5",
        "altZh": "多固体与流体间传热结果图 5"
      },
      {
        "url": "assets/openfoam/heattransfer-chtmultiregionfoam-multiregionheater/result-06-heattransfer-chtmultiregionfoam-multiregionheater-pa.png",
        "alt": "Heat transfer between multiple solids and fluids result 6",
        "altZh": "多固体与流体间传热结果图 6"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "T",
        "U",
        "epsilon",
        "k",
        "p",
        "p_rgh"
      ],
      "constants": [
        "g",
        "regionProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟多个固体区域与流体区域之间的共轭传热，关注固体导热、流体对流和区域界面温度连续性。",
        "数值上，该案例归入传热，使用 `chtMultiRegionFoam`，可理解为 多区域共轭传热求解器。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括温度场 `T`、速度场 `U`、湍流变量 `epsilon`、湍流变量 `k`、压力变量 `p`、压力变量 `p_rgh`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `g` 定义重力方向与大小。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/heatTransfer/chtMultiRegionFoam/multiRegionHeater`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `chtMultiRegionFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "heattransfer-chtmultiregionfoam-snappymultiregionheater",
    "title": "Heat transfer between multiple solids and fluids (snappyHexMesh)",
    "titleZh": "多固体与流体间传热（snappyHexMesh）",
    "category": "Heat transfer",
    "categoryZh": "传热",
    "types": [
      "传热",
      "流固耦合",
      "网格"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "chtMultiRegionFoam",
    "localPath": "heatTransfer/chtMultiRegionFoam/snappyMultiRegionHeater",
    "download": "downloads/openfoam/heattransfer-chtmultiregionfoam-snappymultiregionheater.zip",
    "images": [
      {
        "url": "assets/openfoam/heattransfer-chtmultiregionfoam-snappymultiregionheater/result-01-heattransfer-chtmultiregionfoam-multiregionheater-he.png",
        "alt": "Heat transfer between multiple solids and fluids (snappyHexMesh) result 1",
        "altZh": "多固体与流体间传热（snappyHexMesh）结果图 1"
      },
      {
        "url": "assets/openfoam/heattransfer-chtmultiregionfoam-snappymultiregionheater/result-02-heattransfer-chtmultiregionfoam-multiregionheater-le.png",
        "alt": "Heat transfer between multiple solids and fluids (snappyHexMesh) result 2",
        "altZh": "多固体与流体间传热（snappyHexMesh）结果图 2"
      },
      {
        "url": "assets/openfoam/heattransfer-chtmultiregionfoam-snappymultiregionheater/result-03-heattransfer-chtmultiregionfoam-multiregionheater-ri.png",
        "alt": "Heat transfer between multiple solids and fluids (snappyHexMesh) result 3",
        "altZh": "多固体与流体间传热（snappyHexMesh）结果图 3"
      },
      {
        "url": "assets/openfoam/heattransfer-chtmultiregionfoam-snappymultiregionheater/result-04-heattransfer-chtmultiregionfoam-multiregionheater-bo.png",
        "alt": "Heat transfer between multiple solids and fluids (snappyHexMesh) result 4",
        "altZh": "多固体与流体间传热（snappyHexMesh）结果图 4"
      },
      {
        "url": "assets/openfoam/heattransfer-chtmultiregionfoam-snappymultiregionheater/result-05-heattransfer-chtmultiregionfoam-multiregionheater-to.png",
        "alt": "Heat transfer between multiple solids and fluids (snappyHexMesh) result 5",
        "altZh": "多固体与流体间传热（snappyHexMesh）结果图 5"
      },
      {
        "url": "assets/openfoam/heattransfer-chtmultiregionfoam-snappymultiregionheater/result-06-heattransfer-chtmultiregionfoam-snappymultiregionhea.png",
        "alt": "Heat transfer between multiple solids and fluids (snappyHexMesh) result 6",
        "altZh": "多固体与流体间传热（snappyHexMesh）结果图 6"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "T",
        "U",
        "alphat",
        "epsilon",
        "k",
        "p",
        "p_rgh",
        "rho"
      ],
      "constants": [
        "g",
        "regionProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟多个固体区域与流体区域之间的共轭传热，关注固体导热、流体对流和区域界面温度连续性。",
        "数值上，该案例归入传热，使用 `chtMultiRegionFoam`，可理解为 多区域共轭传热求解器。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括温度场 `T`、速度场 `U`、相分数 `alphat`、湍流变量 `epsilon`、湍流变量 `k`、压力变量 `p`、压力变量 `p_rgh`、密度相关变量 `rho`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `g` 定义重力方向与大小。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/heatTransfer/chtMultiRegionFoam/snappyMultiRegionHeater`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `chtMultiRegionFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "heattransfer-chtmultiregionsimplefoam-multiregionheaterradiation",
    "title": "Heat transfer between multiple solids and fluids (with radiation)",
    "titleZh": "多固体与流体间传热（含辐射）",
    "category": "Heat transfer",
    "categoryZh": "传热",
    "types": [
      "传热",
      "单相",
      "流固耦合"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "chtMultiRegionSimpleFoam",
    "localPath": "heatTransfer/chtMultiRegionSimpleFoam/multiRegionHeaterRadiation",
    "download": "downloads/openfoam/heattransfer-chtmultiregionsimplefoam-multiregionheaterradiation.zip",
    "images": [
      {
        "url": "assets/openfoam/heattransfer-chtmultiregionsimplefoam-multiregionheaterradiation/result-01-heattransfer-chtmultiregionfoam-multiregionheater-he.png",
        "alt": "Heat transfer between multiple solids and fluids (with radiation) result 1",
        "altZh": "多固体与流体间传热（含辐射）结果图 1"
      },
      {
        "url": "assets/openfoam/heattransfer-chtmultiregionsimplefoam-multiregionheaterradiation/result-02-heattransfer-chtmultiregionfoam-multiregionheater-le.png",
        "alt": "Heat transfer between multiple solids and fluids (with radiation) result 2",
        "altZh": "多固体与流体间传热（含辐射）结果图 2"
      },
      {
        "url": "assets/openfoam/heattransfer-chtmultiregionsimplefoam-multiregionheaterradiation/result-03-heattransfer-chtmultiregionfoam-multiregionheater-ri.png",
        "alt": "Heat transfer between multiple solids and fluids (with radiation) result 3",
        "altZh": "多固体与流体间传热（含辐射）结果图 3"
      },
      {
        "url": "assets/openfoam/heattransfer-chtmultiregionsimplefoam-multiregionheaterradiation/result-04-heattransfer-chtmultiregionfoam-multiregionheater-bo.png",
        "alt": "Heat transfer between multiple solids and fluids (with radiation) result 4",
        "altZh": "多固体与流体间传热（含辐射）结果图 4"
      },
      {
        "url": "assets/openfoam/heattransfer-chtmultiregionsimplefoam-multiregionheaterradiation/result-05-heattransfer-chtmultiregionfoam-multiregionheater-to.png",
        "alt": "Heat transfer between multiple solids and fluids (with radiation) result 5",
        "altZh": "多固体与流体间传热（含辐射）结果图 5"
      },
      {
        "url": "assets/openfoam/heattransfer-chtmultiregionsimplefoam-multiregionheaterradiation/result-06-heattransfer-chtmultiregionsimplefoam-multiregionhea.png",
        "alt": "Heat transfer between multiple solids and fluids (with radiation) result 6",
        "altZh": "多固体与流体间传热（含辐射）结果图 6"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "G",
        "IDefault",
        "T",
        "U",
        "epsilon",
        "k",
        "p",
        "p_rgh",
        "qr"
      ],
      "constants": [
        "g",
        "regionProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟多个固体区域与流体区域之间的共轭传热，关注固体导热、流体对流和区域界面温度连续性。",
        "数值上，该案例归入传热，使用 `chtMultiRegionSimpleFoam`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括`G`、`IDefault`、温度场 `T`、速度场 `U`、湍流变量 `epsilon`、湍流变量 `k`、压力变量 `p`、压力变量 `p_rgh`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `g` 定义重力方向与大小。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/heatTransfer/chtMultiRegionSimpleFoam/multiRegionHeaterRadiation`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `chtMultiRegionSimpleFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "heattransfer-buoyantboussinesqsimplefoam-hotroom",
    "title": "Natural convection in a rectangular domain (Steady, Boussinesq approximation)",
    "titleZh": "矩形区域自然对流（稳态，Boussinesq 近似）",
    "category": "Heat transfer",
    "categoryZh": "传热",
    "types": [
      "传热",
      "单相"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "buoyantBoussinesqSimpleFoam",
    "localPath": "heatTransfer/buoyantBoussinesqSimpleFoam/hotRoom",
    "download": "downloads/openfoam/heattransfer-buoyantboussinesqsimplefoam-hotroom.zip",
    "images": [
      {
        "url": "assets/openfoam/heattransfer-buoyantboussinesqsimplefoam-hotroom/result-01-heattransfer-hotroom-model.png",
        "alt": "Natural convection in a rectangular domain (Steady, Boussinesq approximation) result 1",
        "altZh": "矩形区域自然对流（稳态，Boussinesq 近似）结果图 1"
      },
      {
        "url": "assets/openfoam/heattransfer-buoyantboussinesqsimplefoam-hotroom/result-02-heattransfer-hotroom-mesh.png",
        "alt": "Natural convection in a rectangular domain (Steady, Boussinesq approximation) result 2",
        "altZh": "矩形区域自然对流（稳态，Boussinesq 近似）结果图 2"
      },
      {
        "url": "assets/openfoam/heattransfer-buoyantboussinesqsimplefoam-hotroom/result-03-heattransfer-buoyantboussinesqsimplefoam-hotroom-u.png",
        "alt": "Natural convection in a rectangular domain (Steady, Boussinesq approximation) result 3",
        "altZh": "矩形区域自然对流（稳态，Boussinesq 近似）结果图 3"
      },
      {
        "url": "assets/openfoam/heattransfer-buoyantboussinesqsimplefoam-hotroom/result-04-heattransfer-buoyantboussinesqsimplefoam-hotroom-t.png",
        "alt": "Natural convection in a rectangular domain (Steady, Boussinesq approximation) result 4",
        "altZh": "矩形区域自然对流（稳态，Boussinesq 近似）结果图 4"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "T",
        "U",
        "alphat",
        "epsilon",
        "k",
        "nut",
        "p",
        "p_rgh"
      ],
      "constants": [
        "g",
        "transportProperties",
        "turbulenceProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟矩形区域中的自然对流，热浮力驱动流体循环并形成温度分层。它重点观察温度场、速度场和辐射/非辐射模型对热输运的影响。",
        "数值上，该案例归入传热，使用 `buoyantBoussinesqSimpleFoam`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括温度场 `T`、速度场 `U`、相分数 `alphat`、湍流变量 `epsilon`、湍流变量 `k`、湍流变量 `nut`、压力变量 `p`、压力变量 `p_rgh`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `g` 定义重力方向与大小；`transportProperties` 定义流体物性与输运系数；`turbulenceProperties` 定义湍流模型选择。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/heatTransfer/buoyantBoussinesqSimpleFoam/hotRoom`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `buoyantBoussinesqSimpleFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "heattransfer-buoyantpimplefoam-hotroom",
    "title": "Natural convection in a rectangular domain (Unsteady)",
    "titleZh": "矩形区域自然对流（非稳态）",
    "category": "Heat transfer",
    "categoryZh": "传热",
    "types": [
      "传热",
      "单相"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "buoyantPimpleFoam",
    "localPath": "heatTransfer/buoyantPimpleFoam/hotRoom",
    "download": "downloads/openfoam/heattransfer-buoyantpimplefoam-hotroom.zip",
    "images": [
      {
        "url": "assets/openfoam/heattransfer-buoyantpimplefoam-hotroom/result-01-heattransfer-hotroom-model.png",
        "alt": "Natural convection in a rectangular domain (Unsteady) result 1",
        "altZh": "矩形区域自然对流（非稳态）结果图 1"
      },
      {
        "url": "assets/openfoam/heattransfer-buoyantpimplefoam-hotroom/result-02-heattransfer-hotroom-mesh.png",
        "alt": "Natural convection in a rectangular domain (Unsteady) result 2",
        "altZh": "矩形区域自然对流（非稳态）结果图 2"
      },
      {
        "url": "assets/openfoam/heattransfer-buoyantpimplefoam-hotroom/result-03-heattransfer-buoyantpimplefoam-hotroom-u.png",
        "alt": "Natural convection in a rectangular domain (Unsteady) result 3",
        "altZh": "矩形区域自然对流（非稳态）结果图 3"
      },
      {
        "url": "assets/openfoam/heattransfer-buoyantpimplefoam-hotroom/result-04-heattransfer-buoyantpimplefoam-hotroom-t.png",
        "alt": "Natural convection in a rectangular domain (Unsteady) result 4",
        "altZh": "矩形区域自然对流（非稳态）结果图 4"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "T",
        "U",
        "alphat",
        "epsilon",
        "k",
        "nut",
        "p",
        "p_rgh"
      ],
      "constants": [
        "g",
        "thermophysicalProperties",
        "turbulenceProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟矩形区域中的自然对流，热浮力驱动流体循环并形成温度分层。它重点观察温度场、速度场和辐射/非辐射模型对热输运的影响。",
        "数值上，该案例归入传热，使用 `buoyantPimpleFoam`，可理解为 浮力驱动瞬态传热求解器。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括温度场 `T`、速度场 `U`、相分数 `alphat`、湍流变量 `epsilon`、湍流变量 `k`、湍流变量 `nut`、压力变量 `p`、压力变量 `p_rgh`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `g` 定义重力方向与大小；`thermophysicalProperties` 定义热物性与状态方程；`turbulenceProperties` 定义湍流模型选择。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/heatTransfer/buoyantPimpleFoam/hotRoom`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `buoyantPimpleFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "heattransfer-buoyantboussinesqpimplefoam-hotroom",
    "title": "Natural convection in a rectangular domain (Unsteady, Boussinesq approximation)",
    "titleZh": "矩形区域自然对流（非稳态，Boussinesq 近似）",
    "category": "Heat transfer",
    "categoryZh": "传热",
    "types": [
      "传热",
      "单相"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "buoyantBoussinesqPimpleFoam",
    "localPath": "heatTransfer/buoyantBoussinesqPimpleFoam/hotRoom",
    "download": "downloads/openfoam/heattransfer-buoyantboussinesqpimplefoam-hotroom.zip",
    "images": [
      {
        "url": "assets/openfoam/heattransfer-buoyantboussinesqpimplefoam-hotroom/result-01-heattransfer-hotroom-model.png",
        "alt": "Natural convection in a rectangular domain (Unsteady, Boussinesq approximation) result 1",
        "altZh": "矩形区域自然对流（非稳态，Boussinesq 近似）结果图 1"
      },
      {
        "url": "assets/openfoam/heattransfer-buoyantboussinesqpimplefoam-hotroom/result-02-heattransfer-hotroom-mesh.png",
        "alt": "Natural convection in a rectangular domain (Unsteady, Boussinesq approximation) result 2",
        "altZh": "矩形区域自然对流（非稳态，Boussinesq 近似）结果图 2"
      },
      {
        "url": "assets/openfoam/heattransfer-buoyantboussinesqpimplefoam-hotroom/result-03-heattransfer-buoyantboussinesqpimplefoam-hotroom-u.png",
        "alt": "Natural convection in a rectangular domain (Unsteady, Boussinesq approximation) result 3",
        "altZh": "矩形区域自然对流（非稳态，Boussinesq 近似）结果图 3"
      },
      {
        "url": "assets/openfoam/heattransfer-buoyantboussinesqpimplefoam-hotroom/result-04-heattransfer-buoyantboussinesqpimplefoam-hotroom-t.png",
        "alt": "Natural convection in a rectangular domain (Unsteady, Boussinesq approximation) result 4",
        "altZh": "矩形区域自然对流（非稳态，Boussinesq 近似）结果图 4"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "T",
        "U",
        "alphat",
        "epsilon",
        "k",
        "nut",
        "p",
        "p_rgh"
      ],
      "constants": [
        "g",
        "transportProperties",
        "turbulenceProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟矩形区域中的自然对流，热浮力驱动流体循环并形成温度分层。它重点观察温度场、速度场和辐射/非辐射模型对热输运的影响。",
        "数值上，该案例归入传热，使用 `buoyantBoussinesqPimpleFoam`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括温度场 `T`、速度场 `U`、相分数 `alphat`、湍流变量 `epsilon`、湍流变量 `k`、湍流变量 `nut`、压力变量 `p`、压力变量 `p_rgh`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `g` 定义重力方向与大小；`transportProperties` 定义流体物性与输运系数；`turbulenceProperties` 定义湍流模型选择。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/heatTransfer/buoyantBoussinesqPimpleFoam/hotRoom`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `buoyantBoussinesqPimpleFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "heattransfer-buoyantsimplefoam-hotradiationroom",
    "title": "Natural convection in a rectangular region with radiation",
    "titleZh": "矩形区域含辐射自然对流",
    "category": "Heat transfer",
    "categoryZh": "传热",
    "types": [
      "传热",
      "单相"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "buoyantSimpleFoam",
    "localPath": "heatTransfer/buoyantSimpleFoam/hotRadiationRoom",
    "download": "downloads/openfoam/heattransfer-buoyantsimplefoam-hotradiationroom.zip",
    "images": [
      {
        "url": "assets/openfoam/heattransfer-buoyantsimplefoam-hotradiationroom/result-01-heattransfer-buoyantsimplefoam-hotradiationroom-mode.png",
        "alt": "Natural convection in a rectangular region with radiation result 1",
        "altZh": "矩形区域含辐射自然对流结果图 1"
      },
      {
        "url": "assets/openfoam/heattransfer-buoyantsimplefoam-hotradiationroom/result-02-heattransfer-buoyantsimplefoam-hotradiationroom-mesh.png",
        "alt": "Natural convection in a rectangular region with radiation result 2",
        "altZh": "矩形区域含辐射自然对流结果图 2"
      },
      {
        "url": "assets/openfoam/heattransfer-buoyantsimplefoam-hotradiationroom/result-03-heattransfer-buoyantsimplefoam-hotradiationroom-mesh.png",
        "alt": "Natural convection in a rectangular region with radiation result 3",
        "altZh": "矩形区域含辐射自然对流结果图 3"
      },
      {
        "url": "assets/openfoam/heattransfer-buoyantsimplefoam-hotradiationroom/result-04-heattransfer-buoyantsimplefoam-hotradiationroom-t.png",
        "alt": "Natural convection in a rectangular region with radiation result 4",
        "altZh": "矩形区域含辐射自然对流结果图 4"
      },
      {
        "url": "assets/openfoam/heattransfer-buoyantsimplefoam-hotradiationroom/result-05-heattransfer-buoyantsimplefoam-hotradiationroom-u-xz.png",
        "alt": "Natural convection in a rectangular region with radiation result 5",
        "altZh": "矩形区域含辐射自然对流结果图 5"
      },
      {
        "url": "assets/openfoam/heattransfer-buoyantsimplefoam-hotradiationroom/result-06-heattransfer-buoyantsimplefoam-hotradiationroom-t-xz.png",
        "alt": "Natural convection in a rectangular region with radiation result 6",
        "altZh": "矩形区域含辐射自然对流结果图 6"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "G",
        "T",
        "U",
        "alphat",
        "epsilon",
        "k",
        "nut",
        "p",
        "p_rgh"
      ],
      "constants": [
        "boundaryRadiationProperties",
        "g",
        "radiationProperties",
        "thermophysicalProperties",
        "turbulenceProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟矩形区域中的自然对流，热浮力驱动流体循环并形成温度分层。它重点观察温度场、速度场和辐射/非辐射模型对热输运的影响。",
        "数值上，该案例归入传热，使用 `buoyantSimpleFoam`，可理解为 浮力驱动稳态传热求解器。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括`G`、温度场 `T`、速度场 `U`、相分数 `alphat`、湍流变量 `epsilon`、湍流变量 `k`、湍流变量 `nut`、压力变量 `p`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `g` 定义重力方向与大小；`radiationProperties` 定义辐射换热模型；`thermophysicalProperties` 定义热物性与状态方程；`turbulenceProperties` 定义湍流模型选择。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/heatTransfer/buoyantSimpleFoam/hotRadiationRoom`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `buoyantSimpleFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "heattransfer-buoyantsimplefoam-hotradiationroomfvdom",
    "title": "Natural convection in a rectangular region with radiation (fvDOM model)",
    "titleZh": "矩形区域含辐射自然对流（fvDOM 模型）",
    "category": "Heat transfer",
    "categoryZh": "传热",
    "types": [
      "传热",
      "单相"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "buoyantSimpleFoam",
    "localPath": "heatTransfer/buoyantSimpleFoam/hotRadiationRoomFvDOM",
    "download": "downloads/openfoam/heattransfer-buoyantsimplefoam-hotradiationroomfvdom.zip",
    "images": [
      {
        "url": "assets/openfoam/heattransfer-buoyantsimplefoam-hotradiationroomfvdom/result-01-heattransfer-buoyantsimplefoam-hotradiationroom-mode.png",
        "alt": "Natural convection in a rectangular region with radiation (fvDOM model) result 1",
        "altZh": "矩形区域含辐射自然对流（fvDOM 模型）结果图 1"
      },
      {
        "url": "assets/openfoam/heattransfer-buoyantsimplefoam-hotradiationroomfvdom/result-02-heattransfer-buoyantsimplefoam-hotradiationroom-mesh.png",
        "alt": "Natural convection in a rectangular region with radiation (fvDOM model) result 2",
        "altZh": "矩形区域含辐射自然对流（fvDOM 模型）结果图 2"
      },
      {
        "url": "assets/openfoam/heattransfer-buoyantsimplefoam-hotradiationroomfvdom/result-03-heattransfer-buoyantsimplefoam-hotradiationroom-mesh.png",
        "alt": "Natural convection in a rectangular region with radiation (fvDOM model) result 3",
        "altZh": "矩形区域含辐射自然对流（fvDOM 模型）结果图 3"
      },
      {
        "url": "assets/openfoam/heattransfer-buoyantsimplefoam-hotradiationroomfvdom/result-04-heattransfer-buoyantsimplefoam-hotradiationroomfvdom.png",
        "alt": "Natural convection in a rectangular region with radiation (fvDOM model) result 4",
        "altZh": "矩形区域含辐射自然对流（fvDOM 模型）结果图 4"
      },
      {
        "url": "assets/openfoam/heattransfer-buoyantsimplefoam-hotradiationroomfvdom/result-05-heattransfer-buoyantsimplefoam-hotradiationroomfvdom.png",
        "alt": "Natural convection in a rectangular region with radiation (fvDOM model) result 5",
        "altZh": "矩形区域含辐射自然对流（fvDOM 模型）结果图 5"
      },
      {
        "url": "assets/openfoam/heattransfer-buoyantsimplefoam-hotradiationroomfvdom/result-06-heattransfer-buoyantsimplefoam-hotradiationroomfvdom.png",
        "alt": "Natural convection in a rectangular region with radiation (fvDOM model) result 6",
        "altZh": "矩形区域含辐射自然对流（fvDOM 模型）结果图 6"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "G",
        "IDefault",
        "T",
        "U",
        "alphat",
        "epsilon",
        "k",
        "nut",
        "p",
        "p_rgh"
      ],
      "constants": [
        "boundaryRadiationProperties",
        "g",
        "radiationProperties",
        "thermophysicalProperties",
        "turbulenceProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟矩形区域中的自然对流，热浮力驱动流体循环并形成温度分层。它重点观察温度场、速度场和辐射/非辐射模型对热输运的影响。",
        "数值上，该案例归入传热，使用 `buoyantSimpleFoam`，可理解为 浮力驱动稳态传热求解器。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括`G`、`IDefault`、温度场 `T`、速度场 `U`、相分数 `alphat`、湍流变量 `epsilon`、湍流变量 `k`、湍流变量 `nut`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `g` 定义重力方向与大小；`radiationProperties` 定义辐射换热模型；`thermophysicalProperties` 定义热物性与状态方程；`turbulenceProperties` 定义湍流模型选择。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/heatTransfer/buoyantSimpleFoam/hotRadiationRoomFvDOM`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `buoyantSimpleFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "incompressible-simplefoam-mixervessel2d",
    "title": "2-dimensional analysis of a cylindrical mixer",
    "titleZh": "圆柱搅拌器二维分析",
    "category": "Incompressible fluid",
    "categoryZh": "不可压流体",
    "types": [
      "单相",
      "可压缩"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "simpleFoam",
    "localPath": "incompressible/simpleFoam/mixerVessel2D",
    "download": "downloads/openfoam/incompressible-simplefoam-mixervessel2d.zip",
    "images": [
      {
        "url": "assets/openfoam/incompressible-simplefoam-mixervessel2d/result-01-mixervessel2d-model.png",
        "alt": "2-dimensional analysis of a cylindrical mixer result 1",
        "altZh": "圆柱搅拌器二维分析结果图 1"
      },
      {
        "url": "assets/openfoam/incompressible-simplefoam-mixervessel2d/result-02-mixervessel2d-cellzone.png",
        "alt": "2-dimensional analysis of a cylindrical mixer result 2",
        "altZh": "圆柱搅拌器二维分析结果图 2"
      },
      {
        "url": "assets/openfoam/incompressible-simplefoam-mixervessel2d/result-03-mixervessel2d-mesh.png",
        "alt": "2-dimensional analysis of a cylindrical mixer result 3",
        "altZh": "圆柱搅拌器二维分析结果图 3"
      },
      {
        "url": "assets/openfoam/incompressible-simplefoam-mixervessel2d/result-04-mixervessel2d-u.png",
        "alt": "2-dimensional analysis of a cylindrical mixer result 4",
        "altZh": "圆柱搅拌器二维分析结果图 4"
      },
      {
        "url": "assets/openfoam/incompressible-simplefoam-mixervessel2d/result-05-mixervessel2d-p.png",
        "alt": "2-dimensional analysis of a cylindrical mixer result 5",
        "altZh": "圆柱搅拌器二维分析结果图 5"
      },
      {
        "url": "assets/openfoam/incompressible-simplefoam-mixervessel2d/result-06-mixervessel2d-k.png",
        "alt": "2-dimensional analysis of a cylindrical mixer result 6",
        "altZh": "圆柱搅拌器二维分析结果图 6"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "U",
        "epsilon",
        "k",
        "nut",
        "p"
      ],
      "constants": [
        "MRFProperties",
        "transportProperties",
        "turbulenceProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟圆柱搅拌器周围的单相流动，关注旋转参考系或运动边界对速度场、涡结构和压力分布的影响。",
        "数值上，该案例归入不可压流体，使用 `simpleFoam`，可理解为 不可压稳态 SIMPLE 求解器。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括速度场 `U`、湍流变量 `epsilon`、湍流变量 `k`、湍流变量 `nut`、压力变量 `p`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `MRFProperties` 定义旋转参考系或搅拌区域；`transportProperties` 定义流体物性与输运系数；`turbulenceProperties` 定义湍流模型选择。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/incompressible/simpleFoam/mixerVessel2D`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `simpleFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "incompressible-simplefoam-turbinesiting",
    "title": "Analysis of wind turbines placed on terrain data",
    "titleZh": "地形数据上的风机布置分析",
    "category": "Incompressible fluid",
    "categoryZh": "不可压流体",
    "types": [
      "单相",
      "湍流",
      "可压缩"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "simpleFoam",
    "localPath": "incompressible/simpleFoam/turbineSiting",
    "download": "downloads/openfoam/incompressible-simplefoam-turbinesiting.zip",
    "images": [
      {
        "url": "assets/openfoam/incompressible-simplefoam-turbinesiting/result-01-turbinesiting-model.png",
        "alt": "Analysis of wind turbines placed on terrain data result 1",
        "altZh": "地形数据上的风机布置分析结果图 1"
      },
      {
        "url": "assets/openfoam/incompressible-simplefoam-turbinesiting/result-02-turbinesiting-model-zoom.png",
        "alt": "Analysis of wind turbines placed on terrain data result 2",
        "altZh": "地形数据上的风机布置分析结果图 2"
      },
      {
        "url": "assets/openfoam/incompressible-simplefoam-turbinesiting/result-03-turbinesiting-mesh.png",
        "alt": "Analysis of wind turbines placed on terrain data result 3",
        "altZh": "地形数据上的风机布置分析结果图 3"
      },
      {
        "url": "assets/openfoam/incompressible-simplefoam-turbinesiting/result-04-turbinesiting-u-z1070.png",
        "alt": "Analysis of wind turbines placed on terrain data result 4",
        "altZh": "地形数据上的风机布置分析结果图 4"
      },
      {
        "url": "assets/openfoam/incompressible-simplefoam-turbinesiting/result-05-turbinesiting-u-z1070-zoom.png",
        "alt": "Analysis of wind turbines placed on terrain data result 5",
        "altZh": "地形数据上的风机布置分析结果图 5"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "U",
        "epsilon",
        "k",
        "nut",
        "p"
      ],
      "constants": [
        "fvOptions",
        "transportProperties",
        "turbulenceProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟复杂地形上风机布置后的来流绕行和尾流影响，关注地形起伏对风速分布、局部加速区和风机选址的影响。",
        "数值上，该案例归入不可压流体，使用 `simpleFoam`，可理解为 不可压稳态 SIMPLE 求解器。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括速度场 `U`、湍流变量 `epsilon`、湍流变量 `k`、湍流变量 `nut`、压力变量 `p`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `transportProperties` 定义流体物性与输运系数；`turbulenceProperties` 定义湍流模型选择。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/incompressible/simpleFoam/turbineSiting`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `simpleFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "incompressible-icofoam-elbow",
    "title": "Bent pipe with multiple inlets",
    "titleZh": "多入口弯管流动",
    "category": "Incompressible fluid",
    "categoryZh": "不可压流体",
    "types": [
      "单相",
      "可压缩"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "icoFoam",
    "localPath": "incompressible/icoFoam/elbow",
    "download": "downloads/openfoam/incompressible-icofoam-elbow.zip",
    "images": [
      {
        "url": "assets/openfoam/incompressible-icofoam-elbow/result-01-elbow-model.png",
        "alt": "Bent pipe with multiple inlets result 1",
        "altZh": "多入口弯管流动结果图 1"
      },
      {
        "url": "assets/openfoam/incompressible-icofoam-elbow/result-02-elbow-mesh.png",
        "alt": "Bent pipe with multiple inlets result 2",
        "altZh": "多入口弯管流动结果图 2"
      },
      {
        "url": "assets/openfoam/incompressible-icofoam-elbow/result-03-elbow-u.png",
        "alt": "Bent pipe with multiple inlets result 3",
        "altZh": "多入口弯管流动结果图 3"
      },
      {
        "url": "assets/openfoam/incompressible-icofoam-elbow/result-04-elbow-p.png",
        "alt": "Bent pipe with multiple inlets result 4",
        "altZh": "多入口弯管流动结果图 4"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "U",
        "p"
      ],
      "constants": [
        "transportProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟多入口弯管中的不可压瞬态流动，关注入口流股汇合、弯头二次流和压力/速度场重分布。",
        "数值上，该案例归入不可压流体，使用 `icoFoam`，可理解为 不可压瞬态层流求解器。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括速度场 `U`、压力变量 `p`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `transportProperties` 定义流体物性与输运系数。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/incompressible/icoFoam/elbow`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `icoFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "incompressible-icofoam-cavity",
    "title": "Cavity flow",
    "titleZh": "方腔流动",
    "category": "Incompressible fluid",
    "categoryZh": "不可压流体",
    "types": [
      "单相",
      "可压缩"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "icoFoam",
    "localPath": "incompressible/icoFoam/cavity",
    "download": "downloads/openfoam/incompressible-icofoam-cavity.zip",
    "images": [
      {
        "url": "assets/openfoam/incompressible-icofoam-cavity/result-01-cavity-mesh.png",
        "alt": "Cavity flow result 1",
        "altZh": "方腔流动结果图 1"
      },
      {
        "url": "assets/openfoam/incompressible-icofoam-cavity/result-02-cavity-u.png",
        "alt": "Cavity flow result 2",
        "altZh": "方腔流动结果图 2"
      },
      {
        "url": "assets/openfoam/incompressible-icofoam-cavity/result-03-cavity-p.png",
        "alt": "Cavity flow result 3",
        "altZh": "方腔流动结果图 3"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [],
      "constants": [],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟经典顶盖驱动方腔流，移动壁面带动封闭腔体内形成主涡和角涡。它是验证不可压瞬态求解器、边界条件和网格收敛性的基础算例。",
        "数值上，该案例归入不可压流体，使用 `icoFoam`，可理解为 不可压瞬态层流求解器。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要结果变量会在运行后的时间目录中生成，可重点查看速度、压力、温度、相分数或位移等与物理问题对应的场量。配置重点通常位于 `0`、`constant` 和 `system` 三类文件：分别给出初始/边界条件、物性/模型参数和数值控制。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/incompressible/icoFoam/cavity`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `icoFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "incompressible-icofoam-cavity-cavity-flow-mapping-data-to-",
    "title": "Cavity flow (mapping data to different mesh)",
    "titleZh": "方腔流动（映射数据到不同网格）",
    "category": "Incompressible fluid",
    "categoryZh": "不可压流体",
    "types": [
      "单相",
      "可压缩",
      "网格"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "icoFoam",
    "localPath": "incompressible/icoFoam/cavity",
    "download": "downloads/openfoam/incompressible-icofoam-cavity-cavity-flow-mapping-data-to-.zip",
    "images": [
      {
        "url": "assets/openfoam/incompressible-icofoam-cavity-cavity-flow-mapping-data-to-/result-01-cavitygrade-cavity-mesh.png",
        "alt": "Cavity flow (mapping data to different mesh) result 1",
        "altZh": "方腔流动（映射数据到不同网格）结果图 1"
      },
      {
        "url": "assets/openfoam/incompressible-icofoam-cavity-cavity-flow-mapping-data-to-/result-02-cavitygrade-cavityfine-mesh.png",
        "alt": "Cavity flow (mapping data to different mesh) result 2",
        "altZh": "方腔流动（映射数据到不同网格）结果图 2"
      },
      {
        "url": "assets/openfoam/incompressible-icofoam-cavity-cavity-flow-mapping-data-to-/result-03-cavitygrade-mesh.png",
        "alt": "Cavity flow (mapping data to different mesh) result 3",
        "altZh": "方腔流动（映射数据到不同网格）结果图 3"
      },
      {
        "url": "assets/openfoam/incompressible-icofoam-cavity-cavity-flow-mapping-data-to-/result-04-cavitygrade-u.png",
        "alt": "Cavity flow (mapping data to different mesh) result 4",
        "altZh": "方腔流动（映射数据到不同网格）结果图 4"
      },
      {
        "url": "assets/openfoam/incompressible-icofoam-cavity-cavity-flow-mapping-data-to-/result-05-cavitygrade-p.png",
        "alt": "Cavity flow (mapping data to different mesh) result 5",
        "altZh": "方腔流动（映射数据到不同网格）结果图 5"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [],
      "constants": [],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟经典顶盖驱动方腔流，移动壁面带动封闭腔体内形成主涡和角涡。它是验证不可压瞬态求解器、边界条件和网格收敛性的基础算例。",
        "数值上，该案例归入不可压流体，使用 `icoFoam`，可理解为 不可压瞬态层流求解器。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要结果变量会在运行后的时间目录中生成，可重点查看速度、压力、温度、相分数或位移等与物理问题对应的场量。配置重点通常位于 `0`、`constant` 和 `system` 三类文件：分别给出初始/边界条件、物性/模型参数和数值控制。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/incompressible/icoFoam/cavity`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `icoFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "incompressible-icofoam-cavity-cavity-flow-mapping-data-to-",
    "title": "Cavity flow (mapping data to different shape meshes)",
    "titleZh": "方腔流动（映射数据到不同形状网格）",
    "category": "Incompressible fluid",
    "categoryZh": "不可压流体",
    "types": [
      "单相",
      "可压缩",
      "网格"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "icoFoam",
    "localPath": "incompressible/icoFoam/cavity",
    "download": "downloads/openfoam/incompressible-icofoam-cavity-cavity-flow-mapping-data-to-.zip",
    "images": [
      {
        "url": "assets/openfoam/incompressible-icofoam-cavity-cavity-flow-mapping-data-to-/result-01-cavityclipped-mesh.png",
        "alt": "Cavity flow (mapping data to different shape meshes) result 1",
        "altZh": "方腔流动（映射数据到不同形状网格）结果图 1"
      },
      {
        "url": "assets/openfoam/incompressible-icofoam-cavity-cavity-flow-mapping-data-to-/result-02-cavityclipped-u-0-5.png",
        "alt": "Cavity flow (mapping data to different shape meshes) result 2",
        "altZh": "方腔流动（映射数据到不同形状网格）结果图 2"
      },
      {
        "url": "assets/openfoam/incompressible-icofoam-cavity-cavity-flow-mapping-data-to-/result-03-cavityclipped-u-0-6.png",
        "alt": "Cavity flow (mapping data to different shape meshes) result 3",
        "altZh": "方腔流动（映射数据到不同形状网格）结果图 3"
      },
      {
        "url": "assets/openfoam/incompressible-icofoam-cavity-cavity-flow-mapping-data-to-/result-04-cavityclipped-p-0-6.png",
        "alt": "Cavity flow (mapping data to different shape meshes) result 4",
        "altZh": "方腔流动（映射数据到不同形状网格）结果图 4"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [],
      "constants": [],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟经典顶盖驱动方腔流，移动壁面带动封闭腔体内形成主涡和角涡。它是验证不可压瞬态求解器、边界条件和网格收敛性的基础算例。",
        "数值上，该案例归入不可压流体，使用 `icoFoam`，可理解为 不可压瞬态层流求解器。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要结果变量会在运行后的时间目录中生成，可重点查看速度、压力、温度、相分数或位移等与物理问题对应的场量。配置重点通常位于 `0`、`constant` 和 `system` 三类文件：分别给出初始/边界条件、物性/模型参数和数值控制。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/incompressible/icoFoam/cavity`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `icoFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "incompressible-simplefoam-rotordisk",
    "title": "Flow around a rotating disk",
    "titleZh": "旋转圆盘绕流",
    "category": "Incompressible fluid",
    "categoryZh": "不可压流体",
    "types": [
      "单相",
      "可压缩"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "simpleFoam",
    "localPath": "incompressible/simpleFoam/rotorDisk",
    "download": "downloads/openfoam/incompressible-simplefoam-rotordisk.zip",
    "images": [
      {
        "url": "assets/openfoam/incompressible-simplefoam-rotordisk/result-01-rotordisk-model.png",
        "alt": "Flow around a rotating disk result 1",
        "altZh": "旋转圆盘绕流结果图 1"
      },
      {
        "url": "assets/openfoam/incompressible-simplefoam-rotordisk/result-02-rotordisk-mesh.png",
        "alt": "Flow around a rotating disk result 2",
        "altZh": "旋转圆盘绕流结果图 2"
      },
      {
        "url": "assets/openfoam/incompressible-simplefoam-rotordisk/result-03-rotordisk-mesh-xz.png",
        "alt": "Flow around a rotating disk result 3",
        "altZh": "旋转圆盘绕流结果图 3"
      },
      {
        "url": "assets/openfoam/incompressible-simplefoam-rotordisk/result-04-rotordisk-mesh-yz.png",
        "alt": "Flow around a rotating disk result 4",
        "altZh": "旋转圆盘绕流结果图 4"
      },
      {
        "url": "assets/openfoam/incompressible-simplefoam-rotordisk/result-05-paraview-enable-k-omega.png",
        "alt": "Flow around a rotating disk result 5",
        "altZh": "旋转圆盘绕流结果图 5"
      },
      {
        "url": "assets/openfoam/incompressible-simplefoam-rotordisk/result-06-rotordisk-u-yz.png",
        "alt": "Flow around a rotating disk result 6",
        "altZh": "旋转圆盘绕流结果图 6"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "U",
        "k",
        "nut",
        "omega",
        "p"
      ],
      "constants": [
        "transportProperties",
        "turbulenceProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟旋转圆盘附近的黏性流动，关注旋转壁面诱导的切向速度、径向流动和近壁压力变化。",
        "数值上，该案例归入不可压流体，使用 `simpleFoam`，可理解为 不可压稳态 SIMPLE 求解器。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括速度场 `U`、湍流变量 `k`、湍流变量 `nut`、湍流变量 `omega`、压力变量 `p`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `transportProperties` 定义流体物性与输运系数；`turbulenceProperties` 定义湍流模型选择。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/incompressible/simpleFoam/rotorDisk`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `simpleFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "incompressible-simplefoam-motorbike",
    "title": "Flow around a running motorcycle",
    "titleZh": "行驶摩托车绕流",
    "category": "Incompressible fluid",
    "categoryZh": "不可压流体",
    "types": [
      "单相",
      "可压缩"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "simpleFoam",
    "localPath": "incompressible/simpleFoam/motorBike",
    "download": "downloads/openfoam/incompressible-simplefoam-motorbike.zip",
    "images": [
      {
        "url": "assets/openfoam/incompressible-simplefoam-motorbike/result-01-motorbike-model.png",
        "alt": "Flow around a running motorcycle result 1",
        "altZh": "行驶摩托车绕流结果图 1"
      },
      {
        "url": "assets/openfoam/incompressible-simplefoam-motorbike/result-02-motorbike-model-zoom.png",
        "alt": "Flow around a running motorcycle result 2",
        "altZh": "行驶摩托车绕流结果图 2"
      },
      {
        "url": "assets/openfoam/incompressible-simplefoam-motorbike/result-03-motorbike-mesh.png",
        "alt": "Flow around a running motorcycle result 3",
        "altZh": "行驶摩托车绕流结果图 3"
      },
      {
        "url": "assets/openfoam/incompressible-simplefoam-motorbike/result-04-motorbike-mesh-zoom.png",
        "alt": "Flow around a running motorcycle result 4",
        "altZh": "行驶摩托车绕流结果图 4"
      },
      {
        "url": "assets/openfoam/incompressible-simplefoam-motorbike/result-05-motorbike-mesh-xz.png",
        "alt": "Flow around a running motorcycle result 5",
        "altZh": "行驶摩托车绕流结果图 5"
      },
      {
        "url": "assets/openfoam/incompressible-simplefoam-motorbike/result-06-motorbike-u.png",
        "alt": "Flow around a running motorcycle result 6",
        "altZh": "行驶摩托车绕流结果图 6"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "U",
        "k",
        "nut",
        "omega",
        "p"
      ],
      "constants": [
        "transportProperties",
        "turbulenceProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟行驶摩托车外部绕流，关注车身几何造成的分离、尾迹、压力阻力和局部高速区域。",
        "数值上，该案例归入不可压流体，使用 `simpleFoam`，可理解为 不可压稳态 SIMPLE 求解器。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括速度场 `U`、湍流变量 `k`、湍流变量 `nut`、湍流变量 `omega`、压力变量 `p`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `transportProperties` 定义流体物性与输运系数；`turbulenceProperties` 定义湍流模型选择。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/incompressible/simpleFoam/motorBike`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `simpleFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "incompressible-pisofoam-laminar-porousblockage",
    "title": "Flow around an obstacle of a porous media",
    "titleZh": "多孔介质障碍物绕流",
    "category": "Incompressible fluid",
    "categoryZh": "不可压流体",
    "types": [
      "单相",
      "可压缩"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "pisoFoam",
    "localPath": "incompressible/pisoFoam/laminar/porousBlockage",
    "download": "downloads/openfoam/incompressible-pisofoam-laminar-porousblockage.zip",
    "images": [
      {
        "url": "assets/openfoam/incompressible-pisofoam-laminar-porousblockage/result-01-pisofoam-porousblockage-mesh.png",
        "alt": "Flow around an obstacle of a porous media result 1",
        "altZh": "多孔介质障碍物绕流结果图 1"
      },
      {
        "url": "assets/openfoam/incompressible-pisofoam-laminar-porousblockage/result-02-pisofoam-porousblockage-u.png",
        "alt": "Flow around an obstacle of a porous media result 2",
        "altZh": "多孔介质障碍物绕流结果图 2"
      },
      {
        "url": "assets/openfoam/incompressible-pisofoam-laminar-porousblockage/result-03-pisofoam-porousblockage-p.png",
        "alt": "Flow around an obstacle of a porous media result 3",
        "altZh": "多孔介质障碍物绕流结果图 3"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "U",
        "p"
      ],
      "constants": [
        "fvOptions",
        "transportProperties",
        "turbulenceProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟多孔介质障碍物绕流这一可压缩流动问题，关注密度、压力、速度和波系结构的相互作用。",
        "数值上，该案例归入不可压流体，使用 `pisoFoam`，可理解为 不可压瞬态 PISO 求解器。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括速度场 `U`、压力变量 `p`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `transportProperties` 定义流体物性与输运系数；`turbulenceProperties` 定义湍流模型选择。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/incompressible/pisoFoam/laminar/porousBlockage`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `pisoFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "incompressible-shallowwaterfoam-squarebump",
    "title": "Flow by shallow water equation",
    "titleZh": "浅水方程流动",
    "category": "Incompressible fluid",
    "categoryZh": "不可压流体",
    "types": [
      "单相",
      "可压缩"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "shallowWaterFoam",
    "localPath": "incompressible/shallowWaterFoam/squareBump",
    "download": "downloads/openfoam/incompressible-shallowwaterfoam-squarebump.zip",
    "images": [
      {
        "url": "assets/openfoam/incompressible-shallowwaterfoam-squarebump/result-01-shallowwater-squarebump-model.png",
        "alt": "Flow by shallow water equation result 1",
        "altZh": "浅水方程流动结果图 1"
      },
      {
        "url": "assets/openfoam/incompressible-shallowwaterfoam-squarebump/result-02-shallowwater-squarebump-mesh.png",
        "alt": "Flow by shallow water equation result 2",
        "altZh": "浅水方程流动结果图 2"
      },
      {
        "url": "assets/openfoam/incompressible-shallowwaterfoam-squarebump/result-03-paraview-enable-h.png",
        "alt": "Flow by shallow water equation result 3",
        "altZh": "浅水方程流动结果图 3"
      },
      {
        "url": "assets/openfoam/incompressible-shallowwaterfoam-squarebump/result-04-shallowwater-squarebump-h-0.png",
        "alt": "Flow by shallow water equation result 4",
        "altZh": "浅水方程流动结果图 4"
      },
      {
        "url": "assets/openfoam/incompressible-shallowwaterfoam-squarebump/result-05-shallowwater-squarebump-h-1.png",
        "alt": "Flow by shallow water equation result 5",
        "altZh": "浅水方程流动结果图 5"
      },
      {
        "url": "assets/openfoam/incompressible-shallowwaterfoam-squarebump/result-06-shallowwater-squarebump-h-100.png",
        "alt": "Flow by shallow water equation result 6",
        "altZh": "浅水方程流动结果图 6"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "h",
        "h0",
        "hTotal",
        "hU"
      ],
      "constants": [
        "gravitationalProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟浅水方程控制的自由表面流动，关注地形凸起对水位、流速和波传播的影响。",
        "数值上，该案例归入不可压流体，使用 `shallowWaterFoam`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括`h`、`h0`、`hTotal`、`hU`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点通常位于 `0`、`constant` 和 `system` 三类文件：分别给出初始/边界条件、物性/模型参数和数值控制。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/incompressible/shallowWaterFoam/squareBump`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `shallowWaterFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "incompressible-srfpimplefoam-rotor2d",
    "title": "Rotor wit SRF function",
    "titleZh": "使用 SRF 功能的转子流动",
    "category": "Incompressible fluid",
    "categoryZh": "不可压流体",
    "types": [
      "单相",
      "可压缩"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "SRFPimpleFoam",
    "localPath": "incompressible/SRFPimpleFoam/rotor2D",
    "download": "downloads/openfoam/incompressible-srfpimplefoam-rotor2d.zip",
    "images": [
      {
        "url": "assets/openfoam/incompressible-srfpimplefoam-rotor2d/result-01-srfpimplefoam-rotor2d-model.png",
        "alt": "Rotor wit SRF function result 1",
        "altZh": "使用 SRF 功能的转子流动结果图 1"
      },
      {
        "url": "assets/openfoam/incompressible-srfpimplefoam-rotor2d/result-02-srfpimplefoam-rotor2d-mesh.png",
        "alt": "Rotor wit SRF function result 2",
        "altZh": "使用 SRF 功能的转子流动结果图 2"
      },
      {
        "url": "assets/openfoam/incompressible-srfpimplefoam-rotor2d/result-03-paraview-enable-u-forkepsilon.png",
        "alt": "Rotor wit SRF function result 3",
        "altZh": "使用 SRF 功能的转子流动结果图 3"
      },
      {
        "url": "assets/openfoam/incompressible-srfpimplefoam-rotor2d/result-04-srfpimplefoam-rotor2d-u.png",
        "alt": "Rotor wit SRF function result 4",
        "altZh": "使用 SRF 功能的转子流动结果图 4"
      },
      {
        "url": "assets/openfoam/incompressible-srfpimplefoam-rotor2d/result-05-srfpimplefoam-rotor2d-p.png",
        "alt": "Rotor wit SRF function result 5",
        "altZh": "使用 SRF 功能的转子流动结果图 5"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "Urel",
        "epsilon",
        "k",
        "nut",
        "p"
      ],
      "constants": [
        "SRFProperties",
        "transportProperties",
        "turbulenceProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟使用 SRF 功能的转子流动这一可压缩流动问题，关注密度、压力、速度和波系结构的相互作用。",
        "数值上，该案例归入不可压流体，使用 `SRFPimpleFoam`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括`Urel`、湍流变量 `epsilon`、湍流变量 `k`、湍流变量 `nut`、压力变量 `p`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `transportProperties` 定义流体物性与输运系数；`turbulenceProperties` 定义湍流模型选择。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/incompressible/SRFPimpleFoam/rotor2D`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `SRFPimpleFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "incompressible-simplefoam-airfoil2d",
    "title": "Steady flow around a 2-dimensional airfoil",
    "titleZh": "二维翼型稳态绕流",
    "category": "Incompressible fluid",
    "categoryZh": "不可压流体",
    "types": [
      "单相",
      "可压缩"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "simpleFoam",
    "localPath": "incompressible/simpleFoam/airFoil2D",
    "download": "downloads/openfoam/incompressible-simplefoam-airfoil2d.zip",
    "images": [
      {
        "url": "assets/openfoam/incompressible-simplefoam-airfoil2d/result-01-airfoil2d-mesh.png",
        "alt": "Steady flow around a 2-dimensional airfoil result 1",
        "altZh": "二维翼型稳态绕流结果图 1"
      },
      {
        "url": "assets/openfoam/incompressible-simplefoam-airfoil2d/result-02-airfoil2d-mesh-zoom.png",
        "alt": "Steady flow around a 2-dimensional airfoil result 2",
        "altZh": "二维翼型稳态绕流结果图 2"
      },
      {
        "url": "assets/openfoam/incompressible-simplefoam-airfoil2d/result-03-airfoil2d-u.png",
        "alt": "Steady flow around a 2-dimensional airfoil result 3",
        "altZh": "二维翼型稳态绕流结果图 3"
      },
      {
        "url": "assets/openfoam/incompressible-simplefoam-airfoil2d/result-04-airfoil2d-p.png",
        "alt": "Steady flow around a 2-dimensional airfoil result 4",
        "altZh": "二维翼型稳态绕流结果图 4"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "U",
        "nuTilda",
        "nut",
        "p"
      ],
      "constants": [
        "transportProperties",
        "turbulenceProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟二维翼型的稳态绕流，关注迎角下的速度加速、压力差和升阻力相关流动特征。",
        "数值上，该案例归入不可压流体，使用 `simpleFoam`，可理解为 不可压稳态 SIMPLE 求解器。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括速度场 `U`、湍流变量 `nuTilda`、湍流变量 `nut`、压力变量 `p`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `transportProperties` 定义流体物性与输运系数；`turbulenceProperties` 定义湍流模型选择。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/incompressible/simpleFoam/airFoil2D`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `simpleFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "incompressible-poroussimplefoam-straightductimplicit",
    "title": "Straight flow channel with porous media area",
    "titleZh": "含多孔介质区域的直通道流动",
    "category": "Incompressible fluid",
    "categoryZh": "不可压流体",
    "types": [
      "单相",
      "可压缩"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "porousSimpleFoam",
    "localPath": "incompressible/porousSimpleFoam/straightDuctImplicit",
    "download": "downloads/openfoam/incompressible-poroussimplefoam-straightductimplicit.zip",
    "images": [
      {
        "url": "assets/openfoam/incompressible-poroussimplefoam-straightductimplicit/result-01-poroussimplefoam-straightductimplicit-model.png",
        "alt": "Straight flow channel with porous media area result 1",
        "altZh": "含多孔介质区域的直通道流动结果图 1"
      },
      {
        "url": "assets/openfoam/incompressible-poroussimplefoam-straightductimplicit/result-02-poroussimplefoam-straightductimplicit-mesh.png",
        "alt": "Straight flow channel with porous media area result 2",
        "altZh": "含多孔介质区域的直通道流动结果图 2"
      },
      {
        "url": "assets/openfoam/incompressible-poroussimplefoam-straightductimplicit/result-03-paraview-enable-k-epsilon.png",
        "alt": "Straight flow channel with porous media area result 3",
        "altZh": "含多孔介质区域的直通道流动结果图 3"
      },
      {
        "url": "assets/openfoam/incompressible-poroussimplefoam-straightductimplicit/result-04-poroussimplefoam-straightductimplicit-u.png",
        "alt": "Straight flow channel with porous media area result 4",
        "altZh": "含多孔介质区域的直通道流动结果图 4"
      },
      {
        "url": "assets/openfoam/incompressible-poroussimplefoam-straightductimplicit/result-05-poroussimplefoam-straightductimplicit-p.png",
        "alt": "Straight flow channel with porous media area result 5",
        "altZh": "含多孔介质区域的直通道流动结果图 5"
      },
      {
        "url": "assets/openfoam/incompressible-poroussimplefoam-straightductimplicit/result-06-poroussimplefoam-straightductimplicit-k.png",
        "alt": "Straight flow channel with porous media area result 6",
        "altZh": "含多孔介质区域的直通道流动结果图 6"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "T",
        "U",
        "epsilon",
        "k",
        "nut",
        "p"
      ],
      "constants": [
        "porosityProperties",
        "transportProperties",
        "turbulenceProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟含多孔介质区域的通道流动，关注多孔阻力项如何造成压降、速度重分布和局部流动损失。它适合用于过滤器、蜂窝结构或多孔阻塞物的工程近似。",
        "数值上，该案例归入不可压流体，使用 `porousSimpleFoam`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括温度场 `T`、速度场 `U`、湍流变量 `epsilon`、湍流变量 `k`、湍流变量 `nut`、压力变量 `p`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `transportProperties` 定义流体物性与输运系数；`turbulenceProperties` 定义湍流模型选择。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/incompressible/porousSimpleFoam/straightDuctImplicit`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `porousSimpleFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "incompressible-simplefoam-pipecyclic",
    "title": "Swirling flow through a pipe (1/4 model)",
    "titleZh": "管道旋流（1/4 模型）",
    "category": "Incompressible fluid",
    "categoryZh": "不可压流体",
    "types": [
      "单相",
      "可压缩"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "simpleFoam",
    "localPath": "incompressible/simpleFoam/pipeCyclic",
    "download": "downloads/openfoam/incompressible-simplefoam-pipecyclic.zip",
    "images": [
      {
        "url": "assets/openfoam/incompressible-simplefoam-pipecyclic/result-01-pipecyclic-inlet.png",
        "alt": "Swirling flow through a pipe (1/4 model) result 1",
        "altZh": "管道旋流（1/4 模型）结果图 1"
      },
      {
        "url": "assets/openfoam/incompressible-simplefoam-pipecyclic/result-02-pipecyclic-mesh.png",
        "alt": "Swirling flow through a pipe (1/4 model) result 2",
        "altZh": "管道旋流（1/4 模型）结果图 2"
      },
      {
        "url": "assets/openfoam/incompressible-simplefoam-pipecyclic/result-03-pipecyclic-u-yz.png",
        "alt": "Swirling flow through a pipe (1/4 model) result 3",
        "altZh": "管道旋流（1/4 模型）结果图 3"
      },
      {
        "url": "assets/openfoam/incompressible-simplefoam-pipecyclic/result-04-pipecyclic-p-yz.png",
        "alt": "Swirling flow through a pipe (1/4 model) result 4",
        "altZh": "管道旋流（1/4 模型）结果图 4"
      },
      {
        "url": "assets/openfoam/incompressible-simplefoam-pipecyclic/result-05-pipecyclic-u-xz.png",
        "alt": "Swirling flow through a pipe (1/4 model) result 5",
        "altZh": "管道旋流（1/4 模型）结果图 5"
      },
      {
        "url": "assets/openfoam/incompressible-simplefoam-pipecyclic/result-06-pipecyclic-p-xz.png",
        "alt": "Swirling flow through a pipe (1/4 model) result 6",
        "altZh": "管道旋流（1/4 模型）结果图 6"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "U",
        "epsilon",
        "k",
        "nuTilda",
        "nut",
        "p"
      ],
      "constants": [
        "transportProperties",
        "turbulenceProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟管道中的旋流或周期流动，关注周向速度、轴向压力梯度和周期边界对充分发展流的影响。",
        "数值上，该案例归入不可压流体，使用 `simpleFoam`，可理解为 不可压稳态 SIMPLE 求解器。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括速度场 `U`、湍流变量 `epsilon`、湍流变量 `k`、湍流变量 `nuTilda`、湍流变量 `nut`、压力变量 `p`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `transportProperties` 定义流体物性与输运系数；`turbulenceProperties` 定义湍流模型选择。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/incompressible/simpleFoam/pipeCyclic`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `simpleFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "incompressible-simplefoam-windaroundbuildings",
    "title": "Wind environment around buildings",
    "titleZh": "建筑群周围风环境",
    "category": "Incompressible fluid",
    "categoryZh": "不可压流体",
    "types": [
      "单相",
      "可压缩"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "simpleFoam",
    "localPath": "incompressible/simpleFoam/windAroundBuildings",
    "download": "downloads/openfoam/incompressible-simplefoam-windaroundbuildings.zip",
    "images": [
      {
        "url": "assets/openfoam/incompressible-simplefoam-windaroundbuildings/result-01-windaroundbuildings-model.png",
        "alt": "Wind environment around buildings result 1",
        "altZh": "建筑群周围风环境结果图 1"
      },
      {
        "url": "assets/openfoam/incompressible-simplefoam-windaroundbuildings/result-02-windaroundbuildings-mesh.png",
        "alt": "Wind environment around buildings result 2",
        "altZh": "建筑群周围风环境结果图 2"
      },
      {
        "url": "assets/openfoam/incompressible-simplefoam-windaroundbuildings/result-03-windaroundbuildings-mesh-z1-5.png",
        "alt": "Wind environment around buildings result 3",
        "altZh": "建筑群周围风环境结果图 3"
      },
      {
        "url": "assets/openfoam/incompressible-simplefoam-windaroundbuildings/result-04-windaroundbuildings-u-z1-5.png",
        "alt": "Wind environment around buildings result 4",
        "altZh": "建筑群周围风环境结果图 4"
      },
      {
        "url": "assets/openfoam/incompressible-simplefoam-windaroundbuildings/result-05-windaroundbuildings-p-z1-5.png",
        "alt": "Wind environment around buildings result 5",
        "altZh": "建筑群周围风环境结果图 5"
      },
      {
        "url": "assets/openfoam/incompressible-simplefoam-windaroundbuildings/result-06-windaroundbuildings-k-z1-5.png",
        "alt": "Wind environment around buildings result 6",
        "altZh": "建筑群周围风环境结果图 6"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "U",
        "epsilon",
        "k",
        "nut",
        "p"
      ],
      "constants": [
        "transportProperties",
        "turbulenceProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟建筑群周围的城市风环境，关注建筑遮挡、街谷加速、回流区和近地风速分布。",
        "数值上，该案例归入不可压流体，使用 `simpleFoam`，可理解为 不可压稳态 SIMPLE 求解器。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括速度场 `U`、湍流变量 `epsilon`、湍流变量 `k`、湍流变量 `nut`、压力变量 `p`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `transportProperties` 定义流体物性与输运系数；`turbulenceProperties` 定义湍流模型选择。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/incompressible/simpleFoam/windAroundBuildings`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `simpleFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "lagrangian-icouncoupledkinematicparcelfoam-hopper-dropping-liquid-from-a-funne",
    "title": "Dropping liquid from a funnel",
    "titleZh": "漏斗滴液",
    "category": "Lagrangian",
    "categoryZh": "拉格朗日颗粒",
    "types": [
      "颗粒"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "icoUncoupledKinematicParcelFoam",
    "localPath": "lagrangian/icoUncoupledKinematicParcelFoam/hopper",
    "download": "downloads/openfoam/lagrangian-icouncoupledkinematicparcelfoam-hopper-dropping-liquid-from-a-funne.zip",
    "images": [
      {
        "url": "assets/openfoam/lagrangian-icouncoupledkinematicparcelfoam-hopper-dropping-liquid-from-a-funne/result-01-lagrangian-icouncoupledkinematicparcelfoam-hopper-ho.png",
        "alt": "Dropping liquid from a funnel result 1",
        "altZh": "漏斗滴液结果图 1"
      },
      {
        "url": "assets/openfoam/lagrangian-icouncoupledkinematicparcelfoam-hopper-dropping-liquid-from-a-funne/result-02-lagrangian-icouncoupledkinematicparcelfoam-hopper-ho.png",
        "alt": "Dropping liquid from a funnel result 2",
        "altZh": "漏斗滴液结果图 2"
      },
      {
        "url": "assets/openfoam/lagrangian-icouncoupledkinematicparcelfoam-hopper-dropping-liquid-from-a-funne/result-03-lagrangian-icouncoupledkinematicparcelfoam-hopper-ho.png",
        "alt": "Dropping liquid from a funnel result 3",
        "altZh": "漏斗滴液结果图 3"
      },
      {
        "url": "assets/openfoam/lagrangian-icouncoupledkinematicparcelfoam-hopper-dropping-liquid-from-a-funne/result-04-lagrangian-icouncoupledkinematicparcelfoam-hopper-ho.png",
        "alt": "Dropping liquid from a funnel result 4",
        "altZh": "漏斗滴液结果图 4"
      },
      {
        "url": "assets/openfoam/lagrangian-icouncoupledkinematicparcelfoam-hopper-dropping-liquid-from-a-funne/result-05-lagrangian-icouncoupledkinematicparcelfoam-hopper-ho.png",
        "alt": "Dropping liquid from a funnel result 5",
        "altZh": "漏斗滴液结果图 5"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [],
      "constants": [],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟液滴从漏斗落下后的拉格朗日颗粒/液滴运动，关注重力、入口条件和颗粒轨迹如何形成初始喷洒状态。",
        "数值上，该案例归入拉格朗日颗粒，使用 `icoUncoupledKinematicParcelFoam`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要结果变量会在运行后的时间目录中生成，可重点查看速度、压力、温度、相分数或位移等与物理问题对应的场量。配置重点通常位于 `0`、`constant` 和 `system` 三类文件：分别给出初始/边界条件、物性/模型参数和数值控制。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/lagrangian/icoUncoupledKinematicParcelFoam/hopper`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `icoUncoupledKinematicParcelFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "lagrangian-icouncoupledkinematicparcelfoam-hopper",
    "title": "Dropping liquid from a funnel (Calculating the initial state)",
    "titleZh": "漏斗滴液（初始状态计算）",
    "category": "Lagrangian",
    "categoryZh": "拉格朗日颗粒",
    "types": [
      "颗粒"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "icoUncoupledKinematicParcelFoam",
    "localPath": "lagrangian/icoUncoupledKinematicParcelFoam/hopper",
    "download": "downloads/openfoam/lagrangian-icouncoupledkinematicparcelfoam-hopper.zip",
    "images": [
      {
        "url": "assets/openfoam/lagrangian-icouncoupledkinematicparcelfoam-hopper/result-01-lagrangian-icouncoupledkinematicparcelfoam-hopper-ho.png",
        "alt": "Dropping liquid from a funnel (Calculating the initial state) result 1",
        "altZh": "漏斗滴液（初始状态计算）结果图 1"
      },
      {
        "url": "assets/openfoam/lagrangian-icouncoupledkinematicparcelfoam-hopper/result-02-lagrangian-icouncoupledkinematicparcelfoam-hopper-ho.png",
        "alt": "Dropping liquid from a funnel (Calculating the initial state) result 2",
        "altZh": "漏斗滴液（初始状态计算）结果图 2"
      },
      {
        "url": "assets/openfoam/lagrangian-icouncoupledkinematicparcelfoam-hopper/result-03-lagrangian-icouncoupledkinematicparcelfoam-hopper-ho.png",
        "alt": "Dropping liquid from a funnel (Calculating the initial state) result 3",
        "altZh": "漏斗滴液（初始状态计算）结果图 3"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [],
      "constants": [],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟液滴从漏斗落下后的拉格朗日颗粒/液滴运动，关注重力、入口条件和颗粒轨迹如何形成初始喷洒状态。",
        "数值上，该案例归入拉格朗日颗粒，使用 `icoUncoupledKinematicParcelFoam`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要结果变量会在运行后的时间目录中生成，可重点查看速度、压力、温度、相分数或位移等与物理问题对应的场量。配置重点通常位于 `0`、`constant` 和 `system` 三类文件：分别给出初始/边界条件、物性/模型参数和数值控制。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/lagrangian/icoUncoupledKinematicParcelFoam/hopper`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `icoUncoupledKinematicParcelFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "lagrangian-coalchemistryfoam-simplifiedsiwek",
    "title": "Ignition of mixture gas with coal dust and lime dust (2D)",
    "titleZh": "煤尘与石灰尘混合气点火（二维）",
    "category": "Lagrangian",
    "categoryZh": "拉格朗日颗粒",
    "types": [
      "颗粒",
      "燃烧"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "coalChemistryFoam",
    "localPath": "lagrangian/coalChemistryFoam/simplifiedSiwek",
    "download": "downloads/openfoam/lagrangian-coalchemistryfoam-simplifiedsiwek.zip",
    "images": [
      {
        "url": "assets/openfoam/lagrangian-coalchemistryfoam-simplifiedsiwek/result-01-lagrangian-coalchemistryfoam-simplifiedsiwek-mesh.png",
        "alt": "Ignition of mixture gas with coal dust and lime dust (2D) result 1",
        "altZh": "煤尘与石灰尘混合气点火（二维）结果图 1"
      },
      {
        "url": "assets/openfoam/lagrangian-coalchemistryfoam-simplifiedsiwek/result-02-lagrangian-coalchemistryfoam-simplifiedsiwek-t-0-05.png",
        "alt": "Ignition of mixture gas with coal dust and lime dust (2D) result 2",
        "altZh": "煤尘与石灰尘混合气点火（二维）结果图 2"
      },
      {
        "url": "assets/openfoam/lagrangian-coalchemistryfoam-simplifiedsiwek/result-03-lagrangian-coalchemistryfoam-simplifiedsiwek-t-0-2.png",
        "alt": "Ignition of mixture gas with coal dust and lime dust (2D) result 3",
        "altZh": "煤尘与石灰尘混合气点火（二维）结果图 3"
      },
      {
        "url": "assets/openfoam/lagrangian-coalchemistryfoam-simplifiedsiwek/result-04-lagrangian-coalchemistryfoam-simplifiedsiwek-t-0-5.png",
        "alt": "Ignition of mixture gas with coal dust and lime dust (2D) result 4",
        "altZh": "煤尘与石灰尘混合气点火（二维）结果图 4"
      },
      {
        "url": "assets/openfoam/lagrangian-coalchemistryfoam-simplifiedsiwek/result-05-lagrangian-coalchemistryfoam-simplifiedsiwek-u-0-05.png",
        "alt": "Ignition of mixture gas with coal dust and lime dust (2D) result 5",
        "altZh": "煤尘与石灰尘混合气点火（二维）结果图 5"
      },
      {
        "url": "assets/openfoam/lagrangian-coalchemistryfoam-simplifiedsiwek/result-06-lagrangian-coalchemistryfoam-simplifiedsiwek-u-0-2.png",
        "alt": "Ignition of mixture gas with coal dust and lime dust (2D) result 6",
        "altZh": "煤尘与石灰尘混合气点火（二维）结果图 6"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "CH4",
        "CO",
        "CO2",
        "G",
        "H2",
        "H2O",
        "N2",
        "O2",
        "T",
        "U"
      ],
      "constants": [
        "boundaryRadiationProperties",
        "chemistryProperties",
        "coalCloud1Positions",
        "coalCloud1Properties",
        "combustionProperties",
        "foam.dat",
        "foam.inp",
        "fvOptions",
        "g",
        "limestoneCloud1Properties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟含煤尘和石灰尘混合气的点火过程，关注颗粒相、气相反应和温度升高之间的耦合。",
        "数值上，该案例归入拉格朗日颗粒，使用 `coalChemistryFoam`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括`CH4`、`CO`、`CO2`、`G`、`H2`、`H2O`、`N2`、`O2`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `chemistryProperties` 定义化学反应求解设置；`combustionProperties` 定义燃烧模型设置；`g` 定义重力方向与大小。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/lagrangian/coalChemistryFoam/simplifiedSiwek`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `coalChemistryFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "lagrangian-reactingparcelfoam-parcelinbox",
    "title": "Injection of water droplets into the flow channel",
    "titleZh": "向流道注入水滴",
    "category": "Lagrangian",
    "categoryZh": "拉格朗日颗粒",
    "types": [
      "颗粒",
      "燃烧"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "reactingParcelFoam",
    "localPath": "lagrangian/reactingParcelFoam/parcelInBox",
    "download": "downloads/openfoam/lagrangian-reactingparcelfoam-parcelinbox.zip",
    "images": [
      {
        "url": "assets/openfoam/lagrangian-reactingparcelfoam-parcelinbox/result-01-lagrangian-reactingparcelfoam-parcelinbox-mesh.png",
        "alt": "Injection of water droplets into the flow channel result 1",
        "altZh": "向流道注入水滴结果图 1"
      },
      {
        "url": "assets/openfoam/lagrangian-reactingparcelfoam-parcelinbox/result-02-lagrangian-reactingparcelfoam-parcelinbox-u-0-5.png",
        "alt": "Injection of water droplets into the flow channel result 2",
        "altZh": "向流道注入水滴结果图 2"
      },
      {
        "url": "assets/openfoam/lagrangian-reactingparcelfoam-parcelinbox/result-03-lagrangian-reactingparcelfoam-parcelinbox-h2o-0-5.png",
        "alt": "Injection of water droplets into the flow channel result 3",
        "altZh": "向流道注入水滴结果图 3"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "G",
        "H2O",
        "T",
        "U",
        "air",
        "p",
        "p_rgh"
      ],
      "constants": [
        "chemistryProperties",
        "combustionProperties",
        "g",
        "radiationProperties",
        "reactingCloud1Positions",
        "reactingCloud1Properties",
        "reactions",
        "thermo.incompressiblePoly",
        "thermophysicalProperties",
        "turbulenceProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟水滴注入通道后的颗粒输运过程，关注液滴在连续相流场中的惯性运动、蒸发/换热或与壁面/过滤器的相互作用。",
        "数值上，该案例归入拉格朗日颗粒，使用 `reactingParcelFoam`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括`G`、`H2O`、温度场 `T`、速度场 `U`、`air`、压力变量 `p`、压力变量 `p_rgh`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `chemistryProperties` 定义化学反应求解设置；`combustionProperties` 定义燃烧模型设置；`g` 定义重力方向与大小；`radiationProperties` 定义辐射换热模型；`thermophysicalProperties` 定义热物性与状态方程。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/lagrangian/reactingParcelFoam/parcelInBox`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `reactingParcelFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "lagrangian-mppicfoam-cyclone",
    "title": "Mass particle inflow into cyclone flow",
    "titleZh": "旋风分离器中的大质量颗粒入口流动",
    "category": "Lagrangian",
    "categoryZh": "拉格朗日颗粒",
    "types": [
      "颗粒"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "MPPICFoam",
    "localPath": "lagrangian/MPPICFoam/cyclone",
    "download": "downloads/openfoam/lagrangian-mppicfoam-cyclone.zip",
    "images": [
      {
        "url": "assets/openfoam/lagrangian-mppicfoam-cyclone/result-01-lagrangian-mppicfoam-cyclone-model.png",
        "alt": "Mass particle inflow into cyclone flow result 1",
        "altZh": "旋风分离器中的大质量颗粒入口流动结果图 1"
      },
      {
        "url": "assets/openfoam/lagrangian-mppicfoam-cyclone/result-02-lagrangian-mppicfoam-cyclone-model-transparent.png",
        "alt": "Mass particle inflow into cyclone flow result 2",
        "altZh": "旋风分离器中的大质量颗粒入口流动结果图 2"
      },
      {
        "url": "assets/openfoam/lagrangian-mppicfoam-cyclone/result-03-lagrangian-mppicfoam-cyclone-mesh.png",
        "alt": "Mass particle inflow into cyclone flow result 3",
        "altZh": "旋风分离器中的大质量颗粒入口流动结果图 3"
      },
      {
        "url": "assets/openfoam/lagrangian-mppicfoam-cyclone/result-04-lagrangian-mppicfoam-cyclone-cycle-11.png",
        "alt": "Mass particle inflow into cyclone flow result 4",
        "altZh": "旋风分离器中的大质量颗粒入口流动结果图 4"
      },
      {
        "url": "assets/openfoam/lagrangian-mppicfoam-cyclone/result-05-lagrangian-mppicfoam-cyclone-cycle-20.png",
        "alt": "Mass particle inflow into cyclone flow result 5",
        "altZh": "旋风分离器中的大质量颗粒入口流动结果图 5"
      },
      {
        "url": "assets/openfoam/lagrangian-mppicfoam-cyclone/result-06-lagrangian-mppicfoam-cyclone-cycle-51.png",
        "alt": "Mass particle inflow into cyclone flow result 6",
        "altZh": "旋风分离器中的大质量颗粒入口流动结果图 6"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "U.air",
        "k.air",
        "nut.air",
        "p"
      ],
      "constants": [
        "g",
        "kinematicCloudProperties",
        "transportProperties",
        "turbulenceProperties.air"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟颗粒进入旋风分离器后的旋转流动和颗粒分离过程，关注离心力驱动的颗粒迁移、壁面捕集和压力损失。",
        "数值上，该案例归入拉格朗日颗粒，使用 `MPPICFoam`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括`U.air`、`k.air`、`nut.air`、压力变量 `p`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `g` 定义重力方向与大小；`transportProperties` 定义流体物性与输运系数。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/lagrangian/MPPICFoam/cyclone`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `MPPICFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "lagrangian-reactingparcelfoam-verticalchannel",
    "title": "Phase change of water in a vertical 3 way channel (unsteady)",
    "titleZh": "三通竖直通道中水的相变（非稳态）",
    "category": "Lagrangian",
    "categoryZh": "拉格朗日颗粒",
    "types": [
      "颗粒",
      "多相",
      "燃烧"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "reactingParcelFoam",
    "localPath": "lagrangian/reactingParcelFoam/verticalChannel",
    "download": "downloads/openfoam/lagrangian-reactingparcelfoam-verticalchannel.zip",
    "images": [
      {
        "url": "assets/openfoam/lagrangian-reactingparcelfoam-verticalchannel/result-01-lagrangian-simplereactingparcelfoam-verticalchannel-.png",
        "alt": "Phase change of water in a vertical 3 way channel (unsteady) result 1",
        "altZh": "三通竖直通道中水的相变（非稳态）结果图 1"
      },
      {
        "url": "assets/openfoam/lagrangian-reactingparcelfoam-verticalchannel/result-02-lagrangian-simplereactingparcelfoam-verticalchannel-.png",
        "alt": "Phase change of water in a vertical 3 way channel (unsteady) result 2",
        "altZh": "三通竖直通道中水的相变（非稳态）结果图 2"
      },
      {
        "url": "assets/openfoam/lagrangian-reactingparcelfoam-verticalchannel/result-03-lagrangian-simplereactingparcelfoam-verticalchannel-.png",
        "alt": "Phase change of water in a vertical 3 way channel (unsteady) result 3",
        "altZh": "三通竖直通道中水的相变（非稳态）结果图 3"
      },
      {
        "url": "assets/openfoam/lagrangian-reactingparcelfoam-verticalchannel/result-04-lagrangian-simplereactingparcelfoam-verticalchannel-.png",
        "alt": "Phase change of water in a vertical 3 way channel (unsteady) result 4",
        "altZh": "三通竖直通道中水的相变（非稳态）结果图 4"
      },
      {
        "url": "assets/openfoam/lagrangian-reactingparcelfoam-verticalchannel/result-05-lagrangian-reactingparcelfoam-verticalchannel-t-inle.png",
        "alt": "Phase change of water in a vertical 3 way channel (unsteady) result 5",
        "altZh": "三通竖直通道中水的相变（非稳态）结果图 5"
      },
      {
        "url": "assets/openfoam/lagrangian-reactingparcelfoam-verticalchannel/result-06-lagrangian-reactingparcelfoam-verticalchannel-t-mid.png",
        "alt": "Phase change of water in a vertical 3 way channel (unsteady) result 6",
        "altZh": "三通竖直通道中水的相变（非稳态）结果图 6"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "H2O",
        "T",
        "U",
        "air",
        "alphat",
        "k",
        "nut",
        "omega",
        "p",
        "p_rgh"
      ],
      "constants": [
        "chemistryProperties",
        "combustionProperties",
        "g",
        "particleTrackProperties",
        "radiationProperties",
        "reactingCloud1Properties",
        "reactions",
        "thermo.incompressiblePoly",
        "thermophysicalProperties",
        "turbulenceProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟三通竖直通道中水的相变过程，关注液滴/蒸汽与连续相之间的热质交换以及局部时间推进对稳态收敛的影响。",
        "数值上，该案例归入拉格朗日颗粒，使用 `reactingParcelFoam`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括`H2O`、温度场 `T`、速度场 `U`、`air`、相分数 `alphat`、湍流变量 `k`、湍流变量 `nut`、湍流变量 `omega`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `chemistryProperties` 定义化学反应求解设置；`combustionProperties` 定义燃烧模型设置；`g` 定义重力方向与大小；`radiationProperties` 定义辐射换热模型；`thermophysicalProperties` 定义热物性与状态方程。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/lagrangian/reactingParcelFoam/verticalChannel`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `reactingParcelFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "lagrangian-simplereactingparcelfoam-verticalchannel",
    "title": "Phase change of water in a vertical 3-way channel (steady)",
    "titleZh": "三通竖直通道中水的相变（稳态）",
    "category": "Lagrangian",
    "categoryZh": "拉格朗日颗粒",
    "types": [
      "颗粒",
      "多相",
      "燃烧"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "simpleReactingParcelFoam",
    "localPath": "lagrangian/simpleReactingParcelFoam/verticalChannel",
    "download": "downloads/openfoam/lagrangian-simplereactingparcelfoam-verticalchannel.zip",
    "images": [
      {
        "url": "assets/openfoam/lagrangian-simplereactingparcelfoam-verticalchannel/result-01-lagrangian-simplereactingparcelfoam-verticalchannel-.png",
        "alt": "Phase change of water in a vertical 3-way channel (steady) result 1",
        "altZh": "三通竖直通道中水的相变（稳态）结果图 1"
      },
      {
        "url": "assets/openfoam/lagrangian-simplereactingparcelfoam-verticalchannel/result-02-lagrangian-simplereactingparcelfoam-verticalchannel-.png",
        "alt": "Phase change of water in a vertical 3-way channel (steady) result 2",
        "altZh": "三通竖直通道中水的相变（稳态）结果图 2"
      },
      {
        "url": "assets/openfoam/lagrangian-simplereactingparcelfoam-verticalchannel/result-03-lagrangian-simplereactingparcelfoam-verticalchannel-.png",
        "alt": "Phase change of water in a vertical 3-way channel (steady) result 3",
        "altZh": "三通竖直通道中水的相变（稳态）结果图 3"
      },
      {
        "url": "assets/openfoam/lagrangian-simplereactingparcelfoam-verticalchannel/result-04-lagrangian-simplereactingparcelfoam-verticalchannel-.png",
        "alt": "Phase change of water in a vertical 3-way channel (steady) result 4",
        "altZh": "三通竖直通道中水的相变（稳态）结果图 4"
      },
      {
        "url": "assets/openfoam/lagrangian-simplereactingparcelfoam-verticalchannel/result-05-lagrangian-simplereactingparcelfoam-verticalchannel-.png",
        "alt": "Phase change of water in a vertical 3-way channel (steady) result 5",
        "altZh": "三通竖直通道中水的相变（稳态）结果图 5"
      },
      {
        "url": "assets/openfoam/lagrangian-simplereactingparcelfoam-verticalchannel/result-06-lagrangian-simplereactingparcelfoam-verticalchannel-.png",
        "alt": "Phase change of water in a vertical 3-way channel (steady) result 6",
        "altZh": "三通竖直通道中水的相变（稳态）结果图 6"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "H2O",
        "T",
        "U",
        "air",
        "alphat",
        "k",
        "nut",
        "omega",
        "p"
      ],
      "constants": [
        "chemistryProperties",
        "combustionProperties",
        "g",
        "particleTrackDict",
        "radiationProperties",
        "reactingCloud1Properties",
        "reactions",
        "thermo.incompressiblePoly",
        "thermophysicalProperties",
        "turbulenceProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟三通竖直通道中水的相变过程，关注液滴/蒸汽与连续相之间的热质交换以及局部时间推进对稳态收敛的影响。",
        "数值上，该案例归入拉格朗日颗粒，使用 `simpleReactingParcelFoam`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括`H2O`、温度场 `T`、速度场 `U`、`air`、相分数 `alphat`、湍流变量 `k`、湍流变量 `nut`、湍流变量 `omega`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `chemistryProperties` 定义化学反应求解设置；`combustionProperties` 定义燃烧模型设置；`g` 定义重力方向与大小；`radiationProperties` 定义辐射换热模型；`thermophysicalProperties` 定义热物性与状态方程。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/lagrangian/simpleReactingParcelFoam/verticalChannel`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `simpleReactingParcelFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "lagrangian-reactingparcelfoam-verticalchannellts",
    "title": "Phase change of water in a vertical 3-way channel (steady, local time stepping)",
    "titleZh": "三通竖直通道中水的相变（稳态，本地时间步）",
    "category": "Lagrangian",
    "categoryZh": "拉格朗日颗粒",
    "types": [
      "颗粒",
      "多相",
      "燃烧"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "reactingParcelFoam",
    "localPath": "lagrangian/reactingParcelFoam/verticalChannelLTS",
    "download": "downloads/openfoam/lagrangian-reactingparcelfoam-verticalchannellts.zip",
    "images": [
      {
        "url": "assets/openfoam/lagrangian-reactingparcelfoam-verticalchannellts/result-01-lagrangian-simplereactingparcelfoam-verticalchannel-.png",
        "alt": "Phase change of water in a vertical 3-way channel (steady, local time stepping) result 1",
        "altZh": "三通竖直通道中水的相变（稳态，本地时间步）结果图 1"
      },
      {
        "url": "assets/openfoam/lagrangian-reactingparcelfoam-verticalchannellts/result-02-lagrangian-simplereactingparcelfoam-verticalchannel-.png",
        "alt": "Phase change of water in a vertical 3-way channel (steady, local time stepping) result 2",
        "altZh": "三通竖直通道中水的相变（稳态，本地时间步）结果图 2"
      },
      {
        "url": "assets/openfoam/lagrangian-reactingparcelfoam-verticalchannellts/result-03-lagrangian-simplereactingparcelfoam-verticalchannel-.png",
        "alt": "Phase change of water in a vertical 3-way channel (steady, local time stepping) result 3",
        "altZh": "三通竖直通道中水的相变（稳态，本地时间步）结果图 3"
      },
      {
        "url": "assets/openfoam/lagrangian-reactingparcelfoam-verticalchannellts/result-04-lagrangian-simplereactingparcelfoam-verticalchannel-.png",
        "alt": "Phase change of water in a vertical 3-way channel (steady, local time stepping) result 4",
        "altZh": "三通竖直通道中水的相变（稳态，本地时间步）结果图 4"
      },
      {
        "url": "assets/openfoam/lagrangian-reactingparcelfoam-verticalchannellts/result-05-lagrangian-reactingparcelfoam-verticalchannellts-t-i.png",
        "alt": "Phase change of water in a vertical 3-way channel (steady, local time stepping) result 5",
        "altZh": "三通竖直通道中水的相变（稳态，本地时间步）结果图 5"
      },
      {
        "url": "assets/openfoam/lagrangian-reactingparcelfoam-verticalchannellts/result-06-lagrangian-reactingparcelfoam-verticalchannellts-t-m.png",
        "alt": "Phase change of water in a vertical 3-way channel (steady, local time stepping) result 6",
        "altZh": "三通竖直通道中水的相变（稳态，本地时间步）结果图 6"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "H2O",
        "T",
        "U",
        "air",
        "alphat",
        "k",
        "nut",
        "omega",
        "p",
        "p_rgh"
      ],
      "constants": [
        "chemistryProperties",
        "combustionProperties",
        "g",
        "particleTrackDict",
        "radiationProperties",
        "reactingCloud1Properties",
        "reactions",
        "thermo.incompressiblePoly",
        "thermophysicalProperties",
        "turbulenceProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟三通竖直通道中水的相变过程，关注液滴/蒸汽与连续相之间的热质交换以及局部时间推进对稳态收敛的影响。",
        "数值上，该案例归入拉格朗日颗粒，使用 `reactingParcelFoam`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括`H2O`、温度场 `T`、速度场 `U`、`air`、相分数 `alphat`、湍流变量 `k`、湍流变量 `nut`、湍流变量 `omega`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `chemistryProperties` 定义化学反应求解设置；`combustionProperties` 定义燃烧模型设置；`g` 定义重力方向与大小；`radiationProperties` 定义辐射换热模型；`thermophysicalProperties` 定义热物性与状态方程。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/lagrangian/reactingParcelFoam/verticalChannelLTS`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `reactingParcelFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "lagrangian-sprayfoam-aachenbomb",
    "title": "Spraying and burning of heptane",
    "titleZh": "庚烷喷雾与燃烧",
    "category": "Lagrangian",
    "categoryZh": "拉格朗日颗粒",
    "types": [
      "颗粒",
      "燃烧"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "sprayFoam",
    "localPath": "lagrangian/sprayFoam/aachenBomb",
    "download": "downloads/openfoam/lagrangian-sprayfoam-aachenbomb.zip",
    "images": [
      {
        "url": "assets/openfoam/lagrangian-sprayfoam-aachenbomb/result-01-lagrangian-sprayfoam-aachenbomb-mesh.png",
        "alt": "Spraying and burning of heptane result 1",
        "altZh": "庚烷喷雾与燃烧结果图 1"
      },
      {
        "url": "assets/openfoam/lagrangian-sprayfoam-aachenbomb/result-02-lagrangian-sprayfoam-aachenbomb-t-15.png",
        "alt": "Spraying and burning of heptane result 2",
        "altZh": "庚烷喷雾与燃烧结果图 2"
      },
      {
        "url": "assets/openfoam/lagrangian-sprayfoam-aachenbomb/result-03-lagrangian-sprayfoam-aachenbomb-t-25.png",
        "alt": "Spraying and burning of heptane result 3",
        "altZh": "庚烷喷雾与燃烧结果图 3"
      },
      {
        "url": "assets/openfoam/lagrangian-sprayfoam-aachenbomb/result-04-lagrangian-sprayfoam-aachenbomb-t-50.png",
        "alt": "Spraying and burning of heptane result 4",
        "altZh": "庚烷喷雾与燃烧结果图 4"
      },
      {
        "url": "assets/openfoam/lagrangian-sprayfoam-aachenbomb/result-05-lagrangian-sprayfoam-aachenbomb-t-100.png",
        "alt": "Spraying and burning of heptane result 5",
        "altZh": "庚烷喷雾与燃烧结果图 5"
      },
      {
        "url": "assets/openfoam/lagrangian-sprayfoam-aachenbomb/result-06-lagrangian-sprayfoam-aachenbomb-t-200.png",
        "alt": "Spraying and burning of heptane result 6",
        "altZh": "庚烷喷雾与燃烧结果图 6"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "N2",
        "O2",
        "T",
        "U",
        "Ydefault",
        "alphat",
        "epsilon",
        "k",
        "nut",
        "p"
      ],
      "constants": [
        "chemistryProperties",
        "combustionProperties",
        "g",
        "radiationProperties",
        "sprayCloudProperties",
        "thermophysicalProperties",
        "turbulenceProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟庚烷喷雾燃烧过程，关注液滴雾化后的蒸发、混合、着火和温度/组分场演化。",
        "数值上，该案例归入拉格朗日颗粒，使用 `sprayFoam`，可理解为 喷雾燃烧拉格朗日求解器。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括`N2`、`O2`、温度场 `T`、速度场 `U`、组分质量分数 `Ydefault`、相分数 `alphat`、湍流变量 `epsilon`、湍流变量 `k`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `chemistryProperties` 定义化学反应求解设置；`combustionProperties` 定义燃烧模型设置；`g` 定义重力方向与大小；`radiationProperties` 定义辐射换热模型；`thermophysicalProperties` 定义热物性与状态方程。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/lagrangian/sprayFoam/aachenBomb`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `sprayFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "lagrangian-reactingparcelfoam-filter",
    "title": "Spraying water into a channel with a filter",
    "titleZh": "向带过滤器的通道喷水",
    "category": "Lagrangian",
    "categoryZh": "拉格朗日颗粒",
    "types": [
      "颗粒",
      "燃烧"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "reactingParcelFoam",
    "localPath": "lagrangian/reactingParcelFoam/filter",
    "download": "downloads/openfoam/lagrangian-reactingparcelfoam-filter.zip",
    "images": [
      {
        "url": "assets/openfoam/lagrangian-reactingparcelfoam-filter/result-01-lagrangian-reactingparcelfoam-filter-mesh.png",
        "alt": "Spraying water into a channel with a filter result 1",
        "altZh": "向带过滤器的通道喷水结果图 1"
      },
      {
        "url": "assets/openfoam/lagrangian-reactingparcelfoam-filter/result-02-lagrangian-reactingparcelfoam-filter-particle-0-8.png",
        "alt": "Spraying water into a channel with a filter result 2",
        "altZh": "向带过滤器的通道喷水结果图 2"
      },
      {
        "url": "assets/openfoam/lagrangian-reactingparcelfoam-filter/result-03-lagrangian-reactingparcelfoam-filter-particle-1-5.png",
        "alt": "Spraying water into a channel with a filter result 3",
        "altZh": "向带过滤器的通道喷水结果图 3"
      },
      {
        "url": "assets/openfoam/lagrangian-reactingparcelfoam-filter/result-04-lagrangian-reactingparcelfoam-filter-particle-2.png",
        "alt": "Spraying water into a channel with a filter result 4",
        "altZh": "向带过滤器的通道喷水结果图 4"
      },
      {
        "url": "assets/openfoam/lagrangian-reactingparcelfoam-filter/result-05-lagrangian-reactingparcelfoam-filter-particle-3.png",
        "alt": "Spraying water into a channel with a filter result 5",
        "altZh": "向带过滤器的通道喷水结果图 5"
      },
      {
        "url": "assets/openfoam/lagrangian-reactingparcelfoam-filter/result-06-lagrangian-reactingparcelfoam-filter-particle-5.png",
        "alt": "Spraying water into a channel with a filter result 6",
        "altZh": "向带过滤器的通道喷水结果图 6"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "G",
        "H2O",
        "N2",
        "O2",
        "T",
        "U",
        "alphat",
        "epsilon",
        "k",
        "nut"
      ],
      "constants": [
        "chemistryProperties",
        "combustionProperties",
        "fvOptions",
        "g",
        "parcelInjectionProperties",
        "particleTrackProperties",
        "particleTrackProperties.animate",
        "particleTrackProperties.static",
        "radiationProperties",
        "reactingCloud1Properties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟带过滤器通道中的喷水和颗粒/液滴穿过滤材过程，关注过滤区域造成的阻力、速度衰减和液滴分布。",
        "数值上，该案例归入拉格朗日颗粒，使用 `reactingParcelFoam`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括`G`、`H2O`、`N2`、`O2`、温度场 `T`、速度场 `U`、相分数 `alphat`、湍流变量 `epsilon`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `chemistryProperties` 定义化学反应求解设置；`combustionProperties` 定义燃烧模型设置；`g` 定义重力方向与大小；`radiationProperties` 定义辐射换热模型。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/lagrangian/reactingParcelFoam/filter`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `reactingParcelFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "mesh-foamyhexmesh-blob",
    "title": "Blob",
    "titleZh": "团块网格",
    "category": "Mesh",
    "categoryZh": "网格",
    "types": [
      "网格"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "foamyHexMesh",
    "localPath": "mesh/foamyHexMesh/blob",
    "download": "downloads/openfoam/mesh-foamyhexmesh-blob.zip",
    "images": [
      {
        "url": "assets/openfoam/mesh-foamyhexmesh-blob/result-01-mesh-foamyhexmesh-blob-trisurface.png",
        "alt": "Blob result 1",
        "altZh": "团块网格结果图 1"
      },
      {
        "url": "assets/openfoam/mesh-foamyhexmesh-blob/result-02-mesh-foamyhexmesh-blob.png",
        "alt": "Blob result 2",
        "altZh": "团块网格结果图 2"
      },
      {
        "url": "assets/openfoam/mesh-foamyhexmesh-blob/result-03-mesh-foamyhexmesh-blob-xy.png",
        "alt": "Blob result 3",
        "altZh": "团块网格结果图 3"
      },
      {
        "url": "assets/openfoam/mesh-foamyhexmesh-blob/result-04-mesh-foamyhexmesh-blob-xz.png",
        "alt": "Blob result 4",
        "altZh": "团块网格结果图 4"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [],
      "constants": [],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例演示 `foamyHexMesh` 或相关网格工具对团块网格的网格生成过程，重点不是求解物理场，而是观察几何捕捉、边界命名、局部加密和网格质量如何服务后续 CAE 计算。",
        "数值上，该案例归入网格，使用 `foamyHexMesh`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要结果变量会在运行后的时间目录中生成，可重点查看速度、压力、温度、相分数或位移等与物理问题对应的场量。配置重点通常位于 `0`、`constant` 和 `system` 三类文件：分别给出初始/边界条件、物性/模型参数和数值控制。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/mesh/foamyHexMesh/blob`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `foamyHexMesh`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "mesh-foamyhexmesh-flange",
    "title": "Flange",
    "titleZh": "法兰",
    "category": "Mesh",
    "categoryZh": "网格",
    "types": [
      "网格"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "foamyHexMesh",
    "localPath": "mesh/foamyHexMesh/flange",
    "download": "downloads/openfoam/mesh-foamyhexmesh-flange.zip",
    "images": [
      {
        "url": "assets/openfoam/mesh-foamyhexmesh-flange/result-01-mesh-flange-trisurface.png",
        "alt": "Flange result 1",
        "altZh": "法兰结果图 1"
      },
      {
        "url": "assets/openfoam/mesh-foamyhexmesh-flange/result-02-mesh-foamyhexmesh-flange.png",
        "alt": "Flange result 2",
        "altZh": "法兰结果图 2"
      },
      {
        "url": "assets/openfoam/mesh-foamyhexmesh-flange/result-03-mesh-foamyhexmesh-flange-xz.png",
        "alt": "Flange result 3",
        "altZh": "法兰结果图 3"
      },
      {
        "url": "assets/openfoam/mesh-foamyhexmesh-flange/result-04-mesh-foamyhexmesh-flange-yz.png",
        "alt": "Flange result 4",
        "altZh": "法兰结果图 4"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [],
      "constants": [],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例演示 `foamyHexMesh` 或相关网格工具对法兰的网格生成过程，重点不是求解物理场，而是观察几何捕捉、边界命名、局部加密和网格质量如何服务后续 CAE 计算。",
        "数值上，该案例归入网格，使用 `foamyHexMesh`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要结果变量会在运行后的时间目录中生成，可重点查看速度、压力、温度、相分数或位移等与物理问题对应的场量。配置重点通常位于 `0`、`constant` 和 `system` 三类文件：分别给出初始/边界条件、物性/模型参数和数值控制。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/mesh/foamyHexMesh/flange`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `foamyHexMesh`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "mesh-snappyhexmesh-flange",
    "title": "Flange",
    "titleZh": "法兰",
    "category": "Mesh",
    "categoryZh": "网格",
    "types": [
      "网格"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "snappyHexMesh",
    "localPath": "mesh/snappyHexMesh/flange",
    "download": "downloads/openfoam/mesh-snappyhexmesh-flange.zip",
    "images": [
      {
        "url": "assets/openfoam/mesh-snappyhexmesh-flange/result-01-mesh-flange-trisurface.png",
        "alt": "Flange result 1",
        "altZh": "法兰结果图 1"
      },
      {
        "url": "assets/openfoam/mesh-snappyhexmesh-flange/result-02-mesh-snappyhexmesh-flange.png",
        "alt": "Flange result 2",
        "altZh": "法兰结果图 2"
      },
      {
        "url": "assets/openfoam/mesh-snappyhexmesh-flange/result-03-mesh-snappyhexmesh-flange-xz.png",
        "alt": "Flange result 3",
        "altZh": "法兰结果图 3"
      },
      {
        "url": "assets/openfoam/mesh-snappyhexmesh-flange/result-04-mesh-snappyhexmesh-flange-yz.png",
        "alt": "Flange result 4",
        "altZh": "法兰结果图 4"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [],
      "constants": [],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例演示 `snappyHexMesh` 或相关网格工具对法兰的网格生成过程，重点不是求解物理场，而是观察几何捕捉、边界命名、局部加密和网格质量如何服务后续 CAE 计算。",
        "数值上，该案例归入网格，使用 `snappyHexMesh`，可理解为 六面体主导自动网格工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要结果变量会在运行后的时间目录中生成，可重点查看速度、压力、温度、相分数或位移等与物理问题对应的场量。配置重点通常位于 `0`、`constant` 和 `system` 三类文件：分别给出初始/边界条件、物性/模型参数和数值控制。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/mesh/snappyHexMesh/flange`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `snappyHexMesh`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "mesh-foamyquadmesh-jaggedboundary",
    "title": "Making 3D mesh from 2D contours (by extrusion)",
    "titleZh": "由二维轮廓生成三维网格（拉伸）",
    "category": "Mesh",
    "categoryZh": "网格",
    "types": [
      "网格"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "foamyQuadMesh",
    "localPath": "mesh/foamyQuadMesh/jaggedBoundary",
    "download": "downloads/openfoam/mesh-foamyquadmesh-jaggedboundary.zip",
    "images": [
      {
        "url": "assets/openfoam/mesh-foamyquadmesh-jaggedboundary/result-01-mesh-foamyquadmesh-jaggedboundary-trisurface.png",
        "alt": "Making 3D mesh from 2D contours (by extrusion) result 1",
        "altZh": "由二维轮廓生成三维网格（拉伸）结果图 1"
      },
      {
        "url": "assets/openfoam/mesh-foamyquadmesh-jaggedboundary/result-02-mesh-foamyquadmesh-jaggedboundary-trisurface-mesh.png",
        "alt": "Making 3D mesh from 2D contours (by extrusion) result 2",
        "altZh": "由二维轮廓生成三维网格（拉伸）结果图 2"
      },
      {
        "url": "assets/openfoam/mesh-foamyquadmesh-jaggedboundary/result-03-mesh-foamyquadmesh-jaggedboundary-mesh2d.png",
        "alt": "Making 3D mesh from 2D contours (by extrusion) result 3",
        "altZh": "由二维轮廓生成三维网格（拉伸）结果图 3"
      },
      {
        "url": "assets/openfoam/mesh-foamyquadmesh-jaggedboundary/result-04-mesh-foamyquadmesh-jaggedboundary-mesh2d-zoom.png",
        "alt": "Making 3D mesh from 2D contours (by extrusion) result 4",
        "altZh": "由二维轮廓生成三维网格（拉伸）结果图 4"
      },
      {
        "url": "assets/openfoam/mesh-foamyquadmesh-jaggedboundary/result-05-mesh-foamyquadmesh-jaggedboundary-mesh.png",
        "alt": "Making 3D mesh from 2D contours (by extrusion) result 5",
        "altZh": "由二维轮廓生成三维网格（拉伸）结果图 5"
      },
      {
        "url": "assets/openfoam/mesh-foamyquadmesh-jaggedboundary/result-06-mesh-foamyquadmesh-jaggedboundary-mesh-zoom.png",
        "alt": "Making 3D mesh from 2D contours (by extrusion) result 6",
        "altZh": "由二维轮廓生成三维网格（拉伸）结果图 6"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [],
      "constants": [],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例演示 `foamyQuadMesh` 或相关网格工具对由二维轮廓生成三维网格（拉伸）的网格生成过程，重点不是求解物理场，而是观察几何捕捉、边界命名、局部加密和网格质量如何服务后续 CAE 计算。",
        "数值上，该案例归入网格，使用 `foamyQuadMesh`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要结果变量会在运行后的时间目录中生成，可重点查看速度、压力、温度、相分数或位移等与物理问题对应的场量。配置重点通常位于 `0`、`constant` 和 `system` 三类文件：分别给出初始/边界条件、物性/模型参数和数值控制。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/mesh/foamyQuadMesh/jaggedBoundary`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `foamyQuadMesh`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "mesh-foamyquadmesh-square",
    "title": "Making 3D mesh from 2D contours (by rotational extrusion)",
    "titleZh": "由二维轮廓生成三维网格（旋转拉伸）",
    "category": "Mesh",
    "categoryZh": "网格",
    "types": [
      "网格"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "foamyQuadMesh",
    "localPath": "mesh/foamyQuadMesh/square",
    "download": "downloads/openfoam/mesh-foamyquadmesh-square.zip",
    "images": [
      {
        "url": "assets/openfoam/mesh-foamyquadmesh-square/result-01-mesh-foamyquadmesh-square-trisurface.png",
        "alt": "Making 3D mesh from 2D contours (by rotational extrusion) result 1",
        "altZh": "由二维轮廓生成三维网格（旋转拉伸）结果图 1"
      },
      {
        "url": "assets/openfoam/mesh-foamyquadmesh-square/result-02-mesh-foamyquadmesh-square-trisurface-mesh.png",
        "alt": "Making 3D mesh from 2D contours (by rotational extrusion) result 2",
        "altZh": "由二维轮廓生成三维网格（旋转拉伸）结果图 2"
      },
      {
        "url": "assets/openfoam/mesh-foamyquadmesh-square/result-03-mesh-foamyquadmesh-square-mesh2d.png",
        "alt": "Making 3D mesh from 2D contours (by rotational extrusion) result 3",
        "altZh": "由二维轮廓生成三维网格（旋转拉伸）结果图 3"
      },
      {
        "url": "assets/openfoam/mesh-foamyquadmesh-square/result-04-mesh-foamyquadmesh-square-mesh2d-zoom.png",
        "alt": "Making 3D mesh from 2D contours (by rotational extrusion) result 4",
        "altZh": "由二维轮廓生成三维网格（旋转拉伸）结果图 4"
      },
      {
        "url": "assets/openfoam/mesh-foamyquadmesh-square/result-05-mesh-foamyquadmesh-square-mesh.png",
        "alt": "Making 3D mesh from 2D contours (by rotational extrusion) result 5",
        "altZh": "由二维轮廓生成三维网格（旋转拉伸）结果图 5"
      },
      {
        "url": "assets/openfoam/mesh-foamyquadmesh-square/result-06-mesh-foamyquadmesh-square-mesh-zoom.png",
        "alt": "Making 3D mesh from 2D contours (by rotational extrusion) result 6",
        "altZh": "由二维轮廓生成三维网格（旋转拉伸）结果图 6"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [],
      "constants": [],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例演示 `foamyQuadMesh` 或相关网格工具对由二维轮廓生成三维网格（旋转拉伸）的网格生成过程，重点不是求解物理场，而是观察几何捕捉、边界命名、局部加密和网格质量如何服务后续 CAE 计算。",
        "数值上，该案例归入网格，使用 `foamyQuadMesh`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要结果变量会在运行后的时间目录中生成，可重点查看速度、压力、温度、相分数或位移等与物理问题对应的场量。配置重点通常位于 `0`、`constant` 和 `system` 三类文件：分别给出初始/边界条件、物性/模型参数和数值控制。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/mesh/foamyQuadMesh/square`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `foamyQuadMesh`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "mesh-foamyquadmesh-opencfd",
    "title": "Making 3D mesh from 2D outline and Calculating the flow",
    "titleZh": "由二维外形生成三维网格并计算流动",
    "category": "Mesh",
    "categoryZh": "网格",
    "types": [
      "网格"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "foamyQuadMesh",
    "localPath": "mesh/foamyQuadMesh/OpenCFD",
    "download": "downloads/openfoam/mesh-foamyquadmesh-opencfd.zip",
    "images": [
      {
        "url": "assets/openfoam/mesh-foamyquadmesh-opencfd/result-01-mesh-foamyquadmesh-opencfd-trisurface.png",
        "alt": "Making 3D mesh from 2D outline and Calculating the flow result 1",
        "altZh": "由二维外形生成三维网格并计算流动结果图 1"
      },
      {
        "url": "assets/openfoam/mesh-foamyquadmesh-opencfd/result-02-mesh-foamyquadmesh-opencfd-mesh2d.png",
        "alt": "Making 3D mesh from 2D outline and Calculating the flow result 2",
        "altZh": "由二维外形生成三维网格并计算流动结果图 2"
      },
      {
        "url": "assets/openfoam/mesh-foamyquadmesh-opencfd/result-03-mesh-foamyquadmesh-opencfd-mesh2d-zoom.png",
        "alt": "Making 3D mesh from 2D outline and Calculating the flow result 3",
        "altZh": "由二维外形生成三维网格并计算流动结果图 3"
      },
      {
        "url": "assets/openfoam/mesh-foamyquadmesh-opencfd/result-04-mesh-foamyquadmesh-opencfd-mesh.png",
        "alt": "Making 3D mesh from 2D outline and Calculating the flow result 4",
        "altZh": "由二维外形生成三维网格并计算流动结果图 4"
      },
      {
        "url": "assets/openfoam/mesh-foamyquadmesh-opencfd/result-05-mesh-foamyquadmesh-opencfd-mesh-zoom.png",
        "alt": "Making 3D mesh from 2D outline and Calculating the flow result 5",
        "altZh": "由二维外形生成三维网格并计算流动结果图 5"
      },
      {
        "url": "assets/openfoam/mesh-foamyquadmesh-opencfd/result-06-mesh-foamyquadmesh-opencfd-u.png",
        "alt": "Making 3D mesh from 2D outline and Calculating the flow result 6",
        "altZh": "由二维外形生成三维网格并计算流动结果图 6"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "T",
        "U",
        "p"
      ],
      "constants": [
        "thermophysicalProperties",
        "turbulenceProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例演示 `foamyQuadMesh` 或相关网格工具对由二维外形生成三维网格并计算流动的网格生成过程，重点不是求解物理场，而是观察几何捕捉、边界命名、局部加密和网格质量如何服务后续 CAE 计算。",
        "数值上，该案例归入网格，使用 `foamyQuadMesh`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括温度场 `T`、速度场 `U`、压力变量 `p`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `thermophysicalProperties` 定义热物性与状态方程；`turbulenceProperties` 定义湍流模型选择。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/mesh/foamyQuadMesh/OpenCFD`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `foamyQuadMesh`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "mesh-movedynamicmesh-snakerivercanyon",
    "title": "Mesh deformation",
    "titleZh": "网格变形",
    "category": "Mesh",
    "categoryZh": "网格",
    "types": [
      "网格"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "moveDynamicMesh",
    "localPath": "mesh/moveDynamicMesh/SnakeRiverCanyon",
    "download": "downloads/openfoam/mesh-movedynamicmesh-snakerivercanyon.zip",
    "images": [
      {
        "url": "assets/openfoam/mesh-movedynamicmesh-snakerivercanyon/result-01-mesh-movedynamicmesh-snakerivercanyon-trisurface.png",
        "alt": "Mesh deformation result 1",
        "altZh": "网格变形结果图 1"
      },
      {
        "url": "assets/openfoam/mesh-movedynamicmesh-snakerivercanyon/result-02-mesh-movedynamicmesh-snakerivercanyon-0.png",
        "alt": "Mesh deformation result 2",
        "altZh": "网格变形结果图 2"
      },
      {
        "url": "assets/openfoam/mesh-movedynamicmesh-snakerivercanyon/result-03-mesh-movedynamicmesh-snakerivercanyon-5.png",
        "alt": "Mesh deformation result 3",
        "altZh": "网格变形结果图 3"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "pointDisplacement"
      ],
      "constants": [
        "dynamicMeshDict",
        "transportProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例演示 `moveDynamicMesh` 或相关网格工具对网格变形的网格生成过程，重点不是求解物理场，而是观察几何捕捉、边界命名、局部加密和网格质量如何服务后续 CAE 计算。",
        "数值上，该案例归入网格，使用 `moveDynamicMesh`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括`pointDisplacement`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `dynamicMeshDict` 定义动网格运动方式；`transportProperties` 定义流体物性与输运系数。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/mesh/moveDynamicMesh/SnakeRiverCanyon`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `moveDynamicMesh`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "mesh-refinemesh-refinefielddirs",
    "title": "Mesh refinement",
    "titleZh": "网格加密",
    "category": "Mesh",
    "categoryZh": "网格",
    "types": [
      "网格"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "refineMesh",
    "localPath": "mesh/refineMesh/refineFieldDirs",
    "download": "downloads/openfoam/mesh-refinemesh-refinefielddirs.zip",
    "images": [
      {
        "url": "assets/openfoam/mesh-refinemesh-refinefielddirs/result-01-mesh-refinemesh-refinefielddirs-mesh-raw.png",
        "alt": "Mesh refinement result 1",
        "altZh": "网格加密结果图 1"
      },
      {
        "url": "assets/openfoam/mesh-refinemesh-refinefielddirs/result-02-mesh-refinemesh-refinefielddirs-mesh-refine-z.png",
        "alt": "Mesh refinement result 2",
        "altZh": "网格加密结果图 2"
      },
      {
        "url": "assets/openfoam/mesh-refinemesh-refinefielddirs/result-03-mesh-refinemesh-refinefielddirs-mesh-refine-cylindri.png",
        "alt": "Mesh refinement result 3",
        "altZh": "网格加密结果图 3"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [],
      "constants": [],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例演示 `refineMesh` 或相关网格工具对网格加密的网格生成过程，重点不是求解物理场，而是观察几何捕捉、边界命名、局部加密和网格质量如何服务后续 CAE 计算。",
        "数值上，该案例归入网格，使用 `refineMesh`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要结果变量会在运行后的时间目录中生成，可重点查看速度、压力、温度、相分数或位移等与物理问题对应的场量。配置重点通常位于 `0`、`constant` 和 `system` 三类文件：分别给出初始/边界条件、物性/模型参数和数值控制。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/mesh/refineMesh/refineFieldDirs`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `refineMesh`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "mesh-foamyhexmesh-mixervessel",
    "title": "Mixing tank",
    "titleZh": "搅拌罐",
    "category": "Mesh",
    "categoryZh": "网格",
    "types": [
      "网格"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "foamyHexMesh",
    "localPath": "mesh/foamyHexMesh/mixerVessel",
    "download": "downloads/openfoam/mesh-foamyhexmesh-mixervessel.zip",
    "images": [
      {
        "url": "assets/openfoam/mesh-foamyhexmesh-mixervessel/result-01-mesh-foamyhexmesh-mixervessel-model.png",
        "alt": "Mixing tank result 1",
        "altZh": "搅拌罐结果图 1"
      },
      {
        "url": "assets/openfoam/mesh-foamyhexmesh-mixervessel/result-02-mesh-foamyhexmesh-mixervessel-model-inner.png",
        "alt": "Mixing tank result 2",
        "altZh": "搅拌罐结果图 2"
      },
      {
        "url": "assets/openfoam/mesh-foamyhexmesh-mixervessel/result-03-mesh-foamyhexmesh-mixervessel-mesh.png",
        "alt": "Mixing tank result 3",
        "altZh": "搅拌罐结果图 3"
      },
      {
        "url": "assets/openfoam/mesh-foamyhexmesh-mixervessel/result-04-mesh-foamyhexmesh-mixervessel-mesh-zoom.png",
        "alt": "Mixing tank result 4",
        "altZh": "搅拌罐结果图 4"
      },
      {
        "url": "assets/openfoam/mesh-foamyhexmesh-mixervessel/result-05-mesh-foamyhexmesh-mixervessel-u.png",
        "alt": "Mixing tank result 5",
        "altZh": "搅拌罐结果图 5"
      },
      {
        "url": "assets/openfoam/mesh-foamyhexmesh-mixervessel/result-06-mesh-foamyhexmesh-mixervessel-alpha-phase1.png",
        "alt": "Mixing tank result 6",
        "altZh": "搅拌罐结果图 6"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "U",
        "alpha.phase1",
        "epsilon",
        "k",
        "nut",
        "p_rgh"
      ],
      "constants": [
        "dynamicMeshDict",
        "g",
        "transportProperties",
        "turbulenceProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟圆柱搅拌器周围的单相流动，关注旋转参考系或运动边界对速度场、涡结构和压力分布的影响。",
        "数值上，该案例归入网格，使用 `foamyHexMesh`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括速度场 `U`、相分数 `alpha.phase1`、湍流变量 `epsilon`、湍流变量 `k`、湍流变量 `nut`、压力变量 `p_rgh`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `dynamicMeshDict` 定义动网格运动方式；`g` 定义重力方向与大小；`transportProperties` 定义流体物性与输运系数；`turbulenceProperties` 定义湍流模型选择。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/mesh/foamyHexMesh/mixerVessel`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `foamyHexMesh`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "mesh-foamyhexmesh-simpleshapes",
    "title": "Simple shapes",
    "titleZh": "简单形状",
    "category": "Mesh",
    "categoryZh": "网格",
    "types": [
      "网格",
      "湍流"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "foamyHexMesh",
    "localPath": "mesh/foamyHexMesh/simpleShapes",
    "download": "downloads/openfoam/mesh-foamyhexmesh-simpleshapes.zip",
    "images": [
      {
        "url": "assets/openfoam/mesh-foamyhexmesh-simpleshapes/result-01-mesh-foamyhexmesh-simpleshapes-trisurface.png",
        "alt": "Simple shapes result 1",
        "altZh": "简单形状结果图 1"
      },
      {
        "url": "assets/openfoam/mesh-foamyhexmesh-simpleshapes/result-02-mesh-foamyhexmesh-simpleshapes-trisurface-wire.png",
        "alt": "Simple shapes result 2",
        "altZh": "简单形状结果图 2"
      },
      {
        "url": "assets/openfoam/mesh-foamyhexmesh-simpleshapes/result-03-mesh-foamyhexmesh-simpleshapes.png",
        "alt": "Simple shapes result 3",
        "altZh": "简单形状结果图 3"
      },
      {
        "url": "assets/openfoam/mesh-foamyhexmesh-simpleshapes/result-04-mesh-foamyhexmesh-simpleshapes-xy.png",
        "alt": "Simple shapes result 4",
        "altZh": "简单形状结果图 4"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [],
      "constants": [],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例演示 `foamyHexMesh` 或相关网格工具对简单形状的网格生成过程，重点不是求解物理场，而是观察几何捕捉、边界命名、局部加密和网格质量如何服务后续 CAE 计算。",
        "数值上，该案例归入网格，使用 `foamyHexMesh`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要结果变量会在运行后的时间目录中生成，可重点查看速度、压力、温度、相分数或位移等与物理问题对应的场量。配置重点通常位于 `0`、`constant` 和 `system` 三类文件：分别给出初始/边界条件、物性/模型参数和数值控制。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/mesh/foamyHexMesh/simpleShapes`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `foamyHexMesh`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "multiphase-interfoam-laminar-mixervessel2d",
    "title": "Agitation of liquid by a cylindrical mixer",
    "titleZh": "圆柱搅拌器搅动液体",
    "category": "Multiphase",
    "categoryZh": "多相流",
    "types": [
      "多相"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "interFoam",
    "localPath": "multiphase/interFoam/laminar/mixerVessel2D",
    "download": "downloads/openfoam/multiphase-interfoam-laminar-mixervessel2d.zip",
    "images": [
      {
        "url": "assets/openfoam/multiphase-interfoam-laminar-mixervessel2d/result-01-mixervessel2d-model.png",
        "alt": "Agitation of liquid by a cylindrical mixer result 1",
        "altZh": "圆柱搅拌器搅动液体结果图 1"
      },
      {
        "url": "assets/openfoam/multiphase-interfoam-laminar-mixervessel2d/result-02-multiphase-interfoam-laminar-mixervessel2d-alpha-wat.png",
        "alt": "Agitation of liquid by a cylindrical mixer result 2",
        "altZh": "圆柱搅拌器搅动液体结果图 2"
      },
      {
        "url": "assets/openfoam/multiphase-interfoam-laminar-mixervessel2d/result-03-mixervessel2d-cellzone.png",
        "alt": "Agitation of liquid by a cylindrical mixer result 3",
        "altZh": "圆柱搅拌器搅动液体结果图 3"
      },
      {
        "url": "assets/openfoam/multiphase-interfoam-laminar-mixervessel2d/result-04-mixervessel2d-mesh.png",
        "alt": "Agitation of liquid by a cylindrical mixer result 4",
        "altZh": "圆柱搅拌器搅动液体结果图 4"
      },
      {
        "url": "assets/openfoam/multiphase-interfoam-laminar-mixervessel2d/result-05-multiphase-interfoam-laminar-mixervessel2d-alpha-wat.png",
        "alt": "Agitation of liquid by a cylindrical mixer result 5",
        "altZh": "圆柱搅拌器搅动液体结果图 5"
      },
      {
        "url": "assets/openfoam/multiphase-interfoam-laminar-mixervessel2d/result-06-multiphase-interfoam-laminar-mixervessel2d-alpha-wat.png",
        "alt": "Agitation of liquid by a cylindrical mixer result 6",
        "altZh": "圆柱搅拌器搅动液体结果图 6"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "U",
        "alpha.water",
        "p_rgh"
      ],
      "constants": [
        "MRFProperties",
        "g",
        "transportProperties",
        "turbulenceProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟圆柱搅拌器驱动的多相液体运动，关注旋转区域诱导的剪切、界面变形和不同流体的混合/分离过程。",
        "数值上，该案例归入多相流，使用 `interFoam`，可理解为 VOF 两相流求解器。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括速度场 `U`、相分数 `alpha.water`、压力变量 `p_rgh`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `MRFProperties` 定义旋转参考系或搅拌区域；`g` 定义重力方向与大小；`transportProperties` 定义流体物性与输运系数；`turbulenceProperties` 定义湍流模型选择。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/multiphase/interFoam/laminar/mixerVessel2D`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `interFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "multiphase-multiphaseeulerfoam-bubblecolumn",
    "title": "Blowing air into water column",
    "titleZh": "向水柱中鼓入空气",
    "category": "Multiphase",
    "categoryZh": "多相流",
    "types": [
      "多相"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "multiphaseEulerFoam",
    "localPath": "multiphase/multiphaseEulerFoam/bubbleColumn",
    "download": "downloads/openfoam/multiphase-multiphaseeulerfoam-bubblecolumn.zip",
    "images": [
      {
        "url": "assets/openfoam/multiphase-multiphaseeulerfoam-bubblecolumn/result-01-multiphase-multiphaseeulerfoam-bubblecolumn-mesh.png",
        "alt": "Blowing air into water column result 1",
        "altZh": "向水柱中鼓入空气结果图 1"
      },
      {
        "url": "assets/openfoam/multiphase-multiphaseeulerfoam-bubblecolumn/result-02-multiphase-multiphaseeulerfoam-bubblecolumn-mesh-alp.png",
        "alt": "Blowing air into water column result 2",
        "altZh": "向水柱中鼓入空气结果图 2"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "T.air",
        "T.water",
        "Theta",
        "U.air",
        "U.water",
        "alpha.air",
        "alpha.water",
        "p_rgh"
      ],
      "constants": [
        "g",
        "transportProperties",
        "turbulenceProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟气体注入水柱后的气泡羽流，关注气相体积分数、液体循环、相间动量交换以及层流/LES/RANS 模型对气泡柱结构的影响。",
        "数值上，该案例归入多相流，使用 `multiphaseEulerFoam`，可理解为 多相欧拉求解器。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括`T.air`、`T.water`、`Theta`、`U.air`、`U.water`、相分数 `alpha.air`、相分数 `alpha.water`、压力变量 `p_rgh`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `g` 定义重力方向与大小；`transportProperties` 定义流体物性与输运系数；`turbulenceProperties` 定义湍流模型选择。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/multiphase/multiphaseEulerFoam/bubbleColumn`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `multiphaseEulerFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "multiphase-reactingmultiphaseeulerfoam-laminar-bubblecolumn",
    "title": "Blowing air into water column",
    "titleZh": "向水柱中鼓入空气",
    "category": "Multiphase",
    "categoryZh": "多相流",
    "types": [
      "多相",
      "燃烧"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "reactingMultiphaseEulerFoam",
    "localPath": "multiphase/reactingMultiphaseEulerFoam/laminar/bubbleColumn",
    "download": "downloads/openfoam/multiphase-reactingmultiphaseeulerfoam-laminar-bubblecolumn.zip",
    "images": [
      {
        "url": "assets/openfoam/multiphase-reactingmultiphaseeulerfoam-laminar-bubblecolumn/result-01-multiphase-multiphaseeulerfoam-bubblecolumn-mesh.png",
        "alt": "Blowing air into water column result 1",
        "altZh": "向水柱中鼓入空气结果图 1"
      },
      {
        "url": "assets/openfoam/multiphase-reactingmultiphaseeulerfoam-laminar-bubblecolumn/result-02-multiphase-reactingmultiphaseeulerfoam-laminar-bubbl.png",
        "alt": "Blowing air into water column result 2",
        "altZh": "向水柱中鼓入空气结果图 2"
      },
      {
        "url": "assets/openfoam/multiphase-reactingmultiphaseeulerfoam-laminar-bubblecolumn/result-03-multiphase-reactingmultiphaseeulerfoam-laminar-bubbl.png",
        "alt": "Blowing air into water column result 3",
        "altZh": "向水柱中鼓入空气结果图 3"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "T.air",
        "T.water",
        "Theta",
        "U.air",
        "U.water",
        "alpha.air",
        "alpha.water",
        "p",
        "p_rgh"
      ],
      "constants": [
        "g",
        "phaseProperties",
        "thermophysicalProperties.air",
        "thermophysicalProperties.water",
        "turbulenceProperties.air",
        "turbulenceProperties.water"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟气体注入水柱后的气泡羽流，关注气相体积分数、液体循环、相间动量交换以及层流/LES/RANS 模型对气泡柱结构的影响。",
        "数值上，该案例归入多相流，使用 `reactingMultiphaseEulerFoam`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括`T.air`、`T.water`、`Theta`、`U.air`、`U.water`、相分数 `alpha.air`、相分数 `alpha.water`、压力变量 `p`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `g` 定义重力方向与大小；`phaseProperties` 定义多相体系和相间模型。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/multiphase/reactingMultiphaseEulerFoam/laminar/bubbleColumn`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `reactingMultiphaseEulerFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "multiphase-reactingtwophaseeulerfoam-les-bubblecolumn",
    "title": "Blowing air into water column (LES)",
    "titleZh": "向水柱中鼓入空气（LES）",
    "category": "Multiphase",
    "categoryZh": "多相流",
    "types": [
      "多相",
      "湍流",
      "燃烧"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "reactingTwoPhaseEulerFoam",
    "localPath": "multiphase/reactingTwoPhaseEulerFoam/LES/bubbleColumn",
    "download": "downloads/openfoam/multiphase-reactingtwophaseeulerfoam-les-bubblecolumn.zip",
    "images": [
      {
        "url": "assets/openfoam/multiphase-reactingtwophaseeulerfoam-les-bubblecolumn/result-01-multiphase-multiphaseeulerfoam-bubblecolumn-mesh.png",
        "alt": "Blowing air into water column (LES) result 1",
        "altZh": "向水柱中鼓入空气（LES）结果图 1"
      },
      {
        "url": "assets/openfoam/multiphase-reactingtwophaseeulerfoam-les-bubblecolumn/result-02-multiphase-reactingtwophaseeulerfoam-les-bubblecolum.png",
        "alt": "Blowing air into water column (LES) result 2",
        "altZh": "向水柱中鼓入空气（LES）结果图 2"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "T.air",
        "T.water",
        "Theta",
        "U.air",
        "U.water",
        "alpha.air",
        "alphat.air",
        "alphat.water",
        "epsilon.air",
        "epsilon.water"
      ],
      "constants": [
        "g",
        "phaseProperties",
        "thermophysicalProperties.air",
        "thermophysicalProperties.water",
        "turbulenceProperties.air",
        "turbulenceProperties.water"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟气体注入水柱后的气泡羽流，关注气相体积分数、液体循环、相间动量交换以及层流/LES/RANS 模型对气泡柱结构的影响。",
        "数值上，该案例归入多相流，使用 `reactingTwoPhaseEulerFoam`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括`T.air`、`T.water`、`Theta`、`U.air`、`U.water`、相分数 `alpha.air`、相分数 `alphat.air`、相分数 `alphat.water`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `g` 定义重力方向与大小；`phaseProperties` 定义多相体系和相间模型。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/multiphase/reactingTwoPhaseEulerFoam/LES/bubbleColumn`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `reactingTwoPhaseEulerFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "multiphase-twophaseeulerfoam-les-bubblecolumn",
    "title": "Blowing air into water column (LES)",
    "titleZh": "向水柱中鼓入空气（LES）",
    "category": "Multiphase",
    "categoryZh": "多相流",
    "types": [
      "多相",
      "湍流"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "twoPhaseEulerFoam",
    "localPath": "multiphase/twoPhaseEulerFoam/LES/bubbleColumn",
    "download": "downloads/openfoam/multiphase-twophaseeulerfoam-les-bubblecolumn.zip",
    "images": [
      {
        "url": "assets/openfoam/multiphase-twophaseeulerfoam-les-bubblecolumn/result-01-multiphase-multiphaseeulerfoam-bubblecolumn-mesh.png",
        "alt": "Blowing air into water column (LES) result 1",
        "altZh": "向水柱中鼓入空气（LES）结果图 1"
      },
      {
        "url": "assets/openfoam/multiphase-twophaseeulerfoam-les-bubblecolumn/result-02-multiphase-twophaseeulerfoam-les-bubblecolumn-alpha-.png",
        "alt": "Blowing air into water column (LES) result 2",
        "altZh": "向水柱中鼓入空气（LES）结果图 2"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "T.air",
        "T.water",
        "Theta",
        "U.air",
        "U.water",
        "alpha.air",
        "alphat.air",
        "alphat.water",
        "epsilon.air",
        "epsilon.water"
      ],
      "constants": [
        "g",
        "phaseProperties",
        "thermophysicalProperties.air",
        "thermophysicalProperties.water",
        "turbulenceProperties.air",
        "turbulenceProperties.water"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟气体注入水柱后的气泡羽流，关注气相体积分数、液体循环、相间动量交换以及层流/LES/RANS 模型对气泡柱结构的影响。",
        "数值上，该案例归入多相流，使用 `twoPhaseEulerFoam`，可理解为 欧拉-欧拉两相流求解器。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括`T.air`、`T.water`、`Theta`、`U.air`、`U.water`、相分数 `alpha.air`、相分数 `alphat.air`、相分数 `alphat.water`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `g` 定义重力方向与大小；`phaseProperties` 定义多相体系和相间模型。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/multiphase/twoPhaseEulerFoam/LES/bubbleColumn`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `twoPhaseEulerFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "multiphase-reactingtwophaseeulerfoam-laminar-bubblecolumn",
    "title": "Blowing air into water column (Laminar)",
    "titleZh": "向水柱中鼓入空气（层流）",
    "category": "Multiphase",
    "categoryZh": "多相流",
    "types": [
      "多相",
      "燃烧"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "reactingTwoPhaseEulerFoam",
    "localPath": "multiphase/reactingTwoPhaseEulerFoam/laminar/bubbleColumn",
    "download": "downloads/openfoam/multiphase-reactingtwophaseeulerfoam-laminar-bubblecolumn.zip",
    "images": [
      {
        "url": "assets/openfoam/multiphase-reactingtwophaseeulerfoam-laminar-bubblecolumn/result-01-multiphase-multiphaseeulerfoam-bubblecolumn-mesh.png",
        "alt": "Blowing air into water column (Laminar) result 1",
        "altZh": "向水柱中鼓入空气（层流）结果图 1"
      },
      {
        "url": "assets/openfoam/multiphase-reactingtwophaseeulerfoam-laminar-bubblecolumn/result-02-multiphase-reactingtwophaseeulerfoam-laminar-bubblec.png",
        "alt": "Blowing air into water column (Laminar) result 2",
        "altZh": "向水柱中鼓入空气（层流）结果图 2"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "T.air",
        "T.water",
        "Theta",
        "U.air",
        "U.water",
        "alpha.air",
        "p",
        "p_rgh"
      ],
      "constants": [
        "g",
        "phaseProperties",
        "thermophysicalProperties.air",
        "thermophysicalProperties.water",
        "turbulenceProperties.air",
        "turbulenceProperties.water"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟气体注入水柱后的气泡羽流，关注气相体积分数、液体循环、相间动量交换以及层流/LES/RANS 模型对气泡柱结构的影响。",
        "数值上，该案例归入多相流，使用 `reactingTwoPhaseEulerFoam`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括`T.air`、`T.water`、`Theta`、`U.air`、`U.water`、相分数 `alpha.air`、压力变量 `p`、压力变量 `p_rgh`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `g` 定义重力方向与大小；`phaseProperties` 定义多相体系和相间模型。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/multiphase/reactingTwoPhaseEulerFoam/laminar/bubbleColumn`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `reactingTwoPhaseEulerFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "multiphase-twophaseeulerfoam-laminar-bubblecolumn",
    "title": "Blowing air into water column (Laminar)",
    "titleZh": "向水柱中鼓入空气（层流）",
    "category": "Multiphase",
    "categoryZh": "多相流",
    "types": [
      "多相"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "twoPhaseEulerFoam",
    "localPath": "multiphase/twoPhaseEulerFoam/laminar/bubbleColumn",
    "download": "downloads/openfoam/multiphase-twophaseeulerfoam-laminar-bubblecolumn.zip",
    "images": [
      {
        "url": "assets/openfoam/multiphase-twophaseeulerfoam-laminar-bubblecolumn/result-01-multiphase-multiphaseeulerfoam-bubblecolumn-mesh.png",
        "alt": "Blowing air into water column (Laminar) result 1",
        "altZh": "向水柱中鼓入空气（层流）结果图 1"
      },
      {
        "url": "assets/openfoam/multiphase-twophaseeulerfoam-laminar-bubblecolumn/result-02-multiphase-twophaseeulerfoam-laminar-bubblecolumn-al.png",
        "alt": "Blowing air into water column (Laminar) result 2",
        "altZh": "向水柱中鼓入空气（层流）结果图 2"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "T.air",
        "T.water",
        "Theta",
        "U.air",
        "U.water",
        "alpha.air",
        "p",
        "p_rgh"
      ],
      "constants": [
        "g",
        "phaseProperties",
        "thermophysicalProperties.air",
        "thermophysicalProperties.water",
        "turbulenceProperties.air",
        "turbulenceProperties.water"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟气体注入水柱后的气泡羽流，关注气相体积分数、液体循环、相间动量交换以及层流/LES/RANS 模型对气泡柱结构的影响。",
        "数值上，该案例归入多相流，使用 `twoPhaseEulerFoam`，可理解为 欧拉-欧拉两相流求解器。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括`T.air`、`T.water`、`Theta`、`U.air`、`U.water`、相分数 `alpha.air`、压力变量 `p`、压力变量 `p_rgh`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `g` 定义重力方向与大小；`phaseProperties` 定义多相体系和相间模型。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/multiphase/twoPhaseEulerFoam/laminar/bubbleColumn`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `twoPhaseEulerFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "multiphase-reactingtwophaseeulerfoam-laminar-bubblecolumniate",
    "title": "Blowing air into water column (Laminar, IATE model)",
    "titleZh": "向水柱中鼓入空气（层流，IATE 模型）",
    "category": "Multiphase",
    "categoryZh": "多相流",
    "types": [
      "多相",
      "燃烧"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "reactingTwoPhaseEulerFoam",
    "localPath": "multiphase/reactingTwoPhaseEulerFoam/laminar/bubbleColumnIATE",
    "download": "downloads/openfoam/multiphase-reactingtwophaseeulerfoam-laminar-bubblecolumniate.zip",
    "images": [
      {
        "url": "assets/openfoam/multiphase-reactingtwophaseeulerfoam-laminar-bubblecolumniate/result-01-multiphase-multiphaseeulerfoam-bubblecolumn-mesh.png",
        "alt": "Blowing air into water column (Laminar, IATE model) result 1",
        "altZh": "向水柱中鼓入空气（层流，IATE 模型）结果图 1"
      },
      {
        "url": "assets/openfoam/multiphase-reactingtwophaseeulerfoam-laminar-bubblecolumniate/result-02-multiphase-reactingtwophaseeulerfoam-laminar-bubblec.png",
        "alt": "Blowing air into water column (Laminar, IATE model) result 2",
        "altZh": "向水柱中鼓入空气（层流，IATE 模型）结果图 2"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "T.air",
        "T.water",
        "Theta",
        "U.air",
        "U.water",
        "alpha.air",
        "kappai.air",
        "p",
        "p_rgh"
      ],
      "constants": [
        "g",
        "phaseProperties",
        "thermophysicalProperties.air",
        "thermophysicalProperties.water",
        "turbulenceProperties.air",
        "turbulenceProperties.water"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟气体注入水柱后的气泡羽流，关注气相体积分数、液体循环、相间动量交换以及层流/LES/RANS 模型对气泡柱结构的影响。",
        "数值上，该案例归入多相流，使用 `reactingTwoPhaseEulerFoam`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括`T.air`、`T.water`、`Theta`、`U.air`、`U.water`、相分数 `alpha.air`、`kappai.air`、压力变量 `p`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `g` 定义重力方向与大小；`phaseProperties` 定义多相体系和相间模型。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/multiphase/reactingTwoPhaseEulerFoam/laminar/bubbleColumnIATE`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `reactingTwoPhaseEulerFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "multiphase-twophaseeulerfoam-laminar-bubblecolumniate",
    "title": "Blowing air into water column (Laminar, IATE model)",
    "titleZh": "向水柱中鼓入空气（层流，IATE 模型）",
    "category": "Multiphase",
    "categoryZh": "多相流",
    "types": [
      "多相"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "twoPhaseEulerFoam",
    "localPath": "multiphase/twoPhaseEulerFoam/laminar/bubbleColumnIATE",
    "download": "downloads/openfoam/multiphase-twophaseeulerfoam-laminar-bubblecolumniate.zip",
    "images": [
      {
        "url": "assets/openfoam/multiphase-twophaseeulerfoam-laminar-bubblecolumniate/result-01-multiphase-multiphaseeulerfoam-bubblecolumn-mesh.png",
        "alt": "Blowing air into water column (Laminar, IATE model) result 1",
        "altZh": "向水柱中鼓入空气（层流，IATE 模型）结果图 1"
      },
      {
        "url": "assets/openfoam/multiphase-twophaseeulerfoam-laminar-bubblecolumniate/result-02-multiphase-twophaseeulerfoam-laminar-bubblecolumniat.png",
        "alt": "Blowing air into water column (Laminar, IATE model) result 2",
        "altZh": "向水柱中鼓入空气（层流，IATE 模型）结果图 2"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "T.air",
        "T.water",
        "Theta",
        "U.air",
        "U.water",
        "alpha.air",
        "kappai.air",
        "p",
        "p_rgh"
      ],
      "constants": [
        "g",
        "phaseProperties",
        "thermophysicalProperties.air",
        "thermophysicalProperties.water",
        "turbulenceProperties.air",
        "turbulenceProperties.water"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟气体注入水柱后的气泡羽流，关注气相体积分数、液体循环、相间动量交换以及层流/LES/RANS 模型对气泡柱结构的影响。",
        "数值上，该案例归入多相流，使用 `twoPhaseEulerFoam`，可理解为 欧拉-欧拉两相流求解器。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括`T.air`、`T.water`、`Theta`、`U.air`、`U.water`、相分数 `alpha.air`、`kappai.air`、压力变量 `p`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `g` 定义重力方向与大小；`phaseProperties` 定义多相体系和相间模型。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/multiphase/twoPhaseEulerFoam/laminar/bubbleColumnIATE`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `twoPhaseEulerFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "multiphase-reactingtwophaseeulerfoam-ras-bubblecolumn",
    "title": "Blowing air into water column (RANS)",
    "titleZh": "向水柱中鼓入空气（RANS）",
    "category": "Multiphase",
    "categoryZh": "多相流",
    "types": [
      "多相",
      "湍流",
      "燃烧"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "reactingTwoPhaseEulerFoam",
    "localPath": "multiphase/reactingTwoPhaseEulerFoam/RAS/bubbleColumn",
    "download": "downloads/openfoam/multiphase-reactingtwophaseeulerfoam-ras-bubblecolumn.zip",
    "images": [
      {
        "url": "assets/openfoam/multiphase-reactingtwophaseeulerfoam-ras-bubblecolumn/result-01-multiphase-multiphaseeulerfoam-bubblecolumn-mesh.png",
        "alt": "Blowing air into water column (RANS) result 1",
        "altZh": "向水柱中鼓入空气（RANS）结果图 1"
      },
      {
        "url": "assets/openfoam/multiphase-reactingtwophaseeulerfoam-ras-bubblecolumn/result-02-multiphase-reactingtwophaseeulerfoam-ras-bubblecolum.png",
        "alt": "Blowing air into water column (RANS) result 2",
        "altZh": "向水柱中鼓入空气（RANS）结果图 2"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "T.air",
        "T.water",
        "Theta",
        "U.air",
        "U.water",
        "alpha.air",
        "alphat.air",
        "alphat.water",
        "epsilon.air",
        "epsilon.water"
      ],
      "constants": [
        "g",
        "phaseProperties",
        "thermophysicalProperties.air",
        "thermophysicalProperties.water",
        "turbulenceProperties.air",
        "turbulenceProperties.water"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟气体注入水柱后的气泡羽流，关注气相体积分数、液体循环、相间动量交换以及层流/LES/RANS 模型对气泡柱结构的影响。",
        "数值上，该案例归入多相流，使用 `reactingTwoPhaseEulerFoam`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括`T.air`、`T.water`、`Theta`、`U.air`、`U.water`、相分数 `alpha.air`、相分数 `alphat.air`、相分数 `alphat.water`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `g` 定义重力方向与大小；`phaseProperties` 定义多相体系和相间模型。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/multiphase/reactingTwoPhaseEulerFoam/RAS/bubbleColumn`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `reactingTwoPhaseEulerFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "multiphase-twophaseeulerfoam-ras-bubblecolumn",
    "title": "Blowing air into water column (RANS)",
    "titleZh": "向水柱中鼓入空气（RANS）",
    "category": "Multiphase",
    "categoryZh": "多相流",
    "types": [
      "多相",
      "湍流"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "twoPhaseEulerFoam",
    "localPath": "multiphase/twoPhaseEulerFoam/RAS/bubbleColumn",
    "download": "downloads/openfoam/multiphase-twophaseeulerfoam-ras-bubblecolumn.zip",
    "images": [
      {
        "url": "assets/openfoam/multiphase-twophaseeulerfoam-ras-bubblecolumn/result-01-multiphase-multiphaseeulerfoam-bubblecolumn-mesh.png",
        "alt": "Blowing air into water column (RANS) result 1",
        "altZh": "向水柱中鼓入空气（RANS）结果图 1"
      },
      {
        "url": "assets/openfoam/multiphase-twophaseeulerfoam-ras-bubblecolumn/result-02-multiphase-twophaseeulerfoam-ras-bubblecolumn-alpha-.png",
        "alt": "Blowing air into water column (RANS) result 2",
        "altZh": "向水柱中鼓入空气（RANS）结果图 2"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "T.air",
        "T.water",
        "Theta",
        "U.air",
        "U.water",
        "alpha.air",
        "alphat.air",
        "alphat.water",
        "epsilon.air",
        "epsilon.water"
      ],
      "constants": [
        "g",
        "phaseProperties",
        "thermophysicalProperties.air",
        "thermophysicalProperties.water",
        "turbulenceProperties.air",
        "turbulenceProperties.water"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟气体注入水柱后的气泡羽流，关注气相体积分数、液体循环、相间动量交换以及层流/LES/RANS 模型对气泡柱结构的影响。",
        "数值上，该案例归入多相流，使用 `twoPhaseEulerFoam`，可理解为 欧拉-欧拉两相流求解器。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括`T.air`、`T.water`、`Theta`、`U.air`、`U.water`、相分数 `alpha.air`、相分数 `alphat.air`、相分数 `alphat.water`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `g` 定义重力方向与大小；`phaseProperties` 定义多相体系和相间模型。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/multiphase/twoPhaseEulerFoam/RAS/bubbleColumn`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `twoPhaseEulerFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "multiphase-reactingtwophaseeulerfoam-laminar-bubblecolumnevaporating",
    "title": "Blowing air into water column with evaporation",
    "titleZh": "向水柱中鼓入空气并蒸发",
    "category": "Multiphase",
    "categoryZh": "多相流",
    "types": [
      "多相",
      "燃烧"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "reactingTwoPhaseEulerFoam",
    "localPath": "multiphase/reactingTwoPhaseEulerFoam/laminar/bubbleColumnEvaporating",
    "download": "downloads/openfoam/multiphase-reactingtwophaseeulerfoam-laminar-bubblecolumnevaporating.zip",
    "images": [
      {
        "url": "assets/openfoam/multiphase-reactingtwophaseeulerfoam-laminar-bubblecolumnevaporating/result-01-multiphase-multiphaseeulerfoam-bubblecolumn-mesh.png",
        "alt": "Blowing air into water column with evaporation result 1",
        "altZh": "向水柱中鼓入空气并蒸发结果图 1"
      },
      {
        "url": "assets/openfoam/multiphase-reactingtwophaseeulerfoam-laminar-bubblecolumnevaporating/result-02-multiphase-reactingtwophaseeulerfoam-laminar-bubblec.png",
        "alt": "Blowing air into water column with evaporation result 2",
        "altZh": "向水柱中鼓入空气并蒸发结果图 2"
      },
      {
        "url": "assets/openfoam/multiphase-reactingtwophaseeulerfoam-laminar-bubblecolumnevaporating/result-03-multiphase-reactingtwophaseeulerfoam-laminar-bubblec.png",
        "alt": "Blowing air into water column with evaporation result 3",
        "altZh": "向水柱中鼓入空气并蒸发结果图 3"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "CO.gas",
        "H2O.gas",
        "H2O.liquid",
        "T.gas",
        "T.liquid",
        "U.gas",
        "U.liquid",
        "Ydefault",
        "air.gas",
        "air.liquid"
      ],
      "constants": [
        "g",
        "phaseProperties",
        "thermophysicalProperties.gas",
        "thermophysicalProperties.liquid",
        "turbulenceProperties.gas",
        "turbulenceProperties.liquid"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟气体注入水柱后的气泡羽流，关注气相体积分数、液体循环、相间动量交换以及层流/LES/RANS 模型对气泡柱结构的影响。",
        "数值上，该案例归入多相流，使用 `reactingTwoPhaseEulerFoam`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括`CO.gas`、`H2O.gas`、`H2O.liquid`、`T.gas`、`T.liquid`、`U.gas`、`U.liquid`、组分质量分数 `Ydefault`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `g` 定义重力方向与大小；`phaseProperties` 定义多相体系和相间模型。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/multiphase/reactingTwoPhaseEulerFoam/laminar/bubbleColumnEvaporating`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `reactingTwoPhaseEulerFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "multiphase-reactingtwophaseeulerfoam-laminar-bubblecolumnevaporatingdissolving",
    "title": "Blowing air into water column with evaporation and dissolution",
    "titleZh": "向水柱中鼓入空气并蒸发与溶解",
    "category": "Multiphase",
    "categoryZh": "多相流",
    "types": [
      "多相",
      "燃烧"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "reactingTwoPhaseEulerFoam",
    "localPath": "multiphase/reactingTwoPhaseEulerFoam/laminar/bubbleColumnEvaporatingDissolving",
    "download": "downloads/openfoam/multiphase-reactingtwophaseeulerfoam-laminar-bubblecolumnevaporatingdissolving.zip",
    "images": [
      {
        "url": "assets/openfoam/multiphase-reactingtwophaseeulerfoam-laminar-bubblecolumnevaporatingdissolving/result-01-multiphase-multiphaseeulerfoam-bubblecolumn-mesh.png",
        "alt": "Blowing air into water column with evaporation and dissolution result 1",
        "altZh": "向水柱中鼓入空气并蒸发与溶解结果图 1"
      },
      {
        "url": "assets/openfoam/multiphase-reactingtwophaseeulerfoam-laminar-bubblecolumnevaporatingdissolving/result-02-multiphase-reactingtwophaseeulerfoam-laminar-bubblec.png",
        "alt": "Blowing air into water column with evaporation and dissolution result 2",
        "altZh": "向水柱中鼓入空气并蒸发与溶解结果图 2"
      },
      {
        "url": "assets/openfoam/multiphase-reactingtwophaseeulerfoam-laminar-bubblecolumnevaporatingdissolving/result-03-multiphase-reactingtwophaseeulerfoam-laminar-bubblec.png",
        "alt": "Blowing air into water column with evaporation and dissolution result 3",
        "altZh": "向水柱中鼓入空气并蒸发与溶解结果图 3"
      },
      {
        "url": "assets/openfoam/multiphase-reactingtwophaseeulerfoam-laminar-bubblecolumnevaporatingdissolving/result-04-multiphase-reactingtwophaseeulerfoam-laminar-bubblec.png",
        "alt": "Blowing air into water column with evaporation and dissolution result 4",
        "altZh": "向水柱中鼓入空气并蒸发与溶解结果图 4"
      },
      {
        "url": "assets/openfoam/multiphase-reactingtwophaseeulerfoam-laminar-bubblecolumnevaporatingdissolving/result-05-multiphase-reactingtwophaseeulerfoam-laminar-bubblec.png",
        "alt": "Blowing air into water column with evaporation and dissolution result 5",
        "altZh": "向水柱中鼓入空气并蒸发与溶解结果图 5"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "T.gas",
        "T.liquid",
        "U.gas",
        "U.liquid",
        "air.gas",
        "air.liquid",
        "alpha.gas",
        "alpha.liquid",
        "p",
        "p_rgh"
      ],
      "constants": [
        "g",
        "phaseProperties",
        "thermophysicalProperties.gas",
        "thermophysicalProperties.liquid",
        "turbulenceProperties.gas",
        "turbulenceProperties.liquid"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟气体注入水柱后的气泡羽流，关注气相体积分数、液体循环、相间动量交换以及层流/LES/RANS 模型对气泡柱结构的影响。",
        "数值上，该案例归入多相流，使用 `reactingTwoPhaseEulerFoam`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括`T.gas`、`T.liquid`、`U.gas`、`U.liquid`、`air.gas`、`air.liquid`、相分数 `alpha.gas`、相分数 `alpha.liquid`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `g` 定义重力方向与大小；`phaseProperties` 定义多相体系和相间模型。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/multiphase/reactingTwoPhaseEulerFoam/laminar/bubbleColumnEvaporatingDissolving`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `reactingTwoPhaseEulerFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "multiphase-reactingtwophaseeulerfoam-laminar-injection",
    "title": "Blowing gas into a liquid",
    "titleZh": "向液体中鼓入气体",
    "category": "Multiphase",
    "categoryZh": "多相流",
    "types": [
      "多相",
      "燃烧"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "reactingTwoPhaseEulerFoam",
    "localPath": "multiphase/reactingTwoPhaseEulerFoam/laminar/injection",
    "download": "downloads/openfoam/multiphase-reactingtwophaseeulerfoam-laminar-injection.zip",
    "images": [
      {
        "url": "assets/openfoam/multiphase-reactingtwophaseeulerfoam-laminar-injection/result-01-multiphase-twophaseeulerfoam-laminar-injection-mesh.png",
        "alt": "Blowing gas into a liquid result 1",
        "altZh": "向液体中鼓入气体结果图 1"
      },
      {
        "url": "assets/openfoam/multiphase-reactingtwophaseeulerfoam-laminar-injection/result-02-multiphase-reactingtwophaseeulerfoam-laminar-injecti.png",
        "alt": "Blowing gas into a liquid result 2",
        "altZh": "向液体中鼓入气体结果图 2"
      },
      {
        "url": "assets/openfoam/multiphase-reactingtwophaseeulerfoam-laminar-injection/result-03-multiphase-reactingtwophaseeulerfoam-laminar-injecti.png",
        "alt": "Blowing gas into a liquid result 3",
        "altZh": "向液体中鼓入气体结果图 3"
      },
      {
        "url": "assets/openfoam/multiphase-reactingtwophaseeulerfoam-laminar-injection/result-04-multiphase-reactingtwophaseeulerfoam-laminar-injecti.png",
        "alt": "Blowing gas into a liquid result 4",
        "altZh": "向液体中鼓入气体结果图 4"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "T.air",
        "T.water",
        "U.air",
        "U.water",
        "alpha.air",
        "p",
        "p_rgh"
      ],
      "constants": [
        "fvOptions",
        "g",
        "phaseProperties",
        "thermophysicalProperties.air",
        "thermophysicalProperties.water",
        "turbulenceProperties.air",
        "turbulenceProperties.water"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟气体或蒸汽注入液体后的两相流动，关注射流破碎、气泡上升、相间传质/传热以及自由界面响应。",
        "数值上，该案例归入多相流，使用 `reactingTwoPhaseEulerFoam`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括`T.air`、`T.water`、`U.air`、`U.water`、相分数 `alpha.air`、压力变量 `p`、压力变量 `p_rgh`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `g` 定义重力方向与大小；`phaseProperties` 定义多相体系和相间模型。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/multiphase/reactingTwoPhaseEulerFoam/laminar/injection`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `reactingTwoPhaseEulerFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "multiphase-twophaseeulerfoam-laminar-injection",
    "title": "Blowing gas into a liquid",
    "titleZh": "向液体中鼓入气体",
    "category": "Multiphase",
    "categoryZh": "多相流",
    "types": [
      "多相"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "twoPhaseEulerFoam",
    "localPath": "multiphase/twoPhaseEulerFoam/laminar/injection",
    "download": "downloads/openfoam/multiphase-twophaseeulerfoam-laminar-injection.zip",
    "images": [
      {
        "url": "assets/openfoam/multiphase-twophaseeulerfoam-laminar-injection/result-01-multiphase-twophaseeulerfoam-laminar-injection-mesh.png",
        "alt": "Blowing gas into a liquid result 1",
        "altZh": "向液体中鼓入气体结果图 1"
      },
      {
        "url": "assets/openfoam/multiphase-twophaseeulerfoam-laminar-injection/result-02-multiphase-twophaseeulerfoam-laminar-injection-alpha.png",
        "alt": "Blowing gas into a liquid result 2",
        "altZh": "向液体中鼓入气体结果图 2"
      },
      {
        "url": "assets/openfoam/multiphase-twophaseeulerfoam-laminar-injection/result-03-multiphase-twophaseeulerfoam-laminar-injection-alpha.png",
        "alt": "Blowing gas into a liquid result 3",
        "altZh": "向液体中鼓入气体结果图 3"
      },
      {
        "url": "assets/openfoam/multiphase-twophaseeulerfoam-laminar-injection/result-04-multiphase-twophaseeulerfoam-laminar-injection-alpha.png",
        "alt": "Blowing gas into a liquid result 4",
        "altZh": "向液体中鼓入气体结果图 4"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "T.air",
        "T.water",
        "U.air",
        "U.water",
        "alpha.air",
        "p",
        "p_rgh"
      ],
      "constants": [
        "fvOptions",
        "g",
        "phaseProperties",
        "thermophysicalProperties.air",
        "thermophysicalProperties.water",
        "turbulenceProperties.air",
        "turbulenceProperties.water"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟气体或蒸汽注入液体后的两相流动，关注射流破碎、气泡上升、相间传质/传热以及自由界面响应。",
        "数值上，该案例归入多相流，使用 `twoPhaseEulerFoam`，可理解为 欧拉-欧拉两相流求解器。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括`T.air`、`T.water`、`U.air`、`U.water`、相分数 `alpha.air`、压力变量 `p`、压力变量 `p_rgh`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `g` 定义重力方向与大小；`phaseProperties` 定义多相体系和相间模型。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/multiphase/twoPhaseEulerFoam/laminar/injection`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `twoPhaseEulerFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "multiphase-reactingtwophaseeulerfoam-laminar-steaminjection",
    "title": "Blowing steam into a liquid",
    "titleZh": "向液体中鼓入蒸汽",
    "category": "Multiphase",
    "categoryZh": "多相流",
    "types": [
      "多相",
      "燃烧"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "reactingTwoPhaseEulerFoam",
    "localPath": "multiphase/reactingTwoPhaseEulerFoam/laminar/steamInjection",
    "download": "downloads/openfoam/multiphase-reactingtwophaseeulerfoam-laminar-steaminjection.zip",
    "images": [
      {
        "url": "assets/openfoam/multiphase-reactingtwophaseeulerfoam-laminar-steaminjection/result-01-multiphase-twophaseeulerfoam-laminar-injection-mesh.png",
        "alt": "Blowing steam into a liquid result 1",
        "altZh": "向液体中鼓入蒸汽结果图 1"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "T.steam",
        "T.water",
        "U.steam",
        "U.water",
        "alpha.steam",
        "alpha.water",
        "nut.water",
        "p",
        "p_rgh",
        "water.steam"
      ],
      "constants": [
        "fvOptions",
        "g",
        "phaseProperties",
        "thermophysicalProperties.steam",
        "thermophysicalProperties.water",
        "turbulenceProperties.steam",
        "turbulenceProperties.water"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟气体或蒸汽注入液体后的两相流动，关注射流破碎、气泡上升、相间传质/传热以及自由界面响应。",
        "数值上，该案例归入多相流，使用 `reactingTwoPhaseEulerFoam`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括`T.steam`、`T.water`、`U.steam`、`U.water`、相分数 `alpha.steam`、相分数 `alpha.water`、`nut.water`、压力变量 `p`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `g` 定义重力方向与大小；`phaseProperties` 定义多相体系和相间模型。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/multiphase/reactingTwoPhaseEulerFoam/laminar/steamInjection`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `reactingTwoPhaseEulerFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "multiphase-reactingtwophaseeulerfoam-ras-wallboiling",
    "title": "Boiling at high temperature wall",
    "titleZh": "高温壁面沸腾",
    "category": "Multiphase",
    "categoryZh": "多相流",
    "types": [
      "多相",
      "湍流",
      "燃烧"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "reactingTwoPhaseEulerFoam",
    "localPath": "multiphase/reactingTwoPhaseEulerFoam/RAS/wallBoiling",
    "download": "downloads/openfoam/multiphase-reactingtwophaseeulerfoam-ras-wallboiling.zip",
    "images": [
      {
        "url": "assets/openfoam/multiphase-reactingtwophaseeulerfoam-ras-wallboiling/result-01-multiphase-reactingtwophaseeulerfoam-ras-wallboiling.png",
        "alt": "Boiling at high temperature wall result 1",
        "altZh": "高温壁面沸腾结果图 1"
      },
      {
        "url": "assets/openfoam/multiphase-reactingtwophaseeulerfoam-ras-wallboiling/result-02-multiphase-reactingtwophaseeulerfoam-ras-wallboiling.png",
        "alt": "Boiling at high temperature wall result 2",
        "altZh": "高温壁面沸腾结果图 2"
      },
      {
        "url": "assets/openfoam/multiphase-reactingtwophaseeulerfoam-ras-wallboiling/result-03-multiphase-reactingtwophaseeulerfoam-ras-wallboiling.png",
        "alt": "Boiling at high temperature wall result 3",
        "altZh": "高温壁面沸腾结果图 3"
      },
      {
        "url": "assets/openfoam/multiphase-reactingtwophaseeulerfoam-ras-wallboiling/result-04-multiphase-reactingtwophaseeulerfoam-ras-wallboiling.png",
        "alt": "Boiling at high temperature wall result 4",
        "altZh": "高温壁面沸腾结果图 4"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "T.gas",
        "T.liquid",
        "U.gas",
        "U.liquid",
        "alpha.gas",
        "alpha.liquid",
        "alphat.gas",
        "alphat.liquid",
        "epsilon.gas",
        "epsilon.liquid"
      ],
      "constants": [
        "g",
        "phaseProperties",
        "thermophysicalProperties.gas",
        "thermophysicalProperties.liquid",
        "turbulenceProperties.gas",
        "turbulenceProperties.liquid"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟高温壁面附近的沸腾两相流，关注壁面汽泡生成、相变换热、气相体积分数和近壁温度场。",
        "数值上，该案例归入多相流，使用 `reactingTwoPhaseEulerFoam`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括`T.gas`、`T.liquid`、`U.gas`、`U.liquid`、相分数 `alpha.gas`、相分数 `alpha.liquid`、相分数 `alphat.gas`、相分数 `alphat.liquid`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `g` 定义重力方向与大小；`phaseProperties` 定义多相体系和相间模型。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/multiphase/reactingTwoPhaseEulerFoam/RAS/wallBoiling`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `reactingTwoPhaseEulerFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "multiphase-interfoam-laminar-capillaryrise",
    "title": "Capillary rise",
    "titleZh": "毛细上升",
    "category": "Multiphase",
    "categoryZh": "多相流",
    "types": [
      "多相"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "interFoam",
    "localPath": "multiphase/interFoam/laminar/capillaryRise",
    "download": "downloads/openfoam/multiphase-interfoam-laminar-capillaryrise.zip",
    "images": [
      {
        "url": "assets/openfoam/multiphase-interfoam-laminar-capillaryrise/result-01-multiphase-interfoam-laminar-capillaryrise-mesh.png",
        "alt": "Capillary rise result 1",
        "altZh": "毛细上升结果图 1"
      },
      {
        "url": "assets/openfoam/multiphase-interfoam-laminar-capillaryrise/result-02-multiphase-interfoam-laminar-capillaryrise-mesh-zoom.png",
        "alt": "Capillary rise result 2",
        "altZh": "毛细上升结果图 2"
      },
      {
        "url": "assets/openfoam/multiphase-interfoam-laminar-capillaryrise/result-03-multiphase-interfoam-laminar-capillaryrise-alpha-wat.png",
        "alt": "Capillary rise result 3",
        "altZh": "毛细上升结果图 3"
      },
      {
        "url": "assets/openfoam/multiphase-interfoam-laminar-capillaryrise/result-04-multiphase-interfoam-laminar-capillaryrise-alpha-wat.png",
        "alt": "Capillary rise result 4",
        "altZh": "毛细上升结果图 4"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "U",
        "alpha.water",
        "p_rgh"
      ],
      "constants": [
        "g",
        "transportProperties",
        "turbulenceProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟毛细管或窄缝中的毛细上升，关注表面张力、接触角、重力和黏性阻力共同决定的液面高度演化。",
        "数值上，该案例归入多相流，使用 `interFoam`，可理解为 VOF 两相流求解器。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括速度场 `U`、相分数 `alpha.water`、压力变量 `p_rgh`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `g` 定义重力方向与大小；`transportProperties` 定义流体物性与输运系数；`turbulenceProperties` 定义湍流模型选择。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/multiphase/interFoam/laminar/capillaryRise`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `interFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "multiphase-interphasechangefoam-cavitatingbullet",
    "title": "Cavitation around a bullet",
    "titleZh": "弹丸周围空化",
    "category": "Multiphase",
    "categoryZh": "多相流",
    "types": [
      "多相"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "interPhaseChangeFoam",
    "localPath": "multiphase/interPhaseChangeFoam/cavitatingBullet",
    "download": "downloads/openfoam/multiphase-interphasechangefoam-cavitatingbullet.zip",
    "images": [
      {
        "url": "assets/openfoam/multiphase-interphasechangefoam-cavitatingbullet/result-01-multiphase-interphasechangefoam-cavitatingbullet-mes.png",
        "alt": "Cavitation around a bullet result 1",
        "altZh": "弹丸周围空化结果图 1"
      },
      {
        "url": "assets/openfoam/multiphase-interphasechangefoam-cavitatingbullet/result-02-multiphase-interphasechangefoam-cavitatingbullet-mes.png",
        "alt": "Cavitation around a bullet result 2",
        "altZh": "弹丸周围空化结果图 2"
      },
      {
        "url": "assets/openfoam/multiphase-interphasechangefoam-cavitatingbullet/result-03-multiphase-interphasechangefoam-cavitatingbullet-u.png",
        "alt": "Cavitation around a bullet result 3",
        "altZh": "弹丸周围空化结果图 3"
      },
      {
        "url": "assets/openfoam/multiphase-interphasechangefoam-cavitatingbullet/result-04-multiphase-interphasechangefoam-cavitatingbullet-p-r.png",
        "alt": "Cavitation around a bullet result 4",
        "altZh": "弹丸周围空化结果图 4"
      },
      {
        "url": "assets/openfoam/multiphase-interphasechangefoam-cavitatingbullet/result-05-multiphase-interphasechangefoam-cavitatingbullet-alp.png",
        "alt": "Cavitation around a bullet result 5",
        "altZh": "弹丸周围空化结果图 5"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "Phi",
        "U",
        "alpha.water",
        "p_rgh"
      ],
      "constants": [
        "g",
        "transportProperties",
        "turbulenceProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟高速物体或螺旋桨附近的空化流动，关注低压区域内汽相生成、空泡分布和压力恢复过程。",
        "数值上，该案例归入多相流，使用 `interPhaseChangeFoam`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括`Phi`、速度场 `U`、相分数 `alpha.water`、压力变量 `p_rgh`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `g` 定义重力方向与大小；`transportProperties` 定义流体物性与输运系数；`turbulenceProperties` 定义湍流模型选择。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/multiphase/interPhaseChangeFoam/cavitatingBullet`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `interPhaseChangeFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "multiphase-interphasechangedymfoam-propeller",
    "title": "Cavitation around a propeller",
    "titleZh": "螺旋桨周围空化",
    "category": "Multiphase",
    "categoryZh": "多相流",
    "types": [
      "多相"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "interPhaseChangeDyMFoam",
    "localPath": "multiphase/interPhaseChangeDyMFoam/propeller",
    "download": "downloads/openfoam/multiphase-interphasechangedymfoam-propeller.zip",
    "images": [
      {
        "url": "assets/openfoam/multiphase-interphasechangedymfoam-propeller/result-01-incompressible-pimpledymfoam-propeller-mesh.png",
        "alt": "Cavitation around a propeller result 1",
        "altZh": "螺旋桨周围空化结果图 1"
      },
      {
        "url": "assets/openfoam/multiphase-interphasechangedymfoam-propeller/result-02-incompressible-pimpledymfoam-propeller-mesh-yz.png",
        "alt": "Cavitation around a propeller result 2",
        "altZh": "螺旋桨周围空化结果图 2"
      },
      {
        "url": "assets/openfoam/multiphase-interphasechangedymfoam-propeller/result-03-incompressible-pimpledymfoam-propeller-mesh-ami.png",
        "alt": "Cavitation around a propeller result 3",
        "altZh": "螺旋桨周围空化结果图 3"
      },
      {
        "url": "assets/openfoam/multiphase-interphasechangedymfoam-propeller/result-04-incompressible-pimpledymfoam-propeller-mesh-propelle.png",
        "alt": "Cavitation around a propeller result 4",
        "altZh": "螺旋桨周围空化结果图 4"
      },
      {
        "url": "assets/openfoam/multiphase-interphasechangedymfoam-propeller/result-05-multiphase-interphasechangedymfoam-propeller-u.png",
        "alt": "Cavitation around a propeller result 5",
        "altZh": "螺旋桨周围空化结果图 5"
      },
      {
        "url": "assets/openfoam/multiphase-interphasechangedymfoam-propeller/result-06-multiphase-interphasechangedymfoam-propeller-p-rgh.png",
        "alt": "Cavitation around a propeller result 6",
        "altZh": "螺旋桨周围空化结果图 6"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "U",
        "alpha.water",
        "epsilon",
        "k",
        "nut",
        "p_rgh"
      ],
      "constants": [
        "dynamicMeshDict",
        "g",
        "transportProperties",
        "turbulenceProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟高速物体或螺旋桨附近的空化流动，关注低压区域内汽相生成、空泡分布和压力恢复过程。",
        "数值上，该案例归入多相流，使用 `interPhaseChangeDyMFoam`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括速度场 `U`、相分数 `alpha.water`、湍流变量 `epsilon`、湍流变量 `k`、湍流变量 `nut`、压力变量 `p_rgh`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `dynamicMeshDict` 定义动网格运动方式；`g` 定义重力方向与大小；`transportProperties` 定义流体物性与输运系数；`turbulenceProperties` 定义湍流模型选择。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/multiphase/interPhaseChangeDyMFoam/propeller`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `interPhaseChangeDyMFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "multiphase-reactingtwophaseeulerfoam-laminar-mixervessel2d",
    "title": "Centrifugal separation of air and water",
    "titleZh": "空气与水的离心分离",
    "category": "Multiphase",
    "categoryZh": "多相流",
    "types": [
      "多相",
      "燃烧"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "reactingTwoPhaseEulerFoam",
    "localPath": "multiphase/reactingTwoPhaseEulerFoam/laminar/mixerVessel2D",
    "download": "downloads/openfoam/multiphase-reactingtwophaseeulerfoam-laminar-mixervessel2d.zip",
    "images": [
      {
        "url": "assets/openfoam/multiphase-reactingtwophaseeulerfoam-laminar-mixervessel2d/result-01-mixervessel2d-model.png",
        "alt": "Centrifugal separation of air and water result 1",
        "altZh": "空气与水的离心分离结果图 1"
      },
      {
        "url": "assets/openfoam/multiphase-reactingtwophaseeulerfoam-laminar-mixervessel2d/result-02-mixervessel2d-cellzone.png",
        "alt": "Centrifugal separation of air and water result 2",
        "altZh": "空气与水的离心分离结果图 2"
      },
      {
        "url": "assets/openfoam/multiphase-reactingtwophaseeulerfoam-laminar-mixervessel2d/result-03-mixervessel2d-mesh.png",
        "alt": "Centrifugal separation of air and water result 3",
        "altZh": "空气与水的离心分离结果图 3"
      },
      {
        "url": "assets/openfoam/multiphase-reactingtwophaseeulerfoam-laminar-mixervessel2d/result-04-multiphase-reactingtwophaseeulerfoam-laminar-mixerve.png",
        "alt": "Centrifugal separation of air and water result 4",
        "altZh": "空气与水的离心分离结果图 4"
      },
      {
        "url": "assets/openfoam/multiphase-reactingtwophaseeulerfoam-laminar-mixervessel2d/result-05-multiphase-reactingtwophaseeulerfoam-laminar-mixerve.png",
        "alt": "Centrifugal separation of air and water result 5",
        "altZh": "空气与水的离心分离结果图 5"
      },
      {
        "url": "assets/openfoam/multiphase-reactingtwophaseeulerfoam-laminar-mixervessel2d/result-06-multiphase-reactingtwophaseeulerfoam-laminar-mixerve.png",
        "alt": "Centrifugal separation of air and water result 6",
        "altZh": "空气与水的离心分离结果图 6"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "T.air",
        "T.water",
        "Theta",
        "U.air",
        "U.water",
        "alpha.air",
        "p",
        "p_rgh"
      ],
      "constants": [
        "MRFProperties",
        "g",
        "phaseProperties",
        "thermophysicalProperties.air",
        "thermophysicalProperties.water",
        "turbulenceProperties.air",
        "turbulenceProperties.water"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟圆柱搅拌器驱动的多相液体运动，关注旋转区域诱导的剪切、界面变形和不同流体的混合/分离过程。",
        "数值上，该案例归入多相流，使用 `reactingTwoPhaseEulerFoam`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括`T.air`、`T.water`、`Theta`、`U.air`、`U.water`、相分数 `alpha.air`、压力变量 `p`、压力变量 `p_rgh`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `MRFProperties` 定义旋转参考系或搅拌区域；`g` 定义重力方向与大小；`phaseProperties` 定义多相体系和相间模型。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/multiphase/reactingTwoPhaseEulerFoam/laminar/mixerVessel2D`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `reactingTwoPhaseEulerFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "multiphase-twophaseeulerfoam-laminar-mixervessel2d",
    "title": "Centrifugal separation of air and water",
    "titleZh": "空气与水的离心分离",
    "category": "Multiphase",
    "categoryZh": "多相流",
    "types": [
      "多相"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "twoPhaseEulerFoam",
    "localPath": "multiphase/twoPhaseEulerFoam/laminar/mixerVessel2D",
    "download": "downloads/openfoam/multiphase-twophaseeulerfoam-laminar-mixervessel2d.zip",
    "images": [
      {
        "url": "assets/openfoam/multiphase-twophaseeulerfoam-laminar-mixervessel2d/result-01-mixervessel2d-model.png",
        "alt": "Centrifugal separation of air and water result 1",
        "altZh": "空气与水的离心分离结果图 1"
      },
      {
        "url": "assets/openfoam/multiphase-twophaseeulerfoam-laminar-mixervessel2d/result-02-mixervessel2d-cellzone.png",
        "alt": "Centrifugal separation of air and water result 2",
        "altZh": "空气与水的离心分离结果图 2"
      },
      {
        "url": "assets/openfoam/multiphase-twophaseeulerfoam-laminar-mixervessel2d/result-03-mixervessel2d-mesh.png",
        "alt": "Centrifugal separation of air and water result 3",
        "altZh": "空气与水的离心分离结果图 3"
      },
      {
        "url": "assets/openfoam/multiphase-twophaseeulerfoam-laminar-mixervessel2d/result-04-multiphase-twophaseeulerfoam-laminar-mixervessel2d-a.png",
        "alt": "Centrifugal separation of air and water result 4",
        "altZh": "空气与水的离心分离结果图 4"
      },
      {
        "url": "assets/openfoam/multiphase-twophaseeulerfoam-laminar-mixervessel2d/result-05-multiphase-twophaseeulerfoam-laminar-mixervessel2d-a.png",
        "alt": "Centrifugal separation of air and water result 5",
        "altZh": "空气与水的离心分离结果图 5"
      },
      {
        "url": "assets/openfoam/multiphase-twophaseeulerfoam-laminar-mixervessel2d/result-06-multiphase-twophaseeulerfoam-laminar-mixervessel2d-a.png",
        "alt": "Centrifugal separation of air and water result 6",
        "altZh": "空气与水的离心分离结果图 6"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "T.air",
        "T.water",
        "Theta",
        "U.air",
        "U.water",
        "alpha.air",
        "p",
        "p_rgh"
      ],
      "constants": [
        "MRFProperties",
        "g",
        "phaseProperties",
        "thermophysicalProperties.air",
        "thermophysicalProperties.water",
        "turbulenceProperties.air",
        "turbulenceProperties.water"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟圆柱搅拌器驱动的多相液体运动，关注旋转区域诱导的剪切、界面变形和不同流体的混合/分离过程。",
        "数值上，该案例归入多相流，使用 `twoPhaseEulerFoam`，可理解为 欧拉-欧拉两相流求解器。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括`T.air`、`T.water`、`Theta`、`U.air`、`U.water`、相分数 `alpha.air`、压力变量 `p`、压力变量 `p_rgh`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `MRFProperties` 定义旋转参考系或搅拌区域；`g` 定义重力方向与大小；`phaseProperties` 定义多相体系和相间模型。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/multiphase/twoPhaseEulerFoam/laminar/mixerVessel2D`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `twoPhaseEulerFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "multiphase-multiphaseeulerfoam-mixervessel2d",
    "title": "Centrifugal separation of air, water, oil and mercury",
    "titleZh": "空气、水、油和汞的离心分离",
    "category": "Multiphase",
    "categoryZh": "多相流",
    "types": [
      "多相"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "multiphaseEulerFoam",
    "localPath": "multiphase/multiphaseEulerFoam/mixerVessel2D",
    "download": "downloads/openfoam/multiphase-multiphaseeulerfoam-mixervessel2d.zip",
    "images": [
      {
        "url": "assets/openfoam/multiphase-multiphaseeulerfoam-mixervessel2d/result-01-mixervessel2d-model.png",
        "alt": "Centrifugal separation of air, water, oil and mercury result 1",
        "altZh": "空气、水、油和汞的离心分离结果图 1"
      },
      {
        "url": "assets/openfoam/multiphase-multiphaseeulerfoam-mixervessel2d/result-02-mixervessel2d-cellzone.png",
        "alt": "Centrifugal separation of air, water, oil and mercury result 2",
        "altZh": "空气、水、油和汞的离心分离结果图 2"
      },
      {
        "url": "assets/openfoam/multiphase-multiphaseeulerfoam-mixervessel2d/result-03-mixervessel2d-mesh.png",
        "alt": "Centrifugal separation of air, water, oil and mercury result 3",
        "altZh": "空气、水、油和汞的离心分离结果图 3"
      },
      {
        "url": "assets/openfoam/multiphase-multiphaseeulerfoam-mixervessel2d/result-04-multiphase-multiphaseeulerfoam-mixervessel2d-alpha-a.png",
        "alt": "Centrifugal separation of air, water, oil and mercury result 4",
        "altZh": "空气、水、油和汞的离心分离结果图 4"
      },
      {
        "url": "assets/openfoam/multiphase-multiphaseeulerfoam-mixervessel2d/result-05-multiphase-multiphaseeulerfoam-mixervessel2d-alpha-o.png",
        "alt": "Centrifugal separation of air, water, oil and mercury result 5",
        "altZh": "空气、水、油和汞的离心分离结果图 5"
      },
      {
        "url": "assets/openfoam/multiphase-multiphaseeulerfoam-mixervessel2d/result-06-multiphase-multiphaseeulerfoam-mixervessel2d-alpha-w.png",
        "alt": "Centrifugal separation of air, water, oil and mercury result 6",
        "altZh": "空气、水、油和汞的离心分离结果图 6"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "Theta",
        "U.air",
        "U.mercury",
        "U.oil",
        "U.water",
        "alpha.air",
        "alpha.mercury",
        "alpha.oil",
        "alpha.water",
        "epsilon"
      ],
      "constants": [
        "MRFProperties",
        "g",
        "interfacialProperties",
        "transportProperties",
        "turbulenceProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟圆柱搅拌器驱动的多相液体运动，关注旋转区域诱导的剪切、界面变形和不同流体的混合/分离过程。",
        "数值上，该案例归入多相流，使用 `multiphaseEulerFoam`，可理解为 多相欧拉求解器。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括`Theta`、`U.air`、`U.mercury`、`U.oil`、`U.water`、相分数 `alpha.air`、相分数 `alpha.mercury`、相分数 `alpha.oil`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `MRFProperties` 定义旋转参考系或搅拌区域；`g` 定义重力方向与大小；`transportProperties` 定义流体物性与输运系数；`turbulenceProperties` 定义湍流模型选择。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/multiphase/multiphaseEulerFoam/mixerVessel2D`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `multiphaseEulerFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "multiphase-reactingmultiphaseeulerfoam-laminar-mixervessel2d",
    "title": "Centrifugal separation of air, water, oil and mercury",
    "titleZh": "空气、水、油和汞的离心分离",
    "category": "Multiphase",
    "categoryZh": "多相流",
    "types": [
      "多相",
      "燃烧"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "reactingMultiphaseEulerFoam",
    "localPath": "multiphase/reactingMultiphaseEulerFoam/laminar/mixerVessel2D",
    "download": "downloads/openfoam/multiphase-reactingmultiphaseeulerfoam-laminar-mixervessel2d.zip",
    "images": [
      {
        "url": "assets/openfoam/multiphase-reactingmultiphaseeulerfoam-laminar-mixervessel2d/result-01-mixervessel2d-model.png",
        "alt": "Centrifugal separation of air, water, oil and mercury result 1",
        "altZh": "空气、水、油和汞的离心分离结果图 1"
      },
      {
        "url": "assets/openfoam/multiphase-reactingmultiphaseeulerfoam-laminar-mixervessel2d/result-02-mixervessel2d-cellzone.png",
        "alt": "Centrifugal separation of air, water, oil and mercury result 2",
        "altZh": "空气、水、油和汞的离心分离结果图 2"
      },
      {
        "url": "assets/openfoam/multiphase-reactingmultiphaseeulerfoam-laminar-mixervessel2d/result-03-mixervessel2d-mesh.png",
        "alt": "Centrifugal separation of air, water, oil and mercury result 3",
        "altZh": "空气、水、油和汞的离心分离结果图 3"
      },
      {
        "url": "assets/openfoam/multiphase-reactingmultiphaseeulerfoam-laminar-mixervessel2d/result-04-multiphase-reactingmultiphaseeulerfoam-laminar-mixer.png",
        "alt": "Centrifugal separation of air, water, oil and mercury result 4",
        "altZh": "空气、水、油和汞的离心分离结果图 4"
      },
      {
        "url": "assets/openfoam/multiphase-reactingmultiphaseeulerfoam-laminar-mixervessel2d/result-05-multiphase-reactingmultiphaseeulerfoam-laminar-mixer.png",
        "alt": "Centrifugal separation of air, water, oil and mercury result 5",
        "altZh": "空气、水、油和汞的离心分离结果图 5"
      },
      {
        "url": "assets/openfoam/multiphase-reactingmultiphaseeulerfoam-laminar-mixervessel2d/result-06-multiphase-reactingmultiphaseeulerfoam-laminar-mixer.png",
        "alt": "Centrifugal separation of air, water, oil and mercury result 6",
        "altZh": "空气、水、油和汞的离心分离结果图 6"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "T.air",
        "T.mercury",
        "T.oil",
        "T.water",
        "Theta",
        "U.air",
        "U.mercury",
        "U.oil",
        "U.water",
        "alpha.air"
      ],
      "constants": [
        "MRFProperties",
        "g",
        "phaseProperties",
        "thermophysicalProperties.air",
        "thermophysicalProperties.mercury",
        "thermophysicalProperties.oil",
        "thermophysicalProperties.water",
        "turbulenceProperties.air",
        "turbulenceProperties.mercury",
        "turbulenceProperties.oil"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟圆柱搅拌器驱动的多相液体运动，关注旋转区域诱导的剪切、界面变形和不同流体的混合/分离过程。",
        "数值上，该案例归入多相流，使用 `reactingMultiphaseEulerFoam`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括`T.air`、`T.mercury`、`T.oil`、`T.water`、`Theta`、`U.air`、`U.mercury`、`U.oil`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `MRFProperties` 定义旋转参考系或搅拌区域；`g` 定义重力方向与大小；`phaseProperties` 定义多相体系和相间模型。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/multiphase/reactingMultiphaseEulerFoam/laminar/mixerVessel2D`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `reactingMultiphaseEulerFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "multiphase-interfoam-laminar-dambreak",
    "title": "Dam-break problem (Laminar)",
    "titleZh": "溃坝问题（层流）",
    "category": "Multiphase",
    "categoryZh": "多相流",
    "types": [
      "多相"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "interFoam",
    "localPath": "multiphase/interFoam/laminar/damBreak",
    "download": "downloads/openfoam/multiphase-interfoam-laminar-dambreak.zip",
    "images": [
      {
        "url": "assets/openfoam/multiphase-interfoam-laminar-dambreak/result-01-dambreak-mesh.png",
        "alt": "Dam-break problem (Laminar) result 1",
        "altZh": "溃坝问题（层流）结果图 1"
      },
      {
        "url": "assets/openfoam/multiphase-interfoam-laminar-dambreak/result-02-dambreak-mesh-xy.png",
        "alt": "Dam-break problem (Laminar) result 2",
        "altZh": "溃坝问题（层流）结果图 2"
      },
      {
        "url": "assets/openfoam/multiphase-interfoam-laminar-dambreak/result-03-multiphase-interfoam-laminar-dambreak-alpha-water-in.png",
        "alt": "Dam-break problem (Laminar) result 3",
        "altZh": "溃坝问题（层流）结果图 3"
      },
      {
        "url": "assets/openfoam/multiphase-interfoam-laminar-dambreak/result-04-multiphase-interfoam-laminar-dambreak-alpha-water-la.png",
        "alt": "Dam-break problem (Laminar) result 4",
        "altZh": "溃坝问题（层流）结果图 4"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [],
      "constants": [],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟重力作用下液柱突然坍塌后的溃坝流动，关注自由液面推进、波浪反射、空气卷吸以及多种液体之间的界面演化。",
        "数值上，该案例归入多相流，使用 `interFoam`，可理解为 VOF 两相流求解器。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要结果变量会在运行后的时间目录中生成，可重点查看速度、压力、温度、相分数或位移等与物理问题对应的场量。配置重点通常位于 `0`、`constant` 和 `system` 三类文件：分别给出初始/边界条件、物性/模型参数和数值控制。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/multiphase/interFoam/laminar/damBreak`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `interFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "multiphase-intermixingfoam-laminar-dambreak",
    "title": "Dam-break problem with two types of liquids",
    "titleZh": "两种液体的溃坝混合问题",
    "category": "Multiphase",
    "categoryZh": "多相流",
    "types": [
      "多相"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "interMixingFoam",
    "localPath": "multiphase/interMixingFoam/laminar/damBreak",
    "download": "downloads/openfoam/multiphase-intermixingfoam-laminar-dambreak.zip",
    "images": [
      {
        "url": "assets/openfoam/multiphase-intermixingfoam-laminar-dambreak/result-01-multiphase-intermixingfoam-laminar-dambreak-mesh.png",
        "alt": "Dam-break problem with two types of liquids result 1",
        "altZh": "两种液体的溃坝混合问题结果图 1"
      },
      {
        "url": "assets/openfoam/multiphase-intermixingfoam-laminar-dambreak/result-02-multiphase-intermixingfoam-laminar-dambreak-water-cy.png",
        "alt": "Dam-break problem with two types of liquids result 2",
        "altZh": "两种液体的溃坝混合问题结果图 2"
      },
      {
        "url": "assets/openfoam/multiphase-intermixingfoam-laminar-dambreak/result-03-multiphase-intermixingfoam-laminar-dambreak-other-cy.png",
        "alt": "Dam-break problem with two types of liquids result 3",
        "altZh": "两种液体的溃坝混合问题结果图 3"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "U",
        "alpha.air",
        "alpha.other",
        "alpha.water",
        "p_rgh"
      ],
      "constants": [
        "g",
        "transportProperties",
        "turbulenceProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟重力作用下液柱突然坍塌后的溃坝流动，关注自由液面推进、波浪反射、空气卷吸以及多种液体之间的界面演化。",
        "数值上，该案例归入多相流，使用 `interMixingFoam`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括速度场 `U`、相分数 `alpha.air`、相分数 `alpha.other`、相分数 `alpha.water`、压力变量 `p_rgh`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `g` 定义重力方向与大小；`transportProperties` 定义流体物性与输运系数；`turbulenceProperties` 定义湍流模型选择。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/multiphase/interMixingFoam/laminar/damBreak`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `interMixingFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "multiphase-compressiblemultiphaseinterfoam-laminar-dambreak4phase",
    "title": "Dam-break problem with water, oil, and mercury",
    "titleZh": "水、油和汞的溃坝问题",
    "category": "Multiphase",
    "categoryZh": "多相流",
    "types": [
      "多相",
      "可压缩"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "compressibleMultiphaseInterFoam",
    "localPath": "multiphase/compressibleMultiphaseInterFoam/laminar/damBreak4phase",
    "download": "downloads/openfoam/multiphase-compressiblemultiphaseinterfoam-laminar-dambreak4phase.zip",
    "images": [
      {
        "url": "assets/openfoam/multiphase-compressiblemultiphaseinterfoam-laminar-dambreak4phase/result-01-dambreak-mesh.png",
        "alt": "Dam-break problem with water, oil, and mercury result 1",
        "altZh": "水、油和汞的溃坝问题结果图 1"
      },
      {
        "url": "assets/openfoam/multiphase-compressiblemultiphaseinterfoam-laminar-dambreak4phase/result-02-dambreak-mesh-xy.png",
        "alt": "Dam-break problem with water, oil, and mercury result 2",
        "altZh": "水、油和汞的溃坝问题结果图 2"
      },
      {
        "url": "assets/openfoam/multiphase-compressiblemultiphaseinterfoam-laminar-dambreak4phase/result-03-multiphase-compressiblemultiphaseinterfoam-laminar-d.png",
        "alt": "Dam-break problem with water, oil, and mercury result 3",
        "altZh": "水、油和汞的溃坝问题结果图 3"
      },
      {
        "url": "assets/openfoam/multiphase-compressiblemultiphaseinterfoam-laminar-dambreak4phase/result-04-multiphase-compressiblemultiphaseinterfoam-laminar-d.png",
        "alt": "Dam-break problem with water, oil, and mercury result 4",
        "altZh": "水、油和汞的溃坝问题结果图 4"
      },
      {
        "url": "assets/openfoam/multiphase-compressiblemultiphaseinterfoam-laminar-dambreak4phase/result-05-multiphase-compressiblemultiphaseinterfoam-laminar-d.png",
        "alt": "Dam-break problem with water, oil, and mercury result 5",
        "altZh": "水、油和汞的溃坝问题结果图 5"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "T",
        "U",
        "alpha.air",
        "alpha.mercury",
        "alpha.oil",
        "alpha.water",
        "alphas",
        "p",
        "p_rgh"
      ],
      "constants": [
        "g",
        "thermophysicalProperties",
        "thermophysicalProperties.air",
        "thermophysicalProperties.mercury",
        "thermophysicalProperties.oil",
        "thermophysicalProperties.water",
        "turbulenceProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟重力作用下液柱突然坍塌后的溃坝流动，关注自由液面推进、波浪反射、空气卷吸以及多种液体之间的界面演化。",
        "数值上，该案例归入多相流，使用 `compressibleMultiphaseInterFoam`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括温度场 `T`、速度场 `U`、相分数 `alpha.air`、相分数 `alpha.mercury`、相分数 `alpha.oil`、相分数 `alpha.water`、相分数 `alphas`、压力变量 `p`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `g` 定义重力方向与大小；`thermophysicalProperties` 定义热物性与状态方程；`turbulenceProperties` 定义湍流模型选择。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/multiphase/compressibleMultiphaseInterFoam/laminar/damBreak4phase`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `compressibleMultiphaseInterFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "multiphase-multiphaseeulerfoam-dambreak4phase",
    "title": "Dam-break problem with water, oil, and mercury",
    "titleZh": "水、油和汞的溃坝问题",
    "category": "Multiphase",
    "categoryZh": "多相流",
    "types": [
      "多相"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "multiphaseEulerFoam",
    "localPath": "multiphase/multiphaseEulerFoam/damBreak4phase",
    "download": "downloads/openfoam/multiphase-multiphaseeulerfoam-dambreak4phase.zip",
    "images": [
      {
        "url": "assets/openfoam/multiphase-multiphaseeulerfoam-dambreak4phase/result-01-dambreak-mesh.png",
        "alt": "Dam-break problem with water, oil, and mercury result 1",
        "altZh": "水、油和汞的溃坝问题结果图 1"
      },
      {
        "url": "assets/openfoam/multiphase-multiphaseeulerfoam-dambreak4phase/result-02-dambreak-mesh-xy.png",
        "alt": "Dam-break problem with water, oil, and mercury result 2",
        "altZh": "水、油和汞的溃坝问题结果图 2"
      },
      {
        "url": "assets/openfoam/multiphase-multiphaseeulerfoam-dambreak4phase/result-03-multiphase-multiphaseeulerfoam-dambreak4phase-alphas.png",
        "alt": "Dam-break problem with water, oil, and mercury result 3",
        "altZh": "水、油和汞的溃坝问题结果图 3"
      },
      {
        "url": "assets/openfoam/multiphase-multiphaseeulerfoam-dambreak4phase/result-04-multiphase-multiphaseeulerfoam-dambreak4phase-alphas.png",
        "alt": "Dam-break problem with water, oil, and mercury result 4",
        "altZh": "水、油和汞的溃坝问题结果图 4"
      },
      {
        "url": "assets/openfoam/multiphase-multiphaseeulerfoam-dambreak4phase/result-05-multiphase-multiphaseeulerfoam-dambreak4phase-alphas.png",
        "alt": "Dam-break problem with water, oil, and mercury result 5",
        "altZh": "水、油和汞的溃坝问题结果图 5"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "U",
        "U.air",
        "U.mercury",
        "U.oil",
        "U.water",
        "alpha.air",
        "alpha.mercury",
        "alpha.oil",
        "alpha.water",
        "p_rgh"
      ],
      "constants": [
        "g",
        "motionProperties",
        "transportProperties",
        "turbulenceProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟重力作用下液柱突然坍塌后的溃坝流动，关注自由液面推进、波浪反射、空气卷吸以及多种液体之间的界面演化。",
        "数值上，该案例归入多相流，使用 `multiphaseEulerFoam`，可理解为 多相欧拉求解器。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括速度场 `U`、`U.air`、`U.mercury`、`U.oil`、`U.water`、相分数 `alpha.air`、相分数 `alpha.mercury`、相分数 `alpha.oil`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `g` 定义重力方向与大小；`transportProperties` 定义流体物性与输运系数；`turbulenceProperties` 定义湍流模型选择。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/multiphase/multiphaseEulerFoam/damBreak4phase`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `multiphaseEulerFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "multiphase-multiphaseinterfoam-laminar-dambreak4phase",
    "title": "Dam-break problem with water, oil, and mercury",
    "titleZh": "水、油和汞的溃坝问题",
    "category": "Multiphase",
    "categoryZh": "多相流",
    "types": [
      "多相"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "multiphaseInterFoam",
    "localPath": "multiphase/multiphaseInterFoam/laminar/damBreak4phase",
    "download": "downloads/openfoam/multiphase-multiphaseinterfoam-laminar-dambreak4phase.zip",
    "images": [
      {
        "url": "assets/openfoam/multiphase-multiphaseinterfoam-laminar-dambreak4phase/result-01-dambreak-mesh.png",
        "alt": "Dam-break problem with water, oil, and mercury result 1",
        "altZh": "水、油和汞的溃坝问题结果图 1"
      },
      {
        "url": "assets/openfoam/multiphase-multiphaseinterfoam-laminar-dambreak4phase/result-02-dambreak-mesh-xy.png",
        "alt": "Dam-break problem with water, oil, and mercury result 2",
        "altZh": "水、油和汞的溃坝问题结果图 2"
      },
      {
        "url": "assets/openfoam/multiphase-multiphaseinterfoam-laminar-dambreak4phase/result-03-multiphase-multiphaseinterfoam-laminar-dambreak4phas.png",
        "alt": "Dam-break problem with water, oil, and mercury result 3",
        "altZh": "水、油和汞的溃坝问题结果图 3"
      },
      {
        "url": "assets/openfoam/multiphase-multiphaseinterfoam-laminar-dambreak4phase/result-04-multiphase-multiphaseinterfoam-laminar-dambreak4phas.png",
        "alt": "Dam-break problem with water, oil, and mercury result 4",
        "altZh": "水、油和汞的溃坝问题结果图 4"
      },
      {
        "url": "assets/openfoam/multiphase-multiphaseinterfoam-laminar-dambreak4phase/result-05-multiphase-multiphaseinterfoam-laminar-dambreak4phas.png",
        "alt": "Dam-break problem with water, oil, and mercury result 5",
        "altZh": "水、油和汞的溃坝问题结果图 5"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "U",
        "alpha.air",
        "alpha.mercury",
        "alpha.oil",
        "alpha.water",
        "alphas",
        "p_rgh"
      ],
      "constants": [
        "g",
        "motionProperties",
        "transportProperties",
        "turbulenceProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟重力作用下液柱突然坍塌后的溃坝流动，关注自由液面推进、波浪反射、空气卷吸以及多种液体之间的界面演化。",
        "数值上，该案例归入多相流，使用 `multiphaseInterFoam`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括速度场 `U`、相分数 `alpha.air`、相分数 `alpha.mercury`、相分数 `alpha.oil`、相分数 `alpha.water`、相分数 `alphas`、压力变量 `p_rgh`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `g` 定义重力方向与大小；`transportProperties` 定义流体物性与输运系数；`turbulenceProperties` 定义湍流模型选择。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/multiphase/multiphaseInterFoam/laminar/damBreak4phase`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `multiphaseInterFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "multiphase-multiphaseeulerfoam-dambreak4phasefine",
    "title": "Dam-break problem with water, oil, and mercury (High resolution mesh)",
    "titleZh": "水、油和汞的溃坝问题（高分辨率网格）",
    "category": "Multiphase",
    "categoryZh": "多相流",
    "types": [
      "多相",
      "网格"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "multiphaseEulerFoam",
    "localPath": "multiphase/multiphaseEulerFoam/damBreak4phaseFine",
    "download": "downloads/openfoam/multiphase-multiphaseeulerfoam-dambreak4phasefine.zip",
    "images": [
      {
        "url": "assets/openfoam/multiphase-multiphaseeulerfoam-dambreak4phasefine/result-01-dambreak4phasefine-mesh.png",
        "alt": "Dam-break problem with water, oil, and mercury (High resolution mesh) result 1",
        "altZh": "水、油和汞的溃坝问题（高分辨率网格）结果图 1"
      },
      {
        "url": "assets/openfoam/multiphase-multiphaseeulerfoam-dambreak4phasefine/result-02-dambreak4phasefine-mesh-xy.png",
        "alt": "Dam-break problem with water, oil, and mercury (High resolution mesh) result 2",
        "altZh": "水、油和汞的溃坝问题（高分辨率网格）结果图 2"
      },
      {
        "url": "assets/openfoam/multiphase-multiphaseeulerfoam-dambreak4phasefine/result-03-multiphase-multiphaseeulerfoam-dambreak4phasefine-al.png",
        "alt": "Dam-break problem with water, oil, and mercury (High resolution mesh) result 3",
        "altZh": "水、油和汞的溃坝问题（高分辨率网格）结果图 3"
      },
      {
        "url": "assets/openfoam/multiphase-multiphaseeulerfoam-dambreak4phasefine/result-04-multiphase-multiphaseeulerfoam-dambreak4phasefine-al.png",
        "alt": "Dam-break problem with water, oil, and mercury (High resolution mesh) result 4",
        "altZh": "水、油和汞的溃坝问题（高分辨率网格）结果图 4"
      },
      {
        "url": "assets/openfoam/multiphase-multiphaseeulerfoam-dambreak4phasefine/result-05-multiphase-multiphaseeulerfoam-dambreak4phasefine-al.png",
        "alt": "Dam-break problem with water, oil, and mercury (High resolution mesh) result 5",
        "altZh": "水、油和汞的溃坝问题（高分辨率网格）结果图 5"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "U",
        "U.air",
        "U.mercury",
        "U.oil",
        "U.water",
        "alpha.air",
        "alpha.mercury",
        "alpha.oil",
        "alpha.water",
        "p_rgh"
      ],
      "constants": [
        "g",
        "motionProperties",
        "transportProperties",
        "turbulenceProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例演示 `multiphaseEulerFoam` 或相关网格工具对水、油和汞的溃坝问题（高分辨率网格）的网格生成过程，重点不是求解物理场，而是观察几何捕捉、边界命名、局部加密和网格质量如何服务后续 CAE 计算。",
        "数值上，该案例归入多相流，使用 `multiphaseEulerFoam`，可理解为 多相欧拉求解器。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括速度场 `U`、`U.air`、`U.mercury`、`U.oil`、`U.water`、相分数 `alpha.air`、相分数 `alpha.mercury`、相分数 `alpha.oil`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `g` 定义重力方向与大小；`transportProperties` 定义流体物性与输运系数；`turbulenceProperties` 定义湍流模型选择。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/multiphase/multiphaseEulerFoam/damBreak4phaseFine`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `multiphaseEulerFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "multiphase-multiphaseinterfoam-laminar-dambreak4phasefine",
    "title": "Dam-break problem with water, oil, and mercury (High resolution mesh)",
    "titleZh": "水、油和汞的溃坝问题（高分辨率网格）",
    "category": "Multiphase",
    "categoryZh": "多相流",
    "types": [
      "多相",
      "网格"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "multiphaseInterFoam",
    "localPath": "multiphase/multiphaseInterFoam/laminar/damBreak4phaseFine",
    "download": "downloads/openfoam/multiphase-multiphaseinterfoam-laminar-dambreak4phasefine.zip",
    "images": [
      {
        "url": "assets/openfoam/multiphase-multiphaseinterfoam-laminar-dambreak4phasefine/result-01-dambreak4phasefine-mesh.png",
        "alt": "Dam-break problem with water, oil, and mercury (High resolution mesh) result 1",
        "altZh": "水、油和汞的溃坝问题（高分辨率网格）结果图 1"
      },
      {
        "url": "assets/openfoam/multiphase-multiphaseinterfoam-laminar-dambreak4phasefine/result-02-dambreak4phasefine-mesh-xy.png",
        "alt": "Dam-break problem with water, oil, and mercury (High resolution mesh) result 2",
        "altZh": "水、油和汞的溃坝问题（高分辨率网格）结果图 2"
      },
      {
        "url": "assets/openfoam/multiphase-multiphaseinterfoam-laminar-dambreak4phasefine/result-03-multiphase-multiphaseinterfoam-laminar-dambreak4phas.png",
        "alt": "Dam-break problem with water, oil, and mercury (High resolution mesh) result 3",
        "altZh": "水、油和汞的溃坝问题（高分辨率网格）结果图 3"
      },
      {
        "url": "assets/openfoam/multiphase-multiphaseinterfoam-laminar-dambreak4phasefine/result-04-multiphase-multiphaseinterfoam-laminar-dambreak4phas.png",
        "alt": "Dam-break problem with water, oil, and mercury (High resolution mesh) result 4",
        "altZh": "水、油和汞的溃坝问题（高分辨率网格）结果图 4"
      },
      {
        "url": "assets/openfoam/multiphase-multiphaseinterfoam-laminar-dambreak4phasefine/result-05-multiphase-multiphaseinterfoam-laminar-dambreak4phas.png",
        "alt": "Dam-break problem with water, oil, and mercury (High resolution mesh) result 5",
        "altZh": "水、油和汞的溃坝问题（高分辨率网格）结果图 5"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "U",
        "alpha.air",
        "alpha.mercury",
        "alpha.oil",
        "alpha.water",
        "alphas",
        "p_rgh"
      ],
      "constants": [
        "g",
        "motionProperties",
        "transportProperties",
        "turbulenceProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例演示 `multiphaseInterFoam` 或相关网格工具对水、油和汞的溃坝问题（高分辨率网格）的网格生成过程，重点不是求解物理场，而是观察几何捕捉、边界命名、局部加密和网格质量如何服务后续 CAE 计算。",
        "数值上，该案例归入多相流，使用 `multiphaseInterFoam`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括速度场 `U`、相分数 `alpha.air`、相分数 `alpha.mercury`、相分数 `alpha.oil`、相分数 `alpha.water`、相分数 `alphas`、压力变量 `p_rgh`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `g` 定义重力方向与大小；`transportProperties` 定义流体物性与输运系数；`turbulenceProperties` 定义湍流模型选择。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/multiphase/multiphaseInterFoam/laminar/damBreak4phaseFine`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `multiphaseInterFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "multiphase-compressibleinterfoam-laminar-depthcharge2d",
    "title": "Expansion of an air bubble in water (2D)",
    "titleZh": "水中气泡膨胀（二维）",
    "category": "Multiphase",
    "categoryZh": "多相流",
    "types": [
      "多相",
      "可压缩"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "compressibleInterFoam",
    "localPath": "multiphase/compressibleInterFoam/laminar/depthCharge2D",
    "download": "downloads/openfoam/multiphase-compressibleinterfoam-laminar-depthcharge2d.zip",
    "images": [
      {
        "url": "assets/openfoam/multiphase-compressibleinterfoam-laminar-depthcharge2d/result-01-multiphase-compressibleinterfoam-laminar-depthcharge.png",
        "alt": "Expansion of an air bubble in water (2D) result 1",
        "altZh": "水中气泡膨胀（二维）结果图 1"
      },
      {
        "url": "assets/openfoam/multiphase-compressibleinterfoam-laminar-depthcharge2d/result-02-multiphase-compressibleinterfoam-laminar-depthcharge.png",
        "alt": "Expansion of an air bubble in water (2D) result 2",
        "altZh": "水中气泡膨胀（二维）结果图 2"
      },
      {
        "url": "assets/openfoam/multiphase-compressibleinterfoam-laminar-depthcharge2d/result-03-multiphase-compressibleinterfoam-laminar-depthcharge.png",
        "alt": "Expansion of an air bubble in water (2D) result 3",
        "altZh": "水中气泡膨胀（二维）结果图 3"
      },
      {
        "url": "assets/openfoam/multiphase-compressibleinterfoam-laminar-depthcharge2d/result-04-multiphase-compressibleinterfoam-laminar-depthcharge.png",
        "alt": "Expansion of an air bubble in water (2D) result 4",
        "altZh": "水中气泡膨胀（二维）结果图 4"
      },
      {
        "url": "assets/openfoam/multiphase-compressibleinterfoam-laminar-depthcharge2d/result-05-multiphase-compressibleinterfoam-laminar-depthcharge.png",
        "alt": "Expansion of an air bubble in water (2D) result 5",
        "altZh": "水中气泡膨胀（二维）结果图 5"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "T",
        "U",
        "alpha.water",
        "p",
        "p_rgh"
      ],
      "constants": [
        "g",
        "thermophysicalProperties",
        "thermophysicalProperties.air",
        "thermophysicalProperties.water",
        "turbulenceProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟水中气泡在压力变化下的膨胀过程，关注可压缩效应、气液界面运动和压力波在水中的传播。",
        "数值上，该案例归入多相流，使用 `compressibleInterFoam`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括温度场 `T`、速度场 `U`、相分数 `alpha.water`、压力变量 `p`、压力变量 `p_rgh`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `g` 定义重力方向与大小；`thermophysicalProperties` 定义热物性与状态方程；`turbulenceProperties` 定义湍流模型选择。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/multiphase/compressibleInterFoam/laminar/depthCharge2D`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `compressibleInterFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "multiphase-compressibleinterfoam-laminar-depthcharge3d",
    "title": "Expansion of an air bubble in water (3D)",
    "titleZh": "水中气泡膨胀（三维）",
    "category": "Multiphase",
    "categoryZh": "多相流",
    "types": [
      "多相",
      "可压缩"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "compressibleInterFoam",
    "localPath": "multiphase/compressibleInterFoam/laminar/depthCharge3D",
    "download": "downloads/openfoam/multiphase-compressibleinterfoam-laminar-depthcharge3d.zip",
    "images": [
      {
        "url": "assets/openfoam/multiphase-compressibleinterfoam-laminar-depthcharge3d/result-01-multiphase-compressibleinterfoam-laminar-depthcharge.png",
        "alt": "Expansion of an air bubble in water (3D) result 1",
        "altZh": "水中气泡膨胀（三维）结果图 1"
      },
      {
        "url": "assets/openfoam/multiphase-compressibleinterfoam-laminar-depthcharge3d/result-02-multiphase-compressibleinterfoam-laminar-depthcharge.png",
        "alt": "Expansion of an air bubble in water (3D) result 2",
        "altZh": "水中气泡膨胀（三维）结果图 2"
      },
      {
        "url": "assets/openfoam/multiphase-compressibleinterfoam-laminar-depthcharge3d/result-03-multiphase-compressibleinterfoam-laminar-depthcharge.png",
        "alt": "Expansion of an air bubble in water (3D) result 3",
        "altZh": "水中气泡膨胀（三维）结果图 3"
      },
      {
        "url": "assets/openfoam/multiphase-compressibleinterfoam-laminar-depthcharge3d/result-04-multiphase-compressibleinterfoam-laminar-depthcharge.png",
        "alt": "Expansion of an air bubble in water (3D) result 4",
        "altZh": "水中气泡膨胀（三维）结果图 4"
      },
      {
        "url": "assets/openfoam/multiphase-compressibleinterfoam-laminar-depthcharge3d/result-05-multiphase-compressibleinterfoam-laminar-depthcharge.png",
        "alt": "Expansion of an air bubble in water (3D) result 5",
        "altZh": "水中气泡膨胀（三维）结果图 5"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "T",
        "U",
        "alpha.water",
        "p",
        "p_rgh"
      ],
      "constants": [
        "g",
        "thermophysicalProperties",
        "thermophysicalProperties.air",
        "thermophysicalProperties.water",
        "turbulenceProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟水中气泡在压力变化下的膨胀过程，关注可压缩效应、气液界面运动和压力波在水中的传播。",
        "数值上，该案例归入多相流，使用 `compressibleInterFoam`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括温度场 `T`、速度场 `U`、相分数 `alpha.water`、压力变量 `p`、压力变量 `p_rgh`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `g` 定义重力方向与大小；`thermophysicalProperties` 定义热物性与状态方程；`turbulenceProperties` 定义湍流模型选择。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/multiphase/compressibleInterFoam/laminar/depthCharge3D`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `compressibleInterFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "multiphase-reactingtwophaseeulerfoam-laminar-fluidisedbed",
    "title": "Fluidized bed (Laminar)",
    "titleZh": "流化床（层流）",
    "category": "Multiphase",
    "categoryZh": "多相流",
    "types": [
      "多相",
      "燃烧"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "reactingTwoPhaseEulerFoam",
    "localPath": "multiphase/reactingTwoPhaseEulerFoam/laminar/fluidisedBed",
    "download": "downloads/openfoam/multiphase-reactingtwophaseeulerfoam-laminar-fluidisedbed.zip",
    "images": [
      {
        "url": "assets/openfoam/multiphase-reactingtwophaseeulerfoam-laminar-fluidisedbed/result-01-multiphase-twophaseeulerfoam-laminar-fluidisedbed-me.png",
        "alt": "Fluidized bed (Laminar) result 1",
        "altZh": "流化床（层流）结果图 1"
      },
      {
        "url": "assets/openfoam/multiphase-reactingtwophaseeulerfoam-laminar-fluidisedbed/result-02-multiphase-twophaseeulerfoam-laminar-fluidisedbed-me.png",
        "alt": "Fluidized bed (Laminar) result 2",
        "altZh": "流化床（层流）结果图 2"
      },
      {
        "url": "assets/openfoam/multiphase-reactingtwophaseeulerfoam-laminar-fluidisedbed/result-03-multiphase-reactingtwophaseeulerfoam-laminar-fluidis.png",
        "alt": "Fluidized bed (Laminar) result 3",
        "altZh": "流化床（层流）结果图 3"
      },
      {
        "url": "assets/openfoam/multiphase-reactingtwophaseeulerfoam-laminar-fluidisedbed/result-04-multiphase-reactingtwophaseeulerfoam-laminar-fluidis.png",
        "alt": "Fluidized bed (Laminar) result 4",
        "altZh": "流化床（层流）结果图 4"
      },
      {
        "url": "assets/openfoam/multiphase-reactingtwophaseeulerfoam-laminar-fluidisedbed/result-05-multiphase-reactingtwophaseeulerfoam-laminar-fluidis.png",
        "alt": "Fluidized bed (Laminar) result 5",
        "altZh": "流化床（层流）结果图 5"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "T.air",
        "T.particles",
        "Theta.particles",
        "U.air",
        "U.particles",
        "alpha.particles",
        "alphat.particles",
        "epsilon.air",
        "k.air",
        "nut.air"
      ],
      "constants": [
        "g",
        "phaseProperties",
        "thermophysicalProperties.air",
        "thermophysicalProperties.particles",
        "turbulenceProperties.air",
        "turbulenceProperties.particles"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟流化床中气固/液固两相运动，关注颗粒相体积分数、床层膨胀、相间阻力和流化结构随时间的演化。",
        "数值上，该案例归入多相流，使用 `reactingTwoPhaseEulerFoam`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括`T.air`、`T.particles`、`Theta.particles`、`U.air`、`U.particles`、相分数 `alpha.particles`、相分数 `alphat.particles`、`epsilon.air`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `g` 定义重力方向与大小；`phaseProperties` 定义多相体系和相间模型。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/multiphase/reactingTwoPhaseEulerFoam/laminar/fluidisedBed`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `reactingTwoPhaseEulerFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "multiphase-twophaseeulerfoam-laminar-fluidisedbed",
    "title": "Fluidized bed (Laminar)",
    "titleZh": "流化床（层流）",
    "category": "Multiphase",
    "categoryZh": "多相流",
    "types": [
      "多相"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "twoPhaseEulerFoam",
    "localPath": "multiphase/twoPhaseEulerFoam/laminar/fluidisedBed",
    "download": "downloads/openfoam/multiphase-twophaseeulerfoam-laminar-fluidisedbed.zip",
    "images": [
      {
        "url": "assets/openfoam/multiphase-twophaseeulerfoam-laminar-fluidisedbed/result-01-multiphase-twophaseeulerfoam-laminar-fluidisedbed-me.png",
        "alt": "Fluidized bed (Laminar) result 1",
        "altZh": "流化床（层流）结果图 1"
      },
      {
        "url": "assets/openfoam/multiphase-twophaseeulerfoam-laminar-fluidisedbed/result-02-multiphase-twophaseeulerfoam-laminar-fluidisedbed-me.png",
        "alt": "Fluidized bed (Laminar) result 2",
        "altZh": "流化床（层流）结果图 2"
      },
      {
        "url": "assets/openfoam/multiphase-twophaseeulerfoam-laminar-fluidisedbed/result-03-multiphase-twophaseeulerfoam-laminar-fluidisedbed-al.png",
        "alt": "Fluidized bed (Laminar) result 3",
        "altZh": "流化床（层流）结果图 3"
      },
      {
        "url": "assets/openfoam/multiphase-twophaseeulerfoam-laminar-fluidisedbed/result-04-multiphase-twophaseeulerfoam-laminar-fluidisedbed-al.png",
        "alt": "Fluidized bed (Laminar) result 4",
        "altZh": "流化床（层流）结果图 4"
      },
      {
        "url": "assets/openfoam/multiphase-twophaseeulerfoam-laminar-fluidisedbed/result-05-multiphase-twophaseeulerfoam-laminar-fluidisedbed-al.png",
        "alt": "Fluidized bed (Laminar) result 5",
        "altZh": "流化床（层流）结果图 5"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "T.air",
        "T.particles",
        "Theta.particles",
        "U.air",
        "U.particles",
        "alpha.particles",
        "alphat.particles",
        "epsilon.air",
        "k.air",
        "nut.air"
      ],
      "constants": [
        "g",
        "phaseProperties",
        "thermophysicalProperties.air",
        "thermophysicalProperties.particles",
        "turbulenceProperties.air",
        "turbulenceProperties.particles"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟流化床中气固/液固两相运动，关注颗粒相体积分数、床层膨胀、相间阻力和流化结构随时间的演化。",
        "数值上，该案例归入多相流，使用 `twoPhaseEulerFoam`，可理解为 欧拉-欧拉两相流求解器。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括`T.air`、`T.particles`、`Theta.particles`、`U.air`、`U.particles`、相分数 `alpha.particles`、相分数 `alphat.particles`、`epsilon.air`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `g` 定义重力方向与大小；`phaseProperties` 定义多相体系和相间模型。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/multiphase/twoPhaseEulerFoam/laminar/fluidisedBed`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `twoPhaseEulerFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "multiphase-reactingtwophaseeulerfoam-ras-fluidisedbed",
    "title": "Fluidized bed (RANS)",
    "titleZh": "流化床（RANS）",
    "category": "Multiphase",
    "categoryZh": "多相流",
    "types": [
      "多相",
      "湍流",
      "燃烧"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "reactingTwoPhaseEulerFoam",
    "localPath": "multiphase/reactingTwoPhaseEulerFoam/RAS/fluidisedBed",
    "download": "downloads/openfoam/multiphase-reactingtwophaseeulerfoam-ras-fluidisedbed.zip",
    "images": [
      {
        "url": "assets/openfoam/multiphase-reactingtwophaseeulerfoam-ras-fluidisedbed/result-01-multiphase-twophaseeulerfoam-laminar-fluidisedbed-me.png",
        "alt": "Fluidized bed (RANS) result 1",
        "altZh": "流化床（RANS）结果图 1"
      },
      {
        "url": "assets/openfoam/multiphase-reactingtwophaseeulerfoam-ras-fluidisedbed/result-02-multiphase-twophaseeulerfoam-laminar-fluidisedbed-me.png",
        "alt": "Fluidized bed (RANS) result 2",
        "altZh": "流化床（RANS）结果图 2"
      },
      {
        "url": "assets/openfoam/multiphase-reactingtwophaseeulerfoam-ras-fluidisedbed/result-03-multiphase-reactingtwophaseeulerfoam-ras-fluidisedbe.png",
        "alt": "Fluidized bed (RANS) result 3",
        "altZh": "流化床（RANS）结果图 3"
      },
      {
        "url": "assets/openfoam/multiphase-reactingtwophaseeulerfoam-ras-fluidisedbed/result-04-multiphase-reactingtwophaseeulerfoam-ras-fluidisedbe.png",
        "alt": "Fluidized bed (RANS) result 4",
        "altZh": "流化床（RANS）结果图 4"
      },
      {
        "url": "assets/openfoam/multiphase-reactingtwophaseeulerfoam-ras-fluidisedbed/result-05-multiphase-reactingtwophaseeulerfoam-ras-fluidisedbe.png",
        "alt": "Fluidized bed (RANS) result 5",
        "altZh": "流化床（RANS）结果图 5"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "T.air",
        "T.particles",
        "Theta.particles",
        "U.air",
        "U.particles",
        "alpha.air",
        "alpha.particles",
        "alphat.air",
        "alphat.particles",
        "epsilon.air"
      ],
      "constants": [
        "g",
        "phaseProperties",
        "thermophysicalProperties.air",
        "thermophysicalProperties.particles",
        "turbulenceProperties.air",
        "turbulenceProperties.particles"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟流化床中气固/液固两相运动，关注颗粒相体积分数、床层膨胀、相间阻力和流化结构随时间的演化。",
        "数值上，该案例归入多相流，使用 `reactingTwoPhaseEulerFoam`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括`T.air`、`T.particles`、`Theta.particles`、`U.air`、`U.particles`、相分数 `alpha.air`、相分数 `alpha.particles`、相分数 `alphat.air`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `g` 定义重力方向与大小；`phaseProperties` 定义多相体系和相间模型。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/multiphase/reactingTwoPhaseEulerFoam/RAS/fluidisedBed`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `reactingTwoPhaseEulerFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "multiphase-twophaseeulerfoam-ras-fluidisedbed",
    "title": "Fluidized bed (RANS)",
    "titleZh": "流化床（RANS）",
    "category": "Multiphase",
    "categoryZh": "多相流",
    "types": [
      "多相",
      "湍流"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "twoPhaseEulerFoam",
    "localPath": "multiphase/twoPhaseEulerFoam/RAS/fluidisedBed",
    "download": "downloads/openfoam/multiphase-twophaseeulerfoam-ras-fluidisedbed.zip",
    "images": [
      {
        "url": "assets/openfoam/multiphase-twophaseeulerfoam-ras-fluidisedbed/result-01-multiphase-twophaseeulerfoam-laminar-fluidisedbed-me.png",
        "alt": "Fluidized bed (RANS) result 1",
        "altZh": "流化床（RANS）结果图 1"
      },
      {
        "url": "assets/openfoam/multiphase-twophaseeulerfoam-ras-fluidisedbed/result-02-multiphase-twophaseeulerfoam-laminar-fluidisedbed-me.png",
        "alt": "Fluidized bed (RANS) result 2",
        "altZh": "流化床（RANS）结果图 2"
      },
      {
        "url": "assets/openfoam/multiphase-twophaseeulerfoam-ras-fluidisedbed/result-03-multiphase-twophaseeulerfoam-ras-fluidisedbed-alpha-.png",
        "alt": "Fluidized bed (RANS) result 3",
        "altZh": "流化床（RANS）结果图 3"
      },
      {
        "url": "assets/openfoam/multiphase-twophaseeulerfoam-ras-fluidisedbed/result-04-multiphase-twophaseeulerfoam-ras-fluidisedbed-alpha-.png",
        "alt": "Fluidized bed (RANS) result 4",
        "altZh": "流化床（RANS）结果图 4"
      },
      {
        "url": "assets/openfoam/multiphase-twophaseeulerfoam-ras-fluidisedbed/result-05-multiphase-twophaseeulerfoam-ras-fluidisedbed-alpha-.png",
        "alt": "Fluidized bed (RANS) result 5",
        "altZh": "流化床（RANS）结果图 5"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "T.air",
        "T.particles",
        "Theta.particles",
        "U.air",
        "U.particles",
        "alpha.air",
        "alpha.particles",
        "alphat.air",
        "alphat.particles",
        "epsilon.air"
      ],
      "constants": [
        "g",
        "phaseProperties",
        "thermophysicalProperties.air",
        "thermophysicalProperties.particles",
        "turbulenceProperties.air",
        "turbulenceProperties.particles"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟流化床中气固/液固两相运动，关注颗粒相体积分数、床层膨胀、相间阻力和流化结构随时间的演化。",
        "数值上，该案例归入多相流，使用 `twoPhaseEulerFoam`，可理解为 欧拉-欧拉两相流求解器。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括`T.air`、`T.particles`、`Theta.particles`、`U.air`、`U.particles`、相分数 `alpha.air`、相分数 `alpha.particles`、相分数 `alphat.air`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `g` 定义重力方向与大小；`phaseProperties` 定义多相体系和相间模型。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/multiphase/twoPhaseEulerFoam/RAS/fluidisedBed`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `twoPhaseEulerFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "multiphase-multiphaseinterfoam-laminar-mixervessel2d",
    "title": "Mixing air, water, oil and mercury in a cylindrical mixer",
    "titleZh": "圆柱搅拌器中空气、水、油和汞混合",
    "category": "Multiphase",
    "categoryZh": "多相流",
    "types": [
      "多相"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "multiphaseInterFoam",
    "localPath": "multiphase/multiphaseInterFoam/laminar/mixerVessel2D",
    "download": "downloads/openfoam/multiphase-multiphaseinterfoam-laminar-mixervessel2d.zip",
    "images": [
      {
        "url": "assets/openfoam/multiphase-multiphaseinterfoam-laminar-mixervessel2d/result-01-mixervessel2d-model.png",
        "alt": "Mixing air, water, oil and mercury in a cylindrical mixer result 1",
        "altZh": "圆柱搅拌器中空气、水、油和汞混合结果图 1"
      },
      {
        "url": "assets/openfoam/multiphase-multiphaseinterfoam-laminar-mixervessel2d/result-02-mixervessel2d-cellzone.png",
        "alt": "Mixing air, water, oil and mercury in a cylindrical mixer result 2",
        "altZh": "圆柱搅拌器中空气、水、油和汞混合结果图 2"
      },
      {
        "url": "assets/openfoam/multiphase-multiphaseinterfoam-laminar-mixervessel2d/result-03-mixervessel2d-mesh.png",
        "alt": "Mixing air, water, oil and mercury in a cylindrical mixer result 3",
        "altZh": "圆柱搅拌器中空气、水、油和汞混合结果图 3"
      },
      {
        "url": "assets/openfoam/multiphase-multiphaseinterfoam-laminar-mixervessel2d/result-04-multiphase-multiphaseinterfoam-laminar-mixervessel2d.png",
        "alt": "Mixing air, water, oil and mercury in a cylindrical mixer result 4",
        "altZh": "圆柱搅拌器中空气、水、油和汞混合结果图 4"
      },
      {
        "url": "assets/openfoam/multiphase-multiphaseinterfoam-laminar-mixervessel2d/result-05-multiphase-multiphaseinterfoam-laminar-mixervessel2d.png",
        "alt": "Mixing air, water, oil and mercury in a cylindrical mixer result 5",
        "altZh": "圆柱搅拌器中空气、水、油和汞混合结果图 5"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "T",
        "U",
        "alpha.air",
        "alpha.mercury",
        "alpha.oil",
        "alpha.water",
        "p_rgh"
      ],
      "constants": [
        "MRFProperties",
        "g",
        "transportProperties",
        "turbulenceProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟圆柱搅拌器驱动的多相液体运动，关注旋转区域诱导的剪切、界面变形和不同流体的混合/分离过程。",
        "数值上，该案例归入多相流，使用 `multiphaseInterFoam`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括温度场 `T`、速度场 `U`、相分数 `alpha.air`、相分数 `alpha.mercury`、相分数 `alpha.oil`、相分数 `alpha.water`、压力变量 `p_rgh`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `MRFProperties` 定义旋转参考系或搅拌区域；`g` 定义重力方向与大小；`transportProperties` 定义流体物性与输运系数；`turbulenceProperties` 定义湍流模型选择。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/multiphase/multiphaseInterFoam/laminar/mixerVessel2D`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `multiphaseInterFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "multiphase-twoliquidmixingfoam-lockexchange",
    "title": "Mixing of two types of liquids",
    "titleZh": "两种液体混合",
    "category": "Multiphase",
    "categoryZh": "多相流",
    "types": [
      "多相"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "twoLiquidMixingFoam",
    "localPath": "multiphase/twoLiquidMixingFoam/lockExchange",
    "download": "downloads/openfoam/multiphase-twoliquidmixingfoam-lockexchange.zip",
    "images": [
      {
        "url": "assets/openfoam/multiphase-twoliquidmixingfoam-lockexchange/result-01-multiphase-twoliquidmixingfoam-lockexchange-mesh.png",
        "alt": "Mixing of two types of liquids result 1",
        "altZh": "两种液体混合结果图 1"
      },
      {
        "url": "assets/openfoam/multiphase-twoliquidmixingfoam-lockexchange/result-02-multiphase-twoliquidmixingfoam-lockexchange-alpha-sl.png",
        "alt": "Mixing of two types of liquids result 2",
        "altZh": "两种液体混合结果图 2"
      },
      {
        "url": "assets/openfoam/multiphase-twoliquidmixingfoam-lockexchange/result-03-multiphase-twoliquidmixingfoam-lockexchange-alpha-sl.png",
        "alt": "Mixing of two types of liquids result 3",
        "altZh": "两种液体混合结果图 3"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "U",
        "alpha.sludge",
        "p_rgh"
      ],
      "constants": [
        "g",
        "transportProperties",
        "turbulenceProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟两种密度或组分不同液体之间的锁交换流动，关注重力流前锋、界面卷吸和混合层发展。",
        "数值上，该案例归入多相流，使用 `twoLiquidMixingFoam`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括速度场 `U`、相分数 `alpha.sludge`、压力变量 `p_rgh`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `g` 定义重力方向与大小；`transportProperties` 定义流体物性与输运系数；`turbulenceProperties` 定义湍流模型选择。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/multiphase/twoLiquidMixingFoam/lockExchange`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `twoLiquidMixingFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "multiphase-reactingtwophaseeulerfoam-ras-bubblecolumnevaporatingreacting",
    "title": "Reforming of carbon monoxide mixture gas by water-gas shift reaction",
    "titleZh": "通过水煤气变换反应重整一氧化碳混合气",
    "category": "Multiphase",
    "categoryZh": "多相流",
    "types": [
      "多相",
      "湍流",
      "燃烧"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "reactingTwoPhaseEulerFoam",
    "localPath": "multiphase/reactingTwoPhaseEulerFoam/RAS/bubbleColumnEvaporatingReacting",
    "download": "downloads/openfoam/multiphase-reactingtwophaseeulerfoam-ras-bubblecolumnevaporatingreacting.zip",
    "images": [
      {
        "url": "assets/openfoam/multiphase-reactingtwophaseeulerfoam-ras-bubblecolumnevaporatingreacting/result-01-multiphase-multiphaseeulerfoam-bubblecolumn-mesh.png",
        "alt": "Reforming of carbon monoxide mixture gas by water-gas shift reaction result 1",
        "altZh": "通过水煤气变换反应重整一氧化碳混合气结果图 1"
      },
      {
        "url": "assets/openfoam/multiphase-reactingtwophaseeulerfoam-ras-bubblecolumnevaporatingreacting/result-02-multiphase-reactingtwophaseeulerfoam-ras-bubblecolum.png",
        "alt": "Reforming of carbon monoxide mixture gas by water-gas shift reaction result 2",
        "altZh": "通过水煤气变换反应重整一氧化碳混合气结果图 2"
      },
      {
        "url": "assets/openfoam/multiphase-reactingtwophaseeulerfoam-ras-bubblecolumnevaporatingreacting/result-03-multiphase-reactingtwophaseeulerfoam-ras-bubblecolum.png",
        "alt": "Reforming of carbon monoxide mixture gas by water-gas shift reaction result 3",
        "altZh": "通过水煤气变换反应重整一氧化碳混合气结果图 3"
      },
      {
        "url": "assets/openfoam/multiphase-reactingtwophaseeulerfoam-ras-bubblecolumnevaporatingreacting/result-04-multiphase-reactingtwophaseeulerfoam-ras-bubblecolum.png",
        "alt": "Reforming of carbon monoxide mixture gas by water-gas shift reaction result 4",
        "altZh": "通过水煤气变换反应重整一氧化碳混合气结果图 4"
      },
      {
        "url": "assets/openfoam/multiphase-reactingtwophaseeulerfoam-ras-bubblecolumnevaporatingreacting/result-05-multiphase-reactingtwophaseeulerfoam-ras-bubblecolum.png",
        "alt": "Reforming of carbon monoxide mixture gas by water-gas shift reaction result 5",
        "altZh": "通过水煤气变换反应重整一氧化碳混合气结果图 5"
      },
      {
        "url": "assets/openfoam/multiphase-reactingtwophaseeulerfoam-ras-bubblecolumnevaporatingreacting/result-06-multiphase-reactingtwophaseeulerfoam-ras-bubblecolum.png",
        "alt": "Reforming of carbon monoxide mixture gas by water-gas shift reaction result 6",
        "altZh": "通过水煤气变换反应重整一氧化碳混合气结果图 6"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "AIR.gas",
        "AIR.liquid",
        "CO.gas",
        "H2O.gas",
        "H2O.liquid",
        "T.gas",
        "T.liquid",
        "U.gas",
        "U.liquid",
        "Ydefault.gas"
      ],
      "constants": [
        "chemistryProperties.gas",
        "combustionProperties.gas",
        "g",
        "phaseProperties",
        "reactions.gas",
        "thermo.gas",
        "thermophysicalProperties.gas",
        "thermophysicalProperties.liquid",
        "turbulenceProperties.gas",
        "turbulenceProperties.liquid"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟气泡柱中的水煤气变换反应，关注 CO 与水蒸气反应、气液传质、组分浓度和反应热耦合。",
        "数值上，该案例归入多相流，使用 `reactingTwoPhaseEulerFoam`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括`AIR.gas`、`AIR.liquid`、`CO.gas`、`H2O.gas`、`H2O.liquid`、`T.gas`、`T.liquid`、`U.gas`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `g` 定义重力方向与大小；`phaseProperties` 定义多相体系和相间模型。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/multiphase/reactingTwoPhaseEulerFoam/RAS/bubbleColumnEvaporatingReacting`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `reactingTwoPhaseEulerFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "multiphase-potentialfreesurfacedymfoam-oscillatingbox",
    "title": "Waves generated by the oscillation of an object floating on the liquid surface",
    "titleZh": "浮体振荡产生的自由液面波",
    "category": "Multiphase",
    "categoryZh": "多相流",
    "types": [
      "多相"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "potentialFreeSurfaceDyMFoam",
    "localPath": "multiphase/potentialFreeSurfaceDyMFoam/oscillatingBox",
    "download": "downloads/openfoam/multiphase-potentialfreesurfacedymfoam-oscillatingbox.zip",
    "images": [
      {
        "url": "assets/openfoam/multiphase-potentialfreesurfacedymfoam-oscillatingbox/result-01-multiphase-potentialfreesurfacefoam-oscillatingbox-f.png",
        "alt": "Waves generated by the oscillation of an object floating on the liquid surface result 1",
        "altZh": "浮体振荡产生的自由液面波结果图 1"
      },
      {
        "url": "assets/openfoam/multiphase-potentialfreesurfacedymfoam-oscillatingbox/result-02-multiphase-potentialfreesurfacefoam-oscillatingbox-m.png",
        "alt": "Waves generated by the oscillation of an object floating on the liquid surface result 2",
        "altZh": "浮体振荡产生的自由液面波结果图 2"
      },
      {
        "url": "assets/openfoam/multiphase-potentialfreesurfacedymfoam-oscillatingbox/result-03-multiphase-potentialfreesurfacefoam-oscillatingbox-m.png",
        "alt": "Waves generated by the oscillation of an object floating on the liquid surface result 3",
        "altZh": "浮体振荡产生的自由液面波结果图 3"
      },
      {
        "url": "assets/openfoam/multiphase-potentialfreesurfacedymfoam-oscillatingbox/result-04-multiphase-potentialfreesurfacedymfoam-oscillatingbo.png",
        "alt": "Waves generated by the oscillation of an object floating on the liquid surface result 4",
        "altZh": "浮体振荡产生的自由液面波结果图 4"
      },
      {
        "url": "assets/openfoam/multiphase-potentialfreesurfacedymfoam-oscillatingbox/result-05-multiphase-potentialfreesurfacedymfoam-oscillatingbo.png",
        "alt": "Waves generated by the oscillation of an object floating on the liquid surface result 5",
        "altZh": "浮体振荡产生的自由液面波结果图 5"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "U",
        "p",
        "p_gh",
        "pointDisplacement"
      ],
      "constants": [
        "dynamicMeshDict",
        "g",
        "transportProperties",
        "turbulenceProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟浮体振荡诱导的自由液面波，关注物体运动、动网格/自由面边界和液面高度随时间的响应。",
        "数值上，该案例归入多相流，使用 `potentialFreeSurfaceDyMFoam`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括速度场 `U`、压力变量 `p`、`p_gh`、`pointDisplacement`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `dynamicMeshDict` 定义动网格运动方式；`g` 定义重力方向与大小；`transportProperties` 定义流体物性与输运系数；`turbulenceProperties` 定义湍流模型选择。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/multiphase/potentialFreeSurfaceDyMFoam/oscillatingBox`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `potentialFreeSurfaceDyMFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "multiphase-potentialfreesurfacefoam-oscillatingbox",
    "title": "Waves generated by the oscillation of an object floating on the liquid surface",
    "titleZh": "浮体振荡产生的自由液面波",
    "category": "Multiphase",
    "categoryZh": "多相流",
    "types": [
      "多相"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "potentialFreeSurfaceFoam",
    "localPath": "multiphase/potentialFreeSurfaceFoam/oscillatingBox",
    "download": "downloads/openfoam/multiphase-potentialfreesurfacefoam-oscillatingbox.zip",
    "images": [
      {
        "url": "assets/openfoam/multiphase-potentialfreesurfacefoam-oscillatingbox/result-01-multiphase-potentialfreesurfacefoam-oscillatingbox-f.png",
        "alt": "Waves generated by the oscillation of an object floating on the liquid surface result 1",
        "altZh": "浮体振荡产生的自由液面波结果图 1"
      },
      {
        "url": "assets/openfoam/multiphase-potentialfreesurfacefoam-oscillatingbox/result-02-multiphase-potentialfreesurfacefoam-oscillatingbox-m.png",
        "alt": "Waves generated by the oscillation of an object floating on the liquid surface result 2",
        "altZh": "浮体振荡产生的自由液面波结果图 2"
      },
      {
        "url": "assets/openfoam/multiphase-potentialfreesurfacefoam-oscillatingbox/result-03-multiphase-potentialfreesurfacefoam-oscillatingbox-m.png",
        "alt": "Waves generated by the oscillation of an object floating on the liquid surface result 3",
        "altZh": "浮体振荡产生的自由液面波结果图 3"
      },
      {
        "url": "assets/openfoam/multiphase-potentialfreesurfacefoam-oscillatingbox/result-04-multiphase-potentialfreesurfacefoam-oscillatingbox-p.png",
        "alt": "Waves generated by the oscillation of an object floating on the liquid surface result 4",
        "altZh": "浮体振荡产生的自由液面波结果图 4"
      },
      {
        "url": "assets/openfoam/multiphase-potentialfreesurfacefoam-oscillatingbox/result-05-multiphase-potentialfreesurfacefoam-oscillatingbox-p.png",
        "alt": "Waves generated by the oscillation of an object floating on the liquid surface result 5",
        "altZh": "浮体振荡产生的自由液面波结果图 5"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "U",
        "p",
        "p_gh"
      ],
      "constants": [
        "g",
        "transportProperties",
        "turbulenceProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟浮体振荡诱导的自由液面波，关注物体运动、动网格/自由面边界和液面高度随时间的响应。",
        "数值上，该案例归入多相流，使用 `potentialFreeSurfaceFoam`，可理解为 OpenFOAM 求解器或工具。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括速度场 `U`、压力变量 `p`、`p_gh`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `g` 定义重力方向与大小；`transportProperties` 定义流体物性与输运系数；`turbulenceProperties` 定义湍流模型选择。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/multiphase/potentialFreeSurfaceFoam/oscillatingBox`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `potentialFreeSurfaceFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  },
  {
    "id": "stressanalysis-soliddisplacementfoam-platehole",
    "title": "Stress analysis of a flat plate with holes",
    "titleZh": "带孔平板应力分析",
    "category": "Stress analysis",
    "categoryZh": "应力分析",
    "types": [
      "结构",
      "湍流",
      "流固耦合"
    ],
    "softwareStack": [
      "OpenFOAM"
    ],
    "solver": "solidDisplacementFoam",
    "localPath": "stressAnalysis/solidDisplacementFoam/plateHole",
    "download": "downloads/openfoam/stressanalysis-soliddisplacementfoam-platehole.zip",
    "images": [
      {
        "url": "assets/openfoam/stressanalysis-soliddisplacementfoam-platehole/result-01-stressanalysis-soliddisplacementfoam-platehole-mesh.png",
        "alt": "Stress analysis of a flat plate with holes result 1",
        "altZh": "带孔平板应力分析结果图 1"
      },
      {
        "url": "assets/openfoam/stressanalysis-soliddisplacementfoam-platehole/result-02-stressanalysis-soliddisplacementfoam-platehole-d-x25.png",
        "alt": "Stress analysis of a flat plate with holes result 2",
        "altZh": "带孔平板应力分析结果图 2"
      },
      {
        "url": "assets/openfoam/stressanalysis-soliddisplacementfoam-platehole/result-03-stressanalysis-soliddisplacementfoam-platehole-sigma.png",
        "alt": "Stress analysis of a flat plate with holes result 3",
        "altZh": "带孔平板应力分析结果图 3"
      },
      {
        "url": "assets/openfoam/stressanalysis-soliddisplacementfoam-platehole/result-04-stressanalysis-soliddisplacementfoam-platehole-sigma.png",
        "alt": "Stress analysis of a flat plate with holes result 4",
        "altZh": "带孔平板应力分析结果图 4"
      }
    ],
    "meta": {
      "application": "",
      "endTime": "",
      "deltaT": "",
      "writeInterval": "",
      "fields": [
        "D",
        "T"
      ],
      "constants": [
        "mechanicalProperties",
        "thermalProperties"
      ],
      "commands": []
    },
    "tutorial": {
      "intro": [
        "本案例模拟带孔平板在载荷或热作用下的固体变形与应力集中，关注孔边位移、等效应力和主应力分布。",
        "数值上，该案例归入应力分析，使用 `solidDisplacementFoam`，可理解为 固体位移求解器。它把上面的物理问题转化为 OpenFOAM 可运行的边界条件、初始场、物性模型和时间推进控制。",
        "主要关注变量包括固体位移 `D`、温度场 `T`，这些变量直接对应结果图中的流场、热场、界面或结构响应。配置重点包括 `mechanicalProperties` 定义固体弹性参数；`thermalProperties` 定义固体或热传导参数。这些设置决定了该物理问题的材料属性、模型闭合和边界行为。"
      ],
      "run": [
        "进入下载后的案例目录：`cd OpenFOAM/stressAnalysis/solidDisplacementFoam/plateHole`。",
        "如需从干净状态开始，可先执行 `./Allclean`。",
        "推荐直接执行 `./Allrun`。脚本中识别到的主要步骤为：Allrun。",
        "若需要手动运行，可先检查 `system/controlDict`；当前识别到的应用程序为 `solidDisplacementFoam`，结束时间 `未显式识别`，时间步长 `未显式识别`，输出间隔 `未显式识别`。"
      ],
      "result": [
        "运行完成后，优先检查求解日志、时间目录和后处理输出是否完整，再用 ParaView 对照几何、网格和场变量分布。",
        "结果页展示几何、网格或典型场结果图，用于快速了解该案例的物理现象、数值区域和关键输出。实际复现时应以本地运行输出和 OpenFOAM 日志为准。"
      ]
    }
  }
];
