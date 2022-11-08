const array_numbers=[1,-7,40,502,-77,91,0,108,89,-601];
console.log("===================1)Array elements with index======================");
array_numbers.forEach( (value,index) => {
    console.log(` ${index}  ${value}`);
});
console.log("===================2)Positive Numbers==============================");

array_numbers.forEach( (value) => {
    if (value>0) {
        console.log(value);
    }
})
console.log("===================3)Negative Numbers===============================");
array_numbers.forEach( (value) => {
    if (value<0) {
        console.log(value);
    }
})
console.log("===================4)Even Numbers===================================");
array_numbers.forEach( (value) => {
    if (value%2==0) {
        console.log(value);
    }
})

console.log("===================5)Sum of all elements of array===================");
let sum=0
array_numbers.forEach((value)=>{
        sum=sum+value
})
console.log(sum);
console.log("===================6)Even position values============================");
array_numbers.forEach((value,index)=>{
    if (index%2==0) {
        console.log(value);
    }
})
console.log("====================7)Odd positive value and value is negative=======");
array_numbers.forEach((value,index)=>{
    if (index%2!=0 && value<0 ) {
        console.log(value);
    }
})