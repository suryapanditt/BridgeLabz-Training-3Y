
document.getElementById("form").onsubmit = function(e) {
    e.preventDefault();

    let a = document.getElementById("user").value;
    let b = document.getElementById("pass").value;
    let c = document.getElementById("result");

    let p1 = /^.{5,}$/;
    let p2 = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,}$/;

    if (!p1.test(a)) {
        c.innerText = "Username must have 5 characters";
    } else if (b.length < 8) {
        c.innerText = "Password must have 8 characters";
    } else if (!/[A-Z]/.test(b)) {
        c.innerText = "Uppercase letter required";
    } else if (!/[a-z]/.test(b)) {
        c.innerText = "Lowercase letter required";
    } else if (!/\d/.test(b)) {
        c.innerText = "Number required";
    } else if (!/[^a-zA-Z0-9]/.test(b)) {
        c.innerText = "Special character required";
    } else if (p2.test(b)) {
        c.innerText = "Login Successful";
    }
};
