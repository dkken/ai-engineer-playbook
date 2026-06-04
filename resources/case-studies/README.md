# 生产案例库

> **真实场景**：来自一线大厂和创业公司的生产级 AI 系统案例，用于面试准备和架构学习。
>
> **使用说明**：每个案例包含背景、架构、挑战、解决方案和面试要点。建议结合 [interview-patterns](../interview-patterns/) 使用。

---

## 案例导航

| 案例 | 公司类型 | 技术栈 | 核心挑战 | 难度 |
|------|----------|--------|----------|------|
| [01-rag-at-scale](01-rag-at-scale.md) | AI搜索引擎 | 自研RAG, Elasticsearch, 多模型集成 | 实时检索与引用生成 | 高级 |
| [02-multi-agent-platform](02-multi-agent-platform.md) | 医疗科技 | LangGraph, FastAPI, Redis | 多Agent协作与医疗合规 | 高级 |
| [03-ai-code-review](03-ai-code-review.md) | 代码平台 | OpenAI Codex, Tree-sitter, GitHub Actions | 实时代码生成与补全 | 中级 |
| [04-real-time-data-pipeline](04-real-time-data-pipeline.md) | 流媒体 | Kafka, Flink, Spark, 自研ML平台 | 实时推荐与特征工程 | 高级 |
| [05-knowledge-graph-rag](05-knowledge-graph-rag.md) | 社交平台 | 自研图谱, Elasticsearch, Neo4j | 职业搜索与人才推荐 | 高级 |

---

## 案例结构

每个案例包含以下部分：

1. **背景**：公司业务、团队规模、技术栈
2. **需求**：业务需求、技术需求、约束条件
3. **架构**：系统架构图、技术选型、数据流
4. **挑战**：遇到的核心问题
5. **解决方案**：如何解决问题
6. **结果**：量化指标、业务价值
7. **面试要点**：面试官可能追问的问题
8. **参考资源**：相关论文、博客、开源项目

---

## 使用建议

### 面试准备

1. **阅读案例**：了解真实生产环境的复杂性
2. **模拟追问**：用 [interview-patterns/02-project-deep-dive.md](../interview-patterns/02-project-deep-dive.md) 的框架自我提问
3. **对比自己的项目**：找出差距，补充细节

### 架构学习

1. **分析架构图**：理解每个组件的职责
2. **思考替代方案**：如果是你，会怎么设计？
3. **关注 trade-off**：每个决策都有代价

---

## 贡献案例

欢迎提交真实案例！请确保：

- [ ] 案例来自真实项目（可匿名）
- [ ] 包含量化指标（性能、成本、效果）
- [ ] 有明确的架构图或描述
- [ ] 有面试要点
- [ ] 无敏感信息（如真实公司核心数据）

---
