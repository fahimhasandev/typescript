"use strict";
// function functionName(parameterName: type, para2: type): returnType {
//   //logic
// }
function greet(name) {
    return `Hello, ${name}`;
}
console.log(greet('John'));
//Function type signature
let greet2;
greet2 = function (name) {
    return `Hi, ${name}`;
};
console.log(greet2('Bob'));
// optional parameters
function defaultParams(firstName, lastName, title) {
    console.log(`Hi, I am ${firstName} ${lastName}. I am a ${title}`);
}
defaultParams('fahim', 'hasan');
//default params
function welcomeMessage(name = 'Guest') {
    return `welcome ${name} !`;
}
console.log(welcomeMessage());
console.log(welcomeMessage('Fahim'));
//return types
function addNum(a, b) {
    return a + b;
}
// never return type
function throwError() {
    throw new Error('Something went wrong!');
}
//throwError()
