# 就业市场分析

> 市场侦察模块 —— 用真实数据回答"为什么要学这个"

---

## 定位

Job Market 不是独立模块，而是**所有其他模块的数据输入和验证**。它回答的核心问题：

- "为什么要学 RAG？" → 因为 35.9% 的 AI 岗位提及 RAG
- "Agent 技能值多少钱？" → 薪资溢价 25%
- "国内哪里 AI 岗位最多？" → 北京/上海/深圳/杭州

---

## 内容导航

| 文件 | 内容 | 数据来源 | 阅读时间 |
|------|------|----------|----------|
| [01-market-overview.md](01-market-overview.md) | 市场总览：岗位量、类型分布、行业分布 | 海外 + 国内 | 8分钟 |
| [02-skill-demand-analysis.md](02-skill-demand-analysis.md) | 技能需求分析：排名、趋势、组合 | 海外 + 国内 | 10分钟 |
| [03-role-breakdown.md](03-role-breakdown.md) | 岗位细分：AI-First vs AI-Support vs ML-First | 海外 + 国内 | 8分钟 |
| [04-salary-insights.md](04-salary-insights.md) | 薪资洞察：按级别、地域、技能 | 海外 + 国内 | 8分钟 |
| [05-geographic-distribution.md](05-geographic-distribution.md) | 地域分布：国内主要城市 AI 岗位分布 | 国内为主 | 5分钟 |
| [data-sources.md](data-sources.md) | 数据来源清单和更新频率 | — | 3分钟 |

---

## 与实战项目的关联

```
job-market 数据 ──▶ 指导 practical-projects 优先级
       ▲                              │
       │                              ▼
   验证效果 ◄────────────────── 项目完成后的反馈
```

每个实战项目的任务书开头都引用了本模块的数据作为市场需求背景。

---

## 数据来源声明

### 海外数据
- [ai-engineering-field-guide](https://github.com/alexeygrigorev/ai-engineering-field-guide) 2,445 份 JD 分析（2026年1-3月，builtin.com）
- Stack Overflow Developer Survey 2025
- Microsoft Work Trend Index 2025

### 国内数据
- 脉脉高聘人才智库《2026年1-2月中高端人才求职招聘洞察》
- 腾讯研究院、中国社会科学院《AI职业新趋势大数据研究报告》（2026年5月）
- 前程无忧《2026届校招市场AI人才需求报告》
- Boss直聘、拉勾等平台公开 JD 抽样分析

### 数据使用原则
1. **诚实标注**：所有数据标注具体来源
2. **不编造**：不编造数据，不夸大趋势
3. **样本说明**：国内数据样本量有限，标注"估算"的数据为基于公开信息的推断
4. **持续更新**：数据会随时间更新，标注数据时间

---

*本模块为原创内容，基于公开数据和报告分析。*