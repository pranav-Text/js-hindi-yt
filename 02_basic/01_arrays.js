//array

const myArr = [1,2,3,4,5];   //type 1
// const arr = ["pranav","hemant"]     //tyoe 2
// const arr2 = new arrayy(1,2,3,4,4)     //type 3


// console.log(myArr.length);

//..........methods...........

// myArr.push(6)    //add element 
// console.log(myArr);

// myArr.pop()     //delete last element

// myArr.unshift(9)  //add element starting
// console.log(myArr);

// console.log(myArr.includes(10));   //false  means check thge element of the arry 
// console.log(myArr.indexOf(3));    

//.........slice , splice 

console.log("A", myArr);

const myn1 = myArr.slice(2,4);    //3,4

console.log(myn1);
console.log("B", myArr);


const myn2 = myArr.splice(1,4);    //2,3,4,5
console.log("c", myArr);
console.log(myn2);








