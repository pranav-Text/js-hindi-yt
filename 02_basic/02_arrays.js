// const marvel_heros = ["tim", "sim", "rim"]
// const dc = ["aa","bb","cc"];
// const mc = ["2", "2" ,"4"]

// console.log(dc)

// marvel_heros.push(dc);

// console.log(marvel_heros);

// console.log(marvel_heros[3][1]);

// const allhero = marvel_heros.concat(dc);
// console.log(allhero);

// const hero = [...marvel_heros,...dc,...mc];
// console.log(hero)

// const another_array = [1,2,3,4,[4,4,4,4],,7,7,78,86,[9,90,89]];

// const real_array = another_array.flat();      //flat is used to print the array in onne line 
// console.log(real_array);

// console.log(Array.isArray("pra"));    //false
// console.log(Array.from("pra"));

// console.log(Array.from({name:"pra"}));       //intresting

// let a= 1 ,b= 3, c = 4;
// console.log(Array.of(a,b,c));

const arr = [4,4,4,4];
const arr2 = ["p", "r"];
const arr3 = [1,"jsni", "fwef",6];

// console.log(arr.flat(arr,arr2,arr3));
 const combined = [...arr,...arr2,...arr3];        
 console.log(combined);

 //out: [              
//   4, 4,      4,
//   4, 'p',    'r',
//   1, 'jsni', 'fwef',
//   6
// ]







