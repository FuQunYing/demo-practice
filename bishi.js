//函数记忆
/*
//1.判断质数
var isPrime=(function(){
    var hash={};
    return function(n){
        if(!isNaN(n)&&n>1){
            if(n<=3) return true;
            else if(n%2==0) return false;
            else if(hash[n]!==undefined) {
                console.log("不用执行for循环");
                return hash[n];
            }
            else{
                
                console.log("执行for循环 ");
                for(var i=3;i<Math.sqrt(n);i+=2){
                    if(n%i==0){
                        hash[n]=false;
                        return false;
                    }
                }
                hash[n]=true;
                return true;
            }
        }else{
            console.log("必须输入大一1的数字")
        }
    }
})();
console.log(isPrime(117));
console.log(isPrime(113));
console.log(isPrime(117));
console.log(isPrime(113));
*/
/*
//2.1 插入排序
var arr=[4,2,5,3,1];
function insertSort(arr){//插入排序
    for(var i=1;i<arr.length;i++){
        var t=arr[i];
        var p=i-1;
        while(p>=0&&arr[p]>=t){
            arr[p+1]=arr[p];
            p--;
        }
        arr[p+1]=t;
    }
}
insertSort(arr);
console.log(arr);
//2.2 快速排序
var arr=[6,3,1,5,4,7,2];
function quickSort(arr){
    if(arr.length<=1) return arr;
    else{
        var center=parseInt((arr.length-1)/2);
        var centerNum=arr.splice(center,1)[0];
        var left=[],right=[];
        for(var i=0;i<arr.length;i++){
            if(arr[i]<=centerNum) left.push(arr[i])
            else right.push(arr[i])
        }
        return quickSort(left).concat(centerNum,quickSort(right));s
    }
}
arr=quickSort(arr);
console.log(arr);*/
/*//3.数组去重
var arr=[3,1,2,1,4,2,3,2];
var r=[];
var hash={};
for(var i=0;i<arr.length;i++){
    //如果r中没有arr[i]
   /!* if(r.indexOf(arr[i]==-1))//本质上还是循环
        r.push(arr[i]);//才将arr[i]压入r*!/
   if(hash[arr[i]]===undefined){
       hash[arr[i]]=1;
       r.push(arr[i])
   }
}
console.log(r);
//不遍历--效率并不高
var arr=arr.sort().join("")//.match(/(\d)\1*!/g)
    .replace(/(\d)(\1*)/g,"$1").split("");
console.log(arr);
//ES6数组去重方法
function dedupe(array){
	return Array.from(new Set(array))
}
dedupe([1,2,3,,4,4])//[1,2,3,4]
*/
//day02
//1.将字符串中变为下面的样子，对字符串中的每个单词分别执行不同的操作
var str="ryan is not a good man";
        //ryan5 is6 not7 a8 good9 man10
var n=5;
str=str.replace(/\b[a-z]+\b/ig,function(kw){
    return kw+n++;
});
console.log(str);
//2.计算一个只有乘法和加法的表达式的值//比如: 1+23*2+3*3*3
function calc(exp) {
    var arr=exp.split("+");
    var sum=0;
    for(var i=0;i<arr.length;i++){
        if(arr[i].indexOf("*")==-1)
            sum+=parseFloat(arr[i]);
        else{
            var r=1;
            var arr2=arr[i].split("*");
            for(var j=0;j<arr2.length;j++){
                r*=arr2[j]
            }
            sum+=r;
        }
    }
    return sum;
}
console.log(calc("1+23*2+3*3*3"));
//3.查找字符串中出现次数最多的字符，共出现几次?
var str="abdcbcdadcabce";
//方法一
/*
var result=str.split("")
    .sort().join("").match(/([a-z])\1*!/g)
    .sort((a,b)=>b.length-a.length)[0];
console.log("出现最多的字符是"+result[0]+"，次数："+result.length)
*/
//方法二
var hash={};
for(var i=0;i<str.length;i++){
    if(hash[str[i]]!==undefined)
        hash[str[i]]+=1;
    else hash[str[i]]=1;
}
var word="",count=0;
for(var key in hash){
    if(hash[key]>count){
        word=key;
        count=hash[key];
    }
}
console.log("出现次数最多的字符是："+word+"，次数："+count);
//4.数组降维
var arr=[
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
];
// arr=String(arr).split(",");
arr=Array.prototype.concat.apply([],arr);
console.log(arr);
//5.给定降序排列好的数组:
var arr=[8,7,6,5,4,3,2,1];
        //i             j
        //[1,8,2,7,3,6,4,5],独特的遍历方式
var result=[];
for(var i=0,j=arr.length-1;i<j;i++,j--){
    result.push(arr[j]);
    result.push(arr[i]);
}
if(i==j) result.push(arr[i]);
console.log(result);

//前提:已经升序排列好了
var arr=[1,2,4,6,9,10,12,15,17];
        //i                   j
