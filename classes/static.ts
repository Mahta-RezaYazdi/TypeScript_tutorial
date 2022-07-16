class Employee2 {
    static headcount = 0;

    constructor(
        private _firstName: string, 
        private _lastName: string, 
        private _jobTitle: string
    ) {
        this._firstName = _firstName;
        this._lastName = _lastName;
        this._jobTitle = _jobTitle;

        Employee2.headcount++;
    }

    public static getHeadCount() {
        return Employee2.headcount;
    }
}

const mahta = new Employee2("Mahta", "Reza Yazdi", "Developer");
const mehrad = new Employee2("Mehrad", "Rezayazdi", "Network");

console.log(Employee2.getHeadCount());