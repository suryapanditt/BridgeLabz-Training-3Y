
"use strict";

const a = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

try {
    for (let i = 0; i < a.length; i++) {
        let b = Number(a[i].salary);
        let c = Number(a[i].years);

        if (a[i].name === undefined || a[i].salary === undefined || a[i].years === undefined || Number.isNaN(b) || Number.isNaN(c)) {
            throw new Error("Invalid employee data");
        }

        let d;

        if (c > 3) {
            d = b * 0.1;
        } else {
            d = b * 0.05;
        }

        console.log(`Name: ${a[i].name}, Salary: ${b}, Years: ${c}, Bonus: ${d}`);
    }
} catch (e) {
    console.log("Error:", e.message);
}
