
document.getElementById("form").onsubmit = function(e) {
    e.preventDefault();

    let a = document.getElementById("name");
    let b = document.getElementById("email");
    let c = document.getElementById("phone");
    let d = document.getElementById("pass");

    let p1 = /^[a-zA-Z]+$/;
    let p2 = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
    let p3 = /^\d{10}$/;
    let p4 = /^(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).+$/;

    function check(x, p, id) {
        if (p.test(x.value)) {
            x.style.border = "2px solid green";
            document.getElementById(id).innerText = "";
            return true;
        } else {
            x.style.border = "2px solid red";
            document.getElementById(id).innerText = "Invalid Input";
            return false;
        }
    }

    let x = check(a, p1, "e1");
    let y = check(b, p2, "e2");
    let z = check(c, p3, "e3");
    let w = check(d, p4, "e4");

    if (x && y && z && w) {
        alert("Registration Successful");
    }
};