var sum=19;//找出数组中哪一对的和为19
for(var i=0,j=arr.length-1;i<j;){
    if(arr[i]+arr[j]>sum) j--;
    else if(arr[i]+arr[j]<sum) i++;
    else{
        console.log(arr[i],arr[j]);
        i++;j--;
    }
}
//6.function
/*
var f=function(){ var a=  b=1; };//执行时从右向左，b已经相当于是全局变量
f();
console.log(b);//1
console.log(a);//报错，因为a是在函数内var出来的，局部变量
*/

/*
var f=function(){ var a=b=1; }
setTimeout(f,0);
console.log(b);//报错，定时器的函数是在最后调用的，此时还没有b
f();
*/

/*var a,b=0,fn=function(){var a=b=2};
fn();
console.log(a);//undefined
console.log(b);//2*/

var emp={
    work:function(){
        var sum=0;
        for(var i=0;i<arguments.length&&arguments[0]>0;i++){
            sum+=arguments[i]+arguments.callee(--arguments[i])
        }
        return sum;
    }
};
console.log(emp.work(3,2,1));

//7.闭包
var a=0,b=0;
function A(a){//外层函数
    //外层函数向外返回内层函数--给全局变量A赋值;
    A=function(b){console.log(a+b++);};
    console.log(a);
}
A(1);//输出1，经过此番函数调用，A也变成了A=function(b){console.log(a+b++);};
A(12);//13,经过上一次函数调用a=1，这次调用的A是被重新赋值过的，所以函数内直接执行1+12

//day03
//1.闭包
function fun(n,o){
    console.log(o);//输出第二个参数
    return {
        fun:function(m){//保护第一个参数
            return fun(m,n);
        }
    }
}
var b=fun(0)//undefined
    /*b:{fun(){return fun(m,n=0)}}*/
    .fun(1)//0
    /*b:{fun(){return fun(m,n=1)}}*/
    .fun(2)//在上一步的基础上进行调用，1
    /*b:{fun(){return fun(m,n=2)}}*/
    .fun(3);//2
// var a=fun(0);//undefined,只传了一个参数，输出o就是undefined
// /*a:{fun(){return fun(m,n=0)}}，此时a被赋值为内层函数n也在上一步被赋值为0，所以重新调用fun的时候，输出第二个参数总为0*/
// a.fun(1);//0
// a.fun(2);//0
// a.fun(3);//0

var c=fun(0)//undefined
    .fun(1);//0
/*c:{fun(){return fun(m,n=1)}}*/
c.fun(2);//1
c.fun(3);//1


var arr=[];
function fun(){
    for(var i=0;i<4;i++){
        var x={};
        // x.no=i;无用
        // x.text=arr[i];
        x.fun=function(){console.log(i)};
        arr.push(x);
        //arr.push(function(){console.log(i)})
    }//i=4,边界值
  /*  arr:[
        { function(){console.log(i)}},
        { function(){console.log(i)}},
        { function(){console.log(i)}},
        { function(){console.log(i)}},
    ]*/
}
fun();
arr[0].fun();//4
arr[1].fun();//4
arr[2].fun();//4
arr[3].fun();//4

var funs=(function(){
    for(var i=0,arr=[];i<3;i++){
        arr[i]=function(){console.log(i)};
    }//i=3
    return arr;
})();
//funs:[
// 0: function(){console.log(i)},
// 1: function(){console.log(i)},
// 2: function(){console.log(i)}
// ]
funs[0]();//3
funs[1]();//3
funs[2]();//3

//2.面向对象
window.a=300;
function fn1(){
    this.a=100; this.b=200;
    return function(){
        alert(this.a);
    }.call(arguments[0]);//call用undefined来替换this的指向，那就相当于this->window 所以alert 300
}
function fn2(){ this.a=new fn1();/*没有return */}
var a=new fn1()//300,执行结束 {a:100,b:200}
    .b;//a:200
var v=new fn1(
    fn2()
    /*200,这句话执行完，a变成了对象{a:100,b:200}*/
);//alert({a:100,b:200})-->即[object,Object]


//3.
var setObj=function(o){
    //o=p={name:"xiaoming",age:24};
    o.name="xiaoming";
    o={};//新建一个对象，o和p无关了，所以p被改成xiaoming以后就没有别的操作了
    o.name="xiaohong";
}
var p={name:"xixi",age:24};
setObj(p);
console.log(p);//
//4.面向对象+闭包
var number=2;//4 //8
var obj={
    number:4,//8
    fn1:(function(){
        //var number，声明提前的坑
        this.number*=2;//匿名函数自调this->window，此处number=2
        number*=2;//乘以了undefined
        var number=3;//匿名函数局部变量的3
        return function(){
            this.number*=2;
            number*=3;
            alert(number);
        }
    })()
    /*
    fn1:function(){(number=3,9,27)
     this.number*=2;
     number*=3;
     alert(number);
     }
    */
};
var fn1=obj.fn1;
alert(number);//4，全局的
fn1();//9,用的自己的，没有去全局
obj.fn1();//27，调用也还是用自己，前面的对闭包内的没有影响
alert(window.number);//8
alert(obj.number);//8

//5,