使用普通用户登陆 MySQL 服务器，你可能需要特定的权限来创建或者删除 MySQL 数据库，所以我们这边使用 root 用户登录，root 用户拥有最高权限。
在删除数据库过程中，务必要十分谨慎，因为在执行删除命令后，所有数据将会消失。
drop 命令删除数据库
drop 命令格式：
drop database <数据库名>;
例如删除名为 RUNOOB 的数据库：
mysql> drop database RUNOOB;
使用 mysqladmin 删除数据库
你也可以使用 mysql mysqladmin 命令在终端来执行删除命令。
以下实例删除数据库 RUNOOB(该数据库在前一章节已创建)：
[root@host]# mysqladmin -u root -p drop RUNOOB
Enter password:******
执行以上删除数据库命令后，会出现一个提示框，来确认是否真的删除数据库：
Dropping the database is potentially a very bad thing to do.
Any data stored in the database will be destroyed.

Do you really want to drop the 'RUNOOB' database [y/N] y
Database "RUNOOB" dropped
使用PHP脚本删除数据库
PHP使用 mysqli_query 函数来创建或者删除 MySQL 数据库。
该函数有两个参数，在执行成功时返回 TRUE，否则返回 FALSE。
语法
mysqli_query(connection,query,resultmode);
参数	描述
connection	必需。规定要使用的 MySQL 连接。
query	必需，规定查询字符串。
resultmode	
可选。一个常量。可以是下列值中的任意一个：
MYSQLI_USE_RESULT（如果需要检索大量数据，请使用这个）
MYSQLI_STORE_RESULT（默认）
实例
以下实例演示了使用PHP mysqli_query函数来删除数据库：
删除数据库
<?php
$dbhost = 'localhost:3306';  // mysql服务器主机地址
$dbuser = 'root';            // mysql用户名
$dbpass = '123456';          // mysql用户名密码
$conn = mysqli_connect($dbhost, $dbuser, $dbpass);
if(! $conn )
{
    die('连接失败: ' . mysqli_error($conn));
}
echo '连接成功<br />';
$sql = 'DROP DATABASE RUNOOB';
$retval = mysqli_query( $conn, $sql );
if(! $retval )
{
    die('删除数据库失败: ' . mysqli_error($conn));
}
echo "数据库 RUNOOB 删除成功\n";
mysqli_close($conn);
?>

注意： 在使用PHP脚本删除数据库时，不会出现确认是否删除信息，会直接删除指定数据库，所以你在删除数据库时要特别小心。
