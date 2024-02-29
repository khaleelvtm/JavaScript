// JS
/*
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

// EP: 11 / 65
let authenticated = true;
authenticated ? console.log("Signout Button") : console.log("Login");

// EP: 12 / 65
let user = "Admin";

switch (user) {
    case "Admin":
        console.log("Login", user);
        break;
    case "Subadmin":
        console.log("Login", user);
        break;
    case "Employee":
        console.log("Login", user);
        break;
    default:
        console.log("Nothing login!");
        break;
}

// EP: 13 / 65
let person = null;
if (person) {
    console.log("Condition is true");
}
// EP: 14 / 65
function sayHello(name) {
    console.log("This is first function");
    console.log("Your name is", name);
}
sayHello("John");
sayHello("Smith");

function nameSet(name) {
    return `Hi, my name is ${name}`;
}
let newname = nameSet("Rahman");
console.log(nameSet("Wills"));

// EP: 15 / 65
const getUserRole = (name, role) => {
    switch (role) {
        case "Admin":
            return `${name} is admin with all access`;
            break;
        case "Subadmin":
            return `${name} is subadmin with access to create and delete courses`;
            break;
        case "Testprep":
            return `${name} is testprep with access to create and delete test`;
            break;
        case "User":
            return `${name} is user consume all content`;
            break;
        default:
            return `${name} is trail user`;
            break;
    }
};

let oneUser = getUserRole("Smith", "User");
console.log(oneUser);

// EP: 19 / 65
function newUsers(user) {
    let name = user;
    console.log(this.user);
}

newUsers("NN");

// EP: 20 / 65
let users = ["John", "Smith", "Wills", "Deve"];
console.log(users);
console.log(users.indexOf("Wills"));
console.log(Array.from("RAHMAN"));

// EP: 21 / 65
function isEven(element) {
    // if (element % 2 === 0) {
    //     return true;
    // }
    // return false;

    return element % 3 === 0;
}
console.log(isEven(30));

let result = [3, 4, 6, 7].every(isEven);
console.log("result:", result);

let count = [2, 4, 6, 10].every((e) => e % 2 === 0);
console.log("count", count);

// EP: 22 / 65
let newArry = [2, 4, 5, 6, 7, 8, 9];
console.log("fill:", newArry.fill("Z", 3, 5));

let myNumber = [23, 34, 45, 55, 67, 78, 90];
let numberResult = myNumber.filter((num) => {
    console.log("L:", myNumber.length);
    return num != 55;
});
console.log("NUM:", numberResult, "L:", numberResult.length);

// EP: 23 / 65
let names = ["John", "Smith", "Wills", "Deve"];
console.log("slice:", names.slice(1, 3));
console.log("splice:", names.splice(1, 2, "ZZZ"), "NAME:", names);

// EP: 24 / 65
// EP: 25 / 65
let user = {
    firstName: "John",
    lastName: "Smith",
    age: 34,
    isLogin: true,
    courseList: [],
    buyCourse(courseName) {
        this.courseList.push(courseName);
    },
    getCourseCount() {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} course`;
    },
};

console.log(user);
console.log(user.getCourseCount());
user.buyCourse("React JS");
user.buyCourse("NodeJS");
console.log(user);
console.log(user.getCourseCount());

// EP: 25 / 65
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

let users = ["Ayoob", "Shakir", "Pranav", 1991, "Shaik", "Niyas"];
for (let i = 0; i < users.length; i++) {
    if (typeof users[i] !== "string") continue;
    console.log(users[i]);
}

// EP: 29 / 65
let members = ["Ayoob", "Shakir", "Pranav", 1991, "Shaik", "Niyas"];
members.forEach((name) => {
    if (typeof name === "string") {
        console.log("Member:", name);
    }
});

// EP: 30 / 65
let teams = ["Ayoob", "Shakir", "Pranav", "Shaik", "Niyas"];
for (let t of teams) {
    console.log(t);
}
for (const key in teams) {
    console.log(key, ":", teams[key]);
}

let employee = {
    name: "John Smith",
    age: 34,
    location: "Calicut",
    isLogin: true,
};
for (const key in employee) {
    console.log(key, ":", employee[key]);
}

// EP: 31 / 65
let user = {
    name: "Wills Smith",
    userID: 1012,
    isLogin: true,
    getCourse() {
        console.log("this:", this);
        function sayDemo() {
            console.log("say");
            console.log("THIS:", this);
        }
        sayDemo();
    },
};

user.getCourse();

// EP: 35 / 65
let timer = document.querySelector(".timer");
let followers = document.querySelector(".followers");
let count = 0;

setInterval(() => {
    if (count < 1000) {
        count++;
        timer.innerHTML = count;
    } else if (count == 1000) {
        followers.innerHTML = `${count} Instagram Followers`;
    }
}, 1);

setTimeout(() => {
    followers.innerHTML = `${count} Instagram Followers`;
}, 3000);

// EP: 36 / 65
let red = document.querySelector(".red");
console.log(window.getComputedStyle(red).backgroundColor);

const getBGBackground = (selectedElment) => {
    return window.getComputedStyle(selectedElment).backgroundColor;
};
console.log("BG COLOR:", getBGBackground(red));

// EP: 37 / 65
red.addEventListener("mouseenter", () => {
    console.log("MOUSE");
    red.style.backgroundColor = "green";
});
// EP: 38 / 65
const Users = function (firstName, dateOfBirth, location) {
    this.firstName = firstName;
    this.dateOfBirth = dateOfBirth;
    this.location = location;
    this.info = () => {
        console.log(
            `My name is ${this.firstName}, and I'm ${this.dateOfBirth} years old`
        );
    };
};

let userOne = new Users("Smith", 34, "Calicut");
console.log(userOne);

// EP: 43 / 65
(function newDemo(a, b) {
    console.log(a + b);
})(2, 4);

// EP: 44 / 65
function init() {
    let firstName = "John";
    
    function sayFistName() {
        console.log(firstName);
    }
    sayFistName();
}

init();
console.log(firstName);

// EP: 45 / 65
function init() {
    let firstName = "John";
    console.log("Demo");

    function sayFistName() {
        console.log(firstName);
    }
    return sayFistName;
}

let value = init();
value();

function doAdition(x) {
    return function (y) {
        return x + y;
    };
}

let addItem = doAdition(6);
console.log(addItem(9));
console.log(doAdition(4)(4));

// EP: 46 / 65

function addFun(y) {
    return function (w) {
        return y - w;
    };
}
console.log(addFun(100)(25));
*/

