/*const promiseSection = new Promise((resolveData, rejectData) => {
	rejectData("Failed!");
});

promiseSection
	.then((response) => {
		console.log(response);
	})
	.catch((errorValue) => {
		console.log(errorValue);
	});*/

/*const getDataOne = (numberValue) => {
	return new Promise((resolveData, rejectData) => {
		resolveData(numberValue);
	}, 3000);
};

const getDataTwo = (numberValue) => {
	return new Promise((resolveData, rejectData) => {
		resolveData(numberValue);
	}, 1000);
};

getDataOne(150)
	.then((responseData) => {
		return getDataTwo(responseData + 54);
	})
	.then((responseData) => {
		console.log(responseData);
	});*/

/*const promiseOne = new Promise((resolveData, rejectData) => {
	resolveData(["React", "Java Script"]);
});

const promiseTwo = new Promise((resolveData, rejectData) => {
	resolveData(["Node", "Java"]);
	//rejectData("API Failed!");
});

promiseOne.then((responseData) => {
	console.log(responseData);
});

promiseTwo.then((responseData) => {
	console.log(responseData);
});

const allPromise = Promise.all([promiseOne, promiseTwo]);

allPromise
	.then((responseData) => {
		console.log(responseData.flat(Infinity));
	})
	.catch((error) => {
		console.log(error);
	});
*/

const promiseOne = new Promise((resolveData, rejectData) => {
	resolveData(["React", "Java Script"]);
	//rejectData("Failed!");
});

const promiseTwo = new Promise((resolveData, rejectData) => {
	//resolveData(["Node", "Java"]);
	rejectData("API Failed!");
});

const allPromise = Promise.race([promiseOne, promiseTwo]);

allPromise
	.then((responseData) => {
		console.log(responseData);
	})
	.catch((error) => {
		console.log(error);
	});
