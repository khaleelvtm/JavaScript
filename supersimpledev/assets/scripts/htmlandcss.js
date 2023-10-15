// DOM
/*
function clickSubscribe() {
	let subscribeButton = document.querySelector(".sub-button");

	if (subscribeButton.innerHTML === "Subscribe") {
		subscribeButton.innerHTML = "Subscribed";
		subscribeButton.classList.add("is-subscribed");
	} else {
		subscribeButton.innerHTML = "Subscribe";
		subscribeButton.classList.remove("is-subscribed");
	}
}

function calculateFun() {
	let priceValue = document.querySelector("input").value;

	if (priceValue <= 40) {
		priceValue = Math.round(Number(priceValue) + 10);
	}

	document.querySelector(".calculate-result").innerHTML = `$${priceValue}`;
}

function keyEnter(event) {
	if (event.key === "Enter") {
		calculateFun();
	}
}
*/

// for (let i = 0; i < demoButton.length; i++) {
// }

function toggleFunction(select) {
	let demoButton = document.querySelector(select);
	if (!demoButton.classList.contains("is-toggled")) {
		turnOffPreviousButton();
		demoButton.classList.add("is-toggled");
	} else {
		demoButton.classList.remove("is-toggled");
	}
}
function turnOffPreviousButton() {
	let previousButton = document.querySelector(".is-toggled");
	if (previousButton) {
		previousButton.classList.remove("is-toggled");
	}
}
// let demoButton = document.querySelectorAll(".demo-button");
// for (let i = 0; i < demoButton.length; i++) {
// 	demoButton[i].addEventListener("click", function () {
// 		if (!demoButton[i].classList.contains("is-toggled")) {
// 			demoButton[i].classList.add("is-toggled");
// 		} else {
// 			demoButton[i].classList.remove("is-toggled");
// 		}
// 	});
// }
