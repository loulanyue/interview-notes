insert overwrite table sale_detail_insert partition (sale_date='2013', region='china')
insert into table sale_detail_insert partition (sale_date='2013', region='china')
注：Insert into与Insert overwrite的区别是：Insert into会向表或表的分区中追加数据，而Insert overwrite会在向表或分区中插入数据前清空表中的原有数据。在insert overwrite|into后需要加入table关键字，不是直接使用tablename。当Insert的目标表是分区表时，指定分区值，语法中不允许使用函数等表达式。目前INSERT OVERWRITE还不支持指定插入列的功能，暂时只能用INSERT INTO。不支持insert into到hash clustering表。

insert overwrite table sale_detail_insert partition (sale_date='2013', region='china')
select shop_name, customer_id, total_price, sale_date, region from sale_detail;
-- 报错返回，sale_date，region为分区列，不允许出现在静态分区的insert语句中。
注：向某个分区插入数据时，分区列不允许出现在select列表中。

create table sale_detail_multi like sale_detail;
from sale_detail
insert overwrite table sale_detail_multi partition (sale_date='2010', region='china' ) 
select shop_name, customer_id, total_price where .....
insert overwrite table sale_detail_multi partition (sale_date='2011', region='china' )
select shop_name, customer_id, total_price where .....;
注：MaxCompute SQL支持在一个语句中插入不同的结果表或者分区实现多路输出。一般情况下，单个SQL中最多可以写256路输出，超过256路，则报语法错误。对于分区表，同一个目标分区不允许出现多次。对于未分区表，该表不能出现多次。对于同一张分区表的不同分区，不能同时有Insert overwrite和Insert into操作，否则报错返回。

insert overwrite table sale_detail_dypart partition (sale_date, region)
select shop_name,customer_id,total_price,sale_date,region from sale_detail;

注：可以在分区中指定一个分区列名，但不给出值。相应地，在select子句中的对应列来提供分区的值。此时sale_detail表中，sale_date的值决定目标表的sale_date分区值，region的值决定目标表的region分区值。动态分区中，select_statement字段和目标表动态分区的对应是按字段顺序决定的。如该示例中，select语句若写成select shop_name,customer_id,total_price,region,sale_date from sale_detail;，则sale_detail表中，region值决定决定目标表的 sale_date分区值，sale_date的值决定目标表的region分区值。动态分区列必须在select列表中（如sale_date和region).

insert overwrite table sales partition (region='china', sale_date)
select shop_name,customer_id,total_price,region from sale_detail;

注：失败返回，不能仅指定低级子分区，而动态插入高级分区。

select 语句

select * from sale_detail;

select shop_name from sale_detail;

select * from sale_detail where shop_name like 'hang%';

注：当使用Select语句屏显时，目前最多只能显示10000行结果。当Select作为子句时，无此限制，Select子句会将全部结果返回给上层查询。select分区表时禁止全表扫描。

select * from (select region from sale_detail) t where region = 'shanghai';
注：嵌套子查询中，select region from sale_detail的结果暂时存放在t中作为一个中转，查询结果反馈到上层就是，select * from t where region='shanghai';

screenshot

注：where子句支持的过滤条件，不等于为<>不是=！

select sale_detail.* from sale_detail where sale_detail.sale_date >= '2008' and sale_detail.sale_date <= '2014';
注：用and语句设定查询的分区范围。

select sale_detail.* from sale_detail where sale_detail.sale_date between '2008' and  '2014';
注：用between、and语句设定查询的分区范围。

group by语句：

select region from sale_detail group by region;
-- 直接使用输入表列名作为group by的列，可以运行
select sum(total_price) from sale_detail group by region;
-- 以region值分组，返回每一组的销售额总量，可以运行
select region, sum(total_price) from sale_detail group by region;
-- 以region值分组，返回每一组的region值(组内唯一)及销售额总量，可以运行
select region as r from sale_detail group by r;
-- 使用select列的别名运行，报错返回
select 2 + total_price as r from sale_detail group by 2 + total_price;
-- 必须使用列的完整表达式
select region, total_price from sale_detail group by region;
-- 报错返回，select的所有列中，没有使用聚合函数的列，必须出现在group by中
select region, total_price from sale_detail group by region, total_price;
-- 可以运行

