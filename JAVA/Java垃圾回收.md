# Java垃圾回收机制

    对象被判定为垃圾的标准 
    
    没有被其他对象引用

# 判定对象是否为垃圾的算法

	1.引用计数算法
	2.可达性分析算法

# 引用计数算法

	  判定对象的引用数量
	  1.通过判定对象的引用数量来决定对象是否可以被回收
	  2.每个对象实例都有一个引用计数器，被引用则+1，完成引用则-1
	  3.任何引用计数为0的对象实例可以被当作垃圾收集
	  优点：执行效率高，程序执行受影响较小
	  缺点：无法检测出循环引用的情况，导致内存泄露

# 可达性分析算法

	  通过判断对象的引用链是否可达来决定对象是否可以被回收
	  可以作为GC Root的对象
	  1.虚拟机栈中引用的对象（栈帧中的本地变量表）
	  2.方法区中的常量引用的对象
	  3.方法区中的类静态属性引用的对象
	  4.本地方法栈中JNI（Native方法）的引用对象
	  5.活跃线程的引用对象

# 垃圾回收算法

	  标记-清除算法(Mark and Sweep)
	  标记：从根集合进行扫描，对存活的对象进行标记
	  清除：对堆内存从头到尾进行线性遍历，回收不可达对象内存

# 复制算法(Copying)

	  1.分为对象面和空闲面
	  2.对象在对象面上创建
	  3.存活的对象被从对象面复制到空闲面
	  4.将对象面所有对象内存清除

	  好处：
	  解决碎片化问题
	  顺序分配内存，简单高效
	  适用于对象存活率低的场景

# 标记-整理算法(Compacting)

    标记：从根集合进行扫描，对存活的对象进行标记
    清除：移动所有存活的对象，且按照内存地址次序依次排列，然后将末端内存地址以后的内存全部回收

     好处：
    1.避免内存的不连续性
    2.不用设置两块内存互换
    3.适用于存活率高的场景

# 分代收集算法(Generational Collector)

    1.垃圾回收算法的组合拳
    2.按照对象生命周期的不同划分区域以采用不同的垃圾回收算法
    3.目的：提高JVM的回收效率

    jdk6/7
    Young Generation
    Old Generation
    Permanent Generation 永久代
    Jdk8及其以后的版本
    Young Generation
    Old Generation

# 分带收集算法-GC的分类

    1.Minor GC
    2.Full GC

# 年轻代：尽可能快速地收集掉那些生命周期短的对象

    Eden区
    两个Survivor区

# 对象如何晋升到老年代

    1.经历一定Minor次数依然存活的对象
    2.Survivor区存放不下的对象
    3.新生成的大对象(-XX:MaxTenuringThreshold调整岁数)

# 常用的调优参数

    1. -XX:SurvivorRatio：Eden和Survivor的比值，默认8:1
    2. -XX:NewRatio：老年代和年轻代内存大小的比例
    3. -XX:MaxTenuringThreshold：对象从年轻代晋升到老年代经过GC次数的最大阈值


# 老年代：存放生命周期较长的对象

    1.标记-清理算法
    2.标记-整理算法

# 老年代

    Full GC和Major GC
    Full GC比Minor GC慢，但执行频率低

# 触发Full GC的条件

    1.老年代空间不足
    2.永久代空间不足
    3.CMS GC时出现promotion failed,concurrent mode failure
    4.Minor GC晋升到老年代的平均大小大于老年代的剩余空间
    5.调用System.gc()
    6.使用RMI来进行RPC或管理的JDK应用，每小时执行1次Full GC
	
# Stop-the-World

    1.JVM由于要执行GC而停止了应用程序的执行
    2.任何一种GC算法中都会发生
    3.多数GC优化通过减少Stop-the-world发生的时间来提高程序性能

# Safepoint

    1.分析过程中对象引用关系不会发生变化的点
    2.产生Safepoint的地方：方法调用；循环跳转；异常跳转等
    3.安全点数量得适中

# JVM的运行模式

