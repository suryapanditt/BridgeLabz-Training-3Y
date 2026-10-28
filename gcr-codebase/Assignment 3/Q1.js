
"use strict";

const a = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

let b = [];
let c = [];

for (let i = 0; i < a.length; i++) {
    let d = Number(a[i]);

    if (a[i] === null || a[i] === undefined) {
        console.log("Value:", a[i], "Number:", d, "Boolean:", Boolean(a[i]), "String:", String(a[i]));
        continue;
    }

    if (String(a[i]).trim() === "" || Number.isNaN(d)) {
        c.push(a[i]);
        console.log("Invalid:", a[i]);
    } else {
        b.push(d);
    }

    console.log("Value:", a[i], "Number:", d, "Boolean:", Boolean(a[i]), "String:", String(a[i]));
}

console.log("Valid Numbers:", b);
console.log("Invalid Values:", c);
console.log("Valid Count:", b.length);
console.log("Invalid Count:", c.length);
