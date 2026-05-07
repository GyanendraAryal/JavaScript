// const user = {
//     userName: "Gyanendra",
//     logInCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         // console.log("All user detail");
//         // console.log(`Username: ${this.userName}`);
//         // console.log(`Username: ${this.userName}`);
//         console.log(this);
        
//     }
// }
// // console.log(user);
// // console.log(user.userName);
// // console.log(user.getUserDetails());
// console.log(this);

function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    // return this :- by default this is returned
}
const userOne = new User("GyanendraAryal", 8, true)
// console.log(userOne);
// const userTwo = new User("Ram", 3, true)
// console.log(userTwo);
// const userThree = new User("Hari", 9, false)
// console.log(userThree);
// const userFour = new User("Shyam", 4, true)
// console.log(userFour);

console.log(userOne.constructor);


