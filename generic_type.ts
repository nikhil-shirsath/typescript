// generic 
// ======

// generic is used to create a component which can work with variety of data type rather then single one. 
// It allows a way to create reusable components. It ensures that the peogram is flexible as well as 
// scalable in the long term. 
// Typescript uses generics with the type variable <T> that denotes types.
// the type of generic finction is just like non-generic function with the 
// type parameters listed first .
// similarly
// =========
// to function declaration. 

function show_function<T>(arg:T):T{
    return arg;
}

var output = show_function<string>("hello nikhil")
let output2 = show_function<number>(11)
console.log(output)
console.log(output2)