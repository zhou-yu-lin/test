/* 构造函数的工作原理
 创建一个新的空对象。
 将构造函数中的 this 绑定到这个新对象。
 执行构造函数的代码，初始化新对象的属性和方法。
 返回这个新对象。
 */
/**
 * 在 JavaScript 中，构造函数是一种用于创建和初始化对象的特殊函数。
 * 它通常与 new 关键字一起使用，用来创建一个新实例并为其设置属性和方法。
 * 基本语法
 */
function ConstructorName() {
    this.property = value;
    this.method = function() {
        console.log("This is a method.");
    };
}
/**
 * 使用构造函数创建对象
 */
function Person(name, age){
    this.name = name;
    this.age = age;
    this.greet = function(){
        console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.")
    }
}
/** 
 *使用 new 创建一个 Person 对象 
 */ 
const person1 = new Person("John", 30);
person1.greet();
const person2 = new Person("Alice", 25);
person2.greet();

/**
 *构造函数的继承
 * 构造函数可以通过原型链继承来创建继承关系
 */
function Aniaml(name){
    this.name = name;
}
Aniaml.prototype.sayHello = ()=>{
    console.log("Hello, my name is " + this.name);
}
/**
 * Dog 构造函数，用于创建 Dog 对象。
 * 该函数继承自 Animal 类，并添加了 breed 属性。
 * 
 * @param {string} name - 狗的名字，继承自 Animal 类。
 * @param {string} breed - 狗的品种，作为 Dog 类的特有属性。
 */
function Dog(name, breed) {
    // 调用 Animal 构造函数，继承其属性
    Aniaml.call(this, name);
    
    // 设置 Dog 类的特有属性 breed
    this.breed = breed;
}
Dog.prototype = Object.create(Aniaml.prototype);// 继承 Animal 的方法
Dog.prototype.constructor = Dog;

const dog = new Dog("Buddy","Golden Retriever");
dog.sayHello();

class Personzyl {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
const person3 = new Personzyl("ZhouYuLin", 21);
person3.greet();