'use strict';

// узнать кол-во символов

let a = 'Mihael';
let b = 'Davidos';

let shortTest = a.length > b.length ? `Больше символов ${a}` : `Больше символов ${b}`;

console.log(shortTest);

//получить символ из строки

console.log(
    a[0],
    a.charAt(0)
)

console.log(
    a[20],
    a.charAt(20)
)
//a[2] = 'd';

//перебор строки по индексам

for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
}
for (let i = a.length-1; i >= 0; i--) {
    console.log(a[i]);
}

// перебор кк в питоне

for(let i of a){
    console.log(i);
}

//поиск подстроки в строке

let word = 'abcdabc';
let part = 'bc';

console.log(
    word.includes(part),
    word.indexOf(part),     //символ с которого начинается первое вхождение.
    word.lastIndexOf(part), //символ с которого начинается последнее вхождение.
    word.startsWith(part),     //Начинается ли строка с подстроки 
    word.endsWith(part),     //Заканчиввается ли строка подстрокой
)