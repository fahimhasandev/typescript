// function functionName(parameterName: type, para2: type): returnType {
//   //logic
// }

function greet(name: string) {
  return `Hello, ${name}`;
}

console.log(greet('John'));

//Function type signature
let greet2: (name: string) => string;

greet2 = function (name: string): string {
  return `Hi, ${name}`;
};
console.log(greet2('Bob'));

// optional parameters
function defaultParams(firstName: string, lastName: string, title?: string) {
  console.log(`Hi, I am ${firstName} ${lastName}. I am a ${title}`);
}
defaultParams('fahim', 'hasan');

//default params
function welcomeMessage(name: string = 'Guest') {
  return `welcome ${name} !`;
}
console.log(welcomeMessage());
console.log(welcomeMessage('Fahim'));

//return types
function addNum(a: number, b: number): number {
  return a + b;
}

// never return type
function throwError(): never {
    throw new Error('Something went wrong!')
}

//throwError()


