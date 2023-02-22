// const newFunc = async () => {
// 	return 15;
// };

// let result = newFunc();
// result.then((data) => {
// 	console.log(data);
// });

// -------

console.log("Start");
const linkData = linkFunc().then((data) => {
	console.log(data);
});

console.log("End");

async function linkFunc() {
	try {
		const data = await fetch(
			"https://jsonplaceholder.typictrtode.com/todos/1"
		);
		const jsonData = await data.json();
		return jsonData;
	} catch (e) {
		console.log("Error Checked!");
		return {};
	}
}
