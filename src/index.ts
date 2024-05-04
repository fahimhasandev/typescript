// function take string params and will return string
function great(name: string): string {
  return `Hello, ${name}`;
}

console.log(great('Typescript'));

/* Primitive Data types */
//String
let firstName: string = 'Fahim';
firstName = 'bob';
console.log(firstName);

//number
let age: number = 23;
console.log(age);

//boolean
let isPassed: boolean = true;
console.log(isPassed);

/* Array and tuples */
// Array
// String array string []
let scores: string[] = ['a', 'p', 'p', 'l', 'e'];
const totalScore = scores.reduce((accumulator, currentValue) => {
  console.log(currentValue);
  return accumulator + currentValue;
}, '');

// 0 + a
console.log(scores[0]);
console.log(totalScore);

// number [] --> array
let names: string[] = ['Alice', 'Bob', 'Charlie'];
console.log(names);

//Alternative way to declare array
let scores2: Array<number> = [85, 90, 78];
console.log(scores2);

let names2: Array<string> = ['Fahim', 'john'];
console.log(names2);

// tuples - fix array length, then use tuples
let student: [string, number, boolean] = ['alice', 58, true];
console.log(student[0], student[1], student[2]);

