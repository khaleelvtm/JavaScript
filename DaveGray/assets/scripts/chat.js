// Chat

window.Tawk_API = window.Tawk_API || {};
const widgetOpen = function () {
	var s1 = document.createElement("script"),
		s0 = document.getElementsByTagName("script")[0];
	s1.async = true;
	s1.src = "https://embed.tawk.to/643040744247f20fefea65f8/1gte7nhtj";
	s1.charset = "UTF-8";
	s1.setAttribute("crossorigin", "*");
	s0.parentNode.insertBefore(s1, s0);
};
window.Tawk_API.onLoad = () => {
	window.Tawk_API.maximize();
	return setTimeout(findIframeSection, 1000);
};
const widgetBtn = document.getElementById("clickBtn");
widgetBtn.addEventListener("click", widgetOpen);

const findIframeSection = () => {
	let selectIframe = document.getElementsByTagName("iframe");
	let findButton =
		selectIframe[0].contentWindow.document.querySelectorAll("button");
	findButton[0].addEventListener("click", (event) => {
		findButton[0].style.display = "none";
	});
};
