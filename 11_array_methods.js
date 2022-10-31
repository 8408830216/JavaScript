let arrayOfNumbers = [1, 3, 7, 8, 9, 3, 7];
arrayOfNumbers[4]=11;    //used to replace the value
console.log(arrayOfNumbers);
console.log("-------------------------------");
console.log(arrayOfNumbers.includes(7));  //is this value is available or not in given array
console.log(arrayOfNumbers.includes(9));    //is this value is available or not in given array
console.log("-------------------------------");

for (let index = 0; index < arrayOfNumbers.length; index++) {
    const element = arrayOfNumbers[index];
    console.log(element);
    
}   //used to traverse the array
console.log("-------------------------------");
for (const key in arrayOfNumbers) {
      const element = arrayOfNumbers[key];   
      console.log(element); 
}   //used to traverse the array
console.log("-------------------------------");
let totalElements= arrayOfNumbers.length-1
for (let index =totalElements; index>=0; index--) {
    const element = arrayOfNumbers[index];
    console.log(element);
    
}  //to reverse the array

console.log("-------------unshift------------------");

let arrayOfNumber = [1, 3, 7, 8, 9, 3, 7];
console.log(arrayOfNumber);
arrayOfNumber.unshift(5);  //used to add element is beginning
arrayOfNumber.unshift(55,66);   //used to add element is beginning
console.log(arrayOfNumber);

console.log("-------------shift------------------");
let array = [11, 22, 47, 81];
console.log(array);
array.shift();  //used to remove first element
console.log(array);
console.log("---------------slice----------------");
let arrayNumbers = [1, 3, 7, 8, 9, 3, 7];
console.log(arrayNumbers.slice(2));  //if you wnn to written few elements in array
console.log(arrayNumbers.slice(1,4));


console.log("-------------splice()--------------------");
//if we wnn to remove elemets in array 
let arraysplice = [1, 3, 7, 8, 9, 3, 7];
console.log(arraysplice);
arraysplice.splice(4) //it will remove elmets starting from index4 to end
console.log(arraysplice);
console.log("---------------------------------");
let arraySplice = [1, 3, 7, 8, 9, 3, 7];
arraySplice.splice(2,1);   //it will remove elmets starting from index2 any count only 1 
console.log(arraySplice);
console.log("---------------------------------");
let notRep = [1, 3, 7, 8, 9, 3, 7];
console.log(notRep);
notRep.splice(3,0,55)  //before index3 if we wnn to add value55 
console.log(notRep);
console.log("---------------------------------");
let rep = [1, 3, 7, 8, 9, 3, 7];
console.log(rep);
rep.splice(3,1,49)  //iff we wnn to replace the 3rd index from 49value
console.log(rep);
console.log("---------------------------------");
let repval = [1, 3, 7, 8, 9, 3, 7];
repval.splice(2,2,55,66);
console.log(repval);
