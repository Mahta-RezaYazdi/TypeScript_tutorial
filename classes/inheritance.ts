class Person9 {
    constructor (
        private _firstName: string, 
        private _lastName: string
    ) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }

    public get fullname(): string {
        return `${this._firstName} ${this._lastName}`;
    }

    public describe(): string {
        return `this is ${this.fullname}.`;
    }
}

class Employee extends Person9 {
    constructor (
        firstName: string, 
        lastName: string, 
        private _jobTitle: string
    ) {
        super(firstName, lastName);
        this._jobTitle = _jobTitle;
    }

    public describe(): string {
        return super.describe() + ` I am a ${this._jobTitle}`;
    }
}

const employee = new Employee("Mahta", "Reza Yazdi", "Fullstack Developer");
console.log(employee.fullname);

// Method overriding

console.log(employee.describe());