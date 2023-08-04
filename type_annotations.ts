// // #javascript is not a typed language means we cant define 
// type of its variable such as number , string , Boolean .

// However typescript is a typed language , where we can specify
// the type of variables , function paramters and object properties 


// > we can specify type using the type after the variable name , paramter 
// or StylePropertyMap. There can be a space after the colon . typescript
// includes all primitive  types of javascript . number string and boolean

//type annotation reduces chances of errors at the run type means some unexpected results


var a :number

a=10
// a="hello"    //this will give error

var message : string ="hello namste coding"

var instruction :boolean =true
// document.write(a)
document.write(typeof(a))

console.log(a)
console.warn(typeof(a))
console.log(message)
console.log(typeof(message))
console.warn(instruction)
console.log(typeof(instruction))

//this is not possible just because of type annotiations  
// a="nikhil"
// message=91117483
// instruction ="true"

function add(first:number , second:number){
    var z= first +second
    console.log(z)
}
add(10,3)

function display(month:string , date:number){
    console.log("Your birth month is "+month+" Birth date is : "+date)
}

display("name",31)