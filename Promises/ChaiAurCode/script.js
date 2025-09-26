/*const promiseOne = new Promise((resolve,reject)=>{
    //Do async task
    //DB calls, cryptography, network call
    setTimeout(()=>{
        console.log("Async task is complete!!")
        resolve();
    },5000)
});
//Resolve has a connection with then and Reject with catch 
promiseOne.then(()=>{
    console.log("Promised Consumed!!")
})*/

//Another way of creating Promise

/*new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Async task two");
        resolve();
    },3000)
}).then(()=>{
    console.log("Async 2 resolved");
})*/
/*
const promiseThree= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({username:"Gyanendra",email:"gyanendraaryal4@gmail.com"})
    },2000)
})
promiseThree.then((user)=>{
    console.log(user);
}
)*/
/*
const promiseFour= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=true;
        if(!error){
            resolve({username:"Gyanendra",password:"1234"});
        }else{
            reject("Something went wrong!!")
        }
    },2000)
})
promiseFour
.then((user)=>{
    console.log(user);
    return user.username;
})
.then((username)=>{
    console.log(username);
})
.catch((err)=>{
    console.log(err)
}).finally(()=>{
    console.log("The promise is either resolved or rejected!!");
})*/

//Async Await
/*const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = false;
        if(!error){
            resolve({username:"JavaScript",password:"0000"});
        }else{
            reject("Error:JavaScript went wrong!!");
        }
    },1000)
})
async function consumePromiseFive(){
    try{
        const response = await promiseFive;
    console.log(response);
    } catch(e){
        console.log(e)
    }
}
consumePromiseFive();*/

//Fetch
/*async function getAllUsers(){
    try {
        const response= await fetch('https://jsonplaceholder.typicode.com/users');
    const data =  await response.json();
    console.log(data)
    } catch (error) {
        console.log("Error:Something went wrong")
    }
}
getAllUsers();*/

//Same using then and catch
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log("Something went wrong!!");
})