 MyBatis使用foreach拼接list sql
 
    <select id="queryxxxId" resultType="xxxDAO" parameterType="map">
        SELECT id,
        <include refid="select_columns"/>
        FROM
        table_a
        WHERE version !=0
        <if test="ips!=null">
            AND tag_id IN (
            <foreach collection="ips" item="ips" separator=",">
                #{ips}
            </foreach>
            )
        </if>
        ORDER BY gmt_modified DESC
    </select>
