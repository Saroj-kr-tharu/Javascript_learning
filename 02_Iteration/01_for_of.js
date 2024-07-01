const arr = [1,2,3,4,5];

for (const num of arr){
    // console.log(num);
}

const greetings = 'Hello world';
for(const char of greetings){
    // console.log(char);
}


// maps 
const map = new Map();
map.set('usa', "United State of America ");
map.set('nep',"Nepal");

// console.log(map);
// for(const key of map){
//     console.log(key,"hey");
// }

// array desturcting by wrapping up in the square bracket
for(const [key, value] of map){
    // console.log(key," :- ",value);
}


const myObject ={
    'game1' : 'NFS',
    'game2' : 'Spider man 2 '
}
// not worked in object there are different method for iterable 
// for (const [game, name] of myObject) {
//     console.log(game," :- ",name);
    
// }


const myObjects={
    js:'Javascript',
    cpp: 'C++',
    rb:'Ruby' 
}

for (const key in myObjects) {
    // console.log(` ${key} :- ${myObjects[key]}`);
}


// in array 
// for of loop will return value but in for in loop it will return key
const programming= ['js','cs','java'];
for (const key in programming) {
   console.log(key);
   console.log(programming[key]);
}