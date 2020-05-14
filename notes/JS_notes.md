# JS基础

browser:shell、内核(渲染引擎,JS引擎,其他模块)

1. IE —— trident
1. Firefox —— Gecko
1. Google chrome —— webkit/blink
1. Safari —— webkit
1. Opera —— presto

## ECMAScript

基础操作符、语句、变量和作用域

1. ECMAScript (欧洲计算机制造协会) 描述了js的语法和基本对象
1. DOM-->Document Object Model(文档对象模型) 处理网页内容的方法和接口,为文档提供了结构化表示,并定义了如何通过脚本来访问文档结构.目的是为了能让js操作html元素而制定的一个规范.
1. BOM 浏览器对象模型 与浏览器交互的方法和接口

parseInt()、parseFloat()、inNaN()、isFinite()(确定数值是否超过规定范围)
encodeURI()、encodeURIComponent() //地址编码,encodeURI()不会对本身属于URI的特殊字符进行编码
decodeURI()、decodeURIComponent() //地址解码

立即执行函数:针对初始化功能的函数
    //当函数作为表达式时,会立即执行,()可以使内容转换为表达式
    //只有表达式才能被执行符号执行;被执行符号执行后,函数名即被永久放弃
    (function(){
        console.log("Hello");
    })();
    !function(){}() || (function(){}()) //使用!、+、-等符号
    (function(text){
        console.log(text);
    })("Hello") //传递参数

js中的内置功能:
var val = prompt("请输入") 获取用户输入的内容
windon.alert() 弹出提示框
console.log() 控制台输出
console.warn() 控制台警示
console.error() 控制台错误提示
document.write() 文档打印输出
window.prompt('') 用户输入

变量的声明;使用驼峰命名法或者下划线法,开头不能是数字,名称中可以包含汉字但不能包含中文符号

事件三要素:事件源 事件 事件处理程序
事件源:触发的对象
事件:触发的条件(一般是鼠标经过,键盘,点击)
事件处理程序:要执行的程序
事件源.事件= function() { 事件处理函数 }

入口函数:页面加载完毕后,执行函数内的代码
window.onload = function(){
    内部放js
}
a href="javascript:;">超链接不跳转
a href="javascript:void(0);">超链接不跳转

在逻辑或和逻辑与中,返回值不一定是布尔值;
如:var myObject = preferredObject || backupObject;
变量preferredObject优先赋给变量myObject, 变量backupObject在preferredObject中不包含有效值的情况下提供后备值.

**预编译前奏**执行前生效

1. imply global暗示全局变量:即任何变量,如果变量未经声明就赋值,此变量为全局对象所有;
1. 一切声明的全局变量,全是window的属性;

**预编译**
预编译发生在函数执行的前一刻:

1. 创建AO对象(Activation Object --执行期上下文)
1. 找形参和变量声明,将变量和形参名作为AO的属性名,值为undefined;
1. 将实参值和形参统一;
1. 在函数体里面找函数声明,将函数名作为AO的属性名,属性值被赋予为声明的函数体;
    console.log(test); //输出 全局test函数体
    function test(test){
        console.log(test); //输出 局部test函数体
        var test = 123;
        console.log(test);//123
        function test(){}
    }
    test(1);
    var test =456;

**构造函数内部原理**内部隐式运行

1. 在函数体最前面隐式的加上 var this = {}
1. 执行this.xxx = xxx;
1. 隐式的返回this

**this**一般指向

1. 函数预编译过程 this --> window
1. 全局作用域 this --> window
1. call/apply可以改变函数运行时this指向
1. obj.func(); func()里面的this指向obj

**逗号操作符**
var a = (1,2);//a=2,返回最后面的值

### 条件操作符

var iable = boolean_expression ? true_value : false_value;
基于对boolean_expression求值的结果,决定给variable赋什么值

### if语句

语法: if (condition) statement1 else statement2
其中的condition(条件)可以是任意表达式;而且对这个表达式求值的结果不一定是布尔值.ECMAScript会自动调用Boolean()转换函数将这个表达式的结果转换为一个布尔值,如果对condition求值结果是true,则执行statement1(语句1),如果对condition求值的结果是false.则执行statement2(语句2).

### do-while语句("直到"型循环)

do-while语句是一种后测试循环语句,即只在循环体中的代码执行之后,才会测试出口条件.在对条件表达式求值之前,至少被执行一次
语法: do {
    statement
} while (expression)

### while语句("当"型循环)

while语句属于前测试循环语句,在循环体内的代码被执行之前,就会对出口条件求值.因此,循环体内的代码有可能永远不会被执行.
语法: while(expression){
    statement
}

### for语句

for语句也是一直前测试循环语句, 但它具有在执行循环之前初始化变量和定义循环后要执行的代码的能力.(在循环中定义的初始化变量在外部可以访问到)
语法: for (initialization; expression; post-loop-expression){
    statement
}

### for-in语句

for-in语句是一种精准的迭代语句,可以用来枚举对象属性.
语法: for (property in expression){
    statement
}
如: for (var propName in window){
    document.write(propName);
}
obj.prop ---> obj['prop']

1.hasOwnProperty() 2.in 3.instanceof()

hasOwnProperty()识别属性是否是自身属性
'propName' in obj;
A instanceof B  A对象 是不是 B构造函数构造出来的(看A对象的原型链上 有没有 B的原型)

