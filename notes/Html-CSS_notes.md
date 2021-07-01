# HTML+CSS notes

>愿中国青年都摆脱冷气，只是向上走，不必听自暴自弃者流的话，能做事的做事，能发声的发声，有一分热，发一分光，就令萤火一般，也可以在黑暗里发一点光，不必等候炬火，此后如竟没有炬火，我便是唯一的光。--鲁迅

**web文件编码**
1. html编码声明
`<meta http-equiv="Content-Type" content="text/html; charset=utf-8">`
2. js编码声明(默认是gbk编码)
`<script type="text/javascript" charset="utf-8" src="url"></script>`
3. css编码声明 写在css文件中，必须在文档第一行、双引号此属性才生效
`@charset "utf-8";`

## HTML

### 1.标签的选取

选择何种标签，取决于内容的含义，而不是显示出的效果。

### 2.Html Entity

html实体用于显示保留字符、不可见字符和那些难以键入的字符等；以'&'开头，';'结尾。

```
1. &单词; &copy; &frac12;
2. &数字; &#x000BD; &#x000BE;
占位符 &nbsp; < &lt; > &gt;
快捷 h$*6>{$级标题}
```

### 元素

元素类型：
1.  
    块级元素block
    常见块元素：div、form、table、ol、ul、pre、h1等
2.  
    行内块元素inline-block
    常见行内块元素：button、textarea等
3.  
    行内元素inline
    常见行内元素：span、i、img、a、code、video、audio等;

关于盒模型大小
1. 盒子随内容延伸
2. 行内元素不能设置宽高
3. 调整行内元素的宽高，应该使用字体大小、行高、字体类型，间接调整;
4. padding、border、margin：水平方向有效,垂直方向不会实际占据空间

行内元素可以设置左右padding、margin，但是不能设置上下;

行内元素内部(行内块元素)和行内元素内部(行内块元素)之间会发生空白折叠，原因是计算机对空格(文字分隔符)的定义与日常对空格的定义不同;

大部分元素，页面上显示的结果，取决于元素内容,称为**非可替换元素**；少部分元素，页面上显示的结果，取决于元素属性，称为**可替换元素**。
可替换元素: img、video、audio；绝大部分可替换元素为行内元素linline；可替换元素类似于行内块元素inline-block，盒模型中所有尺寸都有效，

object-fit CSS属性指定可替换元素的内容应该如何适应到其使用的高度和宽度确定的框。scale-down:内容的尺寸与 none 或 contain 中的一个相同，取决于它们两个之间谁得到的对象尺寸会更小一些。

a标签的一些作用
1. 超链接
2. 锚点
3. 打电话 `href="tel:号码" mailto:email`
4. 协议限定符 `href="javascript:编辑js代码"`

### html notes

1. 
    表单状态:
    readonly属性:布尔属性,是否只读,不改变表单样式；
    disabled属性:布尔属性,是否禁用,改变表单样式；
1. padding、width、margin取值为百分比时，是相对于包含块的宽度；
1. 如果文字没有在行内元素中,浏览器会自动生成一个行内元素包裹文字,该元素叫做匿名行内元素；

超链接a(anchor)
1. 超链接
2. 锚点
3. 打电话、发邮件 href="tel:13403701020" 'mailto:wzs@hotmail.com
4. 协议限定符 hfef="javascript:写js代码"

form表单：发送方式 method = "get/post"；发送目标 action ="url"；

## CSS

### CSS 选择器权重

1. ！important ———— Infinity
1. 行内样式 ———— 1000
1. id ———— 100
1. class|\[属性=值]|伪类 ———— 10
1. 标签|伪元素 ———— 1
1. 通配符 ———— 0

**注意**：权重之间进位，如1和10之间，满2^8(256)进1位。权重相同时,最后声明的代码生效;作者样式>浏览器默认样式;
a标签状态次序: link>visited>hover>active

### 选择器

**CSS选择器在browser中遍历顺序是:按照选择器元素顺序自右向左遍历**
伪类：用于当已有元素处于的某个状态时,为其添加对应的样式,这个状态是根据用户行为而动态变化的;伪类允许出现在选择器的任何位置.
伪元素：用于选择一些不在文档树中的元素,并为其添加样式. 伪元素选择只能跟在选择器的最后一个元素后面.

