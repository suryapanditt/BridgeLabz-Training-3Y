
let salary = 30000;
let increment = 10;
let result = [];

for (let year = 1; year <= 5; year++) {
    salary += salary * increment / 100;

    result.push({
        Year: year,
        Salary: Math.round(salary)
    });
}

console.table(result);
