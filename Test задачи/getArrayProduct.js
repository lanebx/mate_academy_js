/* 
Реалізуй функцію getArrayProduct, яка отримує масив чисел numbers та повертає масив такого ж розміру, де numbers[i] дорівнює добутку усіх елементів масиву справа і зліва від цього елемента.

Примітки:

Початковий масив містить не менше 2 елементів
Масив містить тільки додатні числа
Числа можуть повторюватися
Приклади:

productArray([1,5,2]) === [10,2,5]

*/

const getArrayProduct = (numbers) => {
    let masNum = [];
    let mult = 1;
  
    for (let i = 0; i < numbers.length; i++, mult = 1) {
  
      for (let j = 0; j < numbers.length; j++) {
        if (i !== j) {
          mult *= numbers[j];
        }
      }
      masNum.push(mult);
    }
    return masNum;
  }