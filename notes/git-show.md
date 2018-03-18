仓库 repository

## 在Windows上安装Git

Windows下要使用很多Linux/Unix的工具时，需要Cygwin这样的模拟环境，Git也一样。Cygwin的安装和配置都比较复杂。不过，msysgit已经把模拟环境和Git都打包好了，只需要下载一个单独的exe安装程序。

msysgit是Windows版的Git，从https://git-for-windows.github.io下载（网速慢的同学请移步国内镜像），然后按默认选项安装即可。

安装完成后，在开始菜单里找到“Git”->“Git Bash”，蹦出一个类似命令行窗口的东西，就说明Git安装成功！

git查看版本

    git version

查看git配置可以使用 -l 参数(l 就是 list 的首字母,L的小写):

    git config -l

安装完成后，还需要设置本地机器默认commit的昵称与Email.：

    $ git config --global user.name "Your Name"
    $ git config --global user.email "email@example.com"
    git config --global push.default simple

如果要使用git进行推送,则必须配置 push.default ,否则推送失败. 姓名与Email只用于日志标识.实际推送到GitHub等在线仓库时,要用有操作权限的账号登录.

在某个项目根路径下面可以设置单独的Email与姓名.

    git config user.name "Your Name"
    git config user.email "email@example.com"

可以看到, 配置单个项目时,少了 --global 参数.

## 公钥

检查本机是否有ssh key设置
$ cd ~/.ssh 或cd .ssh（要保证路径）
如果没有则提示： No such file or directory
如果有则进入~/.ssh路径下（ls查看当前路径文件，rm * 删除所有文件）

清理原有ssh密钥。

    $ mkdir key_backup
    $ cp id_rsa* key_backup
    $ rm id_rsa*

生成新的密钥：

    $ ssh-keygen -t rsa -C “您的邮箱地址”

## 使用

如果你想检查你的设置，你可以使用 git config --list 命令来列出Git可以在该处找到的所有的设置:

    $ git config --list

github 仓库的常用指令

    $ git init //把这个目录变成Git可以管理的仓库
    $ git add README.md //把文件信息添加到索引库的暂存区里面去
    $ git add . //不但可以跟单一文件，还可以跟通配符，更可以跟目录。一个点就把当前目录下所有未追踪的文件全部add了
	//提交后，用*git diff HEAD -- fileName.txt*命令可以查看工作区和版本库里面最新版本的区别
    $ git commit -m "first commit" //通过命令git commit 把刚刚提交到暂存区里的文件提交到仓库，-m 后面的文字是注释
    $ git remote add origin git@github.com:wangjiax9/practice.git //关联远程仓库
    $ git push -u origin master //把本地库的所有内容推送到远程库上

第一次推送master分支，使用了-u参数，Git不但会吧本地的master分支内容推送到远程新的master分支，还会把本地的master分支和远程master分支关联起来，以后推送或拉取时就可以简化命令

	git push origin master
	
	$ git stash //可以查看状态，会将本目录下自上次提交后至今的文件变动信息列出
	
	$ git checkout -- file.txt //可以丢弃工作区的修改
	$ git rm file.XX//删除file， 上面的舍弃修改可以恢复文件
	
已有远程库再次绑定时，可以先用*git remote -v*查看远程库信息
再使用*git remote rm <name>*删除已有的远程库，然后继续绑定
	
也可以绑定多个远程库，只需要起不同的远程库名字就行了

	//先关联GitHub的远程库：
	git remote add github git@github.com:michaelliao/learngit.git
	//注意，远程库的名称叫github，不叫origin了。
	//接着，再关联码云的远程库：
	git remote add gitee git@gitee.com:liaoxuefeng/learngit.git
	//推送时根据名字识别
	git push <name> master
	
## 回退版本

	git checkout commitID
	//git log命令显示从最近到最远的提交日志，如果嫌输出信息太多，看得眼花缭乱的，可以试试加上--pretty=oneline参数
	$ git log  //可以查询出每个版本的commit，每个commit都有对应的ID   
	$ git log --pretty=oneline
	//在Git中，用HEAD表示当前版本，上一个版本就是HEAD^，上上一个版本就是HEAD^^，当然往上100个版本写100个^比较容易数不过来，所以写成HEAD~100。
	$ git reset --hard HEAD^
	git reset--hard确认的ID  //也可
	
	git reflog //Git提供了一个命令git reflog用来记录你的每一次命令
	
HEAD指向的是当前的版本，因此，Git允许我们在版本的历史之间穿梭，使用命令*git reset --hard commit_id*.

## 远程库clone

使用命令git clone克隆一个本地库
	
	$ git clone git@github.com:looklu/LL.git

会在当前目录下新建一个文件夹LL存储克隆内容，Git支持多种协议，https、ssh...但通过ssh支持的原生git协议速度最快

## pull

在pull远程库前，应先将本地修改存储起来，否则会被覆盖

	$ git stash //这样本地修改就会被暂时存储起来
	$ git stash list //可以看到保存的信息 stash@{0}是刚才保存的标记。
	$ git stash pop stash@{0} //还原暂存的内容

## 创建分支与合并

	$ git checkout -b dev
	git checkout命令加上-b参数表示创建并切换，相当于以下两条命令：
	$ git branch dev
	$ git checkout dev
	$ git branch //git branch命令会列出所有分支，当前分支前面会标一个*号
	$ git checkout master
	$ git merge dev //合并dev分支
	$ git branch -d dev //合并完成后，可以放心地删除dev分支
	//用git log --graph命令可以看到分支合并图。
	
## 打标签

	$ git tag <name> //打标签，默认标签是打在最新提交的commit上的
	$ git tag //查看标签 注意，标签不是按时间顺序列出，而是按字母排序的。
	$ git tav <name> commit_id //为历史版本打标签
	$ git show <tagname> //查看标签信息
	//还可以创建带有说明的标签，用-a指定标签名，-m指定说明文字：
	$ git tag -a <tagname> -m "version 0.1 released" 3628164
	//还可以通过-s用私钥签名一个标签：
	git tag -s <tagname> -m "signed version 0.2 released" fec145a
	
	//如果要推送某个标签到远程，使用命令git push origin <tagname>
	//或者，一次性推送全部尚未推送到远程的本地标签：
	$ git push origin --tags
	
	//如果标签已经推送到远程，要删除远程标签就麻烦一点，先从本地删除：
	$ git tag -d <tagname> //删除后查看会显示删除信息
	//然后，从远程删除。删除命令也是push，但是格式如下：
	$ git push origin :refs/tags/<tagname>
	
	