let teacher={
    fullName:"Sandeep Kolhe",
    age:"35",
    profession:"Teacher",
    city:"Pune",
    pinCode:412105,
    degree: {
        Eng:"CSC",
        PHD:"Adv Computing",
    },
    cert:{
        cert1:"Hacker Rank Partipation",
        cert2:"Cert in IFE course",
        cert3:"Cert in Adv Proframming",
    },
    allDegrees:function() {
        let allDeg=`Degrees are: ${this.degree.Eng} , ${this.degree.PHD}`
        return allDeg;
    }

}
console.log("========================================================================================================");
let pDetails=teacher.allDegrees();
console.log("Teacher Degrees are:-",pDetails);
console.log("========================================================================================================");
console.log(  "Total Degrees are:-", Object.entries(teacher.degree));
console.log("========================================================================================================");
console.log(teacher);
console.log("========================================================================================================");
console.log("after adding one new property:-");
teacher.clgName="Amrutvahini Sangamner"
console.table(teacher);
console.log("========================================================================================================");
teacher.fullName="Sandeep Ramesh Kolhe";
console.log("after update fullname:-");
console.log(teacher.fullName);
console.log("========================================================================================================");
delete teacher.cert.cert1
console.log("after delet cert1:-");
console.table(teacher.cert);
console.log("========================================================================================================");
teacher.cert.cert4="Angular developer"
console.log("after adding cert4:-");
console.table(teacher.cert);
console.log("========================================================================================================");