这里控制语句中的var操作符也不是必需的,但是可以保证使用局部变量.当要迭代的对象的变量为null或undefined,for-in语句会抛出错误,在ECMAScript5之后更正了这一行为,不再抛出错误,而只是不执行循环体.
typeof操作符检测基本数据类型时非常适合,但变量的值是一个对象或null时,typeof会返回object,因此typeof不适合检测引用类型数据.当给定变量是引用类型时,使用instanceof操作符判定.
instanceof语法: result = variable instanceof constructor
如: alert(person instanceof RegExp);//变量person是RegExp吗?

### break和continue语句

break和continue语句用于在循环中精确的控制代码的执行.其中break语句会立即退出循环,强制执行循环后面的语句.continue虽然也是立即退出循环,但在退出循环后会从循环的顶部继续执行.

### label语句

使用label语句可以在代码中添加标签,以便将来使用.
语法: label: statement
如: begin: for (var i = 0; i < 10 ; i++ ){
     alert(i);
   }

#### Label 的应用:(未添加 Label)

    var num = 0;
    for (var i = 0 ; i < 10 ; i++){
    for (var j = 0 ; j < 10 ; j++){
        if( i == 5 && j == 5 ){
        break;
        }
    num++;
        }
    }
    alert(num);
    //循环在 i 为5, j 为5的时候跳出 j 循环,但会继续执行 i 循环,输出 95
    var num = 0;
    for (var i = 0 ; i < 10 ; i++){
    for (var j = 0 ; j < 10 ; j++){
        if( i == 5 && j == 5 ){
        continue;
        }
    num++;
        }
    }
    alert(num);
    //循环在 j 为5时,跳过 j 为5的循环,但后面的循环继续,输出99

#### 对比使用了 Label 之后的程序:(添加 Label 后)

    var num = 0;
    outPoint:
    for (var i = 0 ; i < 10 ; i++){
    for (var j = 0 ; j < 10 ; j++){
    if( i == 5 && j == 5 ){
        break outPoint;
        }
        num++;
        }
    }
    alert(num);
    //循环在 i 为5, j 为5的时候跳出双循环,返回到outPoint层继续执行,输出 55
    var num = 0;
    outPoint:
    for (var i = 0 ; i < 10 ; i++){
    for (var j = 0 ; j < 10 ; j++){
        if( i == 5 && j == 5 ){
        continue outPoint;
        }
    num++;
        }
    }
    alert(num);
    //循环在 j 为5时,跳过双循环,但后面的循环继续,输出95

### with语句

with语句的作用是将代码的作用域设置到一个特定的对象中.
语法: with (expression) statement;
定义with语句的目的是为了简化多次编写同一个对象的工作.
instance:
    var qs = location.search.substring(1);
    var hostName = location.hostName;
    var url = location.href;
    //上面几项都包含location对象,使用with语句可以简化成如下所示
    with(location){
        var qs= search.substring(1);
        var hostName = hostName;
        var url = href;
    }

### switch语句

switch语句与if语句的关系最为密切,而且也是在其他语言中普遍使用的一种流控制语句.ECMAScript中switch语句的语法与其他基于C的语言非常接近.
expression:
    switch (expression){
        case value: statement
        break;
        case value: statement
        break;
        case value: statement
        break;
        default: statement
    }

switch语句中的每一种情形(case)的含义是:"如果表达式等于这个value,则执行后面的statement",而break关键字会使代码执行流跳出switch语句.如果省略break关键字,就会导致执行完当前case后,继续执行下一个case.最后的default关键字则用于在表达式不匹配前面的case时,执行机动代码(相当于一个else语句).
instance:
    switch (i){
        case 10:
        //合并两种情形
        case 20:
        alert("10 or 20");
        break;
        case 30:
        alert ("30");
        break;
        default:
        alert ("Other");
    }

### 声明变量

使用var声明的变量会自动被添加到最接近的环境中,在函数内最接近的环境就是函数的局部环境,在with语句中,最接近的环境是函数环境.如果初始化变量时没有使用var声明,该变量会直接被添加到全局环境中.

JavaScript变量可以用来保存两种类型的值:基本类型值和引用类型值.基本类型值源自以下5种基本数据类型:Undefined、Null、Number、Boolean和String.

基本类型值和引用类型值具有以下特点:

* 基本类型值在内存中占据固定大小的空间,因此被保存在栈内存中;
* 从一个变量向另一个变量复制基本类型的值,会创建这个值的一个副本;
* 引用类型的值是对象,保存在堆内存中;
* 包含引用类型值的变量实际上包含的并不是对象本身,而是一个指向该对象的指针;
* 复制引用类型值的变量,复制的其实是指针,因此两个变量最终指向同一个对象;
* 确定一个值是哪种基本类型可以使用typeof操作符,确定是哪种引用类型可以使用instanceOf操作符.

### 引用类型数据

#### Object

object:创建Object实例的方式有两种:

1. 使用new操作符后跟Object构造函数:
    var person = new Object();
    person.name = "Nicholas";
    person.age = 25;

1. 使用对象字面量表示法:
    var person = {
        name : "Nicholas"',
        age　:　25
    }

访问对象属性时,可以通过点表示法或者方括号表示法,这两种方法没有区别:
    //在使用方括号语法时,应该将要访问的属性(**字符串**)放在方括号中
    alert(person["name"]);
    alert(person.name);
但方括号语法的主要优点是可以通过变量来访问属性:
    var propertyName = "name";
    alert(person[propertyName]);

如果属性命中包含会导致语法错误的字符,或者属性名使用的是关键字或保留字,也可以使用方括号表示法
    person["first name"] = "Nicholas";

