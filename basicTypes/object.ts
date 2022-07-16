/**
 * The object type represents all non-primitive values while the Object type describes the functionality of all objects.
 * For example, the Object type has the toString() and valueOf() methods that can be accessible by any object.
 * 
 * The TypeScript object type represents any value that is not a primitive value.
 * The Object type, however, describes functionality that available on all objects.
 * The empty type {} refers to an object that has no property on its own.
 */

// ***
let employee: object;

employee = {
    name: "Ted", 
    surname: "Mosby", 
    age: 25, 
    jobTitle: "Web Developer"
}


// ***
let employee2: {
    name: string, 
    surname: string, 
    age: number, 
    jobTitle: string
};

employee2 = {
    name: "Ted", 
    surname: "Mosby", 
    age: 25, 
    jobTitle: "Web Developer"
}


// ***
const employee3: {
    name: string, 
    surname: string, 
    age: number, 
    jobTitle: string
} = {
    name: "Ted", 
    surname: "Mosby", 
    age: 25, 
    jobTitle: "Web Developer"
}

// ***
const student: {} = {};
// student.name = "Ted Mosby"; Compile error

console.log(student);``

