Markdown的语法很少，和HTML语法相近，但只对应HTML标记的一小部分，因此在Markdown文件中可以使用HTML标签
# 一级标题

## 二级标题

下划线
***

*相当于<em>标签*

**相当于<strong>**

无序列表使用星号、加号或是减号作为列表标记

* Red
* Green
* Blue

有序列表则使用数字接着一个英文句点：

1. Bird
2. McHale
3. Parish

Markdown 可以利用反斜杠来插入一些在语法中有其它意义的符号
例如：如果你想要用星号加在文字旁边的方式来做出强调效果（但不用 <em> 标签），你可以在星号的前面加上反斜杠：
\*literal asterisks\*

超链接
[Google]: http://google.com/
插入图片
详细叙述如下：
一个惊叹号 !
接着一个方括号，里面放上图片的替代文字
接着一个普通括号，里面放上图片的网址，最后还可以用引号包住并加上 选择性的 'title' 文字。
![Alt text](/path/to/img.jpg "Optional title")