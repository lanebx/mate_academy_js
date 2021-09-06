/* 
Write a function, persistence, that takes in a positive 
parameter num and returns its multiplicative persistence, 
which is the number of times you must multiply the digits 
in num until you reach a single digit.
*/

function persistence(num) {
    if (num < 10 ) return 0;
    
    let newStr = String(num);
  
    let iter = 0;
    
    do {
      var mult = 1;
      for (const i of newStr) {
        mult *= Number(i);
      }
      
      iter++;
      newStr = String(mult);
      
    } while (mult >= 10)
  
    return iter; 
  }
  