class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }
    get email() {
        return this._email.toUpperCase()
    }
    set email(mail) {
        this._email = mail
    }
    get password() {
        return this._password.toUpperCase()
    }
    set password(pass) {
        this._password = pass
    }
}
const userOne = new User("gyan@gmail.com", "ader")
console.log(userOne.password);
// console.log(userOne.email);
