# AI Engineer Playbook

<p align="center">
  <strong>AI 工程师实战策略手册</strong><br>
  <em>从市场洞察到面试通关的完整战术体系</em>
</p>

<p align="center">
  <a href="#-快速开始"><img src="https://img.shields.io/badge/快速开始-5分钟了解全貌-blue?style=flat-square" alt="快速开始"></a>
  <a href="./LICENSE"><img src="https://img.shields.io/badge/license-MIT%20%2B%20CC--BY--4.0-green?style=flat-square" alt="License"></a>
  <a href="./CONTRIBUTING.md"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square" alt="PRs Welcome"></a>
  <a href="https://github.com/dkken/ai-engineer-playbook"><img src="https://img.shields.io/badge/GitHub-dkken%2Fai--engineer--playbook-orange?style=flat-square&logo=github" alt="GitHub"></a>
</p>

---

> **这不是一本教科书，也不是一个项目教程。**
>
> 这是一套经过数据验证的**战术体系**：从看懂 AI 工程师就业市场、评估自己的能力差距、构建让面试官无法拒绝的项目经验，到面试中精准表达你的价值——每一步都有明确的策略、模板和检查清单。

---

## 为什么你需要这本 Playbook

AI 工程师是 2026 年增长最快的技术岗位（国内同比增长 12 倍），但大多数求职者面临三个困境：

| 困境 | 这本 Playbook 的方案 |
|------|---------------------|
| 不知道学什么技能最有竞争力 | 基于 2,445 份海外 JD + 国内报告的数据驱动技能优先级排序 |
| 不知道该做什么项目能打动面试官 | 11 个面试导向的实战项目任务书，每个都标注了市场依据和面试考察维度 |
| 面试时说不清楚自己的价值 | 完整的话术模板、追问框架、常见陷阱，从"做了什么"到"为什么这么做" |

**核心理念**：你不需要成为最牛的 AI 工程师，你只需要比下一个候选人准备得更充分。

---

## 战术地图

```
┌──────────────┐    ┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│   📊 市场侦察  │ →  │   🎯 能力评估  │ →  │   🔧 项目构建  │ →  │   🎤 面试执行  │
│   job-market/  │    │  skill-       │    │  practical-   │    │  interview-   │
│               │    │  assessment/  │    │  projects/    │    │  patterns/    │
├──────────────┤    ├──────────────┤    ├──────────────┤    ├──────────────┤
│ 岗位类型分布   │    │ 技能自测问卷   │    │ 11个实战项目   │    │ 面试流程拆解   │
│ 技能需求排名   │    │ 能力雷达图     │    │ 分3个难度层级   │    │ 项目深挖框架   │
│ 薪资地域分析   │    │ 差距分析模型   │    │ 面试官考察维度  │    │ 系统设计模板   │
│ 行业趋势追踪   │    │ 认证学习路径   │    │ 工程师化改造   │    │ 行为面试策略   │
└──────────────┘    └──────────────┘    └──────────────┘    └──────────────┘
                              ↕
                      ┌──────────────┐
                      │   📚 资源弹药库  │
                      │   resources/   │
                      ├──────────────┤
                      │ 工具选型对比   │
                      │ 大厂生产案例   │
                      │ 真实面经复盘   │
                      │ 精选资源索引   │
                      └──────────────┘
```

---

## 核心数据（基于 2,445 份 JD 分析）

### 技能优先级

| 技能 | JD 提及率 | 增长趋势 | 优先级策略 |
|------|-----------|----------|-----------|
| Python | 82.5% | 基础必备 | 不会则无法入行 |
| RAG | 35.9% | +139% | **最热门，必须掌握** |
| Prompt Engineering | 29.1% | +45% | AI 时代的"新编程语言" |
| Docker/K8s | 32.6% | +38% | 工程化能力的门票 |
| Agents | 14.4% | +188% | **增长最快，未来必备** |
| Evaluation | 11.1% | +178% | **差异化技能，面试加分项** |

