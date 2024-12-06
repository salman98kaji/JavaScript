// In JavaScript, function declarations, function expressions, and arrow functions are three common ways to define functions. While they are all used to create functions, they differ in syntax, behavior, and usage.

// A function declaration defines a function with a name. These functions are hoisted, meaning they are available for use throughout their containing scope, even before the declaration.
sayHello("Salman")
function sayHello(name) {
    console.log(`Hello ${name}`)
}

// A function expression defines a function as part of an expression. These functions can be either named or anonymous, and they are not hoisted, meaning they can only be used after their definition.
const greet = function greetFunction(name) {  //name function-useful for debugging
    console.log(`Hello, ${name}`)
}
greet("Rahul")

const greet1 = function(name1){   //Annonymous function- commonly used
    console.log(`Heloo, ${name1}`)
}
greet1("Saheb")

// Arrow functions are a concise way to write functions introduced in ES6. They have a shorter syntax and do not bind their own this, making them ideal for use in callbacks and functional programming.
const greet2 = (name2) => {
    return `Hello, ${name2}`
}
console.log(greet2("Rani"))
// If the function has a single expression, you can omit the curly braces and the return keyword:
const greet3 = name3 => `Hello, ${name3}`
console.log(greet3("Urmi"))
// For functions without parameters, use empty parentheses:
const greet4 = () => `Hello Tipu`
console.log(greet4())
//Consice syntax, no this binding, Arrow functions cannot be used with the new keyword.

// A CLOSURE is function that has access to its own scope, the scope of its outer function and the golbal scope even after the outer function is finished execution. Closures allow functions to "remember" and access their surrounding state.