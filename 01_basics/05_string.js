const name="shaswat";
const repoCount=10;

//console.log(name+repoCount+" Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
//This is string iterpolation

const gameName = new String('Shaswat-mishra');
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherstring= gameName.slice(-1,3);
console.log(anotherstring);

const newStringone = "   shaswat  "
console.log((newStringone));
console.log(newStringone.trim());


const url = "https://shaswat.com/shaswat%20mishra"

const urlone=url.replace('%20','-')
console.log(urlone);

const urltwo=url.includes('shawat')
console.log((urltwo));

console.log(gameName.split('-'));


