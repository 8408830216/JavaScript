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

const empArray=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];

console.log(`......................................1.Employees from Wipro Company....................................................`);
empArray.filter((person)=>{
    if (person.emp_company=="Wipro") {
       console.log( `Employee Id:-${person.emp_id}    Employee Name:-${person.emp_name}    Employee Dept:-${person.emp_depth}    Employee Company:-${person.emp_company}    Employee Salary:-${person.emp_salary} `); 
    } 
})
console.log(`......................................2.Employees from "IT" Or "HR" Department...........................................`);
empArray.filter((person)=>{
    if (person.emp_depth=="IT" ||person.emp_depth=="HR" ) {
       console.log( `Employee Id:-${person.emp_id}    Employee Name:-${person.emp_name}    Employee Dept:-${person.emp_depth}    Employee Company:-${person.emp_company}    Employee Salary:-${person.emp_salary} `); 
    } 
})
console.log(`......................................3.Employees whose id is greater than 50.............................................`);
empArray.filter((person)=>{
    if (person.emp_id>50 ) {
       console.log( `Employee Id:-${person.emp_id}    Employee Name:-${person.emp_name}    Employee Dept:-${person.emp_depth}    Employee Company:-${person.emp_company}    Employee Salary:-${person.emp_salary} `); 
    } 
})
console.log(`......................................4.Employees whose name starts with alphabate "A","V" Or "M"..........................`);
empArray.filter((person)=>{
    if (person.emp_name.startsWith("A")||person.emp_name.startsWith("V")||person.emp_name.startsWith("M") ) {
       console.log( `Employee Id:-${person.emp_id}    Employee Name:-${person.emp_name}    Employee Dept:-${person.emp_depth}    Employee Company:-${person.emp_company}    Employee Salary:-${person.emp_salary} `); 
    } 
})
console.log(`......................................5.Average Salary Of all Employees ....................................................`);
let add=0
empArray.forEach((element)=>{
       add=add+ element.emp_salary
      
})
let noOfEmp=empArray.length
let avgSal=add/noOfEmp
console.log(`Total Salary is-:${add}`);
console.log(`Average Salary is-:${avgSal}`);


console.log(`......................................5.Average Salary Of IT department....................................................`);
const ItDeptEmp=empArray.filter((element)=>{
    return element.emp_depth=="IT"
})
let sum=0
ItDeptEmp.forEach((value)=>{
    sum=sum+value.emp_salary
})
const lengthOfIt=ItDeptEmp.length;
const avgSalOfIt=sum/lengthOfIt
console.log(`Average Salary of IT dept employees is-:${avgSalOfIt}`);

