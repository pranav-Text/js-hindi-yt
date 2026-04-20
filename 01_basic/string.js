const name = "hii"
const repoCount = 50 

// console.log(name + repoCount + " value");

console.log('hello my name is ${name} and my repo count  is ${repoCount}');


const gameName = new String('heyyyy...')

console.log(gameName[0]);
console.log(gameName.__proto__);

// console.log(gameName.toLowerCase());
console.log(gameName.length);   //9
console.log(gameName.charAt(1));  //e
console.log(gameName.indexOf('h'));   //0

const newString = gameName.substring(0, 3);
console.log(newString);       //hey

const anotherString = gameName.slice(-7,3);
console.log(anotherString); 

const nameString = gameName.replace('h','i');
console.log(nameString);     //ieyyy


const oldString =  "   hiiiiiii    "
console.log(oldString);       //....hiiii.....
console.log(oldString.trim());       //hiiii

const url = "www.log@3.com"
console.log(url.replace('3', '4'));    //www.log@4.com

console.log(url.includes('ram'));    //means find the ram word on this string  ...if find ram result is true otherwisw false

console.log(gameName.split('-'));




