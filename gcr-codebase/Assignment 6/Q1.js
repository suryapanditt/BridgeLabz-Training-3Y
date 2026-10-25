
function a() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) {
                console.log("Water boiled");
                resolve();
            } else {
                reject("Water boiling failed");
            }
        }, 1000);
    });
}

function b() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) {
                console.log("Coffee brewed");
                resolve();
            } else {
                reject("Coffee brewing failed");
            }
        }, 1000);
    });
}

function c() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) {
                console.log("Coffee poured into cup");
                resolve();
            } else {
                reject("Pouring failed");
            }
        }, 1000);
    });
}

a()
    .then(b)
    .then(c)
    .then(() => console.log("Coffee ready for the team!"))
    .catch(error => console.log("Error:", error));
