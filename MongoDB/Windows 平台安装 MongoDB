MongoDB 下载
MongoDB 提供了可用于 32 位和 64 位系统的预编译二进制包，你可以从MongoDB官网下载安装，MongoDB 预编译二进制包下载地址：https://www.mongodb.com/download-center#community

注意：在 MongoDB 2.2 版本后已经不再支持 Windows XP 系统。最新版本也已经没有了 32 位系统的安装文件。



MongoDB for Windows 64-bit 适合 64 位的 Windows Server 2008 R2, Windows 7 , 及最新版本的 Window 系统。
MongoDB for Windows 32-bit 适合 32 位的 Window 系统及最新的 Windows Vista。 32 位系统上 MongoDB 的数据库最大为 2GB。
MongoDB for Windows 64-bit Legacy 适合 64 位的 Windows Vista, Windows Server 2003, 及 Windows Server 2008 。
根据你的系统下载 32 位或 64 位的 .msi 文件，下载后双击该文件，按操作提示安装即可。

安装过程中，你可以通过点击 "Custom(自定义)" 按钮来设置你的安装目录。





创建数据目录

MongoDB将数据目录存储在 db 目录下。但是这个数据目录不会主动创建，我们在安装完成后需要创建它。请注意，数据目录应该放在根目录下（(如： C:\ 或者 D:\ 等 )。

在本教程中，我们已经在 C 盘安装了 mongodb，现在让我们创建一个 data 的目录然后在 data 目录里创建 db 目录。

c:\>cd c:\

c:\>mkdir data

c:\>cd data

c:\data>mkdir db

c:\data>cd db

c:\data\db>
你也可以通过 window 的资源管理器中创建这些目录，而不一定通过命令行。


命令行下运行 MongoDB 服务器
为了从命令提示符下运行 MongoDB 服务器，你必须从 MongoDB 目录的 bin 目录中执行 mongod.exe 文件。

C:\mongodb\bin\mongod --dbpath c:\data\db
如果执行成功，会输出如下信息：

2015-09-25T15:54:09.212+0800 I CONTROL  Hotfix KB2731284 or later update is not
installed, will zero-out data files
2015-09-25T15:54:09.229+0800 I JOURNAL  [initandlisten] journal dir=c:\data\db\j
ournal
2015-09-25T15:54:09.237+0800 I JOURNAL  [initandlisten] recover : no journal fil
es present, no recovery needed
2015-09-25T15:54:09.290+0800 I JOURNAL  [durability] Durability thread started
2015-09-25T15:54:09.294+0800 I CONTROL  [initandlisten] MongoDB starting : pid=2
488 port=27017 dbpath=c:\data\db 64-bit host=WIN-1VONBJOCE88
2015-09-25T15:54:09.296+0800 I CONTROL  [initandlisten] targetMinOS: Windows 7/W
indows Server 2008 R2
2015-09-25T15:54:09.298+0800 I CONTROL  [initandlisten] db version v3.0.6
……
连接MongoDB
我们可以在命令窗口中运行 mongo.exe 命令即可连接上 MongoDB，执行如下命令：

C:\mongodb\bin\mongo.exe
配置 MongoDB 服务
管理员模式打开命令行窗口

创建目录，执行下面的语句来创建数据库和日志文件的目录

mkdir c:\data\db
mkdir c:\data\log
创建配置文件

创建一个配置文件。该文件必须设置 systemLog.path 参数，包括一些附加的配置选项更好。

例如，创建一个配置文件位于 C:\mongodb\mongod.cfg，其中指定 systemLog.path 和 storage.dbPath。具体配置内容如下：

systemLog:
    destination: file
    path: c:\data\log\mongod.log
storage:
    dbPath: c:\data\db
安装 MongoDB服务
通过执行mongod.exe，使用--install选项来安装服务，使用--config选项来指定之前创建的配置文件。

C:\mongodb\bin\mongod.exe --config "C:\mongodb\mongod.cfg" --install
要使用备用 dbpath，可以在配置文件（例如：C:\mongodb\mongod.cfg）或命令行中通过 --dbpath 选项指定。

如果需要，您可以安装 mongod.exe 或 mongos.exe 的多个实例的服务。只需要通过使用 --serviceName 和 --serviceDisplayName 指定不同的实例名。只有当存在足够的系统资源和系统的设计需要这么做。

启动MongoDB服务

net start MongoDB
关闭MongoDB服务

net stop MongoDB
移除 MongoDB 服务

C:\mongodb\bin\mongod.exe --remove
命令行下运行 MongoDB 服务器 和 配置 MongoDB 服务 任选一个方式启动就可以。

任选一个操作就好
MongoDB 后台管理 Shell
如果你需要进入MongoDB后台管理，你需要先打开mongodb装目录的下的bin目录，然后执行mongo.exe文件，MongoDB Shell是MongoDB自带的交互式Javascript shell,用来对MongoDB进行操作和管理的交互式环境。

当你进入mongoDB后台后，它默认会链接到 test 文档（数据库）：

> mongo
MongoDB shell version: 3.0.6
connecting to: test
……
由于它是一个JavaScript shell，您可以运行一些简单的算术运算:

> 2 + 2
4
>
db 命令用于查看当前操作的文档（数据库）：

> db
test
>
插入一些简单的记录并查找它：

> db.runoob.insert({x:10})
WriteResult({ "nInserted" : 1 })
> db.runoob.find()
{ "_id" : ObjectId("5604ff74a274a611b0c990aa"), "x" : 10 }
>
第一个命令将数字 10 插入到 runoob 集合的 x 字段中。
