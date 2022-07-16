// TypeScript function overloadings allow you to describe the relationship between parameter types and results of a function.

// function overloading

function add7(a: string, b: string): string; 
function add7(a: number, b: number): number; 
function add7(a: string | number, b: string | number): string | number {
    if (typeof a === "string" && typeof b === "string") return a + b;
    if (typeof a === "number" && typeof b === "number") return a + b;

    throw new Error("Arguments must be of type number or string");
}


console.log(add7(2, 2));
console.log(add7("2", "2"));

// function overloading with optinal parameters

function sum(num1: number, num2: number): number; 
function sum(num1: number, num2: number, num3: number): number; 
function sum(num1: number, num2: number, num3?: number): number {
    if (num3) return num1 + num2 + num3;
    return num1 + num2;
}

// method overloading

class Counter {
   private counter = 0;

   count(): number; 
   count(target: number): number[];
   count(target?: number) {
    if (target) {
        let values: number[] = [];
        for (let start = this.counter; start <= target; start++) {
            values.push(start);
        }

        this.counter = target;
        return values;
    }
    return this.counter++;
   }

}

let counter = new Counter();

console.log(counter.count());
console.log(counter.count(20));