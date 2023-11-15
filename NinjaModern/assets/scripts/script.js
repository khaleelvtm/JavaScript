// JS Modern
/*
let email = "johns@gmail.com";

console.log(email);

let result = email.slice(2, 5);
console.log(result);

let result2 = email.substr(2, 5);
console.log(result2);

let result3 = email.replace("n", "w");
console.log(result3);


let array = ["one", "two", "three"];
console.log(array);

//let result = array.join("-");

let result = array.push("Name");
result = array.pop();
console.log(array);

let score = "100s";
score = Number(score);
console.log(score + 2);
console.log(typeof score);

score = Boolean(19);
console.log(score, typeof score);

// Loops
let i = 4;
while (i < 5) {
    console.log(i);
    i++;
}

let x = 5;
do {
    console.log("D:", x);
    x++;
} while (x < 5);

// IF ELSE
let user = ["john", "smith", "doe", "mike"];
if (user.length >= 4) {
    console.log("User length", user.length);
}

let password = "P@ssword";
if (password.length >= 8 && password.includes("@")) {
    console.log("Password is long enough!");
} else {
    console.log("Password is not log enough!");
}


let score = [20, 45, 0, 10, 100, 4, 10, 23];

for (i = 0; i < score.length; i++) {
    if (score[i] === 0) {
        continue;
    }

    console.log(score[i]);

    if (score[i] === 100) {
        console.log("Congratulation!");
        break;
    }
}

let grade = "C";

switch (grade) {
    case "A":
        console.log("You got an A!");
        break;
    case "B":
        console.log("You got an B!");
        break;
    case "C":
        console.log("You got an C!");
        break;
    case "D":
        console.log("You got an D!");
        break;
    case "E":
        console.log("You got an E!");
        break;
    default:
        console.log("not a valid grade");
}



// Function
myFun();
function myFun() {
    console.log("Start");
}

const func = function () {
    console.log("End!");
};
func();

arrowFunc = () => {
    console.log("Welcome!");
};
arrowFunc();


const calcArea = function (radius) {
    let area = 5 * radius ** 3;
    return area;
};
let a1 = calcArea(5);
let b1 = calcArea(8);
console.log(a1);
console.log(b1);

const bill = (product, tax) => {
    let total = 0;
    for (let i = 0; i < product.length; i++) {
        console.log("P:", product[i]);
        total += product[i] + product[i] * tax;
    }
    return total;
};
console.log(bill([10, 20, 50], 0.5));


const myfun = (a) => {
    let value = 40;
    a(value);
};
myfun(function (b) {
    console.log(b * 2);
});

let users = ["john", "smith", "doe", "mike"];

const userInfo = (user, index) => {
    console.log(`${index} - Hello ${user}`);
};
users.forEach(userInfo);

let ul = document.querySelector("ul");
let users = ["john", "smith", "doe", "mike"];

users.forEach((user) => {
    let li = document.createElement("li");
    li.innerHTML = user;
    ul.append(li);
});


// Object
let para = document.querySelectorAll("p");

para.forEach((text) => {
    text.innerHTML += " <b>Bold</b>";
});
console.log(para);

let link = document.querySelector("a");

console.log(link.getAttribute("href"));
link.setAttribute("alt", "GOOGLE");

link.setAttribute("href", "www.start.com");
console.log(link.getAttribute("href"));

let title = document.querySelector("h1");
title.setAttribute("style", "color: red;");
console.log(title.style);

*/
let content = document.querySelectorAll("p");

content.forEach((p) => {
    if (p.textContent.includes("error")) {
        p.classList.add("error");
    } else if (p.textContent.includes("success")) {
        p.classList.add("success");
    }
});
