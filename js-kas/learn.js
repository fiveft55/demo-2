// Hello world: following free-code-camps video
// console.log("Hello world!")

// variables
// var firstName = 'src', secName = 'alt' 
// console.log(firstName, secName)

// Const
// const D_NAME = 'src'
// console.log(D_NAME)

// Data types
// let favFruit = 'apple'
// let favDrink = "water" // strings

// let noOfEnem = 12 // num
// let bigNUM = 1021313131331n // bigint
// let pi = 3.14 // float

// let answer = true // boolean
// let favColor; // undefined

// object dt, reference types
// let course = {
//     name: "Js for beginner",
//     hours: 3
// }

// console.log(course)
// console.log(course.name)
// console.log(course['hours'])

// let propt = 'hours'
// course['hours'] = 2
// console.log(course[propt])

// Arrays
// let prodColors = ['blue', 'red']

// prodColors[0] = prodColors[1]
// prodColors[1] = 'blue'

// console.log(prodColors)

// functions: 
// function sayHi(userWord) {
//     console.log("Pc says "+ userWord)
// }

// sayHi("Hello World!")

// function sum(num1, num2){
//     return num1 + num2
// }
// console.log(sum(2, 3))

// operators: -, +, *, /, %, **(pow)

// num1 = 10
// num2 = String(num1)
// console.log( typeof num2 )

// Ternary Operator: [let varValue = var1 >= var2? true : false;]
// let pts = 110
// const customerType = pts >= 100? 'gold': 'silver';

// console.log(customerType)

// logical operators: and &&, or ||, ! not, ??

// for-in loop
// const course = {
    //     name: 'js for starters',
    //     duration: 3,
    //     sections: 7
// }


// for (const key in course)
//     console.log(course[key])

// for-of loop
// numArray = [1,2,3,4,5]
// for (let elem of numArray) console.log(elem)
    
// wordArry = 'abcde'
// for (let elex of wordArry) console.log(elex)

// exe: max-min num

// function maxNum(num1, num2) {
//     return num1 >= num2 ? num1 : num2
// }
// console.log(maxNum(2, 5))

// 1:31: fizbuz

// Object literals: state & behaviour: function in an object,aka method

// const dog = {
//     name: 'Max',
//     breed: 'Pug',
//     age: 5,
//     weight: 12,
//     eat: function() {
//         console.log('Chomp')
//     },
//     bark() {
//         console.log('Woof')
//     }
// }

// function getDog(name, breed, age, weight) {
//     return {
//         name,
//         breed,
//         age,
//         weight,
//         eat() {
//             console.log('Chomp')
//         },
//         bark() {
//             console.log('Woof')
//         }
//     }
// }

// const anotherDog = getDog('Marley', 'Chocolate lab', 3, 60)
// console.log(anotherDog)

// Constructor Functions
// function Dog(name, breed, age, weight) {
//     // this = {}
    
//     // add properties
//     this.name = name
//     this.breed = breed
//     this.age = age
//     this.weight = weight

//     this.eat = function() {
//         console.log(this.name + ': Chomp!')
//     }
//     this.bark = function(){
//         console.log(this.name + ': Woof!')
//     }

//     // return this;
// }

// const anotherDog = new Dog('Marley', 'Lab', 3, 60)
// console.log(anotherDog)

// Objs are dynamic
// const person = {
//     name: 'Steve'
// }
// // console.log(person)
// person.favFood = 'chips'
// person.favDrink = 'fanta'
// delete person.favFood
// // console.log(person)

// person.eat = function() {
//     console.log('start eating')
// }
// person.eat()

// Constructor Prop
// const person = {
//     name: 'Steve'
// }
// console.log( person.constructor )

// let newObj = {} // or u can use the below one, they->same
// let newObj = new Object();

// new String();
// new Boolean(); // contructor property demo

// Func() as objects
// function add(num1, num2) {
//     return num1 + num2
// }
// const n = add
// console.log(n(2, 2))

// function Programmer(name) {
//     this.name = name
//     this.wcode = function () {
//         console.log("Code in Js")
//     }
// }
// console.log(Programmer.length)
// console.log(Programmer.constructor)

// const Programmer = new Function('name', `
//     this.name = name;
//     this.wcode = function () {console.log('code in js')};
// `);

// const newProgrammer = new Programmer('Steve')
// newProgrammer.wcode();

// value vs reference dtypes
// let a = 10
// let b = a
// a = 20
// console.log(a)
// console.log(b)

// let a = {value: 20}
// let b = a

// a.value = 100
// Object.assign(b,a)
// console.log(a)
// console.log(b)

// enum props of an obj
// let num = [1,2,3,4,5]
// for (const elem of num) {
//     console.log(elem)
// }

// const dog = {
//     name: 'max',
//     age: 5,
//     eyColor: 'blue'
// }
// // for (const key in dog) console.log(dog[key])

// const keys = Object.keys(dog) // enum the for...in loop as array
// // console.log(keys)

// const values = Object.values(dog)
// // console.log(values)

// const entries = Object.entries(dog)
// console.log(entries)

// for (const key of Object.keys(dog)) {
//     console.log(key)
// }

// Cloning an obj
// let a = {value: 20}
// let b = {}
// Object.assign(b,a)
// a.value = 100

// console.log(a)
// console.log(b)

// using spread operator to clone indipendent objs
// ...var --> Object.assign(b,a)

// let a = {value: 20}
// let b = { ...a }

// a.value = 10
// console.log(a)
// console.log(b)

// String Methods: 2:3:20



