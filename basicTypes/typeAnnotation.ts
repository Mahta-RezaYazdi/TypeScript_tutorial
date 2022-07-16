let counter: number = 0;
// counter = "hello"; Compile error

const myName: string = "Mahta";
const isActive: boolean = true; 

// Array
const friends: string[] = ["Maedeh", "Kaabeh"];

// Objects
let person: {
    name: string, 
    age: number
}

person = {
    name: "Maedeh", 
    age: 27
}

// Function arguments and return types
let greeting: (name: string) => string;

greeting = (name: string): string => {
    return `Welcome ${name}`;
}