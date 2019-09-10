在git上push代码时，提示失败：


	18:15	Git Merge Failed
		Merging is not possible because you have unmerged files.
		hint: Fix them up in the work tree, and then use 'git add/rm <file>'
		hint: as appropriate to mark resolution and make a commit.
		Exiting because of an unresolved conflict.

解法：
1.本地commit到仓库
2.pull远端代码
3.然后再次push，merge分支解决冲突
