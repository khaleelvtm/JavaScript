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
*/

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
