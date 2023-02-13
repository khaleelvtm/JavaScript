//ES6
let sum = (a, b) => {
    return a + b;
}
console.log(sum(10, 20));

let mun = (z, x) => z + x;
console.log(mun(23, 43));

let name = "Rahman";
let age = 29;
let msg = `${name} is ${age} is old `;
alert(msg);

//

function sum (...ar) {
    let sum = 0;
    ar.forEach(item => sum = sum + item);
    return sum;
}
console.log( sum(10, 20, 30, 40, 50) );



//ES6
function sum (a, b, c) {
    let res = a + b + c;
    console.log(res); 
}

let ar = [1, 2, 3];
sum(...ar);

//
let name = 'rahman';
let age = 29;
let data = [name, age];
console.log(data);

// 
let mk = 1;
let start = {
    'name' : 'rahman',
    ['mark' + mk] : 27
}
console.log(start);

// Array mathing
let arr = [11, 22, 33];
let [q, w, e] = arr;
console.log(q);
console.log(w);
console.log(e); 

// Set
let fruits = new Set();
fruits.add('Apple').add('mango').add('orange');
fruits.forEach(function (item) {
    console.log(item);
})