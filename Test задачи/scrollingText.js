/* 
Створи функцію scrollingText, яка приймає рядок як параметр, 
послідовно переставляє всі символи у рядку з нульового індексу 
до останнього і повертає масив з усіма отриманими комбінаціями 
в верхньому регістрі.

Приклад

scrollingText("robot")

Повертає:
[ "ROBOT",
  "OBOTR",
  "BOTRO",
  "OTROB",
  "TROBO" ]
*/

function scrollingText(word) {
    let newStr = (word.toUpperCase()).split('');
    let newMas = [];
    newMas[0] = newStr.join('');
    let char = 0;
    for (let i = 0; i < newStr.length - 1; i++) {
      char = newStr.shift()
      newStr.push(char);
      newMas.push( newStr.join('') );
    }
    return newMas;
  }
  