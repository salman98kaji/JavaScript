// Destructuring in JavaScript is a convenient way to extract values from arrays or properties from objects and assign them to variables in a single statement.

const numbers = [1,2,3,4]
const [a,b,c,d] = numbers
console.log(a)
console.log(b) 

const num = [5,6,7]
const [x, , y] = num
console.log(first)
console.log(third)

const num1 = [8,9]
const [first, , third=10] =num1
console.log(first)
console.log(third)

// Object destructuring allows you to extract properties from an object into variables.
const person = {name:"salman", age:25}
const {name, age} = person
console.log(name)
console.log(age)

// Renaming Variables-You can assign properties to variables with different names:
const person1 = {name:"salman", age:25}
const {name:userName, age:userAge} = person1
console.log(userName)
console.log(userAge)

// You can destructure properties from nested objects:
const person2 = {name: "Fardin",address: {city:"Halhali",zip:799286} }
const {address:{city,zip} } = person
console.log(city)
console.log(zip)

// You can mix array and object destructuring:
const data = {id:1, items:[10,20,30,40] }
const {id, items:[a, , c] } = data
console.log(id)
console.log(a)
console.log(c)

// Destructuring can be used directly in function parameters, which is useful for handling objects or arrays as arguments.
const person3 = { name:"SAlman", age:25 }
const printPerson = ({name,age}) => { //Object Parameter
    console.log(`Name: ${name} and Age: ${age}`)
}
printPerson(person)

const add = ([a,b]) => a+b
console.log(add([14,23]))