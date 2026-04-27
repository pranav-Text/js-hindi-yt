//...............Arrow function & this keyword............//

// const user = {
//     username: "pranav",
//     price: 666,

//     welcomeMessage: function () {
//         console.log(`${this.username} , welcome my website`)
//         console.log(this);                                           //this is used to access current content for the code 
//     }

// }

// user.welcomeMessage();
// user.username = "panuu";
// user.welcomeMessage();



// const chai = function (){
//     let username = "prem"
//     console.log(this.username);          //print all internal structure or code 
    
// }



///+++++++++++++++  this is basic arrow function+++++++++++++//


// const chai = () => {                  // => this is arrow function
//     let username = "prem"
//     console.log(this);          //print all internal structure or code 
    
// }
// chai()


//+++++++++++++implisit return in arrow fun ++++++++++++++//


const add = (n1, n2) => n1 + n2;           ///  1] this is implicit return 

// const add = (n1, n2) => (n1 + n2);      // 2] you can use other type and you are not write return keword 

// const add = (n1, n2) => ({username : "ram"})       //it is used return  the object value 
 
console.log(add(44,44))


//----------------  3] old method to use arrow ---------------//

// const add = (n1,n2){
//     return n1 + n2;
// }

// console.log(add(44,44))