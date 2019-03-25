# 缓存知识  

  熔断

# 缓存中间件-Memcache和Redis的区别
## Memcache：代码层次类似Hash

    1.支持简单的数据类型
    2.不支持数据持久化存储
    3.不支持主从
    4.不支持分片

## Redis

    1.数据类型丰富
    2.支持数据磁盘持久化存储
    3.支持主从
    4.支持分片

## 为什么redis能这么快 10W+QPS 每秒内查询次数

    1.完全基于内存，绝大部分请求是纯粹的内存操作，执行效率高
    2.数据结构简单，对数据操作也简单
    3.采用单线程，单线程也能处理高并发请求，想多核也可启动多实例
    4.使用多路I/O复用模型，非阻塞IO

## 多路I/O复用模型

    FD:File Descriptor,文件描述符
    一个打开的文件通过唯一的描述符进行引用，该描述符是打开文件的元数据到文件本身的映射

    Select系统调用

## Redis采用的I/O多路复用函数：epoll/kqueue/evport/select?

    1.因地制宜
    2.优先选择时间复杂度为O(1)的I/O多路复用函数作为底层实现
    3.以时间复杂度O(n)的select作为保底
    4.基于react设计模式监听I/O事件


## 说说你用过的redis的数据类型

    供用户使用的数据类型
    1.String:最基本的数据类型，二进制安全
    set name "reids"
    2.Hash:String元素组成的字典，适合用于存储对象
    hmset lilei name "lilei" age 26 title "Senior"
    3.List:列表，按照String元素插入顺序排序
    lpush mylist aaa
    lrange mylist 0 10
    4.Set:String元素组成的无序集合，通过哈希表实现，不允许重复
    sadd myset 111
    smembers myset
    5.Sorted Set:通过分数来为集合中的成员进行从小到大的排序
    zadd myzset 3 abc
    zrangebyscore myzset 0 10
    6.用于计数的HyperLogLog，用于支持存储地理位置信息的Geo

## 底层数据类型基础：

    1.简单的动态字符串
    2.链表
    3.字典
    4.跳跃表
    5.整数集合
    6.压缩列表
    7.对象


## 从海量Key里查询出某一固定前缀的Key 留意细节

    KEYS pattern:查找所有符合给定模式pattern的key

    dbsize
    keys k1* 数据量大，卡住
    1.KEYS指令一次性返回所有匹配的key
    2.键的数量过大会使服务卡顿

## SCAN cursor [MATCH pattern] [COUNT count]

    1.基于游标的迭代器，需要基于上一次的游标延续之前的迭代过程
    2.以0作为游标开始一次新的迭代，直到命令返回游标0完成一次遍历
    3.不保证每次执行都返回某个给定数量的元素，支持模糊查询
    4.一次返回的数量不可控，只能是大概率符合count参数

    scan 0 match k1* 10

# 如何通过Redis实现分布式锁
## 分布式锁需要解决的问题

    1.互斥性
    2.安全性
    3.死锁
    4.容错

## SETNX key value:如果key不存在，则创建并赋值

    1.时间复杂度:O(1)
    2.返回值：设置成功，返回1；设置失败，返回0
    get locknx
    setnx locknx test

## 如何解决SETNX长期有效的问题

    EXPIRE key seconds
    1.设置key的生存时间，当key过期时(生存时间为0)，会被自动删除
    2.缺点：原子性得不到满足


## 如何通过Redis实现分布式锁

    SET key value [EX seconds] [PX milliseconds] [NX|XX]
    1.EX second:设置键的过期时间为second秒
    2.PX millisecond:设置键的过期时间为millisecond毫秒
    3.NX:只在键不存在时，才对键进行设置操作
    4.XX:只在键已经存在时，才对键进行设置操作
    5.SET操作成功完成时，返回OK，否则返回nil
      set locktarget 12345 ex 10 nx
      10秒后可改

## 大量的key同时过期的注意事项

    集中过期，由于清除大量的key很耗时，会出现短暂卡顿的现象
    1.解决方案：在设置key的过期时间的时候，给每个key加上随机值



## 如何使用Redis做异步队列

    使用List作为队列，RPUSH生产消息，LPOP消费消息
    1.缺点：没有等待队列里有值就直接消费
    2.弥补：可以通过在应用层引入Sleep机制去调用LPOP重试

    rpush testlist aaa
    lpop testlist



## BLPOP key [key ...] timeout:阻塞直到队列有消息或者超时

    缺点：只能提供一个消费者消费
    rpush testlist aaa
    blpop testlist 30


## pub/sub:主题订阅者模式

    消息的发布是无状态的，无法保证可达

    subscribe myTopic
    subscribe myTopic
    subscribe anotherTopic
    publish myTopic "I Love you"


