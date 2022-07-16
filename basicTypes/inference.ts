// type annotation

let counter2: number;
counter2 = 0;

function increament(counter: number): number {
    return counter++;
}

/// type inference
let counter3 = 0;

function increament2(counter = 0) {
    return counter++;
}

// inference & annotation
function increament3(counter: number) {
    return counter++;
}

// type inference
// let items: number[];
let items = [1, 2, 3, null];

// items.push(undefined);  error
// items.push("string");  error

items.push(null);
items.push(10);
console.log(items);


let arr = [new Date(), new RegExp(''), new Date(), new Date()];

// arr.push(null); error

console.log(arr);


// type annotation
let amount:number; 
amount = 99;

let isDebit: boolean;
isDebit = true; 

// type inference
let amount2 = 99;
let isDebit2 = true;


// annotation
function multiply(a: number, b?:number): number;
function multiply(a: number, b = 10) {
    return a * b;
}

type Transaction = {amount: number, isDebit: boolean};
// type TotalExpenses = (...transactions: Transaction[]) => number;

const totalExpenses = (...ts: Transaction[]) => {
    return ts.filter(e => e.isDebit).reduce((a, e) => a + e.amount, 0);
}

// annotation
const t1: Transaction = {amount: 1, isDebit: true};
const t2: Transaction = {amount: 2, isDebit: false};
const t3: Transaction = {amount: 4, isDebit: true};

// inference
const t4 = {amount: 5, isDebit: false};

console.log(totalExpenses(t1, t2, t3));


/**
 * In practice, you should always use the type inference as much as possible. 
 * 
 * And you use the type annotation in the folowing cases:
 * 
 * When you declare a variable and assign it a value later.
 * When you want a variable that can’t be inferred.
 * When a function returns the any type and you need to clarify the value.
 */

/**
 * Type inference occurs when you initialize variables, set parameter default values, and determine function return types.
 * TypeScript uses the best common type algorithm to select the best candidate types that are compatible with all variables.
 * TypeScript also uses contextual typing to infer types of variables based on the locations of the variables.
 */

// type annotation
let myName2: string; 
myName2 = "Mahta";

// type inference
let myName3 = "Mahta";
let grades2 = [100, "A+"];
function test(age = 0) {
    return age;
}

// contextual typing: the type is implied by its location
document.addEventListener('click', event => console.log(event.button));