let myObject = {
    id: 0,
    name: 'John',
    company: 'Freston',
};

console.log(myObject);
console.log(typeof myObject);

let myJSON = `{
    "id": 1,
    "name": "Smith",
    "company": "Google"
}`;

console.log(myJSON);

const parsedJSON = JSON.parse(myJSON);
console.log(parsedJSON);
console.log(typeof parsedJSON);

const stringyJSON = JSON.stringify(myObject);
console.log(stringyJSON);
console.log(typeof stringyJSON);