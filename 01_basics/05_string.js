const name ="Deepika"
const repoCount = 50

//console.log(name + repoCount + " Value ");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('deepikad-ds')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


//console.log(gameName.length);
//console.log(gameName.toUpperCase);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));

const newString= gameName.substring(0,4)
console.log(newString);

const anotherString=gameName.slice(-10,4)
console.log(anotherString);

const newStringOne ="    Deepanshu     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://deepanshu.com/deepanshu%10singh"

console.log(url.replace('%10', '-'))

console.log(url.includes('deepika'))

console.log(gameName.split('-'));