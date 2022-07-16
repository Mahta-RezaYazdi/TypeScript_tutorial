abstract class Employee3 {
    constructor(
        private _firstName: string, 
        private _lastName: string, 
        private _jobTitle: string
    ) {

    }

    abstract getSalary(): number; 

    public get fullName(): string {
        return `${this._firstName} ${this._lastName}`;
    }

    public get compensationStatement(): string {
        return `${this.fullName} makes ${this.getSalary()} per month`;
    }
}

class fullTimeEmployee extends Employee3 {
    constructor (
        firstName: string, 
        lastName: string, 
        jobTitle: string, 
        private _salary: number
    ) {
        super(firstName, lastName, jobTitle);
        this._salary = _salary;
    }

    getSalary(): number {
        return this._salary;
    }
}