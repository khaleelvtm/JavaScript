//
/*console.log("111");

setTimeout(() => {
	console.log("2222");
}, 5000);

console.log("3333"); */

/*
console.log("Start");

const getAPIData = (callback) => {
	setTimeout(() => {
		callback("My name is Rahman");
	}, 3000);
};

getAPIData((APIdataValue) => {
	console.log(APIdataValue);
});

console.log("End");*/

const getAPIDataOne = (callback) => {
	setTimeout(() => {
		callback(5);
	}, 1000);
};
const getAPIDataTwo = (callback) => {
	setTimeout(() => {
		callback(10);
	}, 1000);
};
const getAPIDataThree = (callback) => {
	setTimeout(() => {
		callback(8);
	}, 1000);
};

getAPIDataOne((value) => {
	getAPIDataTwo((valueTwo) => {
		console.log(value + valueTwo);
	});
});
