
let name = "Surya";
let age = 20;
let isStudent = true;
let marks = [70, 80, 90];
let student = { name: "Surya", age: 20 };
let value = null;
let data;

console.table([
    { name: "Name", value: name, type: typeof name },
    { name: "Age", value: age, type: typeof age },
    { name: "Student", value: isStudent, type: typeof isStudent },
    { name: "Marks", value: marks, type: Array.isArray(marks) ? "array" : typeof marks },
    { name: "Student Object", value: student, type: typeof student },
    { name: "Null", value: value, type: typeof value },
    { name: "Undefined", value: data, type: typeof data }
]);
