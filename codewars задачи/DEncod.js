/* 
Remove First and Last Character
 */

function removeChar(str){
    const lenStr = str.length;
    let newStr = '';
    
    for ( let i = 1; i < lenStr - 1; i++) {
      newStr += str[i];
    }
    
    return newStr;
  };
  
  