# Start Your VibeFlow！

珍妮纺纱机的出现，改变了依靠人力重复纺织的生产方式。

计算机的出现，进一步提高了信息处理效率，也让人类面对的信息规模快速增长。

在数值仿真领域，计算机已经承担了大量计算工作，但建模、网格、求解设置、后处理和报告整理仍然需要人反复操作。单一GUI交互带来了较高的入门门槛，也让许多重复劳动长期存在。

Agent提供了一种新的交互方式。它连接自然语言与计算机工具，把人的意图转化为具体操作，使复杂问题更容易入手，也减少了繁琐重复的手工步骤。

VibeFlow面向数值仿真任务构建智能化环境，覆盖学术研究与工程应用中的建模、网格、计算、后处理、报告和论文整理等全流程工作。

数值仿真是一项严肃的工程，几何尺寸、材料参数、边界条件、网格质量、求解器设置、后处理指标，任何一个环节出现偏差，最后得到的结果都可能偏离真实问题。VibeFlow的核心在于让用户用自然语言表达意图，让Agent完成繁琐操作，同时把每一步的参数、文件、日志、图片和结论都保留下来，让人保留完整修改的权限。

因此，VibeFlow把工程判断保留给人。人负责提出问题、确认结果、判断结果是否可信；VibeFlow负责组织文件、调用工具、检查错误、记录证据、生成报告，形成人机的最佳协同工作方式。

## VibeFlow架构介绍
![](figure/architecture-vibeflow.png)

从整体上看，VibeFlow的架构可以理解为三件事：一个事实源，两种模式，一条证据链。

### caseDict
在VibeFlow中，`caseDict`是整个算例的核心。它记录项目事实。用户的目标、物理问题、几何参数、材料、区域、边界、初始条件、网格要求、数值方法、运行设置、后处理目标、报告要求，都会被写入这个文件。

这样做的意义在于，后续所有阶段围绕同一份项目事实协同工作。几何脚本从`caseDict`读取尺寸和命名，网格阶段从`caseDict`读取区域和边界，求解阶段从`caseDict`读取物理模型和数值设置，后处理阶段从`caseDict`读取要提取的指标，报告阶段再从前面所有证据中组织结论。

它为Agent提供了一份详细可查阅与修改的单一文件，在任何时刻为LLM提供准确的上下文信息，避免在压缩，长程任务，任务交接时出现记忆丢失。

### 使用模式与开发模式
VibeFlow分为使用模式和开发模式。

使用模式面向完整仿真任务。它从需求澄清开始，依次推进参数化几何、网格划分、求解计算、后处理可视化和报告生成。每个阶段都有明确的输入、输出和检查条件，不会在关键参数缺失时盲目前进，同时需要人在每一阶段人工判断。

开发模式面向求解器侧能力建设。很多真实研究需要在现成软件之外扩展自定义湍流模型、材料模型、边界条件、后处理工具或者输入生成器。VibeFlow把这类开发任务放在`UDF/`目录中管理，先形成设计文档，再实现代码、编译验证、接入算例。

这两种模式之间可以互相连接。一个在开发模式中完成的模型，可以进入使用模式服务真实算例；一个在使用模式中暴露的问题，也可以反过来推动开发模式继续完善工具能力。

### 从用户意图到最终报告
VibeFlow强调证据链。用户的每一次确认、Agent的每一次修改、工具的每一次运行、日志中的每一次错误、后处理生成的每一张图，都应该在项目中找到对应位置。

这种架构让复杂工作可以被检查。当结果异常时，用户可以回到几何、网格、求解或后处理阶段查找问题；当报告需要修改时，也可以追溯到具体数据和脚本，减少重新翻聊天记录和终端输出的成本。

## 主要功能介绍
### 1. 统一项目工作空间
VibeFlow首先提供一个完整的项目工作空间。左侧是项目文件树，几何、网格、求解、后处理、报告、参考资料和UDF代码都被放在清晰的位置；中间是可视化与编辑区域；右侧是Agent和终端。用户不用在多个软件窗口和目录之间来回寻找文件，项目状态可以一眼看到。

![](figure/v1.png)

### 2. Agent辅助文献阅读
仿真研究往往从论文、手册、实验数据和已有案例开始。VibeFlow可以把这些资料放进项目中，让Agent阅读并提取关键信息，例如几何约束、材料属性、边界条件、验证指标和参考结果。这样，文献资料可以直接进入后续建模和验证流程。

![](figure/v2.png)

### 3. 全流程自动测试与错误修复
VibeFlow可以通过Agent CLI执行完整CAE流程。它能生成文件、运行命令、观察日志、识别错误、修改设置并再次验证。几何失败、网格失败、求解器输入错误、后处理脚本报错，都可以被纳入同一个迭代过程。

![](figure/v3.png)

