IDE设备	hda hdb hdc

SCSI/SATA/U盘	sda sdb sdc

软盘		fd0 fd1

打印机	lp0 lp1 lp2 lp3

光盘		/dev/cdrom

/dev/sdb5
1.根据FHS协议，/dev/目录中的是设备文件
2.以sd开头，硬盘存储设备
3.sdb，第二个被系统识别的存储设备
4.分区编码
主分区和逻辑分区 1-4
逻辑分区			5 ~

文件系统
Windows：NTFS fat32
Linux:
	ext2 可能会造成数据丢失
	ext3 ext2+日志系统
	ext4 ext3升级

	RHEL7	XFS
		2014年底 大数据 XFS-> 18PE = ext4

1.切割(分区)
2.打格(格式化)
3.使用(挂载) 将硬盘与某个目录做关联的动作，就叫做挂载；目的：为了能够通过目录使用到相关硬盘资料的效果。

挂载，使用！

mount 设备地址（路径+设备名称） 挂载目录

umount 设备地址/ 挂载目录

/etc/fstab 让挂载设备永久生效（包括重启）

/dev/sdb1 /home/haha ext4 defaults 0 0

fdisk 命令：
	
	d 删除分区
	p 显示分区表
	n 新建分区
	w 保存并退出


df -h

/etc/fstab 

SWAP 交换分区 将一部分硬盘作为内存使用，目的是帮助减轻内存负担

partprobe

free -m

磁盘配额

ln命令
1.软链接 windows 目录 删后不在
2.硬链接 block文件内容的指针（不能对目录操作，不能跨硬盘来做）





