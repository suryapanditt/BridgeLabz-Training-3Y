
function a() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve("Profile Loaded");
            } else {
                reject("Profile Failed");
            }
        }, 2000);
    });
}

function b() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve("Posts Loaded");
            } else {
                reject("Posts Failed");
            }
        }, 1500);
    });
}

function c() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve("Messages Loaded");
            } else {
                reject("Messages Failed");
            }
        }, 1000);
    });
}

async function d() {
    let start = Date.now();

    let a1 = await Promise.allSettled([a(), b(), c()]);

    for (let i = 0; i < a1.length; i++) {
        if (a1[i].status === "fulfilled") {
            console.log("Success:", a1[i].value);
        } else {
            console.log("Failed:", a1[i].reason);
        }
    }

    console.log("Time:", Date.now() - start, "ms");
}

d();
