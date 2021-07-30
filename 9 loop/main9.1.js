//When to use infinite loop

const getValue = () => {
    const value9 = Math.random();

    if (value9 < 0.2) {
        return 0;
    }

    return value9;
}

let x = getValue();

while (x > 0) {
    console.log(x);
    x = getValue();
}
console.log('_____DONE_____');

while (true){
    let x = getValue();

    if(x == 0){
        break;
    }
    console.log(x);
}