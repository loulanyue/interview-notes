# interview-notes 项目重构优化建议

> 分析日期：2026-03-24 | 分析范围：`/Users/youfanyu/Desktop/workspace/skills/interview-notes`

---

## 一、现状总览

| 维度 | 现状 |
|---|---|
| 顶层目录数 | 26 个（含 `.git`、`pics`） |
| 文件总数 | 151+ 个 markdown 文件 |
| README.md | **2652 行 / 465 KB**，其中 ~2000 行为循环重复的"复习建议" |
| 命名语言 | 中英混用，无统一规范 |
| 内容覆盖 | Java 基础、JVM、并发、MySQL、Redis、Spring、Docker、算法题解、设计模式、网络、操作系统、大数据等 |

---

## 二、核心问题诊断

### 🔴 P0 — README.md 严重膨胀

`README.md` 第 54~2652 行为**自动生成的"面试复习建议"**，约 600 条建议按日期排列，但实际内容仅循环复用以下 **~10 条模板句**：

```
"建议先建立目录感，再回到知识点细节"
"可以先过一遍核心概念，再挑典型问题做口述练习"
"复习时优先整理高频问法，比平铺直叙更适合面试场景"
...
```

> [!CAUTION]
> 这 2000+ 行重复内容严重影响 README 可读性，且对读者无实质帮助。

**建议**：删除全部按日期罗列的条目，仅保留前 53 行的 TOC 目录结构，并将复习建议精简为 **1 个独立文件** `docs/review-tips.md`，去重后约 10-15 条。

---

### 🔴 P0 — 目录结构混乱，主题分散

当前顶层目录存在以下问题：

#### 2.1 同主题多目录（重复）

| 话题 | 冗余目录 | 建议 |
|---|---|---|
| 设计模式 | `design/`（1 文件）+ `设计模式/`（3 文件）+ `Docs/设计模式.md` | → 合并为 `design-patterns/` |
| Docker/容器 | `Docker/`（11 文件）+ `容器/`（5 文件）+ `Docs/docker访问控制.md` | → 合并为 `docker/` |
| 网络 | `network/`（2 文件）+ `Docs/计算机网络.md` + `Docs/HTTP.md` + `Docs/HTTP协议.md` | → 合并为 `network/` |
| Redis | `Redis/`（仅 1 个 README）+ `JAVA/Redis.md` + `Docs/Reids.md`(拼写错误) + `Docs/三、缓存redis.md` | → 合并为 `redis/` |
| Linux | `Linux/` + `linux就该这么学/` + `Docs/Linux简介.md` + `Docs/四、Linux.md` | → 合并为 `linux/` |
| Git | `Git/`（13 文件）+ `Docs/Git基础.md` + `JAVA/git merge failed.md` | → 合并为 `git/` |

#### 2.2 JAVA/ 目录职责过载

`JAVA/` 目录包含 **72 个文件 + 2 个子目录**，混入了大量不属于 Java 的内容：

- `MongoDB.md`（仅 66 字节）
- `Redis.md`（149 字节）
- `RabbitMQ.md`
- `git merge failed.md`
- `享元模式.md`（应归入设计模式）
- `Leetcode-动态规划.md`、`leetcode排序.md`（应归入算法）
- `系统设计.md`（应归入系统设计目录）

#### 2.3 近空目录

| 目录 | 文件数 | 建议 |
|---|---|---|
| `Vue/` | 1 文件（334B） | 合并到前端目录或删除 |
| `react/` | 1 文件（README） | 合并到前端目录或删除 |
| `javaScript/` | 2 文件 | 合并到前端目录或删除 |
| `Spring/` | 2 文件 | 内容太少，合并到 `java/framework/` |
| `SpringCloudAlibaba/` | 待确认 | 合并到 `java/framework/` |
| `Redis/` | 1 文件（README） | 合并到统一 `redis/` |
| `中间件/Zookeeper/` | 空壳嵌套 | 充实或暂时删除 |

#### 2.4 中英命名不统一

- 英文：`Docker`, `Git`, `JAVA`, `Maven`, `Spring`, `Vue`, `react`, `network`, `design`
- 中文：`设计模式`, `容器`, `中间件`, `linux就该这么学`
- 大小写不一致：`JAVA`(全大写), `javaScript`(驼峰), `react`(全小写)

---

