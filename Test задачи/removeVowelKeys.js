/* 
Напиши функцію removeVowelKeys, яка приймає масив рядків keys та повертає новий масив тільки з тими словами, які починаються НЕ з голосної літери (aeiouy). Регістр не має значення.
*/

function removeVowelKeys(object) {
    const vowels = 'aeiouy';
    const foundKey = [];
  
    for (const key of object) {
      let test = true;
  
      for (const lett of vowels) {
        if (key[0].toLowerCase() === lett) {
          test = false;
          break;
        }
      }
  
      if (test === true) {
        foundKey.push(key);
      }
    }
  
    return foundKey;
  }
  