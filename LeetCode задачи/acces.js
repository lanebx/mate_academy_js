//нужно переделать очень длинная

let a = [7, 1, 5, 3, 6, 4];

const funcAcces = (a) => {
    let min = a[0];
    let minIn = 0;

    for (let i = 0; i < a.length; i++) {
        if(a[i] <= 0) return 'неверный ввод в масиве';
        if(min > a[i]) {
            min = a[i];
            minIn = i;
        }
    }

    let max = a[minIn];

    for(let i = minIn; i < a.length; i++){
        if(max < a[i]) max = a[i];
    }

    prbl = max - min; 

    const ret = prbl === 0 
    ? `нет прибыли`
    : `купить по ${min} продать по ${max} прибыль ${prbl}`;
    return ret;
}

console.log(
    funcAcces(a)
)
