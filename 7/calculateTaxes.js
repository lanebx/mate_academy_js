/* 
Створи функцію calculateTaxes, яка розраховує суму податків в залежності від доходу income. Використовуй 3-ступеневу модель оподаткування:

частина income до 1000 оподатковується за ставкою 2%
частина income від 1000 до 10000 - 3%
все що більше 10000 - 5%
Наприклад:

income = 15000;
Податок для першої частини (1000) це 2%, тому:

firstTax = 1000 * 0.02 = 20;
remainder = 15000 - 1000 = 14000;
Податок для другої частини (9000) це 3%, тому:

secondTax = 9000 * 0.03 = 270;
remainder = 14000 - 9000 = 5000;
Податок для залишку (5000) це 5%, тому:

thirdTax = 5000 * 0.05 = 250;
Таким чином, загальна сума податків складає:

totalTax = firstTax + secondTax + thirdTax = 20 + 270 + 250 = 540;
*/

'use strict';

/**
 * @param {number} income
 *
 * @returns {number}
 */
// write code below

const calculateTaxes = (income) => {
  let firstTax = 0;
  let secondTax = 0;
  let thirdTax = 0;
  let remainder = 0;

  if (income <= 1000) {
    return income * 0.02;
  } else {
    firstTax = 1000 * 0.02;
    remainder = income - 1000;
  }

  if (income > 1000 && income < 10000) {
    return firstTax + remainder * 0.03;
  } else {
    secondTax = 9000 * 0.03;
    remainder = remainder - 9000;
  }

  if (income >= 10000) {
    thirdTax = remainder * 0.05;
    return firstTax + secondTax + thirdTax;
  }

};

console.log(calculateTaxes(5000));