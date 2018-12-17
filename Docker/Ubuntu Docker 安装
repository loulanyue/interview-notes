Docker 支持以下的 Ubuntu 版本：
Ubuntu Precise 12.04 (LTS)
Ubuntu Trusty 14.04 (LTS)
Ubuntu Wily 15.10
其他更新的版本……
前提条件
Docker 要求 Ubuntu 系统的内核版本高于 3.10 ，查看本页面的前提条件来验证你的 Ubuntu 版本是否支持 Docker。
通过 uname -r 命令查看你当前的内核版本
runoob@runoob:~$ uname -r

使用脚本安装 Docker
1、获取最新版本的 Docker 安装包
runoob@runoob:~$ wget -qO- https://get.docker.com/ | sh

输入当前用户的密码后，就会下载脚本并且安装Docker及依赖包。


安装完成后有个提示：
    If you would like to use Docker as a non-root user, you should now consider
    adding your user to the "docker" group with something like:

    sudo usermod -aG docker runoob
   Remember that you will have to log out and back in for this to take effect!  
当要以非root用户可以直接运行docker时，需要执行 sudo usermod -aG docker runoob 命令，然后重新登陆，否则会有如下报错

2、启动docker 后台服务
runoob@runoob:~$ sudo service docker start

3、测试运行hello-world
runoob@runoob:~$ docker run hello-world
镜像加速
鉴于国内网络问题，后续拉取 Docker 镜像十分缓慢，我们可以需要配置加速器来解决，我使用的是网易的镜像地址：http://hub-mirror.c.163.com。
新版的 Docker 使用 /etc/docker/daemon.json（Linux） 或者 %programdata%\docker\config\daemon.json（Windows） 来配置 Daemon。
请在该配置文件中加入（没有该文件的话，请先建一个）：
{
  "registry-mirrors": ["http://hub-mirror.c.163.com"]
}
在 Cloud Studio 中运行 Docker
下面我们介绍如何在 Cloud Studio 中安装、使用 Docker：
step1：访问 腾讯云开发者平台，注册/登录账户。
step2：在右侧的运行环境菜单选择："ubuntu"

step3：在下方的终端执行命令，获取最新版本的 Docker 安装包并执行安装：
wget -qO- https://get.docker.com/ | sh
step4：启动 docker 后台服务：
sudo service docker start
step5：测试运行 hello-world：
sudo docker run hello-world
