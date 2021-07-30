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

