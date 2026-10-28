
"use strict";

let a = 5;

for (let i = 1; i <= a; i++) {
    let b = "";

    for (let j = 1; j <= i; j++) {
        b = b + "* ";
    }

    console.log(b);
}
