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
 *介绍下深度优先遍历和广度优先遍历，如何实现？
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