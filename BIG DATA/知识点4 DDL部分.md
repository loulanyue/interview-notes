creat table page_view (
user_id bigint,view_time bigint,page_url string,referrer_url string,ip string comment 'creat table sql') partitioned by (dt string,country string);

注：comment后为注释，用单引号区分。分区字段单列，dt和country为两个分区，根据顺序dt为一级分区，country为二级分区，MAXCOMPUTE支持的最大分区数为6个，表的最大列数为1200列。

creat table page_view_test like page_view;
注：like语句只复制表的结构，schema相同，新建的表中没有数据，也不复制原表的生命周期。

creat table page_view_url as select page_url,referrer_url from page view;
注：as语句只复制表的数据，不完全复制表的结构，新建的表中没有分区，也不复制原表的生命周期。

备注：Partitioned by指定表的分区字段，目前支持Tinyint、Smallint、 Int、 Bigint、Varchar和String类型。分区值不允许有双字节字符（如中文），必须是以英文字母a-z，A-Z开始后可跟字母数字，名称的长度不超过128字节。一张表最多允许60000个分区，单表的分区层次不能超过6级。注释内容是长度不超过1024字节的有效字符串。

desc page_view;
注：查看表的信息

desc extended page_view;
注：查看外部表的信息

drop table page_view;
注：删除表

drop table if exists page_view;
注：删除表，如果不指定if exists选项而表不存在，则返回异常。若指定此选项，无论表是否存在，皆返回成功。

alter table page_view rename to page_view_1;
注：修改表的名字

alter table page_view set comment 'new';
注：修改表的注释

turncate table page_view;
注：清除非分区表中的信息

turncate table page_view drop partition (dt='2011-12-17);
注：清除分区表中某个分区的信息

creat table page_view (user_id bigint) lifecycle 100;
注：新建表并把表的生命周期设置为100天。

alter table page_view set lifecycle 50;
注：修改已经有的表格生命周期为50天。

alter table page_view add if not exists partition (dt='2015-1-1',region='shanghai');
注：增加分区，仅支持新增分区，不支持新增分区字段。如果未指定if not exists而同名的分区已存在，则出错返回。目前MaxCompute单表支持的分区数量上限为6万。对于多级分区的表，如果想添加新的分区，必须指明全部的分区值。

alter table page_view drop if exists partiton (dt='2015-1-1',region='shanghai');
注：删除分区。如果分区不存在且未指定if exists，则报错返回。

alter table page_view add columns (id bigint,url string);
注：增加列

alter table page_view change column id rename to id_1;
注：修改列的名字

alter table page_view change column id comment 'change';
注：修改列的注释

alter table page_view partition (dt='2013-01-01') rename to partition (dt='2013-01-02');
注：修改分区列的值，不支持修改分区列列名，只能修改分区列对应的值。修改多级分区的一个或者多个分区值，多级分区的每一级的分区值都必须写上。


creat view if not exists data_1;
注：创建视图。创建视图时，必须有对视图所引用表的读权限。视图只能包含一个有效的select语句。视图可以引用其它视图，但不能引用自己，也不能循环引用。不允许向视图写入数据，例如使用insert into或者insert overwrite操作视图。当建好视图后，如果视图的引用表发生了变更，有可能导致视图无法访问，例如删除被引用表。您需要自己维护引用表及视图之间的对应关系。如果没有指定if not exists，在视图已经存在时用create view会导致异常。这种情况可以用create or replace view来重建视图，重建后视图本身的权限保持不变。


drop view if exists data_1;
注：删除视图。


alter view data_1 rename to data_2;
注：修改视图名称。
