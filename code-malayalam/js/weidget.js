export const createButton = (name, fun) => {
	const btn = document.createElement("button");
	btn.innerText = name;
	btn.onclick = fun;
	btn.style.margin = "5px";
	document.body.appendChild(btn);
};
