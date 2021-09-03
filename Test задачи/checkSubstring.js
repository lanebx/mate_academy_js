/* 
Напиши функцію checkSubstring, яка приймає рядки text та part і перевіряє, чи text містить part. Регістр не має значення.
*/

function checkSubstring(text, part) {
    if (part === '') return true;
  
    const len = part.length - 1;
    let j = 0;
  
    for (let i = 0; i < text.length; i++) {
      if (text[i].localeCompare(part[j], undefined, { sensitivity: "base"}) === 0) {
        if (j === len) return true;
        j++;
      } else {
        j = 0;
      }
    }
  
    return false;
  }
  