/*
const userOne = {
    num: 23,
    newFun: function () {
        console.log("T1:", this.num);
        console.log("Demo");
    },
};

const userTwo = {
    num: 23,
    newFun() {
        console.log("T2:", this.num);
        console.log("Demo");
    },
};

userOne.newFun();
userTwo.newFun();

const users = {
    fullName: "John Doe",
    age: 34,
    isLogin: true,
    role: "admin",
    getInfo() {
        console.log(
            `full name is ${this.fullName}, his role is ${this.role} and he is age ${this.age} older `
        );
    },
};
console.log(users);
console.log(users.getInfo());

const employee = {
    fullName: "Wils Smith",
    age: 45,
    isLogin: false,
    role: "user",
};
console.log(employee);

let employeeInfo = users.getInfo.bind(employee);
employeeInfo();

console.log(users.getInfo());

users.getInfo.call(employee);
// EP: 48 / 65
const courses = [
    {
        name: "Java Script",
        price: 50,
    },
    {
        name: "HTML",
        price: 30,
    },
    {
        name: "React JS",
        price: 80,
    },
    {
        name: "PHP",
        price: 70,
    },
];

function generateList() {
    let ul = document.querySelector(".list");
    ul.innerHTML = "";
    courses.forEach((course) => {
        let li = document.createElement("li");
        li.className = "item";

        let items = `
            <span class="name">${course.name}</span>
            <span class="price">$ ${course.price}</span>
        `;
        li.innerHTML = items;
        ul.append(li);
    });
}

window.addEventListener("load", generateList);

let sorBtn = document.querySelector(".sort-button");
sorBtn.addEventListener("click", () => {
    courses.sort((a, b) => a.price - b.price);
    generateList();
});
*/

