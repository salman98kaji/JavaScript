// Array method in Javascript provides a powerfull way to manipulate, transform and access data in arrays. eg; map, filter, reduce, forEach and find.

// map = creates a new array by applying a function to each element in the original array. Doesnot modify the original array and returns a new array of the same length.
const numbers = [1,2,3,4]
const squareNum = numbers.map(num => num*num)
console.log(squareNum)

// filter = creates a new array with only the elements that passes the condition (returns true). Doesnot modify the array and returns a new array with the subset of the original elements.
const numbers1 = [1,2,3,4,5,6,7,8]
const evenNum = numbers1.filter(num => num % 2 == 0) 
console.log(evenNum)

// reduce = reduces the array to a single value by applying a function repeatedly to each element and an accumulator. Requires an initial vaakue for the accumulator.
const sum = numbers1.reduce((acc, num) => acc+num, 0)
console.log(sum)

const numbers2 = [12,13,10,4,14]
const max = numbers2.reduce((acc,num) => (num > acc ? num : acc), numbers2[0])
console.log(max)

// forEach = executes a function each element in the array. Commonly used for side effects, like logging or modifying something external.
numbers1.forEach(num => console.log(num*2))

// find = returns the first element of the array which satisfies a condition. Stops searching once it finds the match.
const nums = [1,3,5,2]
const even = nums.find(num => num % 2 ==0 )
console.log(even)