rwx
421
特殊权限
1：SUID 让命令的执行者临时获取到了所有者的身份
chmod u+s 文件名
2：SGID 让目录中新的文件的所有组，归属上级目录
chmod -R g+s 文件名
3：SBIT 粘滞位 让目录内的文件只能被文件所有者删除
chmod -R o+t 文件名
rwSrw-rwt 5667

setfacl 设置
getfacl 查看
filesy access control list

setfacl -Rm u:zhangsan:rwx niuniu
ls -ld niuniu/
getfacl niuniu

su 用户名
su - 用户名

FHS
根目录/
/root 系统管理员的家目录
/bin 存放单用户模式下还可以操作的命令
/boot
/dev
/etc
/home
/var 主要存放经常变化的文件，如日志
/lib 开机时用到的函数库，以及/bin与/sbin下面的命令要调用的函数
/sbin 开机过程中需要的命令
/usr
/media 用于挂载设备文件的目录
/tmp 任何人均可使用的“共享”临时目录
/opt 放置第三方的软件
/srv 一些网络服务的数据文件目录
/proc 虚拟文件系统，例如系统内核、进程、外部设备及网络状态等
/usr/local 用户自行安装的软件
/usr/sbin Linux系统开机时不会使用到的软件/命令/脚本
/usr/share 帮助与说明文件，也可放置共享文件
/lost+found 当文件系统发生错误时，将一些丢失的文件片段存放在这里

1：绝对路径

2：相对路径

/dev
/etc
/home
/media
/root
/usr/local
/var
/lost+found


