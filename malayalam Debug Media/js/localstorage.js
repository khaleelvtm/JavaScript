const input = document.querySelector("input");
const loginBtn = document.querySelector("#login");
const logoutBtn = document.querySelector("#logout");
const h1 = document.querySelector("h1");

loginBtn.onclick = () => {
	if (input.value) {
		localStorage.setItem("token", input.value);
		h1.innerText = "Welcome User";
	}
};

if (localStorage.getItem("token") !== null) {
	h1.innerText = "Welcome User";
}

logoutBtn.onclick = () => {
	localStorage.clear();
	location.reload();
};
