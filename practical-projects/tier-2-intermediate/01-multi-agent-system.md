# 项目：基于 open-multi-agent 构建多 Agent 协作系统

> **市场依据**：Agents 需求增长，多 Agent 是高级场景
> **预计时长**：4-8 小时
> **难度**：Tier-2（进阶能力）

---

## 市场需求背景

根据 [ai-engineering-field-guide](https://github.com/alexeygrigorev/ai-engineering-field-guide) 对 2,445 份 JD 的分析：
- **Agents 是增长最快的技能**：提及率 14.4%，增长率 +188%
- **多 Agent 系统是高级场景**：复杂任务需要多个 Agent 协作
- **国内趋势**：企业从"单 Agent"转向"多 Agent 协作"

国内趋势（腾讯研究院 2026）：
- 企业复杂任务需要多个 Agent 协作
- 多 Agent 系统成为 AI 应用的高级形态
- 相关岗位薪资溢价达 30%

---

## 能力目标

完成本项目后，你将具备：
- 基于开源多 Agent 框架做工程化改造的能力
- 多 Agent 系统部署、配置、扩展的实践经验
- 生产环境多 Agent 系统的运维能力

## 适合考察的能力

- 多 Agent 架构设计
- Agent 通信协议
- 任务分配和冲突解决
- 系统评估与优化

---

## 基础开源项目

| 项目 | Stars | 技术栈 | 特点 | 许可证 |
|------|-------|--------|------|--------|
| [open-multi-agent](https://github.com/open-multi-agent/open-multi-agent) | 6.3k+ | TypeScript | 多 Agent 编排框架 | MIT |

**辅助工具**：
| 工具 | Stars | 用途 |
|------|-------|------|
| [hermes-agent](https://github.com/NousResearch/hermes-agent) | 176k+ | 自我进化型 Agent |
| [microsoft/ai-agents-for-beginners](https://github.com/microsoft/ai-agents-for-beginners) | - | 多 Agent 设计模式 |

---

## 工程化改造任务

### 任务 1：部署与配置（1 小时）
- 使用 Docker 部署 open-multi-agent
- 配置本地 LLM（Ollama）替代默认 API
- 配置多个 Agent（规划、执行、评估）

### 任务 2：功能扩展（2 小时）
- 实现 Agent 通信协议
- 实现任务分配和冲突解决
- 添加 Agent 状态跟踪和日志记录
- 实现错误处理和重试机制

### 任务 3：评估与优化（2 小时）
- 设计评估指标（任务完成率、协作效率、冲突解决率）
- 对比不同多 Agent 策略的效果
- 优化 Agent 协作效率

### 任务 4：生产化改造（1 小时）
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

### 维度 1：多 Agent 架构设计能力（权重 40%）
- **考察点**：为什么选择 open-multi-agent 而不是 AutoGen/CrewAI？
- **追问示例**：
  - "open-multi-agent 的 TypeScript 架构和 AutoGen 的 Python 架构，各适合什么团队？"
  - "多 Agent 系统中，Orchestrator 模式（中央调度）和 P2P 模式（去中心化）各有什么优缺点？"
  - "如果 3 个 Agent 对同一个任务的结论不一致，怎么仲裁？（投票、置信度、人工介入）"

### 维度 2：通信与协调机制（权重 35%）
- **考察点**：Agent 之间如何通信和协调？
- **追问示例**：
  - "Agent A 需要等待 Agent B 的结果才能继续，但 B 超时了，A 应该怎么做？"
  - "多 Agent 的通信日志量很大，怎么存储和查询？（结构化日志、追踪 ID）"
  - "两个 Agent 同时修改同一个资源，怎么避免竞态条件？"

### 维度 3：可观测性与调试（权重 25%）
- **考察点**：多 Agent 系统出问题怎么定位？
- **追问示例**：
  - "用户投诉回答质量差，有 5 个 Agent 参与了生成，怎么定位是哪个 Agent 的问题？"
  - "多 Agent 的调用链追踪，需要记录哪些信息？（Agent ID、输入输出、耗时、决策理由）"
  - "怎么可视化多 Agent 的协作过程？（LangGraph 图、时序图）"

---

## 常见坑点
- ❌ **坑点 1**：直接用默认配置部署，不配置本地模型，导致 API 费用过高
  - ✅ **解决**：配置 Ollama 本地 LLM（如 Qwen2.5、Llama3）
- ❌ **坑点 2**：忽略 Agent 通信的错误处理，导致系统崩溃
  - ✅ **解决**：添加 Agent 通信错误处理和重试机制（指数退避 + 熔断）
- ❌ **坑点 3**：不评估多 Agent 效果，盲目优化
  - ✅ **解决**：先建立评估 baseline（任务成功率、协作效率、总耗时），再针对性优化
- ❌ **坑点 4**：Agent 职责边界模糊，导致重复工作或互相推诿
  - ✅ **解决**：明确定义每个 Agent 的输入、输出、职责范围，用契约测试验证

---

## 参考资源
- [open-multi-agent 官方文档](https://github.com/open-multi-agent/open-multi-agent)
- [hermes-agent 官方文档](https://github.com/NousResearch/hermes-agent)
- [microsoft/ai-agents-for-beginners](https://github.com/microsoft/ai-agents-for-beginners)
