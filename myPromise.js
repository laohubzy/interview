function MyPromise(fn) {
    this._status = 'padding'
    this._result
    this._succCallbackList = []
    fn(this.resolve.bind(this), this.reject.bind(this))
}

MyPromise.prototype.then = function(fn1, fn2) {
    console.log('then', fn1)
    if(this._status == 'padding') this._succCallbackList.push(fn1)
    // if(this._status == 'fulfilled') return fn1(this._result)
    // if(this._status == 'rejected') fn2(this._result)
    // return new MyPromise((res, rej) => {
    //     // 代表上一个then 是否成功
    //     // console.log('x')
    //     // if(this._status == 'fulfilled') fn1(this.result)
    //     // if(this._status = 'rejected') this.reject(fn2(this.result))
        
    // })
    return new MyPromise((res, rej) => {
        if(this._status == 'fulfilled') {}
    })
}

MyPromise.prototype.resolve = function(result) {
    console.log('resolve')
    this._status = 'fulfilled'
    this._result = result
    if(this._succCallbackList.length > 0) {
        this._succCallbackList.forEach(callback => {
            callback(this._result)
        })
        this._succCallbackList = []
    }
}


MyPromise.prototype.reject = function(result) {
    this._status = 'rejected'
    this._result = result
}


const test = (name) => {
    return new MyPromise((res, rej) => {
        setTimeout(() => {
            if(name == 'wsy') {
                res('wsy 超好看')
                // MyPromise.resolve(''wsy 超好看'')
            } else {
                rej(`${name}, 超丑`)
            }
        }, 5000)
    })
}

const f1 = (re) => {
    console.log(re, 'f1')
    // return new MyPromise((res, rej) => {
    //     if(re) {
    //         res(re)
    //     }
    // })
    return 'f1 resalut'
}

const f2 = (re) => {
    console.log(re, 'f2')
}

const f3 = (re) => {
    console.log(re, 'f3')
}

test('wsy').then(f1, f2).then(f3)

// .then(f1, f2)
// .then((res) => {
//     console.log(`又成功了 ${res}`)
// })