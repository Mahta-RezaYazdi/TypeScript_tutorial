// The following example shows how to declare a variable which has a function type that accepts two numbers and returns a number:


// arrow function, or function expression
let add: (num1: number, num2: number) => number;

add = function(x, y) {
    return x + y;
}

add = (num1, num2) => num1 + num2;


// function declaration
function add2(num1: number, num2: number): number;

function add2(num1: number, num2: number): number {
    return num1 + num2;
}

let add3: (num1: number,num2: number) => number = (num1, num2) => num1 + num2;

function add4(num1: number, num2: number): number {
    return num1 + num2;
}

// infering function types

let add5 = function (x = 0, y = 0) {
    return x + y;
}

const result = add5(1, 3);