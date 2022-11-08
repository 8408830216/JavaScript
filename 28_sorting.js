
const arryOfNames=["Anil","Prashant","Jyoti","Sharayu","Raj"]
arryOfNames.sort();
console.log(arryOfNames);

const arrayOfNumbers=[100,44,255,32,5,64,81,73]
arrayOfNumbers.sort((first,second)=>{
    return first>second ? 1:-1
});
console.log(arrayOfNumbers);        //sort method is going wrong for numbers so wat we need some condition