
"use strict";

function showMessage() {
    let a = "Welcome";
    debugger;
    console.log(a);
}

showMessage();

// Original code mein greeting declare nahi tha. Strict mode mein undeclared variable ko value dene par ReferenceError aata hai.
// let a = "Welcome"; se variable declare karne par error solve ho jata hai.
// debugger; par execution pause hoga. VS Code mein a ko Watch section mein add kar sakte ho.
// Call Stack mein showMessage function dikhega.