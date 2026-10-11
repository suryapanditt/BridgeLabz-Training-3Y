
let marks = [80, 75, 90, 85, 70];

let total = 0;
let failed = false;

for (let i = 0; i < marks.length; i++) {
    total += marks[i];

    if (marks[i] < 35) {
        failed = true;
    }
}

let average = total / marks.length;
let percentage = total / 500 * 100;

console.log("Average:", average);
console.log("Percentage:", percentage + "%");

if (failed || percentage < 50) {
    console.log("Detained");
} else if (percentage >= 85) {
    console.log("Promoted with Distinction");
} else {
    console.log("Promoted");
}
