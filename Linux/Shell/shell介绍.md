第一章：让工作变得高效率的shell介绍

1.1 什么是shell	shell的简介介绍

	简介：
		shell是一种脚本语言，优势一种命令语言，可以通俗一点来讲，shell脚本就是一系列命令的集合，可以在Unix/linux上面直接使用，并且直接调用大量系统内部的功能来解释执行程序把一些重复性工作交给shell做，来实现自动化运维。
		
		shell虽然没有C/C++、Java、Python等强大，但也支持了基本的编程元素。例如：if、for、while等循环，还有变量、数组、字符串、注释、加减乘除逻辑运算等
		
		
1.2 shell的应用场景以及课程大纲
	
	应用场景：
		
		shell主要用来开发一些实用的、自动化的小工具，而不是用来开发具有复杂业务逻辑的中大型软件
		
		第一方面：监控linux系统环境的使用情况
		第二方面：数据的处理，eg:日志的切割、分析、统计等
		第三方面：与数据库的交互，对数据库进行增删改查等操作
		第四方面：监控进程，自动化启停服务进程
		第五方面:完成一些重复性的工作，eg:创建100个新用户；到服务器集群配置某个文件等
		
1.3 linux的基本操作命令
	
	简介：30个常用的命令
	
		1.cd	切换目录
		2.ls	历程目录内容	ls -lrt  r倒序  man ls查看帮助
		3.cat	查看小文件
		4.chmod	修改文件或目录权限	chmod u+x 1.txt
		5.chown	变更文件或目录的拥有者或所属群组 chown mysql:mysql test.txt 
		6.cp	拷贝文件	cp test.sh test.sh_bak
		7.diff	对比文件差异	diff test.sh test.sh_bak
		
		8.find	查询文件	find ./ -name test.txt
		9.mv	移动或更名现有的文件或目录	mv test.sh /bin/
		10.rm	删除文件或目录	
		11.touch 	创建一个空文件
		12.which 	在环境变量$PATH设置的目录里查找符合条件的文件	which find
		13.ssh	远程安全登录方式
		14.grep	查找文件里符合条件的字符串	grep test test.txt
		15.wc	统计行	wc -l 12.sh
		16.date	查询主机当前时间	
		17.exit	退出	
		18.kill	杀进程	ps -ef | awk '$1=="test" {print $2}' | xargs kill -9
		19.id	命令	
		20.ps 	查看进程情况	ps -ef | grep 1.txt
		21.sleep	休眠时间	
		22.uname	查询主机信息	uname -a
		23.passwd	修改用户密码	
		24.ping		查看物流是否通
		25.df		查看磁盘空间使用情况	df -h
		26.echo		标准输出命令	echo $z
		27.pwd		查询所在目录
		28.head		查看文件前面N行	head -10 1.txt
		29.tail		查看文件后后N行	tail -10 1.txt
		30.mkdir	创建目录
		
第二章：shell的使用技巧

	2.1 推荐使用原厂链接软件以及vi编辑器的基本使用
	
		(1)软件
			CRT
			putty
			echo $LANG
		(2)vi编辑器：vi编辑器是所有Unix及Linux系统下标准的编辑器，它的强大不逊色于任何最新的文本编辑器
			
			vi基本概念：
			
			1）命令行模式
				x	删除一个字符
				dd	删除一行
			2）插入模式
				i	在光标前
				o	在当前行之下新开一行
			3）底行模式
				x或wq	保存退出
				q!		退出不保存
				set nu	显示行数
				/		搜索内容
				
	2.2 linux必备基础知识之shell常见的解释器
	
		简介：常见的解释器
		解释器：是一种命令解释器，主要作用是对命令进行运行和解释，将需要执行的操作传递给操作系统内核并执行
		
		#!/bin/bash（默认）
		#!/bin/ksh
		#!/bin/bsh
		#!/bin/sh
		
		注意：面试官，shell一定得有解释器吗？ 不一定
		
	2.3 shell脚本文件权限与脚本执行
	简介：shell是怎么执行的
		
		文件权限：-rw-r--r--
		目录权限：drw-r--r--
		分三列：每三个为一列，分别是所有者(owner),所属组(group),其它(others)
		
		rwx r:4 w:2 x:1
		
		执行方法：
		
			方法1：添加执行权限 chmod +x useradd.sh
			方法1：./useradd.sh
			方法2：sh useradd.sh 或者bash useradd.sh
			方法3：source useradd.sh
			
			#!/bin/bash
			#this is my first shell!!!!
			#by yfy 2019-3-8
			echo 'this is my first shell!!!!!'

			
