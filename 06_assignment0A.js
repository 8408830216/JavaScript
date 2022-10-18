console.log("==================================1)=====================================================");
let giveString="Iam very good IT Developer"
console.log("Given string is:- ",giveString);
let vowelsLoweCase = "aeiou";
let vowelUpperCase = "AEIOU";
let vowelsCount=0;
for (let index = 0; index <giveString.length; index++) {
    let char=giveString.charAt(index)
    let isLowerAvailable=vowelsLoweCase.includes(char);
    let isUpperAvailable=vowelUpperCase.includes(char);
    if (isLowerAvailable || isUpperAvailable) {
        vowelsCount = vowelsCount + 1;
    }
    
} 

console.log(`Total Vowels count : ${vowelsCount}`);

console.log("==================================2)=====================================================");
let cubes=1;
let addition=0;
function givenNo() {
    
     for (let index = 1; index<=5 ; index++) {
        cubes=index*index*index
        addition=addition+cubes
       
     }   console.log(`Sum of cube of 1 to 5 is :- ${addition}`);
}  
givenNo()

console.log("==================================3)=====================================================");
let str1="Hard work always pays back";
let str2 = "Soon i will be Angular IT champ";

let oddPositionedNumber = function(num){
    let res="";
    for (let index = 0; index <  num.length; index++) {
        if (index%2!=0 && num.charAt(index)!=" " ) {
            res= res+num.charAt(index);
        }
        
    }
    return res;
 }
 let ans=oddPositionedNumber(str1);
 let res=oddPositionedNumber(str2);
 console.log(`ODD position number characters in given string"Hard work always pays back" is :- ${ans}`);
 console.log("................................................................................")
 console.log(`ODD position number characters in given string"Soon i will be Angular IT champ" is :- ${res}`);

