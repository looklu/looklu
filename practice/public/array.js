// push()
Array.prototype.push = function (){
    for(var i=0;i<arguments.length;i++){
        this[this.length] = arguments[i];
    }
    return this.length;
    }
// unshift
Array.prototype.unshift = function (){
    var arr = [];
    for(var i=0;i<arguments.length;i++){
    arr[arr.length] = arguments[i];
    }
    arr.concat(this);
    return this.length;
}
// splice
// pos += pos > 0 ? 0 : this.length;
 var arr = [5,23,9,81,2,7];
 function comap(val1,val2) {
     if(val1>val2){
         return 1;
     }
     if(val1 == val2){
         return 0;
     }
     if(val1<val2){
         return -1;
     }
 }
 arr.sort(comap);
 console.log(arr);//2 5 7 9 23 81

// 数组去重
//var arr = [1,1,1,3,3,3,5,5,5]
// var obj = {
//     1 : "abc",
//     3 : "abc",
//     5 : "abc"
// }
Array.prototype.unique = function (){
    var temp = {},
    arr = [],
    len = this.length;
    for(var i=0; i < len; i ++){
        if(!temp[this[i]]){
            temp[this[i]] = "abc";
            arr.push[this[i]];
        }
    }
    return arr;

 }

//  判断数据类型
 function type(target){
     var ret = typeof(target);
     var template = {
         "[object Array" : "array",
         "object Object" : "object",
         "[object Number" : "number - object",
         "object Boolean" : "boolean - object",
         "object String" : "string - object"
        }
        if(target === null){
            return "null";
        }else if(ret == "object"){
            var str = Obj.prototype.toString.call(target);
            return template[str];
        }else{
            return ret;
        }
 }