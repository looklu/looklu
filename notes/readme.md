在学习Web之前，先要了解Web的特性和现状：
1. web前端的基本工作职责 和基础技能（要清楚）
2. web前端的分类和门派
3. 前端开发 必看的书籍资料（重点）

前端主要负责实现视觉和交互功能，以及与后端服务器通信，完成业务逻辑。现在前端的核心价值在于对用户体验的极致追求。 
那么我们靠什么来提升用户体验和人性化操作，让用户觉得体验牛x、舒服呢？（当然细分厉害的公司，会有专门的 用户体验攻城狮） 
当然是我们自始自终的主角 JavaScript了，毕竟它最初就是为浏览器而生的脚本语言。然而，JS这门语言并不是一种强类型语言，更像是一种解释型语言，所以很多属性，在不同的浏览器环境解释有很大不同导致，效果和性能千差万别，而且很多属性之长，之多，之巨都很有工作量。
# JQuery
jQuery 这种框架神器，由于其好用，简单，效果多样，兼容完美，高效率等特性，迅速席卷全世界，所以如果想入门，jquery 这个东西你是逃不掉的，而且利用它简单的语法，你会很快将一些效果实现出来，迅速提升兴趣。

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
1. 可以做缓存（存储结构）
	eg:eater
1. 可以实现封装，属性私有化
	eg:Person()
1. 模块化开发，防止污染全局变量


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
		