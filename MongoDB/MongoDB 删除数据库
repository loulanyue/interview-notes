语法
MongoDB 删除数据库的语法格式如下：

db.dropDatabase()
删除当前数据库，默认为 test，你可以使用 db 命令查看当前数据库名。

实例
以下实例我们删除了数据库 runoob。

首先，查看所有数据库：

> show dbs
local   0.078GB
runoob  0.078GB
test    0.078GB
接下来我们切换到数据库 runoob：

> use runoob
switched to db runoob
> 
执行删除命令：

> db.dropDatabase()
{ "dropped" : "runoob", "ok" : 1 }
最后，我们再通过 show dbs 命令数据库是否删除成功：

> show dbs
local  0.078GB
test   0.078GB
> 
删除集合
集合删除语法格式如下：

db.collection.drop()
以下实例删除了 runoob 数据库中的集合 site：

> use runoob
switched to db runoob
> show tables
site
> db.site.drop()
true
> show tables
> 
