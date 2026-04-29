// // // // const coding = [
// // // //     {
// // // //         languageName:'Javascript',
// // // //         languageFileName:'js'
// // // //     },
// // // //     {
// // // //         languageName:'Python',
// // // //         languageFileName:'py'
// // // //     },
// // // //     {
// // // //         languageName:'Java',
// // // //         languageFileName:'java'
// // // //     }
// // // // ]
// // // // coding.forEach((items,index)=>{
// // // //     if(index==2){
// // // //         console.log(items.languageName);
// // // //     }
// // // //     // console.log(items.languageName);
// // // // })


// // // const coding = [
// // //     {
// // //         languageName: 'Javascript',
// // //         languageFileName: 'js'
// // //     },
// // //     {
// // //         languageName: 'Python',
// // //         languageFileName: 'py'
// // //     },
// // //     {
// // //         languageName: 'Java',
// // //         languageFileName: 'java'
// // //     }
// // // ]

// // // let values = coding.forEach((items)=>{
// // //     console.log(items);
// // //     return items
// // // })
// // // console.log(values);



// // // const result = myNums.filter((nums)=>{
// //     //     // console.log(nums > 5);
// //     //     return nums > 5
    
// //     // })


// //     // const result = myNums.filter((nums) => nums>5 )
// //     // console.log(result);


// // const myNums = [1,2,3,4,5,6,7,8,9,10]
// // const newNums = []

// // myNums.forEach((item)=>{
// //     if(item>5){
// //         newNums.push(item)
// //     }
// // })
// // console.log(newNums);

// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];

//     // let userBooks = books.filter((item)=> item.genre === "History")
//     // userBooks = books.filter((item)=>  item.publish === 2000)
//     userBooks = books.filter((item)=>  { return item.publish >= 1995 && item.genre === "History"})
//     console.log(userBooks);