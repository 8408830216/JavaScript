const arrayOfNumbers=[1,2,6,4,7,8,1]   
//map method in ES6 is used tranform the values 

const newArray=arrayOfNumbers.map( (element) => {
        return element +5
})
console.log(newArray);
console.log(arrayOfNumbers);