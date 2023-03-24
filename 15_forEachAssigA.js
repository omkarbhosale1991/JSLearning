const arrayNumbers=[1,-7,40,502,-77,91,0,108,89,-601]

arrayNumbers.forEach(currentValue =>{
    console.log(`Array numbers :  ${currentValue}`);
}
);
 console.log(` -------- finding +ive num --------`);
arrayNumbers.forEach(currentValue =>{
    
    if (currentValue>0) {
console.log(`+ive number in array is: ${currentValue}`);        
    }
});

console.log(` -------- finding -ive num and sum it --------`);
arrayNumbers.forEach(currentValue=>{
    newArray=[]
    let sum=0;
    if (currentValue<0) {
        sum=sum+currentValue;
        console.log(`-ive number in array is: ${currentValue}`);
        
    }
})