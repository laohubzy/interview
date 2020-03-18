const obj = {
    name: 'wsy'
}

function doSomething(things) {
    console.log(`我是${this.name}, 在${things}`);
}

// doSomething.call(obj, '吃饭')
// doSomething('吃饭')

// function myCall(fn, target, ...args) {
//     fn.prototype = target;
//     fn(args);
// }

// myCall(doSomething, obj, '吃饭')

Function.prototype.myCall = function(target) {
    target.fn = this
    let args = []
    for(var i = 1; i < arguments.length; i++) {
        args.push(arguments[i])
    }
    console.log(this)
    // this = obj
    target.fn(...args);
    delete target.fn;
}

// doSomething.myCall(obj, '吃饭')
// console.log(obj)

Function.prototype.myApply = function(target, ...args) {
    target.fn = this
    target.fn(args)
    delete target.fn
}

// doSomething.myApply(obj, '吃饭')

Function.prototype.myBind = function(target) {
    var self = this;
    return function(...args) {
        self.myApply(target, args)
    }
}

const test = doSomething.myBind(obj)
test('吃饭')