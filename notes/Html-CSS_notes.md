# Html-Css_notes

## Browser

1. shell: 外壳
2. core: 内核(JS执行引擎,渲染引擎)

IE: Trident
Firefox: Gecko
Chrome: Webkit / Blink
Safari: Webkit
Opera: Presto / Blink

## Html_notes

**选择什么标签,取决于内容的含义,而不是显示出的效果**

## CSS_notes

光学三原色：红绿蓝(色彩三原色：红黄蓝)
颜色代码：#f40
r       g       b
00-ff	00-ff	00-ff
颜色函数  rgb(0-255,0-255,0-255,0-1)

margin塌陷(父子)，margin合并(同级)：垂直方向上的margin，以最大值为准

*bfc(block format content)*
如何触发一个盒子的bfc：
1. position：absolute；
2. display：inline-block；
3. float：left/hidden；
4. overflow：hidden；

float：浮动元素产生了浮动流。
产生了浮动的元素，块级元素看不到他们，产生了bfc的元素和文本类属性（inline）的元素以及文本都能看到浮动元素。

设置了position：absolute；float：left/right；在内部把元素转换成inline-block;

clear float

1. 设置父级样式{overflow:auto} hidden也可以 ，就visible不行
2. 在浮动元素后面添加元素，样式设置为{clear:both; height: 0; line-height: 0;font-size:0}
3. 清除浮动（最好的清除浮动方式）--闭合浮动.clearfix:before,.clearfix:after{content:"";display: table;}.clearfix:after{clear:both;}
浮动盒子根据内容确定大小（自动撑开），不用设置宽度

*文字溢出处理*
1. 单行文本：
white-space:nowrap;（超出文本不换行）
overflow：hidden；（超出文本隐藏）
text-overflow:ellipsis;（超出文本展示方式）

2. 多行文本：
一般多行文本不作打点，只做截断，整数行展示。

*图片代替文字*
企业开发中，必须是图片的，使用img；可以替换的，使用background-image
当网速不行时，会屏蔽Css、JavaScript，在这种情况下，要保证功能的正常使用。
case1：使用首行缩进把文字顶出去，然后超出隐藏；
text-indet:200px；（首行缩进）
whit-spce:nowrap;（文字不换行）
overflow：hidden；
case2：（背景色、背景图可以加在padding、contentuh上）容器高度设为0，padding设为图片高度；然后超出隐藏；
height：0；
padding：200px；
overflow：hidden；

标签嵌套：
行级元素只能嵌套行级元素；块级元素可以嵌套任何元素。
特殊的：p标签不能嵌套块级元素，p会被截断；a不能嵌套a、表单等。

vertical-align：10px；文字对齐位置改变

文字垂直居中
1. line-height=height;
2. 内容等于高度，加padding，

font-size设置的是字体的高。

全局样式（基本样式）base.css|global.css
css初始化前最好加上 @charset "UTF-8" 保证字符编码
input外部背景框轮廓去除 input{outline-style：none;}
文本域防止拖动 textarea{rasize:none}
去掉图片底侧默认的3像素空白 img{vertical-align:middle} || display：block;
表格合并边框 table{border-collapse:collapse;}

让你的内容可编辑，只需要加一个contenteditable属性 
placeholder = ""文本框的输入提示
autofocus给文本框、选择框或者按钮加上该属性，当打开该页面时，该控件自动获取光标焦点，一个页面只有一个。

引进网站图标 link rel="shortcut icon" href="url-favicon.ico"

定位position：（盒子：子绝父相）
static：静态定位
absolute:绝对定位（清除文本流）
relative：相对定位
fixed：固定定位（清除文本流）
定位的盒子没宽度,宽度随内容;标准流中的盒子,宽度随父亲;
定位不执行层叠关系;
z-index(层级):只有定位的盒子(除了static)有z-index(浮动没有);都是定位的情况下，z-index默认为0;情况相同的盒子重叠的话,后者在前者的上面（即层级显示高于前者）,在标准流中设置相对定位(postion:relative)会把层级提升到“最高”;同级绝对定位时,提升层级可以使用z-index.

首行缩进text-indent：2 em；
文本装饰text-decoration：line-through（中划线）; underline（下划线）overline（上）blink（闪烁）
删除线 s del，下划线 u ins
字体倾斜 font-style:italic;（倾斜字体 i em）
font：字体加粗 字号/行高 字体；（必须有字号和字体）

字体不加粗、不倾斜：font-weight:normal; font-style:normal;

凡是带有（display）inline的元素，都具有文字特性

行内块儿元素（表单，图片）之间有缝隙；

cursor光标样式
default 白色指针(默认)
pointer 小手
move 移动
text 文本输入
help 问号

网页布局，给定一个盒子时依次考虑的是：宽度高度、背景边框、位置;

