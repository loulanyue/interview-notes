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
	