### 🟡 P1 — 内容文件质量参差

#### 3.1 拼写错误

- `Docs/Reids.md` → 应为 `Redis.md`

#### 3.2 超小文件（< 500 字节），可能为占位符

| 文件 | 大小 | 说明 |
|---|---|---|
| `JAVA/MongoDB.md` | 66B | 几乎为空 |
| `JAVA/Redis.md` | 149B | 几乎为空 |
| `JAVA/MyBatis.md` | 426B | 内容极少 |
| `JAVA/同名和类的非兼容bean定义.md` | 230B | 片段记录 |
| `JAVA/多层Map内嵌时取数据的方法.md` | 177B | 片段记录 |
| `Vue/vue.js配置.md` | 334B | 几乎为空 |

#### 3.3 文件缺少 `.md` 扩展名

部分文件未带 `.md` 后缀，影响渲染：
- `Java Character 类`、`Java Scanner 类`、`Java StringBuffer 和 StringBuilder 类`
- `Java switch case`、多个 `MySQL` 相关文件
- `Git 查看提交历史`、`Git 标签`、`Git 远程仓库(Github)`

#### 3.4 内容重叠

| 重叠对 | 说明 |
|---|---|
| `Docs/HTTP.md` (36KB) vs `Docs/HTTP协议.md` (32KB) | 高度重叠 |
| `Docs/计算机网络.md` vs `Docs/一、计算机网络.md` | 内容交叉 |
| `Docs/Reids.md` vs `Docs/三、缓存redis.md` vs `JAVA/Redis.md` | 三份 Redis |
| `Docs/设计模式.md` (80KB) vs `设计模式/` 目录 vs `design/` | 三处设计模式 |

---

### 🟡 P1 — Docs/ 目录定位模糊

`Docs/` 目录包含 41 个文件，覆盖 Java、网络、数据库、算法、系统设计等**几乎所有主题**，实际充当了"综合笔记"角色，与其他专题目录形成大量交叉。

- 有的文件按编号命名：`一、计算机网络.md`、`二、数据库.md`、`三、缓存redis.md`…
- 有的是独立专题：`LeetCode题解.md`（195KB）、`剑指Offer题解.md`（90KB）
- 有的是工具类：`mybatis中大于小于等于的写法.md`

---

## 三、推荐重构方案

### 目标目录结构

```
interview-notes/
├── README.md                     # 精简 TOC + 项目说明（< 100 行）
├── assets/                       # 图片等静态资源（原 assets/）
│
├── 01-computer-science/          # 计算机基础
│   ├── os/                       # 操作系统
│   ├── network/                  # 计算机网络、HTTP、Socket、TCP
│   └── data-structures/          # 数据结构基础
│
├── 02-java/                      # Java 全栈
│   ├── basics/                   # 基础语法、数据类型、OOP
│   ├── collections/              # 容器/集合框架
│   ├── concurrency/              # 并发编程、线程池
│   ├── jvm/                      # JVM 内存、GC、调优
│   ├── io/                       # IO/NIO/序列化
│   └── new-features/             # Java 8/14+ 新特性
│
├── 03-database/                  # 数据库
│   ├── mysql/                    # MySQL 语法、优化、索引
│   ├── redis/                    # Redis 核心
│   └── mongodb/                  # MongoDB（待充实）
│
├── 04-framework/                 # 框架
│   ├── spring/                   # Spring / Spring MVC
│   ├── spring-cloud/             # Spring Cloud Alibaba
│   └── mybatis/                  # MyBatis
│
├── 05-system-design/             # 系统设计
│   ├── distributed/              # 分布式、集群
│   ├── cache/                    # 缓存策略
│   ├── mq/                       # 消息队列、RabbitMQ
│   └── security/                 # 安全/攻击技术
│
├── 06-design-patterns/           # 设计模式（合并 design/ + 设计模式/）
│
├── 07-algorithms/                # 算法与题解
│   ├── leetcode/                 # LeetCode 题解
│   ├── sword-offer/              # 剑指 Offer
│   └── sorting/                  # 排序算法
│
├── 08-devops/                    # 运维工具
│   ├── docker/                   # Docker（合并 Docker/ + 容器/）
│   ├── linux/                    # Linux（合并 Linux/ + linux就该这么学/）
│   ├── git/                      # Git
│   └── maven/                    # Maven
│
├── 09-frontend/                  # 前端（合并 Vue/ + react/ + javaScript/）
│
├── 10-big-data/                  # 大数据（原 BIG DATA/）
│
├── 11-coding-practice/           # 编码实践、重构、代码规范
│
└── review-tips.md                # 面试复习建议（精简去重版）
```

