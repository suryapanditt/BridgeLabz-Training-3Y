
function a(name, message) {
    return new Promise((resolve, reject) => {
        let time = Math.floor(Math.random() * 1000) + 1000;

        setTimeout(() => {
            if (Math.random() > 0.2) {
                console.log(message);
                resolve();
            } else {
                reject(name + " failed");
            }
        }, time);
    });
}

async function runPipeline() {
    try {
        console.log("Start Pipeline");

        await a("Order", "Step 1: Order taken");
        await a("Prepare", "Step 2: Food prepared");
        await a("Pack", "Step 3: Package ready");
        await a("Dispatch", "Step 4: Out for delivery");
        await a("Deliver", "Delivery completed!");

    } catch (error) {
        console.log("Pipeline failed!");
    }
}

runPipeline();
