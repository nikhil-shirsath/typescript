// An interface is a structure which acts as contract in our application.
// It defines the syntax for classes to follow , means a class which implements 
// an interface is bound to implement all its members. it cannot be instantiate
// but can be refrenced bu the class which implements it.
function show() {
    var interface_variable;
    interface_variable = { key: 11, value: "nikhil" };
    //let kp2:keypair={key:1,val:""} //at the time of assigning values properties name must be same.
    // let kp4:keypair={value:"",key:22}// changers in the sequence doesnt make any problem in the interface defination
    console.log(interface_variable);
}
