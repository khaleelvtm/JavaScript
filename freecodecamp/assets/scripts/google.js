//
let saveButton = document.getElementById("saveBtn");
let inputData = document.getElementById("typeInput");
let saveData = [];
let saveDataList = document.getElementById("saveList");
let deleteBtn = document.getElementById("deleteBtn");
let saveTabBtn = document.getElementById("tabBtn");
let tabTitle = document.getElementById("tabTitle");

let localData = JSON.parse(localStorage.getItem("Links"));

//let tabs = [{ url: "www.instagram.com" }];

if (localData) {
	saveData = localData;
	renderData(saveData);
}

function renderData(leads) {
	let listItem = "";
	for (let i = 0; i < leads.length; i++) {
		listItem += `<li> <a href='${leads[i]}' target='_blank'>${leads[i]}</a></li>`;
	}
	saveDataList.innerHTML = listItem;
}

function saveLocalStorage() {
	localStorage.setItem("Links", JSON.stringify(saveData));
}

saveButton.addEventListener("click", function () {
	saveData.push(inputData.value);
	renderData(saveData);
	inputData.value = "";
	inputData.focus();
	saveLocalStorage();
});

saveTabBtn.addEventListener("click", function () {
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		//tabTitle.innerText = tabs[0].title;
		saveData.push(
			tabs[0].url,
			tabs[0].title,
			tabs[0].favIconUrl,
			tabs[0].pendingUrl
		);
		saveLocalStorage();
		renderData(saveData);
	});
});

deleteBtn.addEventListener("dblclick", function () {
	localStorage.clear();
	saveDataList.innerHTML = "";
});
