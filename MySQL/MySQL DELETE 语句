你可以使用 SQL 的 DELETE FROM 命令来删除 MySQL 数据表中的记录。
你可以在 mysql> 命令提示符或 PHP 脚本中执行该命令。
语法
以下是 SQL DELETE 语句从 MySQL 数据表中删除数据的通用语法：
DELETE FROM table_name [WHERE Clause]
如果没有指定 WHERE 子句，MySQL 表中的所有记录将被删除。
你可以在 WHERE 子句中指定任何条件
您可以在单个表中一次性删除记录。
当你想删除数据表中指定的记录时 WHERE 子句是非常有用的。
从命令行中删除数据
这里我们将在 SQL DELETE 命令中使用 WHERE 子句来删除 MySQL 数据表 runoob_tbl 所选的数据。
实例
以下实例将删除 runoob_tbl 表中 runoob_id 为3 的记录：
DELETE 语句：
mysql> use RUNOOB;
Database changed
mysql> DELETE FROM runoob_tbl WHERE runoob_id=3;
Query OK, 1 row affected (0.23 sec)
使用 PHP 脚本删除数据
PHP使用 mysqli_query() 函数来执行SQL语句， 你可以在 SQL DELETE 命令中使用或不使用 WHERE 子句。
该函数与 mysql> 命令符执行SQL命令的效果是一样的。
实例
以下PHP实例将删除 runoob_tbl 表中 runoob_id 为 3 的记录:
MySQL DELETE 子句测试：
<?php
$dbhost = 'localhost:3306';  // mysql服务器主机地址
$dbuser = 'root';            // mysql用户名
$dbpass = '123456';          // mysql用户名密码
$conn = mysqli_connect($dbhost, $dbuser, $dbpass);
if(! $conn )
{
    die('连接失败: ' . mysqli_error($conn));
}
// 设置编码，防止中文乱码
mysqli_query($conn , "set names utf8");
 
$sql = 'DELETE FROM runoob_tbl
        WHERE runoob_id=3';
 
mysqli_select_db( $conn, 'RUNOOB' );
$retval = mysqli_query( $conn, $sql );
if(! $retval )
{
    die('无法删除数据: ' . mysqli_error($conn));
}
echo '数据删除成功！';
mysqli_close($conn);
?>
