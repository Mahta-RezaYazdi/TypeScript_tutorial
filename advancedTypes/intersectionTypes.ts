interface BusinessPartner {
    name: string, 
    credit: number
}

interface Identity {
    id: number, 
    name: string
}

interface Contact {
    email: string, 
    phone: number
}


// the order of types doesn't matter
type Employee = Identity & Contact;
type Customer = BusinessPartner & Contact;

const employee: Employee = {
    id: 1, 
    name: "Mahta",
    email: "rezayazdi.mahta@gmail.com", 
    phone: 1234
}

const customer: Customer = {
    name: "Ted", 
    credit: 2, 
    email: "ted@gmail.com", 
    phone: 123
}