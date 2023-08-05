// We use string datatype to represent the text in typescript. 
// String type work with texual data .
// We includes string leterals in our script by enlosing them in single or double quotes.



// it also represents sequence of unicode charectors .
// It embedded the expression in the form of ${expr}

var str:string ="nikhil shirsath"

document.write(str)

var str1="nikhil "
document.write("\n"+typeof(str1))

var str2:string=""
var str2=''
console.log(typeof(str2)+""+str2)

//concadination appending one string after another one is called concadination 
let my_name="nikhil"
let my_profile ="full stack devloper"
let my_data ="hello My name is "+my_name+" and I am  a "+my_profile+" in continual engine."

//ES6 ways to write 
//using this tild we can also use html tags
// `tild ` : this is used to write html multiline we uses tild expressions.
let output1:string =`<h1>${my_name} </h1></br> works as ${my_profile} in MNC`
console.log(my_data)
document.write(output1)
