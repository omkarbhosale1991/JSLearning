function primeNumbers(startValue,totalPrime){
    let count = 0;
    let num = startValue;
    const arrayOfPrime = [];
    while (count<totalPrime) {
        let isPrimeNum = isPrime(num);
        if(isPrimeNum) {
            count++;
            arrayOfPrime.push(num);
        }
        num++;
    } 
    console.log(arrayOfPrime); 
}

function isPrime(num){
    for (let index = 2; index < num; index++) { // num = 7 index= 7
        if(num%index ==0) {// 7%6==0
            return false;
        }
    }
    return true;
}
primeNumbers(3, 10);
primeNumbers(20, 10);
primeNumbers(50, 15);

// function prime(num) {  /////////////---------------------------  wrong
//     if (num>2||num===2||num%2===0) {
//         for (let index = num; index < Math.sqrt(num); index++) {
//             if (num%index===0) {
                
//             }
            
//         }
        
//     }
//     return console.log(`${num} is prime number`);
// }
// prime(15);
// prime(3);
// prime(6);

// --------------------------------------------------------------------------------------------------
// function primeNum(num1) {

//      //0 to 50
//      {
//         if (num1==0||num1==1) {
//             console.log(`${num1} is not prime number`);
           
            
//         }
//          else {
//             for (let index = 2; index < num1; index++)
//             if (num1%index==0) {
//                 console.log(`${num1} is prime number`);
//             } 
        
//         }
        
//      }
    
// }
// primeNum(15)
// // let result=primeNum(15);
// // console.log(`This number ${result}`);