第三章：shell的变量以及常见符号
	
	简介：变量
		常见符号
		常见运算符
		常见的条件判断
	
	3.1常见变量
		
		不同于其它预演需要先声明变量
		shell的变量直接使用，eg:a=15
		调用变量的话 $a 或者 ${}	echo $a echo ${a}pple
		$? $0 $1-$9 $* $#
		
	3.2常见的几个符号
		
		
		>覆盖追加 
		>>不覆盖
		; 执行多条命令
		|管道符
		&&前面的命令执行成功，后面的才可以执行
		||前面的命令执行失败，后面的才可以执行
		""会输出变量值
		‘’输出本身
		``数据命令结果 eg:a=`date`;echo $a
		2>/dev/null 错误输出到无底洞
		1>/dev/null 正确输出到无底洞
		
		
	3.3秒变计算器的运算符
	
		加：expr 12 + 12 echo ${1+1} echo $((1+1))
		减：expr 12 - 12 
		乘：expr 12 \* 12
		除：expr 12 / 12
		
		小数：
			bc计算器
			保留多少位小数可以通过scale
			但是scale只对除法，取余数，乘幂 有效，对加减没有效
			
		
	3.4常见的条件判断
	
		表达式
		
		文件（夹）或者路径
		-e	目录是否存在exist
		-d  是否为路径directory	[ -d /home/hadoop ] && echo "123"
		-f  是否为文件file
		
		权限
		-r  是否有读取权限read
		-w	是否有写入权限write
		-x  是否有执行权限excute
		
		整数值：
		-eq  等于equal
		-ne  不等于 not equal
		-gt  大于greater than
		-lt  小于lesser than
		-ge  大于或者等于greater or equal
		-le  小于或者等于lesser or equal
		
		小数型（浮点型）：		
		
		
		字符串
		=	相等
		!=	不相等

			#!/bin/bash
			#panduanshuru
			#by yfy 2019-3-8

			if [ $1 -eq $2 ]
			then
					echo "$1 equals $2"
			else 
					echo "$1 no equals $2"
			fi

			
			#!/bin/bash
			touch $1
			if [ $? -eq 0 ];then
					echo "$1 SUCESS!"
			fi
			
			
第四章 shell脚本的输入以及脚本拥有特效地输出
	
	简介：用于读取终端输入的read命令
		给脚本上色
	
	4.1 shell脚本输入之read命令
	
		语法：read -p “请您输入密码”
		
		-p:给出提示符，默认不支持“\n”换行
		-s:隐藏输入的内容
		-t:给出等待的时间，超时会退出read
		-n:限制读取字符的个数，触发到临界值会自动执行
		
	4.2 shell脚本输出上色
	
		语法：echo -e "\033[字背景颜色;字体颜色;特效m字符串\033]关闭属性"
		
		#字体色范围：30-37
			echo -e "\033[30m 黑色字 \033[0m"
			echo -e "\033[31m 红色字 \033[0m"
			echo -e "\033[32m 绿色字 \033[0m"
			echo -e "\033[33m 黄色字 \033[0m"
			echo -e "\033[34m 蓝色字 \033[0m"
			echo -e "\033[35m 紫色字 \033[0m"
			echo -e "\033[36m 天蓝字 \033[0m"
			echo -e "\033[37m 白色字 \033[0m"
		#字体色范围：40-47
			echo -e "\033[40;30m 黑底白字 \033[0m"
			echo -e "\033[41;31m 红底黑字 \033[0m"
			echo -e "\033[42;32m 绿底蓝字 \033[0m"
			echo -e "\033[43;33m 黄底蓝字 \033[0m"
			echo -e "\033[44;34m 蓝底黑字 \033[0m"
			echo -e "\033[45;35m 紫底黑字 \033[0m"
			echo -e "\033[46;36m 天蓝底黑字 \033[0m"
			echo -e "\033[47;37m 白底蓝字 \033[0m"
		#特效范围
			echo -e "\033[0m 无任何特效 \033[0m"
			echo -e "\033[1m 高亮度 \033[0m"
			echo -e "\033[4m 下划线 \033[0m"
			echo -e "\033[5m 闪烁 \033[0m"
			
			
			
