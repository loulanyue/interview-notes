在本教程我们将讨论 MongoDB 的不同连接方式。

启动 MongoDB 服务
在前面的教程中，我们已经讨论了如何启动 MongoDB 服务，你只需要在 MongoDB 安装目录的 bin 目录下执行 mongodb 即可。

执行启动操作后，mongodb 在输出一些必要信息后不会输出任何信息，之后就等待连接的建立，当连接被建立后，就会开始打印日志信息。

你可以使用 MongoDB shell 来连接 MongoDB 服务器。你也可以使用 PHP 来连接 MongoDB。本教程我们会使用 MongoDB shell 来连接 Mongodb 服务，之后的章节我们将会介绍如何通过php 来连接MongoDB服务。

标准 URI 连接语法：

mongodb://[username:password@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database][?options]]
mongodb:// 这是固定的格式，必须要指定。

username:password@ 可选项，如果设置，在连接数据库服务器之后，驱动都会尝试登陆这个数据库

host1 必须的指定至少一个host, host1 是这个URI唯一要填写的。它指定了要连接服务器的地址。如果要连接复制集，请指定多个主机地址。

portX 可选的指定端口，如果不填，默认为27017

/database 如果指定username:password@，连接并验证登陆指定数据库。若不指定，默认打开 test 数据库。

?options 是连接选项。如果不使用/database，则前面需要加上/。所有连接选项都是键值对name=value，键值对之间通过&或;（分号）隔开

标准的连接格式包含了多个选项(options)，如下所示：

选项	描述
replicaSet=name	验证replica set的名称。 Impliesconnect=replicaSet.
slaveOk=true|false	
true:在connect=direct模式下，驱动会连接第一台机器，即使这台服务器不是主。在connect=replicaSet模式下，驱动会发送所有的写请求到主并且把读取操作分布在其他从服务器。
false: 在 connect=direct模式下，驱动会自动找寻主服务器. 在connect=replicaSet 模式下，驱动仅仅连接主服务器，并且所有的读写命令都连接到主服务器。
safe=true|false	
true: 在执行更新操作之后，驱动都会发送getLastError命令来确保更新成功。(还要参考 wtimeoutMS).
false: 在每次更新之后，驱动不会发送getLastError来确保更新成功。
w=n	驱动添加 { w : n } 到getLastError命令. 应用于safe=true。
wtimeoutMS=ms	驱动添加 { wtimeout : ms } 到 getlasterror 命令. 应用于 safe=true.
fsync=true|false	
true: 驱动添加 { fsync : true } 到 getlasterror 命令.应用于 safe=true.
false: 驱动不会添加到getLastError命令中。
journal=true|false	如果设置为 true, 同步到 journal (在提交到数据库前写入到实体中). 应用于 safe=true
connectTimeoutMS=ms	可以打开连接的时间。
socketTimeoutMS=ms	发送和接受sockets的时间。
实例
使用默认端口来连接 MongoDB 的服务。

mongodb://localhost
通过 shell 连接 MongoDB 服务：

$ ./mongo
MongoDB shell version: 3.0.6
connecting to: test
... 
这时候你返回查看运行 ./mongod 命令的窗口，可以看到是从哪里连接到MongoDB的服务器，您可以看到如下信息：

……省略信息……
2015-09-25T17:22:27.336+0800 I CONTROL  [initandlisten] allocator: tcmalloc
2015-09-25T17:22:27.336+0800 I CONTROL  [initandlisten] options: { storage: { dbPath: "/data/db" } }
2015-09-25T17:22:27.350+0800 I NETWORK  [initandlisten] waiting for connections on port 27017
2015-09-25T17:22:36.012+0800 I NETWORK  [initandlisten] connection accepted from 127.0.0.1:37310 #1 (1 connection now open)  # 该行表明一个来自本机的连接

……省略信息……
MongoDB 连接命令格式
使用用户名和密码连接到 MongoDB 服务器，你必须使用 'username:password@hostname/dbname' 格式，'username'为用户名，'password' 为密码。

使用用户名和密码连接登陆到默认数据库：

$ ./mongo
MongoDB shell version: 3.0.6
connecting to: test
使用用户 admin 使用密码 123456 连接到本地的 MongoDB 服务上。输出结果如下所示：

> mongodb://admin:123456@localhost/
... 
使用用户名和密码连接登陆到指定数据库，格式如下：

mongodb://admin:123456@localhost/test
更多连接实例
连接本地数据库服务器，端口是默认的。

mongodb://localhost
使用用户名fred，密码foobar登录localhost的admin数据库。

mongodb://fred:foobar@localhost
使用用户名fred，密码foobar登录localhost的baz数据库。

mongodb://fred:foobar@localhost/baz
连接 replica pair, 服务器1为example1.com服务器2为example2。

mongodb://example1.com:27017,example2.com:27017
连接 replica set 三台服务器 (端口 27017, 27018, 和27019):

mongodb://localhost,localhost:27018,localhost:27019
连接 replica set 三台服务器, 写入操作应用在主服务器 并且分布查询到从服务器。

mongodb://host1,host2,host3/?slaveOk=true
直接连接第一个服务器，无论是replica set一部分或者主服务器或者从服务器。

mongodb://host1,host2,host3/?connect=direct;slaveOk=true
当你的连接服务器有优先级，还需要列出所有服务器，你可以使用上述连接方式。

安全模式连接到localhost:

mongodb://localhost/?safe=true
以安全模式连接到replica set，并且等待至少两个复制服务器成功写入，超时时间设置为2秒。

mongodb://host1,host2,host3/?safe=true;w=2;wtimeoutMS=2000
