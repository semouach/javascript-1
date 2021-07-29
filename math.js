let roundedNumber = 3.3;
let decimal = Math.floor(roundedNumber);
let num = roundedNumber - decimal;

if (num > 0.5) {
   roundedNumber = Math.ceil(roundedNumber);
} else {
    roundedNumber = Math.floor(roundedNumber)

}
console.log(roundedNumber);
