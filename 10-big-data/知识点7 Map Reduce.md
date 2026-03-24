1、输入数据：对文本进行分片，将每片内的数据作为单个Map Worker的输入。


2、Map阶段：Map处理输入，每获取一个数字，将数字的Count 设置为1，并将此对输出，此时以Word作为输出数据的Key。

3、Shuffle>合并排序：在Shuffle阶段前期，首先对每个Map Worker的输出，按照Key值（即Word值）进行排序。排序后进行Combiner操作，即将Key值（Word值）相同的Count累加，构成一个新的对。此过程被称为合并排序。
4、Shuffle>分配Reduce：在Shuffle阶段后期，数据被发送到Reduce端。Reduce Worker收到数据后依赖Key值再次对数据排序。

5、Reduce阶段：每个Reduce Worker对数据进行处理时，采用与Combiner相同的逻辑，将Key值（Word 值）相同的Count累加，得到输出结果。

6、输出结果数据。

**MAPREDUCE规则限制：
**

MaxCompute提供三个版本的MapReduce编程接口，如下所示：

MaxCompute MapReduce、MaxCompute的原生接口，执行速度更快，开发更便捷，不暴露文件系统。

MR2（扩展MapReduce）：对MaxCompute MapReduce的扩展，支持更复杂的作业调度逻辑。MapReduce的实现方式与MaxCompute原生接口一致。

Hadoop兼容版本：高度兼容Hadoop MapReduce ，与MaxCompute原生MapReduce，MR2不兼容。

不能通过MapReduce读写外部表中的数据。

MaxCompute MapReduce的输入、输出，支持MaxCompute内置类型的Bigint、Double、String、Datetime和Boolean类型，不支持您自定义类型。

接受多表输入，且输入表的Schema可以不同。在map函数中，您可以获取当前Record对应的Table信息。

输入可以为空，不支持视图（View）作为输入。

Reduce接受多路输出，可以输出到不同表，或者同一张表的不同分区。不同输出的Schema可以不同。不同输出间通过label进行区分，默认输出不必加label，但目前不接受没有输出的情况。


**JAVA沙箱：
**

MaxCompute MapReduce及UDF程序在分布式环境中运行时，受到Java沙箱的限制（MapReduce作业的主程序，例如MR Main则不受此限制），具体限制如下所示。

不允许直接访问本地文件，只能通过MaxCompute MapReduce/Graph提供的接口间接访问。

读取resources选项指定的资源，包括文件、Jar包和资源表等。

通过System.out和System.err输出日志信息，可以通过MaxCompute客户端的Log命令查看日志信息。

不允许直接访问分布式文件系统，只能通过MaxCompute MapReduce/Graph访问到表的记录。

不允许JNI调用限制。

不允许创建Java线程，不允许启动子进程执行Linux命令。

不允许访问网络，包括获取本地IP地址等，都会被禁止。

Java反射限制：suppressAccessChecks权限被禁止，无法setAccessible某个private的属性或方法，以达到读取private属性或调用private方法的目的。
