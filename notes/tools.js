// 判断数据类型，可以区分基础类型数据与包装类数据
function txtType(data){
    if(data===null){
        return 'null';
    }
    var dType = typeof data,rTxt = '',
    objArr = {
        '[object Aarray]': 'Array-object',
        '[object object]': 'Object-object',
        '[object Number]': 'Number-object',
        '[object String]': 'String-object',
        '[object Boolean]': 'Boolean-object'
    };
    if(dType == 'object'){
        rTxt = objArr[Object.prototype.toString.call(data)];
    }else{
        rTxt = dType
    }
    return rTxt;
}

// 数据深度克隆,在js中引用类型数据的赋值和调用，使用的都是堆内存中的数据的位置指针；
// 1 只能复制符合JSON数据格式要求的数据
let copy = JSON.parse(JSON.stringify(target));
// 2
function dataClone(data,cloneObj){
    if(!data){return 'The data is empty'}
    //数据比较多就传入cloneObj，使用外部对象，避免形成闭包
    var rObj = cloneObj||{},
    dType  = typeof data;
    if(dType == 'object'){
        for(var p in data){
            //消除原型链上的干扰数据，确保只复制data上的属性
            if(!data.hasOwnProperty(p)){continue;}
            rObj[p] = arguments.callee(data[p]);
        }
    }else if(dType == 'function'){
        rObj = new Function('return '+data.toString())();
    }else{
        rObj = data;
    }
    return rObj;
}
// 克隆多种格式数据
let specialObj = {
	'[object Date]': date => new Date(date),
	'[object Set]': setData => new Set(setData),
	'[object Map]': mapData => new Map(mapData),
	'[object Function]': func => func,
	'[object Symbol]': symData => symData
}
let target = {
	a: new Date(),
	b: { b1: new Set([1, 3, 5]), b2: new Map(Object.entries({b21: 123, b22: 234}))},
	c: Symbol('csymbol'),
	d: () => { console.log('func from d')}
}	
let copy = {}
function copyProperty (val, key, result) {
	if (['function', 'object'].includes(typeof val)) {
		result[key] = {}
		let objType = Object.prototype.toString.call(val)
		if (specialObj[objType]) {
			result[key] = specialObj[objType](val)
		}
		Object.keys(val).forEach(childKey => {
			copyProperty(val[childKey], childKey, result[key])
		})
	} else if (Array.isArray(val)) {
		result[key] = []
		val.forEach((item, index) => {
			copyProperty(item, index, result[key])
		})
	} else {
		result[key] = val
	}
}
Object.keys(target).forEach(prop => {
	copyProperty(target[prop], prop, copy)
})
console.log('result is : ', copy) // 得到需要的结果

//获取窗口滚动条滚动距离
function getScrollOffset(){
    if(window.pageXOffset){
        return {
            x : window.pageXOffset,
            y : window.pageYOffset
        }
    }else{
        return {
            x : document.body.scrollLeft + document.documentElement.scrollLeft,
            y : document.body.scrollTop + document.documentElement.scrollTop
        }
    }

}

//可视区窗口的尺寸
function getViewportOffset(){
    if(window.innerWidth){
        return {
            w : window.innerWidth,
            h : window.innerHeight
        }
    }else{
        if(document.compatMode === "BackCompat"){
            return {
                w : document.body.clientWidth,
                h : document.body.clientHeight
            }
        }else{
            return {
                w : document.documentElement.clientWidth,
                h : document.documentElement.clientHeight
            }
        }
    }
}

// 求元素相对于文档的坐标
function getElementPosition(obj){
    var x = 0,y = 0;
    do{
        x += obj.offsetLeft;
        y += obj.offsetTop;
        obj = obj.offsetParent;
    }while(obj !== document.body)
    return {
        x : x,
        y : y
    }     
}

// 获取显示样式数据
function getStyle(elem,prop){
    if(window.getComputedStyle){
        return window.getComputedStyle(elem,null)[prop];
    }else{
        return elem.currentStyle[prop];
    }
}

// 给一个dom对象添加该类型的处理函数
function addEvent(elem,type,handle){
    if(elem.addEventListener){
        elem.addEventListener(type,handle,false);
    }else if(elem.attachEvent){
        elem[type+handle] = function (){
            handle.call(elem);
        }
        elem.attachEvent('on' + type,elem[type + handle]);
    }else{
        elem['on' + type] = handle;
    }
}

// 解除绑定事件
function removeEvent(elem,type,handle){
    if(elem.removeEventListener){
        elem.removeEventListener(type,handle,false)
    }else if(elem.detachEvent){
        elem.detachEvent('on' + type,elem[type + handle])
    }else{
        elem['on' + type] = false;
    }
}

// 取消冒泡
function stopBubble(event){
    var event = event || window.event;
    if(event.stopPropagation){
        event.stopPropagation();
    }else{
        event.cancelBubble = true;
    }
}

// 阻止默认事件
function cancelHandler(event){
    var event = event || window.event;
    if(event.preventDefault){
        event.preventDefault();
    }else{
        eevent.returnValue = false;
    }
}

