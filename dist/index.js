"use strict";
// function take string params and will return string
function great(name) {
    return `Hello, ${name}`;
}
console.log(great('Typescript'));
/* Primitive Data types */
//String
let firstName = 'Fahim';
firstName = 'bob';
console.log(firstName);
//number
let age = 23;
console.log(age);
//boolean
let isPassed = true;
console.log(isPassed);
/* Array and tuples */
// Array
// String array string []
let scores = ['a', 'p', 'p', 'l', 'e'];
const totalScore = scores.reduce((accumulator, currentValue) => {
    console.log(currentValue);
    return accumulator + currentValue;
}, '');
// 0 + a
console.log(scores[0]);
console.log(totalScore);
// number [] --> array
let names = ['Alice', 'Bob', 'Charlie'];
console.log(names);
//Alternative way to declare array
let scores2 = [85, 90, 78];
console.log(scores2);
let names2 = ['Fahim', 'john'];
console.log(names2);
// tuples - fix array length, then use tuples
let student = ['alice', 58, true];
console.log(student[0], student[1], student[2]);
//any - not recommendated.
let randonValue = 'hello';
randonValue = false;
console.log(randonValue);
// unknow type - safety checking
let value = 'World';
//type safetly checking
if (typeof value === 'string') {
    console.log(value.toUpperCase());
}
// void type - function has no return value
function sayHello(message) {
    console.log(message);
}
sayHello('Fahim');
// null and undefined
let nothing = null;
console.log(nothing);
//undefined
let notAssigned;
console.log(notAssigned);
const student1 = {
    name: 'Fahim',
    age: 34,
    isEnrolled: false,
    courses: ['js', 'python'],
    scores: [89, 67],
    info: ['Faim', 34, false],
};
console.log(student1);
function displayStudent(student) {
}
