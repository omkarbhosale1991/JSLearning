const arrayNumbers=[20,11,40,25,37,49,9,90,60,2,19]
console.log(`[20,11,40,25,37,49,9,90,60,2,19] `);
console.log(` -----------num> 50--------`);
const newArray=arrayNumbers.filter(value=>value>50);
console.log(newArray);
console.log(`-------- even num -------`);
const evenNum= arrayNumbers.filter(value => value%2==0);
console.log(evenNum);
console.log(`-------- odd num -------`);
const oddNum= arrayNumbers.filter(value => value%2!=0);
console.log(oddNum);
console.log(`-------- num is multiple of 5 -------`);
const multiNum= arrayNumbers.filter(value => value%5==0);
console.log(multiNum);
console.log(`-------- num in between 20 to 50-------`);
const inBetweenNum= arrayNumbers.filter((value)=>{if (value>=20 && value<=50) {
    return value;
}});
console.log(inBetweenNum);