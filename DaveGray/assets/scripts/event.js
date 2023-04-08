//
// let clickButton = document.getElementById("clickBtn");

// clickButton.addEventListener("click", (event) => {
// 	event.stopPropagation();
// 	console.log(event.target);
// 	event.target.innerText = "Done";
// });

document.addEventListener("readystatechange", (event) => {
	if (event.target.readyState === "complete") {
		console.log("readystate : Complete", event.target);
		initApp();
	}
});

const initApp = () => {
	let submitForm = document.getElementById("submitForm");
	submitForm.addEventListener("submit", (event) => {
		event.preventDefault();
		console.log("Submit Form!", submitForm.value);
	});
};
