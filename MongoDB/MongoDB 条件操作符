描述
条件操作符用于比较两个表达式并从mongoDB集合中获取数据。

在本章节中，我们将讨论如何在MongoDB中使用条件操作符。

MongoDB中条件操作符有：

(>) 大于 - $gt
(<) 小于 - $lt
(>=) 大于等于 - $gte
(<= ) 小于等于 - $lte
我们使用的数据库名称为"runoob" 我们的集合名称为"col"，以下为我们插入的数据。

为了方便测试，我们可以先使用以下命令清空集合 "col" 的数据：

db.col.remove({})
插入以下数据

>db.col.insert({
    title: 'PHP 教程', 
    description: 'PHP 是一种创建动态交互性站点的强有力的服务器端脚本语言。',
    by: '菜鸟教程',
    url: 'http://www.runoob.com',
    tags: ['php'],
    likes: 200
})
>db.col.insert({title: 'Java 教程', 
    description: 'Java 是由Sun Microsystems公司于1995年5月推出的高级程序设计语言。',
    by: '菜鸟教程',
    url: 'http://www.runoob.com',
    tags: ['java'],
    likes: 150
})
>db.col.insert({title: 'MongoDB 教程', 
    description: 'MongoDB 是一个 Nosql 数据库',
    by: '菜鸟教程',
    url: 'http://www.runoob.com',
    tags: ['mongodb'],
    likes: 100
})
使用find()命令查看数据：

> db.col.find()
{ "_id" : ObjectId("56066542ade2f21f36b0313a"), "title" : "PHP 教程", "description" : "PHP 是一种创建动态交互性站点的强有力的服务器端脚本语言。", "by" : "菜鸟教程", "url" : "http://www.runoob.com", "tags" : [ "php" ], "likes" : 200 }
{ "_id" : ObjectId("56066549ade2f21f36b0313b"), "title" : "Java 教程", "description" : "Java 是由Sun Microsystems公司于1995年5月推出的高级程序设计语言。", "by" : "菜鸟教程", "url" : "http://www.runoob.com", "tags" : [ "java" ], "likes" : 150 }
{ "_id" : ObjectId("5606654fade2f21f36b0313c"), "title" : "MongoDB 教程", "description" : "MongoDB 是一个 Nosql 数据库", "by" : "菜鸟教程", "url" : "http://www.runoob.com", "tags" : [ "mongodb" ], "likes" : 100 }
MongoDB (>) 大于操作符 - $gt
如果你想获取 "col" 集合中 "likes" 大于 100 的数据，你可以使用以下命令：

db.col.find({likes : {$gt : 100}})
类似于SQL语句：

Select * from col where likes > 100;
输出结果：

> db.col.find({likes : {$gt : 100}})
{ "_id" : ObjectId("56066542ade2f21f36b0313a"), "title" : "PHP 教程", "description" : "PHP 是一种创建动态交互性站点的强有力的服务器端脚本语言。", "by" : "菜鸟教程", "url" : "http://www.runoob.com", "tags" : [ "php" ], "likes" : 200 }
{ "_id" : ObjectId("56066549ade2f21f36b0313b"), "title" : "Java 教程", "description" : "Java 是由Sun Microsystems公司于1995年5月推出的高级程序设计语言。", "by" : "菜鸟教程", "url" : "http://www.runoob.com", "tags" : [ "java" ], "likes" : 150 }
> 
MongoDB（>=）大于等于操作符 - $gte
如果你想获取"col"集合中 "likes" 大于等于 100 的数据，你可以使用以下命令：

db.col.find({likes : {$gte : 100}})
类似于SQL语句：

Select * from col where likes >=100;
输出结果：

> db.col.find({likes : {$gte : 100}})
{ "_id" : ObjectId("56066542ade2f21f36b0313a"), "title" : "PHP 教程", "description" : "PHP 是一种创建动态交互性站点的强有力的服务器端脚本语言。", "by" : "菜鸟教程", "url" : "http://www.runoob.com", "tags" : [ "php" ], "likes" : 200 }
{ "_id" : ObjectId("56066549ade2f21f36b0313b"), "title" : "Java 教程", "description" : "Java 是由Sun Microsystems公司于1995年5月推出的高级程序设计语言。", "by" : "菜鸟教程", "url" : "http://www.runoob.com", "tags" : [ "java" ], "likes" : 150 }
{ "_id" : ObjectId("5606654fade2f21f36b0313c"), "title" : "MongoDB 教程", "description" : "MongoDB 是一个 Nosql 数据库", "by" : "菜鸟教程", "url" : "http://www.runoob.com", "tags" : [ "mongodb" ], "likes" : 100 }
> 
MongoDB (<) 小于操作符 - $lt
如果你想获取"col"集合中 "likes" 小于 150 的数据，你可以使用以下命令：

db.col.find({likes : {$lt : 150}})
类似于SQL语句：

Select * from col where likes < 150;
输出结果：

> db.col.find({likes : {$lt : 150}})
{ "_id" : ObjectId("5606654fade2f21f36b0313c"), "title" : "MongoDB 教程", "description" : "MongoDB 是一个 Nosql 数据库", "by" : "菜鸟教程", "url" : "http://www.runoob.com", "tags" : [ "mongodb" ], "likes" : 100 }
MongoDB (<=) 小于操作符 - $lte
如果你想获取"col"集合中 "likes" 小于等于 150 的数据，你可以使用以下命令：

db.col.find({likes : {$lte : 150}})
类似于SQL语句：

Select * from col where likes <= 150;
输出结果：

> db.col.find({likes : {$lte : 150}})
{ "_id" : ObjectId("56066549ade2f21f36b0313b"), "title" : "Java 教程", "description" : "Java 是由Sun Microsystems公司于1995年5月推出的高级程序设计语言。", "by" : "菜鸟教程", "url" : "http://www.runoob.com", "tags" : [ "java" ], "likes" : 150 }
{ "_id" : ObjectId("5606654fade2f21f36b0313c"), "title" : "MongoDB 教程", "description" : "MongoDB 是一个 Nosql 数据库", "by" : "菜鸟教程", "url" : "http://www.runoob.com", "tags" : [ "mongodb" ], "likes" : 100 }
MongoDB 使用 (<) 和 (>) 查询 - $lt 和 $gt
如果你想获取"col"集合中 "likes" 大于100，小于 200 的数据，你可以使用以下命令：

db.col.find({likes : {$lt :200, $gt : 100}})
类似于SQL语句：

Select * from col where likes>100 AND  likes<200;
输出结果：

> db.col.find({likes : {$lt :200, $gt : 100}})
{ "_id" : ObjectId("56066549ade2f21f36b0313b"), "title" : "Java 教程", "description" : "Java 是由Sun Microsystems公司于1995年5月推出的高级程序设计语言。", "by" : "菜鸟教程", "url" : "http://www.runoob.com", "tags" : [ "java" ], "likes" : 150 }
> 
