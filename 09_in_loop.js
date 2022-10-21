const mohitPerson={
    fullName:"Sachin Tendulkar",
    age:35,
    is_married:true,
    city:"pune"
}
for (const key in mohitPerson) {
    if (Object.hasOwnProperty.call(mohitPerson, key)) {
        const element = mohitPerson[key];
        console.log(element);
        
    }
}