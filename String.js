//string
// string interpolation => we use backtick  `` and ${} for better understading and for modern coding

let name =" Rimsha"
let sister =" MEku"
console.log(`I'm ${name} and ${sister} is my younger sister`)
// one more method to declare string 
const naame = new String("Rubina")
console.log(naame)


// method of string 
console.log(naame.length)

console.log(naame.toUpperCase())
console.log(naame.charAt(2)) // 2 position py konsa character pra hua hai
console.log(naame.indexOf('a')) // reverse hai charAt ka ye check krta hai k ye charater kis index py pra hua hai


// substring 
const newstring = naame.substring(0,4)
console.log(naame) // substring use to get some character from the string
console.log(newstring) // output is Rubi 4th index not include 

// slice is same as substring  but difference is slice can use -ve vlaues but substring cant use -ve values



//trim use to remove empty spaces
let person ="   reena    "

console.log(person)
console.log(person.trim())


const link = " rimshahussan"
console.log(link.replace('hu','Ha'))
// split funstion convert string into array base on the spaces or dash
let myname =" Rimsha-Hassan"
console.log(myname.split('-'))
