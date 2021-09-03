/* 
Напиши функцію removeZeros, яка приймає ціле число n та повертає нове число, що складається з усіх цифр n крім нулів. Лише нуль завжди залишається нулем.
*/


function removeZeros(number) {
    if (number === 0) {
      return 0;
    }
  
    let resultNum = "";
    const strNum = number.toString();
  
    for (const i in strNum) {
      if (strNum[i] == 0) {
        continue;
      } else {
        resultNum += strNum[i];
      }
    }
  
    return Number(resultNum);
  }
  