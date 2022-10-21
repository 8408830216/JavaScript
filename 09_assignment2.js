class Vehicle{
    constructor(bikeName ,modelyear ,type ,price){
    this.bikeName=bikeName;
    this.modelyear=modelyear;
    this.type=type;
    this.price=price;
}
}
console.log("===============================================VEHICLE DETAILS====================================================================");
let vehicle1=new Vehicle("Hayabusa","2020","Sport type","Rs 10lakh ")
console.log("First vehicle details are",vehicle1);
console.log("........................................................................................................................");
let vehicle2=new Vehicle("Kawasaki","2015","Sport type","Rs 7lakh ")
console.log("Second vehicle details are" ,vehicle2);
console.log("........................................................................................................................");
let vehicle3=new Vehicle("KTMDuke","2022","Sport Naked","Rs 8lakh ")
console.log("Third vehicle details are", vehicle3);
console.log("........................................................................................................................");
let vehicle4=new Vehicle("BMW","2021","Retro type","Rs 8lakh ")
console.log("Fourth vehicle details are" ,vehicle4);
console.log("........................................................................................................................");
let vehicle5=new Vehicle("Honda CBR","2020","Naked type","Rs 4lakh ")
console.log("Fifth vehicle details are" ,vehicle5);
console.log("=================================================COLLEGE DETAILS==================================================================");

class College{
    constructor(collegeName ,establishedYear,Stream,City){
    this.collegeName=collegeName;
    this.establishedYear=establishedYear;
    this.Stream=Stream;
    this.City=City;
}
}

let college1=new College("AVCOE","1984","Engineering","Sangamner");
console.log("First College details are",college1);
console.log("........................................................................................................................");
let college2=new College("PICT","1980","CSE","Pune");
console.log("Second College details are",college2);
console.log("........................................................................................................................");
let college3=new College("DYP","1990","Pharmacy","Lonawala");
console.log("Third College details are",college3);
console.log("........................................................................................................................");
let college4=new College("VJTI","1970","Engineering","Mumbai");
console.log("Fourth College details are",college4);
console.log("=============================================TRAVERSE OBJECT======================================================================");

function traverse_object(arg1){
    const College={
        collegeName:"AVCOE",
        establishedYear:1984,
        Stream:"Engineering",
        city:"Sangamner"
    }
    for (const key in College) {
        if (Object.hasOwnProperty.call(College, key)) {
            const element = College[key];
            console.log(`${key}:- ${element}`);
        }
    }
    console.log(College);
}
traverse_object();
console.log("====================================FIBONACCI SERIES===============================================================================");


var i;
var fibu = [0,1]; 

for (i = 2; i <= 8; i++) {
 
  
    fibu[i] = fibu[i - 2] + fibu[i - 1];
  console.log(fibu[i]);
}

