Eclipse 提供了一个很好的插件 m2eclipse ，该插件能将 Maven 和 Eclipse 集成在一起。
在最新的 Eclipse 中自带了 Maven，我们打开，Windows->Preferences，如果会出现下面的画面：

下面列出 m2eclipse 的一些特点：
可以在 Eclipse 环境上运行 Maven 的目标文件。
可以使用其自带的控制台在 Eclipse 中直接查看 Maven 命令的输出。
可以在 IDE 下更新 Maven 的依赖关系。
可以使用 Eclipse 开展 Maven 项目的构建。
Eclipse 基于 Maven 的 pom.xml 来实现自动化管理依赖关系。
它解决了 Maven 与 Eclipse 的工作空间之间的依赖，而不需要安装到本地 Maven 的存储库（需要依赖项目在同一个工作区）。
它可以自动地从远端的 Maven 库中下载所需要的依赖以及源码。
它提供了向导，为建立新 Maven 项目，pom.xml 以及在已有的项目上开启 Maven 支持。
它提供了远端的 Maven 存储库的依赖的快速搜索。
在 Eclipse 中导入一个 Maven 的项目
打开 Eclipse
选择 File > Import > option
选择 Maven Projects 选项。点击 Next 按钮。

选择项目的路径，即使用 Maven 创建一个项目时的存储路径。假设我们创建了一个项目： consumerBanking. 通过 Maven 构建 Java 项目 查看如何使用 Maven 创建一个项目。
点击 Finish 按钮。

现在，你可以在 Eclipse 中看到 Maven 项目。

看一下 consumerBanking 项目的属性，你可以发现 Eclipse 已经将 Maven 所依赖的都添加到了它的构建路径里了。

好了，我们来使用 Eclipse 的编译功能来构建这个 Maven 项目。
右键打开 consumerBanking 项目的上下文菜单
选择 Run 选项
然后选择 maven package 选项
Maven 开始构建项目，你可以在 Eclispe 的控制台看到输出日志。
[INFO] Scanning for projects...
[INFO] -------------------------------------------------------------------
[INFO] Building consumerBanking
[INFO] 
[INFO] Id: com.companyname.bank:consumerBanking:jar:1.0-SNAPSHOT
[INFO] task-segment: [package]
[INFO] -------------------------------------------------------------------
[INFO] [resources:resources]
[INFO] Using default encoding to copy filtered resources.
[INFO] [compiler:compile]
[INFO] Nothing to compile - all classes are up to date
[INFO] [resources:testResources]
[INFO] Using default encoding to copy filtered resources.
[INFO] [compiler:testCompile]
[INFO] Nothing to compile - all classes are up to date
[INFO] [surefire:test]
[INFO] Surefire report directory: 
C:\MVN\consumerBanking\target\surefire-reports

-------------------------------------------------------
 T E S T S
-------------------------------------------------------
Running com.companyname.bank.AppTest
Tests run: 1, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 0.047 sec

Results :

Tests run: 1, Failures: 0, Errors: 0, Skipped: 0

[INFO] [jar:jar]
[INFO] -------------------------------------------------------------------
[INFO] BUILD SUCCESSFUL
[INFO] -------------------------------------------------------------------
[INFO] Total time: 1 second
[INFO] Finished at: Thu Jul 12 18:18:24 IST 2012
[INFO] Final Memory: 2M/15M
[INFO] -------------------------------------------------------------------

现在，右键点击 App.java， 选择 Run As 选项。选择 As Java App
你将看到如下结果：
Hello World!
 Maven Web 应用 Maven NetBeans 
1 篇笔记  写笔记
   小火柴
  326***858@qq.com
   参考地址
使用 Eclipse 构建的时候会出现 run as 中没有 maven package 选项，网上看到这个解决办法。

是因为建的是普通 java 工程，需要把它转换成 maven project。
 1、右键工程--maven--Disable maven nature
 2、在当前目录下执行命令（就是有pom.xml文件的那个目录） —— mvn eclipse:clean
 3、重新转换该工程为maven工程。右键工程--- 'Configure'--- 'Convert to meven project'
