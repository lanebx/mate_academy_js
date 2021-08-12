/* 
Функція getLeaders приймає масив чисел, та повертає масив Лідерів

Пояснення: Число вважається Лідером, якщо воно більше за суму всіх елементів справа від нього.

Примітки:

Вхідний масив містить не менше 3 елементів
Масив вхідних чисел може містити як позитивні, так і негативні числа
Числа можуть повторюватися
Масив який повертається, має містити числа в тому ж порядку, в якому вони зустрічаються у початковому масиві
Відсутність елементів справа від числа розцінюється як 0

Приклади:

arrayLeaders([1, 2, 3, 4, 0]) === [4]

4 is greater than the sum all the elements to its right side
The last element 0 is equal to right sum of its elements (abstract zero).
arrayLeaders([16, 17, 4, 3, 5, 2]) === [17, 5, 2]

17 is greater than the sum all the elements to its right side
5 is greater than the sum all the elements to its right side
The last element 2 is greater than the sum of its right elements (abstract zero)
*/

function getLeaders(numbers) {
    // write your code here
    let res = [];
    let sum = 0;
    for (let i = 0; i < numbers.length; i++, sum = 0) {
      for (let j = i +1 ; j < numbers.length; j++){
        sum += numbers[j];
      }
      if (numbers[i] > sum) {
          res.push(numbers[i]);
      }
    }
    return res;
  }
  let res1 = [16,17,4,3,5,2];

  console.log(
    getLeaders(res1)
  )


