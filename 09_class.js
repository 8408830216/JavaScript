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

let sachin = new Person();
let rohit = new Person("Rohit Shram", "Mumbai", 32, "Male");
console.log(sachin);
console.log(rohit);
sachin.details();
console.log("========== InstanceOf================================");
console.log(sachin instanceof Person);
