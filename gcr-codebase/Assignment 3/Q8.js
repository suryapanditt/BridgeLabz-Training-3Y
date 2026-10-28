
"use strict";

function demo(a, b) {
    let c = 10;
    console.log("First:", a);
    console.log("Second:", b);
    console.log("Total:", c);
}

demo(5, 10);


// Without strict mode, duplicate parameters like function demo(a, a) are allowed in a normal, non-strict function.
// With strict mode, duplicate parameter names cause a SyntaxError.
// Assigning to undeclared total causes a ReferenceError in strict mode.
// Deleting a declared variable using delete total is not allowed in strict mode.
// Correct code uses different parameter names and declares variables with let or const.