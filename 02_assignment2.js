function name(){
    console.log("Prashant Gulabrao Patil");
    console.log("Iam Engineering Graduate Student");
}
name();

console.log("---------- Addition function with concat-------------");

function addition(first_name,last_name){
    console.log(first_name + last_name)
}
addition("Prashant" , "Patil");


function swap_values(cricketer,actress){
    console.log("---------- Before Swap-------------");
    console.log(cricketer,actress);
    console.log("---------- After Swap-------------");
    var temp=cricketer
    cricketer=actress
    actress=temp
    console.log(cricketer,actress);
}
swap_values("Virat" , "Anushka");
swap_values(100 , 200);