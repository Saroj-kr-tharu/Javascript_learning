// for each loop 
const cooding =["Js", "ruby", 'javascript', 'java'];

// for each loop need parameter of call back function 
// call back function have not name but it contain the function keyword 

// cooding.forEach( function (item){
//     // item ---> each arry element is passed through the fucntion the element name will be  item
//     console.log(item);
// }  );

// using arrow fucntion
// cooding.forEach( (item) =>{ 
//     console.log(item);
// });

// const printDo = (val) =>{
//     console.log(val);
// }
// cooding.forEach(printDo);

// cooding.forEach( (item, index, arr)=>{
//     console.log(item,index,arr);
// } );


const myCooding = [
    {
        languageName:'javascript',
        languageFile:'js',
    },
    {
        languageName:'java',
        languageFile:'java',
    },
    {
        languageName:'C++',
        languageFile:'cpp',
    },
];

myCooding.forEach( (item)=>{
        console.log(item.languageFile);
} );