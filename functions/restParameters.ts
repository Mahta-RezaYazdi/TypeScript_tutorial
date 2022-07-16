// indefinite number of arguments as array

/**
 * Rest Parameter: 
 * 
 * 1. A function has only one rest parameter
 * 2. The rest parameter appears last in the parameter list
 * 3. The type of the rest parameter is array 
 */

function getTotal(...numbers: number[]): number {
    return numbers.reduce((a, e) => a += e, 0);
}

console.log(getTotal(1, 2, 3));
console.log(getTotal())