// JS DOM

let list = document.querySelector("ul");
list.addEventListener("click", function (e) {
    if (e.target.className === "delete") {
        let li = e.target.parentElement;
        li.remove();
    }
});

let addForm = document.forms["add-book"];
addForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let value = addForm.querySelector("#textInput");

    let li = document.createElement("li");
    let bookName = document.createElement("span");
    let deleteBtn = document.createElement("span");

    bookName.classList.add("name");
    deleteBtn.classList.add("delete");

    bookName.innerHTML = value.value;
    deleteBtn.innerHTML = "Delete";

    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);

    value.value = "";
});

let hideAll = document.querySelector("#hideAll");
hideAll.addEventListener("change", function () {
    if (hideAll.checked) {
        list.style.display = "none";
    } else {
        list.style.display = "flex";
    }
});

let search = document.forms["search-books"].querySelector("input");
search.addEventListener("keyup", function (e) {
    let term = e.target.value.toLowerCase();
    let books = list.getElementsByTagName("li");

    Array.from(books).forEach(function (book) {
        let title = book.firstElementChild.textContent;

        if (title.toLowerCase().indexOf(term) != -1) {
            book.style.display = "flex";
        } else {
            book.style.display = "none";
        }
    });
});

// Tabs
let tabs = document.querySelector(".tabs");
let panels = document.querySelectorAll(".panel");

tabs.addEventListener("click", function (e) {
    if (e.target.tagName == "LI") {
        console.log(e);
        console.log(e.target);
        console.log(e.target.tagName);

        let targetPanel = document.querySelector(e.target.dataset.target);
        panels.forEach(function (panel) {
            if (panel == targetPanel) {
                panel.classList.add("active");
            } else {
                panel.classList.remove("active");
            }
        });
    }
});