// 拖拽
function drag(elem){
   addEvent(elem,'mousedown',eleCli);
   function eleCli(e){
       var target = e.target || e.srcElement;
       var disX = e.pageX - getElementPosition(elem).x,
       disY = e.pageY - getElementPosition(elem).y;
       addEvent(document,'mousemove',move);
       function move(e){
           elem.style.left = e.pageX - disX + "px";
           elem.style.top = e.pageY - disY + "px";
       }
       addEvent(target,'mouseup',function mouseUP(e){
           document.removeEventListener('mousemove',move,false);
           target.removeEventListener('mouseup',mouseUP,false);
       });
        
   }
}

// 查找/添加/删除 指定元素的class
function hasClass(elements, cName) {
    return !!elements.className.match(new RegExp("(\\s|^)" + cName + "(\\s|$)"));
    // (\\s|^)(\\s|$)判断前后是否有空格  两个感叹号为转换为布尔值 以方便做判断 
};
function addClass(elements, cName) {
    if (!hasClass(elements, cName)) {
        elements.className += " " + cName;
    };
};
function removeClass(elements, cName) {
    if (hasClass(elements, cName)) {
        elements.className = elements.className.replace(new RegExp("(\\s|^)" + cName + "(\\s|$)"), " "); 
    };
};

// function loadScript(url/src/)
//屏幕滚动
function scrollgo(speed,tim){
    var body = document.body,html = document.documentElement;
    var aa = Math.max(body.scrollTop,html.scrollTop);

    times = setInterval(function(){
        console.log(body.scrollTop);
        console.log(html.scrollTop);
        aa += speed;
        window.scrollTo(0,aa);//屏幕滚动
    },tim);
}
// scrollgo(2,100);

//禁用
function disabled(elem,time){
    elem.indexof('#');
    elem.indexof('.');
    document.getElementsByClassName(elem);
}

// 比较时间  时间格式20180706
function timeContrast(begin,end){
    if(begin.length != 8 || end.length != 8){
        DialogMsg("时间格式不对,格式:20180607");
        return false;
    }
    var temp = Math.max(begin,end).toString();
    begin = Math.min(begin,end).toString();
    end = temp;
    var stastr = begin.substr(0,4) + '-' + begin.substr(4,2) + '-' + begin.substr(6,2),
    endstr = end.substr(0,4) + '-' + end.substr(4,2) + '-' + end.substr(6,2);
    var statim = Date.parse(stastr),endtim = Date.parse(endstr);
    if((endtim - statim)>31*24*60*60*1000){
        DialogMsg("最大间隔时间不能超过31天");
        return false;                
    }
    return true;
}

// 获取昨,今,明天时间
function getDates(num,ico){
    var dates = new Date();
    dates.setTime(dates.getTime()+ num*60*60*1000);
    var month = dates.getMonth()+1,day = datas.getDate();
    var str = dates.getFullYear() + ico + (month<10?'0'+month:month) + ico + (day<10?'0'+day:day);
    return str;
}

//获取日期 num天数(距今) Month,本月
function getday(num) {
    var day0 = new Date();
    var txt0 = timenum(day0);
    if (num == 'Month') {
        var mon = day0.getMonth() + 1;
        var txt1 = day0.getFullYear() + (mon < 10 ? '0' + mon : mon.toString()) + '01';
    } else {
        var day1 = day0.getTime() - num * 24 * 60 * 60 * 1000;
        day0.setTime(day1);
        var txt1 = timenum(day0);
    }
    return [txt1, txt0];
    function timenum(date) {
        var month = date.getMonth() + 1, day = date.getDate();
        return date.getFullYear() + (month < 10 ? '0' + month : month.toString()) + (day < 10 ? '0' + day : day.toString());
    }
    //return [begin,end]
}

/* 验证url正确性 */
function IsURL(str_url) {
    var strRegex = "^((https|http|ftp|rtsp|mms)?://)"
        + "?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?" //ftp的user@ 
        + "(([0-9]{1,3}\.){3}[0-9]{1,3}" // IP形式的URL- 199.194.52.184 
        + "|" // 允许IP和DOMAIN（域名）
        + "([0-9a-z_!~*'()-]+\.)*" // 域名- www. 
        + "([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\." // 二级域名 
        + "[a-z]{2,6})" // first level domain- .com or .museum 
        + "(:[0-9]{1,4})?" // 端口- :80 
        + "((/?)|" // a slash isn't required if there is no file name 
        + "(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$";
    var re = new RegExp(strRegex);
    //re.test()
    if (re.test(str_url)) {
        return (true);
    } else {
        return (false);
    }
}

