const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");
const error = document.getElementById("error");
const summary = document.getElementById("summary");

document.getElementById("next1").addEventListener("click", function () {
    if (document.getElementById("name").value.trim() === "") {
        error.textContent = "Enter your name";
        return;
    }

    error.textContent = "";
    step1.hidden = true;
    step2.hidden = false;
});

document.getElementById("back2").addEventListener("click", function () {
    step2.hidden = true;
    step1.hidden = false;
    error.textContent = "";
});

document.getElementById("next2").addEventListener("click", function () {
    const email = document.getElementById("email").value;

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        error.textContent = "Enter a valid email";
        return;
    }

    error.textContent = "";
    step2.hidden = true;
    step3.hidden = false;
});

document.getElementById("back3").addEventListener("click", function () {
    step3.hidden = true;
    step2.hidden = false;
    error.textContent = "";
});

document.getElementById("submitBtn").addEventListener("click", function () {
    const password = document.getElementById("password").value;

    if (password.length < 6) {
        error.textContent = "Password must have at least 6 characters";
        return;
    }

    error.textContent = "";
    step3.hidden = true;

    summary.textContent =
        "Name: " + document.getElementById("name").value +
        " | Email: " + document.getElementById("email").value +
        " | Registration completed successfully";
});