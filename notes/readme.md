在学习Web之前，先要了解Web的特性和现状：
1. web前端的基本工作职责 和基础技能（要清楚）
2. web前端的分类和门派
3. 前端开发 必看的书籍资料（重点）

根据web前端的细分工种 和 业务不同，大致的可以分为下面几种：
1. web网站开发
2. 移动APP开发
3. canvas 数据可视化
4. nodejs开发
5. html5游戏

**闭包**
**闭包的作用**
1. 实现公有变量
	eg:函数累加器
2. 可以做缓存（存储结构）
	eg:eater
3. 可以实现封装，属性私有化
	eg:Person()
4. 模块化开发，防止污染全局变量


		function test() {
			var num = 100;
			function a() {
			num ++;
			console.log(num);
			}
			function b() {
			num --;
			console.log(num);
			}
			return [a,b];
			}
			var  myArr = test();
			myArr[0]();  //101
			myArr[1]();  //100

		function eater() {
			var food = "";
			var obj = {
				eat : function(){
				console.log("i am eating" + food);
				food = "";
				},
				push : fuction(myFood){
				food = myFood;
				}
			}
			return 0bj;
		}
		var eater1 = eater();
		eater1.push(banana);
		eater1.eat();
		