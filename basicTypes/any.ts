// Note that to disable implicit typing to the any type, you change the noImplicitAny option in the tsconfig.json file to true.

// any, void, unknown, never


// void: the function returns nothing
function sayHi(): void {
    console.log("hi");
}


// any: turn off typescript
// avoid using any
let any: any;
any = "string";
any = 2; 
console.log(any);


// never: something that will never happen
// the function that never ends
function error(msg: string): never {
    throw new Error(msg);
}

// The never type is a type that contains no values. 
// You cannot assign any value to a variable with a never type.
// Typically, you use the never type to represent the return type of a function that always throws an error
// throw new Error("never");

function reject(): never {
    return error("Rejected");
}

// you have a function expression that contains an indefinite loop, its return type is also the never type;

function forever(): never {
    while(true) {
        console.log("never ending");
    }
}


// unkown: 
// let unknown: unknown;
// unknown = "known";
// unknown = 10; 

// console.log(typeof unknown as string);

// const txt: string = unknown; compile error

// type assertion
// ?????????????????????????????????????????????????????????????
// const txt: string = (unknown as string);
// console.log(typeof txt);
// console.log(typeof unknown as string);

let number = 10; 
let number2: string = `${number}`;