// private, protected, public

// public by default
class Person {
    private firstName: string; 
    private lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Person3 {
    constructor(private firstName: string, private lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person2 = new Person("Mahta", "Reza Yazdi");
const person3 = new Person("Mahta", "Reza Yazdi");

// person2.firstName; error
// person3.firstName; error 