所有对象都具有toLocaleString()、toString()和valueOf()方法.

属性增删(delete)改查

**类数组**特殊对象

1. 属性要为索引(数字)属性,必须有length属性,最好加上push
1. 具有数组和对象的特性

var obj = {
    '0' : 'a',
    '1' : 'b',
    '2' : 'c',
    name : 'abc',
    age : '123',
    length : '3',
    push : Array.prototype.push,
    splice : Array.prototype.splice
}
push方法的原理:
    Array.prototype.push = function (){
        for(var i=0;i<arguments.length;i++){
            this[this.length] = arguments[i];
            this.length ++;
        }
    }

#### Array

创建Array有两种方法,构造函数法和字面量表示法:
    var colors1 = new Array();
    var colors2 = Array();
    var colors3 = ["blue","red",3,"green"];

ECMAScript5新增的Array.isArray()方法可以确定某个值到底是不是数组,而不管它是哪个全局环境创建的.
expression:
        if (Array.isArray(value)){
                //对数组执行的操作
        }

Array调用valueOf()返回的是Array,调用toString()返回的是Array中每个值的字符串拼接而成的一个以逗号分隔的字符串.调用toString()或者toLocaleString()其实是调用数组每一项的toString()或者toLocaleString().

push()从数组的末尾位置添加任意个项并返回新数组长度.
pop()移除数组的最后一项并返回该项.
unshift()在数组首位置添加任意个项并返回新数组长度.
shift()移除数组中的第一项并返回该项.

concat()连接数组,返回新数组副本
split()将字符串分割成数组
join()数组每项用符号连接成的一个字符串
slice()返回数组切片
splice(start,amount,newdata)替换项,返回删除项组成的数组
reverse()反转原来的数组,返回该数组,但不会创建新的数组
sort()可以接收一个比较函数,返回操作后的数组
sort(function(a,b){return a-b;}),返回值为负数或0时,位置不变;为正数,后面的数在前

indexOf(),lastIndexOf()都可以接收两个参数,第一个是检索项,第二个是起点位置的索引,最后都返回查找项所在的位置索引.

join(),Array继承的toLocaleString()、toString()、valueOf(),在默认情况下是以逗号分隔.而使用join(),则可以使用不同的分隔符来构建这个字符串.join()只接收一个参数,即用作分隔符的字符串,然后返回包含所有数组项的字符串.

instance:
    var colors = ["red","blue","green"];
    console.log(colors.join("||"));  //red||blue||green
    console.log(typeof colors.join("||"));  //string

*栈方法*
栈是一种LIFO(Last-In-First-Out,后进先出)的数据结构,也就是最新添加的项最早被移除.而栈中项的插入(推入)和移除(弹出),只发生在一个位置--栈的顶部.Array中的push()和pop()实现了类似栈的行为.
*队方法*
队是一种FIFO(First-In-First-Out,后进后出)的数据结构,也就是最后添加的数据走后

*concat() array连接*
concat()用于连接两个或多个数组,它不会改变现有的数组,而仅仅会返回被连接数组的一个副本.

*split() 字符转换为数组*
        stringObject.split(spearator(分隔的符号),howmany(获取的长度));
        var texts = "ab-c-d-ef";
        console.log(texts.split("-",2));//["ab","c"]

slice(start,end)

*splice() 替换*
splice(a,b,c...) a要删除第一项位置,b删除的数量,b之后为插入的项
splice()返回一个数组,数组由删除项组成,没有删除数时返回空数组
splice(a,b)删除,splice(a,0,c...)插入,splice(a,b,c)替换

indexOf(),lastIndexOf()

#### Function

在函数内部具有两个特殊对象:arguments和this.

1. **函数的名字仅仅是一个包含指针的变量而已**

1. arguments是一个类数组对象,包含着传入函数的所有参数.这个对象有一个叫callee的属性,callee是个指针,指向拥有这个arguments对象的函数.

1. this与Java和C#中的this类似.在调用函数前,this的值并不确定, this引用的是函数执行的环境对象.(this指包含它的函数作为方法被调用时所属的对象)

1. ECMAScript5规范化了函数对象的属性:caller.这个属性中保存着调用当前函数的函数引用.

1. length属性表示函数希望接收的命名参数的个数.

1. prototype对于ECNAScript中的引用类型而言,是保存它们所有实例方法的真正所在.

call()和apply() 改变this指向(借用别人的函数实现自己的功能)
function Person(name,age,sex){
this.name = name;
this.age = age;
this.sex = sex;
}
function Student(name,age,sex,tel,grade){
Person.call(this,name,age,sex);
this.tel;
this.grade;
}
var student = new Student('sunny',123,'male',139,2017);

#### String对象包装类

charAt()、charCodeAt()这两个方法都是接收一个参数(基于0的字符位置),返回给定位置那个字符(后者是字符编码)
ECMAScript5还定义了另一个访问个别字符的方法.可以使用方括号加数字索引来访问字符串中的特定字符.
    var stringValue = "hello world";
    console.log(stringValue[1]);//e

concat() 用于将一或多个字符串拼接起来,返回拼接得到的新字符串.

基于字符串创建新的字符串:slice()、substr()、substring()
    var svalue = "hello world";
    alert(svalue. slice(3)); // "lo world"
    alert(svalue. substr(3)); // "lo world"
    alert(svalue. substring(3)); // "lo world"
    alert(svalue. slice(3,7)); // "lo w"
    alert(svalue. substring(3,7)); // "lo w"
    alert(svalue. substr(3,7)); // "lo worl"
