// variables are special type of containers which are used to store
// some data temprary this data may be change during the program execution 
// thats why its called Variable : who have abilty to change theire value .
//in javscript we can define variables using three keywords 
//let , var and const 
//var : when that variable have globaly scope in the program
//ES6
//===
//let : when a variable have some restrictions on the scope in the program .
//      this have nearby block scope. this means the scope of let variables islimited to its containing block.
//      its like local variable.
//const : we after once assign a value to variable which cant be change that comes in const .
var my_name = "nikhil";
//variables first prefrence is its local variable if local variable is not avalable then it will use its parent  variable .
function vote() {
    var age = 1000;
    if (age > 18) {
        console.log(my_name); //const assisible globally
        var more_to_vote = age - 18;
        console.log("You are eligible to vote " + age); //here we can use parents variable inside childs scope
        console.log("Your age is : " + more_to_vote + " Years more to vote ");
        console.log(assible_everywhere + " assisible inside theire if block");
    }
    else {
        console.log("Your not elligible to vote ");
    }
    // console.log(more_to_vote) //this variable is not assisible outside the block because of let 
}
vote();
//console.log(age) //this cant use because its out of scope 
var assible_everywhere = 1000;
console.log(assible_everywhere + " assisible inside theire if block");
//we can redeclare variables using var keyword 
var assible_everywhere = 100;
console.log("After redeclaration of assisible_everywhere " + assible_everywhere);
//we cant redeclate let keywords variable inside same block of scope .
// let first:string ="nikhil"
// let first:string="shirsath" 
// let assible_everywhere:number=111  //this will give error of duplicate identifier
// const : constants  can be declare using const keyword this cant be cahange once declate
//      its declaration and defination both are on the same time . We cant change its value after assign value .
//      its declaration defination both at the same time .
//its scope is globally but dont have to use before initilize.
// my_name="pradip" // this will give error because we cant change const value after initilization
var your_name = "pradip";
console.log(your_name);
if (true) {
    console.log(your_name);
}
