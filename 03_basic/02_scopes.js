//let , var , const
// var c = 333                //and {} outer all code are global scope

// let a = 3333;

// if (true) {                //  --
//     let a = 10               //  |
//     const b = 20           //   |--- this is block scope 
//     var c = 30             //  |
//     // --

//     // console.log("INNER : ", b)
// }

// console.log(a);

// console.log(b);

// console.log(c);


//-----------------nested scope--------------//

// function one() {
//     const username = "pranav"

//     function two() {
//         const website = "yt"
//         console.log(username);
//     }
//     // console.log(website);

//     two()
// }

// one()



if(true){
    const username = "pran"
    if(username === "pran"){
        const website = "ytttt"
        // console.log(username + website);

    }
    // console.log(website)
    
}
// console.log(username);


//===============intresting=============//

console.log(one(5))

function one(num){
    return num + 1 ;
    
}

