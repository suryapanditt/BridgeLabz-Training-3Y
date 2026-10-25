
let Door = true;
let Window = true;
let Alarm = true;
let Owner = true;

if (Alarm && Door && Window && Owner) {
    console.log("Secure");
} else {
    console.log("Unsafe");
}

isOwnerInside = false;

if (Alarm && Door && Window && Owner && isOwnerInside) {
    console.log("Secure");
} else {
    console.log("Unsafe");
}

console.log(!isOwnerInside);
