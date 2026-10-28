const search = document.getElementById("search");
const rows = document.querySelectorAll("#studentList tr");
const message = document.getElementById("message");

search.addEventListener("input", function () {
    const value = search.value.toLowerCase();
    let count = 0;

    rows.forEach(function (row) {
        const text = row.textContent.toLowerCase();

        if (text.includes(value)) {
            row.style.display = "";
            count++;
        } else {
            row.style.display = "none";
        }
    });

    message.textContent = count === 0 ? "No results found" : "";
});