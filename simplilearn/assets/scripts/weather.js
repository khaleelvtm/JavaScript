let iconElement = document.querySelector(".weather-icon");
let locationIcon = document.querySelector(".location-icon");
let tempElement = document.querySelector(".temprature-value p");
let descElement = document.querySelector(".temprature-description p");
let locationElement = document.querySelector(".location p");
let notificationElement = document.querySelector(".notification p");

let input = document.getElementById("searchLocation");
let city = "";
let latitude = 0.0;
let longitude = 0.0;

// Function
input.addEventListener("keyup", (event) => {
	if (event.keyCode === 13) {
		event.preventDefault();
		city = input.value;

		getSearchWeather(city);
		console.log(city);
	}
});

let weather = {};
weather.temprature = {
	unit: "celsius",
};

let KELVIN = 273;

let API_KEY = "12407a0d520b46c6191cdf6cf0c81d95";

if ("geolocation" in navigator) {
	navigator.geolocation.getCurrentPosition(setPosition, showError);
} else {
	notificationElement.textContent = "Browser disnot support";
}

function setPosition(position) {
	latitude = position.coords.latitude;
	longitude = position.coords.longitude;

	getWeather(latitude, longitude);
}

locationIcon.addEventListener("click", (event) => {
	console.log("click");
	getWeather(latitude, longitude);
});

function showError(error) {
	notificationElement.textContent = `${error.message}`;
}

function getSearchWeather(city) {
	let api = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
	fetch(api)
		.then((reponse) => {
			let data = reponse.json();
			return data;
		})
		.then((data) => {
			weather.temprature.value = Math.floor(data.main.temp - KELVIN);
			weather.description = data.weather[0].description;
			weather.iconId = data.weather[0].icon;
			weather.city = data.name;
			weather.country = data.sys.country;
		})
		.then(() => {
			displayWeather();
		});
}

function getWeather(latitude, longitude) {
	let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
	fetch(api)
		.then((reponse) => {
			let data = reponse.json();
			return data;
		})
		.then((data) => {
			weather.temprature.value = Math.floor(data.main.temp - KELVIN);
			weather.description = data.weather[0].description;
			weather.iconId = data.weather[0].icon;
			weather.city = data.name;
			weather.country = data.sys.country;
		})
		.then(() => {
			displayWeather();
		});
}

function displayWeather() {
	iconElement.innerHTML = `<img src="https://openweathermap.org/img/wn/${weather.iconId}@2x.png">`;
	console.log("icon:", weather.iconId);
	tempElement.innerHTML = `${weather.temprature.value} * <span>C</span>`;
	descElement.innerHTML = weather.description;
	locationElement.innerHTML = `${weather.city}, ${weather.country}`;
}
