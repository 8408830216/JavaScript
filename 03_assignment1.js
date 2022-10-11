var forSquare= function(value){
    console.log(value * value);
}
console.log("Square of 5:",);
forSquare(5);
console.log("Square of 6:");
forSquare(6);
console.log("Square of 25:");
forSquare(25);
console.log("Square of 100:");
forSquare(100);
console.log("Function type is:", typeof forSquare );
console.log("======================================================================");

var trianArea = function(factor,base,height){
    console.log(factor*base*height);
}
console.log("Area Of Triangle:");
trianArea(0.5,45,34);

var rectArea = function(length,width){
    console.log(length*width);
}
console.log("Area Of Rectangle:");
rectArea(499,917);

console.log("========================================================================");
var swapValue=function(value1,value2){
    console.log("Before Swapping....");
    console.log(value1,value2)
    console.log("After Swapping.....");
    var temp= value1
    value1=value2
    value2=temp
    console.log(value1,value2);
}
swapValue("Virat","Anushka");
swapValue("1000","2000");


console.log("=======================================================================");
var forString="JavaScript the most popular language"
console.log(forString);
var count = forString.length;
console.log("Total character in above line:", count);
var indexChar=forString.indexOf("S");
console.log("Index of character 'S'in above line:" ,indexChar);
var indexLang=forString.indexOf("lang");
console.log("Index of string 'lang' in above line:",indexLang);
var lastChar=forString.charAt(forString.length-1);
console.log("Last character in above line :",lastChar);
var lastChar=forString.charAt(forString.length-3);
console.log("Third last character in above line:",lastChar);
