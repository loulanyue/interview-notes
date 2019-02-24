Vim 编辑器	vi编辑器
命令模式 :复制、剪切、粘贴、搜索等等
输入模式 :随意对文件进行内容编辑 a i o esc
末行模式 :保存、退出编辑器环境器环境设置 esc 
:w
:q
:wq!；
cd /etc/yum.repos.d/

shell 交互式 批处理

bash haha.sh a b c d e f g 
[ -d /etc]
echo %?
[ -e /etc/fsatb]

[ $USER = root ] && echo "admin"

-wq 
-gt gather than
-lt less than

free -m |grep Men:
[`free -m |grep Men:|awk '{print $4}'` -lt 1024] && echo "Insufficient Memory"

#!/bin/bash
read -p "Enter:" GRADE
if [ $GRADE -ge 85 ] && [ $GRADE -le 100 ]; then
echo "$GRADE is Excellent"
elif [$GRADE - gt 70 ] && [$GRADE -le 84]; then
echo "$GRADE is Pass"
else
echo "$GRADE is Fail" 
fi

bash haha.sh
