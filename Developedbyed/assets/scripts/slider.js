let carousalSlide = document.querySelector(".carousel-slide");
let carousalImages = document.querySelectorAll(".carousel-slide img");

let nextBtn = document.querySelector("#nextBtn");
let prevBtn = document.querySelector("#prevBtn");

let counter = 1;
let size = carousalImages[0].clientWidth;

carousalSlide.style.transform = `translateX(${-size * counter}px)`;

nextBtn.addEventListener("click", () => {
	if (counter >= carousalImages.length - 1) return;
	carousalSlide.style.transition = "transform 0.4s ease-in-out";
	counter++;
	carousalSlide.style.transform = `translateX(${-size * counter}px)`;
});
prevBtn.addEventListener("click", () => {
	if (counter <= 0) return;
	carousalSlide.style.transition = "transform 0.4s ease-in-out";
	counter--;
	carousalSlide.style.transform = `translateX(${-size * counter}px)`;
});

carousalSlide.addEventListener("transitionend", () => {
	console.log("img:", carousalImages[0]);

	if (carousalImages[counter] === carousalImages[0]) {
		carousalSlide.style.transition = "none";
		counter = carousalImages.length - 2;
		carousalSlide.style.transform = `translateX(${-size * counter}px)`;
	}
	if (carousalImages[counter].id === "firstClone") {
		carousalSlide.style.transition = "none";
		counter = carousalImages.length - counter;
		carousalSlide.style.transform = `translateX(${-size * counter}px)`;
	}
});
