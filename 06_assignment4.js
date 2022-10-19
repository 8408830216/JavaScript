function gradeSystem(score){
    while (score<35 && score>0) {
        console.log("You are Failed");
        break;
    }
    while (score>=35) {
        console.log("You are Passed");
        break;
    }
    while (score>=35 && score<60) {
        console.log(`Grade is 'C'`);
        break;
    }
    while (score>=60 && score<75) {
        console.log(`Grade is 'B'`);
        break;
    }
    while (score>=75 && score<90) {
        console.log(`Grade is 'A'`);
        break;
    }
    while (score>=90 && score<100) {
        console.log(`Grade is 'A+'`);
        break;
    }
    while (score<0 || score>100) {
        console.log("invalid input for -ve or more than 100 score");
        break;
    }
    while (score==null) {
        console.log("invalid input null");
        break;
    }
    
    while (score=="undefined") {
        console.log("invalid input undefined");
        break;
    }
    while (score==" ") {
        console.log(`invalid input for "(space)"` );
        break;
    }
    while (score=="fifty five") {
        console.log("invalid input ");
        break
    }
   
}
console.log("..................................................................");
console.log(`1)Score is 66:-`);
gradeSystem(66);
console.log("..................................................................");
console.log(`2)Score is 13:-`);
gradeSystem(13);
console.log("..................................................................");
console.log(`3)Score is " ":-`);
gradeSystem(" ");
console.log("..................................................................");
console.log(`4)Score is 98:-`);
gradeSystem(98);
console.log("..................................................................");
console.log(`5)Score is "fifty five":-`);
gradeSystem("fifty five");
console.log("..................................................................");
console.log(`6)Score is 35:-`);
gradeSystem(35);
console.log("..................................................................");
console.log(`7)Score is 75:-`);
gradeSystem(75);
console.log("..................................................................");
console.log(`8)You enter "null" please enter valid input :-`);
gradeSystem(null);
console.log("..................................................................");
console.log(`9)You enter "undefined" please enter valid input:-`);
gradeSystem(undefined);
console.log("..................................................................");
console.log(`10)You enter "-20" negative score please enter valid input:-`);
gradeSystem(-20);
console.log("..................................................................");
console.log(`11)Score is 55:-`);
gradeSystem(55);
console.log("..................................................................");
console.log(`12)Score is 82:-`);
gradeSystem(82);
console.log("..................................................................");



 