slice()和substring()中的第二个参数指定的是字符串最后一个字符后面的位置.而subtr()的第二个参数指定的是返回的字符串个数.

查找字符串:indexOf()、lastIndexOf()返回匹配字符串位置索引,未匹配返回-1.

trim() 创建一个字符串的副本,删除前置及后缀的所有空格,然后返回结果.

toLowerCase() 把字符串转换为小写
toUpperCase() 把字符串转换为大写
toLocaleLowerCase()//针对特定地区的实现
toLocaleUpperCase()

charAt()返回指定位置的字符
charCodeAt()返回指定位置的字符的Unicode编码 //fromCharCode() 从字符编码创建一个字符串
slice() 返回字符串切片,支持负值
substring() 提取字符串中两个指定的索引号之间的字符
substr() 返回字符串切片,第二参数表示个数
split() 把字符串分割为数组 plit(spearator分隔的符号,howmany获取的长度)

只接受一个参数,要么是一个正则表达式,要么是一个RegExp对象
match() 返回匹配的字符串 || search() 返回匹配字符串的索引值

replace() 替换与正则表达式匹配的字符串

#### Date

var date = new Date();//声明一个新的日期函数
getTime(),valueOf()  返回1970年1月1日至今的毫秒数
Date.now() 返回当前事件(同上)
getMilliseconds() 返回Date对象的毫秒数(0~999)
getSeconds() 返回Date对象的秒数(0~59)
getMinutes() 返回Date对象的分钟数(0~59)
getHours() 返回Date对象的小时数(0~23)
getDate() 获取日 1-31
getDaty() 获取星期 0-6
getMonth() 获取月 0-11
getFullYear() 获取四位数字年份
Date.parse() 接收一个表示日期的字符串参数,然后尝试根据这个字符串返回相应的毫秒数
Date.UTC() 同样返回表示日期的毫秒数

toDateString() 以特定于实现的格式显示星期年月日 //Sat Oct 07 2017
toTimeString() 以特定于实现的格式显示时分秒和时区 //23:25:36 GMT+0800(中国标准事件)
toLocaleDateString() 以特定于地区的格式显示星期年月日 //2017/10/7
toLocaleTimeString() 以特定于实现的格式显示时分秒 //下午11:28:09
toUTCString 以特定于实现的格式完整的UTC日期 //Sat , 07 Oct 2017 15:31:08 GMT

setInterval() 间歇调用 排队执行
setTimeout() 超时调用 只执行一次
clearTimeout() 取消超时调用
<!-- 需要传参时 -->
function hui(str){
    alert(str);
}
setInterval(hui,3000,"你好");//只有这样写才正确
如果改成:setInterval("hui",3000,"你好")//不起作用
如果改成:setInterval("hui()",3000,"你好")//起作用,弹出undefined

#### Math

E 返回算术常量e,及自然对数的底数
LN2 返回2的自然对数
LN10 返回10的自然对数
LOG2E 返回以2为底的e的对数
LOG10E 返回以10为底的e的对数
PI 返回圆周率
SQRT1_2 返回2的平方根的倒数
SQRT2 返回2的平方根

abs(x) 返回数的绝对值
acos(x) 返回数的反余弦值
asin(x) 返回数的反正弦值
cos(x) 返回数的余弦值
sin(x) 返回数的正弦值
tan(x) 返回角的正切值
exp(x) 返回e的指数
log(x) 返回数的自然对数(底为e)

ceil(x) 对数进行上舍入
floor(x) 对数行进下舍入
round(x) 把数四舍五入为最接近的整数
random() 返回0~1中的随机数
valueOf() 返回Math对象的原始值
max(x,y) 返回x和y中的最大值
min(x,y) 返回x和y中的最小值
pow(x,y) 返回x的y次幂
sqrt(x) 返回数的平方根
toSource() 返回该对象的源代码

#### RegExp

与其他语言中使用的正则表达式类似,模式中使用的所有**元字符**都必须转义. 转义符\
正则表达式中的元字符包括: ([{\^$|)?*+.]}

\r 行结束  \n 换行  \t 制表符

RegExp 接收两个参数:一个是要匹配的字符串模式,另一个是可选的标志字符串.

匹配第一个“bat"或“cat”,不区分大小写:

1. 表达式: var pattern1 = /\[bat\]cat/i;
1. 构造函数:var pattern2 = new RegExp("[bar]cat","i")

**RegExp实例属性**
global:布尔值,表示是否设置了g标志;
ignoreCase:布尔值,表示是否设置了i标志;
lastIndex:整数,表示开始搜索下一个匹配项的字符位置,从0算起;
multiline:布尔值,表示是否设置了m标志;
source:正则表达式的字符串表示,按照字面量形式而非传入构造函数中的字符串模式返回.

在同一作用域中,同样的RegExp实例,在表达式中,只创建一次(实例属性不会重置),而使用构造函数,则会再次创建新的实例(实例属性会重置).

exec() 接受一个 要应用模式的字符串,返回**包含第一个匹配项**信息的数组,在没有匹配时返回null.返回的虽然是Array的实例,但包含两个属性:index和input.(匹配项在字符串中的位置,表示应用正则表达式的字符串)
text() 接受一个字符串参数,返回的是,模式与该参数的匹配情况的布尔值.
match(pattern) 返回pattern中的字符串或null
replace(pattern,replacement) 用replacement替换pattern
search(pattern) 返回字符串中pattern开始位置
split(pattern) 返回字符串按指定pattern拆分的数组

