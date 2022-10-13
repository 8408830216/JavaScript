console.log("===============================(1)=================================================")
function maleMarriageEligibility(gender, age, boyName) {

    var result = gender == "Female " || "Male" && age >= 21 ? `Hey ${boyName} you are eligible for marriage`
        : "You are not eligible for marriage"
    console.log(result)
}
var one = maleMarriageEligibility("male", 25, "Billgates");
console.log("--------------------------------------------------------------")
var two = maleMarriageEligibility("Male", 17, "Stew Jobs");
console.log("===============================(2)=================================================")


function femaleMarriageEligibility(gender, age, girlName) {

    if (gender == "Female " || "Male" && age >= 18) {
        console.log(`Hey ${girlName} you are eligible for marriage`);
    } else {
        console.log("You are not eligible for marriage");
    }
}

femaleMarriageEligibility("Female", 16, "Jenifer")
console.log("--------------------------------------------------------------")
femaleMarriageEligibility("Female", 27, "Malinda Gates")