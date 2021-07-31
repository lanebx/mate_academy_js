/* 
новою функцією getWinner, яка першим параметром приймає кількість задач, які розв'язав Максим maxSolved, а другою кількість, яку розв'язав Роман romanSolved. Вхідні параметри можуть бути як рядками, так і числами. Результатом функції буде рядок:

Max winner!!! - якщо Максим розв'язав більшу кількість задач;
Roman winner!!! - якщо Роман розв'язав більшу кількість задач;
Roman and Maxim are the winners!!! - якщо хлопці розв'язали однакову кількість задач.
Приклади:

getWinner(45, '42') === 'Max winner!!!'
getWinner('34', 35) === 'Roman winner!!!'
getWinner(24, 28) === 'Roman winner!!!'
getWinner('13', '11') === 'Max winner!!!'
getWinner(15, '15') === 'Roman and Maxim are the winners!!!'
*/

const getWinner = (maxSolved, romanSolved) => {
    if (+maxSolved > +romanSolved) {
      return 'Max winner!!!';
    }else if(+maxSolved < +romanSolved){
      return 'Roman winner!!!';
    }else {
      return 'Roman and Maxim are the winners!!!';
    }
  }
  