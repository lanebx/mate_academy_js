const numbers = [10, 11, 12, 13];

numbers[0] = numbers[0] * 2;

console.log(numbers);

for (let i = 0; i < numbers.length; i++) {
    console.log( numbers[i]);
}

for (const i of numbers) {
    console.log(i);
}

//добавить елемент в масив

numbers.push(100);  //можна добавить несколько элементов

numbers[0] = 17;

console.log(numbers);

//создание массива из строки

const word = 'qwe';

console.log(word.split(''));
console.log(Array.from(word));
console.log([...word]);

// Array push, pop, shift, unshift

numbers.push(55, 12 );
console.log(numbers);

const x = numbers.pop();
console.log(x);

console.log(numbers);

numbers.unshift('one', 'two' );  //добавит елементы в начало масива
console.log(numbers);

numbers.shift();  //удалит нулевой элемент
console.log(numbers);

