Function.prototype.newCall = function (context) {
    // newCall方法中的this就是当前要操作和改变其this关键字的那个函数名
    // context指的就是传进去的参数
    if (typeof this !== 'function') {
        throw new TypeError('not a function');
    }
    context = context || window; // 如果为null就赋值为window
    context.fn = this; // 在context下挂载一个函数
    let args = [];
    // i从1开始，过滤掉第一个传参
    for (let i = 1, len = arguments.length; i < len; i++) {
        args.push(arguments[i]);
    }

    let result = context.Fn(...args);
    delete context.Fn;
    return result;
}
