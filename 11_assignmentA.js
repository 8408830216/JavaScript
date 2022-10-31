console.log("=======================1)Given object bank_Sbi is=====================================");
let bank_sbi = {
    branch_name: "Pune",
    branch_code: 1210,
    head_office: "Mumbai",
    branch_atm: 5
}
console.log(bank_sbi);

console.log("=======================2)Given object bank_location is=================================");
let bank_location = {
    street: "Fc Road",
    city: "Pune",
    pin_code: 412105
}
console.log(bank_location);

console.log(`=======================3A) Object cloning with the help of "Object.assign()"============`);
let objectsbi = Object.assign(bank_sbi)
console.log(objectsbi);

let objectLoca = Object.assign(bank_location)
console.log(objectLoca);

console.log(`======================3B) Object cloning with the help of "Spread operator"===============`);
let spreadSbi = { ...bank_sbi }
console.log(spreadSbi);

let spreadLoc = { ...bank_location }
console.log(spreadLoc);

console.log("=======================4)Given object rate_of_interest is==================================");
let rate_of_interest = {
    home_loan_interest: "8%",
    personal_loan_interest: "10%",
    due_interest: "15%"
}
console.log(rate_of_interest);
console.log("=======================5)Merged the objects ie bank_sbi,bank_location,rate_of_interest ====");
let sbi_details = Object.assign({}, bank_sbi, bank_location, rate_of_interest);
console.table(sbi_details);
console.log("=======================6)Traverse object using loop==========================================");
for (const key in sbi_details) {
    if (Object.hasOwnProperty.call(sbi_details, key)) {
        const element = sbi_details[key];
        console.log(element);

    }
}