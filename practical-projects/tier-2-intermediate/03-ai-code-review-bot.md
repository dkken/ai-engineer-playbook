# 项目：基于 agent-service-toolkit + SonarQube 构建 AI 代码审查机器人

> **市场依据**：CI/CD 提及率 29.2%，工程化能力需求高
> **预计时长**：4-8 小时
> **难度**：Tier-2（进阶能力）

---

## 市场需求背景

根据 [ai-engineering-field-guide](https://github.com/alexeygrigorev/ai-engineering-field-guide) 对 2,445 份 JD 的分析：
- **CI/CD 是工程化核心技能**：29.2% 的岗位提及
- **AI 代码审查是新兴场景**：结合 AI 和工程化能力
- **国内趋势**：企业从"人工审查"转向"AI 辅助审查"

国内趋势（腾讯研究院 2026）：
- 企业代码审查效率需要提升
- AI 代码审查成为工程化新方向
- 相关岗位薪资溢价达 20%

---

## 能力目标

完成本项目后，你将具备：
- 基于开源 Agent 框架和代码分析工具做工程化改造的能力
- AI 代码审查系统部署、配置、扩展的实践经验
- 生产环境 AI 代码审查系统的运维能力

## 适合考察的能力

- Agent 架构设计
- 代码分析集成
- GitHub API 使用
- 自动化流程设计

---

## 基础开源项目

| 项目 | Stars | 技术栈 | 特点 | 许可证 |
|------|-------|--------|------|--------|
| [agent-service-toolkit](https://github.com/JoshuaC215/agent-service-toolkit) | 4.3k | Python, FastAPI, Streamlit | 完整的 Agent 服务框架 | MIT |
| [SonarQube](https://www.sonarqube.org/) | - | Java | 代码质量分析 | LGPL |

**辅助工具**：
| 工具 | Stars | 用途 |
|------|-------|------|
| GitHub API | - | PR 评论、Webhook |

---

## 工程化改造任务

### 任务 1：部署与配置（1 小时）
- 使用 Docker 部署 agent-service-toolkit 和 SonarQube
- 配置本地 LLM（Ollama）替代默认 API
- 配置 GitHub API 和 Webhook

### 任务 2：功能扩展（2 小时）
- 集成 SonarQube 进行代码质量分析
- 实现 PR 自动评论
- 添加代码审查规则配置
- 实现审查结果统计

### 任务 3：评估与优化（2 小时）
- 设计评估指标（审查准确率、误报率、漏报率）
- 对比不同审查策略的效果
- 优化审查效率

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

### 维度 1：Agent 和代码分析集成能力
- 考察点：为什么选择 agent-service-toolkit + SonarQube？
- 追问示例：
  - "SonarQube 的规则集（Quality Profile）如何配置才能减少误报？你自定义了哪些规则？"
  - "如果审查的是 Python 代码，SonarQube 的默认规则对类型提示（Type Hints）支持如何？有哪些盲区？"
  - "Agent 的 Prompt 如何设计才能让它理解 SonarQube 的输出格式？你如何处理 SonarQube 的 JSON 报告？"

### 维度 2：GitHub API 和自动化流程
- 考察点：如何设计自动化代码审查流程？
- 追问示例：
  - "GitHub Webhook 的 Payload 中，哪些字段是你最关心的？如何验证 Webhook 的签名（X-Hub-Signature-256）？"
  - "PR 评论的格式如何设计才能既清晰又不冗长？你用了 Markdown 表格还是折叠块（details/summary）？"
  - "如果审查任务耗时较长（如分析大型代码库），如何避免 GitHub API 超时？是否考虑过异步处理 + 状态评论？"
  - "如何处理审查中的敏感信息泄露（如 API Key、密码）？SonarQube 的 Secret Detection 规则是否足够？"

### 维度 3：生产化思维
- 考察点：从"能跑"到"能生产"需要考虑什么？
- 追问示例：
  - "如果多个 PR 同时触发审查，你的服务如何限流？是否考虑过 GitHub App 的 Rate Limit（每小时 15,000 请求）？"
  - "审查结果的持久化存储如何设计？是用数据库还是直接存 GitHub Comment？各自的优缺点是什么？"
  - "如何衡量代码审查 Bot 的效果？误报率（False Positive Rate）和漏报率（False Negative Rate）如何统计？"

> 【企业用户】登录评估平台查看详细追问示例

---

## 常见坑点
- ❌ **坑点 1**：直接用默认配置部署，不配置本地模型，导致 API 费用过高
  - ✅ **解决**：配置 Ollama 本地 LLM
- ❌ **坑点 2**：忽略 SonarQube 的规则配置，导致误报率高
  - ✅ **解决**：自定义 SonarQube Quality Profile，禁用高误报规则（如 "Methods should not have too many parameters"），启用 Secret Detection 和 SQL Injection 规则
- ❌ **坑点 3**：不评估审查效果，盲目优化
  - ✅ **解决**：先建立评估 baseline，再针对性优化
- ❌ **坑点 4**：GitHub Webhook 未验证签名，存在安全风险
  - ✅ **解决**：使用 `X-Hub-Signature-256` Header 验证 Payload，拒绝未签名的请求

---

## 参考资源
- [agent-service-toolkit 官方文档](https://github.com/JoshuaC215/agent-service-toolkit)
- [SonarQube 官方文档](https://www.sonarqube.org/)
- [GitHub API 文档](https://docs.github.com/en/rest)
