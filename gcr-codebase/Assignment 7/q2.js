const message = document.getElementById("message");
const counter = document.getElementById("counter");
const resetBtn = document.getElementById("resetBtn");

message.addEventListener("keydown", function (e) {
    if (message.value.length >= 100 &&
        e.key.length === 1 &&
        !e.ctrlKey && !e.metaKey) {
        e.preventDefault();
    }
});

message.addEventListener("input", function () {
    const remaining = 100 - message.value.length;

    counter.textContent = remaining + " characters remaining";

    if (remaining === 0) {
        counter.style.color = "red";
    } else if (remaining <= 20) {
        counter.style.color = "yellow";
    } else {
        counter.style.color = "green";
    }
});

resetBtn.addEventListener("click", function () {
    message.value = "";
    counter.textContent = "100 characters remaining";
    counter.style.color = "green";
});