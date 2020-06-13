# web第二次系统学习笔记

## Html

### 1.标签的选取

选择什么标签,取决于内容的含义,而不是显示出的效果

### 2.Html Entity

html实体用于显示保留字符、不可见字符和那些难以键入的字符等;以'\&'开头,'\;'结尾.

1. &单词; &copy; &frac12;
2. &数字; &#x000BD; &#x000BE;
<!-- h$*6>{$级标题} -->

行盒(display:inline;)
常见行盒: 包含具体内容的元素,如:span、strong、i、img、video、audio等;

 1. 盒子随内容延伸
 2. 行盒不能设置宽高
 3. 调整行盒的宽高,应该使用字体大小、行高、字体类型,间接调整;
 4. padding、border、margin：水平方向有效,垂直方向不会实际占据空间

行盒内部(行块盒)和行盒(行块盒)之间会发生空白折叠;

伪类：用于当已有元素处于的某个状态时,为其添加对应的样式,这个状态是根据用户行为而动态变化的;伪类允许出现在选择器的任何位置.
伪元素：用于创建一些不在文档树中的元素,并为其添加样式. 伪元素只能跟在选择器的最后一个简单选择器后面.

伪类选择器:
:first-child
:last-child
:nth-child
:nth-of-type
:focus 
:checked
:disabled
:not是一个否定伪类，用于匹配不符合参数选择器的元素.例：li:not(.first-item).

伪元素选择器:
 ::/:before
 ::/:after
 ::/:first-letter 匹配首字符,仅在块盒生效
 ::/:first-line 匹配首行字符,仅在块盒生效
 ::target 锚点选择器,点击锚点后,触发样式效果(利用a标签的锚点效果)
 ::selection 匹配被用户选取的部分,只能设置color、background、cursor、outline;

属性选择器: = |= ^= *= ~= $=
:nth-child(n+1):nth-child(-n+3) 取交集 匹配1到3
:nth-child(n+1):nth-child(n+3) 取交集 匹配3及3之后

点击图标/链接发起QQ临时会话实现方案比较简单，只是为a标签修改href属性，代码如下:

        <a href="http://wpa.qq.com/msgrd?v=3&amp;uin=你要输入的QQ号码&amp;site=qq&amp;menu=yes" target="_blank" title="QQ">

需要注意的是，你填入的QQ号码，必须在QQ设置-临时会话中，将'不接受任何临时会话'前面的勾去掉

大部分元素,页面上显示的结果,取决于元素内容,称为**非可替换元素**
少部分元素,页面上显示的结果,取决于元素属性,称为**可替换元素**
可替换元素: img、video、audio
绝大部分可替换元素均为行盒.
可替换元素类似于行块盒,盒模型中所有尺寸都有效.

object-fit CSS 属性指定可替换元素的内容应该如何适应到其使用的高度和宽度确定的框.
scale-down:内容的尺寸与 none 或 contain 中的一个相同，取决于它们两个之间谁得到的对象尺寸会更小一些.

表单状态:
readonly属性:布尔属性,是否只读,不改变表单样式;
disabled属性:布尔属性,是否禁用,改变表单样式.

padding、width、margin取值为百分比时，是相对于包含块的宽度.

background-attachment CSS 属性决定背景图像的位置是在视口内固定，还是随着包含它的区块滚动.

如果文字没有在行盒中,浏览器会自动生成一个行盒包裹文字,该行盒叫做匿名行盒.

### 堆叠上下文(stack content)
它是一块区域,这块区域由某个元素创建,它规定了该区域的内容在Z轴上排列的先后顺序.

#### 创建堆叠上下文的元素
1. html元素(根元素)
2. 设置了z-index(非auto)数值的定位元素

#### 同一个堆叠上下文中元素在Z轴上的排列
从后到前的排列顺序(如同刷墙,一层一层覆盖):
1. 创建堆叠上下文的元素的背景和边框(永远在堆叠上下文的最后)
2. 堆叠级别为负值的堆叠上下文
3. 常规流非定位的块盒
4. 非定位的浮动盒
5. 常规流非定位行盒
6. 任何z-index是auto的定位子元素,以及z-index是0的堆叠上下文
7. 堆叠级别为正值的堆叠上下文

