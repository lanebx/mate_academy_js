/* 
Return true if none of the letters in the blacklist are present in the phrase. If at least one letter from blacklist is present in the phrase return false;

Comparison should be case insensitive. Meaning 'A' == 'a'.
*/

function hasNoneLetters(blacklist, phrase) {
    for (const i in phrase) {
      for (const j in blacklist) {
        if (phrase[i].localeCompare(blacklist[j], undefined, { sensitivity: 'base' }) === 0) {
          return false;
        } else {
          continue;
        }
      }
    }
  
    return true;
  }
  