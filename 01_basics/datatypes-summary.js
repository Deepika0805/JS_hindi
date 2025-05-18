// primitive 

// 7 types: String, Number, Boolean, Null, undefined, Symbol, BigInt

const score = 100
const scoreValue= 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId=Symbol('123')

//console.log(id===anotherId);

// const bigNumber = 23454546566788792323n



//Reference(Non primitive)

// Array, Objects, Functions 

const heros=["shaktiman","maharaj","doga"];
let myObj={
    name: "Deepika",
    Age: 20,
}

const myFunction  = function (){
    //console.log("Hello World");
    
}
//console.log(typeof anotherId);





//+++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive), Heap (Non- primitive)

let myYoutubename ="Deepikadotcom"

let anothername= myYoutubename
anothername = "chai or code"

console.log(myYoutubename);
console.log(anothername);

let userOne={
    email: "user@google.com",
    upi:"user@ybl"}

let userTwo=userOne

userTwo.email="Deepika@google.com"

console.log(userOne.email);
console.log(userTwo.email);
