# 案例：Doctolib 的 Agentic AI 客服系统 "Alfred"

> **来源**：Doctolib 官方技术博客（medium.com/doctolib, 2025年1月发布）、ZenML LLMOps Database、TechReady Live 演讲、Doctolib 官方新闻稿
> **公司**：Doctolib（欧洲最大医疗预约平台，Series C，ARR 超 €10亿，服务 40万+ 医疗专业人员）
> **场景**：医疗客服自动化
> **技术栈**：LangGraph、OpenAI API、FastAPI、自研 RAG 引擎

---

## 背景

Doctolib 是欧洲领先的医疗科技平台，连接患者与医疗专业人员，服务覆盖法国、德国、意大利等国。随着平台规模扩大，客服请求量线性增长，传统的人工客服扩展方式既不可持续也不经济。

**业务指标**（来源：Doctolib 官方技术博客）：
- 服务医疗专业人员：40万+
- 日处理客服消息：约 17,000 条
- 目标：自动化常规查询，保留人工处理复杂案例

---

## 需求

1. **自动化常规支持查询**：如日历访问权限管理、账户问题
2. **保持高客户满意度**：不牺牲服务质量
3. **安全优先**：医疗数据敏感，任何操作都需人工确认
4. **可扩展**：支持未来更多用例
5. **合规**：符合 GDPR、法国医疗数据保护法规

---

## 架构

### 核心设计决策

**1. Agentic 架构而非传统聊天机器人**

Doctolib 明确选择 Agentic 系统而非传统聊天机器人或简单 RAG（来源：Doctolib 官方技术博客、ZenML LLMOps Database）：
- 多个专业 AI Agent，每个有特定角色和工具集
- 遵循最小权限原则：每个 Agent 只能访问必要的 API 和数据源
- 通过 LangGraph 编排，有向图结构管理 Agent 交互

**2. LangGraph 编排**

- 使用 LangGraph 构建复杂 Agent 工作流
- 节点 = LLM Agent 或确定性函数，边 = 通信路径
- 动态路由：信息流依赖前序节点输出
- 初始 PoC 聚焦日历访问权限管理

**3. 现有 RAG 引擎集成**

- 将现有 RAG 引擎作为 Agentic 系统内的专业 Agent
- 展示如何在现有基础设施上构建而非完全替换

### 安全设计

**Human-in-the-Loop 策略**（来源：Doctolib 官方技术博客）：
- **明确政策**：LLM 永不直接执行敏感操作
- **最终确认**：任何修改数据的操作（如更改日程访问权限）始终需要用户确认
- **事实核查机制**：执行敏感操作前进行事实核查
- **人工可读确认**：向用户展示清晰的确认信息

**身份与权限**：
- Agent 继承用户权限，而非使用管理员权限
- 服务间认证通过 JWT 管理

---

## 挑战与解决方案

### 挑战 1：AI 幻觉与敏感操作

**问题**：LLM 的非确定性意味着可能产生幻觉，在医疗场景中风险极高。

**解决方案**：
- 敏感操作必须人工确认
- LLM 仅负责信息收集和方案准备
- 执行权始终保留给用户

### 挑战 2：多 Agent 协作复杂性

**问题**：多个 Agent 协作时可能出现冲突、循环依赖、状态不一致。

**解决方案**：
- 使用 LangGraph 的状态机模型管理 Agent 状态
- 定义清晰的 Agent 边界和通信协议
- 设置超时和熔断机制

### 挑战 3：与现有系统集成

**问题**：Doctolib 已有成熟的客服系统，不能完全替换。

**解决方案**：
- Agentic 系统作为现有系统的增强层
- 通过 API 与现有 RAG 引擎、客服工单系统集成
- 渐进式部署，先处理简单查询，逐步扩展

---

## 相关项目：Doctolib 电话 AI 助手

2025 年 12 月，Doctolib 发布了电话 AI 助手（来源：Doctolib 官方新闻稿）：
- 基于 2024 年 5 月收购的 Aaron.ai 技术
- 结合语音识别、LLM、自研对话管理模型
- 处理预约、处方续签、病假证明等电话请求
- 平均每月处理 500 通电话/医生

---

## 面试要点

### 面试官考察维度

1. **Agent 架构设计**
   - 为什么选择多 Agent 而不是单 Agent？
   - LangGraph 的状态机模型有什么优势？
   - Agent 之间如何通信和协调？

2. **安全设计**
   - 如何在 Agentic 系统中实现 Human-in-the-Loop？
   - 最小权限原则如何落地？
   - 如何防止 LLM 执行未授权操作？

3. **系统集成**
   - 如何在现有系统上构建 Agentic 能力？
   - 渐进式部署的策略？
   - 如何评估 Agentic 系统的 ROI？

### 参考追问

- "如果 LLM 建议的操作被用户拒绝，系统应该如何处理？"
- "多 Agent 系统中，如何避免 Agent 之间的循环依赖？"
- "如何设计一个安全的 Agentic 系统，确保医疗数据不被泄露？"

---

## 参考资源

- [Doctolib 官方技术博客](https://medium.com/doctolib/building-an-agentic-ai-system-for-healthcare-support-a-journey-into-practical-ai-implementation-0afd28d716e6) — Alfred 系统详细技术文章（2025年1月）
- [ZenML LLMOps Database](https://www.zenml.io/llmops-database/building-an-agentic-ai-system-for-healthcare-support-using-langgraph) — 结构化案例研究
- [TechReady Live 演讲](https://techready.live/talks/talk-alfred-doctolib/) — Alfred 技术演讲（法语）
- [Doctolib 官方新闻稿](https://about.doctolib.fr/news/doctolib-lance-un-assistant-telephonique/) — 电话 AI 助手发布（2025年12月）

---

> 数据来源：Doctolib 官方技术博客、ZenML LLMOps Database、TechReady Live 演讲、Doctolib 官方新闻稿
> 
> 诚实标注：Doctolib "Alfred"系统为早期 PoC 阶段，日历访问管理为初始用例，非全量生产部署
