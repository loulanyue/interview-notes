实现
SELECT * FROM table where tag_id =382 or tag_id =381 ;

mapper层示例：

    <select id="queryByxxId" resultType="xxDAO">
        SELECT id,
        <include refid="select_columns"/>
        FROM
        table
        <where>
            <if test="xxId!=null">
                xx_id = #{xxId} OR
            </if>
            <if test="xxxTagId!=null">
                xx_id = #{xxxTagId}   OR
            </if>
            <if test="xxxxTagId!=null">
                xx_id = #{xxxxTagId}
            </if>
        </where>
        ORDER BY gmt_modified DESC
    </select>

---

<!-- note-nav:start -->
## 导航
- [返回仓库首页](../../README.md)
- [返回当前专题导航](./README.md)
- [返回上一级主题](../README.md)
<!-- note-nav:end -->
