# 浏览器加载页面

brower根据url发送请求，server返回数据：
0. DOM tree的构建是从接受到文档开始的，过程被分为标记化和树构建；
1. 代码从起始位置，逐行执行；
2. 执行到带href属性link标签，发送请求，该请求进入异步线程继续执行生成CSSOM；
3. 执行到src属性标签，阻塞线程，执行完标签内容或请求到script脚本并执行后，继续页面解析；
   (其中，拥有src属性的img标签，不阻塞，同样进入异步等待，鬼才等图片加载再显示页面呢)
4. DOM树与CSSOM合成render tree(渲染树)，randerTree生成后才开始渲染页面；
5. render tree中只有可见内容(隐藏的元素和head元素都不存在)；
6. 继续解析，执行脚本等，JS中DOM操作的就是操作render tree；
7. 解析到html标签结束.
 
render tree中发生改变时，
1. 不发生位置、布局发生改变，仅改变render tree中的某个元素(直接替换属性)，被称为重绘；
2. 涉及位置、布局发生改变，重新计算生成render tree，对各个元素进行位置计算、样式计算等等，被称为回流.

![browser render机制](images/browser渲染机制.png 'browser render机制')

### 页面渲染过程

1. 用户输入一个URL的时候，浏览器就会发送一个请求，请求URL对应的资源。

2. 浏览器的HTML解析器会将这个文件解析，并且构建成一棵DOM树（domTree，深度优先原则-->一条道走到黑）。(在生成DOM的最开始阶段（应该是Bytes → characters后），并行发起css、图片、js的请求，无论他们是否在HEAD里。)

   - 注意：发起js文件的下载request并不需要DOM处理到那个script节点，比如：简单的正则匹配就能做到这一点，虽然实际上并不一定是通过正则：）。这是很多人在理解渲染机制的时候存在的误区

3. 在构建DOM树的时候，遇到 js 和 CSS元素，HTML解析器就换将控制权转让给JS解析器或者是CSS解析器。开始构建CSSOM

4. DOM树构建完之后，浏览器把DOM树中的一些不可视元素去掉，然后与CSSOM合成一棵render tree，DOMTree+cssTree=randerTree。

5. Layout：有了Render Tree，浏览器已经能知道网页中有哪些节点、各个节点的CSS定义以及他们的从属关系。下一步操作称之为Layout，顾名思义就是计算出每个节点在屏幕中的位置。

6. Painting：Layout后，浏览器已经知道了哪些节点要显示（which nodes are visible）、每个节点的CSS属性是什么（their computed styles）、每个节点在屏幕中的位置是哪里（geometry）。就进入了最后一步：Painting，按照算出来的规则，通过显卡，把内容画到屏幕上。

以上几个步骤因为DOM、CSSOM、Render Tree都可能在第一次Painting后又被更新多次，比如JS修改了DOM或者CSS属性。Layout和Painting也会被重复执行，除了DOM、CSSOM更新的原因外，图片下载完成后也需要调用 Layout 和 Painting 来更新网页。

参考：
[前端页面渲染机制](https：//www.cnblogs.com/baby-zuji/p/11172321.html#commentform '前端页面渲染机制') 
[什么是回流，什么是重绘，有什么区别？](https：//www.jianshu.com/p/e081f9aa03fb '什么是回流，什么是重绘，有什么区别？')
[DOM树构建过程](https：//segmentfault.com/q/1010000011935083 'DOM树构建过程')