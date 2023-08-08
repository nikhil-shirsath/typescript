// import { Variable } from "eslint-scope"

// A void is a return type of a function where we dont want to return any
// value from the function is known as void data type.

// > A variable of type void is not useful because we can only assign undefined or null to them .
// > An undefined data type denotes uninitilized Variable , whereas null represents a Variable whose 
// value is undefined

let learn:void = undefined
console.log(learn)

let number1
console.log(typeof(number1))

function show():void{
    document.write("hii how are you")
    console.log("hii how are you")
    // return 1  //this will give error because video cant return anything.
}

show();

let a:void;
// a="name" //this will not accept any value 

console.log(a);
console.log(typeof(a))
