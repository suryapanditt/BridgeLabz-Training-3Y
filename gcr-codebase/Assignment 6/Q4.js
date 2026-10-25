
function a(name, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) {
                resolve(name + " completed");
            } else {
                reject(name + " failed");
            }
        }, time);
    });
}

let b = a("Server A", 2000);
let c = a("Server B", 3000);

Promise.all([b, c])
    .then(() => console.log("Deployment completed for all servers"))
    .catch(error => console.log("Error:", error));

Promise.race([b, c])
    .then(result => console.log("Fastest response:", result))
    .catch(error => console.log("Error:", error));
