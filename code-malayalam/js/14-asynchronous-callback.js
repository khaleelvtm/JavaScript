// Asynchronous Callback
let clickBtn = document.getElementById("clickButton");
clickBtn.onclick = () => {
	console.log("Start");
	$.ajax({
		url: "https://jsonplaceholder.typicode.com/todos/1",
		success: (data) => {
			console.log(data);
		},
		async: true,
	});

	console.log("End");
};
