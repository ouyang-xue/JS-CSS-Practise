function createNew() {
    let obj = {};
    let constructor = [].shift.call(arguments);

    obj.__proto__ = constructor.prototype;
    let result = constructor.apply(obj, arguments);

    return typeof result === 'object' ? result : obj;
}
function Person(name, age) {
    this.name = name;
    this.age = age;
}
let p = createNew(Person, 'zs', 23);
console.log(p.name);
