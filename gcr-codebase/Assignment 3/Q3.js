
"use strict";

const a = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

let b = [];
let c = [];

for (let i = 0; i < a.length; i++) {
    try {
        debugger;

        if (a[i] === null) {
            throw new Error("Null entry");
        }

        if (a[i].id === undefined || a[i].amount === undefined) {
            throw new Error("Missing id or amount");
        }

        if (a[i].amount < 0) {
            throw new Error("Negative amount");
        }

        b.push(a[i]);
    } catch (e) {
        c.push(a[i]);
        console.log("Transaction", i + 1, "Error:", e.message);
    }
}

console.log("Valid Transactions:", b);
console.log("Invalid Transactions:", c);
console.log("Successful:", b.length);
console.log("Failed:", c.length);
