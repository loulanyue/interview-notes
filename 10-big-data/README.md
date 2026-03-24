# 数据集准备：

## 创建emp表的DDL语句，如下所示

	CREATE TABLE IF NOT EXISTS emp(
		EMPNO string,
		ENAME string,
		JOB string,
		MGR bigint,
		HIREDATE datetime,
		SAL double,
		COMM double,
		DEPTNO bigint);
	
## 创建dept表的DDL语句，如下所示

	CREATE TABLE IF NOT EXISTS dept(
		DEPTNO bigint,
		DNAME string,
		LOC string);

## SQL操作：

## 初学SQL常遇到的问题点

	·使用Group by，那么Select的部分要么是分组项，要么就得是聚合函数
	·Order by后面必须加Limit n
	·Select表达式中不能用子查询，可以改写为Join
	·Join不支持笛卡尔积，以及MapJoin的用法和使用场景
	·Union all需要改成子查询的格式
	·In/Not in语句对应的子查询只能有一列，而且返回的行数不能超过1000，否则也需要改成Join

## 题目一、列出至少有一个员工的所有部门

为了避免数据量太大的情况，使用Join进行改写

	select d.*
	from dept d
	join (
		select distinct deptno as no
		from emp
	) e
	on d.deptno = e.no;

## 题目二、列出薪金比SMITH多的所有员工

	MapJoin的典型场景，如下所示：

	select /*+MapJoin(a) */ e.empno
		,e.ename
		,e.sal
	from emp e
	join(
		select max(sal) as sal
		from 'emp'
		where 'ename'='SMITH'
	)a
	ON e.sal>a.sal;

## 题目三、列出所有员工的姓名及其直接上级的姓名

	非等值连接，如下所示：

	select a.ename
		,b.ename
	from emp a
	left outer join emp b
	on b.empno=a.mgr;

## 题目四、列出最低薪金大于1500的各种工作

	Having的用法，如下所示

	select emp.'JOB'
		,min(emp.sal) as sal
	from 'emp'
	group by emp.'job'
	having min(emp.sal)>1500;

## 题目五、列出在每个部分工作的员工数量、平均工资和平均服务期限

	时间处理上有很多好用的内建函数，如下所示：

	select count(empno) as cnt_emp
		,round(avg(sal),2) as avg_sal
		,round(avg(datediff(gatdate(),hiredate,'dd')),2) as avg_hire
	from 'emp'
	group by 'deptno'

## 题目六、列出每个部门的薪水前3名的人员的姓名以及他们的名次（Top n的需求非常常见）

	SQL语句如下所示：

	select*
	from(
		select deptno
		,ename
		,sal
		,row_number() over (partition by deptno order by sal desc) as nums
		from emp
	) emp1
	where emp1.nums<4

## 题目七、用一个SQL写出每个部门的人数、CLERK（办事员）的人数占该部门总人数占比

	SQL语句如下所示：

	select deptno
		,count(empno) as cnt
		,round(sum(case
		when job='CLERK' then 1
		else 0
		end) /count(empno),2) as rate
	from 'emp'
	group by deptno;
