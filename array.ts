// an array is collection of similar data types. Like javascript, typescript 
// also allows us to work with arrays of values an array can be written in 
// two ways :

// 1. Use the type of the elements followed by []to denote an array of that
// element type:
// var list:number[]=[1234,23,43,5]

// var array_name:datat_type[]=[vales]
// 2. the second way of uses a  generic array type:

// var list:Array<data_type> =[1,2,,5,56,]

//generic way of difining array : generic means define at the run time 
// the type of array 
let array_stor :Array<string>=[""]

console.log(array_stor+typeof(array_stor))

//Normal way to declare an array 

var list :number[]=[1,2324]
console.log(list+typeof(list))//printing object

// array indexing starts from 0 
for (var i in list){
    console.log(list[i])
}