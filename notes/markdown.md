# Markdown语法

Markdown的语法集合比较小，支持嵌套HTML语法，也支持些CSS。

## 目录

`在段落中填写 [TOC] 以显示全文内容的目录结构。`

[TOC]

## 标题

语法:
```
# 这是一级标题
## 这是二级标题
### 这是三级标题
#### 这是四级标题
##### 这是五级标题
###### 这是六级标题
```

## 文本段落

### 转移符 \

Markdown 可以利用反斜杠 \ 来插入一些在语法中有其它意义的符号
例如：如果你想要用星号加在文字旁边的方式来做出强调效果（但不用 \<em> 标签），你可以在星号的前面加上反斜杠：
\*literal asterisks\*

### 斜体加粗、背景高亮、分割线

语法:
```
*斜体*
**加粗**
***斜体加粗***
~~删除线~~
==背景高亮==
++下划线++

分割线:三个或更多的-或*均可，也可以在-或*中间插入空格。
---
----
***
*****
```
**加粗** *倾斜* ***斜体加粗*** ~~删除线~~ ==背景高亮== ++下划线++

分割线

---
----
***
*****

### 文字方向

语法:
```
<center>行中心对齐</center>
<p align="left">行左对齐</p>
<p align="right">行右对齐</p>
```
<center>行中心对齐</center>
<p align="left">行左对齐</p>
<p align="right">行右对齐</p>

### 占位符

多个回车换行，仅显示一个;
多个空格，仅显示一个，显示更多的空间，需要用到占位符,一个空格与一个\&nbsp;空间一样大.
语法:
```
|&emsp;或&#8195; //全角1
|&ensp;或&#8194; //半角2
|&nbsp;或&#160;  //半角之半角3
| 或&#160;  //半角之半角4
|是参考
```
示例:

|&emsp;或&#8195; //全角1
|&ensp;或&#8194; //半角2
|&nbsp;或&#160;  //半角之半角3
| 或&#160;  //半角之半角4

## 引用

语法:
```
>这是引用的内容
>>这是引用的内容
>>>>>>>>>>这是引用的内容
```
>>这是引用的内容
>>>>这是引用的内容

## 复选框

语法:
```
- [ ] 未完成 未选中
- [x] 已完成 选中
```
示例:
- [ ] 未完成 未选中
- [x] 已完成 选中

## 图片

语法:
```
![图片alt](图片地址 "图片title")
```
图片alt是加载图片失败时的文字说明。
图片title是图片的标题，当鼠标移到图片上时显示的内容。title可加可不加

示例:
![blockchain](https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=702257389,1274025419&fm=27&gp=0.jpg "区块链")

![web](images/Web.jpg "web")

## 超链接

###  1.行内式

