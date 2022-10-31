const array_numbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11]
console.log(`-----------1)Total elements available or length is --------------------------`);
console.log(array_numbers.length);

console.log(`-----------2)First and last element  is --------------------------`);
console.log((`${array_numbers[0]}, ${array_numbers[10]} `));

console.log(`-----------3)Third last element is --------------------------`);
let tlastElement = array_numbers[array_numbers.length - 3];
console.log(tlastElement);

console.log(`-----------4)All even numbers is --------------------------`);
for (const evenNum of array_numbers) {
    if (evenNum % 2 == 0) {
        console.log(evenNum)
    }
}

console.log(`-----------5)All Odd numbers is --------------------------`);
for (const oddNum of array_numbers) {
    if (oddNum % 2 != 0) {
        console.log(oddNum)
    }
}

console.log(`-----------6)All Even position numbers in given array is --------------------------`);
for (let index = 0; index < array_numbers.length; index = index + 2) {
    const element = array_numbers[index];
    console.log(element);

}

console.log(`-----------7)All Odd position numbers in given array is --------------------------`);
for (let index = 1; index < array_numbers.length; index = index + 2) {
    const element = array_numbers[index];
    console.log(element);

}

console.log(`-----------8)Sum of all elements in given array is --------------------------`);
let sum = 0;
for (let i = 0; i < array_numbers.length; i++) {
    sum += array_numbers[i];
}
console.log(sum);

console.log(`-----------9)Numbers which are multiple of 5 in given array is --------------------------`);
for (let index = 0; index < array_numbers.length; index++) {
    const element = array_numbers[index];
    if (element%5==0) {
    console.log(element);    
    }
    
}
console.log(`-----------10)Is number 115 available in given array --------------------------`);
console.log(array_numbers.includes(115));

console.log(`-----------11)Is number 23 available in given array --------------------------`);
console.log(array_numbers.includes(23));