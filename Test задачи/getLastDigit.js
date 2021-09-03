/* 
Допиши функцію getLastDigit так, щоб вона повертала останню цифру з числа number. Число number може бути дробовим, цілим, додатнім та від'ємним.
*/

function getLastDigit(number) {
    const strNum = number.toString();
    const len = strNum.length;
  
    return Number(strNum[len - 1]);
  }
  