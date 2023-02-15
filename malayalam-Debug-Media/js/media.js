const header = document.querySelector(".show");
const banner = document.querySelector(".banner");
const deviceWidth = window.matchMedia("(max-width: 786px)");

window.addEventListener("resize", resizeFunction);

function resizeFunction() {
	console.log(window.innerWidth);
	if (deviceWidth.matches) {
		header.classList.add("hide");
	} else {
		header.classList.remove("hide");
	}
}

banner.addEventListener("click", () => {
	header.classList.toggle("hide");
});
