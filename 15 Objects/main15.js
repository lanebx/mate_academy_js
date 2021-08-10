/* const user = {
    firstName: 'Lana',
    lastName: 'Temkaeva',
    age: 21,
};

const user2 = {
    firstName: 'Vika',
    lastName: 'Temkaeva',
    age: 15,
};

const age3 = 3;

const user3 = {
    firstName: 'Nati',
    'lastName': 'Temkaeva',     //
    ['is' + 'Married']: true,   //ключ как результат выражения
    age3,                       //ключ переменная age3:age3;
};

user3.lastName = 'Lana';
//user3['isMaried'] = true;

delete user3['age3'];

console.table(user3);

// входит ли свойство в обьект.
console.log(
    'lastName' in user3,
    user3.hasOwnProperty('lastName'),
    user3.lastName !== undefined
)


// как вывести все ключи и значения
for (const key in user3) {
    console.log(key, user3[key]);
}

function printUser (user) {
    console.log(`User ${user.firstName} ${user.lastName} {age: ${user.age}}`)
}

printUser(user);
printUser(user2);


//получить обект и отдать масив ключей  
let mas = Object.keys(user3);

//получить обект и отдать масив значений  
let mas2 = Object.values(user3);

//получить обект и отдать масив и ключей и значений  
let mas3 = Object.entries(user3);



function removeFemaleAges(people) {
  for (const i of people) {
    for (const j in i) {
      if (j[gender] === 'female') {
        delete j['age'];
      }
    }
  }

}


let otheNameType = 'aaddmm';
let robotType = {};

for (const nameType of otheNameType) {
    if (robotType.hasOwnProperty(nameType)){
        robotType[nameType] += 1;
    } else {
        robotType[nameType] = 1;
    }
}

console.log(robotType);

*/

const robots = [
    { coreVersion: 9 },
    { coreVersion: 13 },
    { coreVersion: 16 },
    { coreVersion: 9 },
    { coreVersion: 14 },
  ];
  let newVersion = 10;


  function getOutdated(robots1, newVersion) {
    let mas = [];
    let j = 0;
    for (const i of robots1) {
      if (i.coreVersion < newVersion) {
        mas.push(j);
      }
      j++
    }
    robots1[5] = 3;
    return mas;
  }

  console.log( getOutdated(robots, newVersion), robots);





