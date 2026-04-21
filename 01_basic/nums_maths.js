const score = 200
const balance = new Number(300)
// console.log(balance);

const Balance = new Number(340)
// console.log(Balance);

// console.log(Balance.toFixed(2));             //340.00

const OtherNumber = 23.343

// console.log(OtherNumber.toPrecision(3));        //23.3

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));      //10,00,000

//-----------Math---------------//

console.log(Math)   
console.log(Math.abs(4));             //4
console.log(Math.round(4.9));         //5

console.log(Math.ceil(4.3));           //5

console.log(Math.min(4,7,8,9,5));            //4

console.log(Math.random());        //print random no

const min = 10 
const max = 30 

console.log(Math.floor(Math.random() * (max-min + 1)) + min);