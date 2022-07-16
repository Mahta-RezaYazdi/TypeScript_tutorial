// default parameters are optional

/**
 * Optional parameters must come after the required parameters. 
 * However, default parameters don’t need to appear after the required parameters.
 * When a default parameter appears before a required parameter, 
 * you need to explicitly pass undefined to get the default initialized value.
 */

function getPrice(price: number, discount: number = 0.05): number {
    return price * (1 - discount);
}

function applyDiscount(price: number, discount = 0.05): number {
    return price * (1 - discount);
}

console.log(applyDiscount(100));


