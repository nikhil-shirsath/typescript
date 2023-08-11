// touples are special type of data type which is used to store diffrent 
// types of data type . It allows us to express an array where the type 
// of a fixed number of elements is known, but they are not the SVGMaskElement.
// var arr:number[]=[1,3,5,6,7,3,""] //this will give an error because array stores same type of data.
var touple = ["", 1];
console.log(touple);
var roll_no = 111;
var student_name = "nikhil shirsath";
touple = [student_name, roll_no,]; //this assigning values means its overwiring values.
// overwring means it changes the previous values of the touple by assigning
console.log(touple);
// To insert new values in the touple we uses push method 
touple.push("student_name", 122);
touple.push(student_name, roll_no);
console.log(touple);
// but chagnes in swquence of arguments is not fair in the touples
// let toupe_changing_Arg_sequence :[number,string]=["",123] 
//here the sequence of the arguments are changing so it will
//  give an error
//we cant insert values more then no of arguments.
// let increase_args:[number,number,string] =[1,2,"name",2,2,""]
// touples must have same no of values as in arguments
var user_id = "0198cs191051";
var user_pass = "112cs";
var user_address = "shahpur dist burhanpur";
var is_scholership_based = true;
var fees = 20000;
var user;
user = [user_id, user_pass, user_address, is_scholership_based, fees];
console.log(user);
//how to create array of touple
var touple_array;
touple_array = [[11, "nikhil"], [12, "pradip"], [13, "dipak"]];
console.log(touple_array);
//print 13 on cconsole
console.log(touple_array[2][0]);
touple_array.push([14, "kiran"]);
console.log(touple_array);
for (var i in touple_array) {
    for (var j in touple_array[i]) {
        console.log(touple_array[i][j]);
    }
}
var employee = ["nikhil", 1000000];
employee.push("mohit", 1200000);
employee.push("pradeep", 1500000);
console.log(employee);
employee[0] = employee[0].concat("dipak");
console.log(employee);
