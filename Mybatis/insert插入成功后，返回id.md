## 1.设置insert接口后缀 

	useGeneratedKeys="true" keyProperty="id" keyColumn="id"
## 2.DAO文件中声明 id，与MySql数据表主键一致

    /**
     * 主键
     */
    private Long id;
    
   	public Long getId() {
        return id;
   	 }

    public void setId(Long id) {
        this.id = id;
    }
## 3.执行插入后，使用类getId即可获取
	xxxDAO.getId()

