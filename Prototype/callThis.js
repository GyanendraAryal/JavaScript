function setUserName(username){
    this.username = username
    console.log("Called");
}

function createUser(username,email,password){
    //this here references to setUserName and username to createUser
    setUserName.call(this,username)

    //Here referes to its own
    this.email = email
    this.password = password
}
const res = new createUser("chai","chai@gmail.com", 145)
console.log(res);
