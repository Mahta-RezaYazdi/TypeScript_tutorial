// if you don't use the export keyword, the validator interface is private in the validator.ts module, 
// therefore, it cannot be used by other modules

// module is a file that exports its own code
export default interface StringValidator {
    isValid(s: string): boolean;
}

// const name: "Validator";
export const name = "Validator";

// export { 
//     name 
// };

// export const name = "Validator"

console.log("String Validator");
console.log(module);

