/* -------------------------------- 
60. Primitives vs Objects
---------------------------------*/

// Primitives
let a = 10;
let b = a;
a = 25;

console.log(a, b);

// Object
let ob1 = {
    name: 'John',
    age: 29
};

let ob2 = ob1;
ob1.age = 36;
console.log(ob1.age);
console.log(ob2.age);

// Function
let age = 30;
let object = {
    name: 'Rahman',
    location: 'calicut'
};

function change(x, z) {
    x = 47;
    z.location = 'Kozhikode';
}
change(age, object);
console.log(object.location, age, object.name);