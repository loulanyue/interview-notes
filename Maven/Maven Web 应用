本章节我们将学习如何使用版本控制系统 Maven 来管理一个基于 web 的项目，如何创建、构建、部署已经运行一个 web 应用。
创建 Web 应用
我们可以使用 maven-archetype-webapp 插件来创建一个简单的 Java web 应用。
打开命令控制台，进入到 C:\MVN 文件夹，然后执行以下的 mvn 命令：
C:\MVN>mvn archetype:generate -DgroupId=com.companyname.automobile -DartifactId=trucks -DarchetypeArtifactId=maven-archetype-webapp  -DinteractiveMode=false
执行完后 Maven 将开始处理，并且创建完整的于Java Web 项目的目录结构。
[INFO] Scanning for projects...
[INFO] Searching repository for plugin with prefix: 'archetype'.
[INFO] -------------------------------------------------------------------
[INFO] Building Maven Default Project
[INFO]    task-segment: [archetype:generate] (aggregator-style)
[INFO] -------------------------------------------------------------------
[INFO] Preparing archetype:generate
[INFO] No goals needed for project - skipping
[INFO] [archetype:generate {execution: default-cli}]
[INFO] Generating project in Batch mode
[INFO] --------------------------------------------------------------------
[INFO] Using following parameters for creating project 
from Old (1.x) Archetype: maven-archetype-webapp:1.0
[INFO] --------------------------------------------------------------------
[INFO] Parameter: groupId, Value: com.companyname.automobile
[INFO] Parameter: packageName, Value: com.companyname.automobile
[INFO] Parameter: package, Value: com.companyname.automobile
[INFO] Parameter: artifactId, Value: trucks
[INFO] Parameter: basedir, Value: C:\MVN
[INFO] Parameter: version, Value: 1.0-SNAPSHOT
[INFO] project created from Old (1.x) Archetype in dir: C:\MVN\trucks
[INFO] -------------------------------------------------------------------
[INFO] BUILD SUCCESSFUL
[INFO] -------------------------------------------------------------------
[INFO] Total time: 16 seconds
[INFO] Finished at: Tue Jul 17 11:00:00 IST 2012
[INFO] Final Memory: 20M/89M
[INFO] -------------------------------------------------------------------
执行完后，我们可以在 C:/MVN 文件夹下看到 trucks 项目，查看项目的目录结构：

Maven 目录结构是标准的，各个目录作用如下表所示:
文件夹结构	描述
trucks	包含 src 文件夹和 pom.xml 文件。
src/main/webapp	包含 index.jsp 文件和 WEB-INF 文件夹.
src/main/webapp/WEB-INF	包含 web.xml 文件
src/main/resources	包含图片、properties资源文件。
pom.xml 文件代码如下：
<project xmlns="http://maven.apache.org/POM/4.0.0" 
   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
   xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 
   http://maven.apache.org/maven-v4_0_0.xsd">
   <modelVersion>4.0.0</modelVersion>
   <groupId>com.companyname.automobile</groupId>
   <artifactId>trucks</artifactId>
   <packaging>war</packaging>
   <version>1.0-SNAPSHOT</version>
   <name>trucks Maven Webapp</name>
   <url>http://maven.apache.org</url>
   <dependencies>
      <dependency>
         <groupId>junit</groupId>
         <artifactId>junit</artifactId>
         <version>3.8.1</version>
         <scope>test</scope>
      </dependency>
   </dependencies>
   <build>
      <finalName>trucks</finalName>
   </build>
</project>
接下来我们打开 C:\ > MVN > trucks > src > main > webapp > 文件夹，可以看到一个已经创建好的 index.jsp 文件，代码如下：
<html>
   <body>
      <h2>Hello World!</h2>
   </body>
</html>
构建 Web 应用
打开命令控制台，进入 C:\MVN\trucks 目录，然后执行下面的以下 mvn 命令：
C:\MVN\trucks>mvn clean package
Maven 将开始构建项目:
[INFO] Scanning for projects...
[INFO] -------------------------------------------------------------------
[INFO] Building trucks Maven Webapp
[INFO]    task-segment: [clean, package]
[INFO] -------------------------------------------------------------------
[INFO] [clean:clean {execution: default-clean}]
[INFO] [resources:resources {execution: default-resources}]
[WARNING] Using platform encoding (Cp1252 actually) to 
copy filtered resources,i.e. build is platform dependent!
[INFO] Copying 0 resource
[INFO] [compiler:compile {execution: default-compile}]
[INFO] No sources to compile
[INFO] [resources:testResources {execution: default-testResources}]
[WARNING] Using platform encoding (Cp1252 actually) to 
copy filtered resources,i.e. build is platform dependent!
[INFO] skip non existing resourceDirectory 
C:\MVN\trucks\src\test\resources
[INFO] [compiler:testCompile {execution: default-testCompile}]
[INFO] No sources to compile
[INFO] [surefire:test {execution: default-test}]
[INFO] No tests to run.
[INFO] [war:war {execution: default-war}]
[INFO] Packaging webapp
[INFO] Assembling webapp[trucks] in [C:\MVN\trucks\target\trucks]
[INFO] Processing war project
[INFO] Copying webapp resources[C:\MVN\trucks\src\main\webapp]
[INFO] Webapp assembled in[77 msecs]
[INFO] Building war: C:\MVN\trucks\target\trucks.war
[INFO] -------------------------------------------------------------------
[INFO] BUILD SUCCESSFUL
[INFO] -------------------------------------------------------------------
[INFO] Total time: 3 seconds
[INFO] Finished at: Tue Jul 17 11:22:45 IST 2012
[INFO] Final Memory: 11M/85M
[INFO] -------------------------------------------------------------------
部署 Web 应用
打开 C:\ < MVN < trucks < target < 文件夹，找到 trucks.war 文件，并复制到你的 web 服务器的 web 应用目录，然后重启 web 服务器。
测试 Web 应用
访问以下 URL 运行 web 应用：
http://:/trucks/index.jsp
