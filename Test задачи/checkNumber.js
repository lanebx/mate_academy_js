/* 
Створіть функцію checkNumber, яка перевіряє число на три різні властивості:

Це позитивне число?
Це парне число?
Це число кратне 10?
Функція checkNumber повинна повернути масив з результатами перевірок у вигляді булевих значень.

Число завжди має бути цілим.

Приклад:

const number = 3;
checkNumber(number); // return [true, false, false]

*/

function checkNumber(number) {
    // write code here
    let mas = [];
  
    number > 0 ? mas.push(true) : mas.push(false);
    number % 2 === 0 ? mas.push(true) : mas.push(false);
    number % 10 === 0 ? mas.push(true) : mas.push(false);
  
    return mas;
  }