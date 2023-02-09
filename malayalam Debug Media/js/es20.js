
/* ----------------------------------------
 - Spread Operators
-----------------------------------------*/

let globalPlayer = {
    idNumber: 0,
    name: 'John Smith',
    level: 100
}

let playerOne = {...globalPlayer};

playerOne.level = 50;

console.log(globalPlayer);
console.log(playerOne);


let userOne = ['Ramu', 'Sunil', 'Mahesh'];
let userTwo = ['Binu', 'Shyam', 'Dils'];

//let users = userOne.concat(userTwo);
let users = [...userOne, userTwo];

console.log(userOne);
console.log(userTwo);
console.log(users);

/* ----------------------------------------
 - Rest
-----------------------------------------*/

let userThree = ['Ramu', 'Sunil', 'Mahesh'];
let [one, two, three] = userThree;
console.log(two);

let usersList = {
    id: 10,
    username: 'John',
    age: 35
}
let {id, ...rest} = usersList;
console.log(id);
console.log(rest);

/* ----------------------------------------
 - Arrow Function
-----------------------------------------*/

const myFunction = () => {
    console.log('Running!');
};

myFunction();

/* ----------------------------------------
 - ForEach
-----------------------------------------*/
const usersTwo = [
    {
        id: 0,
        name: 'John',
        age: 25,
    },
    {
        id: 1,
        name: 'Smith',
        age: 18,
    },
    {
        id: 2,
        name: 'Wills',
        age: 32,
    },
];

for (let i = 0; i < usersTwo.length; i++ ) {
    console.log(usersTwo[i].name);
}

usersTwo.forEach(function (value, index, arrey) {
    console.log(arrey);
});


/* ----------------------------------------
 - Map
-----------------------------------------*/
const usersThree = [
    {
        id: 0,
        name: 'John',
        age: 25,
    },
    {
        id: 1,
        name: 'Smith',
        age: 18,
    },
    {
        id: 2,
        name: 'Wills',
        age: 25,
    },
];

const newUsers = usersThree.map((user) => user.name);

console.log(newUsers);

/* ----------------------------------------
 - Filter
-----------------------------------------*/
const usersFour = [
    {
        id: 0,
        name: 'John',
        age: 25,
    },
    {
        id: 1,
        name: 'Smith',
        age: 18,
    },
    {
        id: 2,
        name: 'Wills',
        age: 25,
    },
];


const newUsersTwo = usersFour.filter((value) => value.age === 25 && value.id === 2);
console.log(newUsersTwo);

/* ----------------------------------------
 - Reduce
-----------------------------------------*/

let numberArrey = [23, 45, 67, 89, 15, 37, 95];

//let total = 0;

// for (let i = 0; i < numberArrey.length; i++) {
//     total = total + numberArrey[i];
// }

let newNumber = numberArrey.reduce((totalNumber, numberValue) => totalNumber + numberValue, 0);

console.log(newNumber);


/* ----------------------------------------
 - Find
-----------------------------------------*/
const usersFive = [
    {
        id: 0,
        name: 'John',
        age: 25,
    },
    {
        id: 1,
        name: 'Smith',
        age: 18,
    },
    {
        id: 2,
        name: 'Wills',
        age: 25,
    },
];

const findUser = usersFive.find((userValue) => userValue.age === 25);
console.log(findUser);

/* ----------------------------------------
 - Sort
-----------------------------------------*/

/*let numberArrey = [23, 45, 67, 8, 15, 3, 95];

let sortNumber = numberArrey.sort((firstvalue, secondValue) => firstvalue - secondValue);

console.log(numberArrey);*/

/* ----------------------------------------
 - ES10 Syntax
-----------------------------------------*/

let numberEs = [12, [34, 56], 78, 90, [11, 22, [33, 44, [999, 888]]]];
let numberEsTwo = [12, [34, 56], 78, 90, [11, 22, [33, 44, [999, 888]]]];

console.log(numberEs);
console.log(numberEsTwo.flat(Infinity));

const usersSix = {
    id: 0,
    name: 'John',
    age: 25,
    company: {
        com_name: 'Freston',
        join_date: '20/12/2023',
    }
};
    
console.log(usersSix);

if (usersSix?.company?.com_name) {
    console.log(usersSix.company.com_name);
}

const numberEsThree = [12, 34, 56, 78, 90, 11, 22, 33];

const numberNewArrey = numberEsThree
    .map((value) => value)
    .filter((data) => data > 15)
    .sort((a, b) => a - b)
    .reduce((total, value) => total + value, 0);
    
console.log(numberNewArrey); 


/* ----------------------------------------
 - DOM Selectprs
-----------------------------------------*/
window.onload = () => {


};