### 4. 求解日志与残差监控
VibeFlow会把残差、时间步、警告、收敛状态和求解器诊断信息转成可读的证据。用户可以更早发现不稳定、缺文件、边界不匹配或参数设置不合理的问题。并在平台上实时查看残差变化与计算进度，了解剩余的计算时间。

![](figure/v4.png)

### 5. 结果对比与物理验证
仿真结果需要被验证。VibeFlow可以根据参考数据、实验数据、解析解或工程验收标准生成对比图，帮助用户判断结果是否可信。它让验证过程更快、更清楚、更可重复。

![](figure/v5.png)

### 6. 自然语言驱动几何与网格
用户可以用自然语言描述几何与设计意图，VibeFlow再使用CadQuery/OCP等工具生成参数化模型。几何中的区域、界面、边界集合会保持命名，方便后续网格划分和求解器设置。模型可以重建、修改和导出，适合后续工程流程继续使用。

![](figure/v6.png)

![](figure/v6-2.png)

### 7. 自然语言后处理
后处理常常需要记忆大量按钮和脚本接口。VibeFlow把这个过程转化为自然语言描述。用户只需要说明想看应力、位移、压力、温度、速度、切片、等值面、流线还是探针曲线，Agent就可以生成可复现的Python或ParaView脚本，并在平台中自动加载，完全由自然语言描述即可实现自动的结果处理。

![](figure/v7.png)

### 8. 研究报告与论文
报告汇总前面所有工作的证据。VibeFlow可以把关键参数、几何和网格方法、求解设置、结果图表、验证过程和局限性整理成报告。报告中的结论应当能回到具体文件、日志、图表和数据。并提供Latex支持与内置投稿模板，供研究者轻松使用。

![](figure/v8.png)

### 9. 截图标注辅助
很多时候，我们想表达的是“这里改一下”“这个边界不对”“这个区域需要加密”。单靠文字描述可能不够直接。VibeFlow支持截图标注，用户可以在当前视图上圈选、画箭头、写说明，Agent再把这些视觉信息转成可执行的修改意图。

![](figure/v9.png)

### 10. 面向长时间研究的深色主题
数值仿真常常需要长时间建模、调参、运行、排错和写报告。VibeFlow提供适合长时间使用的界面主题，让用户把注意力集中在模型、数据和证据上，减少界面操作带来的干扰。

![](figure/v10.png)

### 11. Add to Chat上下文注入
传统对话式AI的一个问题是，上下文经常不准确。用户需要手动复制代码、日志或配置片段，很容易漏掉关键信息。VibeFlow支持把选中的代码、字典、日志和配置块一键加入对话，让Agent获得精确的本地上下文。

![](figure/v11.png)

### 12. OpenFOAM可视化参数面板
OpenFOAM字典文件编辑门槛较高且非常麻烦。VibeFlow把部分字典项转成可视化表单，并提供参数解读、选择建议和风险提示。不需要记住每个关键字，也能理解自己正在修改什么，方便的从下拉项中选择合适选项。

![](figure/v12.png)

### 13. Markdown研究笔记与报告编辑
研究过程中会产生大量说明、记录和阶段总结。VibeFlow内置Markdown编辑与预览能力，可以直接写表格、公式、图片、代码块和报告结构。这样，仿真笔记与项目文件放在一起，后续整理报告时能直接接续前面的工作。

![](figure/v13.png)

### 14. 多文件标签页管理
一个真实算例会打开很多文件：几何脚本、网格脚本、控制字典、求解日志、后处理脚本、报告草稿。VibeFlow通过纵向标签页管理这些文件。同时不仅仅支持文本代码的编辑，对于CAE的结果，双击即可自动加载。

![](figure/v14.png)

### 15. 大模型后端切换
不同任务可能适合不同Agent工具或模型后端。VibeFlow Agent支持任意国内外大模型以及本地模型，轻松使用你想用的模型。

![](figure/v15.png)

### 16. 多CAE后端路径配置
VibeFlow覆盖多类求解器。OpenFOAM、CalculiX、Code_Aster、Elmer、FDS、FEniCS、FreeFEM、LAMMPS、MOOSE、SU2、DualSPHysics、PETSc、SPHinXsys、OpenRadioss、OpenLB，STARCCM，comsol，fluent，openvsp等工具都可以通过路径配置进入Agent上下文。在统一的环境中组合使用多个工具构建强大的CAE工作流。

![](figure/v16.png)

### 17. CAE Skills与知识库
不同后端有不同语法、文件结构和运行习惯。VibeFlow通过专门的CAE Skills管理这些知识，使Agent在执行OpenFOAM、结构有限元、粒子法、格子玻尔兹曼、火灾动力学或后处理任务时，能够遵循对应工具的工作规则。

并且可以在VibeFlow Agent主动选择skill使用或者根据你的工作类型创建独属于你的skill将经验复用。

![](figure/v17.png)

![](figure/v17-2.png)

