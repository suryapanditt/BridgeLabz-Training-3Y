let bonus = 5000;

function cal(isPermanent) {
    let salary = 40000;

    if (isPermanent) {
        salary = salary + bonus;
    }

    console.log("Total Salary:", salary);
}

cal(true);
cal(false);

console.log("Global Bonus:", bonus);