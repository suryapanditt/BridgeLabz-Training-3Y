const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const success = document.getElementById("success");

function validateForm() {
    let valid = true;

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";

    if (nameInput.value.trim() === "") {
        document.getElementById("nameError").textContent = "Name is required";
        valid = false;
    }

    if (emailInput.value.trim() === "" || !emailInput.value.includes("@")) {
        document.getElementById("emailError").textContent = "Enter a valid email";
        valid = false;
    }

    if (passwordInput.value.length < 6) {
        document.getElementById("passwordError").textContent =
            "Password must have at least 6 characters";
        valid = false;
    }

    return valid;
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (validateForm()) {
        success.textContent = "Form Submitted Successfully";
        form.reset();
    } else {
        success.textContent = "";
    }
});

nameInput.addEventListener("input", validateForm);
emailInput.addEventListener("input", validateForm);
passwordInput.addEventListener("input", validateForm);