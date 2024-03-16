// EP: 63 / 65
let news = "this is yahoo, so yahoo account working in yahoo";
let newsRep = news.replaceAll("yahoo", "Google");

console.log(newsRep);

let rejectMe = new Promise((_, reject) => reject("location error"));
let resolveMe = new Promise((resolve) => resolve());

Promise.any([rejectMe, resolveMe, rejectMe])
    .then(() => console.log("resolve it!"))
    .catch((e) => console.log("reject me"));

//
function totalValue(value) {
    value ??= 2;
    console.log("TOTAL:", value);
}
totalValue();
totalValue(30);

let prize = 10_000;
console.log("PRIZE:", prize);

const users = {
    age: 24,
    name: {
        firstname: "khaleel",
        lastname: "rahman",
    },
};

users.age = 23;
console.log(users);
Object.freeze(users);
users.age = 67;
console.log(users);
