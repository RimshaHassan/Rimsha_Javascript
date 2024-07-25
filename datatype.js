" use strict" // all js  code  treat as the newer version of js 
alert(3+3) // we cant use this becuse we are using nodejs not browser
let a= null; // null is the  object and undefined is datatype
console.log(a)
let score =30;
console.log(score)
let marks = " 67"
console.log(typeof marks, marks)

 let value = Number(marks)
 console.log(typeof value)


//"33"  =>33 convert ho jata string se int m 
//"33abc" => NaN
//true => 1; false => 0
// "rimsha " => NaN cant string ko integer m ni kr skty 

let loginIn=1
let logout =Boolean(loginIn)
console.log(logout)
//conversion
// 1 => true ; 0 =>false
// string => true
//empty  => false
 let some = 33
 let stringchange = String(some)
 console.log(stringchange)
 console.log(typeof stringchange)

// *********************OPeration***********
let aa = 10;
let b = 12;
console.log(" aa + b =", aa+b);
console.log(" aa - b =", aa-b);
console.log(" aa / b =", aa/b);
console.log(" aa * b =", aa*b);
console.log(" aa % b =", aa%b);
console.log(" aa ** b =", aa**b);


console.log( " ++aa", ++aa)


// csode should be readable 
console.log("1" + 2) // output 12 bcz fisrt int than convert all in int 
console.log(1 + "2") // output 12 bcz fisrt int than convert all in int 
console.log("1" + "2") // output 12 bcz fisrt string than convert all in string 
console.log("1" + 2 + 2) // output 122 bcz fisrt string than convert all in string 
console.log(1 + 2 + "2") // output 32 bcz fisrt int than convert all in int 


