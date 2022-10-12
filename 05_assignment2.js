var greaterNum=function(value1,value2){
     var result= value1>value2 ? value1:value2;
     console.log(result);
}
console.log("===========================1)Greater Numbers============================================");
console.log("Greater number between 10 and -10 is:");
greaterNum(10,-10)
console.log("Greater number between 800 and 899 is:");
greaterNum(800,899)
console.log("=================================2)Even Or Odd Numbers===========================================");

var evenOrOdd=function(arg1){
    var result= arg1 %2==0 ? "True":"False";
    console.log(result);
}
evenOrOdd(29);
evenOrOdd(0);
evenOrOdd(101);
evenOrOdd(44);
console.log("=========================3)Length of words is Even Or Odd======================================");

var evOddLength= function(word){
    var lengthOf=word.length
    var result= lengthOf % 2==0 ? "Even":"Odd";
    console.log(result);
}
console.log("JavaScript length is even or odd:");
evOddLength("JavaScript"); 
console.log("Developer length is even or odd:");
evOddLength("Developer");
console.log("Google length is even or odd:");
evOddLength("Google");