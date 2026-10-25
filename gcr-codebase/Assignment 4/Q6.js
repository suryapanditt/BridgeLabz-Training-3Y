
class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        this.salary = this.salary + this.salary * percent / 100;
    }
}

let a = [
    new Employee(1, "Amit", "HR", 30000),
    new Employee(2, "Rahul", "IT", 40000),
    new Employee(3, "Ravi", "Finance", 35000),
    new Employee(4, "Priya", "Sales", 25000),
    new Employee(5, "Neha", "IT", 45000)
];

a[0].applyBonus(10);

for (let i = 0; i < a.length; i++) {
    console.log(a[i].name, a[i].getAnnualSalary());
}

let total = a.reduce((sum, x) => {
    return sum + x.getAnnualSalary();
}, 0);

console.log("Total Annual Payout:", total);
