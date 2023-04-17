const newItem = new Promise((resolve, reject) => {
	dataStatus = true;
	if (dataStatus) {
		resolve();
		console.log(resolve());
	} else {
		reject();
	}
});

newItem
	.then(() => {
		console.log("the new items here");
	})
	.catch(() => {
		console.log("Sorry empty items!");
	});
