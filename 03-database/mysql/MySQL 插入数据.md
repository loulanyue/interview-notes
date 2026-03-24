MySQL 表中使用 INSERT INTO SQL语句来插入数据。
你可以通过 mysql> 命令提示窗口中向数据表中插入数据，或者通过PHP脚本来插入数据。
语法
以下为向MySQL数据表插入数据通用的 INSERT INTO SQL语法：
INSERT INTO table_name ( field1, field2,...fieldN )
                       VALUES
                       ( value1, value2,...valueN );
如果数据是字符型，必须使用单引号或者双引号，如："value"。
通过命令提示窗口插入数据
以下我们将使用 SQL INSERT INTO 语句向 MySQL 数据表 runoob_tbl 插入数据
实例
以下实例中我们将向 runoob_tbl 表插入三条数据:
root@host# mysql -u root -p password;
Enter password:*******
mysql> use RUNOOB;
Database changed
mysql> INSERT INTO runoob_tbl 
    -> (runoob_title, runoob_author, submission_date)
    -> VALUES
    -> ("学习 PHP", "菜鸟教程", NOW());
Query OK, 1 rows affected, 1 warnings (0.01 sec)
mysql> INSERT INTO runoob_tbl
    -> (runoob_title, runoob_author, submission_date)
    -> VALUES
    -> ("学习 MySQL", "菜鸟教程", NOW());
Query OK, 1 rows affected, 1 warnings (0.01 sec)
mysql> INSERT INTO runoob_tbl
    -> (runoob_title, runoob_author, submission_date)
    -> VALUES
    -> ("JAVA 教程", "RUNOOB.COM", '2016-05-06');
Query OK, 1 rows affected (0.00 sec)
mysql>
注意： 使用箭头标记 -> 不是 SQL 语句的一部分，它仅仅表示一个新行，如果一条SQL语句太长，我们可以通过回车键来创建一个新行来编写 SQL 语句，SQL 语句的命令结束符为分号 ;。
在以上实例中，我们并没有提供 runoob_id 的数据，因为该字段我们在创建表的时候已经设置它为 AUTO_INCREMENT(自动增加) 属性。 所以，该字段会自动递增而不需要我们去设置。实例中 NOW() 是一个 MySQL 函数，该函数返回日期和时间。
接下来我们可以通过以下语句查看数据表数据：
读取数据表：
select * from runoob_tbl;
输出结果：

使用PHP脚本插入数据
你可以使用PHP 的 mysqli_query() 函数来执行 SQL INSERT INTO命令来插入数据。
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
以下实例中程序接收用户输入的三个字段数据，并插入数据表中：
添加数据
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
// 设置编码，防止中文乱码
mysqli_query($conn , "set names utf8");
 
$runoob_title = '学习 Python';
$runoob_author = 'RUNOOB.COM';
$submission_date = '2016-03-06';
 
$sql = "INSERT INTO runoob_tbl ".
        "(runoob_title,runoob_author, submission_date) ".
        "VALUES ".
        "('$runoob_title','$runoob_author','$submission_date')";
 
 
 
mysqli_select_db( $conn, 'RUNOOB' );
$retval = mysqli_query( $conn, $sql );
if(! $retval )
{
  die('无法插入数据: ' . mysqli_error($conn));
}
echo "数据插入成功\n";
mysqli_close($conn);
?>
对于含有中文的数据插入，需要添加 mysqli_query($conn , "set names utf8"); 语句。
接下来我们可以通过以下语句查看数据表数据：
读取数据表：
select * from runoob_tbl;
