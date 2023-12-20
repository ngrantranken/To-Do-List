const $ = selector => document.querySelector(selector);

let todo = ["Clean Bedroom", "Clean Bathroom", "Take out trash", "Feed pets", "Go to store"];
let input = $("#input");
let list = $("#todoList");
let error = $("#error");
for (let i = 0; i < todo.length; i++) {
    let li = document.createElement('li');
    let btn = document.createElement('input');
    li.innerText = todo[i];
    btn.id = "trash" + i;
    btn.type = "image";
    btn.src = "images/trash.svg";
    btn.className = "removeButton";
    list.appendChild(li);
    li.appendChild(btn);
}

function addToList() {
    if (input.value === "") {
        error.innerText = "Please do not leave the box empty.";
    }   else {
        error.innerText = "";
        todo.push(input.value);
        let li = document.createElement('li');
        let btn = document.createElement('input');
        btn.id = "trash" + (todo.length - 1);
        btn.type = "image";
        btn.src = "images/trash.svg";
        btn.className = "removeButton";
        li.innerText = todo[todo.length - 1];
        list.appendChild(li);
        li.appendChild(btn);
        let rButtons = document.getElementsByClassName("removeButton")
        rButtons[rButtons.length - 1].addEventListener('click', removeFromList);
    }
}

function removeFromList() {
    this.parentNode.remove();
}

document.addEventListener("DOMContentLoaded", () => {
    $("#addButton").addEventListener("click", addToList);

    let rButtons = document.getElementsByClassName("removeButton");
    for (let i = 0; i < rButtons.length; i++) {
        rButtons[i].addEventListener('click', removeFromList);
    }
});