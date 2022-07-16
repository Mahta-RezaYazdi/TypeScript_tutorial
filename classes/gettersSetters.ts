// to avoid repeating the check you can use getter and setter

class Person5 {
    public firstName!: string;
    public lastName!: string;
    public age!: number;

}

class Person6 {
    private _firstName: string; 
    private _lastName: string; 
    private _age: number;

    constructor(firstName: string, lastName: string, age: number) {
        this._firstName = firstName;
        this._lastName = lastName; 
        this._age = age;
    }

    public get firstName() {
        return this._firstName;
    }

    public set firstName(firsName: string) {
        if (!firsName) throw new Error("Invalid first name");
        this._firstName = firsName;
    }

    public get lastName() {
        return this._lastName;
    }

    public set lastName(lastName: string) {
        if (!lastName) throw new Error("Invalid last name");
        this._lastName = lastName;
    }

    public get age() {
        return this._age;
    }

    public set age(age: number) {
        if (age <= 0 || age >= 200) {
            throw new Error("Invalid age");
        }

        this._age = age;
    }

    public get fullName() {
        return `${this._firstName} ${this._lastName}`;
    }

    public set fullName(fullName: string) {
        const parts = fullName.split(' ');
        if (parts.length != 2) throw new Error("Invalid name format");
        this._firstName = parts[0];
        this._lastName = parts[1];
    }
}


const person6 = new Person6("Mahta", "Reza Yazdi", 27);
person6.age = 28;
console.log(person6.fullName);
console.log(person6.age);
// person6.age = 0; throws an error: Invalid age