const array_numbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
console.log("-----------------Original Array------------------------------------");
console.log(array_numbers);
console.log("-----------------1)Numbers which are greater than 50-----------------");
const noGreater=array_numbers.filter((element)=>{
    return element>50;
})
console.log(noGreater);
console.log("-----------------2)Even Numbers--------------------------------------");
const evenNum=array_numbers.filter((element)=>{
    return element%2==0;
})
console.log(evenNum);
console.log("-----------------3)Odd Numbers---------------------------------------");
const oddNum=array_numbers.filter((element)=>{
    return element%2!=0
})
console.log(oddNum);
console.log("-----------------4)Numbers which are multiple of 5-------------------");
const multipleOf=array_numbers.filter((element)=>{
    return element%5==0
})
console.log(multipleOf);
console.log("-----------------5)Numbers in between 20 and 50-----------------------");
const inBetween=array_numbers.filter((element)=>{
    return element>20 && element<50
})
console.log(inBetween);