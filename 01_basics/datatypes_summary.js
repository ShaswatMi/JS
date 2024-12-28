// Primitives

//7 types: String, Number, Boolean, Null, undefined,
//  Symbol,BigInt

const score =100
const scoreValue = 100.3

const isLoggedIN = false
const outsideTemp = null
let userEmail = undefined;

const id=Symbol('123')
const anotherId =Symbol('123')

console.log(id==anotherId)

//Reference (/non primitive)

//Array, Objects, Functions

const herios =["shaktiman", "nagaraj","doga"];
let myObj= {
    name:"shaswat",
    age:22
}

const myFunction = function(){
    console.log("Hello World");
}


//++++++++++++++++++++++++++++++//

//Stack(Primitive)  ,  Heap(Non-Primitive)

let nickname="shaswatmishra";
let anothername=nickname;
anothername="sm";
console.log(anothername);
console.log(nickname);

let userone= {
    email: "userone.google.com",
    upi: "userone@ybl"
}

let usertwo=userone

usertwo.email = "user2@google.com"

console.log(userone.email);
console.log(usertwo.email);