注：分组查询，一般group by和聚合函数配合使用。在Select中包含聚合函数时有以下规则：用group by的key可以是输入表的列名也可以是由输入表的列构成的表达式，不允许是Select语句的输出列的别名。group by操作通常是先于Select操作的，因此group by只能接受输入表的列或表达式为key。

ORDER BY语句：

注：对所有数据按照某几列进行全局排序。如果您希望按照降序对记录进行排序，可以使用DESC关键字。由于是全局排序，order by必须与limit共同使用。在使用order by排序时，Null会被认为比任何值都小，这个行为与MySQL一致，但是与Oracle不一致。与group by不同，order by后面必须加Select列的别名，当Select某列时，如果没有指定列的别名，将列名作为列的别名。

select * from sale_detail order by region;
-- 报错返回，order by没有与limit共同使用
select * from sale_detail order by region limit 100;
select region as r from sale_detail order by region limit 100;
-- 报错返回，order by后面必须加列的别名。
select region as r from sale_detail order by r limit 100;

distribute by语句：

select region from sale_detail distribute by region;
-- 列名即是别名，可以运行
select region as r from sale_detail distribute by region;
-- 报错返回，后面必须加列的别名。
select region as r from sale_detail distribute by r;

sort by语句：

注：局部排序，语句前必须加distribute by。实际上sort by是对distribute by的结果进行局部排序。必须使用Select的输出列别名。

select region from sale_detail distribute by region sort by region;
select region as r from sale_detail sort by region;
-- 没有distribute by，报错退出。

select * from (select shop_name from sale_detail) a;

注：子查询必须要有别名。

select * from sale_detail where region = 'hangzhou'
        union all
select * from sale_detail where region = 'shanghai';
注：UNION ALL将两个或多个Select操作返回的数据集联合成一个数据集，如果结果有重复行时，会返回所有符合条件的行，不进行重复行的去重处理。union all/union操作对应的各个查询的列个数和类型必须一致（如果类型不一致，需保证经过隐式转换后类型是一致的）。一般情况下，MaxCompute最多允许256个表的union all/union，超过此限制报语法错误。

JOIN语句

左连接：
select a.shop_name as ashop, b.shop_name as bshop from shop a

    **left outer join** sale_detail b **on** a.shop_name=b.shop_name;
-- 由于表shop及sale_detail中都有shop_name列，因此需要在select子句中使用别名进行区分。
右连接：
select a.shop_name as ashop, b.shop_name as bshop from shop a

    **right outer join** sale_detail b **on** a.shop_name=b.shop_name;
全连接：
select a.shop_name as ashop, b.shop_name as bshop from shop a

   ** full outer join** sale_detail b **on** a.shop_name=b.shop_name;
注：连接条件，只允许and连接的等值条件。只有在MAPJOIN中，可以使用不等值连接或者使用or连接多个条件。

MAPJOIN语句：

select /* + mapjoin(a) */
        a.shop_name,
        b.customer_id,
        b.total_price
    from shop a join sale_detail b
    on a.shop_name = b.shop_name;
注：left outer join的左表必须是大表。right outer join的右表必须是大表。inner join左表或右表均可以作为大表。full outer join不能使用MapJoin。MapJoin支持小表为子查询。使用MapJoin时，需要引用小表或是子查询时，需要引用别名。在MapJoin中，可以使用不等值连接或者使用or连接多个条件。目前，MaxCompute在MapJoin中最多支持指定8张小表，否则报语法错误。如果使用MapJoin，则所有小表占用的内存总和不得超过512MB。多个表Join时，最左边的两个表不能同时是MapJoin的表。
