
class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount(a) {
        this.price = this.price - this.price * a / 100;
    }

    display() {
        return `${this.id} ${this.name} ${this.price} ${this.category}`;
    }
}

let p = [
    new Product(1, "Laptop", 45000, "Electronics"),
    new Product(2, "Mouse", 500, "Electronics"),
    new Product(3, "Shoes", 2500, "Fashion")
];

p[0].applyDiscount(10);

for (let i = 0; i < p.length; i++) {
    console.log(p[i].display());
}

let a = p.filter(x => x.price > 1000);

console.log("Products above 1000:");
for (let i = 0; i < a.length; i++) {
    console.log(a[i].display());
}
