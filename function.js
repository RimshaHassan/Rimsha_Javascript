//function
function addtwonum(num1,num2){ // num1, num2 are parameters
    console.log(num1+ num2);

}
// addtwonum(3,2); // 3,2 are arguments 
// addtwonum(3,null);
// addtwonum(3,"2");
// addtwonum("3",2);


//console bs print krway ga hamare pas but value ko store ni kry ga iskle liye hme chiye k hm function k andr var bna k kam kry or return statement dy or jb hm return statement de dety hain to oske bd kch b console kry gay to wo print ni ho ga


function add(num1,num2){ // num1, num2 are parameters
    let result = num1 + num2;
    return result

}
add(3,2); // 3,2 are arguments 
add(3,null);
add(3,"2");
// console.log(add("3",2));
// const result =add(6,8)
// console.log("Result", result)



function loginuser(username){
    //or
    if (username===undefined) {
        console.log("plz enter the name")
        return
    }
    //or
    return`${username} just logged in`
}
// console.log(loginuser("RIMSHA"))
// console.log(loginuser(""))
// console.log(loginuser()) // undefined aye ga output



/// more function*******************
function calcartprice(val1,val2,...num1){ // ... called as spread as well as rest 
return num1
}
// console.log(calcartprice(2))
// console.log(calcartprice(200,700,800)) // val1 or val2 phli 2 values le ly ga baki sari ... print krwa dy ga



//object with function
const user={
name: " rimsha ",
price: 199
}

function handleobj(anyobj){
    // console.log(`username is ${anyobj.name} and price is ${anyobj.price} `)


}

handleobj(user)


//array with function


const array = [200,6,8,999,89]
function arrayget( pass){
    return pass[2]   // yahan py hmne hamesha parameter pass krnah hai 
}
console.log(arrayget(array))