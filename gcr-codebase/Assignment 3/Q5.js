
"use strict";

var a = 50;

function announce() {
    console.log("Game started");
}

function startGame() {
    let b = "ready";
    console.log(b);
}

console.log(a);
announce();
startGame();

// var declaration hoist hota hai aur shuru mein uski value undefined hoti hai.
// Function declaration poori hoist hoti hai, isliye use pehle bhi call kar sakte hain.
// let declaration Temporal Dead Zone mein rehti hai jab tak declaration wali line execute nahi hoti.
// Original code mein console.log(status) par ReferenceError aata hai, kyunki status baad mein declare hua hai.


"use strict";

const a = () => {
    console.log("Game started");
};

const b = () => {
    console.log("ready");
};

a();
b();
