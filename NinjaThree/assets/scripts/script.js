// JS ES6
/*
let list = document.getElementsByTagName("li");

for (let i = 0; i < list.length; i++) {
    list[i].onclick = function () {
        console.log(i);
    };
}

function number(num = 23) {
    console.log(num);
}
number(1);

function logUser(name = "Mike", dress = "Red", age = 25) {
    console.log(
        "My name is " +
            name +
            " and my dress color is " +
            dress +
            " and my age is " +
            age
    );
}
logUser("John Smith", "White", 32);

let myArry = ["one", "two", "three"];
console.log(...myArry);

let num1 = [1, 2, 3, 4, 5];
let num2 = [...num1, 6, 7, 8, 9, 10];
console.log(num2);


let number = [4, 6, 8];
function calcNum(a, b, c) {
    console.log(a + b + c);
}
calcNum(...number);

let user = "John Smith";
let color = "Red";
let age = 25;

let myObgect = {
    user,
    color,
    age,
    fun(x) {
        console.log(`My number is ${x}`);
    },
};
console.log(myObgect.fun(44));


let myVal = "Helooo ";
console.log(myVal.repeat(10));

let input = document.getElementsByTagName("input");
let val = input[0].value;

console.log(myVal.startsWith(val));

let youSay = "Goodbye";
if (youSay.startsWith("Goodbye")) {
    let iSay = "Hello";
    console.log(`You say is ${youSay}, and i say ${iSay}`);
}

let msg = "Hi, welcome to my world";
console.log(msg.includes("my"));


const myFun = (name, age) =>
    console.log(`My name is ${name} and my age is ${age }`);
myFun("Smith", 23);

let myObgect = {
    name: "John Smith",
    myFun(x) {
        window.setInterval(() => {
            if (x > 0) {
                console.log(this.name + " is my best freind");
                x--;
            }
        }, 1000); 
    },
};
myObgect.myFun(5);


let newSet = new Set();
newSet.add("John").add("Smith").add("Wills").add("John");
newSet.delete("John");
//newSet.clear();
console.log(newSet.has("Smith"));

console.log(newSet.size);

console.log(newSet);

let names = ["John", "Wils", "Doe", "Adome", "John"];

let nameSet = new Set(names);

console.log(names);
console.log(nameSet);

names = [...nameSet];
console.log(names);
*/

function* gen() {
    yield "One";
    yield console.log("Two");
    console.log("Three");
}
let myGen = gen();
console.log(myGen.next());
myGen.next();
myGen.next();
