
let person={
    fullName:"Sachin Tendulkar",
    City:"Mumbai",
    age:"42",
    isMarried:"Yes",
    address: {
        street : "FC road",
        pincode : 245678,
        city:"Pune"
    },
    eat: function(){
        console.log("Iam vegeterian");
    },
    details:function() {
        let personDetails= `Details are: ${this.fullName},  ${this.age}, ${this.address.city} `
        return personDetails
    }
    
}
console.log("========in operator=========================");
let isAvailable='fullName'in person;
console.log(isAvailable);
console.log("=================================");
console.log(Object.entries(person)); //if we wnn to find the total number of keys
console.log("=================================");
console.log(Object.keys(person));   //if we wnn to find the total number of keys
console.log("=================================");
console.log(Object.values(person));  //if we wnn to find the total number of values
console.log("=================================");

let pDetails=person.details();
console.log(pDetails);
console.log("=================================");
console.log(typeof person);     
console.log(person.address);
person.eat();
console.log(person.address.street);  //if we wnn to access the propety 
person.fullName="Sachin Ramesh Tendulkar"  //if we wnn to update property value
person.pinCode=123456    //if we wnt to add extra key
person.profession= "Cricketer"    //if we wnt to add extra key
console.table(person);
console.log("-----------------------------");
delete person.age;     //if we wnn to dlet the property
console.table(person);  
console.log("-----------------------------");
console.log(person["age"]);   //if we wnt to access the property
console.log("-----------------------------");
let sachinFullName=person.fullName
console.log(sachinFullName);    //if we wnt to access the property
console.log("-----------------------------");
console.log(person.fullName);      //if we wnt to access the property
console.log("-----------------------------");
console.log(person.isMarried);      //if we wnt to access the property
console.log("-----------------------------");



let collegeAbc={
    
   
}
console.log(collegeAbc);   //if we wnn to create empty object