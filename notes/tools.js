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

//点击 出现文字,上滑慢慢消失
var a_idx = 0;  
jQuery(document).ready(function($) {  
    $("body").click(function(e) {  
        var a = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正" ,"法治", "爱国", "敬业", "诚信", "友善");  
        var $i = $("<span/>").text(a[a_idx]);  
        a_idx = (a_idx + 1) % a.length;  
        var x = e.pageX,  
        y = e.pageY;  
        $i.css({  
            "z-index": 9999999999999999999999999999999999999999,  
            "top": y - 20,  
            "left": x,  
            "position": "absolute",  
            "font-weight": "bold",  
            "color": "#ff6651"  
        });  
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

function isURL(urlString) {
    regExp = /^((https?|ftp|news):\/\/)?([a-z]([a-z0-9\-]*[\.。])+([a-z]{2}|aero|arpa|biz|com|coop|edu|gov|info|int|jobs|mil|museum|name|nato|net|org|pro|travel)|(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))(\/[a-z0-9_\-\.~]+)*(\/([a-z0-9_\-\.]*)(\?[a-z0-9+_\-\.%=&]*)?)?(#[a-z][a-z0-9_]*)?$/

    if (urlString.match(regExp)){
        return true;
    }else{
        return false;
    }
}
/* 验证url正确性end */

/* 鼠标特效 */
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

// onkeyup="(this.v=function(){this.value=this.value.replace(/[^0-9-]+/,'');}).call(this)" onblur="this.v();"
// 只能输入数字

//使用array方法获取url参数
var url = 'http://www.taobao.com/index.php?key0=0&key1=1&key2=2.....';
var obj = parseQueryString(url);
alert(obj.key0)  // 输出0
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

