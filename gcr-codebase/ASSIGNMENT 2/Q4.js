
let arr = [];

for (let i = 0; i < 8; i++) {
    arr.push(Math.floor(Math.random() * 71) + 30);
}

let high = Math.max(...arr);
let low = Math.min(...arr);

let total = arr.reduce((sum, score) => sum + score, 0);
let avg = total / arr.length;

let pass = arr.filter(score => score >= 50);

console.log("Scores:", arr);
console.log("Highest Score:", high);
console.log("Lowest Score:", low);
console.log("Average Score:", avg.toFixed(2));
console.log("Passed Students:", pass.length);
