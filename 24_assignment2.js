console.log("Name-Prashant Patil   Assignment-2(4th Nov)");

class Employee {
    constructor(emp_id,emp_name,emp_depth,emp_salary,emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_depth=emp_depth;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
    }

};
const emp_anil=new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha= new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi= new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali= new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika =new Employee(77,"Monika","IT",40000,"Wipro");
const emp_viny= new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi= new Employee(99,"Mahesh","HR",85000,"Infy");

const empArray=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi]

console.log(`====================1)Employees which are working in "TCS"======================================`)
for (const empls of empArray) {
    if (empls.emp_company=="TCS") {
        console.log(`Employee name:-${empls.emp_name} Company name :-${empls.emp_company}`);
    }
}
console.log(`====================2)"Finance" department employees============================================`)
for (const empls of empArray) {
    if (empls.emp_depth=="Finance") {
        console.log(`Department name:-${empls.emp_depth} Employee name :-${empls.emp_name}`);
    }
}
console.log(`====================3)Employees whose name stars with "R"=======================================`)
for (const strswith of empArray) {
    if(strswith.emp_name.startsWith("R")) {
        console.log(`Employee id :${strswith.emp_id}  Employee name:-${strswith.emp_name}  Dept name:-${strswith.emp_depth}  Employee salary:-${strswith.emp_salary}  Company name:-${strswith.emp_company} `);
        
    }
}


console.log(`====================4)Employees whose salary greater than 70000==================================`)
for (const empls of empArray) {
    if (empls.emp_salary > 70000) {
        console.log(` Employee name :-${empls.emp_name}    Company name:-${empls.emp_company}    Department name:-${empls.emp_depth}`);
    }
}
console.log(`====================5)Employees whose salary greater than or euqal 50000 and from "IT dept========`)
for (const empls of empArray) {
    if (empls.emp_salary >= 50000 && empls.emp_depth=="IT") {
        console.log(`Employee id :${empls.emp_id}  Employee name:-${empls.emp_name}  Dept name:-${empls.emp_depth}  Employee salary:-${empls.emp_salary}  Company name:-${empls.emp_company} `);
    }
}
console.log(`====================6)Employees from Company name "Infy"========================================`)
for (const empls of empArray) {
    if (empls.emp_company=="Infy") {
        console.log(`Employee id :${empls.emp_id}  Employee name:-${empls.emp_name}  Dept name:-${empls.emp_depth}  Employee salary:-${empls.emp_salary}  Company name:-${empls.emp_company} `);
    }
}


