if(true){
    let a= 10
    var b = 90
    const c =88

}
// console.log(a)  // not work ku k ye andr hai 
// console.log(b)
// console.log(c)   // not work ku k ye andr hai



// nested scope 
function  one(){
    const username= "rimsha"
    function two(){
        const webiste =" youtube"
        console.log(username)


    }
    // console.log(website) // not run bcz ye scope se bhr agyaa hai 
    two()

}
one()



//example
 if (true) {
    const username =" rimsha "
    if (username=== " rimsha") 
        {
            const website =" youtube"
            console.log(username + website)
        
    }
    // console.log(website) // error occur
 }
//  console.log(username) // error occur



addone(5)
//********************* exaple */
 function addone(num){
    return num+1 //// yhan mene function ko opr call kr diya hai or output agai hai ku k hmne fucntion ko bs declasre kiya hain
 }




// it also called function or expression
addtwo(2)   //// yhan mene function ko opr call kr diya hai or output ni ai hai ku k hmne fucntion ko bs declasre kiya hain or ose new const m store kr diya hai 
 const addtwo = function(num){
    return num +2
 }
 