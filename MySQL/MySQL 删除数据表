MySQL中删除数据表是非常容易操作的， 但是你再进行删除表操作时要非常小心，因为执行删除命令后所有数据都会消失。
语法
以下为删除MySQL数据表的通用语法：
DROP TABLE table_name ;
在命令提示窗口中删除数据表
在mysql>命令提示窗口中删除数据表SQL语句为 DROP TABLE ：
实例
以下实例删除了数据表runoob_tbl:
root@host# mysql -u root -p
Enter password:*******
mysql> use RUNOOB;
Database changed
mysql> DROP TABLE runoob_tbl
Query OK, 0 rows affected (0.8 sec)
mysql>
使用PHP脚本删除数据表
PHP使用 mysqli_query 函数来删除 MySQL 数据表。
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
以下实例使用了PHP脚本删除数据表 runoob_tbl:
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
$sql = "DROP TABLE runoob_tbl";
mysqli_select_db( $conn, 'RUNOOB' );
$retval = mysqli_query( $conn, $sql );
if(! $retval )
{
  die('数据表删除失败: ' . mysqli_error($conn));
}
echo "数据表删除成功\n";
mysqli_close($conn);
?>
执行成功后，我们使用以下命令，就看不到 runoob_tbl 表了：
mysql> show tables;
Empty set (0.01 sec)
