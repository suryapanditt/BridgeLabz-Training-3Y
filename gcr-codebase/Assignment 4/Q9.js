
class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, quantity) {
        this.items.push({
            name: name,
            price: price,
            quantity: quantity
        });
    }

    getTotal() {
        let a = 0;

        for (let i = 0; i < this.items.length; i++) {
            a += this.items[i].price * this.items[i].quantity;
        }

        return a;
    }

    applyCoupon(code) {
        let p = /^(SAVE|DISC)\d+$/;

        if (p.test(code)) {
            let a = Number(code.match(/\d+/)[0]);

            if (a > 100) {
                console.log("Invalid Discount");
                return this.getTotal();
            }

            return this.getTotal() - this.getTotal() * a / 100;
        } else {
            console.log("Invalid Coupon");
            return this.getTotal();
        }
    }
}

let a = new Cart();

a.addItem("Laptop", 45000, 1);
a.addItem("Mouse", 500, 2);
a.addItem("Book", 600, 1);

console.log("Total:", a.getTotal());
console.log("Final Total:", a.applyCoupon("SAVE20"));
