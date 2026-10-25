
document.getElementById("form").onsubmit = function(e) {
    e.preventDefault();

    let a = document.getElementById("name").value;
    let b = document.getElementById("email").value;
    let c = Number(document.getElementById("seats").value);

    let p1 = /^[a-zA-Z]+$/;
    let p2 = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;

    if (!p1.test(a)) {
        alert("Invalid Name");
    } else if (!p2.test(b)) {
        alert("Invalid Email");
    } else if (c < 1 || c > 10 || !Number.isInteger(c)) {
        alert("Seats must be between 1 and 10");
    } else {
        let ticket = {
            name: a,
            email: b,
            seats: c
        };

        console.log(ticket);

        document.getElementById("result").innerText =
            "Name: " + ticket.name +
            " | Email: " + ticket.email +
            " | Seats: " + ticket.seats;
    }
};
