// use types as formal parameters

function getRandomElement<T>(items: T[]) : T {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

const numbers = [1, 2, 3, 4, 5];
const names = ["Mahta", "Maedeh", "Kaabeh"];
const people = [{name: "Mahta"}, {name: "Maedeh"}, {name: "Kaabeh"}];

// console.log(getRandomElement<number>(numbers));
// console.log(getRandomElement<string>(names));
// console.log(getRandomElement<{name: string}>(people));


function merge1<U, V>(obj1: U, obj2: V): U & V {
    return {
        ...obj1, 
        ...obj2
    }
}


type Person = {name: string, surname: string};
type Eployee = {jobTitle: string};

console.log(merge1<Person, Eployee>({name: "Mahta", surname: "Rezayazdi"}, {jobTitle: "Developer"}));