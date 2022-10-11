var greet = "Good Morning";
console.log(greet);
var count = greet.length;
console.log(count);
console.log(greet.length);
var sonali = greet.charAt(8);
console.log(sonali);
console.log(greet.charAt(8));
var fName = "Virat";
var lName = "Kohli";
var result = fName.concat(lName); // ViratKohli
console.log(result);

console.log("==============replace()===============");
var greet = "Good Morning bro and sis";
var replaceDemo = greet.replace("Morning", "Evening");
console.log(replaceDemo);
console.log("==============toUpperCase() and toLowerCase()===============");
console.log(replaceDemo.toUpperCase());
console.log(replaceDemo.toLowerCase());
console.log("==============trim()===============");
var greet = "    Good Morning bro and sis            ";
console.log(greet.length);
var trimResult =  greet.trim();
console.log(trimResult.length);
console.log("==============includes()===============");
var greet = "Good Morning bro and sis";
console.log(greet.includes("bro"));
var greet = "Good Morning bro and sis";
console.log(greet.includes("Bro"));
console.log("==============substring()===============");
var greet = "Good Morning bro and sis";
console.log(greet.substring(8));
console.log(greet.substring(13, 17));
// slice, substing and substr  is same but substr is remove from this version
console.log("==============slice()===============");
console.log(greet.slice(13));
console.log(greet.slice(13, 17));
console.log("==============split()===============");
var studentList  = "Sunil | Anil| Andy| Jenny| Lata";
var splitResult = studentList.split("|");
console.log(splitResult);
console.log("==============Backtick()===============");
// (string template)to put something into doubleCoat with help of backtic
var impQuote = `"Do or Die" this attitude is important for this training`;
console.log(impQuote);

var fName = "Virat";
var lName = "Kohli";

// First Name:${fName}  Last Name: ${lName} 
console.log(`First Name : ${fName} and Last Name: ${lName}`);


var res = "Hey you are doing good keep it up";
var stepSplit =  res.split(" ");
console.log(stepSplit);
console.log(stepSplit.length);




