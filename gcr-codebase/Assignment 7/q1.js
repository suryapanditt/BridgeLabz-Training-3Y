const input = document.getElementById("productInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("productList");
let editingItem = null;

function saveEdit() {
    if (editingItem) {
        const inputBox = editingItem.querySelector("input");
        if (inputBox.value.trim() !== "") {
            editingItem.querySelector(".productName").textContent = inputBox.value.trim();
        }
        inputBox.remove();
        editingItem.querySelector(".productName").style.display = "inline";
        editingItem = null;
    }
}

addBtn.addEventListener("click", function () {
    const product = input.value.trim();

    if (product === "") return;

    const li = document.createElement("li");
    const name = document.createElement("span");
    const editBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");

    name.textContent = product;
    name.setAttribute("class", "productName");

    editBtn.textContent = "Edit";
    editBtn.setAttribute("class", "edit-btn");

    deleteBtn.textContent = "Delete";
    deleteBtn.setAttribute("class", "delete-btn");

    li.appendChild(name);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    list.appendChild(li);

    input.value = "";
});

list.addEventListener("click", function (e) {
    const li = e.target.closest("li");

    if (!li) return;

    if (e.target.classList.contains("delete-btn")) {
        if (editingItem === li) editingItem = null;
        li.remove();
    }

    if (e.target.classList.contains("edit-btn")) {
        if (editingItem) saveEdit();

        editingItem = li;

        const name = li.querySelector(".productName");
        const inputBox = document.createElement("input");

        inputBox.value = name.textContent;
        inputBox.setAttribute("class", "editInput");

        name.style.display = "none";
        li.insertBefore(inputBox, name);
        inputBox.focus();
    }
});

document.addEventListener("click", function (e) {
    if (editingItem && !editingItem.contains(e.target)) {
        saveEdit();
    }
});