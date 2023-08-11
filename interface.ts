// An interface is a structure which acts as contract in our application.
// It defines the syntax for classes to follow , means a class which implements 
// an interface is bound to implement all its members. it cannot be instantiate
// but can be refrenced bu the class which implements it.

// ducktyping
// ==========
// The tyopescript compiler uses interface for type checking that is also known as 
// duck typing or structural subtyping. 

// Its part of interface 
//its used insted of multiple inheritance.

//we only declares properties in interface but not define them.
//we must to define all the properties an emethods when we uses interface. 

interface keypair{
    key:number;
    value:string;
}

function show(){
    let interface_variable :keypair;
    interface_variable={key:11, value:"nikhil"}
    //let kp2:keypair={key:1,val:""} //at the time of assigning values properties name must be same.
    // let kp4:keypair={value:"",key:22}// changers in the sequence doesnt make any problem in the interface defination
    console.log(interface_variable)
}

interface calculation{
    sum(first:number, second:number)    //here we are difining a method
}

let calculator:calculation={
    sum(first:number,second:number):number{
        return first+second
    }
}