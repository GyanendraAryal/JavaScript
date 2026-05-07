fetch('')
.then((data)=>{
    return await data.json;
})
.then((data)=>{
    console.log((data));
})
.catch((err)=>{
    console.log(err);
})
.finally(()=>{
    console.log("Promise is complete✅");
})