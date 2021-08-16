/* 
Реалізуй функцію addNumbers, яка приймає об'єкт object та повертає суму усіх числових значень в об'єкті

Приклади:

const object = {
  one: 1,
  two: '2',
  three: 3,
};

addNumbers(object); // return 4

Explanation:
1 + 3 = 4;
const object = {
  foo: 'js',
  bar: 'fe',
  boo: 3,
  spam: 10,
  egg: 11,
};

addNumbers(object); // return 24

Explanation:
3 + 10 + 11 = 24;
Hint:

Для перебору ключів об'єкта можна використовувати цикл for ... in.
*/

const object = {
    one: 1,
    two: '5',
    three: 3,
  };

  function addNumbers(object) {
    // write code here
    let sum = 0;
    for (const key in object) {
      if (typeof(object[key]) == 'number') {
        sum += object[key];
      }
    }
    return sum;
  }

  console.log(
      addNumbers(object)
  )
