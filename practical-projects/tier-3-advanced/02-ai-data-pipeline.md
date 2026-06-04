# 项目：基于 Pathway + ScrapeGraphAI 构建 AI 实时数据管道

> **市场依据**：数据管道是 AI 基础设施，AI-Support 岗位占 28.5%
> **预计时长**：1-2 天
> **难度**：Tier-3（高级能力）

---

## 市场需求背景

根据 [ai-engineering-field-guide](https://github.com/alexeygrigorev/ai-engineering-field-guide) 对 2,445 份 JD 的分析：
- **数据管道是 AI 基础设施**：28.5% 的 AI 岗位属于 AI-Support 类型，负责构建数据管道
- **实时处理需求增长**：企业从批处理转向实时流处理，要求数据管道支持增量更新
- **AI 驱动数据抓取**：传统爬虫维护成本高，AI 驱动抓取成为趋势

国内趋势（腾讯研究院 2026）：
- 企业数据量爆发，实时 ETL 需求强烈
- AI 数据管道工程师岗位增长 200%
- 相关岗位薪资溢价达 35%

---

## 能力目标

完成本项目后，你将具备：
- 基于开源实时数据处理框架做工程化改造的能力
- AI 驱动数据抓取、清洗、存储的实践经验
- 实时数据管道的设计与实现能力
- 生产环境数据管道的运维能力

## 适合考察的能力

- 实时数据管道设计
- AI 驱动数据抓取
- 数据清洗与转换
- 流处理与增量计算
- 数据质量监控

---

## 基础开源项目

| 项目 | Stars | 技术栈 | 特点 | 许可证 |
|------|-------|--------|------|--------|
| [pathway](https://github.com/pathwaycom/pathway) | 63k+ | Python, Rust | 实时 ETL 框架，统一批处理和流处理，Rust 引擎 | BSL-1.1 |
| [ScrapeGraphAI](https://github.com/ScrapeGraphAI/Scrapegraph-ai) | 26.7k+ | Python | AI 驱动数据抓取，自然语言描述提取需求 | MIT |

**辅助工具**：
| 工具 | Stars | 用途 |
|------|-------|------|
| [browser-use](https://github.com/browser-use/browser-use) | 96k+ | 浏览器自动化，辅助数据采集 |
| [Neo4j](https://github.com/neo4j/neo4j) | 13k+ | 图数据库，存储关联数据 |

### 为什么选择 Pathway？

Pathway 是 2026 年实时数据处理领域的标杆开源项目，核心差异化能力：

1. **统一批流处理**：同一套代码同时支持批处理和流处理，无需维护两套逻辑
2. **Rust 引擎**：底层使用 Rust 实现，性能远超纯 Python 方案（60,000+ 消息/秒）
3. **增量计算**：基于 Differential Dataflow，只处理变化的数据，而非全量重算
4. **LLM 原生支持**：内置 LLM Extension Pack，支持 RAG、文档解析、向量索引
5. **300+ 数据源**：内置连接器支持 Kafka、S3、SharePoint、Salesforce 等
6. **实时 RAG**：文档变更自动触发重新索引，无需手动触发

**与其他数据管道方案对比**：

| 特性 | Pathway | Apache Airflow | Spark Streaming | Kafka Streams |
|------|---------|---------------|-----------------|---------------|
| 统一批流 | ✅ 同一套代码 | ❌ 批流分离 | ❌ 不同 API | ❌ 仅流处理 |
| 增量计算 | ✅ Differential | ❌ 全量重算 | ❌ 微批 | ❌ 逐条处理 |
| LLM 原生 | ✅ 内置支持 | ❌ 需集成 | ❌ 需集成 | ❌ 需集成 |
| Python API | ✅ 原生 | ✅ 原生 | ✅ PySpark | ❌ Java/Scala |
| 部署复杂度 | ✅ 单容器 | ❌ 多组件 | ❌ 集群 | ❌ 集群 |
| 实时 RAG | ✅ 自动索引 | ❌ 手动触发 | ❌ 手动触发 | ❌ 手动触发 |

### 为什么选择 ScrapeGraphAI？

ScrapeGraphAI 是 2026 年 AI 驱动数据抓取领域的标杆开源项目，核心差异化能力：

1. **自然语言抓取**：用自然语言描述提取需求，无需编写 XPath/CSS 选择器
2. **自适应结构**：LLM 自动识别网页结构变化，减少维护成本
3. **多管道支持**：SmartScraper（单页）、SearchGraph（多页搜索）、OmniScraper（含图片）
4. **多模型支持**：OpenAI、Gemini、Claude、Ollama 本地模型
5. **多框架集成**：LangChain、LlamaIndex、CrewAI、n8n、Zapier

---

## 工程化改造任务

### 任务 1：部署与配置（2 小时）
- 使用 Docker 部署 Pathway 环境
- 配置 ScrapeGraphAI 使用本地 LLM（Ollama）
- 配置数据源（文件系统/Web API）
- 配置数据目标（PostgreSQL/Neo4j）

### 任务 2：AI 数据抓取（4 小时）
- 使用 ScrapeGraphAI 实现智能数据抓取
- 配置多种抓取管道（单页、搜索、深度抓取）
- 实现反爬策略（请求频率控制、User-Agent 轮换）
- 添加数据验证和清洗
- 实现增量抓取（避免重复采集）

### 任务 3：实时数据处理（4 小时）
- 使用 Pathway 构建实时 ETL 管道
- 实现数据清洗和转换（去重、格式标准化）
- 配置增量计算（只处理变化数据）
- 实现数据质量监控（异常检测、缺失值处理）
- 添加数据血缘追踪

### 任务 4：存储与查询（2 小时）
- 配置 Pathway 输出到 PostgreSQL
- 实现实时数据同步
- 配置 REST API 查询端点
- 实现数据版本管理

### 任务 5：生产化改造（2 小时）
- 添加错误处理和日志记录
- 配置环境变量管理（不硬编码 API Key）
- 实现监控告警（数据延迟、错误率）
- 编写部署文档和 README

---

## 评估标准

| 维度 | 权重 | 评估要点 |
|------|------|----------|
| 部署能力 | 15% | 是否成功部署 Pathway + ScrapeGraphAI |
| 数据抓取 | 25% | 抓取准确性、覆盖率、反爬策略 |
| 实时处理 | 25% | ETL 管道稳定性、增量计算正确性 |
| 数据质量 | 15% | 清洗效果、异常检测、数据完整性 |
| 工程化 | 10% | 错误处理、配置管理、监控 |
| 文档 | 10% | 部署文档、架构说明 |

---

## 面试官考察维度

### 维度 1：数据管道架构设计能力
- 考察点：为什么选择 Pathway + ScrapeGraphAI 而不是 Airflow + Scrapy？
- 示例方向：
  - 统一批流处理 vs 分离架构的 trade-off
  - 增量计算 vs 全量重算的性能对比
  - AI 驱动抓取 vs 传统规则抓取的维护成本
  - Rust 引擎 vs Python GIL 的性能瓶颈

### 维度 2：数据质量与监控
- 考察点：如何保证数据管道的数据质量？
- 示例方向：
  - 数据验证策略（schema、业务规则）
  - 异常检测机制（统计方法、ML 方法）
  - 数据血缘追踪的实现
  - 数据延迟监控和告警

### 维度 3：生产化思维
- 考察点：从"能跑"到"能生产"需要考虑什么？
- 示例方向：
  - 数据管道的容错和恢复机制
  - 大规模数据抓取的分布式策略
  - 数据安全和隐私合规
  - 成本控制（API 调用、存储、计算）

> 【企业用户】登录评估平台查看详细追问示例

---

## 常见坑点

- ❌ **坑点 1**：忽略反爬策略，导致 IP 被封
  - ✅ **解决**：配置请求频率控制、User-Agent 轮换、代理池
- ❌ **坑点 2**：不处理数据变更，导致重复计算
  - ✅ **解决**：利用 Pathway 的增量计算机制
- ❌ **坑点 3**：不监控数据质量，导致脏数据进入下游
  - ✅ **解决**：建立数据质量检查点和告警机制
- ❌ **坑点 4**：忽略数据延迟，导致实时性不达标
  - ✅ **解决**：配置延迟监控，优化管道性能

---

## 参考资源
- [Pathway 官方文档](https://pathway.com/developers/user-guide)
- [Pathway GitHub](https://github.com/pathwaycom/pathway)
- [ScrapeGraphAI 官方文档](https://docs.scrapegraphai.com/)
- [ScrapeGraphAI GitHub](https://github.com/ScrapeGraphAI/Scrapegraph-ai)
- [Differential Dataflow 论文](https://github.com/TimelyDataflow/differential-dataflow)
