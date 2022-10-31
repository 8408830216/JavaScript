class Person{
    constructor(fullName, city, age, gender){
      this.fullName =   fullName;
      this.city = city;
      this.age = age;
      this.gender = gender;
    }
    details(){
      console.log(`Person Details: ${this.fullName}  ${this.city}  ${this.age}  ${this.gender}`);
  }

    
}
let personAnil=new Person("Anil Mohite","Pune",25,"Male");
let personSushila=new Person("Sushila Patil","Mumbai",22,"Female");
let PersonBill=new Person("Billgates","USA",67,"Male");

const array=[personAnil,personSushila,PersonBill];

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element.age>=50) {
        console.log(` ${element.fullName}  ${element.city}  ${element.age}  ${element.gender}`);
    }
}
console.log("===========================FOR Of Loop============================");
const arrayNumbers=[3,4,55,66,77]
for (const element of arrayNumbers) {
    console.log(element);
}
console.log("----------------------------------------------------------------");

for (const Person of array) {
    if (Person.age>=50) {
        console.log(` ${Person.fullName}  ${Person.city}  ${Person.age}  ${Person.gender}`);
    }
}
console.log("=================================================================================");