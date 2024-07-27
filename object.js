// objects
// objects ko 3 trh se declare kr skty hain 1.literal 2. constructor

//object literals\
// interview QUESTION
// ek symbol lo ose object ki keys m declare kro or ose print krwa do

const mysymbol = Symbol("Malaika");

const jsuser = {
  name: " rimsha ",
  id: 8,
  [mysymbol]: "Rubina", // ye hmne symbol ko object m declare krwa diya hai
  "Full name": "Rimsha Hassan",
  age: 23,
  location: " lahore ",
  email: " rim@gmail.com",
  isloginIn: false,
  lastdaylogin: ["monday", " satrday"],
};
// we can access  values by using these given commands
console.log(jsuser.email)
console.log(jsuser["lastdaylogin"])
console.log(jsuser["Full name"])
console.log(jsuser[mysymbol]) // ye hmne os symbol print krwa  diya hai

jsuser.email = " rimsha@gmail.com"; // to  chnage value in the object
console.log(jsuser.email)

// agr m chhati hun k object k andr koi value ya koi specfic value koo b person chnage na kr sky to oske liye hm ose lock kr dety hai
// lock krne k liye hm "FREEZE" ka word use krty hain

Object.freeze(jsuser.age); // idr hme age freeze kr di hai
// ya phr
Object.freeze(jsuser)
jsuser.age = 56;
 console.log(jsuser)
 console.log(jsuser.age)

// hm object m ek function b add kr skty hain

jsuser.greeting =function(){
    console.log("hey man")
}
jsuser.greetingtwo =function(){
    console.log(`hey,${this["Full name"]}`)  // this hm is liye use krty hai k hm ek object k sary element ko dekh sky k kon kon se hain
//     // m is function m object se " full name " to refer kr ri hun
 }

 console.log(jsuser.greeting())
 console.log(jsuser.greetingtwo())

// by constructor    (singleton)
const userobj = new Object();
userobj.name = " rabia";
userobj.age = 24;
userobj.id = 11;
userobj.isloginIn = false;

// console.log(userobj)

//nested object
const newobj = {
  email: "hhh@gmail.com",
  fullname: {
    username: {
      fname: " rimsha ",
      lname: " hassan",
    },
  },
};
console.log(newobj.fullname)

// combine object
const obj1 = { 1: "a", 2: "e" };
const obj2 = { 3: "g", 4: "j" };

const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3)

// or use spread method
const obj4 = { ...obj1, ...obj2 };
console.log(obj4)

// database
const arr = [
  {
    name: " ri",
  },

  {
    id: 3,
  },
];

console.log(arr[0])
console.log(arr[0].name)

console.log(jsuser)
console.log(Object.keys(jsuser))
console.log(Object.values(jsuser))
console.log(Object.entries(jsuser)) // hr value or key  ko ek array m dal dety hain

// agr hmne cheeck krna hai k object m koi property hai k ni to "HASOWNPROPERTY" function use krty hain

// console.log(jsuser.hasOwnProperty('location'))

//***********************************DE Structure of object********** */
const course={
    coursename:"oop",
    price:"999",
    coursesir: "khossa"
}

const{coursesir} = course //{} shows de struturing 
console.log(coursesir)
const{coursesir: sir} = course
console.log(sir)



//**********************API*************/


             // values come from the backend 
                 //JSON format 
                    // keys b string m hoti or values b string m hoti 
// {
//     "name":" rimsha",
//     "id":1,
// }
                      // JSON can b in object format on in array 
//[
// {},
// {},
// {}
// ]