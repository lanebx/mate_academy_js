
printRectangleInfo(5, 3, 5, 8);

function printRectangleInfo(a, b, ...args){
    const perimeter = 2 * a + b * 2;
    const square = a * b;

    console.log(a, b);
    console.log(args);
}

function isEven(a){
    if(a % 2 === 0){
        console.log(`Число ${a} является четным`);
    }else{
        console.log(`Число ${a} является НЕ четным`);
    }
}

isEven(5);

//функциональное обьявление Function declaration
function isEven2(a){
    return a % 2 === 0;
}

console.log(
    isEven2(2)
)

//функциональное выражение Function expression
const IsEven = function(a){
    return a % 2 === 0;
};

console.log(IsEven(4));

//функция стрелка Arrow function
const getCircleSquare1 = (r) => {
    return Math.PI * r * r;
};

const getCircleSquare2 = (r) =>  Math.PI * r * r;
const getCircleSquare3 = r =>  Math.PI * r * r;

console.log(getCircleSquare1(4));
console.log(getCircleSquare2(4));
console.log(getCircleSquare3(4));