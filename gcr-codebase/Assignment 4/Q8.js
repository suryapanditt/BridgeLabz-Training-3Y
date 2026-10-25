
let user = {
    name: "John",
    email: "john@mail.com",
    age: 21
};

document.getElementById("name").value = user.name;
document.getElementById("email").value = user.email;
document.getElementById("age").value = user.age;

function show() {
    document.getElementById("result").innerText =
        "Name: " + user.name +
        " | Email: " + user.email +
        " | Age: " + user.age;
}

show();

document.getElementById("form").onsubmit = function(e) {
    e.preventDefault();

    user.name = document.getElementById("name").value;
    user.email = document.getElementById("email").value;
    user.age = Number(document.getElementById("age").value);

    console.log(user);
    show();
};
