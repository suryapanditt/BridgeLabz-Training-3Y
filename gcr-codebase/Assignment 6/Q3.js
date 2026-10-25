
function getBugs() {
    return new Promise((resolve, reject) => {
        let a = Math.random() > 0.5;

        setTimeout(() => {
            if (a) {
                resolve(["UI glitch", "API timeout", "Login failure"]);
            } else {
                reject("Failed to fetch bugs");
            }
        }, 1000);
    });
}

getBugs()
    .then(a => console.table(a))
    .catch(a => console.log(a));
