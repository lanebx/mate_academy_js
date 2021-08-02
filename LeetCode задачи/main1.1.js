/* 
Отримавши рядок s, що містить тільки символи '(', ')', '{', '}', '['і ']', 
визначити , чи є вхідний рядок є дійсним.

Рядок введення дійсний, якщо:

Відкриті дужки закриті такими ж дужками.
Відкриті дужки повинні бути закриті у правильному порядку.
"()" // true
"()[]{}" // true
"(]" // false
"([)]" // false
"{[]}" // true


Стек FILO
*/

let s1 = "()" // true
let s2 = "()[]{}" // true
let s3 = "(]" // false
let s4 = "([)]" // false
let s5 = "{[]}" // true



const isValid = (s) => {
    let stack = [];
    let brackets = {
        ')':'(',
        '}':'{',
        ']':'['
    };

    for (let i = 0; i < s.length; i++){
        const current = s[i];
        
        if(isCloseBracket(current)){
            //brackets вернет сбратную от скобки что лежит в current
            if(brackets[current] !== stack.pop()) return false;
        }else{
            stack.push(current);
        }
    }
    return stack.length() === 0;
};

const isCloseBracket = (ch) => {
    if (ch === '}' || ')' || ']') return true;
};

isValid(s1);