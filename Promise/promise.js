// // // // // const promiseOne = new Promise((resolve,reject)=>{
// // // // //      setTimeout(()=>{
// // // // //         console.log("Im inside promiseOne");
// // // // //         resolve();
// // // // //      },1000)
// // // // // })
// // // // // promiseOne.then(()=>{
// // // // //     console.log("Promise consumed");
// // // // // }) 


// // // // new Promise((resolve,reject)=>{
// // // //     setTimeout(()=>{
// // // //         // console.log(resolve(),reject()); 
// // // //         console.log("Task two");
        
// // // //         resolve()
// // // //     },1000)
// // // // }).then(()=>{
// // // //     console.log("Promise resolvedd");
    
// // // // })

// // // const promiseThree = new Promise((resolve,reject)=>{
// // //     setTimeout(()=>{
// // //          resolve({username:"Gyanendra",email:"gyan@gmail.com",height:"6- inches"})
// // //          reject({message:"Something went wrong!! Try again"})
// // //     },1000)
// // // })
// // // promiseThree
// // // .then((data)=>{
// // //     console.log(data.username);
// // // })
// // // .catch((data)=>{
// // //     console.log(data.message);
// // // })

// // const promiseFour = new Promise((resolve,reject)=>{
// //     setTimeout(()=>{
// //         let error = false;
// //         if(!error){
// //             resolve({message:'Promise solved ✅'})
// //         } else{
// //             reject({message:'Promise rejectedd!!!❌'})
// //         }
// //     },1000)
// // })
// // promiseFour.then((data)=>{
// //     console.log(data.message);
// // })
// // .catch((data)=>{
// //     console.log(data.message);
// // })
// // .finally(()=>{
// //     console.log("Promise is complete!!✅");
    
// // // })

// // const promiseFive = new Promise((resolve,reject)=>{
// //     setTimeout(()=>{
// //         let error = true;
// //         if(!error){
// //             resolve({language:'javascript',password:123})
// //         }else{
// //             reject("Error: JavaScript is rejected!!🙅‍♂️")
// //         }
// //     },1000)
// // })

// // async function consumePromiseFive(){
// //    try {
// //      const response = await promiseFive
// //      console.log(response);
// //    } catch (error) {
// //     console.log(error);
    
// //    }
// // }
// // consumePromiseFive()


// async function getAllUsers() {
//    try {
//      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     //  console.log(response);
//      const data = await response.json()
//      console.log(data);
//    } catch (error) {
//     console.log(error);
//    }
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/todos/1')
.then((data)=>{
    const response = data.json()
    return response
})
.then((data)=>{
    console.log(data);
}).catch((e)=>{
    console.log(e);
    
})