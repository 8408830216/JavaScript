var wordLengthSquare= function(word){
    var square = word.length;
    return square*square;

}
console.log("===================================================================");
console.log("Given words are:JavaScript,Google,Developer");
console.log("1)==========================================================");
console.log(`Square of length of "JavaScript" is`, wordLengthSquare("JavaScript")); 
console.log(`Square of length of "Google" is`,wordLengthSquare("Google"));
console.log(`Square of length of "Developer" is`, wordLengthSquare("Developer"));  
console.log("2)==========================================================");
var givenStringLength="I am Angular Developer"
console.log("Given string is:",givenStringLength);
var result= givenStringLength.length;
console.log("Given string length:",result);
var totalWords=givenStringLength.split(" ")
var givenLength=totalWords.length
console.log("Count Of splits words:",givenLength)
console.log( "Given String length divide by count of split words:", result / givenLength );
console.log( "Given String length multiply by count of split words:", result * givenLength );
console.log("===================================================================");