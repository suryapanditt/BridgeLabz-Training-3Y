let name = " wireless headphones PRO ";

let str = name.trim().toLowerCase();

str = str.split(" ").map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
).join(" ");

str = str.replace("Pro", "Pro Edition");

console.log("Product Name:", str);
console.log("Length:", str.length);