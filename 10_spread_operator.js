let person={
    name:"Prashant",
    age:"23",
    city:"Pune",
    address:{
        pin:412105,
        street:"kanch Pokali"
    }
}
console.log(person.name,person.age,person.city);
console.log(person);

// let student={...person}   it fails in nested elements
let student=JSON.parse(JSON.stringify(person)); //it does not fails in nested elements
student.city="Mumbai";
person.age=33;
console.log(student.city, person.city);
console.log(student.age, person.age);

student.address.street="Khav Galli";
console.log(student.address.street);
console.log(person.address.street);

console.table(person);
console.table(student);
