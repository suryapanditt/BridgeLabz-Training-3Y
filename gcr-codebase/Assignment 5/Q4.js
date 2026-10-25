
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

Car.prototype.getDetails = function() {
    console.log(this.brand, this.model);
};

let a = new Car("Tata", "Nexon");
let b = new Car("Hyundai", "Creta");

a.getDetails();
b.getDetails();

console.log(a.getDetails === b.getDetails);
