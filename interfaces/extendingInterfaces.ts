interface Mailable {
    send(email: string): boolean;
    queue(email: string): boolean;
}

interface FutureMailable extends Mailable {
    later(email: string, after: number): boolean;
}

class Mail implements FutureMailable {
    constructor(public email: string, public after: number) {
        this.email = email;
        this.after = after;
    }
    later(email: string, after: number): boolean {
        console.log(`Send email to ${email} in ${after} ms.`);
        return true;
    }
    send(email: string): boolean {
        console.log(`Sent email to ${email} after ${this.after} ms. `);
        return true;
    }
    queue(email: string): boolean {
        console.log(`Queue an email to ${email}.`);
        return true;
    }
}

/**
 * TypeScript allows an interface to extend a class. 
 * In this case, the interface inherits the properties and methods of the class. 
 * Also, the interface can inherit the private and protected members of the class, not just the public members.
 * It means that when an interface extends a class with private or protected members, the interface can only be 
 * implemented by that class or subclasses of that class from which the interface extends.
 * 
 * By doing this, you restrict the usage of the interface to only class or subclasses of the class from which 
 * the interface extends. If you attempt to implement the interface from a class that is not a subclass of 
 * the class that the interface inherited, you’ll get an error. 
 */

 class Control {
    private state: boolean;
}

interface StatefulControl extends Control {
    enable(): void
}

class Button extends Control implements StatefulControl {
    enable() { }
}
class TextBox extends Control implements StatefulControl {
    enable() { }
}
class Label extends Control { }


// Error: cannot implement
// class Chart implements StatefulControl {
//     enable() { }

// }