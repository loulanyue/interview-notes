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
