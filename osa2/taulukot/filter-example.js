// filter

const ages = [32, 33, 16, 40, 2, 19];

const adults = ages.filter((age) => {
    return age >= 18;
});

// function checkAdult(age) {
//     return age >= 18;
// }

console.log('adults', adults);


const evenNUmbers = ages.filter((age) => {
    return age % 2 === 0;
});

console.log('evenNumbers', evenNUmbers);


const students = [
    { name: 'John', grade: 20 },
    { name: 'Jane', grade: 85 },
    { name: 'Jon', grade: 79 },
    { name: 'Jen', grade: 92 },
    { name: 'Jin', grade: 45 },
    { name: 'Jen', grade: 65 },
    { name: 'Jen', grade: 100 }
];

const topStudents = students.filter((student) => {
    return student.grade >= 85;
}
);

console.log('topStudents', topStudents);

// import { students } from './data.js'

// const grades = [45, 78, 92, 33, 56, 89, 73, 21, 67, 88]
// const topGrades = grades.filter((grade) => {
//     return grade >= 90
// })

// const lowGrades = grades.filter(grade => grade < 40)

// const middleGrades = grades.filter(getMiddleGrades)

// function getMiddleGrades(grade) {
//     return grade >= 40 && grade < 90
// }

// const underTwentyFour = students.filter(student => student.age < 24)


// console.log(topGrades) // [92, 89]
// console.log(lowGrades) // [33, 21]
// console.log(middleGrades) // [45, 78, 56, 73, 67, 88]
// console.log(underTwentyFour); // [ { id: 2, firstNAme: 'Jane', lastName: 'Doe', age: 18, grade: 58 }, { id: 5, firstNAme: 'John', lastName: 'Johnson', age: 19, grade: 81 } ]