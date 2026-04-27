Java优秀的ORM. MyBatis	-------对抗趋势

1.MyBatis一个开源ORM项目

2.起源于iBatis

3.轻量级的ORM框架，重量级的是Hibernate

4.2010年并且改名为MyBatis

5.2013年11月迁移到Github

Spring Boot2.0 集成MyBatis

1.创建Java Spring Boot2.0项目

2.引入Mybatis依赖

3.准备MySQL数据库

4.开发DAO

5.注入到控制器代码

6.改造N层架构代码

7.测试基本功能是否正常

## 常见片段

### foreach 拼接 IN 查询

```xml
<select id="queryxxxId" resultType="xxxDAO" parameterType="map">
    SELECT id,
    <include refid="select_columns"/>
    FROM table_a
    WHERE version != 0
    <if test="ips != null">
        AND tag_id IN (
        <foreach collection="ips" item="ips" separator=",">
            #{ips}
        </foreach>
        )
    </if>
    ORDER BY gmt_modified DESC
</select>
```

### 插入后回填主键

1. 在 `insert` 语句上开启主键回填：

```xml
useGeneratedKeys="true" keyProperty="id" keyColumn="id"
```

2. DAO 或实体类中保留和表主键一致的字段，例如 `id`
3. 执行插入后，可直接通过 `xxxDAO.getId()` 获取数据库生成的主键

### 常见报错排查

#### There is no getter for property named

```text
org.mybatis.spring.MyBatisSystemException: nested exception is
org.apache.ibatis.reflection.ReflectionException:
There is no getter for property named 'xxx' in 'class com.xxx'
```

通常是 XML 中的参数名、`@Param` 名称或大小写与 Java 代码不一致。

### 实用技巧

- 手机号脱敏可以用 `concat_ws` 配合 `substring`，保留前三后四，中间四位替换为 `****`
- 单参数查询未修饰时可直接用 `_parameter`，多参数查询建议显式使用 `@Param`
- 组合条件时可以放进 `<where>`，后续条件前补 `AND`，避免手写拼接遗漏
- 模糊查询常见写法是 `like concat('%', #{_parameter}, '%')`
- 返回字段较少时可以创建 DTO 或 VO，避免 `resultType` 直接复用大对象
- 动态更新语句可结合 `<set>` 和 `<if>`，让 MyBatis 自动处理多字段更新时的逗号问题

---

<!-- note-nav:start -->
## 导航
- [返回仓库首页](../../README.md)
- [返回当前专题导航](./README.md)
- [返回上一级主题](../README.md)
<!-- note-nav:end -->
