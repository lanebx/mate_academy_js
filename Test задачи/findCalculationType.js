/* 
Вам потрібно створити функцію findCalculationType, яка отримує 3 аргументи: 2 числа та результат невідомої операції, виконаної над ними (також число).

На основі цих 3 значень потрібно повернути рядок, який описує, яка операція була використана для отримання даного результату.

Приклади результату функції: addition, subtraction, multiplication, division.

Приклад:

findCalculationType (1, 2, 3) -> 1 ? 2

Примітки:

У разі ділення слід очікувати, що результат операції буде отриманий за допомогою оператора / на вхідних значеннях - не слід виконувати додаткове перетворення або округлення типів даних.
У функцію будуть передані лише допустимі аргументи.
Значення, які приходять в параметрах, передбачають лише одну можливу операцію для досягнення результату.
*/

function findCalculationType(a, b, res) {
    // write code here
    let addition = a + b;
    let subtraction = a - b;
    let subtraction2 = b - a;
    let multiplication = a * b;
    let division = a / b;
    let division2 = b / a;
  
    if (res === addition) return 'addition';
    if (res === subtraction) return 'subtraction';
    if (res === subtraction2) return 'subtraction';
    if (res === multiplication) return 'multiplication';
    if (res === division) return 'division';
  
  }
  