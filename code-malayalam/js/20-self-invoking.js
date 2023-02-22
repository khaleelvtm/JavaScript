(clickOne = () => {
	var button = document.getElementById("buttonOne");
	button.style.background = "blue";
	button.onclick = () => {
		console.log(button.innerHTML);
	};
})();
