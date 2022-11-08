const array_numbers=[20,11,40,25,23,11,9,31,60,2,19]
console.log("--------------------Original Array----------------------");
console.log(array_numbers);

const newArray=array_numbers.map( (element) => {
    return element +10
})
console.log("--------------------Add 10 into each element of array----------------------");
console.log(newArray);

const squArray=array_numbers.map( (element) => {
    return element *element
})
console.log("--------------------Square of each element of array----------------------");
console.log(squArray);
console.log("--------------------Add index to its corresponding array value----------------------");

const indArray=array_numbers.map( (element) => {
    return element +array_numbers.indexOf(element)
})
console.log(indArray);