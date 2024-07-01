const numbers= [1,2,3,4,5,6,7,8,9];

// const new_nums= numbers.map( (val) => {
//     return val+10
// });


// console.log(new_nums);


// chaining 
const new_nums = numbers
                    .map( (num) => num * 10  )
                    .map( (val) => val+1 )
                    .filter( (valu) => valu >= 40); 
// console.log(new_nums);


// Reduce Section start here 

const myNum= [1,2,3];
// const myTotal =myNum.reduce(function(acc, curVal) {
//     return acc+curVal;
// },0);

const myTotal= myNum.reduce( (accu, VAl) => accu+VAl, 0);
console.log(myTotal);


const shoppoingCart=[
    {
        item:'js Course',
        price:299
    },
    {
        item:'Python Course',
        price:99
    },
    {
        item:'Mobile DEV Course',
        price:599
    },
    {
        item:'DSA Course',
        price:400
    },
];

const total = shoppoingCart.reduce( (acc, item) =>  acc+item.price,0);
console.log(total);