/*
// EP: 51 / 65
let myMap = new Map();

myMap.set(1, "One");
myMap.set(2, "two");
myMap.set(3, "three");

console.log(myMap);
for (let key of myMap.keys()) {
    console.log("key:", key);
}
for (let value of myMap.values()) {
    console.log("value:", value);
}

// EP: 52 / 65
const user = ["John", 23, "Admin"];
//let [name, age, role] = user;

//console.log("role:", role);

const employeeList = {
    name: "Smith",
    age: 34,
    role: "Super Admin",
};
let { name, age, role } = employeeList;
console.log(age);

// EP: 53 / 65
function sumOne(a, b) {
    return a + b;
}

console.log("SUM:", sumOne(4, 7));

let numArr = [5, 7, 8];
console.log("SP:", sumOne(...numArr)); // Spred OP

// REST OP
function sumTwo(a, b, ...args) {
    console.log("a", args);
    console.log("AB", a, b);
    
    let multy = a * b;
    let sum = 0;
    for (let arg of args) {
        sum += arg;
    }
    
    return [multy, sum];
}
console.log(sumTwo(2, 3, 5, 5, 5));

// EP: 54 / 65 : Class
class Users {
    constructor(name, age, rank) {
        this.name = name;
        this.age = age;
        this.rank = rank;
    }
    courseList = [];

    getInfo() {
        return { name: this.name, age: this.age, rank: this.rank };
    }
    endrollCourses(name) {
        this.courseList.push(name);
    }
    getCourseList() {
        return this.courseList;
    }
    login() {
        return "User Login Success!";
    }
}

let userOne = new Users("John", 34, 90);
console.log("Info:", userOne.getInfo());

userOne.endrollCourses("Java");
userOne.endrollCourses("HTML");
userOne.endrollCourses("CSS");
console.log("Courses:", userOne.getCourseList());
console.log(userOne.login());

// EP: 56 / 65
class SubAdmin extends Users {
    constructor(name, age, rank) {
        super(name, age, rank);
    }
    getAdminInfo() {
        return "I'm Sub admin";
    }
    login() {
        return "Sub Admmin Login Success!";
    }
}

let adminOne = new SubAdmin("Wills", 25, 86);
console.log(adminOne.getAdminInfo());
console.log(adminOne.login());
console.log(adminOne.getInfo());

// EP: 57 / 65
const funOne = () => {
    console.log("Function One");
};
const funTwo = () => {
    setTimeout(() => {
        console.log("SET TIME OUT");
    }, 3000);
    console.log("Function Two");
};
const funThree = () => {
    console.log("Function Three");
};

funOne();
funThree();
funTwo();

// EP: 58 / 65
const oneFun = () => {
    return "First Fun";
};
const twoFun = () => {
    return new Promise((sol, rej) => {
        setTimeout(() => {
            sol("Set Time");
        }, 3000);
    });
};
const threeFun = () => {
    return "Therd Fun";
};

const getFun = async () => {
    let one = oneFun();
    console.log("A:", one);
    
    let two = await twoFun();
    console.log("A:", two);
    
    let tree = threeFun();
    console.log("A:", tree);
};

getFun();

*/
// EP: 59 / 65 - API
fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((data) => {
        // console.log("DATA:", data)
        let jok = data.value;
        console.log("jok", jok);
        console.log("data", data);
    })
    .catch();
