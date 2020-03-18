/**
 * ['1', '2', '3'].map(parseInt)
 * @param {*} 
 */
q1 = () => {
    return [1, NaN, NaN]
}

/**
 * 什么是防抖和节流？有什么区别？如何实现？
 * @param {*} 
 */
q2 = () => {
    console.log("防抖 在一段时间内，无论触发多少次，已最后一次为准 多用于表单提交")
    const debounce = (time, callback) => {
        var timer
        return (...args) => {
            if(timer) clearTimeout(timer)
            timer = setTimeout(() => {
                callback.apply(this, args)
            })
        }
    }
    console.log("节流 减小操作频率，无论如何触发，都已一定时间间隔来运行 一般用在操作较频繁的事件")
    const throttle = (time, callback) => {
        var flag = true
        return (...args) => {
            if(!flag) {
                return
            }
            flag = false;
            setTimeout(() => {
                callback.apply(this, args)
                flag = true
            }, time)
        }
    }
}


/**
 *
 *介绍下 Set、Map、WeakSet 和 WeakMap 的区别？
 * @param {*} 
 */
q3 = () => {
    console.log('Set: 类似于数组，但是里面的元素都不允许重复，对象使其引用不重复')
    console.log('WeakSet: 类似数组，但是元素只能是对象， 不可迭代，引用失效，元素失效，不用担心内存泄漏')
    console.log('Map: 类似于对象，但是键不限制条件')
    console.log('WeakMap: 类似于对象，key 只能是对象，不可迭代循环')
}

/**
 *
 *介绍下深度优先遍历和广度优先遍历，如何实现？  todo
 * @param {*} 
 */
q4 = () => {
    const obj = {
        'a': {
            'a-a': {
                'a-a-a': 0
            }
        },
        'b': {
            'b-b': {
                'b-b-b': 0
            }
        },
        'c': {
            'c-c': {
                'c-c-c': 0
            }
        }
    }

    function BFS(root) {
        const rootList = []
        rootList.push(root)
        while(rootList.length) {
            const item = rootList.shift()
            // console.log(item.)
        }
    }
}

/**
 *
 *ES5/ES6 的继承除了写法以外还有什么区别？
 * @param {*} 
 */
q5 = () => {
    console.log('class不会变量提升')
    console.log('class 的所有方法绑定在prototype上')
    console.log('必须用new来调用')
    console.log('内部是严格模式的')
}

/**
 *
 * setTimeout、Promise、Async/Await 的区别
 * @param {*} 
 */
q6 = () => {
    console.log('在事件循环中，setTimeout属于宏任务， 另外属于微任务')
}

/**
 *
 * 写出运行结果
 * @param {*} 
 */
q7 = () => {
    async function async1() {
        console.log('async1 start');
        await async2();
        console.log('async1 end');
    }
    async function async2() {
        console.log('async2');
    }
    console.log('script start');
    setTimeout(function() {
        console.log('setTimeout');
    }, 0)
    async1();
    new Promise(function(resolve) {
        console.log('promise1');
        resolve();
    }).then(function() {
        console.log('promise2');
    });
    console.log('script end');

    console.log('首先执行宏任务，在执行微任务，清空微任务之后在执行宏任务队列')
    console.log('settimeout属于宏任务')
    console.log('await之后执行的任务会推到微任务队列中，await的方法会同步执行')
    console.log('遇到异步执行时候，将异步执行的方法推到微任务队列中，在以先进先出的顺序触发')

    // script start
    // async1 start
    // async2
    // promise1
    // script end
    // async1 end
    // promise2
    // setTimeout
}

/**
 *
 * （携程）算法手写题
 *  已知如下数组：
    var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
    编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组
 * @param {*} 
 */
q8 = () => {
    var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10]
    console.log('flat(Infinity)， 深度 无限')
    return [...new Set(list.flat(Infinity))].sort((a, b) => a - b)
}

/**
 *
 *
 * JS 异步解决方案的发展历程以及优缺点。
 * @param {*} 
 */
q9 = () => {
    console.log('callback 利用回调函数来执行 会陷入回调地狱， 不能 return， 耦合性太强 牵一发动全身')
    console.log('Promise 异步使用链式调用，解决回调地狱的问题，但是不好捕获异常，')
    console.log('Generator 可以控制函数的执行 使用next ,但是语义不强')
    console.log('async/await 用同步的方式写异步，可以很好的用try catch 捕获异常，刚好的语义话')
}


/**
 *
 *
 * 情人节福利题，如何实现一个 new
 * @param {*} 
 */
q10 = () => {
    function MyNew(fn, ...args) {
        const obj = {
        }
        obj.__proto__ = fn.prototype
        fn.apply(obj, args)
        return obj
    }

    function Boy(name) {
        this.name = name
        console.log(`新朋友， ${name}`)
    }
    Boy.prototype.say = function() {
        return 'hello!'
    }

    const friend = MyNew(Boy, 'ctf')
    friend.say()
}

