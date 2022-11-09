const array_roll_numbers=[113,45,56,11,32,45,109,799,56,45];
console.log(`-----------------------Original array--------------------`);
console.log(array_roll_numbers);
const reverseString=array_roll_numbers.reverse();
console.log(`----------------------1)Reverse array--------------------`);
console.log(reverseString);
console.log(`----------------------2)Sort method without any argument--------------------`);
array_roll_numbers.sort();
console.log(array_roll_numbers);
console.log(`Conclusion-:with the use of Sort method it does not work properly because it takes only first number of given value 
and use that first value to compare so it is not right`);
console.log(`----------------------4)Sort method with arguments(Ascending Order)--------------------`);
array_roll_numbers.sort((first,second)=>{
    return (first>second ? 1: -1)
})
console.log(array_roll_numbers);
console.log(`----------------------5)Sort method with arguments(Descending Order)--------------------`);
array_roll_numbers.sort((first,second)=>{
    return (first>second ? -1: 1)
})
console.log(array_roll_numbers);
console.log(`----------------------6)Greatest number from array is------------------------------------`);
const gretestNum=array_roll_numbers[0];
console.log(gretestNum);
console.log(`----------------------7)Smallest number from array is------------------------------------`);
const smallestNum=array_roll_numbers[9];
console.log(smallestNum);
console.log(`----------------------7)Duplicate element is remove then array is-------------------------`);
let set=new Set(array_roll_numbers);
console.log(set);