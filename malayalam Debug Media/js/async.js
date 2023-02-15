/*const promiseOne = new Promise((resolveData, rejectData) => {
	resolveData(["React", "Java Script"]);
	rejectData("API Failed!");
}); */

// const fatchData = async () => {
// 	const response = await promiseOne.catch((errorData) => {
// 		console.log(errorData);
// 	});
// 	if (response) {
// 		console.log(response);
// 	}
// };

/*const fatchDataTwo = async () => {
	try {
		const responseData = await promiseOne;
		console.log(responseData);
	} catch (errorData) {
		console.log(errorData);
	}
};

//fatchData();
fatchDataTwo();

// (async () => {
// 	const response = await promiseOne;
// 	console.log(response);
// })();
*/

/*const genricFatchdata = async (url) => {
	try {
		const response = await fetch(url);
		const data = await response.json();
		return data;
	} catch (error) {
		return error;
	}
};

const fetchAPIData = async () => {
	try {
		const response = await genricFatchdata(
			"https://jsonplaceholder.typicode.com/todos/1"
		);
		console.log(response);
	} catch (error) {
		console.log(error);
	}
};*/

const genricFatchdata = async (url) => {
	try {
		const response = await fetch(url);
		const data = await response.json();
		return [data, null];
	} catch (error) {
		return [null, error];
	}
};

const fetchAPIData = async () => {
	const [data, error] = await genricFatchdata(
		"https://jsonplaceholder.typicode.com/todos/1"
	);
	if (data) {
		console.log(data);
		return;
	}
	console.log(error);
};

fetchAPIData();
