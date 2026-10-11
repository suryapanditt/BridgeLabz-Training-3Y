
let num1 = Math.floor(Math.random() * 20) + 1;
let num2 = Math.floor(Math.random() * 20) + 1;

let operators = ["+", "-", "*", "/"];
let index = Math.floor(Math.random() * 4);
let operator = operators[index];

let answer;

switch (operator) {
    case "+":
        answer = num1 + num2;
        break;

    case "-":
        answer = num1 - num2;
        break;

    case "*":
        answer = num1 * num2;
        break;

    case "/":
        answer = (num1 / num2).toFixed(2);
        break;
}

console.log("Question:", num1, operator, num2);
console.log("Correct Answer:", answer);
