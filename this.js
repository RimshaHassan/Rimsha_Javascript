const user =
{
    username: " rimsha",
    price: 999,
    wecolcomemsg: function () {
        console.log(`${this.username}, welcome to website `)
        console.log(this)    // current context ko btata hai 
    }
}


// user.wecolcomemsg()

// user.username =" meku"
// user.wecolcomemsg()


// another example 
// function chaay() {
//     let username =" rim"
//     console.log(this) // hm this ko bs object  m use kr skty hain function m ni
// }


// chaay()


// another method to make fucntion 
//  const chay=function () {
//     let username =" rim"
//     console.log(this) // hm this ko bs object  m use kr skty hain function m ni
// }

// chay()


// we use arrow to make a fucntion
const chay = () => {
    let username = " rim"
    // console.log(this) 
}

chay()

//example 

const fun = (num1, num2) => {
    return num1 + num2    //explicit
}


// console.log(fun(5,7))



// on other method to make funstion its called implicit

const funn = (num1, num2) => num1 + num2  //return ni likhna pr rha
const fuunn = (num1, num2) => (num1 + num2)   //return ni likhna pr rha 

const fuunc = (num1, num2) => ({ username: " rimshaaa" })   // object ko ese call krty implicitly






    // immediatly invoked function expression(IIFE)


    (function chai() {   // ise named iife b ekhty ku k chai likha hua function ka nam
        console.log(` db connected `)

    })();  // we ()()  to remove pollution in global scope or yahan semicolon b lagana zarori hai end krne k liye



    //
    (() => { // ye simple iife hai ku k isma nam ni 
        console.log(` db connected  two`)

    })(); // hm arrow function b use kr skty hai 

//
((name) => { // ye simple iife hai ku k isma nam ni 
    console.log(` db connected  two, ${name}` ) // parameter b pass kr skty hain

})( " rimsha ") // hm arrow function b use kr skty hai

