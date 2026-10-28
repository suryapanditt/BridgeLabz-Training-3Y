const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const largeImage = document.getElementById("largeImage");

gallery.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        largeImage.src = e.target.src;
        modal.style.display = "flex";
    }
});

modal.addEventListener("click", function () {
    modal.style.display = "none";
});

largeImage.addEventListener("click", function (e) {
    e.stopPropagation();
});