Server
Client

年轻代常见的垃圾收集器

# Serial收集器(-XX:+UseSerialGC，复制算法)

    1.单线程收集，进行垃圾收集时，必须暂停所有工作线程
    2.简单高效，Client模式下默认的年轻代收集器

# ParNew收集器(-XX:+UseNewGC，复制算法)

    1.多线程收集，其余的行为、特点和Serial收集器一样
    2.单核执行效率不如Serial，在多核下执行才有优势

# 吞吐量=运行用于代码时间/(运行用户代码时间+垃圾收集时间)

# Parallel Scavenge收集器(-XX:+UseParallelGC,复制算法)

    1.比起关注用户线程停顿时间，更关注系统的吞吐量
    2.在多核下执行才有优势，Server模式下默认的年轻代收集器


# 老年代常见的垃圾收集器

Serial Old收集器(-XX:+UseSerialOldGC,标记-整理算法)
    1.单线程收集，进行垃圾收集时，必须暂停所有工作线程
    2.简单高效，Client模式下默认的老年代收集器

# Parallel Old收集器(-XX:+UseParallelOldGC,标记-整理算法)

    1.多线程，吞吐量优先

# CMS收集器(-XX:+UseConcMarkSweepGC,标记清除算法)

    1.初始标记：stop-the-world
    2.并发标记：并发追溯标记，程序不会停顿
    3.并发预清理：查找执行并发标记阶段从年轻代晋升到老年代的对象
    4.重新标记：暂停虚拟机，扫描CMS堆中的剩余对象
    5.并发清理：清理垃圾对象，程序不会停顿
    6.并发重置：重置CMS收集器的数据结构

# G1收集器(-XX:+UseG1GC,复制+标记+整理算法)

# Garbage First收集器的特点

    1.并行和并发
    2.分代收集
    3.空间整合
    4.可预测的停顿

# Garbage First收集器

    1.将整个Java堆内存划分成多个大小相等的Region
    2.年轻代和老年代不再物理隔离

jdk11:Epsilon GC 和ZGC



# Object的finalize()方法的作用是否与C++的析构函数作用相同

    1.与C++的析构函数不同，析构函数调用确定，而它的是不确定的
    2.将未被引用的对象放置于F-Queue队列
    3.方法执行随时可能会被终止
    4.给予对象最后一次重生的机会

# Java中的强引用，软引用，弱引用，虚引用的作用

# 强引用(Strong Reference)

    1.最普遍的引用：Object obj=new Object();
    2.抛出OutOfMemoryError终止程序也不会回收具有强引用的对象
    3.通过将对象设置为null来弱化引用，十七被回收

# 软引用(Soft Reference)

    1.对象处在有用但非必须的状态
    2.只有当内存空间不足时，GC会回收该引用的对象的内存
    3.可以用来实现高速缓存
    String str=new String("abc");//强引用
    SoftReference<String> softRef=new SoftReference<String>(str);//软引用

# 弱引用(Weak Reference)

    1.非必须的对象，比软引用更弱一些
    2.GC时会被回收
    3.被回收的概率也不大，因为GC线程优先级比较低
    4.适用于引用偶尔被使用且不影响垃圾收集的对象
    String str=new String("abc");
    WeakReference<String> abcWeakRef=new WeakReference<String>(str);

# 虚引用(PhantomReference)

    1.不会决定对象的生命周期
    2.任何时候都可能被垃圾收集器回收
    3.跟踪对象被垃圾收集器回收的活动，起哨兵作用
    4.必须和引用队列ReferenceQueue联合使用
    String str=new String("abc");
    ReferenceQueue queue=new ReferenceQueue();
    PhantomReference ref=new PhantomReference(str,queue);

# Java中的强引用，软引用，弱引用，虚引用的作用

强引用>软引用>弱引用>虚引用

# 引用队列(ReferenceQueue)

    1.无实际存储结构，存储逻辑依赖于内部节点之间的关系来表达
    2.存储关联的且被GC的软引用


