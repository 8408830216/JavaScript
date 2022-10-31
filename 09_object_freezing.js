const person={
    name:"mohit",
    city:"Pune"
}
Object.freeze(person);  //freeze is not allowed to add or update the properties in object
// person.no="12345"   not allowed because object is freeze
console.log(person); 
console.log("-----------------------------------------");

const arrayNumbers=[2,4,5,6,7];
Object.freeze(arrayNumbers); 
// arrayNumbers.push(55);  not allowed because array is freeze
console.log(arrayNumbers);

console.log("-----------------------------------------");
const student={
    name:"Prashant",
    age:24
}
const address={
    city:"Dhule",
    street:"JM ROAD"
}
let studentClone=Object.assign({}, student );//deep cloning will perform 
studentClone.name="Prashant Patil";
console.log(studentClone);
console.log(student);

let mergedObject=Object.assign({},student,address);
console.log(mergedObject);

