
function applyOperation(numbers, operation) {
    return numbers.map(operation);
}

let a = [1, 2, 3, 4];

let b = applyOperation(a, function(num) {
    return num * 2;
});

let c = applyOperation(a, function(num) {
    return num * num;
});

console.log("Double:", b);
console.log("Square:", c);
