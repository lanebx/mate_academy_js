/* 
напишемо для них функцію getGuestsCount, 
котра буде приймати рядок guestsInput та 
повертати число гостей. Якщо кількість гостей
 визначити неможливо - повертатиме рядок not a number. 
 
Приклади:

getGuestsCount('Двоє') === 'not a number'
getGuestsCount('Я буду 1') === 'not a number'
getGuestsCount('3 людини') === 3
*/

const getGuestsCount = (guestsInput) => {
    if (Object.is(parseInt(guestsInput), NaN)){
      return 'not a number';
    }else{
      return parseInt(guestsInput);
    }
  }

