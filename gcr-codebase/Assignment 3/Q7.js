
"use strict";

const a = ["add", "divide", "power", "root", "subtract"];
const b = 25;
const c = 0;

for (let i = 0; i < a.length; i++) {
    try {
        let d;

        switch (a[i]) {
            case "add":
                d = b + c;
                break;

            case "divide":
                if (c === 0) {
                    throw new Error("Cannot divide by zero");
                }
                d = b / c;
                break;

            case "power":
                d = Math.pow(b, c);
                break;

            case "root":
                if (b < 0) {
                    throw new Error("Negative number root");
                }
                d = Math.sqrt(b);
                break;

            case "subtract":
                d = b - c;
                break;

            default:
                let e = new Error("Invalid operation");
                e.name = "InvalidOperationError";
                throw e;
        }

        console.log(`${a[i]} result: ${d}`);
    } catch (e) {
        console.log(`${a[i]} error: ${e.message}`);
    }
}
