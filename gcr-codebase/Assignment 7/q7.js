const box = document.getElementById("box");
const coordinates = document.getElementById("coordinates");

box.addEventListener("mousemove", function (e) {
    const rect = box.getBoundingClientRect();

    coordinates.textContent =
        "clientX: " + e.clientX + " | clientY: " + e.clientY;
});

box.addEventListener("dblclick", function (e) {
    const rect = box.getBoundingClientRect();
    const dot = document.createElement("div");

    dot.setAttribute("class", "dot");
    dot.style.left = (e.clientX - rect.left) + "px";
    dot.style.top = (e.clientY - rect.top) + "px";

    box.appendChild(dot);
});