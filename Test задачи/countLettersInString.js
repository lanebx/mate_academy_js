/* 
Напиши функцію countLettersInString, яка приймає рядок str і повертає об'єкт, в якому ключ - літери з str (всі в нижньому регістрі), а значення - кількість цих літер в str.

Наприклад: countLettersInString('arithmetics') => {"a": 1, "c": 1, "e": 1, "h": 1, "i": 2, "m": 1, "r": 1, "s": 1, "t": 2}
*/

let str = 'aaahxrsuukj';
str = str.split('').sort().join('')

console.log(
    str
)
  function countLettersInString(str) {
    let resltObj = {};
    let strSort = str.split('').sort().join('');
    let j = 1;

    for (let i = 0; i < strSort.length; i++) {
 
      if (strSort[i] === strSort[i+1]) {
        resltObj[strSort[i]] = j++;
      }else {
        resltObj[strSort[i]] = j;
        j = 1;
      }
    }
    return resltObj;
  }
  
  console.log(
      countLettersInString(str)
  )