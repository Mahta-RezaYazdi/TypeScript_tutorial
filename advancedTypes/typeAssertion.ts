// as
// type narrowing

function getNetPrice(price: number, discount: number, format: boolean): number | string {
    const netPrice = price * (1 - discount);
    return format ? `$${netPrice}` : netPrice;
}

const netPrice = getNetPrice(100, 0.05, true) as string;
const netPrice2 = getNetPrice(100, 0.05, false) as number;

const netPrice3 = <string>getNetPrice(100, 0.05, true);
const netPrice4 = <number>getNetPrice(100, 0.05, false);

const netPrice5 = getNetPrice(100, 0.05, true);
console.log(netPrice5);