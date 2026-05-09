class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        return `Username is ${this.username}`
    }
    static createId(){
        return `123`
    }
}
const gyanendra = new User('gyanendra')
// console.log(gyanendra.createId())

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("Iphone","iphone@gmail.com")
// console.log(iphone );
// console.log(iphone.logMe());
console.log(iphone.createId());

