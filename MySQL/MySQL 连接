使用mysql二进制方式连接
您可以使用MySQL二进制方式进入到mysql命令提示符下来连接MySQL数据库。
实例
以下是从命令行中连接mysql服务器的简单实例：
[root@host]# mysql -u root -p
Enter password:******
在登录成功后会出现 mysql> 命令提示窗口，你可以在上面执行任何 SQL 语句。
以上命令执行后，登录成功输出结果如下:
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 2854760 to server version: 5.0.9

Type 'help;' or '\h' for help. Type '\c' to clear the buffer.
在以上实例中，我们使用了root用户登录到mysql服务器，当然你也可以使用其他mysql用户登录。
如果用户权限足够，任何用户都可以在mysql的命令提示窗口中进行SQL操作。
退出 mysql> 命令提示窗口可以使用 exit 命令，如下所示：
mysql> exit
Bye
使用 PHP 脚本连接 MySQL
PHP 提供了 mysqli_connect() 函数来连接数据库。
该函数有 6 个参数，在成功链接到 MySQL 后返回连接标识，失败返回 FALSE 。
语法
mysqli_connect(host,username,password,dbname,port,socket);
参数说明：
参数	描述
host	可选。规定主机名或 IP 地址。
username	可选。规定 MySQL 用户名。
password	可选。规定 MySQL 密码。
dbname	可选。规定默认使用的数据库。
port	可选。规定尝试连接到 MySQL 服务器的端口号。
socket	可选。规定 socket 或要使用的已命名 pipe。
你可以使用PHP的 mysqli_close() 函数来断开与MySQL数据库的链接。
该函数只有一个参数为 mysqli_connect() 函数创建连接成功后返回的 MySQL 连接标识符。
语法
bool mysqli_close ( mysqli $link )
本函数关闭指定的连接标识所关联的到 MySQL 服务器的非持久连接。如果没有指定 link_identifier，则关闭上一个打开的连接。
提示：通常不需要使用 mysqli_close()，因为已打开的非持久连接会在脚本执行完毕后自动关闭。
实例
你可以尝试以下实例来连接到你的 MySQL 服务器:
连接 MySQL
<?php
$dbhost = 'localhost:3306';  // mysql服务器主机地址
$dbuser = 'root';            // mysql用户名
$dbpass = '123456';          // mysql用户名密码
$conn = mysqli_connect($dbhost, $dbuser, $dbpass);
if(! $conn )
{
    die('Could not connect: ' . mysqli_error());
}
echo '数据库连接成功！';
mysqli_close($conn);
?>