块级元素margin上、下、左、右可以设置，行内元素margin可以设置左、右(部分浏览器不支持上下);

高度剩余法、宽度剩余法(相对于margin等写法，速度较快)

nav:dropdown、navitems、navright;
底部：links、copyright、message;

盒子中的a,宽度会继承,只需设置高度即可;

background:
backgrounf-postion:背景图像位置（位移偏量）
背景拥有五个属性：背景图片、背景位置、背景颜色、背景是否平铺(repeat)、背景是否滚动(attachment);

背景半透明：
CSS3写法：Backgground: rgba(0,0,0,0.5);
CSS3不支持时可以使用滤镜;
Opacity:0.5;让盒子半透明,内容也半透明(opacity属性的值，可以被其子元素继承);

行内元素可以设置左右padding、margin，但是不能设置上下;

盒子隐藏
display:none;隐藏不占位置
visibility:hidden;隐藏但是占有位置
overflow:hidden;超出部分隐藏

a -- anchor

1. 超链接
2. 锚点
3. 打电话、发邮件 href="tel:13403701020"
4. 协议限定符 hfef="javascript:写js代码"

form
发送方式 method = "get/post"
发送目标 action ="url"

onfocus 鼠标聚焦 onblur 失去焦点

选择器
    ！important————Infinity
    行内样式————1000
    id————100
    class|属性[属性名]|伪类————10
    标签|伪元素————1
    通配符————0

权重之间是进位，比如1和0之间，满256进1位。

父子选择器|派生选择器
并列选择器
browser遍历是自右向左

font-weight： lighter、normal、bold、dolder

pixelTop整形
posTop浮点形
offsetTop

**video全屏处理**
只需在video标签加个webkit-playsinline属性即可,这个属性基本上在基于webkit内核的移动端都是没问题的.这里的全屏是浏览器视窗内的全屏,并不是整个手机屏幕,当然我们做web前端需要的就是在document的body内的视窗范围的全屏.

    <video src="" webkit-playsinline="true"></video>
	
direction: ltr;(表示从左往右的流-默认)
direction: rtr;(表示从右往左的流)
	
改变 CSS 世界纵横规则的 writing-mode
writing-mode 属性定义了文本水平或垂直排布以及在块级元素中文本的行进方向。
writing-mode: horizontal-tb;    /* 默认值 文本流是水平方向(horizontal)的，元素是从上往下(tb:top-bottom)堆叠的*/
writing-mode: vertical-rl;      /* 表示文本是垂直方向(vertical)展示，然后阅读的顺序是从右往左(rl:right-left)，跟我们古诗的阅读顺序一致*/
writing-mode: vertical-lr;      /*表示文本是垂直方向(vertical)展示，然后阅读的顺序还是默认的从左往右(lr:left-right)，也就是仅仅是水平变垂直*/ 

transition: all 0.6s;表示所有的属性变化在0.6s的时间段内完成。
transform: scale(1.4);表示在鼠标放到图片上的时候图片按比例放大1.4倍。

清除屏幕下方白条
	body{
			overflow-x: hidden;
			overflow-y: auto;
		}
背景色渐变
background: linear-gradient(to bottom,#000000 0%,#5788fe 100%);

html编码声明
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
js编码声明(默认是gbk编码)
<script type="text/javascript" charset="utf-8" src=""></script>
css编码声明 写在css文件中
@charset "utf-8";(必须在文档第一行,双引号此属性才生效)

js中elem.style.width="20px";elem.style.height="20px";代码多而且通过JS来覆写对象的样式是比较典型的一种销毁原样式并重建的过程，这种销毁和重建，都会增加浏览器的开销。
使用 elem.style.cssText="width:20px;height:20px;";可以减少代码量,避免页面多次reflow.

html颜色,如#ff00ff,六位,调整过透明度后变成了八位,安卓端识别不出来

chrome隐藏滚动条并保持滚动: .element::-webkit-scorllbar{display:none;}

inline-bloc元素错位问题:
如果内联块里的没有文字，则其基线为margin-bottom的下边缘，如果有则为文字的基线

去掉input[type=number]加减按钮(上下箭头)
/*在谷歌下移除input[number]的上下箭头*/
input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button{
    -webkit-appearance: none !important;
    margin: 0;
}
/*在firefox下移除input[number]的上下箭头*/
input[type="number"]{-moz-appearance:textfield;}

calac 和flexbox搭配，用来写流式布局非常好；
calc可以做用于任何具有大小的东东，比如border、margin、pading、font-size和width等属性设置动态值;支持的运算单位：rem , em , percentage , px;计算优先级别和数学一致


超出隐藏
overflow: hidden;text-overflow: ellipsis;white-space: normal;word-break: keep-all;

