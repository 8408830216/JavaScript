let map=new Map();     //in Map we can Store keys and values 
map.set(22,"Sachin");     //key should be unique always
map.set(8,"Rohit");
map.set(55,"Virat");
map.set(77,"Sehwag");
console.log(map);
console.log("=======Adding duplicate key===========");
map.set(8,"Gautam");  //if we give duplicate key it will override and it will update with new value
console.log(map);
console.log("=======Adding duplicate key and value===========");
map.set(77,"Sehwag");   //key and value both are override and update with new key and value
console.log(map);
console.log("=========Retrievin value================");
let value=map.get(77);
console.log(value);
console.log(map.get(99));   //it should be undefine coz 99 key is not available
console.log("========Deleting record==============");
map.delete(55); //if  we wnn to dlet record
console.log(map);

console.log("======Is key available=========");
console.log(map.has(77));
console.log(map.has(85));

console.log("=========Traversing over map collection===========");
let setOfKeys=map.keys();
console.log(setOfKeys);
for (const key of setOfKeys) {
    console.log(map.get(key));
}

console.log("=============================================================");
class Person {
    constructor(rollNo, fullName, city, age, gender){
        this.rollNo = rollNo;
      this.fullName =   fullName;
      this.city = city;
      this.age = age;
      this.gender = gender;
    }
    details(){
        console.log(`Person Details: ${this.rollNo}  ${this.fullName}  ${this.city}  ${this.age}  ${this.gender}`);
    }
}
let personAnil = new Person(22,"Anil Mohite", "Pune", 31, "Male");
let personAnita = new Person(33, "Anita Golate", "Mumbai", 22, "Female");
let personBill = new Person(44, "Billgates", "USA", 67, "Male");

let mapOfPersons = new Map();
mapOfPersons.set(22, personAnil);
mapOfPersons.set(33, personAnita);
mapOfPersons.set(44, personBill);

let mapKeys = mapOfPersons.keys(); // 22   33   44
for (const key of mapKeys) {
     let personObject = mapOfPersons.get(key);
     personObject.details();

}
