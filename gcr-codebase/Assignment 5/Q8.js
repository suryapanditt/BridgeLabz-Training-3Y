
Array.prototype.myMap = function(callback) {
    let a = [];

    for (let i = 0; i < this.length; i++) {
        a.push(callback(this[i], i, this));
    }

    return a;
};

let b = [1, 2, 3].myMap(function(num) {
    return num * 2;
});

console.log(b);
