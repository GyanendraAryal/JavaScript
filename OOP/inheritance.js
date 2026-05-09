class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`New Course was added by ${this.username}`);
    }
}
const chai  = new Teacher("chai","teacher@gmail.com","573")
// console.log(chai);
// console.log(chai.logMe());
// console.log(chai.addCourse());

const tea = new User("Tea")
// console.log(tea.logMe());

console.log(chai instanceof User);
