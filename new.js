function Person(name) {
    this.name = name;
}

Person.prototype.say = function () {
    console.log(`${this.name}, hello!`)
}

function newObject(fn, ...args) {
    const obj = new Object();
    obj.__proto__ = fn.prototype;
    const newObject = fn.apply(obj, args);
    return typeof newObject == 'object' ?  newObject : obj;
}

// aa = newObject(Person, 'wsy');
// aa.say()

const Child = Person
Child.prototype.say = function() {
    console.log(`${this.name}, change!`)
}

aa = newObject(Person, 'wsy');
aa.say()

// aa = new Person('wsy')
// aa.say()