const dropdown = document.getElementById("dropdown");
const dropBtn = document.getElementById("dropBtn");
const options = document.getElementById("options");

dropBtn.addEventListener("click", function () {
    options.style.display =
        options.style.display === "block" ? "none" : "block";
});

options.addEventListener("click", function (e) {
    if (e.target.tagName === "P") {
        dropBtn.textContent = e.target.textContent;
        options.style.display = "none";
    }
});

document.addEventListener("click", function (e) {
    if (!dropdown.contains(e.target)) {
        options.style.display = "none";
    }
}, true);