function primeNumber(check){
for (let index = 2; index <check ; index++) {
if (check%index==0) {
    return false;
} 
}return true;
}
console.log(primeNumber(11));
console.log(primeNumber(9));
console.log(primeNumber(7));