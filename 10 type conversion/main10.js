/* for (let i = 0; i < 3; i++) {
    if (i === 2){
        break;
    }
    console.log(i);
}
console.log('hhgh');

for (let i = 0; i <= 3; i++) {
    if (i === 2){
        continue;
    }
    console.log(i);
}

let j = 0;

for (;;) {
    if (j < 5){
        break;
    }
    console.log(j);
    j++;
}

////////////////////////////
let n = 1240;
let j = 0

for(; n > 1 ;){
    if ((n % 2) === 0) {
        j++;
    }
    n /= 2;
}

console.log(j); */

let count = 0;
let n1 = 1240;

while (n1 % 2 === 0) {
    console.log(n1 /= 2);
    count++;
}

console.log('всего: ', count);

do {
    console.log(n1 /= 2);
    count++;
}while (n1 % 2 === 0)