Regexp的字符 略

### 原型(prototype)

1. 定义:原型是Function的一个属性,它定义了构造函数制造出的对象的公共祖先.通过该构造函数产生的对象,可以继承原型的属性和方法.原型也是对象.
1. 利用原型特点和概念,可以提取共有属性.
1. 对象如何查看原型 --> 隐式属性 __proto__
1. 对象如何查看对象的构造函数 -> constructor

__proto__ 指向prototype;
函数拥有prototype,对象则通过.__proto__访问prototype,两者都是指针.prototype === __proto__

prototype对于ECNAScript中的引用类型而言,是保存它们所有实例方法的真正所在.for-in也会遍历prototype上的自设属性,因此有时需要hasOwnProperty()过滤.
绝大多数对象的最终都会继承自:Object.prototype(Objet.create(null)构建的对象除外)
Object.create(原型Object或null);创建对象
原型对象上的属性的操作:
增 Obj.prototype.name = "XX";
删 delete Obj.prototype.name;

调用已有功能为己用(借用构造函数)
    function Person(name,age,sex){
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    function Student(name,age,sex,tel,grade){
        Person.call(this,name,age,sex);//调用Person的功能
        this.tel = tel;
        this.grade = grade;
    }
    var student = new Student('sunny',123,'male',139,3);

*for in*
    for(var prop in obj){
        //遍历拥有的属性(obj[prop])
    }

1. hasOwnProperty(prop)函数用于指示一个对象自身(不包括原型链)是否具有指定名称的属性.如果有,返回true,否则返回false.
1. in
1. instanceof

'prop' in obj   判断属性是否在obj上(原型上的自设属性也参与判断)
使用hasOwnProperty()方法可以识别 是自身属性还是原型上的自设属性(原型上的默认属性忽略)
    function Animal(name){
        this.name = name;
    }
    Animal.prototype.type = "哺乳动物";
    Animal.prototype.home = "草原";
    var lion = new Animal("狮子");
    lion.eag = 2;
    lion.eat = function(){
        console.log("吃小动物");
    }
    for(var p in lion){
        if(lion.hasOwnProperty(p)){
            console.log(p); //name eag eat
        }
    }

A instanceof B 判断A对象的原型链上有没有B的原型

判断A的数据类型: A instanceof B --> A.constructor --> Object.prototype.toString.call(A)

*继承--圣杯模式*
    function inherit(Target,Origin){
        function F(){};
        F.prototype = Origin.prototype;
        Target.prototype = new F();
        Target.prototype.constructor = Target;
        Target.prototype.uber = Origin.prototype;
    }

条件判断? 是:否 并且会返回值;

 try{

     //当try中的代码报错时,不抛出error,不会执行错误后的try里面的代码
 }catch(e){//error.message,error.name
     //捕捉到错误时,才执行
 }
 try{}catch(e){}finally{}
 Error.name的六种值对应的信息:
1. EvalError: eval()的使用与定义不一致
1. RangeError: 数值越界
1. ReferenceError: 非法或不能识别的引用数值
1. SyntaxError: 发生语法解析错误
1. TypeError: 操作数类型错误
1. URIError: URI处理函数使用不当

**严格模式**
启动es5.0标准模式,那么es3.0和es5.0产生冲突的部分就是使用es5.0解决,否则使用es3.0
"use strict";//分为全局严格模式和局部函数内严格模式(推荐)

不允许使用:
with();
arguments.callee,fun.caller;
变量赋值前必须声明;
局部this必须被赋值,obj.call(null/undefined),赋什么就是什么
在严格模式中，this不被允许指向全局，如果运行时试图指向全局，this将会变为undefined
拒绝重复的属性和参数;

eval('');//把字符串当作代码使用,es5.0可以使用,es3.0不能使用

函数必须声明在整个脚本或函数层面
常规模式下，在语句块中声明函数会使得程序的结果不可预料，也会使可读性变得很糟糕

## DOM-->Document Object Model

Dom定义表示和修改文档所需的方法.Dom对象即为宿主对象,由浏览器厂商定义,用来操作html和xml功能的一类对象的集合.也有人称Dom是对html以及xml的标准编程接口.
document代表整个文档

### 访问关系

getElementsByTagName('lable');  //获取相同的元素节点
getElementsByClassName();  //获取相同class的元素节点,可以多个,ie8及以下没有
getElementsByName();  //获取相同name的元素节点(需注意,只有部分标签可生效表单、img、iframe)
getElementById('id');  //获取特定id的元素节点

.querySelector('div > span strong')//可以像css选择器使用(实时性不好,就像照片与本人,静态)
.querySelectorAll()//生成类数组

**节点树的遍历**
节点具四个属性:nodeName、nodeType、nodeValue(只有text节点或comment节点可读写)、attributes(属性节点的集合)
每个节点都有一个方法 node.hasChildNodes;//有没有子节点
父节点
parentNode获取当前节点的父节点
兄弟节点
nextSibling 后一个兄弟节点  IE678认识
nextElementSibling 下一个同胞兄弟节点  其他浏览器认识的
previousSibling 前一个节点  IE678认识
previousElementSibling 上一个同胞兄弟节点  其他浏览器认识的
孩子节点
childNodes 获取所有的子节点(嫡系) 使用 nodetype == 1 获取元素节点(2属性节点,3文本节点)
firstChild 第一个子节点   IE678
firstElementChild 第一个子元素节点   其他浏览器认识的
lastChild 最后一个子节点   IE678
lastElementChild 最后一个子元素节点   其他浏览器认识的
空格换行也是节点(文本节点,nodeType为3)

元素节点 1
属性节点 2
文本节点 3
注释节点 8
document 9
DocumentFragment 11

**基于元素结点树的遍历**
(除了children,其他的属性IE9之前都不兼容)
parentElement() 返回当前元素节点的父元素节点(IE9之前不兼容)
children 只返回当前元素的元素子节点,类数组
//childElementCount ===children.length 当前子元素的个数
firstElementChild  lastElementChild(IE9之前不兼容)
previousElementSibling  nextElementSibling(IE9之前不兼容)

**增**
document.createElement() 创建元素节点
document.createTextNode() 创建文本节点
document.createComment() 创建注释节点
document.createDocumentFragment() 创建文档碎片节点
**插**
parentNode.appendChild() 插入子节点(加入位置是父节点最后面,属于剪切操作)
parentNode.insertBefore(插入的节点,参照的节点) 将新节点插入在参照节点之前,若参展节点为null默认放在最后面
**删**
他杀 parentNode.removeChild() 移除节点,返回删除项(将对象剪切出来)
自杀 child.remove() 直接销毁,没有返回对象
**替换**
replaceChild(new,origin) (新节点,要替换的节点)

cloneNode() 克隆节点 可以带参数,参数为true深层复制(子节点也复制),参数为false浅层复制(只复制本身)

**Element的一些属性**
innerHTML 取元素里面的HTML内容
innerText 取元素里面的文本内容(火狐不兼容,textContent,但老版本IE没有)

getAttribute();  //获取元素节点的某个属性
setAttribute();  //设置元素节点的某个属性
removeAttribute();  移除属性

## DOM基本操作

**查看滚动条的滚动距离**
window.pagXOffset/pageYOffset(IE9以下不兼容)
document.body.scrollLeft/top document.documentElement.scrollLeft/Top(兼容性比较混乱,用时取两个值相加,因为不可能存在两个同时有值)

//查看一个元素的几何尺寸
domEle.getBoundingClientRect();//返回一个对象,里面有left,top,right,bottom,width,height.left和top代表元素左上角的x和y坐标,right和bottom代表右下角.返回结果不是"实时的".

**查看元素的尺寸**
domEle.offsetWidth,domEle.offsetHeight(视觉上的尺寸:包括元素的border、padding及内容)

**查看元素位置**
domEle.offsetLeft,domEle.offsetTop(求的是与有定位的父级或页面的距离,不是直接相对于页面的位置)
domEle.offsetParent 返回最近的有定位的父级,若无,返回body,body.offsetParent返回null.

**让滚动条滚动**
window上有三个方法:
scroll(x,y),scrollTo(x,y)//距离,坐标
scrollBy(x,y)//累加滚动

**脚本化CSS**操控css

1. domEle.style.prop //(获取的是写在行内的属性)可读写行间样式,没有兼容性问题,碰到float这样的保留字属性,前面应加css:float -> cssFloat
1. 复合属性必须(建议)拆解,组合单词变成小驼峰式写法
1. 写入的值必须是字符串格式

**查询计算样式:获取一个元素的显示样式**
window.getComputedStyle(ele,null) //第二个参数可以写伪元素("after"),此方法Ie8及Ie8以下不兼容
兼容写法:

    function getStyle(obj,attr){
        if(window.getComputedStyle){
		
            return window.getComputedStyle(obj,false)[attr];
            }eles{
            return obj.currentStyle[attr];
        }
    }
    //在IE下，如果没有声明某个属性值，用该函数来获取时，会出一些意想不到的事情.

改变元素的样式,改变前后相当于不同的状态,可以在css中提前写好样式,在js中通过更改className改变元素状态,进而改变样式

## 事件

**绑定事件处理程序**绑定函数

1. elem.onXXXX = function (event){}
 兼容性很好,但是一个元素的同一个事件上只能绑定一个处理函数;基本等同于写在HTML行间上
1. elem.addEventListener(type,fn,false);
 IE9以下不兼容,可以为一个事件绑定多个处理程序
1. elem.attachEvent('on'+type,fn);
 IE独有,一个事件可以绑定多个处理程序

**事件处理函数的运行环境**主要是this指向

1. elem.onXXX = function (event){} 程序this指向是dom元素本身
1. elem.addEventListener(type,fn,false); 程序this指向是dom元素本身
1. elem.attachEvent('on'+type,fn); 程序this指向window

**解除事件处理程序**
若绑定的匿名函数,注定无法解除

1. elem.onXXX = false || '' ||null;
1. elem.removeEventListener(type,fn,false);//W3C标准
1. elem.detachEvent('on'+type,fn);//IE9以下

**事件处理模型**--事件冒泡、捕获

事件冒泡:结构上(非视觉上)嵌套关系的元素,会存在事件冒泡的功能,即同一事件,自子元素冒泡向父元素.(自底向上)
事件捕获:结构上(非视觉上)嵌套关系的元素,会存在事件捕获的功能,即同一事件,自父元素捕获至子元素(事件源元素).(自顶向下)
IE没有捕获事件
触发顺序,先捕获,再目标,后冒泡
focus,blur,change,submit,reset,select等事件不冒泡

**取消冒泡**
W3C标准 event.stopPropagation();但不支持IE9以下版本
IE独有 event.cancelBubble = true;
**阻止默认事件**
默认事件--表单提交,a标签跳转,右键菜单等
1.return false; 以对象属性的方式注册的事件才生效(以句柄的方式绑定的事件)
2.event.preventDefault(); W3C标准,IE9以下不兼容
3.event.returnValue = false; 兼容IE

a src="javascript:void(false)" void(false) 相当于 return false;

事件对象:当事件发生时会产生事件对象,记录了事件发生时的一些相关信息.
event || window.event用于IE

事件源:在事件中,当前操作的那个元素就是事件源.
event.target 火狐只有这个
event.srcElement IE只有这个
这两个chrome都有
兼容写法:var target = event.target || event.srcElement;

**事件委托**
利用事件冒泡和事件源进行处理.优点:
1.性能 不需要循环所有的元素一个个绑定事件;
2.灵活 当有新的子元素时不需要重新绑定事件

IE上有一个特殊的事件捕获,even.setCapture(),释放even.releaseCapture(),仅IE有,不太常用(用完时要赶快释放)

### 鼠标经过时选择

    <input type="text" id=“sele">
    sele.onmouseover = function(){
        this.select();  //选择
    }

    sele.focus();//自动获取焦点

    <lable id="message" for="sele">点击我,sele获取光标光标</lable>
    //j检测用表单户输入:oninput
    sele.oninput = sele.onpropertychangc = function(){//IE678低版本不识别oninput,用onpropertychangc
        if(this.value == ""){
             message.style.diplay = "block";
        }else{
            message.style.diplay = "none";
        }
    }

ondblClick:双击
onchange:前后状态发生变化时触发(下拉菜单值改变)
onfocus:获取焦点
oninput:用户输入
onblur:事件会在对象失去焦点时发生

oncontextmenu:右键菜单
onmousedown:鼠标按下事件,即鼠标左或右键被按下;
onmouseup:鼠标抬起事件,即鼠标不管在哪里被按下,但是只要在这个元素上被抬起;
onclick:鼠标完成一次点击,即鼠标左键按下、抬起之后;
onmousemove:鼠标移动事件,即鼠标在这个元素上移动;
onmouseover:鼠标移入事件(后又移入子元素上再次触发,事件冒泡),即鼠标从其它位置移到到该元素上;
onmouseout:鼠标移出事件,即鼠标从该元素上离开;
onmouseenter:鼠标移动到元素上时触发(类似于onmouseover事件,不支持冒泡)
onmouseleave:鼠标移出元素时触发(类似于onmouseout事件,不支持冒泡)

onchange onpropertychange和oninput事件的区别
onchang事件在内容改变(两次内容有可能还是相等的)且失去焦点时触发;
onpropertychange事件却是实时触发,即每增加或删除一个字符就会触发,通过js改变也会触发该事件,但是该事件是IE专有;
oninput事件是IE之外的大多数浏览器支持的事件,在value改变时触发,实时的,即每增加或删除一个字符就会触发,然而通过js改变value时,却不会触发;

onpropertychange 事件是任何属性改变都会触发的，而 oninput 却只在 value 改变时触发，oninput 要通过 addEventListener() 来注册，onpropertychange 注册方式跟一般事件一样。（此处都是指在js中动态绑定事件，以实现内容与行为分离）;

oninput 与 onpropertychange 失效的情况：
（1）oninput 事件：a). 当脚本中改变 value 时，不会触发；b).从浏览器的自动下拉提示中选取时，不会触发。
（2）onpropertychange 事件：当 input 设置为 disable=tru e后，onpropertychange 不会触发。

