// // array are resize able 
// let array = [1,3,"RImsha",787]
// console.log(array)



// // we can make array by this method also 
let myarray = new Array(1,2,4,5,6,7)
// console.log(myarray)
// console.log(myarray[3])


// we can add and update 
myarray[2]=" rimsha" // update 
myarray[6] = " meku"
// console.log(myarray)



//**********************method in array  */
//  myarray.push(6)  // add element at last 
//  console.log(myarray)
//  myarray.push(90)  // add element at last 
//  console.log(myarray)
//  myarray.pop()  // remove element at last
//  console.log(myarray) 
//  myarray.unshift(88)  // add element at startt 
//  console.log(myarray)
//  myarray.shift()  // remove element at add 
//  console.log(myarray)
//  myarray.pop()  // remove element at last 
//  console.log(myarray)
 
// console.log(myarray.includes(9)) // ye element array k aandr present hai k ni 
// console.log(myarray.indexOf(9)) /// element kis index py para hua hai 
// console.log(myarray.indexOf(1)) /// element kis index py para hua hai 
// console.log(myarray.sort()) // sort alphabetically
// console.log(myarray.toString()) 




// const newarray = myarray.join() // this convert the array into string 
// console.log(myarray)
// console.log(newarray, typeof newarray)




//  let arr = new Array( 56," helo", 6,7,9,0,)
//  console.log(arr)

//  console.log(arr.slice(1,3)) // extract krti hai values output helo or 6 hai or original array chnge ni ho gi 
//  console.log(arr)

//  console.log(arr.splice(1,3)) // extract krti hai values output hai helo 6 and 7 original array b chnge  ho jati hai  remaining value array m ajati hai 
//  console.log(arr)

const hero =["herr", "thor", "pak","quaid"]
const hero_pk =["Super", "pti", "npm","hira"]
hero.push(hero_pk) // array k andr dosri array agi as a data 
// console.log(hero)
// console.log(hero[4][2])
 let new_arr =hero.concat(hero_pk) // use to  combine two string 
// console.log(new_arr)

// spread fucntion
// is also use for combine arrays , but it can combine more then 2 arrays

let combine_arr = [...hero,...hero_pk]
// console.log(combine_arr)



const another_array = [1,2,3,[6,7,8], 7,[ 8,9,[3,67]]]
const real_another_array = another_array.flat(Infinity) // flat sari arrays ko ek array m convert kr deta hai 
// console.log(real_another_array)


console.log(Array.isArray("Rimsha")) // ye check kr  rha hai k ye array hai k ni 
console.log(Array.from("Rimsha")) // ye string ya jo b chez given hai osko array m convert kr rha hai 
console.log(Array.from({name: " hello"})) // yahan define krna pry ga k  value leni hai ya key

let scor1 = 100;
let scor2 = 200;
let scor3 = 300;
console.log(Array.of(scor1,scor2,scor3)) // of sary element ko array m dal dy ga 



