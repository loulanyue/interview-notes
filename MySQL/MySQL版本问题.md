# 为什么选择某一mysql版本的原因

    MySQL官方版本 社区 企业
    http://dev.mysql.com/downloads/mysql

    Percona MySQL
    http://www.percona.com/downloads/Percona-Server-LATEST/

    MariaDB
    https://downloads.mariadb.org/

## MySQL8.0新特性
    1.所有元数据使用InnoDB引擎存储，无frm文件
    2.系统表才有InnoDB存储并采用独立表空间
    3.支持定义资源管理组（目前仅支持CPU资源）
    4.支持不可见索引和降序索引，支持直方图优化
    5.支持窗口函数
    6.支持在线修改全局参数持久化

# 用户及安全：
    1.默认使用caching_sha2_password认证插件
    2.新增支持定义角色（role）
    3.新增密码历史记录功能，限制重复使用密码

# InnoDB：
    1.InnoDB DDL语句支持原子操作
    2.支持在线修改UNDO表空间
    3.新增管理视图用于监控INNODE表状态
    4.新增innodb_dedicated_server配置项
