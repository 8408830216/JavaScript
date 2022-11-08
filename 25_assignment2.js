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

console.log("====================================1)==================================================");
empArray.forEach((value) =>{
    if (value.emp_company=="TCS") {
        console.log( `Employee name:- ${value.emp_name}  Company Name:-${value.emp_company}`);
    }
})
console.log("====================================2)==================================================");

empArray.forEach((value) =>{
    if (value.emp_salary>=50000) {
        console.log( `Employee Id:-${value.emp_id}  Employee name:-${value.emp_name}  Employee Dept:-${value.emp_depth}  Employee Salary:-${value.emp_salary}  Employee Company:-${value.emp_company}`);
    }
})
console.log("====================================3)==================================================");
let add=0;
empArray.forEach((element)=>{
    add=add+element.emp_salary
})
console.log(`sum of salary of all Employees is-: ${add}`);

console.log("====================================4)==================================================");
let lengthOf=empArray.length
let avgSalary=add/lengthOf;
console.log(`Average salary is-: ${avgSalary}`);
console.log("====================================5)==================================================");
empArray.forEach((value) =>{
    if (value.emp_depth=="IT" || value.emp_depth=="HR" && value.emp_salary>=75000) {
        console.log( `Employee Id:-${value.emp_id}  Employee name:-${value.emp_name}  Employee Dept:-${value.emp_depth}  Employee Salary:-${value.emp_salary}  Employee Company:-${value.emp_company}`);
    }
})