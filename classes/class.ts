
// JavaScript
// class Person {
//     firsName;
//     lastName;

//     constructor(firstName, lastName) {
//         this.firsName = firstName; 
//         this.lastName = lastName;
//     } 

//     getFullName() {
//         return `${this.firsName} ${this.lastName}`;
//     }
// }

// TypeScript
class Person2 {
    firstName: string; 
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

const person = new Person2("Mahta", "Reza Yazdi");

console.log(person.getFullName());