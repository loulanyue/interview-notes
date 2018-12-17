win7、win8 系统
win7、win8 等需要利用 docker toolbox 来安装，国内可以使用阿里云的镜像来下载，下载地址：http://mirrors.aliyun.com/docker-toolbox/windows/docker-toolbox/
docker toolbox 是一个工具集，它主要包含以下一些内容：
Docker CLI 客户端，用来运行docker引擎创建镜像和容器
Docker Machine. 可以让你在windows的命令行中运行docker引擎命令
Docker Compose. 用来运行docker-compose命令
Kitematic. 这是Docker的GUI版本
Docker QuickStart shell. 这是一个已经配置好Docker的命令行环境
Oracle VM Virtualbox. 虚拟机
下载完成之后直接点击安装，安装成功后，桌边会出现三个图标，入下图所示：

点击 Docker QuickStart 图标来启动 Docker Toolbox 终端。
如果系统显示 User Account Control 窗口来运行 VirtualBox 修改你的电脑，选择 Yes。

$ 符号那你可以输入以下命令来执行。
$ docker run hello-world
 Unable to find image 'hello-world:latest' locally
 Pulling repository hello-world
 91c95931e552: Download complete
 a8219747be10: Download complete
 Status: Downloaded newer image for hello-world:latest
 Hello from Docker.
 This message shows that your installation appears to be working correctly.

 To generate this message, Docker took the following steps:
  1. The Docker Engine CLI client contacted the Docker Engine daemon.
  2. The Docker Engine daemon pulled the "hello-world" image from the Docker Hub.
     (Assuming it was not already locally available.)
  3. The Docker Engine daemon created a new container from that image which runs the
     executable that produces the output you are currently reading.
  4. The Docker Engine daemon streamed that output to the Docker Engine CLI client, which sent it
     to your terminal.

 To try something more ambitious, you can run an Ubuntu container with:
  $ docker run -it ubuntu bash

 For more examples and ideas, visit:
  https://docs.docker.com/userguide/
Win10 系统
现在 Docker 有专门的 Win10 专业版系统的安装包，需要开启Hyper-V。
开启 Hyper-V

程序和功能

启用或关闭Windows功能

选中Hyper-V

1、安装 Toolbox
最新版 Toolbox 下载地址： https://www.docker.com/get-docker
点击 Get Docker Community Edition，并下载 Windows 的版本：


2、运行安装文件
双击下载的 Docker for Windows Installe 安装文件，一路 Next，点击 Finish 完成安装。


安装完成后，Docker 会自动启动。通知栏上会出现个小鲸鱼的图标，这表示 Docker 正在运行。
桌边也会出现三个图标，入下图所示：
我们可以在命令行执行 docker version 来查看版本号，docker run hello-world 来载入测试镜像测试。
如果没启动，你可以在 Windows 搜索 Docker 来启动：

启动后，也可以在通知栏上看到小鲸鱼图标：

镜像加速
鉴于国内网络问题，后续拉取 Docker 镜像十分缓慢，我们可以需要配置加速器来解决，我使用的是网易的镜像地址：http://hub-mirror.c.163.com。
新版的 Docker 使用 /etc/docker/daemon.json（Linux） 或者 %programdata%\docker\config\daemon.json（Windows） 来配置 Daemon。
请在该配置文件中加入（没有该文件的话，请先建一个）：
{
  "registry-mirrors": ["http://hub-mirror.c.163.com"]
}
