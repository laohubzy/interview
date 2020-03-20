function buy(people) {
    return new Promise((resolve,rejec) => {
        setTimeout(() => {
            if(people == '儿子') {
                // console.log(`${people}买了番茄， 土豆， 鸡蛋`)
                resolve(`${people}买了番茄， 土豆， 鸡蛋`);
            } else {
                // rejec(`${people}不想去买东西`)
            }
            // resolve(`${people}买了番茄， 土豆， 鸡蛋`);
        }, 3000)
    })
}

function cook(thing) {
    const p = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(thing) {
                // console.log(thing)
                resolve(`${thing},然后做了番茄炒鸡蛋， 土豆丝`)
            } else {
                reject('啥也没有')
            }
        }, 1000)
    })
    return p
}

// buy('父亲').then(cook).then(res => {
//     console.log(res)
// })
// .catch(e => {
//     console.log(e)
// }).finally(e => {
//     console.log('lalala')
// })



// all  只要有一个reject 就走catch
// 按顺序执行 前一个执行完 再执行下一个  返回的是与执行顺序相同的结果
// 传入的是一个promise 方法   
// buy('儿子') 会return 一个promise
// const all = Promise.all([buy('儿子'), cook('da')]).then(res => {
//     console.log(res)
// }).catch(err => {
//     console.log(err)
// })


// race 是执行最快的先返回
// const race = Promise.race([buy('儿子'), cook('da')]).then(res => {
//     console.log(res)
// }).catch(err => {
//     console.log(err)
// })


// buy('父亲').then(cook).
// then(res => {
//     console.log(res)
// }).
// catch(e => {
//     console.log(e)
// })
