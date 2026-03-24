如果我们需要修改或更新 MySQL 中的数据，我们可以使用 SQL UPDATE 命令来操作。.
 语法
以下是 UPDATE 命令修改 MySQL 数据表数据的通用 SQL 语法：
UPDATE table_name SET field1=new-value1, field2=new-value2
[WHERE Clause]
你可以同时更新一个或多个字段。
你可以在 WHERE 子句中指定任何条件。
你可以在一个单独表中同时更新数据。
当你需要更新数据表中指定行的数据时 WHERE 子句是非常有用的。
通过命令提示符更新数据
以下我们将在 SQL UPDATE 命令使用 WHERE 子句来更新 runoob_tbl 表中指定的数据：
实例
以下实例将更新数据表中 runoob_id 为 3 的 runoob_title 字段值：
SQL UPDATE 语句：
mysql> UPDATE runoob_tbl SET runoob_title='学习 C++' WHERE runoob_id=3;
Query OK, 1 rows affected (0.01 sec)
 
mysql> SELECT * from runoob_tbl WHERE runoob_id=3;
+-----------+--------------+---------------+-----------------+
| runoob_id | runoob_title | runoob_author | submission_date |
+-----------+--------------+---------------+-----------------+
| 3         | 学习 C++   | RUNOOB.COM    | 2016-05-06      |
+-----------+--------------+---------------+-----------------+
1 rows in set (0.01 sec)
从结果上看，runoob_id 为 3 的 runoob_title 已被修改。
使用PHP脚本更新数据
PHP 中使用函数 mysqli_query() 来执行 SQL 语句，你可以在 SQL UPDATE 语句中使用或者不使用 WHERE 子句。
注意：不使用 WHERE 子句将数据表的全部数据进行更新，所以要慎重。
该函数与在mysql>命令提示符中执行SQL语句的效果是一样的。
实例
以下实例将更新 runoob_id 为3的 runoob_title 字段的数据。
MySQL UPDATE 语句测试：
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
 
$sql = 'UPDATE runoob_tbl
        SET runoob_title="学习 Python"
        WHERE runoob_id=3';
 
mysqli_select_db( $conn, 'RUNOOB' );
$retval = mysqli_query( $conn, $sql );
if(! $retval )
{
    die('无法更新数据: ' . mysqli_error($conn));
}
echo '数据更新成功！';
mysqli_close($conn);
?>
