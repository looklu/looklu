# 命名参考

开发时，团队写法:

1. 先定义功能
1. 再选配功能

对于一个项目，首先要分析其结构，分区编写

作者:author
日期:date
版本:version
版权: copyright
按钮: btn
合作伙伴: partner
投票: vote
左右中: left right center

（二）注释的写法:
/* Footer */
内容区
/* End Footer */

（三）id命名:
（1）页面结构

容器: container
页头: header
内容: content/container
页面主体: main
页尾: footer
导航: nav
侧栏: sidebar
栏目: column
页面外围控制整体布局宽度: wrapper
信息:info
关键字:keyword
照相机:camera
信息:message
计时:timer
（2）导航

导航: nav
主导航: mainnav
子导航: subnav
顶导航: topnav
边导航: sidebar
左导航: leftsidebar
右导航: rightsidebar
菜单: menu
子菜单: submenu
标题: title
摘要: summary

（3）功能

标志: logo
广告: banner
登陆: login
登陆条: loginbar
注册: regsiter
搜索: search
功能区: shop
标题: title
加入: joinus
状态: status
按钮: btn
滚动: scroll
标签页: tab
文章列表: list
提示信息: msg
当前的: current
小技巧: tips
图标: icon
注释: note
指南: goild
服务: service
热点: hot
新闻: news
下载: download
投票: vote
合作伙伴: partner
友情链接: link
版权: copytight


JavaScript内置对象

Arguments 函数参数集合
Array 数组
Boolean 布尔
Date 日期时间
Error 异常对象
Function 函数构造器
Math 数学对象
Number 数值
Object 基础对象
RegExp 正则表达式对象
String 字符串

项目对类型的一般规定：
TST——测试项目
BC——已完成项目
SUS——被搁置项目
ING——正在进行的项目
TST-BC——已完成的测试项目
TST-SUS——被搁置的测试项目
TST-ING——正在进行的测试项目

常用名称
下面列出了一些常用的名称，并不是按出现频次排序，但是列出来的都是出现频次非常高的 单复数形式都出现了的只列出次数最多的 注意，都是目录名称，不是文件名

src，source

源代码，用 src居多

test，tests

测试文件，也经常用 __test__，facebook的测试框架 jest默认的测试文件目录就是 __test__

docs

文档

lib

库文件，library的缩写

dist

用来放打包编译后的文件，应该是distribution的缩写

build，scripts

构建脚本

utils，tools，helpers

工具代码

controllers，views，middlewares，models

MVC对应的models，views，controllers，还有中间件middlewares

router

路由

server

用来放服务端代码

adapters

适配器，适配器模式是一种很常用的设计模式 栗子：https://github.com/hubotio/hu...

legacy

一般用来放兼容历史版本或兼容旧浏览器的代码 栗子：https://github.com/julianshap...

config

配置文件

benchmarks

benchmarks测试，又叫基准测试或性能测试。用来测试版本的性能变化

unit，spec

单元测试，一般在 test目录下

e2e

端对端测试，一般在 test目录下

assets，vendor

资源，一般用来放图片或css文件

static

静态资源

examples，demo

示例

component

组件

plugins

插件

bin

命令脚本，命令行工具经常会用到 栗子：https://github.com/vuejs/vue-...

common

公用的文件

packages

很多项目会打包出多个npm包，用来减小体积，一般会用 packages来放不同的包 栗子：https://github.com/babel/babe...

misc

杂项，miscellaneous的缩写 栗子：https://github.com/babel/babe...

core

核心文件 栗子：https://github.com/mrdoob/thr...

还有一大堆，总共500多个，我不一一解释了，有兴趣可以点击看[统计结果]https://github.com/hujiulong/blog/blob/master/demo/data/themostfrequent_names.md

后话

其实大部分文件名看名字就能知道意思，也有一些是约定俗成的缩写。 相比之下更有意义的是对变量和函数名称的分析，我下次把这些项目的所有js文件内容爬下来然后再做一个分析。