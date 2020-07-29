// function Person(name) {
//     this.name = name;
// }

// Person.prototype.say = function () {
//     console.log(`${this.name}, hello!`)
// }

// function newObject(fn, ...args) {
//     const obj = new Object();
//     obj.__proto__ = fn.prototype;
//     const newObject = fn.apply(obj, args);
//     return typeof newObject == 'object' ?  newObject : obj;
// }

// // aa = newObject(Person, 'wsy');
// // aa.say()

// const Child = Person
// Child.prototype.say = function() {
//     console.log(`${this.name}, change!`)
// }

// aa = newObject(Person, 'wsy');
// aa.say()

// // aa = new Person('wsy')
// // aa.say()


function Animal(name) {
    this.name = name
}

Animal.prototype.say = function() {
    console.log('my name is ' + this.name)
}

function New(constructor, ...arg) {
    const obj = {}
    obj.__proto__ = constructor.prototype
    const newObject = constructor.apply(obj, arg)
    return typeof newObject == 'object' ?  newObject : obj;
}

// const cat = New(Animal, 'cat')
// cat.say()
const Cat = Animal
const dog = New(Animal, 'dog')
Cat.prototype.say = function() {
    console.log('lalal', this.name)
}

const cat = New(Cat, 'cat')
cat.say()
dog.say()