### 薪资基准

| 级别 | 国内（年） | 海外（年） |
|------|-----------|-----------|
| 初级 AI 工程师 | 24-42 万 | $80k-$120k |
| 中级 AI 工程师 | 42-72 万 | $120k-$180k |
| 高级 AI 工程师 | 72-120 万 | $180k-$250k |
| AI 架构师 | 120-180 万+ | $250k-$400k+ |

> 数据来源：[job-market/04-salary-insights.md](job-market/04-salary-insights.md)

---

## 内容架构

```
ai-engineer-playbook/
├── role-analysis/           # 角色侦察（5篇）
│   ├── 01-ai-engineer-role-cn.md          # AI 工程师到底做什么
│   ├── 02-skills-analysis-cn.md           # 技能全景图
│   ├── 03-responsibilities-cn.md          # 日常工作职责
│   ├── 04-use-cases-cn.md                 # 典型应用场景
│   └── 05-reality-vs-postings-cn.md       # JD 解读：理想 vs 现实
│
├── skill-assessment/        # 能力评估（4篇 + 工具）
│   ├── self-assessment.md                 # 12维度技能自测问卷
│   ├── gap-analysis.md                    # 与市场需求的差距分析
│   ├── certification-path.md              # 4条目标岗位学习路径
│   └── radar-chart.html                   # 交互式能力雷达图
│
├── practical-projects/      # 项目构建（11个）
│   ├── tier-1-foundation/                 # 基础：4个项目（2-4小时/个）
│   ├── tier-2-intermediate/               # 进阶：4个项目（4-8小时/个）
│   └── tier-3-advanced/                   # 高级：3个项目（1-2天/个）
│
├── interview-patterns/      # 面试执行（6篇）
│   ├── 01-interview-process.md            # 面试流程全拆解
│   ├── 02-project-deep-dive.md            # 项目深挖策略
│   ├── 03-ai-system-design.md             # AI 系统设计模板
│   ├── 04-take-home-assignment.md         # 实战作业攻略
│   ├── 05-behavioral-interview.md         # 行为面试策略
│   └── 06-interview-trends-2026.md        # 2026 面试趋势
│
├── job-market/              # 市场侦察（6篇）
│   ├── 01-market-overview.md              # 市场总览
│   ├── 02-skill-demand-analysis.md        # 技能需求分析
│   ├── 03-role-breakdown.md               # 岗位细分
│   ├── 04-salary-insights.md              # 薪资洞察
│   ├── 05-geographic-distribution.md      # 地域分布
│   └── data-sources.md                    # 数据来源清单
│
└── resources/               # 资源弹药库
    ├── awesome-ai-engineering-cn.md        # 精选中文 AI 工程资源
    ├── tools-comparison/                   # 向量数据库/Agent框架/评估工具对比
    ├── case-studies/                       # Perplexity等大厂生产案例
    └── interview-experiences/              # 真实大厂面经（xAI/微软/Meta等）
```

---

## 快速开始

### 如果你是 AI 求职者

```
第1步：了解市场 → job-market/01-market-overview.md（5分钟）
第2步：评估自己 → skill-assessment/self-assessment.md（10分钟）
第3步：选择项目 → practical-projects/README.md（5分钟）
第4步：准备面试 → interview-patterns/01-interview-process.md（15分钟）
```

### 如果你是技术面试官

```
第1步：理解角色 → role-analysis/01-ai-engineer-role-cn.md（10分钟）
第2步：设计题目 → interview-patterns/03-ai-system-design.md（15分钟）
第3步：对标市场 → job-market/04-salary-insights.md（5分钟）
```

### 如果你是 HR / 招聘

```
第1步：岗位认知 → role-analysis/（30分钟通读）
第2步：写JD参考 → job-market/02-skill-demand-analysis.md（10分钟）
第3步：薪酬对标 → job-market/04-salary-insights.md（5分钟）
```

---

## 实战项目一览

