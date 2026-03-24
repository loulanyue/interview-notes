# 0.如果新安装的系统，提升不支持ifconfig
如果yum不成功，请编辑

         vi /etc/sysconfig/network-scripts/ifcfg-ens33 
         ONBOOT=yes
  
重启后reboot，安装网络插件
yum -y install net-tools

# 1.更新阿里云yum源：

## 版本6：

## wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-6.repo

## 版本7：

## wget -O /etc/yum.repo.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo


# 2.安装 JDK

## 传文件到linux:FileZilla

## /usr/java/jdk1.8.0_201-amd64

vi /etc/profile

      export JAVA_HOME=/usr/jdk/jdk1.8.0_221
      export CLASSPATH=$:CLASSPATH:$JAVA_HOME/lib/ 
      export PATH=$PATH:$JAVA_HOME/bin
      
source /etc/profile
java -version

如果提升未找到请检查操作系统版本与jdk版本是否一致
uname -a


# 3.tomcat安装

## wget http://download.happymmall.com/apache-tomcat-7.0.73.tar.gz

## usr/java/apache-tomcat-7.0.93

## 中文编码URIEncoding="UTF-8"


# 4.maven安装 注意引用加$

## export MAVEN_HOME=/usr/java/apache-maven-3.6.0

## MAVEN_HOME/bin:

      CATALINA_HOME

      export JAVA_HOME=/usr/java/jdk1.8.0_201-amd64
      export CLASSPATH=.:$JAVA_HOME/jre/lib/rt.jar:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar
      export CATALINE_HOME=usr/java/apache-tomcat-7.0.93
      export MAVEN_HOME=/usr/java/apache-maven-3.6.0
      export PATH=$PATH:$JAVA_HOME/bin:$MAVEN_HOME/bin


      export JAVA_HOME=/usr/java/jdk1.8.0_201-amd64
      export CLASSPATH=.:$JAVA_HOME/jre/lib/rt.jar:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar
      export MAVEN_HOME=/usr/java/apache-maven-3.6.0
      export CATALINE_HOME=usr/java/apache-tomcat-7.0.93
      export PATH=$PATH:$JAVA_HOME/bin:/usr/local/bin:$MAVEN_HOME/bin


## wget http://nginx.org/download/nginx-1.15.9.tar.gz

# 配置nginx，后缀加conf
    
    配置/etc/hosts
    include vhost/*.conf
    192.168.189.128 www.imooc.com
    192.168.189.128 e.imooc.com
    192.168.189.128 q.imooc.com

    learning.happymmall.com/nginxconfig/vhost/learning.happymmall.com.conf

## /usr/local/nginx/conf/vhost

## whereis vsftpd
## /usr/sbin/vsftpd /etc/vsftpd /usr/share/man/man8/vsftpd.8.gz

## gliffy画流程图




# 常见问题：

## 1./usr/local/nginx/logs/nginx.pid 

      路径下找不到nginx.pid

      nginx: [error] open() "/usr/local/nginx/logs/nginx.pid" failed (2: No such file or directory)

## 解决方法：

      执行一下nginx

      /usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf
