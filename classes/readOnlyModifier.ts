// private, portected, public
// readonly: properties become immutable

class Person4 {
    public readonly birthdate: Date;

    constructor(birthdate: Date) {
        this.birthdate = birthdate;
    }

    // constructor(readonly birthdate: Date) {
    //     this.birthdate = birthdate;
    // }
}



const person4 = new Person4(new Date());
// person4.birthdate = new Date(); error