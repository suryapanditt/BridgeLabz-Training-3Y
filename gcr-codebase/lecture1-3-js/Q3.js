
let expenses = [3000, 1000, 5000, 800, 700];

let total = 0;

for (let i = 0; i < expenses.length; i++) {
    total += expenses[i];
}

let average = total / expenses.length;
let tax = total * 10 / 100;
let finalAmount = total + tax;

console.log("Total Expense:", total.toFixed(2));
console.log("Average Expense:", average.toFixed(2));
console.log("Tax:", tax.toFixed(2));
console.log("Final Amount:", finalAmount.toFixed(2));