## Redis如何做持久化

    RDB(快照)持久化：保存某个时间点的全量数据
    1.SAVE:阻塞Redis的服务器进程，直到RDB文件被创建完毕
    2.BGSAVE:Fork出一个子进程来创建RDB文件，不阻塞服务器进程

    vim redis.conf
    save 900 1
    save 300 10 
    save 60 10000
    stop-writes-on-bgsave-error yes 错误停止写入
    rdbcompression no 压缩


## 自动化触发RDB持久化的方式

    1.跟进redis.conf配置里的SAVE m n 定时触发(用的是BGSAVE)
    2.主从复制时，主节点自动触发
    3.执行Debug Reload
    4.执行Shutdown且没有开启AOF持久化


## BGSAVE原理：

    系统调用fork():创建进程，实现了Copy-on-Write


## Copy-on-Write

    如果有多个调用者同时要求相同资源(如内存或磁盘上的数据存储)，他们会共同获取相同的指针指向相同的资源，直到某个调用者试图修改资源的内容时，系统才会真正复制一份专用副本给该调用者，而其他调用者所见到的最初的资源仍然保持不变


## RDB持久化

    缺点：
    1.内存数据的全量同步，数据量大会由于I/O而严重影响性能
    2.可能会因为Redis挂掉而丢失从当前至最近一次快照期间的数据


## Redis如何做持久化

    AOF(Append-Only-File)持久化：保持写状态
    1.记录下除了查询以外的所有变更数据库状态的指令
    2.以append的形式追加保存到AOF文件中(增量)

      vim redis.conf
      appendonly yes
      appendfsync everysec

      ./redis-cli
      config set appendonly yes
      set aofTest "haha"
      exit
      ls appendonly.aof

## AOF持久化

    日志重写解决AOF文件大小不断增大的问题，原理如下：
    1.调用fork()，创建一个子进程
    2.子进程把新的AOF写到一个临时文件里，不依赖原来的AOF文件
    3.主进程持续将新的变动同时写到内存和原来的AOF里
    4.主进程获取子进程重写AOF的完成信号，往新AOF同步增量变动
    5.使用新的AOF文件替换掉旧的AOF文件


## Redis数据的恢复

    RDB和AOF文件共存情况下的恢复流程


## RDB和AOF的优缺点

    1.RDB优点：全量数据快照，文件小，恢复快
    2.RDB缺点：无法保存最近一次快照之后的数据
    3.AOF优点：可读性高，适合保存增量数据，数据不易丢失
    4.AOF缺点：文件体积大，恢复时间长


## RDB-AOF混合持久化方式

    1.BGSAVE做镜像全量持久化，AOF做增量持久化

## 使用Pipeline的好处

    1.Pipeline和Linux的管道类似
    2.Redis基于请求/响应模型，单个请求处理需要一一应答
    3.Pipeline批量执行指令，节省多次IO往返的时间
    4.有顺序依赖的指令建议分批发送

## Redis的同步机制

    主从同步原理
    全同步过程
    1.Salve发送sync命令到Master
    2.Master启动一个后台进程，将Redis中的数据快照保存到文件中
    3.Master将保存数据快照期间接收到的写命令缓存起来
    4.Master完成写文件操作后，将该文件发送给Savle
    5.使用新的AOF文件替换掉旧的AOF文件
    6.Master将这期间收集的增量写命令发送给Salve端

## 增量同步操作

    1.Master接收到用户的操作指令，判断是否需要传播到Slave
    2.将操作记录追加到AOF文件
    3.将操作传播到其他Slave:1、对齐主从库；2、往响应缓存写入指令
    4.将缓存中的数据发送给Slave


## Redis Sentinel 哨兵模式

    解决主从同步Master宕机后的主从切换问题：
    1.监控：检查主从服务器是否运行正常
    2.提醒：通过API向管理员或者其他应用程序发送故障通知
    3.自动故障迁移：主从切换


## 留言协议Gossip 在杂乱无章中寻求一致

    1.每个节点都随机地与对方通信，最终所有节点的状态达成一致
    2.种子节点定期随机向其他节点发送节点列表以及需要传播的消息
    3.不保证信息一定会传递给所有节点，但是最终会趋于一致


## Redis的集群原理

    如何从海量数据里快速找到所需？
    1.分片：按照某种规则去划分数据，分散存储在多个节点上
    2.常规的按照哈希划分无法实现节点的动态增减

    一致性哈希算法：对2^32取模，将哈希值空间组织成虚拟的圆环
    将数据key使用相同的函数Hash计算出哈希值
    Node C宕机
    新增服务器 Node X
    Hash环的数据倾斜问题
    引入虚拟节点解决数据倾斜的问题