/**
 *
 *
 * JS HTTP2多路复用
 * @param {*} 
 */
q11 = () => {
    console.log('在HTTP1.x的时候，是一个TCP链接只能发送一个HTTP请求，')
    console.log('即时使用keep-live,可以使用多次，但是一次也只能同时传输一个请求')
    console.log('HTTP2.x，利用了二进制的传输方式，一个链接中开启多个双向流，一次TCP链接可以同时发送多个HTTP请求，可以极大的增加效率')
}


/**
 *
 *谈谈你对TCP三次握手
 */
q12 = () => {
    console.log('客户端向服务端发送一个同步序列号syn，并且等待响应，自己的状态为SYN_SEND')
    console.log('服务端收到syn,并且向服务端发送一个syn + ack, 进入SYN_RCVD')
    console.log('客户端收到ack, 向服务端再次发送，进入ESTABLISHED状态，服务端接收到之后 也进入ESTABLISHED')
}

/**
 *
 *谈谈你对TCP四次挥手
 */
q13 = () => {
    console.log('客户端向服务端发送一个FIN， 表示已经结束，但是依旧可以接受数据')
    console.log('服务端接受到之后，向客户端发送一个确认包，表示已经收到，但是还没有准备关闭')
    console.log('服务端准备好关闭之后，向客户端发送FIN 请求关闭， 但是服务端还是未关闭状态')
    console.log('客户端接受到之后，向服务端发送确认包，并且关闭客户端链接， 服务端接收到之后，立即关闭')
}


/**
 *
 *判断数组的方法
 *说明区别与拙劣 
 */
q14 = () => {
    const a = [1, 2, 3]

    console.log('每个对象的原型上都有toString方法，都会返回其类型，包括null 与undefined')
    console.log('但是只能判断内置的类型，无法判断自定义类型')
    const f1 = Object.prototype.toString.call(a) == '[object, Array]'

    console.log('判断a的原型链是否能找到对应的Array原型')
    console.log('对于找object 都会返回true')
    const f2 = a instanceof Array
    
    console.log('ES6语法，对于不支持的，要做兼容处理，推荐Object.prototype.toString.call')
    const f3 = Array.isArray(a)

}


/**
 *
 *介绍下重绘和回流（Repaint & Reflow），以及如何进行优化
 *
 */
q15 = () => {
    const a = [1, 2, 3]
    // 回流 重排
    console.log('界面的几何位置信息发生改变，界面缩放等需要浏览器重新排列绘制元素的行为，称为回流')

    // 重绘
    console.log('对于界面只是单纯属性样式进行更改，不改变几何排布的称为重绘')

    // 优化
    console.log('使用文档片段')
    console.log('减少布局信息的读取（getBoundingClientRect），获取布局信息的时候，会刷新队列来保证信息的准确性')
    console.log('减少频繁的Dom读取与处理，尽量使用class控制样式')
    console.log('复杂的动画使用绝对定位')
    console.log('使用transition代替 top')
    console.log('使visibility：hidden代替display: none')
    console.log('css样式层级不要太多，因为css是从右往左解析')
}

/**
 *
 * 介绍下观察者模式和订阅-发布模式的区别，各自适用于什么场景
 *
 */
q17 = () => {
    console.log('订阅-发布模式：需要通过第三方中介者搜集订阅信息并于发布信息相匹配，发布者与订阅者无感知，并且需要中介者触发更新， vue事件通知机制')
    console.log('观察者模式：不需要第三方，当需要更新的时候，观察者会通知所有的订阅者，统一使用同一个方法，vue watch observer')
}

/**
 *
 * 介绍模块化发展历程
 *
 */
q18 = () => {
    console.log('模块化就是将一部分代码按照一定的规则封装起来，内部逻辑私有，只对外部暴露出可以调用的接口')
    console.log('作用是抽离代码，避免变量冲突')

    console.log('最开始是IIFE, 使用自执行函数，aa = (function() {return {data: xxx}})()  aa.data， 避免变量冲突')

    console.log('随后出现了AMD， require.js 诞生, 但是是在执行的时候进行加载，并且会把所有的内容都加载进来，会阻塞加载运行')
    console.log('AMD在定义时就已经加载执行完毕，当引入时就使用相应逻辑。所以体验好，但是加载慢')

    console.log('然后是CMD,在AMD的基础上进行优化，sea.js诞生。就近引用，定义时只下载，不执行，遇到require才按需加载')
    
    console.log('然后common.js作为node的内置模块诞生，模块加载同步，加载完执行，会阻塞 一个值的浅拷贝')
    
    console.log('require.ensure() 方法来实现代码打包分离require.ensure() 是 webpack 特有的，已经被 import() 取代。实现代码分割')

    console.log('import ES6中引入，使用严格模式，不允许被重写，在编译时候就已经引入 一个值的引用')
}