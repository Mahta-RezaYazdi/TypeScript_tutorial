// Referencing a property that doesn't exist on an object

interface Product {
    id: number, 
    name: string, 
    price: number
};

function getProduct(id: number): Product {
    return {
        id, 
        name: `Awesome Gadget ${id}`, 
        price: 99.5
    }
} 

const product = getProduct(1);

// Passing arguments in the wrong order

function showProduct(name: string, price: number): void {
    console.log(`The product ${name} costs ${price}$`);
}

showProduct(product.name, product.price);