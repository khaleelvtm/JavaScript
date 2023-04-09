/*let myPromis = new Promise((resolve, reject) => {
	let error = false;
	if (!error) {
		resolve("this is resolved!");
	} else {
		reject("rejected this item");
	}
}); */

// console.log(myPromis);

// myPromis
// 	.then((value) => {
// 		return value + 1;
// 	})
// 	.then((newValue) => {
// 		console.log(newValue);
// 	})
// 	.catch((err) => {
// 		console.error(err);
// 	});
/*
let newPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("resolved !");
	}, 3000);
});

newPromise.then((value) => {
	console.log(value);
});

myPromis.then((value) => {
	console.log(value);
}); */

// const users = fetch("https://jsonplaceholder.typicode.com/users");
// console.log(users);

/*
const users = fetch("https://jsonplaceholder.typicode.com/users")
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		data.forEach((user) => {
			console.log(user);
		});
	});
*/

// let userEmailAddress = async () => {
// 	let response = await fetch("https://jsonplaceholder.typicode.com/users");
// 	let userData = await response.json();

// 	let userEmailArr = userData.  ((user) => {
// 		return user.email;
// 	});
// 	console.log(userEmailArr);
// };

// userEmailAddress();

/*
// GET Data 
const getDataJoke = async () => {
	let response = await fetch("https://icanhazdadjoke.com/", {
		method: "GET",
		headers: {
			Accept: "application/json",
		},
	});
	let jsonDatajoke = await response.json();
	console.log(jsonDatajoke);
};

getDataJoke();


// POST data

let setJokeData = {
	id: "jVKBQS0o4h",
	joke: "How does a scientist freshen their breath? With experi-mints!",
};

const postDataJoke = async (setJoke) => {
	let response = await fetch("https://httpbin.org/post", {
		method: "POST",
		headers: {
			"Content-type": "application/json",
		},
		body: JSON.stringify(setJoke),
	});
	let jsonResponse = await response.json();
	console.log(jsonResponse);
};

postDataJoke(setJokeData);

*/

const getDataFromForm = () => {
	const requestObj = {
		firstName: "Bruse",
		lastName: "Lee",
		categories: ["nerdy"],
	};
	return requestObj;
};

const buldRequestUrl = (requestData) => {
	return `http://api.icndb.com/jokes/random?firstName=${requestData.firstName}&1astName=${requestData.lastName}&1imitTo=${requestData.categories}`;
};

const requestJoke = async (url) => {
	const response = await fetch(url);
	const jsonResponse = await response.json();
	const joke = jsonResponse.value.joke;
	postJokeToPage(joke);
};

const postJokeToPage = (joke) => {
	console.log(joke);
};

const processJokeRequest = async () => {
	const requestData = getDataFromForm();
	const requestUrl = buldRequestUrl(requestData);
	await requestJoke(requestUrl);
	console.log("Finished!");
};

processJokeRequest();
