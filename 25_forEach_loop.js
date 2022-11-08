let show = ()=>{
    console.log("Hii");
}
show();
console.log("========================================");
const arrayNumbers=[10,20,30,40,50,10]
arrayNumbers.forEach(function(currentValue,index,array){
    console.log(currentValue,index,array);
});            //normal

console.log("========================================");

arrayNumbers.forEach((currentValue)=> console.log(currentValue));     
 //arrow function        //index and array argument is optional no need to write that.

 console.log("========================================");

 const setOfNum=new Set(arrayNumbers);
 setOfNum.forEach((value) =>  {
    console.log(value);
 })     //traversing set using forEach loop or method

 console.log("========================================");
 console.log("===== Traversing map using forEach() =====");
 let map = new Map();    //map is a collection of entries
 map.set(22, "Sachin");
 map.set(11, "Dravid");
 map.set(33, "Gaungully");
 map.set(77, "Dravid");
 map.forEach( (key, value) => {
    console.log(key, value);
} );