[选择器详解](https://code.tutsplus.com/zh-hans/tutorials/the-30-css-selectors-you-must-memorize--net-16048 "30个必须熟记的选择器")

1. 
    父子选择器 派生选择器 直接子元素选择器 并列选择器 属性选择器 等
2. 
    伪类选择器:
    :first-child
    :last-child
    :nth-child
    :nth-of-type
    :focus 
    :checked
    :disabled
    :not是一个否定伪类，用于匹配不符合参数选择器的元素.例：li:not(.first-item).
3. 
    伪元素选择器:
    ::before
    ::after
    ::first-letter 匹配首字符,仅在块盒生效
    ::first-line 匹配首行字符,仅在块盒生效
    ::target 锚点选择器,点击锚点后,触发样式效果(利用a标签的锚点效果)
    ::selection 匹配被用户选取的部分,只能设置color、background、cursor、outline;
4. 
    属性选择器: = ^=（|=） *= ~= $=
    :nth-child(n+1):nth-child(-n+3) 取交集 匹配1到3
    :nth-child(n+1):nth-child(n+3) 取交集 匹配3及3之后

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

#### 浮动与定位
行内元素设置了position：absolute；float：left/right；浏览器内部会把元素的display转换成inline-block;
inline-bloc元素错位问题：如果内联块里的没有文字，则其基线为margin-bottom的下边缘，如果有则为文字的基线；

float：浮动元素产生了浮动流，块级元素接触不到它们，产生了bfc的元素和具有文本类属性（拥有inline属性）的元素以及文本都能接触到浮动元素。
clear float(clear属性只在块级元素中生效)
1. 设置父级样式{overflow:auto} hidden也可以 ，就visible不行
2. 在浮动元素后面添加元素，样式设置为{clear:both; height: 0; line-height: 0;font-size:0}
3. 清除浮动（最好的清除浮动方式）--闭合浮动.clearFix:after{content:"";display: block(table);clear:both;}
浮动盒子根据内容确定大小（自动撑开），不用设置宽度

定位position（子绝父相）：static：静态定位；absolute:绝对定位（清除文本流）；relative：相对定位；fixed：固定定位（清除文本流）。
定位的盒子没宽度,宽度随内容;标准流中的盒子,宽度随父亲;
定位不执行层叠关系;
z-index(层级):只有定位的盒子(除了static)有z-index(浮动没有);都是定位的情况下，z-index默认为0;情况相同的盒子重叠的话,后者在前者的上面（即层级显示高于前者）,在标准流中设置相对定位(postion:relative)会把层级提升到“最高”;同级绝对定位时,提升层级可以使用z-index.

### CSS notes

光学三原色：红绿蓝(色彩三原色：红黄蓝)
html颜色代码：#f40(00-ff,00-ff,00-ff)
颜色函数：rgb(0-255,0-255,0-255,0-1)

#### margin塌陷、margin合并
1. margin塌陷(父子margin重叠在一起),弥补方法是触发盒子的bfc(block format content),但无法完美解决,有着不同缺点：
    1. position：absolute；
    2. display：inline-block；
    3. float：left/hidden；
    4. overflow：hidden；
2. margin合并(同级)：垂直方向上的margin重叠在一起，以最大值为准;不解决,直接设置最大值即可.

标签嵌套：行级元素只能嵌套行级元素；块级元素可以嵌套任何元素。特殊的：p标签不能嵌套块级元素，p会被截断；a不能嵌套a、表单等。

关闭input选中后外部阴影轮廓 outline-style: none；placeholder = "文本框的文字提示"
autofocus：给文本框、选择框或者按钮加上该属性，当打开该页面时，该控件自动获取光标焦点，一个页面只有一个。
textarea文本域禁止改变大小 resize:none；

表格合并边框 table{border-collapse:collapse;}
使内容可编辑，只需要加一个contenteditable属性；
禁止用户选中内容 user-select: none；
使元素永远不会成为鼠标事件的target pointer-events：none；

引入网站图标`<link rel="icon" href="url-favicon.ico">`

凡是带有（display）inline的元素，都具有文字特性；因此行内块儿元素（表单，图片）之间有缝隙，那是空格（文字分隔符）在生效；
解决方法：
1. img父级标签设置font-size为0；
2. img设置display为block，设置float为left；
3. 设置img的letter-spacing为负的任何值均可(貌似无效),`letter-spacing:-800px`；
4. 删除img标签之间的空格或回车（写在同一行或将标签要闭合的地方与后一标签开始的地方写在一起，如下：）；
````
<img src="/i/eg_tulip.jpg" alt="郁金香" height="100px"
/><img src="/i/eg_tulip.jpg" alt="郁金香" height="100px" />
````
去掉图片底侧默认的3像素空白 `vertical-align:middle; || display：block;`

cursor光标样式：default白色指针，pointer小手，move移动，text文本输入，help问号

网页布局，确定一个盒子时依次考虑的是：宽度高度、背景边框、位置;

块级元素margin上、下、左、右可以设置，行内元素margin可以设置左、右(部分浏览器不支持上下);

间距可以使用高度剩余法、宽度剩余法(相对于margin等写法，速度较快)

nav：dropdown、navitems、navright;
底部：links、copyright、message;

盒子中的a,宽度会继承,只需设置高度即可;

#### 文字溢出处理
1. 单行文本,超出打点：
	white-space:nowrap;（文本不换行）
	overflow：hidden；（超出文本隐藏）
	text-overflow:ellipsis;（超出文本展示方式）
2. 多行文本：
	一般多行文本不作打点，只做截断，整数行展示。

font，background 简写：
1. font: style variant字体变化 weight siz字号/line-height行高 family;
    font-size设置的是字体的高；
    字体倾斜 font-style:italic;（倾斜字体 i em）
    首行缩进text-indent：2em；文本装饰text-decoration：line-through（中划线），underline（下划线），overline（上），blink（闪烁）
    删除线 s del，下划线 u ins
    文字垂直居中：line-height=height || 内容等于高度，加padding;
    vertical-align：10px，文字对齐位置改变；
2. background: color image repeat背景是否重复 attachment背景是否滚动 position/size origin clip;
    background-attachment CSS 属性决定背景图像的位置是在视口内固定，还是随着包含它的区块滚动；
    背景色渐变background: linear-gradient(to bottom,#000000 0%,#5788fe 100%);
    背景半透明：
        CSS3写法：Backgground: rgba(0,0,0,0.5);rgb(0,0,0,0.5)同样可以;
        CSS3不支持时可以使用滤镜;
        opacity:0.5，让盒子半透明，内容也半透明(opacity 属性的值，可以被其子元素继承);

#### 盒子隐藏
1. display:none;隐藏不占位置
2. visibility:hidden;隐藏但是占有位置
3. overflow:hidden;超出部分隐藏

pixelTop整形
posTop浮点形
offsetTop

#### video全屏处理
只需在video标签加个webkit-playsinline属性即可,这个属性基本上在基于webkit内核的移动端都是没问题的.这里的全屏是浏览器视窗内的全屏,并不是整个手机屏幕,当然web前端需要的就是在document的body内的视窗范围的全屏.
`<video src="" webkit-playsinline="true"></video>`

direction: ltr;(表示从左往右的流-默认)
direction: rtr;(表示从右往左的流)

writing-mode 属性定义了文本水平或垂直排布以及在块级元素中文本的行进方向。
```
writing-mode: horizontal-tb;    /* 默认值 文本流是水平方向(horizontal)的，元素是从上往下(tb:top-bottom)堆叠的*/
writing-mode: vertical-rl;      /* 表示文本是垂直方向(vertical)展示，然后阅读的顺序是从右往左(rl:right-left)，跟我们古诗的阅读顺序一致*/
writing-mode: vertical-lr;      /*表示文本是垂直方向(vertical)展示，然后阅读的顺序还是默认的从左往右(lr:left-right)，也就是仅仅是水平变垂直*/ 
```

transition: all 0.6s;表示所有的属性变化在0.6s的时间段内完成。
transform: scale(1.4);表示在鼠标放到图片上的时候图片按比例放大1.4倍。

body默认有个8px margin；
清除屏幕下方白条`body{overflow-x: hidden;overflow-y: auto;}`；

js中elem.style.width="20px";elem.style.height="20px";代码多而且通过JS来覆写对象的样式是比较典型的一种销毁原样式并重建的过程，这种销毁和重建，都会增加浏览器的开销。
使用 elem.style.cssText="width:20px;height:20px;";可以减少代码量,避免页面多次reflow.

html颜色,如#ff00ff,六位,调整过透明度后变成了八位,安卓端识别不出来

chrome隐藏滚动条并保持滚动: .element::-webkit-scorllbar{display:none;}

去掉input[type=number]加减按钮(上下箭头)
```
/*在谷歌下移除input[number]的上下箭头*/
input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button{
    -webkit-appearance: none !important;
    margin: 0;
}
/*在firefox下移除input[number]的上下箭头*/
input[type="number"]{-moz-appearance:textfield;}
```

calac 和flexbox搭配，用来写流式布局非常好；
calc可以做用于任何具有大小的东东，比如border、margin、pading、font-size和width等属性设置动态值;支持的运算单位：rem , em , percentage , px;计算优先级别和数学一致

#### @规则
```
@charset    设置样式表编码
    @charset "utf-8";
@import 导入样式文件(导入式--link是链接式)
    @import 'head.css';
@meida  媒体查询
@font-face  自定义字体
```

#### 以图换字
企业开发中，必须是图片的，使用img；可以替换的，使用background-image.
当网速不行时，浏览器会屏蔽Css、JavaScript，在这种情况下要保证使用背景图片的超链接正常使用,比如网站首页图标。
1. case1：使用首行缩进把文字顶出去，然后超出隐藏；
    text-indet:200px；（首行缩进）
    whit-spce:nowrap;（文字不换行）
    overflow：hidden；
2. case2：（背景色、背景图可以加在padding、contentuh上）容器高度设为0，padding设为图片高度；然后超出隐藏；
    height：0；
    padding-top：200px；
    overflow：hidden；

有时会直接将图片等文件采用数据链接的方式写在页面上,优点是减少请求；
数据链接：将目标文件的数据直接书写到路径位置
语法：`data: MIME,数据`


