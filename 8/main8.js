const count = 3;

if (count === 1){
    console.log('one');
}else if (count === 2){
    console.log('two');
} else {
    console.log('many');
}

switch (count) {
    case 1 :
        console.log('one');
        break;
    case 2 :
        console.log('two');
        break;
    default :
        console.log('many');
}

switch (count) {
    case 1 :
        console.log('one');
        break;
    case 2 :
    case 3 :
    case 4 :
        console.log('a few');
        break;

    default :
        console.log('many');
}

function getSecondaryColor(primaryColor) {
    switch (primaryColor) {
        case 'red' :
            return 'magenta';
        
        case 'green' :
            return 'yellow';

        case 'blue' :
            return 'cyan';

        default :
            return 'white';
    }
}

console.log(getSecondaryColor('red'));

let value = 5;
switch (value) {
    case 5:
        console.log('a few');
        break;

    case 10:
        console.log('many');
        break;

    default:
        console.log('some');
}

switch (true) {
    case value <= 5:
        console.log('a few');
        break;

    case value >= 10:
        console.log('many');
        break;

    default:
        console.log('some');
}