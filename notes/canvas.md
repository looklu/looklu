# canvas

canvas标签是图形容器,而图形则通过脚本来绘制.
默认情况下\<canvas\>元素没有边框和内容,用style属性来添加边框.

    <canvas id="mycanvas" width="400" height="400" style="border:1px solid #000;"></canvas>
    <script>
    var c = document.getElementById("mycanvas");//获取画布
    var cxt = c.getContext("2d");//创建context对象,context("2d")对象是内建的H5对象,拥有多种绘制路径、矩形、圆形、字符以及添加图像的方法
    ctx.fillStyle = "#ccc";//css颜色
    ctx.fillRect(0,0,200,200);//绘制图形
    ctx.arc(95,50,40,0,2*Math.PI);//圆形
    ctx.stroke();
    </script>

**路径**
moveTo(x,y) 线条开始坐标
lineTo(x,y) 线条结束坐标
然后使用stroke()方法来绘制线条

**圆形**
arc(x,y,r,start,stop)
start：起始角度，以弧度表示，圆心平行的右端为0度
stop：结束角度，以弧度表示

**文本**
font 定义字体
fillText(text,x,y) 在canvas上绘制实心的文本
strokeText(text,x,y) 在canvas上绘制空心的文本

**渐变**
有两种不同的方式设置canvas渐变
createLinearGradient(x,y,x1,y1) 创建线条渐变
createRadialGradient(x,y,r,x1,y1,r1) 创建一个径向/圆渐变
当我们使用渐变对象，必须使用两种或两种以上的停止颜色。
addColorStop()方法指定颜色停止，参数使用坐标来描述，可以是0至1.
使用渐变，设置fillStyle或strokeStyle的值为 渐变，然后绘制形状，如矩形，文本，或一条线。
使用 createLinearGradient():

**图像**
把一幅图像放置到画布上, 使用以下方法:
drawImage(image,x,y)

设置背景图:
    oImg = new Image();
    oImg.src = './images/bg.jpg';
    // createPattern() 方法在指定的方向内重复指定的元素。
    // 元素可以是图片、视频，或者其他 \<canvas\> 元素。
    // 被重复的元素可用于绘制/填充矩形、
    oImg.onload = function () {
        var pattern = ctx.createPattern(oImg, 'repeat');
        // fillStyle填充
        ctx.fillStyle = pattern;
        // fillRect绘制
        ctx.fillRect(0, 0, canvas.width, canvas.height);