
function reverseString(arg1) {
    
    let lenthStr = arg1.length - 1;
    let  reverseStr = "";
    for (let index = lenthStr; index >= 0; index--) {
        // console.log(arg1.charAt(index));
        reverseStr = reverseStr + arg1.charAt(index)
        
    }console.log(reverseStr);
}
console.log(`Given string is :-"Hard work always pays back":-`);
console.log(`after reverse the string is :-`);
reverseString("Hard work always pays back")

console.log(".................................................................................");
console.log(`Given string is:- "Soon i will be Angular IT champ"`);
console.log(`after reverse the string is :-`);
reverseString("Soon i will be Angular IT champ")
