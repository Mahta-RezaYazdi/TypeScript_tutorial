import StringValidator, {name}  from "./validator";
// import * from "./validator";

class EmailValidator implements StringValidator {
    isValid(s: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(s);
    }
}

export default EmailValidator;
export {StringValidator};

// export * from "./validator";
// export * from "./emailValidator";

console.log(name);
console.log("Email Validator");
console.log(module);