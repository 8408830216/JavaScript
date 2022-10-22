const array_nums =[20,3,4,56,90,400,49];
console.log("step 1-:Original array is");
console.log(array_nums);
let other_array=array_nums;
array_nums.push(55,56);
console.log("step 1-:Cloned  array is");
console.log(array_nums);
console.log("-------------------------------------------------");
let updateArray=[...array_nums];
array_nums.push(10,25);
console.log("step 2-:Original array with update is");
console.log(array_nums);
console.log("step 2-:Cloned  array is");
console.log(updateArray);
console.log("-------------------------------------------------");
const array_even=[2,30,14,8]
console.log("step 3-: array_even is");
console.log(array_even);
let mergArray={...array_nums , ...array_even}
console.log("step 3-:Concat operation with array_nums and array_even");
console.log(mergArray);
console.log("-------------------------------------------------");
const employee_info={
    name:"Prashant Patil",
    age:23,
    address:{
        Locality:"Chakan",
        city:"Pune",
        street:"Khav Galli",
        state:"Maharashtra",
        country:"India"    
    },
    salary:{
        july_month:"40K",
        aug_month:"50K",
        june_month:"65K"
    },
    mobile:+918408830216
}
console.log("step 4-:Original Employee information ");
console.log(employee_info);
let updateInfo={...employee_info} 
updateInfo.address.street="Swargate Road"
employee_info.mobile=+919834094266;
console.table(employee_info);
console.table(updateInfo);
console.log(` step 4.d-:So i observed the output and conclusion is that "...operator" fails in nested block`);
console.log("-------------------------------------------------");

let updateInfo2=JSON.parse(JSON.stringify(employee_info));
updateInfo2.salary.july_month="80K";
updateInfo2.address.country="United Kingdom";
console.log(`step 7.a-:Original employee information`);
console.table(employee_info);
console.log(`step 7.b-:Updated Employee information`);
console.table(updateInfo2);
