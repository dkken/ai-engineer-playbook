# Awesome AI Engineering（中文版）

> **精选资源**：为 AI 工程师面试准备而筛选的高质量资源，翻译自原版并本土化。
>
> **筛选标准**：
> - 与 AI 工程直接相关（非纯算法/研究）
> - 有实际应用价值（非纯理论）
> - 开源或免费（降低学习成本）
> - 社区活跃（持续更新）

---

## 目录

- [学习资源](#学习资源)
- [开源项目](#开源项目)
- [工具与框架](#工具与框架)
- [数据集与基准](#数据集与基准)
- [面试准备](#面试准备)
- [社区与会议](#社区与会议)

---

## 学习资源

### 在线课程

| 课程 | 平台 | 语言 | 难度 | 说明 |
|------|------|------|------|------|
| [AI Engineering Bootcamp](https://github.com/alexeygrigorev/ai-engineering-field-guide) | GitHub | 英文 | 中级 | 本指南的原始版本，基于 2,445 份 JD 分析 |
| [LLM University](https://docs.cohere.com/docs/llmu) | Cohere | 英文 | 初级 | LLM 基础，适合入门 |
| [Building LLM Applications](https://www.deeplearning.ai/short-courses/building-llm-apps/) | DeepLearning.AI | 英文 | 中级 | 吴恩达系列，实践导向 |
| [LangChain 官方教程](https://python.langchain.com/docs/tutorials/) | LangChain | 英文 | 中级 | 官方最佳实践 |
| [向量数据库实战](https://www.milvus.io/bootcamp) | Milvus | 中英 | 中级 | 向量检索实践 |

### 书籍

| 书名 | 作者 | 语言 | 难度 | 说明 |
|------|------|------|------|------|
| [Building LLM Apps](https://www.manning.com/books/building-llm-apps) | Valentina Alto | 英文 | 中级 | LLM 应用开发 |
| [AI Engineering](https://www.oreilly.com/library/view/ai-engineering/9781098166298/) | Chip Huyen | 英文 | 高级 | 生产级 AI 系统 |
| [Designing Machine Learning Systems](https://www.oreilly.com/library/view/designing-machine-learning-systems/9781098107956/) | Chip Huyen | 英文 | 高级 | ML 系统设计 |
| [大模型应用开发实战](https://book.douban.com/subject/36664949/) | 张俊林等 | 中文 | 中级 | 国内实践案例 |

### 博客与文章

| 博客 | 作者 | 语言 | 特点 |
|------|------|------|------|
| [Lil'Log](https://lilianweng.github.io/) | Lilian Weng | 英文 | OpenAI 研究，深度技术 |
| [Chip Huyen's Blog](https://huyenchip.com/blog/) | Chip Huyen | 英文 | 工程实践，系统设计 |
| [Eugene Yan](https://eugeneyan.com/writing/) | Eugene Yan | 英文 | ML 工程，实用建议 |
| [张俊林的博客](https://spaces.ac.cn/) | 张俊林 | 中文 | 中文 NLP，技术深度 |
| [李沐的论文精读](https://space.bilibili.com/1567748478) | 李沐 | 中文 | 视频，论文解读 |

---

## 开源项目

### RAG 框架

| 项目 | Stars | 语言 | 特点 | 许可证 |
|------|-------|------|------|--------|
| [LangChain](https://github.com/langchain-ai/langchain) | 98k+ | Python/JS | 生态最丰富 | MIT |
| [LlamaIndex](https://github.com/run-llama/llama_index) | 38k+ | Python | 数据连接能力强 | MIT |
| [Haystack](https://github.com/deepset-ai/haystack) | 18k+ | Python | 企业级，Pipeline 设计 | Apache-2.0 |
| [RAGFlow](https://github.com/infiniflow/ragflow) | 32k+ | Python | 深度文档理解 | Apache-2.0 |
| [Cognita](https://github.com/truefoundry/cognita) | 6k+ | Python | 模块化 RAG | Apache-2.0 |

### Agent 框架

| 项目 | Stars | 语言 | 特点 | 许可证 |
|------|-------|------|------|--------|
| [LangGraph](https://github.com/langchain-ai/langgraph) | 10k+ | Python | 状态机，可视化 | MIT |
| [CrewAI](https://github.com/joaomdmoura/crewAI) | 26k+ | Python | 多 Agent 协作 | MIT |
| [AutoGen](https://github.com/microsoft/autogen) | 35k+ | Python | 微软出品，对话模型 | MIT |
| [SmolAgents](https://github.com/huggingface/smolagents) | 18k+ | Python | 极简设计 | MIT |
| [AstrBot](https://github.com/AstrBotDevs/AstrBot) | 33.5k+ | Python | 多平台机器人 | AGPL-3.0 |

### 向量数据库

| 项目 | Stars | 语言 | 特点 | 许可证 |
|------|-------|------|------|--------|
| [Milvus](https://github.com/milvus-io/milvus) | 32k+ | Go | 分布式，十亿级 | Apache-2.0 |
| [Weaviate](https://github.com/weaviate/weaviate) | 16k+ | Go | 混合检索 | BSD-3 |
| [Qdrant](https://github.com/qdrant/qdrant) | 21k+ | Rust | 高性能 | Apache-2.0 |
| [Chroma](https://github.com/chroma-core/chroma) | 16k+ | Python | 易上手 | Apache-2.0 |
| [pgvector](https://github.com/pgvector/pgvector) | 14k+ | C | PostgreSQL 扩展 | PostgreSQL |

### 评估框架

| 项目 | Stars | 语言 | 特点 | 许可证 |
|------|-------|------|------|--------|
| [Ragas](https://github.com/explodinggradients/ragas) | 8k+ | Python | RAG 评估 | Apache-2.0 |
| [DeepEval](https://github.com/confident-ai/deepeval) | 6k+ | Python | 50+ 指标 | Apache-2.0 |
| [Opik](https://github.com/comet-ml/opik) | 19k+ | Python | 可观测+评估 | Apache-2.0 |
| [Giskard](https://github.com/Giskard-AI/giskard) | 5k+ | Python | 安全评估 | Apache-2.0 |
| [Promptflow](https://github.com/microsoft/promptflow) | 38k+ | Python | Prompt 工程 | MIT |

### 可观测性

| 项目 | Stars | 语言 | 特点 | 许可证 |
|------|-------|------|------|--------|
| [Opik](https://github.com/comet-ml/opik) | 19k+ | Python | LLM 可观测性 | Apache-2.0 |
| [LangSmith](https://smith.langchain.com/) | - | SaaS | LangChain 官方 | 商业 |
| [Phoenix](https://github.com/Arize-ai/phoenix) | 5k+ | Python | Arize 出品 | Apache-2.0 |
| [Helicone](https://github.com/Helicone/helicone) | 3k+ | TypeScript | 成本追踪 | Apache-2.0 |

---

## 工具与框架

### 开发工具

| 工具 | 用途 | 特点 |
|------|------|------|
| [Ollama](https://ollama.com/) | 本地 LLM | 一键部署，多模型支持 |
| [LiteLLM](https://github.com/BerriAI/litellm) | LLM 路由 | 统一 API，多供应商 |
| [vLLM](https://github.com/vllm-project/vllm) | LLM 推理 | 高性能，PagedAttention |
| [Text Generation Inference](https://github.com/huggingface/text-generation-inference) | LLM 推理 | Hugging Face 出品 |
| [Open WebUI](https://github.com/open-webui/open-webui) | LLM UI | 开源 ChatGPT 界面 |

### 数据工具

| 工具 | 用途 | 特点 |
|------|------|------|
| [Unstructured](https://github.com/Unstructured-IO/unstructured) | 文档解析 | 支持多种格式 |
| [Marker](https://github.com/VikParuchuri/marker) | PDF 转 Markdown | 高精度 |
| [Docling](https://github.com/DS4SD/docling) | 文档解析 | IBM 出品 |
| [MinerU](https://github.com/opendatalab/MinerU) | PDF 解析 | 中文优化 |

### 部署工具

| 工具 | 用途 | 特点 |
|------|------|------|
| [BentoML](https://github.com/bentoml/BentoML) | 模型服务 | 统一部署框架 |
| [Triton Inference Server](https://github.com/triton-inference-server/server) | 模型推理 | NVIDIA 出品 |
| [Seldon](https://github.com/SeldonIO/seldon-core) | MLOps | Kubernetes 原生 |
| [Kserve](https://github.com/kserve/kserve) | 模型服务 | Kubernetes 原生 |

---

## 数据集与基准

### 评估基准

| 基准 | 用途 | 说明 |
|------|------|------|
| [MTEB](https://huggingface.co/spaces/mteb/leaderboard) | Embedding 评估 | 多任务基准 |
| [RAGAS](https://docs.ragas.io/) | RAG 评估 | RAG 专用指标 |
| [HELM](https://crfm.stanford.edu/helm/) | LLM 评估 | 斯坦福出品 |
| [Open LLM Leaderboard](https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard) | LLM 排名 | Hugging Face |

### 数据集

| 数据集 | 用途 | 说明 |
|--------|------|------|
| [Natural Questions](https://ai.google.com/research/NaturalQuestions) | 问答 | Google 出品 |
| [MS MARCO](https://microsoft.github.io/msmarco/) | 检索 | 微软出品 |
| [HotpotQA](https://hotpotqa.github.io/) | 多跳问答 | 需要推理 |
| [TriviaQA](http://nlp.cs.washington.edu/triviaqa/) | 问答 | 大规模 |

---

## 面试准备

### 面试资源

| 资源 | 类型 | 说明 |
|------|------|------|
| [本指南 interview-patterns](../../interview-patterns/) | 面试模式 | 6 大面试模式详解 |
| [本指南 practical-projects](../../practical-projects/) | 实战项目 | 11 个实战项目 |
| [本指南 skill-assessment](../../skill-assessment/) | 能力评估 | 自测问卷和差距分析 |
| [System Design Primer](https://github.com/donnemartin/system-design-primer) | 系统设计 | 经典系统设计 |
| [Coding Interview University](https://github.com/jwasham/coding-interview-university) | 算法 | 算法面试准备 |

### 模拟面试

| 平台 | 特点 | 费用 |
|------|------|------|
| [Pramp](https://www.pramp.com/) | 免费配对 | 免费 |
| [Interviewing.io](https://interviewing.io/) | 匿名面试 | 付费 |
| [Exponent](https://www.tryexponent.com/) | 产品/技术 | 付费 |

---

## 社区与会议

### 中文社区

| 社区 | 平台 | 特点 |
|------|------|------|
| [AI 工程实战](https://github.com/alexeygrigorev/ai-engineering-field-guide) | GitHub | 本指南原始版本 |
| [Hugging Face 中文社区](https://huggingface.co/spaces) | Hugging Face | 模型分享 |
| [LangChain 中文文档](https://python.langchain.com.cn/) | 文档 | 中文翻译 |
| [机器之心](https://www.jiqizhixin.com/) | 媒体 | AI 资讯 |
| [InfoQ AI](https://www.infoq.cn/topic/AI) | 媒体 | 技术文章 |

### 国际会议

| 会议 | 类型 | 说明 |
|------|------|------|
| [NeurIPS](https://nips.cc/) | 学术 | 顶级 ML 会议 |
| [ICML](https://icml.cc/) | 学术 | 顶级 ML 会议 |
| [ACL](https://www.aclweb.org/) | 学术 | 顶级 NLP 会议 |
| [MLOps World](https://mlopsworld.com/) | 工业 | MLOps 实践 |
| [AI Engineer Summit](https://www.ai.engineer/) | 工业 | AI 工程 |

---

## 贡献

欢迎提交优质资源！请确保：

- [ ] 资源与 AI 工程直接相关
- [ ] 有实际应用价值
- [ ] 开源或免费
- [ ] 社区活跃

---
