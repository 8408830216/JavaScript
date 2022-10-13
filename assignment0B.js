console.log("1)Check EVEN,ODD numbers=====================================================================");
function EvenOdd(value){
    if(value%2==0){
        console.log(`value is "EVEN"`)
    }else {
        console.log(`value is"ODD"`);
        } 
    }
EvenOdd(40);
EvenOdd(51);
EvenOdd(50);
EvenOdd(99);
console.log("2)=====================================================================");
function voteEli(age){
    if(age>=18){
        console.log("Yes you are eligible for vote")
    }else {
        console.log("You are not eligible for vote");
        }
}
voteEli(18);
console.log("-------------------------------------------------------------------------");
voteEli(20);
console.log("-------------------------------------------------------------------------");
voteEli(17);
console.log("-------------------------------------------------------------------------");
voteEli(40);
console.log("3)=====================================================================");

var string="javaScript-ES6"
var stringLength= string.length
console.log("-------------------------------------------------------------------------");
console.log("Given string is:",string);
console.log("-------------------------------------------------------------------------");
console.log("Above string length is:",stringLength);
console.log("-------------------------------------------------------------------------");
if(stringLength>10){
    console.log("Yes above string contain more than 10 character");
}else{
    console.log("Above string does not contain more than 10 character");
}
console.log("4)=====================================================================");
var javaLang="JavaScript Language"
console.log("Given string is:",javaLang);
console.log("-------------------------------------------------------------------------");
if(javaLang.startsWith("Java")){
    console.log(`Yes above string starts with "Java"`);
}else{
    console.log(`above string does not starts with "Java"`);
}