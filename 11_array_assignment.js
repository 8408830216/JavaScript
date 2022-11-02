console.log("----------------------------------------------------------------------------");
const arrayOfNames=["Kamat","Memos","Nashpati","Taimur","Menon","Kamat","Andy","Taimur"]
console.log("A) Original array is:-");
console.log(arrayOfNames);
console.log("----------------------------------------------------------------------------");
let remDup=[...new Set(arrayOfNames)]
console.log("B) After Removind duplicate elements the array is:-");
console.log(remDup);
console.log("----------------------------------------------------------------------------");
let orgLen=arrayOfNames.length;
let dupLen=remDup.length;
console.log(`C) Count of duplicate elements remove are:- ${orgLen-dupLen}`);
console.log("----------------------------------------------------------------------------");
console.log(`D) Total number of count of unique elements after removing duplicate elements is:- ${dupLen}`);
console.log("----------------------------------------------------------------------------");