// Functions ============================
function statusCompleted () {
    console.log('Completed!');
}

function myFunction () {
    let a = 10;
    console.log(a);
    statusCompleted();
    return a;
}

function myFunctionTwo (z) {
    let a = z;
    statusCompleted();
    return a;
}


console.log("1",myFunction());
console.log("2",myFunctionTwo(33));


tesFunction = (q, w) => {
    let a = q + w;
    return a;
}
console.log(tesFunction(20, 10));

alert('Blocked');


// Objects ============================
let users = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25
};
console.log(users);
console.log(users.firstName);

// Array ============================
let myArray =['one', 'two', 'three'];
console.log(myArray);
console.log(myArray[1]);

// Strings ============================
let m = 'testing font';
console.log(m.length);
console.log(m.indexOf('t'));
console.log(m.lastIndexOf('t'));
console.log(m.search('e'));
console.log(m.includes('font'));

let b = m.slice(0, 5);
console.log(b);

let usersTwo = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25
}

let iconName = usersTwo.firstName.slice(0, 1) + usersTwo.lastName.slice(0, 1);
console.log(iconName);

// Number ============================
let a = '15';
let z = 25;

console.log(a);
console.log(z);
console.log(parseInt(a));
console.log(z.toString());

// Array Methord ============================
let myArrey = ['Q', 'W', 'E'];
console.log(myArrey);

myArrey[1] = 'A';
console.log(myArrey);

myArrey.push('S');
console.log(myArrey);

myArrey.pop();
console.log(myArrey);

myArrey.unshift('F');
console.log(myArrey);

myArrey.shift();
console.log(myArrey);

myArrey.splice(1,0, 'G', 'H');
console.log(myArrey);

let newArrey = myArrey.slice(2,4);
console.log(newArrey);

newArrey.sort();
console.log(newArrey);


// Object Methord ============================

let usersThree = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25
};

usersThree.firstName = 'Ram';
usersThree.age = 45;

delete usersThree.lastName;
console.log(usersThree);


// If or Else ============================

let johnAge = 50;
if (johnAge > 45) {
    console.log('You are old');
} else if(johnAge <= 30) {
    console.log('You are about');
}
 else {
    console.log('You are young');
}


// Switch ============================

let fruits = 'Banana';

switch (fruits) {
    case 'Apple':
        console.log('This is Apple');
        break;
    case 'Banana':
        console.log('This is Banana');
        break;
    default:
        console.log('Default!');
};



// Loop ============================


for(let i = 0; i <= 10; i++) {
    console.log(i);
};

let count = 0;
while (count <= 10) {
    console.log(count);
    count++;
}

count = 0;
do {
    console.log(count);
    count++;
} while (count <= 10);0

let user = ['John', 'Smith', 'Wills'];

for (let i = 0; i < user.length; i++) {
    document.write(user[i] + '<br>')
};

for (let x of user) {
    document.write(x + '<br>'); 
}

let names = {
    firstName: 'john',
    lastName: 'Doe',
    age: 25
};

for (let x in names) {
    document.write(names[x] + '<br>');
}


// Events ============================

function clickAlert () {
    alert('Clicking Alert!');
    console.log('Clicked');
}


let open = document.getElementById('openBtn');

addEventListener('click', clickOpen);

function clickOpen () {
    alert('Open Data');
}