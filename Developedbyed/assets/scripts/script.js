//
const navSlide = () => {
	let navList = document.querySelector(".nav-list");
	let burgerMenu = document.querySelector(".burger-menu");
	let navLinks = document.querySelectorAll(".nav-list li");

	burgerMenu.addEventListener("click", () => {
		navList.classList.toggle("nav-active");

		// Animation Links
		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = "";
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${
					index / 5 + 0.3
				}s`;
			}
		});

		// Animation Burron
		burgerMenu.classList.toggle("close");
	});
};

navSlide();
