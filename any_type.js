"use strict";
// this is a super type of all data type in typescript . It is used to represent 
// any javascript value .
// It allows us to opt-in and opt-out of type checking during compilation.
exports.__esModule = true;
// If a variable cant be represented in any of the basic data types , then it can be
// declared using "Any" data type. any type is useful when we do not know about the type of 
// value (which might be come from api or third party library). and we dont to skip the 
// type-checking on compile time.
var num1;
num1 = "nikhil";
console.log("Any data type assepts string also" + num1);
num1 = 1223;
console.log("any data type assepts number also" + num1);
num1 = true;
console.log("any data type assepts " + typeof (num1) + num1);
//problem with any data type 
function sum(no1, no2) {
    var no3 = no1 + no2;
    document.write(no3);
}
sum("4", 2);
