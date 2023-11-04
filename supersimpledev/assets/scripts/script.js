// JS: EP-08
/*
let boolien = true;
console.log(boolien);
console.log(!boolien);
console.log(Boolean(6 > 8));

// JS: EP-12
let likeMeat = true;
if (!likeMeat) {
    console.log("Hi i like it meat");
} else {
    console.log("I dont like it!");
}

// JS: EP-13
let myAge = 24;
if (myAge >= 10 && myAge <= 20) {
    console.log("You 20!");
} else if (myAge >= 20 || myAge <= 40) {
    console.log("You 40!");
}

// JS: EP-16
let age = 6;
while (age < 10) {
    console.log("Age LESS!");
    age++;
}

// JS: EP-17
let linksOne = document.getElementsByTagName("a");
console.log(linksOne);
for (let i = 0; i <= linksOne.length; i++) {
    console.log("Link number " + i);
}

// JS: EP-18
for (i = 0; i < 10; i++) {
    if (i === 4 || i === 6) {
        continue;
    } else if (i === 7) {
        break;
    }
    console.log("I: ", i);
}

// JS: EP-19
let links = document.getElementsByTagName("a");
for (i = 0; i < links.length; i++) {
    links[i].className = "link-" + i;
    links[i].innerHTML = "Link " + i;
}

// JS: EP-20
function myFunction(a, b) {
    return a + b;
}
console.log(myFunction(4, 6));
console.log(myFunction(7, 12));

const { isValidElement } = require("react");

// JS: EP-22
let a1 = "6";
let b1 = 3;

let sum = a1 * b1;
console.log(sum);

console.log(typeof sum);

console.log(Math.PI);

if (isNaN(a1)) {
    console.log("is not number");
} else {
    console.log("is number " + sum);
}

// JS: EP-24
let myString = "Hi welcome to my projrct Ninja";
console.log(myString.indexOf("c"));

if (myString.indexOf("Ninja") === -1) {
    console.log("Missing item");
} else {
    console.log("added item");
}

// JS: EP-25
let stringOne = "Hi welcome to my projrct";
let str = stringOne.slice(5, 10);
console.log(str);

let stringTwo = "apple, mango, grape, orange, kivi, lemon";
console.log(stringTwo);
let stringToArray = stringTwo.split(",");
console.log(stringToArray);

// JS: EP-26
let myArry = [];
myArry = [2, 4, 6, "hi", "welcome", true];
console.log(myArry);
console.log(myArry[4]);
console.log(myArry.sort());
console.log(myArry.reverse());

let myArryTwo = new Array();
console.log(myArryTwo);
myArryTwo[1] = 4;
myArryTwo[3] = "John";
console.log(myArryTwo);

let x = [];
let y = new Array();
console.log(x, y);
console.log(x === y);
console.log(typeof x);
console.log(typeof y);


// JS: EP-28, EP-29
let myCar = {
    carspeed: 120,
    driver: "John",
    drive() {
        console.log(
            this.driver + " driving in max speed limit " + this.carspeed
        );
    },
};
myCar.drive();

// JS: EP-30
let Car = function (maxSpeed, driver) {
    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function (speed, time) {
        console.log(speed * time);
    };
    this.logDrive = function () {
        console.log(
            "This car " +
                this.driver +
                " driving in max speed in " +
                this.maxSpeed
        );
    };
};

let newCarOne = new Car(120, "john smith");
newCarOne.drive(5, 6);
newCarOne.logDrive();

let newCarTwo = new Car(68, "Wills");
newCarTwo.drive(8, 9);
newCarTwo.logDrive();
// JS: EP-31
let myDate = new Date();
// console.log(myDate);

let pastDate = new Date(1991, 10, 21, 12, 23, 35);
let pastDate2 = new Date(1991, 10, 21, 12, 23, 35);
let futureDate = new Date(2023, 6, 31);

console.log("PD:", pastDate);
// console.log("FD:", futureDate);

console.log(pastDate.getDate());
console.log(pastDate.getDay());
console.log(pastDate.getFullYear());
console.log(pastDate.getHours());
console.log(pastDate.getMilliseconds());
console.log(pastDate.getMinutes());
console.log(pastDate.getMonth());
console.log(pastDate.getSeconds());
console.log(pastDate.getTime());
console.log(pastDate.getTimezoneOffset());
console.log(pastDate.getUTCDate());

if (pastDate.getDate() == pastDate2.getDate()) {
    console.log("Date is equal");
} else {
    console.log("Not equal");
}

// JS: EP-32
let colClass = document.getElementsByClassName("col-one");
console.log(colClass.textContent);
console.log(typeof colClass);
colClass[1].innerHTML = "Welcome";

console.log(colClass[1].textContent);

// JS: EP-33
let bodyHTML = document.getElementsByTagName("body");
console.log(bodyHTML);
//bodyHTML[0].innerHTML = `<p>Welcome To My Website</p>`;

// JS: EP-35
//console.log(menuLink.getAttribute("href"));

let menuLink = document.getElementById("menuLink");
let link = "/assets/scripts/main";
menuLink.setAttribute("href", link);
menuLink.setAttribute("alt", "Helo website");

console.log(menuLink);

// JS: EP-36
let menuLink = document.getElementById("menuLink");
menuLink.setAttribute("style", "color: red;");
menuLink.style.backgroundColor = "#190";

console.log(menuLink);


// JS: EP-37
let menuItems = ["Home", "About", "Service", "Work", "Portfolio", "Contact"];
let menuNav = document.getElementById("menuNav").getElementsByTagName("ul")[0];

//console.log(menuNav);

for (let i = 0; i < menuItems.length; i++) {
    let createList = document.createElement("li");
    let createLink = document.createElement("a");

    createList.appendChild(createLink);
    createLink.innerHTML = menuItems[i];
    createLink.setAttribute("href", `/${menuItems[i].toLowerCase()}`);

    menuNav.appendChild(createList);

    // menuNav.insertBefore(createList, menuNav.getElementsByTagName("li")[0]);
}

// JS: EP-38

let checkLink = document
.getElementById("menuNav")
.getElementsByTagName("ul")[0];
console.log(checkLink);
let selectItem = checkLink.getElementsByTagName("li")[0];
selectItem.remove();

// JS: EP-40
let button = document.getElementById("submitButton");
let content = document.querySelector(".col-one");

button.onclick = function () {
    if (content.className === "col-one open") {
        content.className = "col-one";
    } else {
        content.className = "col-one open";
    }
};


// JS: EP-42
let colorChanger = document.getElementById("colorChange");
let colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "aquamarine",
    "blueviolet",
    "brown",
    "cadetblue",
    "chartreuse",
    "coral",
];
let count = 0;

function bgColorChanger() {
    if (count >= colors.length) {
        count = 0;
    }
    colorChanger.style.backgroundColor = colors[count];
    colorChanger.innerText = count;
    count++;
}

let time = setInterval(bgColorChanger, 1000);

colorChanger.onclick = function () {
    clearInterval(time);
    colorChanger.innerHTML = "Time stop";
};
*/
// JS: EP-43
let myForm = document.forms.myForm;
let msg = document.querySelector(".message");

myForm.onsubmit = function () {
    if (myForm.name.value == "") {
        msg.innerHTML = `Please enter a ${myForm.name.name}`;
        return false;
    } else {
        msg.innerHTML = "";
        return true;
    }
};
