// JS
// EP: 07 / 65
let listPrice = 999;
let sellingPrice = 799;

let discount = ((listPrice - sellingPrice) / listPrice) * 100;

console.log((listPrice - sellingPrice) / listPrice);
console.log(Math.round(discount));

// EP: 10 / 65
let email = true;
let google = false;
let facebook = false;

if (email || google || facebook) {
    console.log("Login Success!");
}
