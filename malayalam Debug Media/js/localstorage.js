// localStorage.setItem("ID", "0");
// localStorage.setItem("Name", "John");
// localStorage.setItem("Age", "25");

// document.write(localStorage.getItem("Name"));
// localStorage.removeItem("Age");

// console.log(localStorage.key(0));

// localStorage.clear();

// const nameList = {
// 	name: "John",
// 	age: 25,
// 	id: 0,
// };

// localStorage.setItem("Data", JSON.stringify(nameList));
// console.log(localStorage.getItem("Data"));

// console.log(JSON.parse(localStorage.getItem("Data")));

const input = document.querySelector("input");
const loginBtn = document.querySelector("#login");
const logOut = document.querySelector("#logout");
const message = document.querySelector(".title");

loginBtn.onclick = () => {
	if (input.value) {
		localStorage.setItem("token", input.value);
		message.innerHTML = "Welcome User";
	}
};

// logOut.onclick = () => {
// 	localStorage.clear();
// 	location.reload();
// };
