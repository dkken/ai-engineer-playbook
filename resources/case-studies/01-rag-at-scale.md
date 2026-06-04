# 案例：Perplexity 的 RAG at Scale

> **来源**：Perplexity 官方研究博客 (research.perplexity.ai)、Vespa.ai 技术文档、HowWorks.ai 架构分析、ZipTie.dev 技术文档
> **公司**：Perplexity（AI 搜索引擎，2025年9月估值 $20B，月活用户 1亿+）
> **场景**：大规模实时检索增强生成
> **技术栈**：自研 RAG 架构、Vespa AI、多模型路由、pplx-embed 系列

---

## 背景

Perplexity 是 2022 年 8 月成立的 AI 搜索引擎，核心差异化是"每条回答都带引用来源"。截至 2025 年 9 月，估值达 $20B，月活用户超过 1 亿，每月处理约 7.8 亿次查询，月增长率约 20%。

**业务指标**（来源：Vespa.ai 公开数据、HowWorks.ai 分析）：
- 月查询量：约 7.8 亿次（2025年5月数据）
- 索引规模：数千亿网页，追踪超过 2000 亿唯一 URL
- 热存储：超过 400PB
- 响应延迟：P95 < 2秒
- 月增长率：约 20%

---

## 需求

1. **实时性**：回答必须基于最新信息（不能只用训练数据）
2. **准确性**：每个事实都必须有来源引用
3. **可扩展性**：支持每月 7.8 亿次查询且持续增长
4. **成本可控**：单次查询成本需控制在合理范围
5. **模型无关**：不依赖单一 LLM 供应商

---

## 架构

### 核心设计决策

**1. 五阶段 RAG 流水线**

Perplexity 的核心架构是明确的五阶段流水线（来源：HowWorks.ai 基于 Perplexity 官方文档和 KDD 2024 学术论文的分析）：

```
用户查询 → 查询理解 → 混合检索 → 重排序 → 多模型生成 → 引用标注
```

**2. 检索引擎：Vespa AI**

Perplexity 的检索能力由 Vespa AI 提供支持（来源：Vespa.ai 官方博客）。Vespa 将以下技术集成于统一引擎：
- 向量搜索（语义理解）
- 词法搜索（关键词精度，BM25）
- 结构化过滤
- 机器学习排序

**3. 自研 Embedding 模型**

2025 年 2 月，Perplexity 发布了自研 embedding 模型系列（来源：research.perplexity.ai）：
- **pplx-embed-v1**：标准稠密模型（0.6B / 4B 参数）
- **pplx-embed-context-v1**：上下文感知模型（0.6B / 4B 参数）

技术细节：
- 基于 Qwen3 基础模型
- 通过扩散预训练将因果解码器转换为双向编码器
- 上下文感知变体在 ConTEB 基准上达到 81.96% nDCG@10
- MIT 许可证，Hugging Face 开源权重

**4. 多模型路由**

Perplexity 采用"模型无关"策略（来源：HowWorks.ai）：
- 自研 Sonar 系列模型处理简单查询
- GPT-5、Claude Opus 等外部模型处理复杂查询
- 智能分类器判断查询复杂度，路由到最合适的模型
- 策略："使用最小但能提供最佳体验的模型"

### 技术栈

| 组件 | 技术 | 说明 |
|------|------|------|
| 检索引擎 | Vespa AI | 混合检索（向量+关键词+结构化过滤） |
| Embedding | pplx-embed 系列 | 自研，基于 Qwen3，MIT 许可证 |
| 查询理解 | 自研 + 多模型 | 意图分类、时效性判断 |
| 重排序 | 多层 ML 模型 | 多阶段过滤 |
| 答案生成 | Sonar / GPT / Claude | 多模型动态路由 |
| 引用标注 | 自研 | 句子级来源匹配 |

---

## 挑战与解决方案

### 挑战 1：检索质量是核心壁垒

**问题**：AI 搜索产品最难的不是模型，而是检索。模型质量已商品化，检索质量才是护城河。

**解决方案**：
- Perplexity 在检索和重排序阶段投入 disproportionately（来源：HowWorks.ai）
- 索引规模覆盖数千亿网页
- 实时更新：每秒处理数万个索引更新
- 自研 embedding 模型控制语义相关性的定义

### 挑战 2：上下文丢失问题

**问题**：传统分块导致上下文丢失，"it"指代不明。

**解决方案**：
- pplx-embed-context-v1 在嵌入时"看到"整个文档
- 每个 chunk 的向量编码局部内容和周围文本的关系
- 在 embedding 阶段修复上下文丢失，而非依赖后处理

### 挑战 3：成本与质量的平衡

**问题**：LLM 调用成本高，无法对所有查询使用最强模型。

**解决方案**：
- 多模型路由：简单查询用轻量模型，复杂查询用高端模型
- 缓存策略：常见查询结果缓存
- 自研模型降低对第三方 API 的依赖

---

## 面试要点

### 面试官考察维度

1. **检索架构设计**
   - 如何设计支持每月 7.8 亿次查询的检索系统？
   - 混合检索（BM25 + 向量）如何融合？
   - 自研 embedding 模型的价值是什么？

2. **RAG 流水线优化**
   - 五阶段流水线中，哪个阶段对质量影响最大？
   - 如何评估检索质量？
   - 上下文感知 embedding 如何解决传统分块的问题？

3. **成本与扩展性**
   - 多模型路由的策略设计？
   - 如何平衡实时性和成本？
   - 索引更新的策略？

### 参考追问

- "Perplexity 为什么选择 Vespa 而不是 Elasticsearch + 向量数据库的组合？"
- "上下文感知 embedding 的训练成本如何？是否值得？"
- "如果让你设计一个支持 10 亿网页的 RAG 系统，你会怎么设计索引架构？"

---

## 参考资源

- [Perplexity 官方研究博客](https://research.perplexity.ai/) — pplx-embed 论文（2026年2月26日）
- [Vespa.ai 官方博客](https://blog.vespa.ai/) — Perplexity 使用 Vespa 的技术细节
- [HowWorks.ai: How to Build an App Like Perplexity](https://howworks.ai/blog/how-to-build-an-app-like-perplexity) — 架构深度分析（2026年3月）
- [ZipTie.dev: Perplexity Pipeline](https://ziptie.dev/) — 六阶段流水线技术文档
- [KDD 2024: GEO: Generative Engine Optimization](https://dl.acm.org/doi/10.1145/3637528.3671613) — 学术论文

---

> 数据来源：Perplexity 官方研究博客、Vespa.ai 技术文档、HowWorks.ai 架构分析、ZipTie.dev 技术文档
> 
> 诚实标注：Perplexity 估值 $20B 为 2025 年 9 月公开报道，具体业务指标（如日查询量）为基于公开信息的估算