第五章 处理海量数据的grep cut awk sed 命令

	简介：grep cut awk sed 常常应用在查找日志、数据、输出结果等等，并对我们想要的数据进行提取，通常grep sed 命令是对行进行提取，cut 跟awk是对列进行提取
	
	5.1 处理海量数据子grep命令
	
		grep 应用场景：通常对数据进行 行的提取
		
		语法：grep[选项]...[内容]...[file]
			
			-v	对内容进行取反提取
			
			-n	对提取的内容显示行号
			
			-w	精确匹配
			
			-i  忽略大小写
			
			^	匹配开头行首
			
			-E	正则匹配
			
			
	5.2 处理海量数据之cut命令
		
		cut应用场景：通常对数据进行列的提取
		
		语法：cut [选项] ...[file]
		
		-d	指定分隔符
		
		-f  指定截取区域
		
		-c  以字符为单位进行分割
		
		注意：不加-d选项，默认为制表符，不是空格
		
		
			eg:以':'为分隔符，截取出/etc/passwd的第一列跟第三列
			cut -d ':' -f 1,3 /etc/passwd

			eg:以':'为分隔符，截取出/etc/passwd的第一列到第三列
			cut -d ':' -f 1-3 /etc/passwd

			eg:以':'为分隔符，截取出/etc/passwd的第二列到最后一列
			cut -d ':' -f 2- /etc/passwd

		-c
			eg:截取出/etc/passwd文件第二个字符到第九个字符
			cut -c 2-9 /etc/passwd

			eg:比如领导想让你截取linux上面所有可登陆的普通用户
			grep '/bin/bash' /etc/passwd |cut -d ':' -f 1 | grep -v root
		
		
	5.3 处理海量数据之awk命令
		
		awk简介：其实是一门语言，支持条件判断，数组，循环等功能，与grep,sed被称为linux三剑客，之所以叫awk是因为其三位创始人 的首字符
		
		awk的应用场景：通常对数据进行列的提取
		
		语法：
			
			awk '条件{执行动作}' 文件名
			
			awk '条件1{执行动作} 条件2{执行动作}...' 文件名
			
			或awk [选项]'条件1{执行动作} 条件2{执行动作}...' 文件名

			
		特殊要点与举例说明：
			
			printf 格式化输出，不会自动换行
					（%ns：字符串型，n代表有多个字符；
					%ni：整型，n代表输出几个数字；
					%.nf:浮点型，n代表的是小数点后有多少个小数
					）
			
			print	打印出内容，默认会自动换行
			
			\t		制表符
			\n		换行
				
				eg:printf '%s\t %s\t %s\t \n' 1 2 3 4 5 6
				eg：df -h |grep /dev/sda1 | awk '{printf "/dev/sda1的使用率是: "} {print $5}'
				小数：echo "scale=2; 0.13 + 0.1" | bc | awk '{printf "%.5f\n",$0 }' 
			
			$1	代表第一列
			$2	代表第二列
			$0	代表一整行
			
				eg:df -h |grep /dev/sda1 | awk '{print $5}'
			
			-F	指定分隔符
				
				eg:cat /etc/passwd |awk -F":" '{print $1}'
				
			BEGIN	在读取所有行内容前就开始执行，常常被用于修改内置变量的值
			FS	BEGIN时定义分隔符
			
				eg: cat /etc/passwd | awk 'BEGIN {FS=":"} {print $1}'
				
			END	结束的时候执行
				
				eg：cat /etc/passwd |awk -F":" '{print $1} END {printf "以上是执行的结果噢\n"}'
				
			NR	行号
				
				eg:df -h | awk 'NR==2 {print $5}' 
					awk '(NR>=20 && NR<=30) {print $1}' /etc/passwd
					
	
	5.4 处理海量数据之sed命令
		sed的应用场景：主要对数据进行处理（选取，新增，替换，删除，搜索）
		
			sed语法： sed[选项][动作] 文件名
			
				常见的选项与参数：
				
					-n	把匹配到的输出打印到屏幕
					p	以行未单位进行查询，通常与-n一起使用
						eg:df -h |sed -n '2p'
					
					d	删除
						eg:sed '2d' df.txt
					
					a	在行的下面插入新的内容
						eg:sed '2a 123' df.txt
					
					i	在行的上面插入新的内容
						eg:sed '2i 1234' df.txt
					
					c 	替换
						eg:sed '2c 12345' df.txt
					
					s/要被取代的内容/新的字符串/g 	指定内容进行替换
						eg:sed 's/0%/100%/g' df.txt
						
					-i 对源文件进行修改（高危操作，慎用，用之前需要备份源文件）
					
					搜索：在文件中搜索内容
						eg:cat -n df.txt |sed -n '/100%/p'
						
					-e 	表示可以执行多条动作
						eg:cat -n df.txt |sed -n -e 's/100%/100%--100%/g' -e 's/100%/100%--100%/g'
