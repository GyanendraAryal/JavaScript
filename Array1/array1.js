const marvel_heros = ['ironman', 'spiderman', 'hulk', 'thor']
const dc_heros = ['superman', 'flask', 'batman']

// marvel_heros.push(dc_heros)
// let all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros)

//Spread Operator
const allNewHeros = [...marvel_heros, ...dc_heros]
// console.log(allNewHeros)
// console.log(allNewHeros[5])

// const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const realArray = anotherArray.flat(Infinity)
// console.log(realArray)

// console.log(Array.isArray("Gyanendra"))
// console.log(Array.from("Gyanendra"))
// console.log(Array.from({name: "Gyanendra"}))//Interesting Case

let score1 = 100
let score2 = 200
let score3 = 300
let score4 = 400

console.log(Array.of(score1,score2,score3,score4))