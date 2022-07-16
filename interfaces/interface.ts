// function getFullName(person: {
//     firstName: string, 
//     lastName; string
// }): string {
//     return `${person.firstName} ${person.lastName}`;
// }


interface Person {
    firstName: string, 
    lastName: string, 
    midName?: string, 
    readonly birthday?: Date
}

function getFullName(person: Person): string {
    if (person.midName) {
        return `${person.firstName} ${person.midName} ${person.lastName}`;
    }
    return `${person.firstName} ${person.lastName}`;
}

const perosn: Person = {
    firstName: "Mahta", 
    lastName: "Reza Yazdi",
    birthday: new Date()
}

// function types

interface StringFormat {
    (str: string, isUpper: boolean): string;
}

const format: StringFormat = function(str, isUpper) {
    return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
}

const lowerCase: StringFormat = function(str) {
    return str.toLocaleLowerCase();
}

const upperCase: StringFormat = function(str) {
    return str.toUpperCase();
}

console.log(lowerCase("MAHTA", false));
console.log(upperCase("mahta", true));

// class type

interface Json {
    toJson(): string;
}

class Person10 implements Json {
    constructor(
        private _firstName: string, 
        private _lastName: string
    ) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }

    toJson(): string {
        return JSON.stringify(this);
    }
}

const person10 = new Person10("Mahta", "Reza Yazdi");
console.log(person10.toJson());
console.log(person10);