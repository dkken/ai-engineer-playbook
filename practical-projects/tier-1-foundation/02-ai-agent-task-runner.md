# 项目：基于 agent-service-toolkit 构建 AI Agent 任务调度器

> **市场依据**：Agents 提及率 14.4%，LangChain 18.8%，LangGraph 8.0%
> **预计时长**：2-4 小时
> **难度**：Tier-1（基础能力）

---

## 市场需求背景

根据 [ai-engineering-field-guide](https://github.com/alexeygrigorev/ai-engineering-field-guide) 对 2,445 份 JD 的分析：
- **Agents 是增长最快的技能**：提及率 14.4%，增长率 +188%
- **LangChain 需求旺盛**：18.8% 的岗位提及
- **Agent + RAG 覆盖 70%+ 用例**：掌握这两项可应对大多数工作

国内趋势（腾讯研究院 2026）：
- 企业从"单轮对话"转向"多步任务执行"
- Agent 成为 AI 应用落地的重要形态
- 相关岗位薪资溢价达 25%

---

## 能力目标

完成本项目后，你将具备：
- 基于开源 Agent 框架做工程化改造的能力
- Agent 系统部署、配置、扩展的实践经验
- 生产环境 Agent 系统的运维能力

## 适合考察的能力

- Agent 架构设计与实现
- 工具调用与状态管理
- Prompt 工程设计
- 系统评估与优化

---

## 基础开源项目

| 项目 | Stars | 技术栈 | 特点 | 许可证 |
|------|-------|--------|------|--------|
| [agent-service-toolkit](https://github.com/JoshuaC215/agent-service-toolkit) | 4.3k | Python, FastAPI, Streamlit | 完整的 Agent 服务框架，支持多种 Agent 类型 | MIT |

**辅助工具**：
| 工具 | Stars | 用途 |
|------|-------|------|
| [browser-use](https://github.com/browser-use/browser-use) | 96k+ | Agent 操作浏览器 |
| [microsoft/ai-agents-for-beginners](https://github.com/microsoft/ai-agents-for-beginners) | - | 微软 Agent 教程 |

---

## 工程化改造任务

### 任务 1：部署与配置（30 分钟）
- 使用 Docker 部署 agent-service-toolkit
- 配置本地 LLM（Ollama）替代默认 API
- 配置自定义工具（搜索、计算、文件操作）

### 任务 2：功能扩展（1 小时）
- 集成 browser-use 添加浏览器操作能力
- 实现多轮对话上下文记忆
- 添加任务状态跟踪和日志记录
- 实现错误处理和重试机制

### 任务 3：评估与优化（1 小时）
- 设计评估指标（任务完成率、准确率、延迟）
- 对比不同 Agent 策略的效果
- 优化工具调用效率

### 任务 4：生产化改造（30 分钟）
- 添加错误处理和日志记录
- 配置环境变量管理（不硬编码 API Key）
- 编写部署文档和 README

---

## 评估标准

| 维度 | 权重 | 评估要点 |
|------|------|----------|
| 部署能力 | 20% | 是否成功部署并运行 |
| 扩展能力 | 30% | 功能扩展是否完整可用 |
| 评估能力 | 25% | 是否有量化评估指标 |
| 工程化 | 15% | 错误处理、配置管理 |
| 文档 | 10% | 部署文档、改造说明 |

---

## 面试官考察维度

### 维度 1：Agent 架构设计能力（权重 40%）
- **考察点**：为什么选择 agent-service-toolkit 而不是 AutoGen/CrewAI？
- **追问示例**：
  - "agent-service-toolkit 的 LangGraph + FastAPI + Streamlit 组合适合什么场景？什么场景下需要 CrewAI 的多 Agent 角色扮演？"
  - "Agent 的 ReAct 循环中，如果'观察'步骤获取的信息不完整，应该怎么处理？"
  - "如果任务执行时间超过 30 秒，用户已经失去耐心，你会怎么优化 Agent 的响应策略？"

### 维度 2：工具设计与集成能力（权重 35%）
- **考察点**：如何设计可扩展的工具系统？
- **追问示例**：
  - "你定义了 5 个工具，但 Agent 在简单任务中频繁调用不必要的工具，怎么优化？"
  - "工具调用失败时，Agent 应该重试、跳过还是报错？什么策略最合适？"
  - "如果新增一个工具需要修改 Agent 的核心逻辑，说明架构有什么问题？怎么改进？"

### 维度 3：状态管理与容错（权重 25%）
- **考察点**：Agent 系统的状态如何管理？
- **追问示例**：
  - "Agent 执行到一半崩溃了，如何恢复状态而不是从头开始？"
  - "多轮对话中，如何防止对话历史过长导致上下文窗口溢出？"
  - "如果 Agent 陷入循环（不断重复相同的思考和行动），怎么检测和打破？"

---

## 常见坑点
- ❌ **坑点 1**：直接用默认配置部署，不配置本地模型，导致 API 费用过高
  - ✅ **解决**：配置 Ollama 本地 LLM（如 Qwen2.5、Llama3）
- ❌ **坑点 2**：忽略工具调用的错误处理，导致 Agent 崩溃
  - ✅ **解决**：添加工具调用错误处理和重试机制（指数退避）
- ❌ **坑点 3**：不评估 Agent 效果，盲目优化
  - ✅ **解决**：先建立评估 baseline（任务成功率、平均步数），再针对性优化
- ❌ **坑点 4**：忽略 Agent 的"拒绝回答"能力，导致幻觉或危险操作
  - ✅ **解决**：设计明确的边界条件，Agent 无法处理时主动转人工或拒绝

---

## 参考资源
- [agent-service-toolkit 官方文档](https://github.com/JoshuaC215/agent-service-toolkit)
- [microsoft/ai-agents-for-beginners](https://github.com/microsoft/ai-agents-for-beginners)
- [browser-use 官方文档](https://github.com/browser-use/browser-use)
