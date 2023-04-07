const makOver = () => {
	try {
		throw new Error("This is coustomn error!");
	} catch (err) {
		console.error(err.name);
		console.error(err.message);
		console.error(err.stack);
	}
};

makOver();

// function coustomError(message) {
// 	this.message = message;
// 	this.name = "Custome Error";
// 	this.stack = `${this.name} : ${this.message}`;
// }
