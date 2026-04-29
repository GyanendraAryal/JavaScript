// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const result = myNums.map((num,index,arr)=> {return num + 5,index})
// console.log(result);

//Chaining in map
const myNums = [1,2,3,4,5,6,7,8,9,10]

const result = myNums
.map((num)=> num*10)
.map((num)=> num+1)
.filter((num)=> num>50)
console.log(result);