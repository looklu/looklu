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


