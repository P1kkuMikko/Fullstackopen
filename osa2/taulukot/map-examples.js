// map
import { students } from './data.js'


const numbers = [1, 2, 3, 4, 5]

const doubled = numbers.map(number => number * 2)

const fullNames = students.map(student => `${student.firstNAme} ${student.lastName}`)


console.log(fullNames);
console.log(doubled) // [2, 4, 6, 8, 10]