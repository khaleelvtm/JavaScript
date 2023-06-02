function scrollAppear() {
	let introText = document.querySelector(".intro-text");
	let introPosition = introText.getBoundingClientRect().top;
	let screenPosition = window.innerHeight / 1.3;

	console.log("in:", introPosition, "- sc:", screenPosition);

	if (introPosition < screenPosition) {
		introText.classList.add("show");
	}
}

window.addEventListener("scroll", scrollAppear);
