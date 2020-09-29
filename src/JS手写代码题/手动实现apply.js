Function.prototype.newApply = function (context) {
    if (typeof context !== 'function') {
        throw new TypeError('not a function');
    }

    context = context || window;
    context.fn = this;
    let result;
    if (arguments[1]) {
        result = context.Fn(...arguments[1]);
    } else {
        result = context.Fn();
    }
    delete context.Fn;
    return result;
}
