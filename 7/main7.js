//условные операторы

const x = 8;

if (x > 5) {
    console.log(`${x} > 5`)
} else if (x === 5) {
    console.log(`${x} = 5`)
}else {
    console.log(`${x} < 5`)
};


const age = 78;

if (age >= 18) console.log('adult');
else console.log('child');

const shortTimeCost = 50;
const weekCost = 40;
const longTimimeCost = 30;

const getrentalPrise = (numberOfDays) => {
    const priseShort = 3 * 50;
    const priseWeek = 4 * 40;
    
    if (numberOfDays <= 3 && numberOfDays > 0){
        return 50 * numberOfDays;
    }else if (numberOfDays <= 7) {
        return priseShort + (numberOfDays - 3) * 40;
    }else if (numberOfDays >= 8) {
        return priseShort + priseWeek + (numberOfDays - 7) * 30;
    }
    /* 
    if (numberOfDays <= 3 && numberOfDays > 0) return 50 * numberOfDays;
    if (numberOfDays <= 7) return priseShort + (numberOfDays - 3) * 40;
    if (numberOfDays >= 8) return priseShort + priseWeek + (numberOfDays - 7) * 30;
     */
};

console.log(
    getrentalPrise(4)
);

//Conditional operator тернарный оператор

let age7 = 5;
/* 
let message = (age > 18) ? 'adult' : 'Child';
 */

let message1 = (age7 > 18) 
    ? 'adult' 
    : 'Child';

console.log(message1);

const message = (age7 > 18) 
    ? 'adult'   
    : (age7 > 7) 
        ? 'Child' 
        : 'babe';

console.log(message);



const canBuyBeer = (age) => (age >= 18) 
  ? 'You can buy beer' 
  : 'You can not buy beer';

console.log(canBuyBeer(33));