### 关键改动说明

| # | 改动 | 原因 |
|---|---|---|
| 1 | 编号前缀 `01-` ~ `11-` | 控制目录排列顺序，大类一目了然 |
| 2 | 全部使用 **小写英文 + 连字符** 命名 | 消除中英混用、大小写不一致问题，对 URL 和 CI 友好 |
| 3 | `Docs/` 目录取消 | 按主题归入对应分类目录，消除重叠 |
| 4 | `assets/` → `assets/` | 更通用的静态资源目录名 |
| 5 | `JAVA/` 中非 Java 内容分流 | 算法 → `07-algorithms/`，Redis → `03-database/redis/`，设计模式→ `06-design-patterns/` |
| 6 | 合并去重 | HTTP 保留一份、Redis 保留一份、设计模式保留一份 |
| 7 | 补全 `.md` 扩展名 | 所有缺失后缀的文件统一加上 `.md` |
| 8 | 清理占位文件 | 内容 < 200B 的空壳文件要么充实要么删除 |
| 9 | README.md 瘦身 | 从 2652 行精简至 < 100 行，仅保留 TOC + 使用说明 |

---

## 四、执行路线

### Phase 1 — 快速止血（1 天）

- [ ] 1.1 删除 `README.md` 中第 54~2652 行的重复复习建议
- [ ] 1.2 将去重后的复习建议写入 `review-tips.md`（约 10-15 条）
- [ ] 1.3 修复 `Docs/Reids.md` 拼写错误
- [ ] 1.4 为所有缺少 `.md` 后缀的文件补全扩展名

### Phase 2 — 目录重组（2-3 天）

- [ ] 2.1 创建新目录结构（`01-` ~ `11-`）
- [ ] 2.2 将 `Docs/` 中的 41 个文件按主题分流到新目录
- [ ] 2.3 将 `JAVA/` 中非 Java 内容移出（算法、Redis、设计模式等）
- [ ] 2.4 合并 `design/` + `设计模式/` → `06-design-patterns/`
- [ ] 2.5 合并 `Docker/` + `容器/` → `08-devops/docker/`
- [ ] 2.6 合并 `Vue/` + `react/` + `javaScript/` → `09-frontend/`
- [ ] 2.7 合并 `Linux/` + `linux就该这么学/` → `08-devops/linux/`
- [ ] 2.8 `assets/` → `assets/`，全局搜索替换图片引用路径

### Phase 3 — 内容去重与增强（持续）

- [ ] 3.1 合并 `HTTP.md` + `HTTP协议.md` 为一份完整文档
- [ ] 3.2 合并多份 Redis 笔记为单一系统文档
- [ ] 3.3 合并 `计算机网络.md` + `一、计算机网络.md`
- [ ] 3.4 审核 < 500B 的文件，充实或归档
- [ ] 3.5 为每个二级目录添加 `README.md` 作为该主题的导航页

### Phase 4 — 规范建立（可选）

- [ ] 4.1 制定文件命名规范文档（`CONTRIBUTING.md`）
- [ ] 4.2 添加 `.editorconfig` 统一编辑器格式
- [ ] 4.3 如有持续更新需求，考虑使用 VitePress / Docusaurus 生成静态站点
- [ ] 4.4 添加 GitHub Actions 检查死链、拼写错误

---

## 五、效果预期

| 维度 | 当前 | 重构后 |
|---|---|---|
| 顶层目录数 | 26 个（无序） | 11~13 个（编号有序） |
| README.md | 2652 行 | < 100 行 |
| 文件查找效率 | 需在多目录中猜测 | 按主题编号直达 |
| 重复内容 | ≥ 5 组重叠文件 | 0 |
| 命名规范 | 中英混用、大小写不一 | 全小写英文 + 连字符 |
| 扩展名 | 部分缺失 | 全部 `.md` |

---

> [!TIP]
> 建议在重构前先打一个 Git tag（如 `v0.1-pre-refactor`），方便随时回退。重组目录时使用 `git mv` 以保留文件历史。