| 层级 | 项目 | 覆盖技能 | 市场依据 | 时长 |
|------|------|----------|----------|------|
| **Tier-1 基础** | RAG 知识库 | RAG, 向量数据库, 评估 | RAG 提及率 35.9% | 2-4h |
| | Agent 任务调度器 | Agent, Function Calling | Agents +188% | 2-4h |
| | LLM 评估套件 | Evaluation, 指标设计 | Evaluation 差异化 | 2-4h |
| | Prompt 版本管理 | Prompt Engineering | Prompt 29.1% | 2-4h |
| **Tier-2 进阶** | 多 Agent 协作系统 | 多 Agent, 通信协议 | 高级场景 | 4-8h |
| | 高级混合检索 | 混合检索, 重排序 | 向量 DB 10.8% | 4-8h |
| | AI 代码审查机器人 | CI/CD, MLOps | CI/CD 29.2% | 4-8h |
| | RAG 安全评估 | AI 安全, Red Teaming | 国内合规 +125% | 4-8h |
| **Tier-3 高级** | 知识图谱 RAG | 图数据库, 高级 RAG | 高级 RAG 场景 | 1-2天 |
| | AI 数据管道 | 实时 ETL, 流处理 | AI-Support 28.5% | 1-2天 |
| | 生产级 Agent 平台 | 平台架构, 可观测性 | 平台/基础设施 | 1-2天 |

> 每个项目都包含：市场需求背景、能力目标、基础开源项目、工程化改造任务、评估标准、面试官考察维度、常见坑点、参考资源。

---

## 贡献这本 Playbook

这本 Playbook 需要社区的力量才能持续进化。以下是你可以参与的方式：

| 贡献类型 | 说明 | 入口 |
|----------|------|------|
| 提交面经 | 分享你的真实面试经历（可匿名） | [resources/interview-experiences/](resources/interview-experiences/) |
| 补充项目 | 设计新的实战项目任务书 | [practical-projects/](practical-projects/) |
| 数据贡献 | 提供匿名 JD 样本或市场数据 | [job-market/](job-market/) |
| 工具对比 | 撰写技术选型对比分析 | [resources/tools-comparison/](resources/tools-comparison/) |
| 翻译校对 | 改进翻译质量或补充国内视角 | [role-analysis/](role-analysis/) |

详见 [CONTRIBUTING.md](CONTRIBUTING.md)

---

## 数据声明

- **海外数据**：基于 [ai-engineering-field-guide](https://github.com/alexeygrigorev/ai-engineering-field-guide) 对 2,445 份 JD 的分析（2026 年 1-3 月，builtin.com）
- **国内数据**：基于脉脉、腾讯研究院、前程无忧等公开报告，以及 Boss 直聘/拉勾等平台公开 JD 抽样分析
- **数据局限**：市场数据有时效性，国内数据样本量有限，部分数据为基于公开信息的估算。所有数据均标注具体来源，详见 [job-market/data-sources.md](job-market/data-sources.md)
- **免责声明**：本 Playbook 提供的是策略框架和任务规划，不包含可运行代码。你需要根据任务书自行实现项目

---

## 致谢

本项目基于 [alexeygrigorev/ai-engineering-field-guide](https://github.com/alexeygrigorev/ai-engineering-field-guide) 进行中文本地化和扩展，原始数据和框架由 Alexey Grigorev 和贡献者提供。

完整致谢见 [ACKNOWLEDGMENTS.md](ACKNOWLEDGMENTS.md)

---

## 许可证

- **翻译/改编内容**（role-analysis/、interview-patterns/、resources/awesome-ai-engineering-cn.md）：[CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/)
- **原创内容**（job-market/、practical-projects/、skill-assessment/、resources/其他）：[MIT](LICENSE)

---

<p align="center">
  <strong>如果这本 Playbook 帮到了你，请给一个 Star ⭐</strong><br>
  <em>你的 Star 能让更多 AI 求职者看到这份资源</em>
</p>