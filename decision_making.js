// // decision making
// // *decision making structure require that the programmer specifies one or more conditions
// // to be evaluated or tested by the program, along with the statement or statementsto be executed
// // if the condition is determined to be true, and optionally to be true , other statements to be 
// // executed if the condition is determined to be false.
// // decision-making construct evaluates a condition before the instrunctions ate executed.
// // Decision making constrncts in typescript are classified as follows.
// // 1. if condition 
// // 2. if..else condition
// // 3. else if and nested if conditional statenents
// // 4. switch statement 
// // 1if conditional statement 
// if the boolaean statement evaluates to true , then the block of code inside the if
// statement will be executed. If the boolean expression evaluates to false,
// then the first set of code after the end of if statement (after closing courly brases ) will be 
// executionAsyncResource.
// if we ont uses the { } then only first line is of coditionals. other lines of code are not a part of that conditional statement.
var age = 11;
if (age > 10)
    for (var i = 0; i < 10; i++)
        console.log("First line prints");
console.log("second line runs");
if (true) {
    console.log("this is second if condition");
}
if (-11)
    console.log("any value other then 0 is also taken as true in typescript");
if (!0)
    console.log("0 is taken as false in false in typescript");
//if else condition 
//else condition is execute when the given expression evaluates false then the else statement executes.
var candidate_age = 82;
if (candidate_age > 18) {
    console.log("You are elligible for vote");
}
else {
    console.log("You are not eligible for vote");
}
if (candidate_age > 18 && candidate_age < 65) {
    console.log("You are elligible for vote");
}
else if (candidate_age >= 65 && candidate_age <= 100) {
    console.log("You are not elligible because your age overlimit.");
}
else {
    console.log("data is not real");
}
//odd even check code 
var no = 22;
if (no % 2 == 0) {
    console.log("even");
}
else {
    console.log("odd");
}
//nested if statenent 
//when we have to check a multiple condition inside another if condition this callled nested if condition
//else if
//check a number is 0 or not
var number_to_check = 3;
if (number_to_check > 0) {
    console.log("number is greater then 0");
}
else if (number_to_check < 0) {
    console.log("number is less then 0");
}
else {
    console.log("the no is 0 ");
}
