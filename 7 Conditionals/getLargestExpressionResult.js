//'use strict';

/**
 * @param {number} a
 * @param {number} b
 *
 * @returns {number}
 */

// write code below this line

const getLargestExpressionResult = (a, b) =>{
    let sum = a + b;
    console.log(sum);
    let vid = a - b;
    console.log(vid);
    let dob = a * b;
    console.log(dob);
    let dil = a / b;
    console.log(dil);

  
    if (sum >= vid && sum >= dob && sum >= dil) return sum;
    if (vid >= sum && vid >= dob && vid >= dil) return vid;
    if (dob >= vid && dob >= sum && dob >= dil) return dob;
    if (dil >= vid && dil >= dob && dil >= sum) return dil;
  };
  
  console.log(getLargestExpressionResult(-5, -1));
  
  