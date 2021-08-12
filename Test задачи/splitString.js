/* 
Напиши функцію splitString, яка приймає рядок і повертає масив рядків з двох символів. Якщо рядок містить непарну кількість символів, тоді другий символ потрібно замінити на підкреслення ("_").

Приклад:

splitString('abc') === ['ab', 'c_']
splitString('abcdef') === ['ab', 'cd', 'ef']
*/
let str1 = 'abcdef';

function splitString(str) {
    // write code here
    let oldStr = str;
    let lengthStr = str.length;
    let newMasSrt = [];

    if((lengthStr%2) !== 0) {
        oldStr += '_';
    }

    for (let i = 0, iter = 0; i<lengthStr; i += 2, iter++) {
        newMasSrt[iter] = oldStr[i] + oldStr[i+1];
    }

    return newMasSrt;
}

console.log(
    splitString(str1),
    str1
);
