# Linux常用操作

进入文件夹
cd directory_name //命令的功能是切换到指定的目录

返回
“cd ..”代表上一级目录、“cd ~”代表HOME目录、“cd -”代表前一目录

删除

1. rm XXX.txt //删除文件
1. rmdir directory_name //仅删除空文件夹
1. rm -rf directory_name //
1. -r 就是向下递归，不管有多少级目录，一并删除
1. -f 就是直接强行删除，不作任何提示的意思

删除文件夹实例：
rm -rf /var/log/httpd/access
将会删除/var/log/httpd/access目录以及其下所有文件、文件夹

删除文件使用实例：
rm -f /var/log/httpd/access.log
将会强制删除/var/log/httpd/access.log这个文件
cat 修改
s列出目录内容，跟dir一样；
cat，less，more都查看文件内容，但我推荐使用less，因为它可使用翻页功能。
vi 文件名 或者  vim 文件名 编辑文件