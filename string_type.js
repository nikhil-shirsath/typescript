// We use string datatype to represent the text in typescript. 
// String type work with texual data .
// We includes string leterals in our script by enlosing them in single or double quotes.
// it also represents sequence of unicode charectors .
// It embedded the expression in the form of ${expr}
var str = "nikhil shirsath";
document.write(str);
var str1 = "nikhil ";
document.write("\n" + typeof (str1));
var str2 = "";
var str2 = '';
console.log(typeof (str2) + "" + str2);
//concadination appending one string after another one is called concadination 
var my_name = "nikhil";
var my_profile = "full stack devloper";
var my_data = "hello My name is " + my_name + " and I am  a " + my_profile + " in continual engine.";
//ES6 ways to write 
// `tild ` : this is used to write html multiline we uses tild expressions.
var output1 = "<h1>".concat(my_name, " </h1></br> works as ").concat(my_profile, " in MNC");
console.log(my_data);
document.write(output1);
