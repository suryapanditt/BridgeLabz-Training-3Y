
async function a() {
    try {
        let b = await fetch("https://fakestoreapi.com/products");

        if (!b.ok) {
            throw new Error("Request failed");
        }

        let c = await b.json();

        for (let i = 0; i < c.length; i++) {
            console.log("Product:", c[i].title);
            console.log("Price: $" + c[i].price);
            console.log("Image:", c[i].image);
            console.log("----------------------");
        }
    } catch (error) {
        console.log("Failed to load products. Please try again.");
    }
}

a();
