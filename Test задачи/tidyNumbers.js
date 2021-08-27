/* 
Оголосимо функцію isTidy яка приймає number у якості параметра та має виводити результат true якщо цифри у неспадаючій послідовності, або false якщо ні.

Примітка Вхідні значення завжди додатні.

Приклади:

isTidy(12) ==> true Цифри { 1, 2 } розташовані у неспадаючій послідовності, тобто 1 <= 2.

isTidy(32) ==> false Цифри { 3, 2 } розташовані в спадаючій послідовності, тобто 3 > 2.

isTidy(1024) ==> false Цифри { 1, 0, 2, 4 } розташовані в спадаючій послідовності, оскільки 0 < 1.

isTidy(3445) ==> true Цифри { 3, 4, 4, 5 } розташовані в неспадаючій послідовності, оскільки 4 <= 4.

isTidy(13579) ==> true Цифри { 1, 3, 5, 7, 9 } розташовані в зростаючій послідовності.
*/


function isTidy(number) {
    const newArray = Array.from(String(number), Number);
  
    if (newArray.length === 1 || newArray.length === 0) {
      return true;
    }
  
    for (let i = 0; i < newArray.length - 1; i++) {
      if (newArray[i] <= newArray[i + 1]) {
        continue;
      } else {
        return false;
      }
    }
  
    return true;
  }
  