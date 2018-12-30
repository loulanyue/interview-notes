Linux一般作为服务器使用，而服务器一般放在机房，你不可能在机房操作你的Linux服务器。
这时我们就需要远程登录到Linux服务器来管理维护系统。
Linux系统中是通过ssh服务实现的远程登录功能，默认ssh服务端口号为 22。
Window系统上 Linux 远程登录客户端有SecureCRT, Putty, SSH Secure Shell等，本文以Putty为例来登录远程服务器。
putty下载地址：http://www.putty.org/
如果你下载了putty，请双击putty.exe 然后弹出如下的窗口。
5_1
在Host Name( or IP address) 下面的框中输入你要登录的远程服务器IP(可以通过ifconfig命令查看服务器ip)，然后回车。
5_12
此时，提示我们输入要登录的用户名。
5_13
输入root 然后回车，再输入密码，就能登录到远程的linux系统了。
5_14
使用密钥认证机制远程登录linux
SSH 为 Secure Shell 的缩写，由 IETF 的网络工作小组（Network Working Group）所制定。
SSH 为建立在应用层和传输层基础上的安全协议。
首先使用工具 PUTTYGEN.EXE 生成密钥对。打开工具PUTTYGEN.EXE后如下图所示：
5_15
该工具可以生成三种格式的key ：SSH-1(RSA) SSH-2(RSA) SSH-2(DSA) ，我们采用默认的格式即SSH-2(RSA)。Number of bits in a generated key 这个是指生成的key的大小，这个数值越大，生成的key就越复杂，安全性就越高。这里我们写2048.
5_16
然后单击Generate 开始生成密钥对：
5_17
注意的是，在这个过程中鼠标要来回的动，否则这个进度条是不会动的。
5_18
到这里，密钥对已经生成了。你可以给你的密钥输入一个密码，（在Key Passphrase那里）也可以留空。然后点 Save public key 保存公钥，点 Save private Key 保存私钥。笔者建议你放到一个比较安全的地方，一来防止别人偷窥，二来防止误删除。接下来就该到远程linux主机上设置了。
1）创建目录 /root/.ssh 并设置权限
[root@localhost ~]# mkdir /root/.ssh mkdir 命令用来创建目录，以后会详细介绍，暂时只了解即可。
[root@localhost ~]# chmod 700 /root/.ssh chmod 命令是用来修改文件属性权限的，以后会详细介绍。
2）创建文件 / root/.ssh/authorized_keys
[root@localhost ~]# vim /root/.ssh/authorized_keys vim 命令是编辑一个文本文件的命令，同样在后续章节详细介绍。
3）打开刚才生成的public key 文件，建议使用写字板打开，这样看着舒服一些，复制从AAAA开头至 "---- END SSH2 PUBLIC KEY ----" 该行上的所有内容，粘贴到/root/.ssh/authorized_keys 文件中，要保证所有字符在一行。（可以先把复制的内容拷贝至记事本，然后编辑成一行载粘贴到该文件中）。
在这里要简单介绍一下，如何粘贴，用vim打开那个文件后，该文件不存在，所以vim会自动创建。按一下字母"i"然后同时按shift + Insert 进行粘贴（或者单击鼠标右键即可），前提是已经复制到剪切板中了。粘贴好后，然后把光标移动到该行最前面输入 ssh-rsa ，然后按空格。再按ESC，然后输入冒号wq 即 :wq 就保存了。格式如下图：
5_19
4）再设置putty选项，点窗口左侧的SSh –> Auth ，单击窗口右侧的Browse… 选择刚刚生成的私钥， 再点Open ，此时输入root，就不用输入密码就能登录了。
5_20
如果在前面你设置了Key Passphrase ，那么此时就会提示你输入密码的。为了更加安全建议大家要设置一个Key Passphrase。
