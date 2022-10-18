console.log("====================================================================================");
function reverseString(arg1){
    var lengthFind=arg1.length-1;
    var reverseStr = "";
    for (let index = lengthFind; index >=0;index--) {
        // console.log(arg1.charAt(index));
        reverseStr=reverseStr+arg1.charAt(index)

    }console.log(reverseStr);
    return " "
}

console.log("......................................1.1.1...............................................");
console.log(`Given string is "Hard work always pays back"`);
console.log("Reverse of given string is:-");
reverseString("Hard work always pays back");
console.log("......................................1.1.2...............................................");
console.log(`Given string is "Soon i will be Angular IT champ"`);
console.log("Reverse of given string is:-");
reverseString("Soon I will be Angular IT Champ");
console.log("========================================================================================");