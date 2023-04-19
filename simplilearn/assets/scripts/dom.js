//
document.addEventListener;
let listItems = document.querySelector(".movies-list");

listItems.addEventListener("click", (element) => {
	if (element.target.className == "delete") {
		let li = element.target.parentElement;
		li.parentNode.removeChild(li);
	}
});

let addForm = document.getElementById("movies-add");
addForm.addEventListener("submit", (element) => {
	element.preventDefault();
	let value = document.querySelector(".movies-add input").value;
	let li = document.createElement("li");
	let createItem = `<span class="name">${value}</span><button class="delete">Delete</button>`;

	li.innerHTML = createItem;
	listItems.appendChild(li);
});
