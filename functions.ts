// A function is the logical blocks of code to oragize the program .
// Like json, typescript can also be create function either named function 
// or as a anonymous function.
// Function ensure that our program is readable, maintanable, and reusable.
// A function declaration has a functions name , return type, and parameters. 

//named function : a function who have a name and can be called using function name.

// """function function_name(parameters):ReturnType{
//     return 
// }"""


function display(){
    console.log("hello nikhil shirsath");
}
display()// without calling this function code will not work.

function add (num1:number, num2:number):number{
    return num1+num2    // when we define return type then its must to return value and that values type must be same as return type.
}

console.log(add(2,11))

console.log(add(21,11))// this shows resuiblity of function
