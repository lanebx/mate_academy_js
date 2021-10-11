/* 
 Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
*/

function XO(str) {
    const oLen = str.match(/o/gi);
    const xLen = str.match(/x/gi);
    
    if (oLen === null && xLen === null) {
      return true;
    } else if (oLen === null || xLen === null) {
      return false;
    } else if (oLen.length === xLen.length) {
      return true;
    } else {
      return false;
    }
  }