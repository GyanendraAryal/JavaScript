//Immediately Invoked Function Expression(IFFE)


// function coffee(){
//     console.log(`DB connected!!`);
// }
// coffee()
// (function coffee(){
//     console.log(`DB connected!!`);
// })()//Close the whole function with paranthesis and then ()
//Global scopes ko pollution le cause garne problems bata safe rahana

// ( () =>{
//     console.log(`DB CONNECTED SUCESSFULLY`);
    
// } )(name);//arrow function should end with semi-colon
( (name) =>{
    console.log(`DB CONNECTED SUCESSFULLY ${name}!!`);
    
} )("Gyanendra");