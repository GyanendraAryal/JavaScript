// // console.log(Math.PI);
// // Math.PI = 5
// // console.log(Math.PI);

// const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descriptor);

const user = {
    username: "Gyanendra",
    email: "gyan@gmail.com"
}
// const res = Object.getOwnPropertyDescriptor(user,"username")
// console.log(res);

Object.defineProperty(user, "username", {
    writable: false,
    enumerable: false
})

user.username = "hello"
console.log(user.username);
