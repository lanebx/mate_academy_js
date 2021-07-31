//JavaScript has three logical operators: AND (&&), OR(||), NOT (!). 

function or(a, b){
    if(a){
        return a;
    }else{
        return b;
    }
}


function and(a, b){
    if(!a){
        return a;
    }else{
        return b;
    }
}

//Multiple logical operators

console.log(0 || 1 || 2 || 3);  //1

console.log(0 && 1 && 2 && 3);  //0

console.log(0 || (1 && 2) || 3);  //2