Java

1.平台无关性
2.GC
3.语言特性
4.面向对象
5.类库
6.异常处理

Compile Once,Run Anywhere如何实现
Java编译，生成字节码 	JVM解析，转换成特定平台的执行指令

.java文件	.class文件	JVM For Linux/Win/IOS

Java源码首先被编译成字节码，再由不同平台的JVM进行解析，Java语言在不同的平台上运行时不需要进行重新编译，Java虚拟机在执行字节码的时候，把字节码转换成具体平台上的机器指令。

为什么JVM不直接将源码解析成机器码去执行
1.准备工作：每次执行都需要各种检查
2.兼容性：也可以将别的语言解析成字节码


JVM如何加载.class文件
Java虚拟机
1.Class Loader:依据特定格式，加载class文件到内存
2.Execution Engine:对命令进行解析
3.Native Interface:融合不同开发语言的原生库为Java所用
4.Runtime Data Area:JVM内存空间结构模型

