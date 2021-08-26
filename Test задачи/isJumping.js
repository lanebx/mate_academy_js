/* 
Реалізуй функцію isJumping, яка приймає число number та повертає рядок JUMPING, якщо кожна цифра в числі відрізняється від сусідньої на 1. Якщо умова не виконується - рядок NOT JUMPING.

Примітки:

Вхідне число завжди додатнє
Різниця між 9 та 0 не розцінюється як 1
Всі числа, які складаються із однієї цифри - JUMPING
Приклади:

isJumping(9) === 'JUMPING'
It's single-digit number
isJumping(79) === 'NOT JUMPING'
Adjacent digits don't differ by 1
isJumping(23454) === 'JUMPING'
Adjacent digits differ by 1

*/

function isJumping(number) {
    const newMas = Array.from(String(number), Number);
  
    if (newMas.length === 1) {
      return 'JUMPING';
    }
  
    if (newMas.length <= 0) {
      return 'NOT JUMPING';
    }
  
    for (let i = 0; i < newMas.length - 1; i++) {
      if (newMas[i] - newMas[i + 1] === 1 || newMas[i + 1] - newMas[i] === 1) {
        continue;
      } else {
        return 'NOT JUMPING';
      }
    }
  
    return 'JUMPING';
  }
  