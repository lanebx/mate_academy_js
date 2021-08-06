/* 
Наш сервер приймає масив швидкостей роботів testResults, пропускає його через функцію getSpeedStatistic і повертає статистику у вигляді масиву, де перший елемент - це мінімальна швидкість, другий - максимальна і третій - середня швидкість, закруглена вниз.

Приклади:

getSpeedStatistic([10, 10, 11, 9, 12, 8]) === [8, 12, 10]
getSpeedStatistic([10]) === [10, 10, 10]
getSpeedStatistic([]) === [0, 0, 0]
getSpeedStatistic([8, 9, 9, 9]) === [8, 9, 8]
getSpeedStatistic([5]) === [5, 5, 5]

*/

function getSpeedStatistic(testResults) {
    if(testResults.length === 0) return [0, 0, 0]
    let minSpeed = Math.min(...testResults);
    let maxSpeed = Math.max(...testResults);
    let aveSpeed = 0;
    for (let i = 0; i < testResults.length; i++) {
      aveSpeed += testResults[i];
    }
    aveSpeed /= testResults.length; 
    const res = [];
    res[0] = minSpeed;
    res[1] = maxSpeed;
    res[2] = Math.floor(aveSpeed);
    return res;
  }