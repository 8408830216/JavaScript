class Bank{
    constructor(bankName,location,account_no,ifsc,interest_rate){
      this.bankName = bankName;
      this.location = location;
      this.account_no = account_no;
      this.ifsc = ifsc;
      this.interest_rate=interest_rate
    }
}
let axis_bank=new Bank("Axis Bank","Pune",84088,"PN8408","11%")
let sbi_bank=new Bank("State Bank","Mumbai",30216,"MU3021","9%")
let icici_bank=new Bank("ICICI Bank","Nagpur",98340,"NA9834","15%")
let kotak_bank=new Bank("Kotak Bank","Dhule",94266,"DH9426","8%")
let hdfc_bank=new Bank("HDFC Bank","Sangli",70201,"SA7020","7.5%")
let punjab_bank=new Bank("Punjab Bank","Punjab",16333,"PU1633","10.5%")

const array=[axis_bank,sbi_bank,icici_bank,kotak_bank,hdfc_bank,punjab_bank]
console.log("-----------------------------C)Bank name and location-----------------------------------------");

console.log("Bank name:-", axis_bank.bankName,",Bank Location:-", axis_bank.location);
console.log("Bank name:-", sbi_bank.bankName,",Bank Location:-", sbi_bank.location);
console.log("Bank name:-", icici_bank.bankName,",Bank Location:-", icici_bank.location);
console.log("Bank name:-", kotak_bank.bankName,",Bank Location:-", kotak_bank.location);
console.log("Bank name:-", hdfc_bank.bankName,",Bank Location:-", hdfc_bank.location);
console.log("Bank name:-", punjab_bank.bankName,",Bank Location:-", punjab_bank.location);

console.log("-----------------------------D)Object which name is Kotak bank-----------------------------------------");
for (const findObj of array) {
    if (findObj.bankName=="Kotak Bank") {
        console.log(` ${findObj.bankName} , ${findObj.location} , ${findObj.account_no} , ${findObj.ifsc} , ${findObj.interest_rate}`);
    }
}

console.log("---------------------------------E)-----------------------------------------");
for (const allObj of array) {
    console.log(allObj);
}