
"use strict";

const a = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

let b = [];
let c = [];

for (let i = 0; i < a.length; i++) {
    try {
        debugger;

        let d = JSON.parse(a[i]);

        if (d.user === undefined || d.age === undefined) {
            throw new Error("Missing user or age");
        }

        d.age = Number(d.age);

        if (Number.isNaN(d.age)) {
            throw new Error("Invalid age");
        }

        b.push(d);
    } catch (e) {
        c.push(a[i]);
        console.log("Line", i + 1, "Error:", e.message);
    }
}

let d = b.filter(a => a.age < 18);

console.log("Clean Data:", b);
console.log("Invalid Data:", c);
console.log("Under 18:", d);
console.log("Valid Count:", b.length);
console.log("Invalid Count:", c.length);
