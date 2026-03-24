Docker容器引擎

      1.Docker是一个开源的应用容器引擎，快速发布、运维
      2.可以打包部署独立的应用程序和环境，镜像
      3.Docker提供镜像仓库服务器，便于集群获取
      4.Docker,Inc.2013年发布
      5.Docker使用基于go语言开发
      6.Docker是PaaS提供商dotCloud一个基于LXC容器引擎
      7.源代码托管在Github上，并遵守从Apache2.0协议开源
      8.为了加快开发和运维，Docker将应用以集装箱方式打包
      9.Docker服务端程序管理服务器上所有Docker容器下载
      10.快速部署和运维工具

1、安装首先安装传输加密组件，然后来下载docker
sudo apt-get -y install apt-transport-https ca-certificates curl software-properties-common

2: 安装阿里云docker 安全协议GPG证书
curl -fsSL http://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo apt-key add -

3: 仓库写入软件源信息，选择stable版本
sudo add-apt-repository "deb [arch=amd64] http://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable"

4: 更新资源列表，安装新版本Docker-CE，社区版本。

sudo apt-get -y update

sudo apt-get -y install docker-ce

5、检查Docker版本，是否成功安装

输入docker version命令，可以查看安装的Docker版本信息。

6、运行Docker Hello World

最简单的例子就是 Hello world,docker会从服务器拉去hello world镜像，并且在本地运行。

sudo docker run hello-world

Docker安装成功，并且可以执行最简单的镜像，入门例子。下面开始安装特殊的镜像，Mongodb作为例子。

7、Docker制作java Spring Boot 镜像

     新建Java Spring Boot项目，这里需要解除Maven自动构建Docker镜像，使用辅助插件。在项目里配置POM。
     
    推荐使用Linux 或者Mac OS可以安装docker，因为Maven构建Docker镜像需要Docker服务器支持。
    
       <!-- tag::plugin[] -->
                  <plugin>
                      <groupId>com.spotify</groupId>
                      <artifactId>dockerfile-maven-plugin</artifactId>
                      <version>1.4.9</version>
                      <configuration>
                          <repository>${docker.image.prefix}/${project.artifactId}</repository>
                      </configuration>
                  </plugin>
            
插件的XML配置

            <plugin>
            <groupId>com.spotify</groupId>
            <artifactId>docker-maven-plugin</artifactId>
            <version>0.2.3</version>
            <configuration>
            <imageName>${docker.image.prefix}/${project.artifactId}</imageName>
            <dockerDirectory>src/main/docker</dockerDirectory>
            <resources>
            <resource>
            <targetPath>/</targetPath>
            <directory>${project.build.directory}</directory>
            <include>${project.build.finalName}.jar</include>
            </resource>
            </resources>
            </configuration>
            </plugin>
            
创建重要的Dockerfile文件，用于打包镜像。基本是程序的主要运行参数信息。以及我们的java Spring Boot的Jar包。

FROM openjdk:8-jdk-alpine
VOLUME /tmp
ARG DEPENDENCY=target/dependency
COPY ${DEPENDENCY}/BOOT-INF/lib /app/lib
COPY ${DEPENDENCY}/META-INF /app/META-INF
COPY ${DEPENDENCY}/BOOT-INF/classes /app
ENTRYPOINT ["java","-cp","app:app/lib/*","hello.Application"]
Java Spring Boot 集成Docker插件的项目结构：

执行命令mvn install dockerfile:build。
构建并生成Docker镜像文件，可以选择上传到DockerHub服务器。

8、Docker搜索Spring Boot镜像

     我们也可以选择去Docker Hub拉去通用的镜像，比如MySQL、MongoDB、Redis、MQ等，
 使用Docker Search 关键字 即可，然后可以选择拉去需要的镜像，节约时间。
 
9、Docker拉去 Spring Boot 镜像

    在命令中输入sudo docker pull  springio/gs-spring-boot-docker 等待下载。

10.Docker运行Spring Boot应用

   下载完毕以后，我们就可以技术来使用Docker运行我们的Spring Boot应用。使用命令：
sudo docker run -p 8080:8080 -t springio/gs-spring-boot-docker

如果没有错误，应该正常启动，端口是8080，我们这里访问http://localhost:8080/hello 可以看到简单的字符串 Hello Docker。
