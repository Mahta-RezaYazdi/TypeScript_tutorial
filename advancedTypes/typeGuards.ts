/**
 * Type Guard
 * 
 * 1. typeof
 * 2. instanceof
 * 3. in
 * 4. user defined
 */

class Customer2 {
    isCreditAllowed(): boolean {
        // ...
        return true;
    }
}

class Supplier2 {
    isInShortList(): boolean {
        // ...
        return true;
    }
}

type BusinessPartner2 = Customer2 | Supplier2;

function signContract2(partner: BusinessPartner2) : string {
    let message: string = "";
    if (partner instanceof Customer2) {
        message = partner.isCreditAllowed() ? 'Sign a new contract with the customer2' : 'Credit issue';
    }

    if (partner instanceof Supplier2) {
        message = partner.isInShortList() ? 'Sign a new contract the supplier2' : 'Need to evaluate further';
    }

    return message;
}


// function signContract(partner: BusinessPartner) : string {
//     let message: string;
//     if (partner instanceof Customer2) {
//         message = partner.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit issue';
//     } else {
//         // must be Supplier
//         message = partner.isInShortList() ? 'Sign a new contract with the supplier' : 'Need to evaluate further';
//     }
//     return message;
// }


// function signContract(partner: BusinessPartner) : string {
//     let message: string;
//     if ('isCreditAllowed' in partner) {
//         message = partner.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit issue';
//     } else {
//         // must be Supplier
//         message = partner.isInShortList() ? 'Sign a new contract the supplier ' : 'Need to evaluate further';
//     }
//     return message;
// }

// user defined type guard

function isCustomer(partner: BusinessPartner2): partner is Customer2 {
    return partner instanceof Customer2;
}

function signContract(partner: BusinessPartner2): string {
    let message: string = "";
    if (isCustomer(partner)) {
        message = partner.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit issue';
    } else {
        message = partner.isInShortList() ? 'Sign a new contract with the supplier' : 'Need to evaluate further';
    }

    return message;
}

const partner1 = new Customer2();
console.log(partner1 instanceof Customer2);


class E {
    public e = "Class E";
}

class F extends E {
    public f = "Class F";
}

function learnGaurdsEdgeCases(input: any): string {
    if (input instanceof E) return input.e;
    else return input.f;

}

console.log(learnGaurdsEdgeCases("hi"));