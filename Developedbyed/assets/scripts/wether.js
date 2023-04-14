// Wether
window.addEventListener("load", () => {
	let long;
	let lat;
	let tempDescription = document.querySelector(".temperature-description");
	let tempDegree = document.querySelector(".temperature-degree");
	let timeZone = document.querySelector(".location-timezone");
	let weatherIcon = document.querySelector(".icon img");
	let degreeSection = document.querySelector(".degree-section");
	let degreeInfo = document.querySelector(".degree-section span");

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition((position) => {
			long = position.coords.longitude;
			lat = position.coords.latitude;

			let API_KEY = "12407a0d520b46c6191cdf6cf0c81d95";
			const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;

			fetch(api)
				.then((response) => {
					return response.json();
				})
				.then((data) => {
					let { temp } = data.main;
					let { description, icon } = data.weather[0];
					let celsius = (temp - 32) * (5 / 9);

					tempDegree.textContent = temp;
					tempDescription.textContent = description;
					timeZone.textContent = data.name;
					console.log(data);

					weatherIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
					degreeSection.addEventListener("click", () => {
						if (degreeInfo.textContent === "F") {
							degreeInfo.textContent = "C";
							tempDegree.textContent = Math.floor(celsius);
						} else {
							degreeInfo.textContent = "F";
							tempDegree.textContent = temp;
						}
					});
				});
		});
	} else {
		console.log("Sorry for this not working API");
	}
});