## 具体场景
### 全流程由自然语言驱动湍流模型开发，测试，验证与工程案例计算
[bilibili](https://player.bilibili.com/player.html?bvid=BV1c15u6eEoy&autoplay=0)

### 使用自然语言快速构建两相流波浪模型并自动完成对比验证
[bilibili](https://player.bilibili.com/player.html?bvid=BV18HVY65Emk&autoplay=0)

### AI辅助自动完成T-shape梁有限元计算
[bilibili](https://player.bilibili.com/player.html?bvid=BV1oyVM6HE7U&autoplay=0)

### 自然语言驱动openradioss自动完成保险杠梁碰撞仿真
[bilibili](https://player.bilibili.com/player.html?bvid=BV1yF5F6VEq4&autoplay=0)

### 利用Agent高效完成三维建模，模态分析与论文写作
[bilibili](https://player.bilibili.com/player.html?bvid=BV15g7v6NEJL&autoplay=0)

### 基于Agent准确完成CFD网格生成及编辑
[bilibili](https://player.bilibili.com/player.html?bvid=BV1147v6pErm&autoplay=0)

### 基于Agent自动化CFD/CAE后处理工作：自然语言描述，自动产出结果
[bilibili](https://player.bilibili.com/player.html?bvid=BV1Ts7v6REuQ&autoplay=0)

### 基于Agent高效完成激光粉末熔融计算
[bilibili](https://player.bilibili.com/player.html?bvid=BV1Un7v64EQ7&autoplay=0)

### 用AGENT自动计算哈兰德的风阻
[bilibili](https://player.bilibili.com/player.html?bvid=BV1CYNV6dEy2&autoplay=0)

### AGENT辅助完成STAR-CCM+多相流溃坝案例
[bilibili](https://player.bilibili.com/player.html?bvid=BV1AaNV64E6n&autoplay=0)

### AGENT辅助完成COMSOL自然冷却案例
[bilibili](https://player.bilibili.com/player.html?bvid=BV1TsNV6wECj&autoplay=0)

### 基于AGENT轻松完成OpenVSP飞行器设计与初步分析
[bilibili](https://player.bilibili.com/player.html?bvid=BV1MpNV6YEFf&autoplay=0)

### 基于AGENT快速入门OpenFOAM并轻松完成开发与计算
[bilibili](https://player.bilibili.com/player.html?bvid=BV1KtNV6FEYb&autoplay=0)

## 总结
VibeFlow 是面向科研与工程应用的智能数值仿真工作环境。它以自然语言和 Agent 作为交互入口，通过本地软件路径配置、命令行与 Python 接口、自动化脚本以及专业 CAE Skills，将需求分析、文献阅读、参数化建模、网格生成、数值计算、结果验证、后处理可视化和报告撰写组织在统一工作空间中。

VibeFlow 可连接和调度多种专业工具，包括用于参数化几何建模的 CadQuery，以及面向飞行器外形设计的 OpenVSP；面向流体、传热、燃烧和多物理场计算的 OpenFOAM、SU2、OpenLB、FDS、Ansys Fluent、Simcenter STAR-CCM+ 和 COMSOL Multiphysics；面向结构力学、有限元和偏微分方程求解的 CalculiX、Code_Aster、Elmer、FEniCS、FreeFEM、MOOSE 和 OpenRadioss；面向粒子法、自由液面及分子动力学计算的 DualSPHysics、SPHinXsys 和 LAMMPS；以及提供并行线性、非线性方程和时间积分能力的数值计算基础库 PETSc。这些工具分别覆盖参数化 CAD、CFD、有限元、多物理场、显式动力学、格子玻尔兹曼方法、光滑粒子流体动力学和分子动力学等不同计算方向，通过相应的软件接口和工作规则被纳入统一的 Agent 工作流。

在整个过程中，VibeFlow 使用 caseDict 记录用户目标、物理假设、几何尺寸、材料参数、边界条件、网格要求、求解设置、运行日志、后处理数据和报告结论，使不同软件和不同阶段始终围绕同一份项目事实协同工作。Agent 负责组织文件、调用工具、检查错误和保存证据，用户则保留对关键参数、物理合理性和最终结论的判断与修改权，从而让复杂数值仿真更容易开始、更清晰地推进，也更加可追溯和可复现。

VibeFlow希望建立一种新的数值仿真工作方式。将自然语言作为入口同时保留人二次修改的权限，将`caseDict`作为事实源供Agent查阅，将专业CAE软件作为执行工具，将Agent作为连接者，将日志、图表、脚本和报告作为可追溯结果。

在这个流程中，人可以从大量重复操作中抽身，也可以减少对软件关键字记忆的依赖。将注意力放在真正重要的地方：问题是否定义清楚，假设是否合理，结果是否可信，结论是否能支撑工程或学术判断，专注真正的创新研究。

## Reference
### 详细文档
[VibeFlow](https://www.yuque.com/bluedreams/vibeflow)

### 加入 VibeFlow 社区

![](assets/wechat.png)

---
