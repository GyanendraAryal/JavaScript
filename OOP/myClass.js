class User {
    constructor(username,email,password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}ava34`
    }
    changeUserName(){
        return`${this.username.toUpperCase()}`
    }
}
// const userOne = new User("Gyanendra","gyanendra@gmail.com","123")
// console.log(userOne);
// console.log(userOne.encryptPassword());
// console.log(userOne.changeUserName());


//Behind the scene

// function User(username,email,password){
//     this.username = username
//     this.email = email
//     this.password = password
// }

// User.prototype.encryptPassword() = function(){
//     return `${this.password}abfsf`
// }
// User.prototype.changeUserName() = function(){
//     return `${this.username.toUpperCase()}`
// }

const tea = new User("tea","tea@gmail.com","12343")

console.log(tea.changeUserName());
console.log(tea.encryptPassword());
