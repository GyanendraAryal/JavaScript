// function sayMyName(){
//     console.log("My name is Falano!!");
// }
// sayMyName()
import promptSync from "prompt-sync"

const prompt = promptSync()
let a = Number(prompt("Enter number:"))
let b = Number(prompt("Enter number:"))

function addTwoNumbers(num1,num2){
    return num1 + num2
}
let result = addTwoNumbers(a,b)
console.log(result);