function isURL(urlString) {
    regExp = /^((https?|ftp|news):\/\/)?([a-z]([a-z0-9\-]*[\.。])+([a-z]{2}|aero|arpa|biz|com|coop|edu|gov|info|int|jobs|mil|museum|name|nato|net|org|pro|travel)|(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))(\/[a-z0-9_\-\.~]+)*(\/([a-z0-9_\-\.]*)(\?[a-z0-9+_\-\.%=&]*)?)?(#[a-z][a-z0-9_]*)?$/

    if (urlString.match(regExp)){
        return true;
    }else{
        return false;
    }
}

function checkUrl(urlString) {
    if (urlString != "") {
        var reg = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/;
        if (reg.test(urlString)) {
            return true;
        }else{
            return false;
        }
    }
}

// 鼠标点击出现文字,上滑慢慢消失
var a_idx = 0;
jQuery(document).ready(function($) {
    $("body").click(function(e) {
        var a = new Array("❤富强❤","❤民主❤","❤文明❤","❤和谐❤","❤自由❤","❤平等❤","❤公正❤","❤法治❤","❤爱国❤","❤敬业❤","❤诚信❤","❤友善❤");
        var $i = $("<span></span>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
        y = e.pageY;
        $i.css({
            "z-index": 999999,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": "rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")"
        });
        // ~按位取反 ~~利用符号进行类型转换,转换成数字类型
        $("body").append($i);
        $i.animate({
            "top": y - 180,
            "opacity": 0
        },
        1500,
        function() {
            $i.remove();
        });
    });
});

// 只能输入数字
// onkeyup="(this.v=function(){this.value=this.value.replace(/[^0-9-]+/,'');}).call(this)" onblur="this.v();"

//使用array方法获取url参数
var url = 'http://www.taobao.com/index.php?key0=0&key1=1&key2=2.....';
var obj = parseQueryString(url);
console.log(obj.key0)  // 输出0
function parseQueryString(data){
    var obj = {};
    var start = data.indexof('?') + 1;
    var str = data.substring(start);
    var arr = str.split('&');
    for(var i=0,leng=str.leng;i<leng;i++){
        var arr2=arr[i].split('=');
        obj[arr2[0]] = arr2[1];
    }
    return obj;
}

// 1.type判断类型
//返回obj的数据类型,适用于所有的数据类型
function istype (obj){
    return Object.prototype.toString.call(obj).slice(8,-1);
};

function isFalse (o) {
    if (!o || o === 'null' || o === 'undefined' || o === 'false' || o === 'NaN') return true
        return false
}

function isTrue (o) {
    return !this.isFalse(o)
}

function isIos () {
    var u = navigator.userAgent;
    if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {//安卓手机
        // return "Android";
        return false
    } else if (u.indexOf('iPhone') > -1) {//苹果手机
        // return "iPhone";
        return true
    } else if (u.indexOf('iPad') > -1) {//iPad
        // return "iPad";
        return false
    } else if (u.indexOf('Windows Phone') > -1) {//winphone手机
        // return "Windows Phone";
        return false
    }else{
        return false
    }
}
// 判断浏览器类型
function isPC () { //是否为PC端
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
                "SymbianOS", "Windows Phone",
                "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
// 判断浏览器
function browserType(){
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
    var isEdge = userAgent.indexOf("Edge") > -1; //判断是否IE的Edge浏览器
    var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器
    var isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1; //判断是否Safari浏览器
    var isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1; //判断Chrome浏览器
    if (isIE) {
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp["$1"]);
        if(fIEVersion == 7) return "IE7"
        else if(fIEVersion == 8) return "IE8";
        else if(fIEVersion == 9) return "IE9";
        else if(fIEVersion == 10) return "IE10";
        else if(fIEVersion == 11) return "IE11";
        else return "IE7以下"//IE版本过低
    }

    if (isFF) return "FF";
    if (isOpera) return "Opera";
    if (isEdge) return "Edge";
    if (isSafari) return "Safari";
    if (isChrome) return "Chrome";
}
// 验证码
function checkStr (str, type) {
    switch (type) {
        case 'phone':   //手机号码
            return /^1[3|4|5|7|8][0-9]{9}$/.test(str);
        case 'tel':     //座机
            return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
        case 'card':    //身份证
            return /^\d{15}|\d{18}$/.test(str);
        case 'pwd':     //密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
            return /^[a-zA-Z]\w{5,17}$/.test(str)
        case 'postal':  //邮政编码
            return /[1-9]\d{5}(?!\d)/.test(str);
        case 'QQ':      //QQ号
            return /^[1-9][0-9]{4,9}$/.test(str);
        case 'email':   //邮箱
            return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
        case 'money':   //金额(小数点2位)
            return /^\d*(?:\.\d{0,2})?$/.test(str);
        case 'URL':     //网址
            return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(str)
        case 'IP':      //IP
            return /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(str);
        case 'date':    //日期时间
            return /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(str) || /^(\d{4})\-(\d{2})\-(\d{2})$/.test(str)
        case 'number':  //数字
            return /^[0-9]$/.test(str);
        case 'english': //英文
            return /^[a-zA-Z]+$/.test(str);
        case 'chinese': //中文
            return /^[\u4E00-\u9FA5]+$/.test(str);
        case 'lower':   //小写
            return /^[a-z]+$/.test(str);
        case 'upper':   //大写
            return /^[A-Z]+$/.test(str);
        case 'HTML':    //HTML标记
            return /<("[^"]*"|'[^']*'|[^'">])*>/.test(str);
        default:
            return true;
    }
}

