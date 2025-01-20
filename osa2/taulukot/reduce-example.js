// reduce

import { students } from "./data.js";

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((total, number) => total + number, 0);

const words = ['one', 'two', 'three', 'four', 'five'];

const counter = words.reduce((result, word) => result + ' ' + word, '');

const studentsTotalGrade = students.reduce((total, student) => total + student.grade, 0);
const studentsAverageGrade = studentsTotalGrade / students.length;

console.log('sum:', sum);
console.log('counter:', counter);
console.log('Total grade of all students:', studentsTotalGrade);
console.log('Students average grade:', studentsAverageGrade);