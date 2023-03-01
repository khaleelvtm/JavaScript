// document.body.innerHTML = `
//     <div>
//         <h1>Heading</h1>
//         <p>Text : 677</p>
//     </div>
// `;
let userName = "John";
let age = 26;

let value = `The ${userName} age is ${age}`;
console.log(value);

let aveAge = `The age is ${age > 25 ? "High" : "Low"}`;
console.log(aveAge);

// ------------------------

const product = [
	{
		productName: "Pen",
		price: 25,
	},
	{
		productName: "Book",
		price: 40,
	},
	{
		productName: "NoteBook",
		price: 32,
	},
];

document.body.innerHTML = product.map((item) => {
	return `
    <div>
        <h1>Name: ${item.productName}</h1>
        <p>Price: ${item.price}</p>
    </div>`;
});
