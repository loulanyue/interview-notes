# Mysql安装

## 卸载强依赖：

# rpm -ev xxxx --nodeps

# 更换阿里云yum源
    1、备份

    mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup

    2、下载新的CentOS-Base.repo 到/etc/yum.repos.d/


    CentOS 6

    wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-6.repo

    或者

    curl -o /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-6.repo

    CentOS 7

    wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo

    或者

    curl -o /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo

# 解压本地文件xz
# tar -xvJf mysql-8.0.15-linux-glibc2.12-x86_64.tar.xz

    或者：
    
      wget https://dev.mysql.com/get/mysql57-community-release-el6-9.noarch.rpm

      rpm -Uvh mysql57-community-release-el6-9.noarch.rpm 

      yum localinstall -y mysql57-community-release-el6-9.noarch.rpm   

      yum install mysql-community-server
      
或本地包解压

登录密码不正确：

    在my.ini文件添加从此后无需键入密码

    再把my.ini的skip-grant-tables删除

默认配置文件在/etc/my.conf

用户配置，权限配置、新建database

service mysqld restart


MySQL配置

1.查询用户

    select user,host,password from mysql.user

2.改密码

    set password for root@localhost=password('yourpassword');

    set password for root@127.0.0.1=password('yourpassword');

    5.7版本下的mysql数据库下已经没有password这个字段了，password字段改成了authentication_string
    update mysql.user set authentication_string=password('admin') where user='root';

3.登录mysql

    mysql -uroot -p


4.删除匿名用户

    select user,host from mysql.user;
    delete from mysql.user where user='';
    select user,host from mysql.user;
    flush privileges;

5.插入mysql新用户

    insert into mysql.user(Host,User,Password) values("localhost","yourusername",password("yourpassword"));

6.操作生效

    flush privileges;

7.创建新的database

    create database 'mmall' default character set utf8 collate utf8_general_ci;

8.本地用户赋予所有权限

    grant all privileges on mmall. to yourusername@localhost identified by 'yourpassword';

9.给账号开通外网所有权限

    grant all privileges on mmall.* to 'yourusername@'%' identified by 'yourpassword';

    grant select,insert,update on mmall.* to yourusername@'192.11.11.11' identified by 'yourpassword';

    操作生效：
    
    flush privileges;




dql	select

dml insert update delete

ddl create table create view

dcl grant

安装：

    yum -y install mysql-server

配置文件改字符集：

    vim etc/my.conf



    my.cnf添加以下内容，修改好用wq!保存退出

    [client]                   //如果没有[client]段，就自己添加上去
    default-character-set=utf8
    [mysqld]
    character-set-server=utf8
    collation-server=utf8_general_ci

开机启动、防火墙策略：

    chkconfig mysqld on
    chkconfig --list mysqld

    vim /etc/sysconfig/iptables

    -A INPUT -p tcp -m state --state NEW -m tcp --dport 3306 -j ACCEPT

    service iptables restart


mysql删匿名用户：

    select user,host from mysql.user;

    delete from mysql.user where user='';

    flush privileges;

    insert into mysql.user(Host,User,Password) values("localhost","mmall",password("mmall"));

    select user,hsot from mysql.user;

    create database 'mmall' default character set uft8 collate uft8_general_ci;

    grant all privileges on mmall.* to mmall@'%' identified by 'mmall' with grant option;

    grant select,delete,create privileges on mmall.* to mmall@'%' identified by 'mmall' with grant option;

    select * from mysql.user \G;

    flush privileges;

    set password for root@127.0.0.1=password('root');

    select user,hsot,password form mysql.user;







