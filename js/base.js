// Testing JS Console
console.log('Welcome');

// Value
a = 10
b = 20
c = a + b
console.log(c);

name1 = "Khaleel";
console.log(name1);

q = 10 > 5;
w = 10 < 5;
console.log(q, w);

// Arrey
names = ['appu', 'ammu', 'manu', 'ravi']
console.log(names);

// Functions
asd = 'Testing my Website';
asd.length;
asd.toLowerCase();
r = asd.toLowerCase();
console.log(r);

start = "This testing javascript ";
trimSection = start.trim();
console.log(trimSection);

textSelect = start.substr(0, 8)
console.log(textSelect)

food = 'Apple my fav food';
food = food.replace('Apple', 'Orang');
console.log(food);

country = 'India is my country';
startCountry = country.endsWith('country');
console.log(startCountry);

trim = '  Trim  ';
trim.trimEnd();
trim.trimStart();

splitName = "One, Two, Three, Four, Five";
nameSplit = splitName.split(','); // Split
console.log(nameSplit);

 // Array
ar = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
ar.push(200, 400, 500); // Add items
ar.pop(); //remove items
console.log(ar.join('|'));

// Object
person = { 'name' : 'rahman', 'age' : 25, 'mark' : 98 }
console.log(person.age);

persons = [ { 'name' : 'Appu', 'age' : 25, 'place' : 'Calicut' }, { 'name' : 'Deepu', 'age' : 24, 'place' : 'Tirur' } ];
console.log(persons);

// If condition 
az = 10;
sx = 50;
if( az < sx ) {
    console.log( az + ' grated' );
} else {
    console.log( sx + 'grated' );
}

let fruit = 'mango';

if (fruit == 'apple') {
    console.log('this is Apple');
} else if (fruit == 'orange') {
    console.log('this is orange');
} else if (fruit == 'banana') {
    console.log('this is banana');
} else {
    console.log('this is different frut');
}

let fruits = 'banana';

switch (fruits) {
    case "mango" : console.log('this is mango');
        break;
    case 'orange' : console.log('this is orange');
        break;
    case 'apple' : console.log('this is apple');
        break;
    default: console.log('deffarnt fruits')
}

// While Loop
let num = 1;

while (num <= 10) {
    console.log(num);
    num++
}

let count = 100;
let valuNumber = 0;

while (valuNumber < count) {
    document.write('*')
    valuNumber++
}

// Do while
let numbers = 14;

do {
    console.log(numbers);
    numbers++
}
while (numbers <= 10);

//For Loop

let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

for (let q = 1; q <= 10; q++) {
    console.log(q);
}

let names2 = ['Appukuutan', 'Rahman', 'Saheer', 'Dhaneesh']

for (let i = 0; i<names2.length; i++) {
    console.log(names2[i]);
}

for (let w = 0; w < 10; w++) {
    for (let e = 0; e < 10; e++) {
        document.write(w + " " + e + '</br>');
    }
}

// For Each & For In 
let number = [10, 20, 30, 40, 50, 60, 80, 90]

for (i = 0; i < number.length; i++) {
    console.log(number[i]);
}

for (i in number) {
    console.log(number[i]);
}

let sum = 0;

for (i in number) {
    sum = sum + number[i];
}
//console.log(sum);

number.forEach(function(value, index) {
    console.log(value);
    console.log(index)
    sum = sum + value;
})
console.log(sum);


persons2 = [ 
    { 'name' : 'Abinesh', 'age' : 25, 'location' : 'Calicut' },
    { 'name' : 'Sahal', 'age' : 24, 'location' : 'Tirur' },
    { 'name' : 'Rabih', 'age' : '28', 'location' : 'Mukkam' } 
];

persons2.forEach(function(value, index) {
    console.log(value.location);
});

// Brake
for (let z = 1; z <= 10; z++) {
    if (z >= 6) {
        break;
    }
    console.log(z);
}

let s = 0;
while (s < 10) {
    s++;
    if (s == 5) {
        break;
    }
}
console.log(s);

for (let d = 1; d <= 10; d++) {
    
    if (d > 3) {
        continue;
    }
    if (d > 7) {
        break;
    }
    console.log(d);
}