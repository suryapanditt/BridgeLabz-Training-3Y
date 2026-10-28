const buttons = document.querySelectorAll("button");
const body = document.body;

buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        const theme = button.getAttribute("data-theme");

        body.removeAttribute("class");

        if (theme !== "light") {
            body.setAttribute("class", theme);
        }

        body.setAttribute("data-theme", theme);
    });
});