//Conversion to boolean

//false
let conversion = false;
conversion = 0;
conversion = NaN;
conversion = 0n;
conversion = '';
conversion = null;
conversion = undefined;

console.log(
    Boolean(conversion),
    !!conversion
)

//true
conversion = {};
conversion = [];
conversion = function() {};
conversion = 7;

console.log(
    Boolean(conversion),
    !!conversion
)

//Conversion to number
let value = '100.5 hghgh';

console.log(Number(value), 'number');
console.log(+value, '+');

console.log(parseFloat(value), 'parseFloat');
console.log(parseInt(value), 'parseInt');

//Conversion to string

const num = 12345;

console.log(num);

console.log(String(num));
console.log(num.toString());
console.log('' + num);
console.log(`${num}`);


// == vs ===

console.log(
    2 === 2.0,
    2 == 2.0
);

console.log(
    2 === '2.0',  //два разных типа - ЛОЖЬ
    2 == '2.0'    //преобразовать пипы - ВЕРНО
);

console.log(
    2 !== '2.0',  //два разных типа - true
    2 != '2.0'    //преобразовать пипы - false
);

console.log(
    NaN === NaN,
    NaN == NaN,
    Object.is(NaN, NaN)  
);


//Compare data of different types

console.log('2' > 18);
console.log(2 > '18');
console.log('2' > '18');
