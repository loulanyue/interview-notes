
MaxCompute Graph是一套面向迭代的图计算处理框架。图计算作业使用图进行建模，图由点（Vertex）和边（Edge）组成，点和边包含权值（Value）。


MaxCompute Graph支持以下图编辑操作：
1、修改点或边的权值。
2、增加/删除点。
3、增加/删除边。


通过迭代对图进行编辑、演化，最终求解出结果，典型应用有：PageRank，单源最短距离算法，K-均值聚类算法 等。您可以使用MaxCompute Graph提供的接口Java SDK编写图计算程序。

MaxCompute Graph能够处理的图必须是是一个由点（Vertex）和边（Edge）组成的有向图。由于MaxCompute仅提供二维表的存储结构，因此需要您自行将图数据分解为二维表格式存储在MaxCompute中。

在进行图计算分析时，使用自定义的GraphLoader将二维表数据转换为MaxCompute Graph引擎中的点和边。至于如何将图数据分解为二维表格式，您可以根据自身的业务场景做决定。

点的结构可以简单表示为 ，分别表示点标识符（ID），权值（Value），状态（Halted, 表示是否要停止迭代），出边集合（Edges，以该点为起始点的所有边列表）。边的结构可以简单表示为 ，分别表示目标点（DestVertexID）和权值（Value）。

image
Vertex 
v0 <0, 0, false, [ <1, 5 >, <2, 10 > ] >
v1 <1, 5, false, [ <2, 3>, <3, 2>, <5, 9>]>
v2 <2, 8, false, [<1, 2>, <5, 1 >]>
v3 <3, Long.MAX_VALUE, false, [<0, 7>, <5, 6>]>
v5 <5, Long.MAX_VALUE, false, [<3, 4 > ]>


迭代计算

一次迭代为一个超步（SuperStep），遍历所有非结束状态（Halted 值为 false）的点或者收到消息的点（处于结束状态的点收到信息会被自动唤醒），并调用其compute(ComputeContext context, Iterable messages)方法。

在您实现的Compute(ComputeContext context, Iterable messages)
方法中：

处理上一个超步发给当前点的消息（Messages）。

根据需要对图进行编辑：

修改点/边的取值。

发送消息给某些点。

增加/删除点或边。

通过Aggregator汇总信息到全局信息。

设置当前点状态，结束或非结束状态。

迭代进行过程中，框架会将消息以异步的方式发送到对应Worker，并在下一个超步进行处理，您无需关心。

迭代终止

满足以下任意一条，迭代即终止。

所有点处于结束状态（Halted值为true）且没有新消息产生。
达到最大迭代次数。

某个Aggregator的terminate方法返回true。
