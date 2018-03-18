// var list = document.getElementById('list'); var prev = document.getElementById('prev');
// var next = document.getElementById('next');

// function animate(offset) {
//     //获取的是style.left，是相对左边获取距离，所以第一张图后style.left都为负值，
//     //且style.left获取的是字符串，需要用parseInt()取整转化为数字。
//     var newLeft = parseInt(list.style.left) + offset;
//     list.style.left = newLeft + 'px';
// }

// prev.onclick = function () {
//     animate(600);
// }
// next.onclick = function () {
//     animate(-600);
// }

var box = document.getElementById("container");
function lunbo(elem) {
    var imgs = box.getElementsByTagName("div")[0],
        buts = box.getElementsByTagName("div")[1],
        prev = box.getElementsByTagName("a")[0],
        next = box.getElementsByTagName("a")[1];
    var temp = setTimeout(move, 1000);
    var tally = 1;
    function move() {
        if (tally ==6) {
            tally = 0;
        }
        imgs.style.left = parseInt(-600 * tally) + "px";
             console.log(temp);
        clearTimeout(temp);
   
        tally++;
        temp = setTimeout(move,1000);

    }
    var imgw = imgs.firstElementChild.offsetWidth;
    box.addEventListener("click", elemclick, false);
    function elemclick(e) {
        var e = e || window.event;
        target = e.target || e.srcElement;
        switch (target.name) {
            case "previous":
                break;
            case "next":
                imgs.style.left = -1200 + "px";
                console.log("移动位置");
                break;
        }
    }
}
lunbo(box);
