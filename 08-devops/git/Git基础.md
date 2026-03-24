<!-- GFM-TOC -->
* [集中式与分布式](#集中式与分布式)
* [中心服务器](#中心服务器)
* [Git 与 SVN 区别速记](#git-与-svn-区别速记)
* [快速上手](#快速上手)
* [工作流](#工作流)
* [分支实现](#分支实现)
* [冲突](#冲突)
* [Fast forward](#fast-forward)
* [分支管理策略](#分支管理策略)
* [储藏（Stashing）](#储藏stashing)
* [SSH 传输设置](#ssh-传输设置)
* [常用命令速记](#常用命令速记)
* [常见问题](#常见问题)
* [.gitignore 文件](#gitignore-文件)
* [Git 命令一览](#git-命令一览)
* [参考资料](#参考资料)
<!-- GFM-TOC -->


# 集中式与分布式

Git 属于分布式版本控制系统，而 SVN 属于集中式。

集中式版本控制只有中心服务器拥有一份代码，而分布式版本控制每个人的电脑上就有一份完整的代码。

集中式版本控制有安全性问题，当中心服务器挂了所有人都没办法工作了。

集中式版本控制需要连网才能工作，如果网速过慢，那么提交一个文件的会慢的无法让人忍受。而分布式版本控制不需要连网就能工作。

分布式版本控制新建分支、合并分支操作速度非常快，而集中式版本控制新建一个分支相当于复制一份完整代码。

# 中心服务器

中心服务器用来交换每个用户的修改，没有中心服务器也能工作，但是中心服务器能够 24 小时保持开机状态，这样就能更方便的交换修改。

Github 就是一个中心服务器。

# Git 与 SVN 区别速记

Git 是分布式版本控制系统，而 SVN 更偏集中式管理。快速记忆时可以抓住这几点：

- Git 本地就保存完整历史，离线也能提交和查看版本
- SVN 更依赖中心服务器，很多操作需要联网
- Git 分支通常更轻量，创建和合并成本更低
- Git 通过哈希校验内容完整性，没有像 SVN 那样的全局递增版本号

# 快速上手

## 安装与配置

Windows 环境可以直接使用官方安装包或 Git for Windows，Linux 环境常见安装方式是通过包管理器安装。

初始化后建议先完成这些全局配置：

```bash
git config --global user.name "your-name"
git config --global user.email "you@example.com"
git config --global core.autocrlf false
git config --global core.quotepath off
```

如果需要图形化合并工具，也可以配置：

```bash
git config --global merge.tool "kdiff3"
```

## SSH 配置

```bash
ssh-keygen -t rsa -C "you@example.com"
ssh-add ~/.ssh/id_rsa
cat ~/.ssh/id_rsa.pub
```

如果执行 `ssh-add ~/.ssh/id_rsa` 时提示 `Could not open a connection to your authentication agent`，可以先执行：

```bash
eval `ssh-agent -s`
```

然后重新执行 `ssh-add`。

# 工作流

<div align="center"> <img src="assets/a1198642-9159-4d88-8aec-c3b04e7a2563.jpg"/> </div><br>

新建一个仓库之后，当前目录就成为了工作区，工作区下有一个隐藏目录 .git，它属于 Git 的版本库。

Git 版本库有一个称为 stage 的暂存区，还有自动创建的 master 分支以及指向分支的 HEAD 指针。

可以把日常流程粗略理解成：

1. 克隆或初始化仓库作为工作目录
2. 在工作区中新增或修改文件
3. 提交前先查看改动
4. 使用 `git add` 放入暂存区
5. 使用 `git commit` 提交到当前分支
6. 必要时同步远端并继续迭代

<div align="center"> <img src="assets/46f66e88-e65a-4ad0-a060-3c63fe22947c.png"/> </div><br>

- git add files 把文件的修改添加到暂存区
- git commit 把暂存区的修改提交到当前分支，提交之后暂存区就被清空了
- git reset -- files 使用当前分支上的修改覆盖暂存区，用来撤销最后一次 git add files
- git checkout -- files 使用暂存区的修改覆盖工作目录，用来撤销本地修改

<div align="center"> <img src="assets/17976404-95f5-480e-9cb4-250e6aa1d55f.png"/> </div><br>

可以跳过暂存区域直接从分支中取出修改，或者直接提交修改到分支中。

- git commit -a 直接把所有文件的修改添加到暂存区然后执行提交
- git checkout HEAD -- files 取出最后一次修改，可以用来进行回滚操作

## 工作区、暂存区和版本库

- 工作区：你在本地目录里直接看到和编辑的文件
- 暂存区：通常对应 `.git/index`，用于保存下一次提交准备纳入的内容
- 版本库：`.git` 目录中的完整历史与对象数据库

几个常见命令对三者的影响可以这样理解：

- `git add`：把工作区改动放进暂存区
- `git commit`：把暂存区内容写入版本库
- `git reset HEAD <file>`：撤销某个文件的暂存，不影响工作区
- `git rm --cached <file>`：从暂存区移除文件，但保留工作区文件
- `git checkout -- <file>`：用暂存区内容覆盖工作区，丢弃未暂存改动
- `git checkout HEAD -- <file>`：用最新提交内容覆盖工作区和暂存区，风险更高

# 分支实现

使用指针将每个提交连接成一条时间线，HEAD 指针指向当前分支指针。

<div align="center"> <img src="assets/fb546e12-e1fb-4b72-a1fb-8a7f5000dce6.jpg"/> </div><br>

新建分支是新建一个指针指向时间线的最后一个节点，并让 HEAD 指针指向新分支表示新分支成为当前分支。

<div align="center"> <img src="assets/bc775758-89ab-4805-9f9c-78b8739cf780.jpg"/> </div><br>

每次提交只会让当前分支指针向前移动，而其它分支指针不会移动。

<div align="center"> <img src="assets/5292faa6-0141-4638-bf0f-bb95b081dcba.jpg"/> </div><br>

合并分支也只需要改变指针即可。

<div align="center"> <img src="assets/1164a71f-413d-494a-9cc8-679fb6a2613d.jpg"/> </div><br>

# 冲突

当两个分支都对同一个文件的同一行进行了修改，在分支合并时就会产生冲突。

<div align="center"> <img src="assets/58e57a21-6b6b-40b6-af85-956dd4e0f55a.jpg"/> </div><br>

Git 会使用 <<<<<<< ，======= ，>>>>>>> 标记出不同分支的内容，只需要把不同分支中冲突部分修改成一样就能解决冲突。

```
<<<<<<< HEAD
Creating a new branch is quick & simple.
=======
Creating a new branch is quick AND simple.
>>>>>>> feature1
```

# Fast forward

"快进式合并"（fast-farward merge），会直接将 master 分支指向合并的分支，这种模式下进行分支合并会丢失分支信息，也就不能在分支历史上看出分支信息。

可以在合并时加上 --no-ff 参数来禁用 Fast forward 模式，并且加上 -m 参数让合并时产生一个新的 commit。

```
$ git merge --no-ff -m "merge with no-ff" dev
```

<div align="center"> <img src="assets/dd78a1fe-1ff3-4bcf-a56f-8c003995beb6.jpg"/> </div><br>

# 分支管理策略

master 分支应该是非常稳定的，只用来发布新版本；

日常开发在开发分支 dev 上进行。

<div align="center"> <img src="assets/245fd2fb-209c-4ad5-bc5e-eb5664966a0e.jpg"/> </div><br>

# 储藏（Stashing）

在一个分支上操作之后，如果还没有将修改提交到分支上，此时进行切换分支，那么另一个分支上也能看到新的修改。这是因为所有分支都共用一个工作区的缘故。

可以使用 git stash 将当前分支的修改储藏起来，此时当前工作区的所有修改都会被存到栈上，也就是说当前工作区是干净的，没有任何未提交的修改。此时就可以安全的切换到其它分支上了。

```
$ git stash
Saved working directory and index state \ "WIP on master: 049d078 added the index file"
HEAD is now at 049d078 added the index file (To restore them type "git stash apply")
```

该功能可以用于 bug 分支的实现。如果当前正在 dev 分支上进行开发，但是此时 master 上有个 bug 需要修复，但是 dev 分支上的开发还未完成，不想立即提交。在新建 bug 分支并切换到 bug 分支之前就需要使用 git stash 将 dev 分支的未提交修改储藏起来。

# SSH 传输设置

Git 仓库和 Github 中心仓库之间的传输是通过 SSH 加密。

如果工作区下没有 .ssh 目录，或者该目录下没有 id_rsa 和 id_rsa.pub 这两个文件，可以通过以下命令来创建 SSH Key：

```
$ ssh-keygen -t rsa -C "youremail@example.com"
```

然后把公钥 id_rsa.pub 的内容复制到 Github "Account settings" 的 SSH Keys 中。

# 常用命令速记

- `git init`：初始化本地仓库
- `git clone <url>`：克隆远端仓库
- `git add .`：把当前修改加入暂存区
- `git status`：查看工作区与暂存区状态
- `git diff`：查看未暂存改动
- `git diff --cached`：查看已暂存改动
- `git commit -m "message"`：提交暂存区内容
- `git pull`：拉取并合并远端更新
- `git push`：推送本地提交
- `git checkout <branch>`：切换分支
- `git stash`：临时保存当前未提交改动
- `git reset HEAD <file>`：取消某个文件的暂存状态
- `git rm <file>`：从版本控制中删除文件
- `git mv old new`：重命名或移动文件

# 常见问题

## failed to push some refs

如果推送时出现下面这类错误，通常说明远端比本地更新：

```text
! [rejected] master -> master (fetch first)
error: failed to push some refs
```

可以先执行：

```bash
git pull origin master
git push -u origin master
```

## Git Merge Failed

如果提示存在 `unmerged files`，一般说明当前还有冲突未解决。处理顺序通常是：

1. 先打开冲突文件并完成手工合并
2. 使用 `git add` 标记冲突已解决
3. 重新提交合并结果
4. 再执行 `git pull` 或 `git push`

# .gitignore 文件

忽略以下文件：

- 操作系统自动生成的文件，比如缩略图；
- 编译生成的中间文件，比如 Java 编译产生的 .class 文件；
- 自己的敏感信息，比如存放口令的配置文件。

不需要全部自己编写，可以到 [https://github.com/github/gitignore](https://github.com/github/gitignore) 中进行查询。

常见 Java 项目示例：

```gitignore
*.class
*.war
*.ear
*.orig
target/
.setting/
.project
.classpath
.idea/
/idea/
*.ipr
*.iml
*.iws
*.log
*.cache
*.diff
*.patch
*.tmp
.DS_Store
Thumbs.db
```

# Git 命令一览

<div align="center"> <img src="assets/7a29acce-f243-4914-9f00-f2988c528412.jpg"/> </div><br>

比较详细的地址：http://www.cheat-sheets.org/saved-copy/git-cheat-sheet.pdf

# 参考资料

- [Git - 简明指南](http://rogerdudler.github.io/git-guide/index.zh.html)
- [图解 Git](http://marklodato.github.io/visual-git-guide/index-zh-cn.html)
- [廖雪峰 : Git 教程](https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000)
- [Learn Git Branching](https://learngitbranching.js.org/)
