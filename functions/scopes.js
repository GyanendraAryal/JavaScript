// let a = 100
// console.log(a,b,c);
// if(true){
//     let a = 10
//     const b = 20
//     var c = 30
//     console.log(a);
// }
// console.log(a);

// function one(){
//     const username = "Gyanendra"
//     function two(){
//         const website = "Youtube"
//         console.log(username);
        
//     }
//     two()
//     // console.log(website);
    
// }
// one()

// if(true){
//     // console.log("Gyanendra");
//     const username = "Gyanendra"
//     if(username === "Gyanendra"){
//         const surName = "Aryal"
//         console.log(`Yes, User is ${username} ${surName}`);
//     }
//     // console.log(surName);
// }
// console.log(username);


//Hoisting

console.log(addTwo(6));
function addTwo(numb){
    return numb+=2
}

// console.log(addOne(4));
let addOne = (num) =>{
    return num+=1
}
