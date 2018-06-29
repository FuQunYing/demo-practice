/**
 * Created by Edianzu on 2018/1/4.
 */
console.log("1 这是代码上的第一个输出 1");
setTimeout(function(){
    console.log("2 这是第一个set定时器里的输出 2");
    process.nextTick(function(){
        console.log("3 这是第一个set定时器里的nextTick定时器的输出 3");
    });
    new Promise(function(resolve){
        console.log("4 这是第一个set定时器里的promise的输出 4");
        resolve();
    }).then(function(){
        console.log("5 这是第一个set定时器里的promise后的then函数输出 5");
    })
});
process.nextTick(function(){
    console.log("6 这是第一个nextTick的输出 6");
});
new Promise(function(resolve){
    console.log("7 这是第一个promise的输出 7");
    resolve();
}).then(function(){
    console.log("8 这是第一个promise后的then函数 8");
});
setTimeout(function () {
    console.log("9 这是第二个set定时器的输出 9");
    process.nextTick(function(){
        console.log("10 这是第二个set定时器的next定时器输出 10");
    });
    new Promise(function(resolve){
        console.log("11 这是第二个set定时器的promise函数 11");
        resolve();
    }).then(function(){
        console.log("12 这是第二个set定时器的promise后的then函数 12");
    })
});
console.log("13 最后一个输出，脚本执行结束");