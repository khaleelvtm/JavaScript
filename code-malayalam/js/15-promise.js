const myFetch = (url) => {
	return new Promise((urlResolve, urlReject) => {
		$.ajax({
			type: "GET",
			url: url,
			success: (msg) => {
				urlResolve(msg);
			},
			error: (xhr, text) => {
				urlReject(text);
			},
		});
	});
};

// --------------------------

console.log("Requesting 1");
const urlLink = myFetch("https://jsonplaceholder.typicode.com/todos/1");
const urlOne = urlLink.then((data) => {
	console.log(data);
	return myFetch("https://jsonplaceholder.typicode.com/todos/2");
});
const urlTwo = urlOne.then((data) => {
	console.log(data);
	return myFetch("https://jsonplaceholder.typicode.com/todos/3");
});
urlTwo.then((data) => {
	console.log(data);
});

console.log("Requesting 2");
const urlLinkOne = myFetch("https://jsonplaceholder.typicode.com/todos/1")
	.then((data) => {
		console.log(data);
		return myFetch("https://jsonplaceholder.typicode.com/todos/2");
	})
	.then((data) => {
		console.log(data);
		return myFetch("https://jsonplaceholder.typicode.com/todos/3");
	})
	.then((data) => {
		console.log(data);
	});

console.log("Requesting 3");
fetch("https://jsonplaceholder.typicode.com/todos/11")
	.then((data) => {
		return data.json();
	})
	.then((data) => {
		console.log(data);
	});

// Promis catch
const getJson = (url) => {
	return fetch(url).then((data) => {
		return data.json();
	});
};

console.log("======== Requesting One");
getJson("https://jsonplaceholder.typicodedsdsdsd.com/todos/1")
	.then((data) => {
		console.log(data);
		console.log("======== Requesting Two");
		return getJson("https://jsonplaceholder.typicode.com/todos/2");
	})

	.then((data) => {
		console.log(data);
		console.log("======== Requesting Three");
		return getJson("https://jsonplaceholder.typicode.com/todos/3");
	})
	.then((data) => {
		console.log(data);
	})
	.catch((error) => {
		console.log("ERROR:", error);
	});

// Resolve & Reject
const cache = {
	name: "John Doe",
};
const getJsonTwo = (url) => {
	if (cache) {
		return Promise.reject(cache);
	}
	return fetch(url).then((data) => {
		return data.json();
	});
};

getJsonTwo("https://jsonplaceholder.typicode.com/todos/1")
	.then((data) => {
		console.log(data);
	})
	.catch((data) => {
		console.log(data);
	});

// Promis all & race
const getJsonThree = (url) => {
	return fetch(url).then((data) => {
		return data.json();
	});
};

Promise.race([
	getJsonThree("https://jsonplaceholder.typicode.com/todos/1"),
	getJsonThree("https://jsonplaceholder.typicode.com/todos/2"),
	getJsonThree("https://jsonplaceholder.typicode.com/todos/3"),
]).then((data) => {
	console.log(data);
});
