'use strict';

// узнать кол-во символов

let a = 'Mihael';
let b = 'DavI';

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
    word.endsWith(part), //Заканчиввается ли строка подстрокой

    b.toUpperCase(),  //Все в верхний регистр
    b.toLowerCase(),  //Все в нижний ригистр
    a,
    b,

    b.charCodeAt(0),  //получить код символа

    a.localeCompare(b),
    'localeCompare'
);

//для сравнения метод a.localeCompare(b);
a.localeCompare(b);

//срезы

const mesNum = '0123456789';

console.log(
    mesNum.substr(3, 5),
    mesNum.substring(3, 5),
    mesNum.slice(3, 5),
    mesNum.slice(-6, -2),
    mesNum.slice(1, -5)
)

//удалить лишнее пробелы перед или после текста

const phrase = '   First Last   ';

console.log(
    phrase.trim(),  
    phrase.trimRight(),
    phrase.trimLeft(),
    phrase.trim()
)

let cartNumber1 = '2456 5456 4545 8484'

const cartSave = (cartNumber) => {
    cartNumber = cartNumber.slice(-4);
    return cartNumber.padStart(19, '**** ');
}

console.log(cartSave(cartNumber1))


//повторение символов
const divider = '-'.repeat(19);

console.log(divider);

//замена симыолов

let phrase1 = 'what time is it';

const res13 = phrase1.replace(' ', '-');
const resReg = phrase1.replace(/ /g, '-')

console.log(phrase1);
console.log(res13);
console.log(resReg);

