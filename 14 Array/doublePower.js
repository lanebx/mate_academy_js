'use strict';

const f = [10, 20, 30];

function doublePower(currentPowers) {
  
    for (let i = 0; i < currentPowers.length; i++) {
      currentPowers[i] = currentPowers[i] * 2;
    }
  
    return currentPowers;
  }

console.log(
    doublePower(f)
);

console.log(f);