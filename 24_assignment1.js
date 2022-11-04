console.log("Name-Prashant Patil   Assignment-1(4th Nov)");
console.log("1)===========================================");
let withNoArg= ()=> {
    console.log("Good Evening, Today is Friday");
};
withNoArg();

console.log("2.A)===========================================");

let withArg=(arg1,arg2,arg3)=>{
   console.log(`Multiplication of three values is -:${arg1*arg2*arg3}`);
};
withArg(5,5,2)
console.log("2.B)===========================================");
withArg(10,4,arg3=2);      //Set default value for arg3

console.log("3.A)===========================================");
let addArg=(arg1,arg2,arg3,arg4,arg5) => arg1+arg2+arg3+arg4+arg5;
console.log(`Addition of five value is-: ${addArg(100,100,200,349,756)}`);

console.log("3.C)===========================================");
console.log(`Addition of five value is(It performs Concat)-: ${addArg("Iam"," learning"," ES6"," features"," in depth")}`);