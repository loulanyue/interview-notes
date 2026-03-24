NetBeans 6.7 及更新的版本已经内置了 Maven。对于以前的版本，可在插件管理中心获取 Maven 插件。此例中我们使用的是 NetBeans 6.9。 关于 NetBeans 的一些特性如下：
可以通过 NetBeans 来运行 Maven 目标。
可以使用 NetBeans 自身的控制台查看 Maven 命令的输出。
可以更新 Maven 与 IDE 的依赖。
可以在 NetBeans 中启动 Maven 的构建。
NetBeans 基于 Maven 的 pom.xml 来实现自动化管理依赖关系。
NetBeans 可以通过自己的工作区解决 Maven 的依赖问题，而无需安装到本地的 Maven 仓库，虽然需要依赖的项目在同一个工作区。
NetBeans 可以自动从远程 Moven 库上下载需要的依赖和源码。
NetBeans 提供了创建 Maven 项目，pom.xml 文件的向导。
NetBeans 提供了 关于Maven 仓库的浏览器，使您可以查看本地存储库和注册在外部的 Maven 仓库。
在 NetBeans 里打开一个 Maven 项目
打开 NetBeans
选择 File Menu > Open Project 选项
选择项目的路径，即使用 Maven 创建一个项目时的存储路径。假设我们创建了一个项目： consumerBanking. 通过 Maven 构建 Java 项目 查看如何使用 Maven 创建一个项目。

目前为止，你已经可以在 NetBeans 里看到 Maven 项目了。看一下consumerBanking 项目的 Libraries 和 Test Libraries. 你可以发现 NetBeans 已经将 Maven 所依赖的都添加到了它的构建路径里了。

在 NetBeans 里构建一个 Maven 项目
好了，我们来使用 NetBeans 的编译功能来构建这个 Maven 项目
右键点击 consumerBanking 项目打开上下文菜单。
选择 "Clean and Build" 选项

Maven 将会开始构建该项目。你可以在 NetBeans 的终端里查看输出的日志信息：
NetBeans: Executing 'mvn.bat -Dnetbeans.execution=true clean install'
NetBeans:      JAVA_HOME=C:\Program Files\Java\jdk1.6.0_21
Scanning for projects...
------------------------------------------------------------------------
Building consumerBanking
   task-segment: [clean, install]
------------------------------------------------------------------------
[clean:clean]
[resources:resources]
[WARNING] Using platform encoding (Cp1252 actually)
to copy filtered resources, i.e. build is platform dependent!
skip non existing resourceDirectory C:\MVN\consumerBanking\src\main\resources
[compiler:compile]
Compiling 2 source files to C:\MVN\consumerBanking\target\classes
[resources:testResources]
[WARNING] Using platform encoding (Cp1252 actually)
to copy filtered resources, i.e. build is platform dependent!
skip non existing resourceDirectory C:\MVN\consumerBanking\src\test\resources
[compiler:testCompile]
Compiling 1 source file to C:\MVN\consumerBanking\target\test-classes
[surefire:test]
Surefire report directory: C:\MVN\consumerBanking\target\surefire-reports

-------------------------------------------------------
 T E S T S
-------------------------------------------------------
Running com.companyname.bank.AppTest
Tests run: 1, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 0.023 sec

Results :

Tests run: 1, Failures: 0, Errors: 0, Skipped: 0

[jar:jar]
Building jar: C:\MVN\consumerBanking\target\consumerBanking-1.0-SNAPSHOT.jar
[install:install]
Installing C:\MVN\consumerBanking\target\consumerBanking-1.0-SNAPSHOT.jar
to C:\Users\GB3824\.m2\repository\com\companyname\bank\consumerBanking\
1.0-SNAPSHOT\consumerBanking-1.0-SNAPSHOT.jar
------------------------------------------------------------------------
BUILD SUCCESSFUL
------------------------------------------------------------------------
Total time: 9 seconds
Finished at: Thu Jul 19 12:57:28 IST 2012
Final Memory: 16M/85M
------------------------------------------------------------------------
在 NetBeans 里运行应用程序
现在，右键点击 App.java 文件。选择 Run File 选项。你可以在终端看到如下结果：
NetBeans: Executing 'mvn.bat -Dexec.classpathScope=runtime 
-Dexec.args=-classpath %classpath com.companyname.bank.App 
-Dexec.executable=C:\Program Files\Java\jdk1.6.0_21\bin\java.exe 
-Dnetbeans.execution=true process-classes 
org.codehaus.mojo:exec-maven-plugin:1.1.1:exec'
NetBeans:      JAVA_HOME=C:\Program Files\Java\jdk1.6.0_21
Scanning for projects...
------------------------------------------------------------------------
Building consumerBanking
   task-segment: [process-classes, 
   org.codehaus.mojo:exec-maven-plugin:1.1.1:exec]
------------------------------------------------------------------------
[resources:resources]
[WARNING] Using platform encoding (Cp1252 actually) 
to copy filtered resources, i.e. build is platform dependent!
skip non existing resourceDirectory C:\MVN\consumerBanking\src\main\resources
[compiler:compile]
Nothing to compile - all classes are up to date
[exec:exec]
Hello World!
------------------------------------------------------------------------
BUILD SUCCESSFUL
------------------------------------------------------------------------
Total time: 1 second
Finished at: Thu Jul 19 14:18:13 IST 2012
Final Memory: 7M/64M
------------------------------------------------------------------------
