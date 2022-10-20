/* ------------
14. Boolean (True / False)
--------------*/
let firstName = 'Saheer';
let age = 16;

console.log(age >= 20);
console.log(age < 30);
console.log(!(age < 30));

console.log(age >= 20 && age < 30);
console.log(age >= 20 || age < 30);

if (age < 13) {
    console.log(firstName + ' is a Boy.');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a Tennager.');
} else {
    console.log(firstName + ' is a Man.');
}