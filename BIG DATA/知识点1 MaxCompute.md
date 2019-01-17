大数据计算服务（MaxCompute，原名ODPS）是一种快速、完全托管的GB/TB/PB级数据仓库解决方案。


MaxCompute服务于批量结构化数据的存储和计算，提供海量数据仓库的解决方案及分析建模服务。

MaxCompute支持SQL、MapReduce、Graph等计算类型及MPI迭代类算法。

TUNNEL是MaxCompute为您提供的数据传输服务，提供高并发的离线数据上传下载服务。支持每天TB/PB级别的数据导入导出，特别适合于全量数据或历史数据的批量导入。Tunnel 为您提供Java编程接口，并且在MaxCompute的客户端工具中，有对应的命令实现本地文件与服务数据的互通。

针对实时数据上传的场景，MaxCompute提供了延迟低、使用方便的DataHub服务，特别适用于增量数据的导入。DataHub还支持多种数据传输插件，例如Logstash、Flume、Fluentd、Sqoop等，同时支持日志服务Log Service中的投递日志到MaxCompute，进而使用DataWorks进行日志分析和挖掘。

MaxCompute以表的形式存储数据，支持多种数据类型，并对外提供SQL查询功能。您可以将MaxCompute作为传统的数据库软件操作，但其却能处理TB、PB级别的海量数据。

MaxCompute SQL不支持事务、索引及Update/Delete等操作。

MaxCompute的SQL语法与Oracle、MySQL有一定差别，您无法将其他数据库中的SQL语句无缝迁移到MaxCompute上来。

在使用方式上，MaxCompute SQL最快可以在分钟、乃至秒级别完成查询，无法在毫秒级别返回结果。

UDF：即用户自定义函数。
MaxCompute提供了很多内建函数来满足您的计算需求，同时您还可以通过创建自定义函数来满足不同的计算需求。

MapReduce：MaxCompute MapReduce是MaxCompute提供的Java MapReduce编程模型，它可以简化开发流程，更为高效。您若使用MaxCompute MapReduce，需要对分布式计算概念有基本了解，并有相对应的编程经验。MaxCompute MapReduce为您提供Java编程接口。

Graph：MaxCompute提供的Graph功能是一套面向迭代的图计算处理框架。图计算作业使用图进行建模，图由点 （Vertex）和边（Edge）组成，点和边包含权值（Value）。通过迭代对图进行编辑、演化，最终求解出结果，典型应用：PageRank、单源最短距离算法 、K-均值聚类算法等。

项目空间（Project）是MaxCompute的基本组织单元，它类似于传统数据库的Database或Schema的概念，是进行多用户隔离和访问控制的主要边界。

一个用户可以同时拥有多个项目空间的权限，通过安全授权，可以在一个项目空间中访问另一个项目空间中的对象，例如表（Table）、资源（Resource）、函数（Function）和实例（Instance）。

表是MaxCompute的数据存储单元，它在逻辑上也是由行和列组成的二维结构，每行代表一条记录，每列表示相同数据类型的一个字段，一条记录可以包含一个或多个列，各个列的名称和类型构成这张表的Schema。

MaxCompute的表格有两种类型：内部表和外部表。

对于内部表，所有的数据都被存储在MaxCompute中，表中的列可以是MaxCompute支持的任意一种数据类型。

对于外部表，MaxCompute并不真正持有数据，表格的数据可以存放在OSS或OTS中 。MaxCompute仅会记录表格的Meta信息，您可以通过MaxCompute的外部表机制处理OSS或OTS上的非结构化数据，例如视频、音频、基因、气象、地理信息等。

分区表是指在创建表时指定分区空间，即指定表内的某几个字段作为分区列。

分区表的意义在于优化查询。查询表时通过where字句查询指定所需查询的分区，避免全表扫描，提高处理效率，降低计算费用。

MaxCompute将分区列的每个值作为一个分区（目录），您可以指定多级分区，即将表的多个字段作为表的分区，分区之间如多级目录的关系。

目前MaxCompute支持Tinyint、Smallint、Int、Bigint、Varchar和String分区类型。

单表分区层级最多6级。单表分区数最多允许60000个分区。一次查询最多查询分区数为10000个分区。

MaxCompute2.0支持的数据类型，包括基本数据类型和复杂类型。

MaxCompute2.0支持的基本数据类型如下表所示，新增类型有TINYINT、SMALLINT、 INT、 FLOAT、VARCHAR、TIMESTAMP和BINARY，MaxCompute表中的列必须是下列描述的任意一种类型。

MaxCompute表的生命周期（LIFECYCLE），指表（分区）数据从最后一次更新的时间算起，在经过指定的时间后没有变动，则此表（分区）将被MaxCompute自动回收。这个指定的时间就是生命周期。

生命授权单位：days（天），只接受正整数。非分区表若指定生命周期，自最后一次数据被修改的时间（LastDataModifiedTime）开始计算，经过days天后数据仍未被改动，则此表无需您干预，将会被MaxCompute自动回收（类似drop table操作）。分区表若指定生命周期，则根据各个分区的LastDataModifiedTime判断该分区是否该被回收。不同于非分区表，分区表的最后一个分区被回收后，该表不会被删除。

生命周期只能设定到表级别，不能在分区级设置生命周期。创建表时即可指定生命周期。

表若不指定生命周期，则表（分区）不会根据生命周期规则被MaxCompute自动回收。

MaxCompute支持上传的单个资源大小上限为500MB，资源包括以下几种类型：File类型。Table类型：MaxCompute中的表。Jar类型：编译好的Java Jar包。Archive类型：通过资源名称中的后缀识别压缩类型，支持的压缩文件类型包括.zip/.tgz/.tar.gz/.tar/jar。

自定义函数（UDF）可以进一步分为标量值函数（UDF），自定义聚合函数（UDAF）和自定义表值函数（UDTF）三种类型。

您在开发完成UDF代码后，需要将代码编译成Jar包，并将此Jar包以Jar资源的形式上传到MaxCompute，最后在MaxCompute中注册此UDF。

任务（Task）是MaxCompute的基本计算单元，SQL及MapReduce功能都是通过任务完成的。

目前，执行计划逻辑上可以被看做一个有向图，图中的点是执行阶段，各个执行阶段的依赖关系是图的边。MaxCompute会依照图（执行计划）中的依赖关系执行各个阶段。在同一个执行阶段内，会有多个进程，也称之为Worker，共同完成该执行阶段的计算工作。同一个执行阶段的不同Worker只是处理的数据不同，执行逻辑完全相同。计算型任务在执行时，会被实例化，您可以操作这个实例（Instance）的信息，例如获取实例状态（Status Instance）、终止实例运行（Kill Instance）等。

另一方面，部分MaxCompute任务并不是计算型的任务，例如SQL中的DDL语句，这些任务本质上仅需要读取、修改MaxCompute中的元数据信息。因此，这些任务无法被解析出执行计划。

在MaxCompute中，部分任务（Task）在执行时会被实例化，以MaxCompute实例（下文简称为实例或Instance）的形式存在。实例会经历运行（Running）和结束（Terminated）两个阶段。

运行阶段的状态为Running（运行中），而结束阶段则会有Success（成功）、Failed（失败）和Canceled（被取消）三种状态。
