const { sum, avg } = require('./statistics')

const numbers = new Array(40).fill().map((a, i) => a = i).sort(() => Math.random() - 0.5)
const sumOfNumbers = sum(numbers)
const numbersAverage = avg(numbers)

console.log(`Sum of ${numbers.length} random generated numbers is ${sumOfNumbers}.`)
console.log(`Average of ${numbers.length} random generated numbers is ${numbersAverage}.`)