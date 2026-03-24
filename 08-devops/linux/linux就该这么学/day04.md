tar czvf 压缩包 源文件

        c 打包
        z 压缩格式 gzip 	j 压缩格式bzip2
         .tar.gzip 		.tar.bz2
        v 显示过程 
        f 压缩包名称

grep 关键词 文件名称
grep boot anaconda -ks.cfg

find / -user linuxprobe -exec cp -rf {} /root \;

重定向 输入重定向 输出重定向
重定向：命令与文件之间的处理方法

    >	清空写入

    >>	追加写入

    2>	错误写入

    <	输入重定向

管道符：命令 命令

echo "redhat123456" | passwd --stdin linuxprobe

通配符
ls -l /dev/sda*
[a-z,A-Z]

转义符
\
'单引号'	全局转义
"双引号" 整体

1.以路径的形式来执行
2.命令的别名形式来执行
alias 新命令="原始命令"
/etc/profile 写入文件永久生效
新命令与原始命令互不冲突，可以同时使用
3.解释器的内部命令
4.进行多路径的查找命令并执行