移动端:
touchstart:
touchmove:
touchend:

用even.button来区分鼠标的按键,0/1/2
DOM3标准规定:click事件只能监听左键,只能通过mousedown和mouseup来判断鼠标键

onkeydown:某个键盘按键被按下
onkeypress:某个键盘按键被按下并松开(一直触发)
onkeyup:某个键盘按键被松开
出发顺序:keydown -> keypress -> keyup
keydown可以检测到所有键
keypress只能检测到字符按键,返回ASCII,可以转换成相应字符

窗体操作类事件()
window.onscroll:当滚动条滚动时触发
window.onload:页面加载结束后触发

### Json(静态类)

JSON是一种传输数据的格式(以对象为样板,本质上就是对象,但用途有区别,对象就是本地用的,json是用来传输的)
json中属性名必须加双引号
JSON.parse();  string -> json
JSON.stringify();  json -> string

首先检索HTML代码,生成domTree(深度优先原则-->一条道走到黑);然后解析css代码,生成cssTree;
DOMTree + cssTree = randerTree
randerTree生成后才开始渲染页面

### 异步加载JS

js加载的缺点:加载工具方法没必要阻塞文档,过多js加载会影响页面效率,一旦网速不好,那么整个网站将等待js加载而不进行后续渲染等工作.有些工具方法需要按需加载,用到再加载,不用不加载.

