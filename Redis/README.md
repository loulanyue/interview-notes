## Redis简介

#### Redis是一款开源的使用ANSI C语言编写、遵守BSD协议、支持网络、可基于内存也可持久化的日志型、Key-Value高性能数据库。Redis与其他Key-Value缓存产品相比有以下三个特点：

>	支持数据持久化，可以将内存中的数据保存在磁盘中，重启可再次加载使用
	支持简单的Key-Value类型的数据，同时还提供List、Set、Zset、Hash等数据结构的存储
	支持数据的备份，即Master-Slave模式的数据备份

## Redis优势：

>读速度为110000次/s，写速度为81000次/s，性能极高
具有丰富的数据类型，这个上面已经提过了
Redis所有操作都是原子的，意思是要么成功执行要么失败完全不执行，多个操作也支持事务
丰富的特性，比如Redis支持publish/subscribe、notify、key过期等
 


## Redis性能测试

Redis在make之后有一个redis-benchmark，这个就是Redis提供用于做性能测试的，它可以用来模拟N个客户端同时发出M个请求。首先看一下redis-benchmark自带的一些参数：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190813190147970.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xvdWxhbnl1ZV8=,size_16,color_FFFFFF,t_70)
单核CPU，CPU类型为Intel(R) Xeon(R) CPU E5-2682 v4 @ 2.50GHz
内存4G
带宽1M
操作系统为Centos7
