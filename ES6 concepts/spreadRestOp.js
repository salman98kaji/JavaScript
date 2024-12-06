// /The spread and rest operators in JavaScript (...) are powerful tools for working with arrays, objects, and function arguments. Although they use the same syntax (...), their purposes differ based on context:

// The spread operator expands elements of an array or properties of an object into individual components.
const arr1 = [1,2,3]
const arr2 = [4,5,6]
const combined = [...arr1, ...arr2]
console.log(combined)  // combine arrays

const original = [7,8,9]
const copy = [...original]
console.log(copy) // the spread operaor creates a shallow copy of an array

const num = [1,2,3]
const updated = [0, ...num, 4]
console.log(updated) //add or replace elements

const person = {name:"nick",age:22}
const updatedUser = {...person, age:25, place:"Delhi"}  
console.log(updatedUser) //add and update object using spread operator

const num1 = [12,13,14]
const sum = (a,b,c) => a+b+c
console.log(sum(...num1)) //spread operator acan pass elements of an array as argumenst of a function

//The rest operator collects multiple elements or properties into a single variable. It is used in array destructuring, object destructuring, and function parameters.
const [first, second, ...rest] =[1,2,3,4,5]
console.log(first)
console.log(...rest)

const person2 = {name:"nick", age:25, address:"Delhi"}
const {name, ...details} = person2
console.log(name)
console.log(details) //rest in objects Collect Remaining Properties

