// function sayMyName(){
//     console.log("My name is Falano!!");
// }
// sayMyName()
// import promptSync from "prompt-sync"

// const prompt = promptSync()
// let a = Number(prompt("Enter number:"))
// let b = Number(prompt("Enter number:"))

// function addTwoNumbers(num1,num2){
//     return num1 + num2
// }
// let result = addTwoNumbers(a,b)
// console.log(result);

// function addTwoNumbers(num1,num2){
//     let result = num1 + num2
//     return result
// }
// console.log(addTwoNumbers(a,b))

const loginUserMessage = (username) =>{
    if(!username){//username === undefined
        return "Please enter username!!"
    }
    else{
        return `${username} just logged in!!`
    }
}

console.log(loginUserMessage("Falano"))
