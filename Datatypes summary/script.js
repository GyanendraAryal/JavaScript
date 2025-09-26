//#Primitive-7
//String,Number,Null,Boolean,Undefined,Symbol,BigInt
    const score=100;
    const scoreValue=100.25;

    const isLoggedIn=false;
    const outsideTemp=null;
    let userEmail;

    const id=Symbol('123');
    const anotherid=Symbol('123');
    console.log(id===anotherid);
    console.log(typeof id);
    const bigNumber=5555114478896622241n;//n represents BigInt
//#Reference type(Non-primitive)
//Array,Objects,Function

const heros=["shaktiman","superman","ironman"]//Array

//Objects
let myObj={
    name:"Gyanendra Aryal",
    age:22,
}

//Functions
const myFunction= function(){
    console.log("Hello World");
};
console.log(myFunction());