//要办事，先找人，DOM操作，获取所有需要的元素！！
// 经典函数，传入什么，返回什么
function $(id) {
return document.getElementsById(id);
}
var js_box = $("js_box");//获取最大盒子.
var slider_main_block = $("slider_main_block");//获取滚动的盒子
var imgs = slider_main_block.children;//获得所有的图片组需要滚动的部分
var slider_ctrl = $("slider_ctrl");//获得控制span的父盒子

//进行for循环，开始遍历所有的图片内容
for (var i=0;i<imgs.length;i++){
    var span = document.createElement("span");//创建span
    span.className = "slider-ctrl-con";//添加类名
    span.innerHTML = imgs.length-i;//实现倒序插入
    slider_ctrl.insertBefore(span,slider_ctr.children[1]);//在第二个span的前
    // 面插入
}

//遍历按钮
//遍历三个按钮
// spans是8个按钮，他们都是span
var iNow = 0;//制播放张数
for (var k in spans){// k是索引号 spans[k] spans[0]第一个span
    spans[k].onclick = function () {
        if (this.className == "slider-ctrl-prev"){//判断当前点击的按钮是不是 prev
            //当我们左侧点击的时候，当前的这张图片 先慢慢的走到右边 上一张 一定要快速走到左侧（-300）的位置
            //然后慢慢走到舞台中央
            animate(imgs[iNow],{left:scrollWidth});
            --iNow < 0 ? iNow = imgs.length - 1 : iNow;
            imgs[iNow].style.left = -scrollWidth + "px";
            animate(imgs[iNow],{left: 0});
            setSquare();
        }
        else if (this.className == "slider-ctrl-next"){//右侧按钮
            autoplay();
        }
        else {
            //alert("您点击了下面的span");
            //alert(this.innerHTML);
            //首先我们要知道点击的是第几张图片 -- 获得当前的索引号
            var that = this.innerHTML - 1;
            // console.log(typeof that);
            if (that > iNow){
                //做法等同于右侧按钮
                animate(imgs[iNow],{left: -scrollWidth});//当前的这张慢慢走出去 左侧
                imgs[that].style.left = scrollWidth + "px";//点击的那个索引号 快速走到右侧 310
            }
            else if (that < iNow){
                //做法等同于左侧按钮
                animate(imgs[iNow],{left:scrollWidth});
                imgs[that].style.left = -scrollWidth + "px";
            }
            iNow = that;//给予当前的索引号
            animate(imgs[iNow],{left: 0});
            //比如 已经播放到地4张 我点击了 第2张 把2给 inow
            //下一次播放，应该播放第3张
            setSquare();
        }
    }
}
// 设置setSquare函数 一个可以控制 播放span 的函数当前
function setSquare() {
    //清除所有的span current 留下 满足需要的那一个
    for (var i=1;i<spans.length-1;i++){//8个span 我们要1-6 不用7 索引号
        spans[i].className = "slider-ctrl-con";
    }
    spans[iNow+1].className = "slider-ctrl-con current";// +1 很重要
}

//设置定时器 其实定时器就是 右侧按钮
var timer = null;
timer = setInterval(autoplay,2000);//开始定时器
function autoplay() {
    //当我们点击的时候，当前的这张图片 先慢慢走到左边 下一张 一定先快速走到右侧（310）位置
    //然后慢慢的走到舞台中央
    // alert("您点击了右侧按钮")
    // iNow == 0;
    animate(imgs[iNow],{left: -scrollWidth});
    //当前的图片慢慢走到 -scrollWidth位置
    //变成1 先 ++ ++iNow 先自加 后 运算
    ++iNow > imgs.length -1 ? iNow = 0 : iNow;
    imgs[iNow].style.left = scrollWidth + "px";//立马执行 快速走到右侧
    animate(imgs[iNow],{left: 0});//下一张走的 0 的位置 慢慢走过来
    setSquare();//调用square
}
// 鼠标经过清除定时器
js_box.onmousemove = function () {
    clearInterval(timer);
}
js_box.onmouseout = function () {
    clearInterval(timer);//要执行定时器 先清除定时器
    timer = setInterval(autoplay,2000);//开启定时器
}
