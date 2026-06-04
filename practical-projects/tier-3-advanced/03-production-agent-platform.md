# 项目：基于 AstrBot + Opik 构建生产级 Agent 平台

> **市场依据**：平台/基础设施岗位占 28.5%，生产化能力需求高
> **预计时长**：1-2 天
> **难度**：Tier-3（高级能力）

---

## 市场需求背景

根据 [ai-engineering-field-guide](https://github.com/alexeygrigorev/ai-engineering-field-guide) 对 2,445 份 JD 的分析：
- **平台/基础设施岗位占 28.5%**：AI-Support 类型岗位负责构建生产级 Agent 平台
- **生产化能力需求高**：企业从" demo 演示"转向"生产部署"，要求平台具备高可用、可观测、可扩展能力
- **多平台接入是刚需**：企业需要同时支持微信、飞书、钉钉、Telegram 等多个渠道

国内趋势（腾讯研究院 2026）：
- 企业 AI 应用从"单点工具"转向"平台化部署"
- 生产级 Agent 平台工程师岗位增长 150%
- 相关岗位薪资溢价达 40%

---

## 能力目标

完成本项目后，你将具备：
- 基于开源 Agent 平台做工程化改造的能力
- 多平台接入、高可用部署的实践经验
- 可观测性、监控告警的实践经验
- 生产环境 Agent 平台的运维能力

## 适合考察的能力

- 平台架构设计
- 多平台接入
- 可观测性
- 高可用部署
- 监控告警

---

## 基础开源项目

| 项目 | Stars | 技术栈 | 特点 | 许可证 |
|------|-------|--------|------|--------|
| [AstrBot](https://github.com/AstrBotDevs/AstrBot) | 33.8k+ | Python | 多平台 LLM 聊天机器人，支持 Agent、MCP、知识库、插件生态 | AGPL-3.0 |
| [Opik](https://github.com/comet-ml/opik) | 19.4k+ | Python, Java, TypeScript | LLM 可观测性平台，支持追踪、评估、优化、Agent 优化器 | Apache-2.0 |

**辅助工具**：
| 工具 | Stars | 用途 |
|------|-------|------|
| [Neo4j](https://github.com/neo4j/neo4j) | 13k+ | 图数据库，存储知识图谱 |
| [Prometheus](https://github.com/prometheus/prometheus) | - | 监控和告警 |
| [Grafana](https://github.com/grafana/grafana) | - | 可视化监控面板 |

### 为什么选择 AstrBot？

AstrBot 是 2026 年多平台 Agent 领域的标杆开源项目，核心差异化能力：

1. **多平台支持**：QQ、微信、企业微信、飞书、钉钉、Telegram、Discord、Slack 等 10+ 平台
2. **Agent 能力**：支持多轮工具调用、内置沙盒代码执行器、网页搜索、子 Agent 编排
3. **MCP 原生支持**：原生支持 Model Context Protocol，可扩展外部能力
4. **知识库系统**：内置混合检索（密集 + 稀疏 BM25），支持 PDF/DOCX/Markdown 解析
5. **插件生态**：1000+ 插件，覆盖生产力、社群运营、内容工作流
6. **多模型支持**：OpenAI、Gemini、Claude、DeepSeek、Ollama 本地模型等
7. **部署灵活**：Docker、pip、uv、Windows 一键安装器、宝塔面板、1Panel

**与其他 Agent 平台对比**：

| 特性 | AstrBot | Dify | Coze | LangServe |
|------|---------|------|------|-----------|
| 多平台接入 | ✅ 10+ 平台 | ❌ API only | ❌ 部分平台 | ❌ API only |
| Agent 能力 | ✅ 多轮工具调用 | ✅ 工作流 | ✅ 插件 | ❌ 需自建 |
| MCP 支持 | ✅ 原生 | ❌ 需集成 | ❌ 无 | ❌ 需集成 |
| 知识库 | ✅ 内置混合检索 | ✅ 向量检索 | ✅ 基础检索 | ❌ 需集成 |
| 插件生态 | ✅ 1000+ | ✅ 工具 | ✅ 插件 | ❌ 需自建 |
| 本地部署 | ✅ 完全本地 | ✅ 开源版 | ❌ 云端 | ✅ 完全本地 |
| 开源协议 | AGPL-3.0 | Apache-2.0 | 商业 | MIT |

### 为什么选择 Opik？

Opik 是 2026 年 LLM 可观测性领域的标杆开源项目，由 Comet 团队开发，核心差异化能力：

1. **全面可观测性**：深度追踪 LLM 调用、对话日志、Agent 活动、多模态追踪
2. **LLM-as-a-Judge**：内置 50+ 评估指标，支持幻觉检测、上下文召回等
3. **Agent 优化器**：6 种高级优化算法，自动生成和评分最佳 Prompt
4. **生产级监控**：在线评估规则、告警、Gateway & Guardrails
5. **自托管支持**：支持本地部署和 Kubernetes 部署，数据完全私有
6. **多框架集成**：LangChain、LlamaIndex、OpenAI、Anthropic、Haystack 等

**与其他可观测性工具对比**：

| 特性 | Opik | LangSmith | Weights & Biases | Phoenix |
|------|------|-----------|------------------|---------|
| 开源 | ✅ Apache-2.0 | ❌ 商业 | ❌ 商业 | ✅ Apache-2.0 |
| 自托管 | ✅ 本地/K8s | ❌ 云端 | ❌ 云端 | ✅ 本地 |
| Agent 优化 | ✅ 6 种算法 | ❌ 无 | ❌ 无 | ❌ 无 |
| LLM-as-a-Judge | ✅ 50+ 指标 | ✅ 基础 | ✅ 基础 | ✅ 基础 |
| 成本追踪 | ✅ 详细 | ✅ 基础 | ❌ 无 | ❌ 无 |
| 多模态追踪 | ✅ 支持 | ❌ 有限 | ✅ 支持 | ❌ 有限 |

---

## 工程化改造任务

### 任务 1：部署与配置（2 小时）
- 使用 Docker 部署 AstrBot
- 使用 Docker 部署 Opik（本地自托管）
- 配置本地 LLM（Ollama）替代默认 API
- 配置多平台接入（至少 2 个平台）

### 任务 2：Agent 能力扩展（4 小时）
- 配置 AstrBot 的 Agent 模式（多轮工具调用）
- 集成 MCP 服务扩展能力
- 配置知识库（上传文档、配置检索）
- 实现自定义插件（至少 1 个）
- 配置子 Agent 编排

### 任务 3：可观测性集成（4 小时）
- 集成 Opik SDK 到 AstrBot
- 配置 LLM 调用追踪
- 配置 Agent 活动追踪
- 配置成本追踪
- 配置在线评估规则

### 任务 4：监控告警（2 小时）
- 部署 Prometheus + Grafana
- 配置 AstrBot 性能指标监控
- 配置告警规则（响应时间、错误率）
- 配置日志聚合

### 任务 5：生产化改造（2 小时）
- 配置高可用部署（多实例 + 负载均衡）
- 配置数据备份策略
- 配置环境变量管理（不硬编码 API Key）
- 编写部署文档和 README

---

## 评估标准

| 维度 | 权重 | 评估要点 |
|------|------|----------|
| 部署能力 | 15% | 是否成功部署 AstrBot + Opik |
| Agent 能力 | 25% | 多轮工具调用、插件、知识库 |
| 可观测性 | 25% | 追踪完整性、评估指标、成本监控 |
| 监控告警 | 15% | 监控面板、告警规则、日志聚合 |
| 工程化 | 10% | 高可用、备份、配置管理 |
| 文档 | 10% | 部署文档、架构说明 |

---

## 面试官考察维度

### 维度 1：平台架构设计能力
- 考察点：为什么选择 AstrBot + Opik 而不是 Dify + LangSmith？
- 示例方向：
  - 多平台接入的架构设计
  - Agent 编排的复杂度管理
  - MCP 协议的价值和局限
  - 开源协议对商业使用的影响（AGPL-3.0 vs Apache-2.0）

### 维度 2：可观测性深度
- 考察点：如何设计生产级 Agent 的可观测性体系？
- 示例方向：
  - LLM 调用追踪的粒度设计
  - Agent 决策过程的可解释性
  - 成本追踪和优化策略
  - 在线评估和离线评估的结合

### 维度 3：生产化思维
- 考察点：从"能跑"到"能生产"需要考虑什么？
- 示例方向：
  - 高可用架构设计（多实例、负载均衡、故障转移）
  - 数据安全和隐私合规
  - 性能优化（响应时间、并发处理）
  - 成本控制（API 调用、存储、计算）

> 【企业用户】登录评估平台查看详细追问示例

---

## 常见坑点

- ❌ **坑点 1**：忽略 AGPL-3.0 协议要求，导致商业使用合规风险
  - ✅ **解决**：了解 AGPL-3.0 的传染性要求，评估是否需要替换为 Apache-2.0 方案
- ❌ **坑点 2**：不配置可观测性，生产环境出问题无法定位
  - ✅ **解决**：集成 Opik 追踪，配置关键指标监控
- ❌ **坑点 3**：单实例部署，无高可用保障
  - ✅ **解决**：配置多实例 + 负载均衡 + 健康检查
- ❌ **坑点 4**：忽略多平台适配差异，导致部分平台功能异常
  - ✅ **解决**：针对每个平台单独测试消息格式和交互逻辑

---

## 参考资源
- [AstrBot 官方文档](https://docs.astrbot.app/)
- [AstrBot GitHub](https://github.com/AstrBotDevs/AstrBot)
- [Opik 官方文档](https://www.comet.com/docs/opik/)
- [Opik GitHub](https://github.com/comet-ml/opik)
- [Opik 自托管指南](https://www.comet.com/docs/opik/self-host/overview)
- [MCP 协议文档](https://modelcontextprotocol.io/)