### 数据链接
数据链接: 将目标文件的数据直接书写到路径位置
语法: data:MIME,数据
优点: 减少请求

## CSS

### 简写
1. background: color image repeat attachment position;
2. font: style variant weight font-siz line-height family;

### css
- [ ] flex布局
- [ ] vue+小程序
- [ ] wepack
- [ ] git
- [ ] ES6+
- [ ] geolocation workers多线程处理
- [ ] css stickyfooter

### note
全局样式 base.css||global.css(基本样式)
CSS初始化前 @charset "UTF-8"
input选中后外部阴影效果关闭 outline-style: none;
textarea防止拖动 resize: none;
img去掉图片底侧默认的3px空白缝隙 broder: 0;vertial-align: middle;
禁止用户选中 user-select: none;

## 浏览器加载页面

参考:
[前端页面渲染机制](https://www.cnblogs.com/baby-zuji/p/11172321.html#commentform '前端页面渲染机制') 
[什么是回流，什么是重绘，有什么区别？](https://www.jianshu.com/p/e081f9aa03fb '什么是回流，什么是重绘，有什么区别？')
[DOM树构建过程](https://segmentfault.com/q/1010000011935083 'DOM树构建过程')

brower根据url发送请求,server返回数据:
0. DOM tree的构建是从接受到文档开始的,过程被分为标记化和树构建;
1. 代码从起始位置,逐行执行
2. 执行到带href属性link标签,发送请求,该请求进入异步线程继续执行生成CSSOM;
3. 执行到src属性标签,阻塞线程,执行完标签内容或请求到script脚本并执行后,继续页面解析;
   (其中,拥有src属性的img标签,不阻塞,同样进入异步等待,鬼才等图片加载再显示页面呢)
4. 
5. CSSOM与GOM tree合成render tree(渲染树),render tree中只有可见内容(隐藏的元素和head元素都不存在);
6. 继续解析,执行脚本等,JS中DOM操作的就是render tree;
7. 解析到html标签结束.
 
render tree中发生改变时,
1. 不发生位置、布局发生改变,仅改变render tree中的某个元素(直接替换属性),被称为重绘;
2. 涉及位置、布局发生改变,重新计算生成render tree,对各个元素进行位置计算、样式计算等等,被称为回流.

![browser render机制](./img/browser渲染机制.png 'browser render机制')

### DOM树构建过程
1. 用户输入一个URL的时候，浏览器就会发送一个请求，请求URL对应的资源。

2. 浏览器的HTML解析器会将这个文件解析，并且构建成一棵DOM树。(在生成DOM的最开始阶段（应该是Bytes → characters后），并行发起css、图片、js的请求，无论他们是否在HEAD里。)

   - 注意：发起js文件的下载request并不需要DOM处理到那个script节点，比如：简单的正则匹配就能做到这一点，虽然实际上并不一定是通过正则：）。这是很多人在理解渲染机制的时候存在的误区

3. 在构建DOM树的时候，遇到 js 和 CSS元素，HTML解析器就换将控制权转让给JS解析器或者是CSS解析器。开始构建CSSOM

4. DOM树构建完之后，浏览器把DOM树中的一些不可视元素去掉，然后与CSSOM合成一棵render tree。

5. Layout：有了Render Tree，浏览器已经能知道网页中有哪些节点、各个节点的CSS定义以及他们的从属关系。下一步操作称之为Layout，顾名思义就是计算出每个节点在屏幕中的位置。

6. Painting：Layout后，浏览器已经知道了哪些节点要显示（which nodes are visible）、每个节点的CSS属性是什么（their computed styles）、每个节点在屏幕中的位置是哪里（geometry）。就进入了最后一步：Painting，按照算出来的规则，通过显卡，把内容画到屏幕上。

以上几个步骤因为DOM、CSSOM、Render Tree都可能在第一次Painting后又被更新多次，比如JS修改了DOM或者CSS属性。Layout和Painting也会被重复执行，除了DOM、CSSOM更新的原因外，图片下载完成后也需要调用Layout 和 `Painting来更新网页
