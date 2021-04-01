let arr = [1,2,3,4,5,6,7,8,9,10,11,12]

let odds = arr.filter((item)=>{
    return item%2!==0;
});

console.log(odds);
