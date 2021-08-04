/* 
Функція getRectangleArea приймає сторону side і діагональ diagonal прямокутника. Перевір чи це прямокутник (діагональ має бути більша за сторону). Думав математика не знадобиться в житті?
 
Поверни площу цього прямокутника, округлюючи до 2 знаків після коми, або рядок not a rectangle, якщо це не прямокутник.
 
Приклади:
 
getRectangleArea(10, 20) === 173.2
getRectangleArea(9, 18) === 140.29
getRectangleArea(100, 98) === 'not a rectangle'

*/

function getRectangleArea(side, diagonal) {
    if (diagonal > side && side > 0) {
      let p = side * (Math.sqrt(diagonal * diagonal - side * side));
      return +p.toFixed(2);
    } else {
      return 'not a rectangle';
    }
  }