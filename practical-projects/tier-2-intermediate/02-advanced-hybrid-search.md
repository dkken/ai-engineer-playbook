# 项目：基于 qmd + Weaviate 构建高级混合检索系统

> **市场依据**：向量数据库提及率 10.8%，检索质量是 RAG 核心
> **预计时长**：4-8 小时
> **难度**：Tier-2（进阶能力）

---

## 市场需求背景

根据 [ai-engineering-field-guide](https://github.com/alexeygrigorev/ai-engineering-field-guide) 对 2,445 份 JD 的分析：
- **向量数据库需求旺盛**：10.8% 的岗位提及
- **检索质量是 RAG 核心**：Hybrid Search 是高级 RAG 场景
- **国内趋势**：企业从"简单 RAG"转向"高级 RAG"

国内趋势（腾讯研究院 2026）：
- 企业 RAG 系统需要更高检索质量
- Hybrid Search 成为高级 RAG 的标配
- 相关岗位薪资溢价达 20%

---

## 能力目标

完成本项目后，你将具备：
- 基于开源混合检索框架做工程化改造的能力
- 混合检索系统部署、配置、扩展的实践经验
- 生产环境混合检索系统的运维能力

## 适合考察的能力

- 混合检索算法设计
- 重排序策略
- 性能优化
- 系统评估与优化

---

## 基础开源项目

| 项目 | Stars | 技术栈 | 特点 | 许可证 |
|------|-------|--------|------|--------|
| [qmd](https://github.com/tobi/qmd) | 26k+ | Python | BM25 + 向量语义搜索 | MIT |
| [Weaviate](https://github.com/weaviate/weaviate) | 16.3k+ | Go | 云原生向量数据库 | BSD-3 |

**辅助工具**：
| 工具 | Stars | 用途 |
|------|-------|------|
| [chonkie](https://github.com/chonkie-inc/chonkie) | 4.1k+ | 高级分块策略 |

---

## 工程化改造任务

### 任务 1：部署与配置（1 小时）
- 使用 Docker 部署 qmd 和 Weaviate
- 配置本地 Embedding 模型（Ollama）替代默认 API
- 配置混合检索策略（BM25 + 向量）

### 任务 2：功能扩展（2 小时）
- 实现重排序（ReRanking）
- 实现查询改写（Query Rewriting）
- 添加检索结果过滤
- 实现多路召回

### 任务 3：评估与优化（2 小时）
- 设计评估指标（NDCG、MRR、Recall@K）
- 对比不同检索策略的效果
- 优化检索性能

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

### 维度 1：混合检索算法设计能力
- 考察点：为什么选择 qmd + Weaviate？
- 追问示例：
  - "qmd 的 BM25 实现与 Elasticsearch 的 BM25 有何差异？在什么场景下 qmd 更轻量？"
  - "Weaviate 的 HNSW 索引参数（ef、maxConnections）如何影响召回率和延迟？"
  - "如果数据量增长到千万级，BM25 + 向量混合检索的性能瓶颈会在哪里？"

### 维度 2：重排序和查询改写
- 考察点：如何设计重排序策略？
- 追问示例：
  - "你提到重排序模型，是用 Cross-Encoder 还是 Cohere Rerank？各自的优缺点是什么？"
  - "HyDE（假设文档嵌入）在你的场景中是否适用？如果用户查询很简短，HyDE 可能带来什么负面影响？"
  - "查询改写（Query Expansion）和查询重写（Query Rewriting）的区别是什么？你用了哪种？"
  - "多路召回后，如何设计融合策略？RRF（Reciprocal Rank Fusion）和加权分数融合的适用场景有何不同？"

### 维度 3：生产化思维
- 考察点：从"能跑"到"能生产"需要考虑什么？
- 追问示例：
  - "如果 Embedding 模型需要更新（如从 text-embedding-3-small 升级到 text-embedding-3-large），如何设计零停机迁移？"
  - "你的混合检索系统如何支持 A/B 测试？如何量化新检索策略对业务指标的提升？"
  - "在成本控制方面，向量数据库的内存占用如何优化？是否考虑过量化（Product Quantization）或降维？"

> 【企业用户】登录评估平台查看详细追问示例

---

## 常见坑点
- ❌ **坑点 1**：直接用默认配置部署，不配置本地模型，导致 API 费用过高
  - ✅ **解决**：配置 Ollama 本地 Embedding 模型
- ❌ **坑点 2**：忽略重排序，导致检索质量不高
  - ✅ **解决**：实现重排序策略（Cross-Encoder 或 Cohere Rerank）
- ❌ **坑点 3**：不评估检索效果，盲目优化
  - ✅ **解决**：先建立评估 baseline，再针对性优化
- ❌ **坑点 4**：Embedding 模型与向量数据库的维度不匹配
  - ✅ **解决**：在创建 Weaviate Collection 时显式指定 vectorizer 维度，与 Embedding 模型输出维度一致（如 text-embedding-3-small 为 1536 维）

---

## 参考资源
- [qmd 官方文档](https://github.com/tobi/qmd)
- [Weaviate 官方文档](https://github.com/weaviate/weaviate)
- [chonkie 官方文档](https://github.com/chonkie-inc/chonkie)
