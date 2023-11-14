// JS Object Oriented
/*
let userOne = {
    email: "john@mail.com",
    name: "Jonh",
    login,
};

let userTwo = {
    email: "smith@mail.com",
    name: "Smith",
    login,
};

userOne.login();
userTwo.login();

function login() {
    console.log(this.email, " has been login");
}
function logout() {
    console.log(this.email, " has been logout");
}


class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.score = 0;
    }
    login() {
        console.log(this.email, "has been login!");
        return this;
    }
    logout() {
        console.log(this.email, "has been logout!");
        return this;
    }
    userScore() {
        this.score++;
        console.log(this.email, "score is now", this.score);
        return this;
    }
}

class Admin extends User {
    deleteUser(user) {
        users = users.filter((u) => {
            return u.email != user.email;
        });
    }
}

let userA = new User("John", "john@mail.com");
let userB = new User("Smith", "smith@demo.com");
let adminA = new Admin("Mike", "mike@free.com");

// console.log(userA);
// console.log(userB);

// userA.login().userScore().userScore().logout();

let users = [userA, userB, adminA];

adminA.deleteUser(userA);

console.log(users);
*/

function Client(name, email) {
    this.email = email;
    this.name = name;
    this.online = false;
}

Client.prototype.login = function () {
    this.online = true;
    console.log(this.email, "has been login!");
};
Client.prototype.logout = function () {
    this.online = false;
    console.log(this.email, "has been logout!");
};

function Admin(...client_argument) {
    Client.apply(this, client_argument);
    this.role = "Super Admin";
}
Admin.prototype = Object.create(Client.prototype);
Admin.prototype.deleteUser = function (u) {
    users = users.filter((user) => {
        return user.email != u.email;
    });
};

let clientA = new Client("scarrowz@mail.com", "Scarrow");
let clientB = new Client("johns@mail.com", "Johns");
let adminZ = new Admin("aara@demo.com", "Zara");

let users = [clientA, clientB, adminZ];

console.log("CLIENT:", clientA);
//clientB.login();
console.log("ADMIN:", adminZ);

console.log(users);
adminZ.deleteUser(users[2]);
console.log(users);
