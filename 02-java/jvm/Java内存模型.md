# 谈谈你对Java的理解

	平台无关性	一次编译到处运行
	GC	垃圾回收机制
	语言特性	泛型 反射 兰姆达表达式
	面向对象	封装 继承 多态
	类库	Java自带的集合 并发库 网络库 IO NIO
	异常处理

# Compile Once, Run Anywhere如何实现
	编译时
	运行时
	Javac编译，生成字节码 
	JVM解析，转换成特定平台的执行指令

# Java源码首先被编译成字节码，再由不同平台的JVM进行解析，Java语言在不同的平台上运行时不需要进行重新编译，Java虚拟机在执行字节码的时候，把字节码转换成具体平台上的机器指令

# 为什么JVM不直接将源码解析成机器码去执行
	准备工作：每次执行都需要各种检查
	兼容性：也可以将别的语言解析成字节码

	JVM如何加载.class文件

# Java虚拟机
	Class Loader：依据特定格式，加载class文件到内存
	Execution Engine：对命令进行解析
	Native Interface：融合不同开发语言的原生库为Java所用
	Runtime Data Area：JVM内存空间结构模型

# 谈谈反射
	JAVA反射机制是在运行状态中，对于任意一个类，都能够知道这个类的所有属性和方法；对于任意一个对象，都能调用它的任意方法和属性；这种动态获取信息以及动态调用对象方法的功能称为java语言的反射机制。

	写一个反射例子
	reflect


# 类从编译到执行的过程
	编译器将Robot.java源文件编译为Robot.class字节码文件
	ClassLoader将字节码转换为JVM中的Class<Robot>对象
	JVM利用Class<Robot> 对象实例化为Robot对象


# 谈谈ClassLoader
	ClassLoader在Java中有着非常重要的作用，它主要工作在Class装载的加载阶段，其主要作用是从系统外部获得Class二进制数据流。它是Java的核心组件，所有的Class都是由ClassLoader进行加载的，ClassLoader负责通过将Class文件里的二进制数据流装载进系统，然后交给Java虚拟机进行连接、初始化等操作。

# ClassLoader的种类
	BootStrapClassLoader：C++编写，加载核心库java.*
	ExtClassLoader：Java编写，加载扩展库javax.*
	AppClassLoader：Java编写，加载程序所在目录
	自定义ClassLoader：Java编写，定制化加载

# 自定义ClassLoader的实现
	关键函数
	protected Class<?> findClass(String name) throws ClassNotFoundException{
		throws new ClassNotFoundException(name);
	}
	protected final Class<?> defineClass(byte[] b,int off,int len) throws ClassFormatError{
		return defineClass(name:null,b,off,len,protectionDomain:null);
	}


# 类的加载方式
	隐式加载：new
	显式加载：loadClass,forName等

# loadClass和forName的区别
	Class.forName得到的class是已经初始化完成的
	Classloader.loadClass得到的class是还没有链接的


# 类的装载过程
	加载：通过ClassLoader加载class文件字节码，生成Class对象
	链接：
		校验：检查加载的class的正确性和安全性
		准备：为类常量分配存储空间并设置类变量初始值
		解析：JVM将常量池内的符号引用转换为直接引用
	初始化：执行类变量赋值和静态代码块


# Java的内存模型
	JVM内存模型-JDK8
	线程私有：程序计数器、虚拟机栈、本地方法栈
	线程共享：MetaSpace、Java堆

# 程序计数器
	当前线程所执行的字节码行号指示器(逻辑)
	改变计数器的值来选取下一条需要执行的字节码指令
	和线程是一对一的关系即“线程私有”
	对Java方法计数，如果是Native方法则计数器值为Undefined
	不会发生内存泄露

	Java虚拟机栈(Stack)
	Java方法执行的内存模型
	包含多个栈帧

# 局部变量表和操作数栈
	局部变量表：包含方法执行过程中的所有变量
	操作数栈：入栈、出栈、复制、交换、产生消费变量

# 递归为什么引发java.lang.StackOverflowError异常
递归过深，栈帧数超出虚拟栈深度

# 虚拟机栈过多会引发java.lang.OutOfMemoryError异常

# JVM 三大性能调优参数 -Xms -Xmx -Xss的含义
	java -Xms128m -Xmx128m -Xss256k -jar xxxx.jar
	-Xss：规定了每个线程虚拟机栈(堆栈)的大小
	-Xms：堆的初始值
	-Xmx：堆能达到的最大值

# Java内存模型中堆和栈的区别-内存分配策略
	1.静态存储：编译时确定每个数据目标在运行时的存储空间需求
	2.栈式存储：数据区需求在编译时未知，运行时模块入口前确定
	3.堆式存储：编译时或运行时模块入口都无法确定，动态分配

# Java内存模型中堆和栈的区别
	联系：引用对象、数组时，栈里定义变量保存堆中目标的首地址
	管理方式：栈自动释放，堆需要GC
	空间大小：栈比堆小
	碎片相关：栈产生的碎片远小于堆
	分配方式：栈支持静态和动态分配，而堆仅支持动态分配
	效率：栈的效率比堆高

## 元空间、堆、线程独占部分间的联系-内存角度
# 元空间：
	Class:HelloWorld - Method:sayHello\setName\main - Field : name
	Class:System
# Java堆：
	Object:String("test")
	Object:HelloWorld
# 线程独占：
	Parameter reference:"test" to String object
	Variable reference:"hw" to HelloWorld object
	Local Variable: a with 1 ,lineNo


# 不同JDK版本之间的intern()方法的区别-JDK6 VS JDK6+

	String s = new String("a");
	s.intern();
	JDK6：当调用intern方法时，如果字符串常量池先前已创建出该字符串对象，则返回池中的该字符串的引用。否则，将此字符串对象添加到字符串常量池中，并且返回该字符串对象的引用。
	JDK6+：当调用intern方法时，如果字符串常量池先前已创建出该字符串对象，则返回池中的该字符串的引用。否则，如果该字符串对象已经存在于Java堆中，则将堆中对此对象的引用添加到字符串常量池中，并且返回该引用；如果堆中不存在，则在池中创建该字符串并返回其引用。







# 内存简介
	逻辑地址-分段管理机制-线性地址-分页管理机制-物理地址
	32位处理器：2^32的可寻址范围
	64位处理器：2^64的可寻址范围

# 地址空间的划分
内核空间
用户空间






