# Java Basics

这个目录用于收纳 Java 基础语法、面向对象、常见语法点和开发中的零散问题。

并发、多线程、锁、JMM 相关内容已经统一收口到 [../concurrency/Java 并发.md](../concurrency/Java%20并发.md)，不再放在基础目录首页里。

## 推荐入口

- [Java 简介](./Java 简介.md)
- [Java 基础语法](./Java 基础语法.md)
- [Java 基本数据类型](./Java 基本数据类型.md)
- [Java 对象和类](./Java 对象和类.md)
- [Java 继承](./Java 继承.md)
- [Java 接口](./Java 接口.md)
- [Java 异常处理](./Java 异常处理.md)
- [Java 泛型](./Java 泛型.md)
- [Java 正则表达式](./Java 正则表达式.md)
- [Java常见问题](./Java常见问题.md)
- [JSON转换](./JSON转换.md)
    2.2如果线程闲置的时间超过阈值，则会被终止并移除缓存
    2.3系统长时间闲置的时候，不会消耗什么资源
    3.newSingleThreadExecutor()
    创建唯一的工作者线程来执行任务，如果线程异常结束，会有另一个线程取代它
    4.newSingleThreadExecutor()与newScheduledThreadPool(int corePoolSize)定时或者周期性的工作调度，两者的区别在于单一工作线程还是多个线程
    5.newWorkStealingPool()
    内部会构建ForkJoinPool，利用working-stealing算法，并行地处理任务，不保证处理顺序

# Fork/Join框架

    把大任务分割成若干个小任务并行执行，最终汇总每个小任务结果后得到大任务结果的框架
    Work-Stealing算法：某个线程从其他队列里窃取任务来执行

# 为什么要使用线程池

    1.降低资源消耗
    2.提高线程的可管理性

# J.U.C的三个Executor接口

    1.Executor：运行新任务的简单接口，将任务提交和任务执行细节解耦
    2.ExecutorService：具备管理执行器和任务生命周期的方法，提交任务机制更完善
    3.ScheduledExecutorService：支持Future和定期执行任务

# ThreadPoolExecutor 的构造函数

    1.corePoolSize：核心线程数量
    2.maximumPoolSize：线程不够用时能够创建的最大线程数
    3.workQueue：任务等待队列
    4.keepAliveTime：抢占的顺序不一定，看运气
    5.threadFactory：创建新线程，Executor.defaultThreadFactory()

# handler：线程池的饱和策略

    1.AbortPolicy：直接抛出异常，这是默认策略
    2.CallerRunsPolicy：用调用者所在的线程来执行任务
    3.DiscardOldestPolicy：丢弃队列中靠最前的任务，并执行当前任务
    4.DiscardPolicy：直接丢弃任务
    5.实现RejectedExecutionHandler接口的自定义handler

# 新任务提交execute执行后的判断

    1.如果运行的线程少于corePoolSize，则创建新线程来处理任务，即使线程池中的其他线程是空闲的
    2.如果线程池中的线程数量大于等于corePoolSize且小于maximumPoolSize，则只有当workQueue满时才创建新的线程去处理任务
    3.如果设置的corePoolSize和maximumPoolSize相同，则创建的线程池的大小是固定的，这时如果有新任务提交，若workQueue未满，则将请求放入workQueue中，等待有空闲的线程去从workQueue中取任务并处理
    4.如果运行的线程数量大于等于maximumPoolSize，这时如果workQueue已经满了，则通过handler所指定的策略来处理任务

# 线程池的状态

    1.RUNNING：能接受新提交的任务，并且也能处理阻塞队列中的任务
    2.SHUTDOWN：不再接受新提交的任务，但可以处理存量任务
    3.STOP：不再接受新提交的任务，也不处理存量任务
    4.TIDYING：所有的任务都已终止
    5.TERMINATED：terminated()方法执行完后进入该状态

# 线程池的大小如何选定

    1.CPU密集型：线程数=按照核数或者核数+1设定
    2. I/O密集型：线程数=CPU核数*(1+平均等待时间/平均工作时间)

---

<!-- note-nav:start -->
## 导航
- [返回仓库首页](../../README.md)
- [返回上一级导航](../README.md)
<!-- note-nav:end -->
