/* 
Реалізуй функцію sumObjects, яка приймає необмежену кількість об'єктів та повертає об'єкт, який об'єднує всі введені об'єкти.

Примітки:

Усі властивості об'єкта матимуть лише числові значення
Якщо ключі об'єктів співпадають, значення відповідних ключів сумуються
Функція завжди повертає об'єкт
Числа в об'єкті можуть бути додатніми і від'ємними
Ти можеш скористатися rest оператором, щоб зібрати агрументи передані в функцію в один масив
Приклади:

const obj = {};
sumObjects() === {}
sumObjects(obj) === {}
const first = {a: 2, b: 4};
const second = {a: 2, b: 10};
const third = {d: -5};

sumObjects(first) === {a: 2, b: 4}
sumObjects(first, third) === {a: 2, b: 4, d: -5}
sumObjects(first, second, third) === {a: 4, b: 14, d: -5}
*/

function sumObjects(...args) {
    let objectsNew = {};
    for(const i of args){
      for( const j in i){
        if (objectsNew[j] != null) {
          objectsNew[j] += i[j];
          } else{
          objectsNew[j] = i[j];
        }
      }
    }
    return objectsNew;
  }
  