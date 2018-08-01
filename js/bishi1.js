function fun1(name) {
    if (name) this.name = name;
}

function fun2(name) {
    this.name = name;
}

function fun3(name) {
    this.name = name || "Jhon"
}

fun1.prototype.name = "Tom";
fun2.prototype.name = "Tom";
fun3.prototype.name = "Tom";

console.log(new fun1().name, new fun2().name, new fun3().name);

//第一个new的时候没有传值，所以就么有经过赋值这一步，new出来的函数本身并没有name，就会去他爹那里找，有个Tom
//第二个new的时候没有传值，但是还是会执行那个赋值语句，但是name没有真的值，打印出来也是undefined
//第三个new的时候没有传值，但是如果没有值会被赋值为Jhon，所以这里有个Jhon了，不会再去上级找
//最后输出Tom undefined Jhon