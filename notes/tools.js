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
scrollgo(2,100);