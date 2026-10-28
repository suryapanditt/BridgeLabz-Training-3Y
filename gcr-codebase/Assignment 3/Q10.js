
"use strict";

function outer() {
    console.log(a);
    var a = 5;

    function inner() {
        console.log(a);
        var a = 10;
    }

    inner();
}

outer();

// In outer(), var a is hoisted and initialized with undefined. Its value becomes 5 later.
// inner() has its own local variable a. That variable is also hoisted and starts as undefined.
// Therefore, both console.log(a) statements print undefined.


"use strict";

function outer() {
    console.log(a);
    var a = 5;

    const inner = () => {
        console.log(a);
        var a = 10;
    };

    inner();
}

outer();
