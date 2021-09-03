/* 
Дано масив years, який містить роки життя різних людей у вигляді рядків в форматі 1714-1748 (рік народження - рік смерті).

Допиши функцию getAverageAge так, щоб вона повертала среднюю тривалість життя всіх людей, округлену до найближчого цілого (Math.round)
*/

function getAverageAge(years) {
    if (years == '') return 0;
  
    let age = [];
  
    for (const yearsLive of years) {
      let ageOne = (Number(yearsLive.slice(-4))) - (Number(yearsLive.slice(0, 4)));
      age.push(ageOne);
    }
  
    let lenArrAge = age.length;
    let sumAge = 0;
  
    for (const ageOne1 of age) {
      sumAge += ageOne1;
    }
  
    return Math.round(sumAge / lenArrAge);
  }