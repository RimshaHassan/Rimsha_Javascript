// const score =700;
// console.log(score)
let number = new Number(900)
console.log(number)
let str = number.toString() // cinvert int  into string 
console.log( typeof str)
const balance = 100;
console.log(balance.toString().length)
console.log(balance.toFixed(2))


const anumber= 112.67
console.log(anumber.toPrecision(4)) // output is 112.7 bcx it focus on just 4 number and round off the number 
console.log(anumber.toPrecision(3)) // output is 113 bcx it focus on just 3 number


const hundreds = 10000000 // for commas in ammount
console.log(hundreds.toLocaleString('ur-PK')) // by default in US standard


//**************************Math****************** */



console.log(Math)// object by default have many properties and method 
console.log(Math.abs(-9)) // for absolute value 
console.log(Math.round(4.3)) // for round off
console.log(Math.ceil(4.3)) // for above value give 5 ansewer which is not good 
console.log(Math.floor(4.3)) // for below value give output 4 which is good
console.log(Math.min(1,2,4,6,7,8))
console.log(Math.max(4,6,7,8,9,3,2,2))
console.log(Math.random()) // its value lie btw 0 and 1 
console.log(Math.random()*10 +1)


let min = 10
let max = 20
console.log(Math.floor(Math.random()*(max-min+1))+min)

