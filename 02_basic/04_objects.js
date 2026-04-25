// //singleton object 

// // const tinderUSer = new Object();      //object    ---singleton object

// const tinderuser = {}    // non sigleton object 

// tinderuser.id = "83eb"
// tinderuser.name = "lokky"
// tinderuser.isLoggedIn = false;

// console.log(tinderuser);

// // const Jsuser = {
// //     email: "dshfdj@gmial.com",
// //     name:{
// //         firstname:"ashu",
// //         last:"varma",
// //         age:33,
// //     },
// //     location:"harayana",
// //     isLoggedIn: false,

// // }

// console.table(Jsuser);

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "r", 4: "y"}

// // const obj3 = Object.assign({}, obj1, obj2)   //using assign i will assign  the objects ...{} -  thsi is target & obj1,2 is a source 

// // const obj3 = {...obj1,...obj2};
// // console.log(obj3)

// user[1].email
// console.log(user)

// console.log(Object.keys(tinderuser))
// console.log(Object.values(tinderuser))
// console.log(Object.entries(tinderuser))

// console.log(tinderuser.hasOwnProperty('isLoggedIn'));



//.................Dsructuring..............//

const cource = {
    cname: "jshindi",
    price: "444",
    cInstrutor : "om"
}

// cource.cInstrutor
  
const {cInstrutor:Instrutor} = cource;    //object desructor 

console.log(Instrutor);


                    //NOTE: writing the json code are {  } - object and [] - inside the array  also the 
                    //formate are {
                    // [
                    //     {
                    //         {
                               // inside the obect json code are write into only string formate means 
                               //  "id" : "name123";   //this is json code 
                    //         }
                    //     }
                    // ]

                    // }