//singleton:- objects created using constructors
//Object literals


//Symbol

const mySym = Symbol("key1")

const jsUsers = {
    name: "Gyanendra",
    age: "young",
    [mySym]:"key1",
    contact: 9876342623,
    email: 'gyan@gmail.com',
    location: "kathmandu",
    isLoggedIn: true,
    lastLogginDays: ["Monday", "Tuesday"]
}

// console.log(jsUsers.name)
// console.log(jsUsers.age)
// console.log(jsUsers["contact"])
// console.log(jsUsers["email"])
// console.log(jsUsers["location"])
// console.log(jsUsers["isLoggedIn"])
// console.log(jsUsers.lastLogginDays)

// console.log([mySym])

jsUsers.name = "Aryal"
// console.log(jsUsers.name);

// Object.freeze(jsUsers)//Value of name cannot be changed no more
jsUsers.name = "hello"
// console.log(jsUsers.name);

jsUsers.greeting = function(){
    console.log("Hello Mr"); 
}
jsUsers.greeting2 = function(){
    console.log(`Hello Mr ${this.name}`); 
}
console.log(jsUsers.greeting2());

