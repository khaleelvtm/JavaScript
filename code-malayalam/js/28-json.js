let e = {
	name: "john",
	age: 23,
	topic: ["java", "php", "html"],
	caption: "testing message!",
};

let testJSON = JSON.stringify(e);
console.log(testJSON);

let obj = JSON.parse(testJSON);
console.log(obj);

// let testJSON = `
//     {
//         "name": "john",
//         "age": 23,
//         "topic": ["java", "php", "html"],
//         "caption": "testing message!"
//     }
// `;