javascript异步加载的三种方案:
1.defer 异步加载,但要等到dom文档全部解析完才会被执行.只有IE能用,也可以将代码写到内部(IE9以下可以用)
2.async 异步加载,加载完就执行,async只能加载外部脚本,不能把js写在script标签里(W3C标准)
1、2执行时也不阻塞页面
3.创建script标签,插入到DOM中,加载完毕后callBack,

onload
onreadystatechange

JS加载时间线

1. 创建Document对象,开始解析web页面.解析HTML元素和它们的文本内容后添加Element对象和Text节点到文档中.这个阶段document.readyState = "loading".
1. 遇到link外部css,创建进程加载,并继续解析文档.
1. 遇到script外部js,并且没有设置asyns、defer,浏览器加载,并阻塞,等待js加载完成并执行该脚本,然后继续解析文档.
1. 遇到script外部js,并且有设置asyns、defer,浏览器创建进程加载,并继续解析文档.对于async属性的脚本,脚本加载完成后立即执行.(异步禁止使用document.write())
1. 遇到img等,先正常解析dom结构,然后浏览器异步加载src,并继续解析文档.
1. 当文档解析完成(domTree建立),document.readyState = "interactive".
1. 文档解析完成后,所有设置有defer的脚本会按照顺序执行.(注意与async的不同,但同样禁止使用document.write()).
1. document对象触发DOMContentLoaded事件(只能使用ele.addEventListener),这也标志着程序执行从同步脚本执行阶段,转化为事件驱动阶段.
1. 当所有async的脚本加载完成并执行后、img等加载完成后,document.readyState = "complete".
1. 从此,以异步响应方式处理用户输入、网络事件等.

