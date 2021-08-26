/* 
Реалізуй функцію combineArrays, яка приймає 2 масиви чисел (first та second) та повертає масив чисел де N[i] це сума чисел first[i] та second[i].

Примітки:

Вхідні масиви завжди однакового розміру.
Приклади:

combineArrays([1, 2, 5], [3, 6, 1]) === [4, 8, 6]
combineArrays([1], [6]) === [7]
combineArrays([], []) === []

*/

function combineArrays(first, second) {
    const newArray = [];
  
    for (let i = 0; i < first.length; i++) {
      newArray.push(first[i] + second[i]);
    }
  
    return newArray;
  }
  