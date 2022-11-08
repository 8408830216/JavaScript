const array_numbers=[20,11,40,25,37,49,9,90,60,2,19]
console.log("------------Original array-----------------");
console.log(array_numbers);
console.log("------------Total sum of all values-----------------");

const totalSum=array_numbers.reduce((value,runningTotal)=>{
    return value+runningTotal
})
console.log(totalSum);
console.log("------------Sum of even numbers-----------------");
const filterEven=array_numbers.filter((element)=>{
    return element%2==0
})
const totalOfEven=filterEven.reduce((value,runningTotal)=>{
    return value+runningTotal
})
console.log(totalOfEven);