$(document).ready(function (){});//当dom解析完就执行
window.onload //等到所有东西加载完才执行

**效率**
reflow 重构(dom节点的增删改,offsetWidth、offsetLeft,display none->block)
repaint 重绘(改变css的一部分)

### Ajax

Ajax技术的核心是XMLHttpRequest对象(简称XHR)，可以通过使用XHR对象获取到服务器的数据，然后再通过DOM将数据插入到页面中呈现.
XMLHttpRequest对象用于在后台与服务器交换数据，具体作用如下：

1. 在不重新加载页面的情况下更新网页
1. 在页面已加载后从服务器请求数据
1. 在页面已加载后从服务器接收数据
1. 在后台向服务器发送数据

## BOM

定义:Browser Object Model,定义了操作浏览器的接口

BOM对象:Window、History、Navigator、Screen、Location等
由于浏览器厂商的不同,BOM对象的兼容性极低.一般情况下,只用其中的部分功能.

Location对象
Location.hash
"#"后是对浏览器操作的,对服务器无效,实际发出的请求也不包含"#"后面的部分
"#"被算作历史记录

document.forms[0].onsubmit=function(e){
        var name=this.name.value;
        var pwd=this.pwd.value;

        //声明对象
        var xhr=new XMLHttpRequest();
        // get请求
        xhr.open('get','/login?name='+name+'&pwd='+pwd);
        xhr.send();
        //post 请求
        /*xhr.open('post','/login',true); // 方式  请求地址  http://192.168.1.100:3000/login
        xhr.setRequestHeader('Content-Type','application/x-www-from-urlencoded');
        xhr.send('name='+name+'&pwd='+pwd);*/

        xhr.onreadystatechange=function(){
            if(xhr.readyState==4){
                if(xhr.status==200){
                    alert(xhr.responseText);
                }
            }
        }

        e.preventDefault();
    }

### 存储

localStorage
localStorage.setItem('name':'value');  //设置项及值
localStorage.getItem('name');   //获取name的值

sessionStorage
cookies
var userName = getCookie('userName');   //获取,setCookie设置
    function setCookie(c_name,value,expiredays){
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + expiredays);
        document.cookie = c_name + "=" + escape(value) +
        ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString())
    }
	
	
	
iframe父页面跳转
window.parent.location.reload();刷新
window.parent.location.href = 'http://www.xx.com';跳转
window.parent.frames[1].location.href = 'http://www.xx.com';跳转
window.parent.frames["name"].location.href = 'http://www.xx.com';父子页面跳转

~是js里的按位取反操作符
逗号运算符，它将先计算左边的参数，再计算右边的参数值。然后返回最右边参数的值。逗号运算符在JavaScript在的优先级是最低的,在JavaScript中，逗号运算符的优先级比赋值运算符还要底。
逗号运算符的作用是将若干表达式连接起来。它的优先级别在所有运算符中是最低的，结合方向是"自左至右"的.
每次通过循环的末端时， for 语句只允许单个表达式被执行。, 运算符被用来允许多个表达式被当作单个表达式，从而规避该限制。


location.href是最常用的属性,用于获得或设置窗口的URL，类似于document.url属性。但是采用此方法跳转会被加入到浏览器的历史栈中，这意味着可以通过后退键来撤退。如果用户为了提高安全级别可以采用location.replace(),这种方法不会有历史记录，也不会被后退.
locaton.reload()方法重新加载本页面，他有两个参数，false和true，默认是false，在浏览器的缓存中获取重新加载，如果想从服务器中获取，可以将参数改为true。(location.reload(url);)

keydown return true up事件不会触发,return false则继续

实时监测input输入变化(jquery)
$('#elem').on('input propertychange',function(){console.log('哒.哒.哒..);})

//Array Remove - By John Resig (MIT Licensed)//掐头去尾然后拼接
Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};

window.getSelection();选中项

// val = val.replace(/\n/g,'_j_k');
// arr = val.split('_j_k');
根据回车换行拆分

多个逗号语句,都会执行,并且返回最后一个结果
逗号表达式的一般形式是：表达式1，表达式2，表达式3……表达式n
逗号表达式的求解过程是：先计算表达式1的值，再计算表达式2的值，……一直计算到表达式n的值。最后整个逗号表达式的值是表达式n的值。

encodeURI() 编码(; / ? : @ & = + $ , # '不进行编码) 对整个URL进行编码
decodeURI() 解码

encodeURIComponent() 编码 它用于对URL的组成部分 进行个别编码，而不用于对整个URL进行编码
decodeURIComponent() 解码