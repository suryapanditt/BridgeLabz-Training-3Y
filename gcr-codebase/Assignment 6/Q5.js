
function a(callback) {
    setTimeout(() => {
        console.log("Design");
        callback();
    }, 1000);
}

function b(callback) {
    setTimeout(() => {
        console.log("Build");
        callback();
    }, 1000);
}

function c(callback) {
    setTimeout(() => {
        console.log("Test");
        callback();
    }, 1000);
}

function d(callback) {
    setTimeout(() => {
        console.log("Deploy");
        callback();
    }, 1000);
}

function e() {
    setTimeout(() => {
        console.log("Celebrate");
    }, 1000);
}

a(() => {
    b(() => {
        c(() => {
            d(() => {
                e();
            });
        });
    });
});
