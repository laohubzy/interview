class MyPromise {
    _status = 'padding'
    _result
    _fulfillCallback

    constructor(fn) {
        fn(this.resolve.bind(this), this.reject.bind(this))
    }
    
    resolve = (param) => {
        if(this._status == 'padding') {
            console.log(param)
            this._result = param
            this._status = 'fulfilled'
            if(this._fulfillCallback) {
                this._fulfillCallback()
            }
        }
        

    }

    reject = () => {
        console.log('reject')
    }

    then = (res, rej) => {
        console.log('then')
        const p = new MyPromise(_ => {})
        this._fulfillCallback = res
        return p
    }
}

function f1() {
    console.log('f1')
    
}

function f2(res, rej) {
    console.log('f2')
}

// const a = new MyPromise((res, rej) => {
//     res(1)
// })

function buy(people) {
    return new MyPromise((resolve,rejec) => {
        // setTimeout(() => {
        //     else {
        //         // rejec(`${people}不想去买东西`)
        //     }
        //     // resolve(`${people}买了番茄， 土豆， 鸡蛋`);
        // }, 3000)
        console.log('constructor')
        if(people == '儿子') {
            // console.log(`${people}买了番茄， 土豆， 鸡蛋`)
            resolve(`${people}买了番茄， 土豆， 鸡蛋`);
        } 
    })
}

function cook(thing) {
    console.log('cook')
    const p = new Promise((resolve, reject) => {
        // setTimeout(() => {
        //     if(thing) {
        //         // console.log(thing)
        //         resolve(`${thing},然后做了番茄炒鸡蛋， 土豆丝`)
        //     } else {
        //         reject('啥也没有')
        //     }
        // }, 1000)
        if(thing) {
            // console.log(thing)
            resolve(`${thing},然后做了番茄炒鸡蛋， 土豆丝`)
        } else {
            reject('啥也没有')
        }
    })
    return p
}

buy('儿子').then(cook).then().then()