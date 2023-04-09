/* --- 1
// 10 -> 3,5,6,9 = 23
let arr3 = [];
let num = 1000;
let sum3 = 0;

for (let i = 1; i < num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        arr3.push(i);
        sum3 += i;
    }
}
console.log("SUM3: ", sum3);
*/

/* --- 2
let numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',];

let numberFunction = (numb) => {
    let numberSum = 0;
    let slice = numbers.slice(0, numb)
    for (let i of slice) {
        numberSum += i.length;
    }
    console.log('total sum: ', numberSum);
}
numberFunction(4) */

/* --- 3
let users = {
    jon: {
        age: 23,
        status: true
    },
    mike: {
        age: 22,
        status: true
    },
    tome: {
        age: 21,
        status: false
    },
    wils: {
        age: 18,
        status: true
    }
}

let userList = document.querySelector('.user-list')
let userSolution = (data) => {
    // let nameStore = [];
    // let ageStore = [];
    // for (let names in users) {
    //     nameStore.push(names);
    //     ageStore.push(users[names].age);
    // }
    // console.log('names store:', nameStore);
    // console.log('age store:', ageStore);
    // let names = Object.keys(data);
    // let value = Object.values(data);
    // let age = value.map((selectValue) => selectValue.status)

    // console.log(names);
    // console.log(value);
    // console.log(age);

    let userData = Object.entries(data);
    console.log('DATA:', userData);
    userData.map(([name, { age, status }]) => {
        let li = document.createElement('li');
        li.textContent = `${name} - ${age}`;
        userList.appendChild(li);
    });

}
userSolution(users);
*/

// ---- 4

// ([1,2,3], '#')
// #
// ##
// ###
/*
let store = '';
let histogram = (arr, obj) => {
    arr.map((number) => console.log(obj.repeat(number)));
}
histogram([2, 4, 3], '#');
*/

// ---- 5
let store = [];
const rangeNumber = (startNumber, endNumber) => {
    if (startNumber <= endNumber) {
        store.push(startNumber)
        startNumber = startNumber + 1;
    } else {
        return
    }
    rangeNumber(startNumber, endNumber)
    return store;
}

console.log(rangeNumber(5, 15));