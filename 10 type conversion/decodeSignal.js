/* 
Потрібно повернути 0 або 1 в залежності від переданого повідомлення input.

Приклади:

decodeSignal('abc') === 1
decodeSignal('1') === 1
decodeSignal(0) === 0
decodeSignal('') === 0
decodeSignal(null) === 0
Для того, щоб дізнатись, яке значення truthy або falsy має повідомлення input, можна використати подвійний логічний оператор NOT(!), наприклад:

!!'Hello' === true
!!null === false
*/

function decodeSignal(input) {
    if (!!input === true){
      return 1;
    }else{
      return 0;
    }
  }
  
console.log(decodeSignal(1));