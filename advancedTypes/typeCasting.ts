// as, <>

// the query selector will return an Element
// const input: HTMLInputElement = document.querySelector("input[type='text']");
// const input = document.querySelector("input[type='text']") as HTMLInputElement;
// const input = document.querySelector("input[type='text']");
const input = <HTMLInputElement>document.querySelector("input[type='text']");

console.log(input);
console.log(typeof input);

const test = (input as HTMLInputElement).value;
console.log(test);


class A {
    public a = "calss A";
}

class B  {
    public b = "class B";
}

const b = new B();

const a: A = b as unknown as A;
const c = <unknown>b as A;

// console.log(a instanceof B);
// console.log(a);

class C {
    public c = "Class C";
}

class D extends C {
    public d = "Class D";
}


function getSomeObject(): C {
    const d = new D();
    return d;
}

const d = getSomeObject();
// console.log(d.d); error
console.log((d as D).d);


