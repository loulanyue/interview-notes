# Linux体系结构

    1.体系结构主要分为用户态(用户上层应用)和内核态
    2.内核：本质是一段管理计算机硬件设备的程序
    3.系统调用：内核的访问接口，是一种能再简化的操作
    4.公用函数库：系统调用的组合拳
    5.Shell:命令解释器，可编程

    uname -a
    cigwin

    man 2 syscalls

    2 系统调用
    3 函数库
	
    ls -lrt
    echo $SHELL
    cat /etc/shells


## 如何查找特定的文件

    find
    语法：find path[options] params
    作用：在指定目录下查找文件

    find -name "target3.java"	
    find / -name "target3.java"	从/下开始查
    find ~ -name "target*"	模糊查询
    find ~ -iname "target*"	不区分大小写



## 检索文件内容

    grep
    语法：grep[options] pattern file
    全称：Global Regular Expression Print
    作用：查找文件里符合条件的字符串

    grep "moo" target*
    grep "haha" target*

## 管道操作符|

    1.可将指令连接起来，前一个指令的输出作为后一个指令的输入

    使用管道注意的要点：
    
    1.只处理前一个命令正确输出，不处理错误输出
    2.右边命令必须能够接收标准输入流，否则传递过程中数据会被抛弃
    3.sed,awk,grep,cut,head,top,less,more,wc,join,sort,split等

    grep 'partial\[true\]' bsc-plat-al-data.info.log
    grep 'partial\[true\]' bsc-plat-al-data.info.log | grep -o 'engine\[[0-9a-z]*\]'

    grep -v
    ps -ef |grep tomcat
    ps -ef | grep tomcat | grep -v "grep"

    find ~ | grep "target"



## 对文件内容做统计

    awk
    语法：awk[options] 'cmd' file
    1.一次读取一行文本，按输入分隔符进行切片，切成多个组成部分
    2.将切片直接保存在内建的变量中，$1,$2...($0表示行的全部)

    awk '{print $1,$4}' netstat.txt

    awk '$1=="tcp"&&$2==1{print $0}' netstat.txt

    awk '($1=="tcp"&&$2==1)||NR==1{print $0}' netstat.txt

    awk -F "," '{print $2}' test.txt

    grep 'partial\[true\]' bsc-plat-al-data.info.log | grep -o 'engine\[[0-9a-z]*\]' | awk '{enginearr[$1]++}END{for(i in enginearr)print i "\t" enginearr[i]}'



## 批量替换文档内容

    sed
    语法：sed [option] 'sed command' filename
    1.全名stream editor,流编辑器
    2.适合用于对文本的行内容进行处理

    sed -i 's/^Str/String/' replace.java
    sed -i 's/\./\;/' replace.java
    sed -i 's/Jack/me/g' replace.java 匹配全部替换
    sed -i '/^ *$/d' replace.java

