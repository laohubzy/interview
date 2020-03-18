function instanceOf(left, right) {
    var O = right.prototype; // 取 R 的显示原型
    while(true) {
        if (left === O) return true
        if (left === null) return false
        left = left.__proto__
    }
}

 console.log(instanceOf([], Array))
 console.log(typeof Array)

