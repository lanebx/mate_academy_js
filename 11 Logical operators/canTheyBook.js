/* 
Напиши функцію-валідатор бронювань canTheyBook, яка приймає кількість дорослих adultsCount і дітей childrenCount та повертає true, якщо виконуються всі умови:

номер вміщує не більше 8 персон
має бути хоча б один дорослий
на одного дорослого може бути не більше двох дітей
Вважай неперадані аргументи рівними 0.
*/

function canTheyBook(adultsCount = 0, childrenCount = 0) {
    // write code here
    if((adultsCount + childrenCount <= 8) && (adultsCount > 0) && (adultsCount*2 >= childrenCount )){
      return true;
    }
    return false;
  
  }


