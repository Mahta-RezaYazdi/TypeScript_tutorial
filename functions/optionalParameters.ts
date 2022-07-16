/**
 * In TypeScript, the compiler checks every function call and issues an error in the following cases:
 * 
 * 1. The number of arguments is different from the number of parameters specified in the function.
 * 2. Or the types of arguments are not compatible with the types of function parameters.
 */



// Point: the optional argument must be followed by the required arguments
function multiply(a: number, b: number, c?: number): number {

    // check if the optional argument is passed to the function or not
    if (c !== undefined) {
        return a * b * c;
    }

    return a * b;
}