
printRectangleInfo(5);

function printRectangleInfo(a, b = 0){
    const perimeter = 2 * a + b * 2;
    const square = a * b;

    console.log('Rectangle', a, 'x', b);
    console.log('Perimeter is ', perimeter);
    console.log('Square is ', square);
    console.log('-----------------');
}