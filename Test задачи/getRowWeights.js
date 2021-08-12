/* 
Кілька людей стоять поспіль, розділені на дві команди. Перша людина потрапляє до команди 1, друга - до команди 2, третя - до команди 1 і так далі.

Реалізуй функцію getRowWeights, яка приймає масив чисел (ваги людей) та повертає новий масив з двох цілих чисел, де перше - загальна вага команди 1, а друге - загальна вага команди 2.

Примітки:

Розмір масиву не менше 1.
Усі числа додатні.
Приклад:

getRowWeights([10]) === [10, 0]
getRowWeights([10, 85, 90]) === [100, 85]
getRowWeights([8, 5, 9, 3]) === [17, 8]
*/

function getRowWeights(array) {
    let weigthOneGroup = 0;
    let weigthSecondGroup = 0;
    let sumMas = [];
    for (let i = 1; i <= array.length; i++) {
      if ((i % 2) === 0){
        weigthSecondGroup += array[i-1];
      } else {
        weigthOneGroup += array[i-1];
      }
    }
    sumMas.push(weigthOneGroup);
    sumMas.push(weigthSecondGroup);
    return sumMas;
  }
  