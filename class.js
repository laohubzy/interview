// ES5实现
// 第一种 原型链继承
function SuperType1() {
    this.name = 'wsy'
}

SuperType1.prototype.getName = function() {
    return this.name
}


function SubType1() {
    this.name = 'ctf'

}


SubType1.prototype = new SuperType1()

SubType1.prototype.getName = function() {
    return this.age
}


const sup1 = new SuperType1()
const sub1 = new SubType1()

// console.log(sup1.getName())
// console.log(sub1.getName())


// 第二种 构造函数继承
// 无法获取到原型链上的方法 只有构造方法有
function SuperType2() {
    this.name = 'wsy'
    this.getName = function() {
        return this.name
    }
}

SuperType2.prototype.getBoyFirend = function() {
    return 'ctf'
}

function SubType2() {
    SuperType2.call(this)
}

const sub2 = new SubType2()

// console.log(sub2.getName())

// 第三种 组合继承
function SuperType3() {
    this.name = 'wsy'
    this.getName = function() {
        return this.name
    }
}

SuperType3.prototype.getBoyFirend = function() {
    return 'ctf'
}

function SubType3() {
    SuperType3.call(this)
    // this.name = 'ctf'
}

SubType3.prototype = new SuperType3()

const sub3 = new SubType3()
// console.log(sub3.getName())

// ES6

class SuperType4 {
    name;
    constructor() {
        this.name = 'wsy'
    }
    getName = () => {
        return this.name
    }

    static findName() {
        return 'find'
    }
}
const super4 = new SuperType4()

// console.log(super4.getName())
// console.log(SuperType4.findName())

class SubType4 extends SuperType4 {
    constructor() {
        super()
        this.name = 'ctf'
    }
}

const sub4 = new SubType4()
console.log(sub4.getName())