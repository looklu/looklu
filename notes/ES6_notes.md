# ES6 notes

相对于ES5的全局作用域和函数作用域,ES6增加了块级作用域概念;
var命令的使用,与ES6之前一样,没有发生变化,var仍是函数作用域级别的.

## 块级域{}与函数声明
ES5规定，函数只能在顶层作用域和函数作用域之中声明，不能在块级作用域声明。
ES6 引入了块级作用域，明确允许在块级作用域之中声明函数。
>**！！！**
**考虑到环境导致的行为差异太大，应该避免在块级作用域{}内声明函数，要在全局作用域或者函数作用域的顶层声明函数。如果确实需要，也应该写成函数表达式，而不是函数声明语句。**

## let和const命令
const 声明一个只读的常量。一旦声明，常量的值就不能改变。
对于复合类型的变量，变量名不指向数据，而是指向数据所在的地址。const命令只是保证变量名指向的地址不变，并不保证该地址的数据不变，所以将一个对象声明为常量必须非常小心。

1. 只在所在作用域(全局域、函数域、块级域)内有效;
2. 封闭作用域、暂时性死区：只要该作用域内存在let、const命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响，在声明命令之前使用就会抛错；
3. 不能重复声明：无论是var、let、const，在同一作用域(全局域、函数域、块级域)下，不能重复声明

## 变量解构赋值
ES6允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。
如果解构不成功，变量的值就等于undefined。
1. 解构赋值允许指定默认值：ES6内部使用严格相等运算符（===），判断一个位置是否有值。所以，如果一个数组成员不严格等于undefined，默认值是不会生效的。

用途:
1. 交换变量的值
2. 从函数返回多个值
3. 函数参数的定义
4. 提取JSON数据
5. 函数参数的默认值
6. 遍历Map结构
7. 输入模块的指定方法