// localStorage.setItem("ID", "0");
// localStorage.setItem("Name", "John");
// localStorage.setItem("Age", "25");

// document.write(localStorage.getItem("Name"));
// localStorage.removeItem("Age");

// console.log(localStorage.key(0));

// localStorage.clear();

const nameList = {
	name: "John",
	age: 25,
	id: 0,
};

localStorage.setItem("Data", JSON.stringify(nameList));
console.log(localStorage.getItem("Data"));

console.log(JSON.parse(localStorage.getItem("Data")));
