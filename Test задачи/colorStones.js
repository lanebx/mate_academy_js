/* 
У Боба на столі лежать камені розміщені в ряд. Кожен з них може бути червоним, зеленим або синім і представлений символом R, G або B відповідно.

Допоможи Бобу знайти мінімальну кількість каменів, які він повинен прибрати зі столу, щоб після цього кожна пара каменів, що лежать поруч, містила камені різного кольору.

Приклади:

"RRGB" => 1
"RRGGB" => 2
"RRRRGB" => 3
"RGBRGBRGGB" => 1
"RGGRGBBRGRR" => 3
"RRRRGGGGBBBB" => 9
*/

function colorStones(stones) {
    // write code here
    let control = 0;
    for (let i = 0; i < stones.length - 1; i++) {
      if (stones[i] === stones[i+1]) {
        control ++;
      } else {
        continue;
      }
    }
    return control;
  }
  