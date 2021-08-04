// Number rounding

let x = 12.2;

console.log(Math.floor(x)); //окуругление вниз
console.log(Math.ceil(x));  //округление вверх
console.log(Math.round(x)); //ближайшее целое
console.log(Math.trunc(x)); //Отбрасывает все что после точки

console.log(x.toFixed(3));  //12.200


//проверка на ввод числа а не символов
const input = ' 78 ';

console.log(+input);

//if(+input !== NaN) { //NaN всегда НЕ равно NaN
if(input.trim() && isFinite(input)){
 console.log('OK!');
}else {
 console.log('Error!');
}

// генерация рандомных чисел

for(let i = 0; i<5; i++){
 const x = Math.floor(Math.random() * 5 + 2); // 5 не включительно
 console.log(x);
}