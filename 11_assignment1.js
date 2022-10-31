const fruits_seasonal=["Banana","Orange","Apple","Mango","Water Malon"]
console.log("---------------------Given array is------------------------------");
console.log(fruits_seasonal);
console.log(`------------1)First element and Last element in array is:---------------------------`);
console.log(` ${fruits_seasonal[0]}, ${fruits_seasonal[4]} `)
console.log(`------------2)Adding "Papaya" before "Banana" then array is-----------------------------`);
fruits_seasonal.unshift("Papaya")
console.log(fruits_seasonal);
console.log(`------------3)Remove "Mango" from array-----------------------------------------------`);
fruits_seasonal.splice(4,1)
console.log(fruits_seasonal);
console.log(`------------4)Add "Pineapple" at the last position------------------------------------`);
fruits_seasonal.push("Pineapple")
console.log(fruits_seasonal);
console.log(`------------5)Add "Dragon fruit" before "Water Melon"------------------------------------`);
fruits_seasonal.splice(4,0,"Dragon Fruit")
console.log(fruits_seasonal);
console.log(`------------6)Replace "Orange" with "Kiwi"-----------------------------------------------`);
fruits_seasonal.splice(2,1,"Kiwi")
console.log(fruits_seasonal);
console.log(`------------7)Elements starting from index 1 to 4 is--------------------------------------`);
console.log(fruits_seasonal.slice(1,4));
console.log(`------------8)Last three elements is--------------------------------------`);
console.log(fruits_seasonal.splice(4));