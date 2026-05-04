const clock = document.querySelector('.clock')

// console.log(date);
setInterval(()=>{
    let date = new Date().toLocaleTimeString();
    clock.innerHTML = `${date}`
},1000)
