/* 
Потрібно оновити функцію canTheyBook так, щоб вона приймала третій аргумент babiesCount та трохи змінити умови:

номер вміщує не більше 8 персон, але 9-м можна підселити малюка;
має бути мінімум один дорослий;
на одного дорослого може бути не більше 2-ох дітей та малюків;
малюків можна розмістити на ліжках для дорослих, тому в номері може бути більше ніж один малюк (якщо виконуються інші умови).
*/

function canTheyBook(adultsCount = 0, childrenCount = 0, babiesCount = 0) {
    // write code here
    let totalPeople;
    if(adultsCount <= 0){
      return false;
    } else if(babiesCount === 0){
      totalPeople = adultsCount + childrenCount;
    } else{
      totalPeople = adultsCount + childrenCount + babiesCount - 1;
    }
  
    if((totalPeople <= 8) && (adultsCount*2 >= childrenCount+babiesCount)){
      return true;
    } else {
      return false;
    }
  }
  