let cashInWallet2 = 30;
let cardAmounth2 = 50;

const price2 = 40;

const canBuy2 = cashInWallet2 >= price2 || cardAmounth2 >= price2 ;

console.log("Покупка состоится: " + canBuy2);