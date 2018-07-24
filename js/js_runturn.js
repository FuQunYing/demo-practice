console.log("1 这是代码上的第一个输出 1");//这个一定是第一个没问题，立刻执行
setTimeout(function(){ //第一个set，被分到第二线程的的第一个，经过指定时间，把要执行的任务加入到Event Queue中，因为单线程任务要一个一个执行，如果前面的任务需要时间很长，那就只能等着，真正延迟的时间往往大于设置的时间
    console.log("2 这是第一个set定时器里的输出 2");//在第二个线程执行的时候被立刻输出
    process.nextTick(function(){//这个被分到第二线程的最后执行
        console.log("3 这是第一个set定时器里的nextTick定时器的输出 3");
    });
    new Promise(function(resolve){//在第二线程中按顺序立刻执行
        console.log("4 这是第一个set定时器里的promise的输出 4");
        resolve();
    }).then(function(){//被分到第三线程
        console.log("5 这是第一个set定时器里的promise后的then函数输出 5");
    })
});
process.nextTick(function(){ //被分到第一线程的最后
    console.log("6 这是第一个nextTick的输出 6");
});
new Promise(function(resolve){//第一线程的顺序执行
    console.log("7 这是第一个promise的输出 7");
    resolve();
}).then(function(){ //第二线程的顶部，首先执行/或者第一线程的底部，在第一线程内最后执行
    console.log("8 这是第一个promise后的then函数 8");
});
setTimeout(function () {// 第二个set，被分到第二线程
    console.log("9 这是第二个set定时器的输出 9");//第二线程按顺序输出完4，就是9
    process.nextTick(function(){//被分到第二线程的最后，但是因为顺序，所以是上一个定时器的3先输出
        console.log("10 这是第二个set定时器的next定时器输出 10");
    });
    new Promise(function(resolve){//第二线程 按顺序执行，直接输出11
        console.log("11 这是第二个set定时器的promise函数 11");
        resolve();
    }).then(function(){//被分到第三线程
        console.log("12 这是第二个set定时器的promise后的then函数 12");
    })
});
console.log("13 最后一个输出，脚本执行结束");//第一线程