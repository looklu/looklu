// 1.开始游戏 --> startpag消失
// 2.小蛇(三节),苹果随机出现,小蛇移动
//3.上下左右-->控制,吃苹果,增加长度
//4.范围限制及自杀,判断游戏结束
var startPag = document.getElementsByClassName('startPag')[0],
startbtn = document.getElementsByClassName('startbtn')[0],
lose = document.getElementsByClassName('lose')[0],
map = document.getElementsByClassName('content')[0],
scores = document.getElementsByClassName('score'),
leftbtn = document.getElementsByClassName('leftbtn')[0],
lbtn = document.getElementsByClassName('lbtn');


function Userobj(){
    // 地图
    this.mapW = parseInt(window.getComputedStyle(map).width);
    this.mapH = parseInt(window.getComputedStyle(map).height);
    // 苹果
    this.foodW = 20;
    this.foodH = 20;
    this.foodl = 0;
    this.foodt = 0;
    // 分数
    this.score = 0;
    // 蛇
    this.snakeBody = [];
    this.snakelen = 3;//初始长度
    // 速度
    this.speed = 300;
    // 方向
    this. direct = 'right';
    this.top = true;
    this.bottop = true;
    this.left = false;
    this.right = false;
    // 开始与暂停
    this.play = true;
}
var obj = new Userobj();
var snakemove;
obj.snakeBody =[[3,1,'head'],[2,1,'body'],[1,1,'body']];

init();
function init(){

    scoretext();
    food();
    snake();
}
// 重新开始游戏
lbtn[0].onclick = function (){
    removeclass('snake');
    console.log('重新开始');
    obj.snakeBody =[[3,1,'head'],[2,1,'body'],[1,1,'body']];
    obj.score = 0;
    obj.direct = 'right';
    lose.style.display = 'none';
    clearInterval(snakemove);
    snakemove = setInterval(move,obj.speed);
    scoretext();
    snake();
}
//开始界面
startbtn.onclick = function (){
    snakemove = setInterval(move,obj.speed);
    startPag.style.display = 'none';
}
// 暂停与开始
leftbtn.onclick = function (){
    console.log('点击按钮');
    if(obj.play){
        obj.play = false;
        clearInterval(snakemove);
        leftbtn.style.background = 'url(btn.png) -82px 0';
    }else{
        obj.play = true;
        snakemove = setInterval(move,obj.speed);
        leftbtn.style.background = 'url(btn.png)';
    }
}
// 游戏结束
function gameover(){
        clearInterval(snakemove);
        lose.style.display = 'block'; 
    }

function food(){
    var foodadd = true;//food位置锁
    var food = document.createElement('div');
    food.style.width = obj.foodW + 'px';
    food.style.height = obj.foodH + 'px';
    food.style.position = 'absolute';
    food.style.left = Math.floor(Math.random() * ((obj.mapW-obj.foodW)/20)) * obj.foodW + 'px';
    food.style.top = Math.floor(Math.random() * ((obj.mapH-obj.foodH)/ 20)) * obj.foodH + 'px';
    
    obj.foodl = parseInt(food.style.left);
    obj.foodt = parseInt(food.style.top);
    //新出现的food不能在蛇身上
    for(var i=0,leng=obj.snakeBody.length;i<leng;i++){
        if(obj.foodl == obj.snakeBody[i][0] && obj.foodt == obj.snakeBody[i][1]){
            foodadd = false;
            break;
        }
    }
    if(foodadd){
        map.appendChild(food).setAttribute('class','food');
    }else{
        food();
    }
}
function snake(){
    for( var i = 0;i < obj.snakeBody.length; i++){
        var snake = document.createElement('div');
        snake.style.position = 'absolute';
        snake.style.left = obj.snakeBody[i][0] * 20 + 'px';
        snake.style.top = obj.snakeBody[i][1] * 20 + 'px';
        map.appendChild(snake).setAttribute('class','snake ' + obj.snakeBody[i][2]);
    }
    // 蛇头旋转
    var snakehead = document.getElementsByClassName('snake head')[0];
    switch(obj.direct){
        case 'top':
            snakehead.style.transform = 'rotate(-90deg)';
            break;
        case 'bottom':
            snakehead.style.transform = 'rotate(90deg)';
            break;
        case 'left':
            snakehead.style.transform = 'rotateY(180deg)';
            break;
    }
    //判断是否吃到食物
    if(obj.snakeBody[0][0]*20 == obj.foodl && obj.snakeBody[0][1]*20 == obj.foodt){
        //添加数据,通过snake最后'两个点'确定将要添加的点
        var x1 = obj.snakeBody[obj.snakeBody.length -1][0],
        y1 = obj.snakeBody[obj.snakeBody.length - 1][1],
        x2 = obj.snakeBody[obj.snakeBody.length -2][0],
        y2 = obj.snakeBody[obj.snakeBody.length - 2][1];
        var nsnakeX = 0,
        nsnakeY = 0;
        nsnakeX = (x1-x2) ? 2*x1 - x2 : x1;
        nsnakeY = (y1 - y2) ? 2*y1 - y2 : y1;
        obj.snakeBody.push([nsnakeX,nsnakeY,'snake body']);
        obj.score ++;//分数增加
        scoretext();// 分数渲染
        removeclass('food');
        food();
        //添加身体
        var nsbody = document.createElement('div');
        nsbody.style.position = 'absolute';
        nsbody.style.left = nsnakeX * 20 + 'px';
        nsbody.style.top = nsnakeY * 20 + 'px';
        map.appendChild(nsbody).setAttribute('class','snake body');
    }
}
    // 加载分数
