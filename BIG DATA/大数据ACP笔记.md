数据工场
基本概念 https://help.aliyun.com/document_detail/30257.html?spm=a2c4g.11186623.6.541.oiqbz7
MaxCompute 支持 SQL、MapReduce、Graph 等计算类型及 MPI 迭代类算法。
MaxCompute批量、历史数据通道是Tunnel，实时、增量数据通道，可以用DataHub，DataHub还支持多种数据传输插件：Logstash、Flume、Fluentd、Sqoop，支持日志服务Log Service。
MaxCompute 支持多种计算模型：SQL、UDF、MapReduce、Graph
MaxCompute SDK：
https://help.aliyun.com/document_detail/34614.html?spm=a2c4g.11186623.2.18.uBsiqW
MapReduce：
https://help.aliyun.com/document_detail/27875.html?spm=a2c4g.11186623.2.13.uBsiqW
UDF：
https://help.aliyun.com/document_detail/27866.html?spm=a2c4g.11186623.2.22.cmHUQg

MaxCompute Graph 是一套面向迭代的图计算处理框架。图计算作业使用图进行建模，图由点（Vertex）和边（Edge）组成，点和边包含权值（Value）。https://help.aliyun.com/document_detail/27901.html?spm=a2c4g.11186623.6.669.MLWaOz


DataHub
https://help.aliyun.com/document_detail/47439.html?spm=a2c4g.11174283.3.1.vKmf5b
阿里云流数据处理平台DataHub是流式数据（Streaming Data）的处理平台，提供对流式数据的发布（Publish），订阅（Subscribe）和分发功能，让您可以轻松构建基于流式数据的分析和应用。DataHub服务可以对各种移动设备，应用软件，网站服务，传感器等产生的大量流式数据进行持续不断的采集，存储和处理。您可以编写应用程序或者使用流计算引擎来处理写入到DataHub的流式数据，比如：实时web访问日志、应用日志、各种事件等，并产出各种实时的数据处理结果，比如：实时图表、报警信息、实时统计等。
DataHub服务基于阿里云自研的飞天平台，具有高可用，低延迟，高可扩展，高吞吐的特点。DataHub与阿里云流计算引擎StreamCompute无缝连接，您可以轻松使用SQL进行流数据分析。
DataHub服务也提供分发流式数据到各种云产品的功能，目前支持分发到MaxCompute（原ODPS），OSS等。
StreamCompute是阿里云提供的流计算引擎，提供使用类SQL的语言来进行流式计算。DataHub 和StreamCompute无缝结合，可以作为StreamCompute的数据源和输出源。



DataWorks
项目状态：项目一般分为正常、初始化中、初始化失败、删除中、删除五种状态。
修改服务

通常情况下，通过DataWorks的项目空间实现数据开发和运维，包含以下操作：
步骤1：建表并上传数据
（创建；本地上传·最大10M；tunnel；dataX）
步骤2：创建工作流
（支持的任务类型：ODPS_SQL、ODPS_MR、数据同步、OPEN_MR、机器学习、SHELL、虚节点）
步骤3：创建同步任务
步骤4：设置周期和依赖
步骤5：运维及日志排错
如何确认实例运行的定时时间和相互依赖关系符合预期呢？提供三种触发方式：测试运行、补数据运行、周期运行。
测试运行：手动触发方式。如果您仅需确认单个任务的定时情况和运行，建议使用测试运行。
补数据运行：手动触发方式。如果您需要确认多个任务的定时情况和相互依赖关系，或者需要从某个根任务开始重新执行数据分析计算，可以考虑使用此方式。
周期运行：系统自动触发方式。提交成功的任务，调度系统在第二天０点起会自动生成当天不同时间点的运行实例，并在定时时间达到时检查各实例的上游实例是否运行成功，如果定时时间已到并且上游实例全部运行成功，则当前实例会自动触发运行，无需人工干预。



调度资源
资源名称：调度资源组名称，由英文字母、下划线、数字组成，不超过 60 个字符，创建后不支持修改。
DataWorks（数据工场）的调度资源分为以下两种模式：
默认调度资源、自定义调度资源。
自定义调度资源指用户自购 ECS，配置成可以执行分发任务的调度服务器。组织管理员（主账号）可以新建自定义调度资源，调度资源包括若干台物理机或 ECS，用于执行数据同步任务、SHELL 任务、ODPS_SQL、OPEN_MR 任务。


数据集成，是阿里集团对外提供的稳定高效、弹性伸缩的数据同步平台。致力于提供复杂网络环境下、丰富的异构数据源之间数据   高速稳定的数据移动及同步能力。

数据集成提供丰富的数据源支持，如下所示：
文本存储（FTP / SFTP / OSS / 多媒体文件等）。
数据库（RDS / DRDS / MySQL / PostgreSQL 等）。
NoSQL（Memcache / Redis / MongoDB / HBase 等）。
大数据（MaxCompute / AnalyticDB / HDFS 等）。
MPP 数据库（HybridDB for MySQL 等）。

同步有两种模式：向导模式、脚本模式；
脚本模式用json脚本，向导模式生成的代码可以转换为脚本模式，但不能反向。代码编写前要完成数据源的配置和目标表的创建。
同步·网络类型，三种：
经典网络：统一部署在阿里云的公共基础网络内，网络的规划和管理由阿里云负责，更适合对网络易用性要求比较高的客户。
专有网络（VPC）：基于阿里云构建出一个隔离的网络环境。可以完全掌控自己的虚拟网络，包括选择自有的 IP 地址范围，划分网段，以及配置路由表和网关。
本地IDC网络（规划中）：您自身构建机房的网络环境，与阿里云网络是隔离不可用的。
配置同步，不懂：https://help.aliyun.com/document_detail/49808.html?spm=a2c4g.11186623.6.588.VxW0nN
……【整个数据集成基本处于懵逼状态，毕竟没有实践经验离应用场景太远，还得沉下心好好看看】

数据开发
数据开发阶段，DataWorks提供4种对象供使用：任务、脚本、资源、函数。
一个任务的开发和使用流程：

各种权限点：https://help.aliyun.com/document_detail/30277.html?spm=a2c4g.11186623.6.621.TfXC9G
DataWorks（数据工场，原大数据开发套件）提供了 ２种 任务类型 7种 节点类型：
任务类型：节点任务和工作流任务。
节点类型：虚节点类型，ODPS_SQL 节点类型，SHELL 节点类型，数据同步节点类型，机器学习节点类型，ODPS_MR 节点类型和 OPEN_MR 节点类型。
调度参数配置：
https://help.aliyun.com/document_detail/30281.html?spm=a2c4g.11186623.2.14.PWxXPY
发布管理：
https://help.aliyun.com/document_detail/30282.html?spm=a2c4g.11186623.6.652.Wpndsr

DataWorks三种数据：表、函数、资源
