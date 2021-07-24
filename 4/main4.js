const decimal = 111;

/* 
    111 = 1*100 (10 ** 2) + 1*10 (10 ** 1) + 1*1 (10 ** 0)
*/

/* 
    111 = 1*4 + 1*2 + 1*1 = 7
    100101 = 1*32 + 0*16 + 0*8 + 1*4 + 0*2 + 1*1 = 37
*/

const binary = 0b111;
const hex = 0x111;

console.log(`dec 111 = ${decimal}`);
console.log(`dec 111 = ${binary}`);
console.log(`dec 111 = ${hex}`);

console.log(decimal.toString(2));

console.log(isFinite(1e1000));
console.log(1e1000)

const x = Number.MAX_VALUE;

console.log(x);

let l = 0 / 0;
console.log(l);
console.log(isNaN(l));