function scoretext(){
        var scorlen = scores.length;
        for(var i = 0;i<scorlen;i++){
            scores[i].innerText = obj.score;
        }
}
    // 移动
function move() {
    for (var i = obj.snakeBody.length - 1; i > 0; i--) {
        obj.snakeBody[i][0] = obj.snakeBody[i-1][0];
        obj.snakeBody[i][1] = obj.snakeBody[i-1][1];
    }
    switch(obj.direct){
        case 'left':
            obj.snakeBody[0][0]--;
            break;
            case 'right':
            obj.snakeBody[0][0]++;
            break;
            case 'top':
            obj.snakeBody[0][1]--;
            break;
            case 'bottom':
            obj.snakeBody[0][1]++;
            break;
            default:
            break;
    }
        // 判断是否撞墙
        if(obj.snakeBody[0][0]<0 || obj.snakeBody[0][1]<0 || obj.snakeBody[0][0]*20>(obj.mapW) || obj.snakeBody[0][1]*20>(obj.mapH)){
            console.log('撞墙');
            gameover();
            return;
        }
        // 判断是否自杀
        for(var i = 1, leng = obj.snakeBody.length; i<leng; i++){
            if(obj.snakeBody[0][0] == obj.snakeBody[i][0]){
                if(obj.snakeBody[0][1] == obj.snakeBody[i][1]){
                    console.log('自杀');
                    gameover();
                    return; 
                }
            }else{
                continue;
            }
        }
    removeclass('snake');
    snake();
}
document.onkeydown = function (e){
    switch(e.keyCode){
        case 32:

        case 37:
        direction('left');
        break;
        case 38:
        direction('top');
        break;
        case 39:
        direction('right');
        break;
        case 40:
        direction('bottom');
        break;
        default:
        break;
    }
    function direction(arg) {
        switch (obj.direct) {
            case 'top':
                obj.left = true;
                obj.right = true;
                obj.top = false;
                obj.bottom = false;
                break;
            case 'bottom':
                obj.left = true;
                obj.right = true;
                obj.top = false;
                obj.bottom = false;
                break;
                case 'left':
                obj.left = false;
                obj.right = false;
                obj.top = true;
                obj.bottom = true;
                break;
            case 'right':
                obj.left = false;
                obj.right = false;
                obj.top = true;
                obj.bottom = true;
                break;
            default:
                break;
        }
        if(obj[arg]){
           obj.direct = arg;
              }
    }
}
function removeclass(ele){
    var eles  = document.getElementsByClassName(ele);
    if(eles[0]){
        for(var i = 0 ,leng = eles.length; i < leng; i++){
            eles[0].parentElement.removeChild(eles[0]);
        }
    }
}


// 延伸
// 拖拽
drag(scores[1].parentElement);
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
//事件绑定
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