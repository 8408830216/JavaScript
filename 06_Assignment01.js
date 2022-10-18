 console.log("===============================1)==================================================");
 var countVowels = function(myString) {
    console.log("Given string is → “Good Morning IT Champ”");
    var vowelsLoweCase = "aeiou";
    var vowelUpperCase = "AEIOU";
    var vowelsCount=0;
    for (let index = 0; index < myString.length; index++) {
       var char =  myString.charAt(index);
       var isLowerAvailable =  vowelsLoweCase.includes(char);
       var isUpperAvailable =  vowelUpperCase.includes(char);
       if (isLowerAvailable || isUpperAvailable) {
            vowelsCount = vowelsCount + 1;
       }
    }
    console.log(`Total Vowels count : ${vowelsCount}`);
  }
  countVowels("Good Morning IT Champ");

console.log("===============================2)==================================================");

function vowelcnt(counts) {
    console.log("Given string is:-", counts);
    var add=0;
    console.log(".....................................................................");
    console.log("No.of counts in given string is:-", counts.length);
    console.log(".....................................................................");
    var strLowerCase = counts.toLowerCase();
    console.log("Count of vowels in given string is:-");
    for (let index = 0; index < counts.length; index++) {
        var char = strLowerCase.charAt(index);
        if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {

            // console.log(char);
            add=add+1
           
        }
       
    }console.log(add);
   
}
vowelcnt("i love JavaScript");
console.log("===============================3)==================================================");
var add=0;
for (let index = 0; index <=10; index++) {
    add=add+index;
    
}
console.log(`Addition of numbers 1 to 10 is :-${add}`);

console.log("===============================4)==================================================");

var square=1;
var addition=0;
for (let index = 1; index <=10 ; index++) {
   square=index*index
   addition=addition+square
    
}
console.log(`Addition of square of 1 to 10 is :- ${addition}`);
console.log("===============================5)==================================================");

console.log("------------- 5.1===>even position number ---------------------");
 var str1="Hard work always pays back";
 var str2 = "Soon i will be Angular IT champ";
 var evenPositionedChar = function(str){
    var res=" ";

    for (let index = 0; index < str.length; index++) {
      if ( index%2==0 && str.charAt(index)!=" ") {
        res=res+str.charAt(index);
        
      }
        
    }
    return res;

 }
 var ans =evenPositionedChar(str1);
 var res =evenPositionedChar(str2);
 console.log(ans);
 console.log(res);
 console.log("------------5.2===>  Odd position number ----------------------------------");
 var oddPositionedNumber = function(num){
    var res="";
    for (let index = 0; index <  num.length; index++) {
        if (index%2!=0&&num.charAt(index)!=" " ) {
            res= res+num.charAt(index);
        }
        
    }
    return res;
 }
 var ans=oddPositionedNumber(str1);
 var res=oddPositionedNumber(str2);
 console.log(ans);
 console.log(res);
