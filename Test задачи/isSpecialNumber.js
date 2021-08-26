/* 
    Функція isSpecialNumber приймає число, та повинна визначити, чи особливе воно чи ні. Число називається особливим, якщо воно включає в себе лише 0, 1, 2, 3, 4 або 5.

    Примітки:

    Число, яке передається у функцію є додатнім (n > 0).
    Всі одноцифрові числа в інтервалі [0:5] вважаються особливими числами.
*/

function isSpecialNumber(n) {
    const newMas = Array.from(String(n), Number);
  
    if (newMas.length <= 0) {
      return 'NOT!!';
    }
  
    for (const char of newMas) {
      if (char <= 5) {
        continue;
      } else {
        return 'NOT!!';
      }
    }
  
    return 'Special!!';
  }