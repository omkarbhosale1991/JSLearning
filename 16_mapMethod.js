console.log(`----------------------After adding 10 in each element then array ---------------`);
const arrayNumber=[20,11,40,25,23,11,9,31,60,2,19];
newArray=arrayNumber.map(ele =>ele+10);
console.log( newArray);

console.log(`---------- Squre of each ele ----------`);
squreOfArray=arrayNumber.map( ele=> ele*ele)
console.log(squreOfArray);
console.log(`--------- add index value in each corresponding ele ------------`);

addIndexValueArray=arrayNumber.map(ele=>ele+indexof(ele));
console.log(addIndexValueArray);
