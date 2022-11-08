const arrayOfNumbers=[1,4,5,3,2,7]

const filterMethod= arrayOfNumbers.filter((element)=>{
    return element>=4
})
console.log(filterMethod);  //it is used to filter out value

console.log("============================================");

const mapMethod= arrayOfNumbers.map((element)=>{
    return element>=4
})
console.log(mapMethod);   //we can also use the map but it will only give boolean values

console.log("============================================");

let sumOfArray=arrayOfNumbers.reduce((value,runningTotal)=>{
    return value+runningTotal
})
console.log(sumOfArray);     //reduce method is used to reduce the array in one value ie total