语法:
```
[名称](地址 "超链接title(可有可无)")
[显示内容][参考连接link]
[link]:链接

也可以用html语言的a标签代替。
<a href="超链接地址" target="_blank">超链接名</a>
```
示例：
[简书](http://jianshu.com "简书")
<a href="https://www.jianshu.com/u/1f5ac0cf6a8b" target="_blank" title="a标签">a标签</a>

### 2. 参考式

参考式超链接一般用在学术论文上面，或者另一种情况，如果某一个链接在文章中多处使用，那么使用引用 的方式创建链接将非常好，它可以让你对链接进行统一的管理。
语法:
```
[链接文字][link]
[link]: link "Title:"
链接一般写在文档末尾,方便统一修改
```
示例:
展示几个网站[Bing][1]、[Leanote][2]，[Bing][1]是微软旗下搜索引擎。
[Bing][1]
[Bing][1]

[1]:http://www.biying.com "只需修改这一处即可完成所有引用link的改变"
[2]:http://www.leanote.com "Leanote"

### 3. 锚点（页内超链接）

网页中，锚点其实就是页内超链接，也就是链接本文档内部的某些元素，实现当前页面中的跳转。比如我这里写下一个锚点，点击回到目录，就能跳转到目录。 在目录中点击这一节，就能跳过来。还有下一节的注脚。这些根本上都是用锚点来实现的，只支持在标题后插入锚点，其它地方无效。

语法:
```
[标题](#标题) 此锚点指向的是#后'title'的位置
```
[标题1](#标题)
[引用1](#引用)
<a  href="#标题" title="title">跳转到 标题</a>(#后标题名称,无论是几级标题都只用一个#)

## 注脚

在需要添加注脚的文字后加上脚注名字\[^注脚名字],称为加注。 然后在文本的任意位置(一般在最后)添加脚注，脚注前必须有对应的脚注名字。
**注意**：经测试注脚与注脚之间必须空一行，不然会失效。成功后会发现，即使你没有把注脚写在文末，经Markdown转换后，也会自动归类到文章的最后。

语法
```
需要添加注脚的文字[^注脚名字]
使用Markdown[^1]可以提高书写文档的效率,也可以转换成HTML[^2]。

[^1]:Markdown是一种纯文本标记语言
[^2]:即HyperText Markup Language 超文本标记语言
```
使用Markdown[^1]可以提高书写文档的效率,也可以转换成HTML[^2]。
**脚注自动被搬运到最后面，请到文章末尾查看，点击注脚名字跳转到末尾，脚注后方的链接可以直接跳转回到加注的地方。**

[^1]:Markdown是一种纯文本标记语言
[^2]:即HyperText Markup Language 超文本标记语言

## 列表

### 无序、有序列表

无序列表用 - + * 任何一种都可以,有序列表是数字加点.
**注意：- + * . 符号跟内容之间要有空格**
语法:
````
- 无序列表
+ 无序列表
* 无序列表

1. 有序列表
2. 有序列表
3. 有序列表
````
- 无序列表
+ 无序列表
* 无序列表

1. 有序列表
3. 有序列表
5. 有序列表

### 列表嵌套

**上一级和下一级之间敲三个空格或一个Tab即可**
语法:
```
- 一级无序列表内容
   1. 二级有序列表内容
   2. 二级有序列表内容
   3. 二级有序列表内容
- 二级无序列表内容
   - 二级无序列表内容
   - 二级无序列表内容
```
示例:
- 一级无序列表内容
   1. 二级有序列表内容
   3. 二级有序列表内容
   5. 二级有序列表内容
- 二级无序列表内容
  + 二级无序列表内容
      1. 三级
      3. 三级
  + 二级无序列表内容

### 定义型列表

语法:
```
名词
:  解释
一行写上定义，紧跟一行写上解释。:一个缩进(Tab)或四个空格 + 解释
```
Markdown1
:  轻量级文本标记语言（一个Tab）

Markdown2
:    轻量级文本标记语言（四个不可见的空格）

## 表格

不管是哪种方式，第一行为表头，第二行分隔表头和主体部分，还可以为不同的列指定对齐方向，第三行开始每一行为一个表格行，列与列之间用管道符|隔开。
**原生语法两边都要用管道符 \| 包起来!**

语法：
```
默认为左对齐
- 左对齐， :-: 中心对齐，-: 右对齐
1.
表头|表头|表头
---|:--:|---:
内容|内容|内容
内容|内容|内容
2.
姓名|技能|排行
--|:--:|--:
刘备|哭|大哥
关羽|打|二哥
张飞|骂|三弟
3.
|第一列|第二列|第三列|
|-|:-:|-:|
|左|中|右|
```
示例:
1. 
表头111|表头222|表头333
---|:--:|---:
内容|内容|内容
内容|内容|内容
2. 
姓名name|技能skill|排行ranking
-|:-:|--:
刘备|哭|大哥
关羽|打|二哥
张飞|骂|三弟
3. 
|第一列|第二列|第三列|
|-|:-:|-:|
|左|中|右|

笑脸 :|
:|
:|

## 代码

### 单行代码

语法:
```
`单行代码`

代码两边分别用一个反引号包起来
`是Esc下方的~键,不是单引号
```
示例:
`单行代码`

### 代码块

语法：

      代码块：代码之间分别用三个反引号包起来，且两边的反引号单独占一行
      表示代码块使用四个空格或是两个Tab也可以
      ```
      代码块1
      代码块2
      ```
      ```
      ```

**代码块中使用留个反引号时,只要用Tab或空格表示代码块就能错开语法识别的冲突了**
示例:
```
代码块1
代码块2
```

### Html原始代码

在代码区块里面， & 、 < 和 > 会自动转成 HTML 实体，这样的方式让你非常容易使用 Markdown 插入范例用的 HTML 原始码，只需要复制贴上，剩下的 Markdown 都会帮你处理。

语法：

```
<div class="footer">
   © 2004 Foo Corporation
</div>
<table>
   <tr>
      <th rowspan="2">值班人员</th>
      <th>星期一</th>
      <th>星期二</th>
      <th>星期三</th>
   </tr>
   <tr>
      <td>李强</td>
      <td>张明</td>
      <td>王平</td>
   </tr>
</table>
```

示例：
<div class="footer">
   © 2004 Foo Corporation
</div>
<table>
   <tr>
      <th rowspan="2">值班人员</th>
      <th>星期一</th>
      <th>星期二</th>
      <th>星期三</th>
   </tr>
   <tr>
      <td>李强</td>
      <td>张明</td>
      <td>王平</td>
   </tr>
</table>

## LaText公式

语法:
```
行内公式 $内容$
行间公式 $$内容$$
上标和下标分别使用 ^ 与 _ 如: x_i^2
分式 \frac ab，\frac {a+c+1}{b+c+2}
不是单个字符，请使用{..}来分组

```

示例:
质能守恒方程可以用一个很简洁的方程式 $E = m c^2$来表达。 
上下标: $x_i^2$
分式: $\frac {a+c+1}{b+c+2},\frac ab$
$$ E = m c^2 $$

UML图

      ```flow
      st=>start: Start|past:>http://www.google.com[blank]
      e=>end: End:>http://www.google.com
      op1=>operation: My Operation|past
      op2=>operation: Stuff|current
      sub1=>subroutine: My Subroutine|invalid
      cond=>condition: Yes 
      or No?|approved:>http://www.baidu.com
      c2=>condition: Good idea|rejected
      io=>inputoutput: catch something...|request

      st->op1(right)->cond
      cond(yes, right)->c2
      cond(no)->sub1(left)->op1
      c2(yes)->io->e
      c2(no)->op2->e
      ```

```flow
st=>start: Start|past:>http://www.google.com[blank]
e=>end: End:>http://www.google.com
op1=>operation: My Operation|past
op2=>operation: Stuff|current
sub1=>subroutine: My Subroutine|invalid
cond=>condition: Yes 
or No?|approved:>http://www.baidu.com
c2=>condition: Good idea|rejected
io=>inputoutput: catch something...|request

st->op1(right)->cond
cond(yes, right)->c2
cond(no)->sub1(left)->op1
c2(yes)->io->e
c2(no)->op2->e
```　

## 流程图

```flow
st=>start: 开始
op=>operation: My Operation
cond=>condition: Yes or No?
e=>end
st->op->cond
cond(yes)->e
cond(no)->op
&```

类型:
start 开始标签
end 结束标签
operation 操作描述
subroutine 子程序
condition 变量流向，no和yes两种流向
inputoutput 输出

我是注释不会在浏览器上显示
[//]: # (哈哈我是最强注释，不会在浏览器中显示。)
[^_^]: # (哈哈我是最萌注释，不会在浏览器中显示。)
[//]: <> (哈哈我是注释，不会在浏览器中显示。)
[comment]: <> (哈哈我是注释，不会在浏览器中显示。)
