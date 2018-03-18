var arr = [0,1,2,3,4,5,6,7,8,9];
//65-90 A-Z || 97-122 a-z
for(var i = 65;i <= 122; i++){
    if(i > 90 && i < 97){
        continue;
    }
    arr.push(String.fromCharCode(i));
}
//现在arr中储存的是所需要的数值

var canvasStr;
createCanvas();

$('.submit').on('click',function(){
    showResult();
});
$('.refresh').on('click',function(){
    createCanvas();
});
$('.input').focus(function () {
    $('.errorText').add($('.pic')).fadeOut(100);
})
function showResult(){
    if(!$('.input')[0].value){
        $('.errorText').css({
            'display': 'block'
        }).text('请输入');
        $('.pic').css({
            'background-image': 'url(false.png)',
            'display': 'inline-block'
        })
        return ;
    }
    if ($('.input')[0].value.toLowerCase() == canvasStr.toLowerCase()) {
        $('.pic').css({
            'background-image': 'url(true.png)',
            'display': 'inline-block'
        });
    } else {
        $('.errorText').css({
            'display': 'block'
        }).text('输入错误,请重新输入');
        $('.pic').css({
            'background-image': 'url(false.png)',
            'display': 'inline-block'
        })
    }
}


function createCanvas(){
    canvasStr = '';
    var values = '';
    for(var i = 0; i < 6; i++){
        var a = arr[parseInt(Math.random() *arr.length)];
        canvasStr += a;
        values += (' ' + a);
    }
    var canvas = $('#canvasStr')[0],//获取画布
    ctx = canvas.getContext('2d'),//画笔
    oImg = new Image(),//创建一个图片对象
    x = canvas.width/2;
    oImg.src = 'bg.jpg';
    // createPattern() 方法在指定的方向内重复指定的元素。
    // 元素可以是图片、视频，或者其他 <canvas> 元素。
    // 被重复的元素可用于绘制/填充矩形、
    oImg.onload = function () {
        var pattern = ctx.createPattern(oImg, 'repeat');
        // fillStyle填充
        ctx.fillStyle = pattern;
        // fillRect绘制
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        // 从中心点将文字分散到两边
        ctx.textAlign = 'center';
        ctx.fillStyle = '#ccc';
        // 字体大小 ，样式
        ctx.font = '46px Roboto Slab';
        // setTransform(a, b, c, d, e, f) 先重置再变换
        // 参数：水平缩放、水平倾斜、垂直倾斜、垂直缩放、水平移动、垂直移动
        ctx.setTransform(1, -0.12, 0.2, 1, 0, 12);
        // 开始绘制字体  相对于画布的 X,Y
        ctx.fillText(values, x, 60);
    }

}


