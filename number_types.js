// like javascript, all numbers in typescript are stored as floating 
// point values .
// this number values are treated as number data type .
// the numaric data can be represent as both integers ans fractions
var num = 11;
console.log(num);
var num1 = 11;
var num2 = 10.22;
console.log(num1 + num2);
console.log(typeof (num1)); //number
console.log(typeof (num2)); //number
var sum = num1 + 11;
var division = num1 / num2;
console.log(sum);
console.log(division);
console.log(typeof (sum));
console.log(typeof (division));
function add(num5, num6) {
    var sum1 = num5 - num6;
    console.log(sum1);
}
// add(20,"chandan") //this will give not a number error
console.log(Number.MAX_VALUE); //this code will show the maximum limit of the number
console.log(Number.MIN_VALUE); //this will show that minimum number value of number type
console.log(Number.MAX_SAFE_INTEGER); //this will show that minimum number value of number type
console.log(Number.MIN_SAFE_INTEGER); //this will show that minimum number value of number type
