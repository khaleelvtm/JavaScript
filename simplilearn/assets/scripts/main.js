const newItem = new Promise((resolve, reject) => {
	dataStatus = true;
	if (dataStatus) {
		resolve();
		//console.log(resolve());
	} else {
		reject();
	}
});

newItem
	.then(() => {
		//console.log("the new items here");
	})
	.catch(() => {
		//console.log("Sorry empty items!");
	});

/*-----------------*/

const result = function (score) {
	return new Promise((resolve, reject) => {
		console.log("calculation result..");
		if (score > 50) {
			resolve("Congragulation!, you have passed");
		} else {
			reject("Sorry, you have faild");
		}
	});
};
const grade = (response) => {
	return new Promise((resolve, reject) => {
		console.log("calculating your grade");
		resolve("your grade is A " + response);
	});
};

// result(80)
// 	.then((response) => {
// 		console.log("Result recived");
// 		return grade(response);
// 	})
// 	.then((finalGrade) => {
// 		console.log(finalGrade);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});

async function calculateResult() {
	try {
		let response = await result(40);
		console.log("Result receved");
		let finalgrade = await grade(response);
		console.log(finalgrade);
	} catch (err) {
		console.log(err);
	}
}
calculateResult();
