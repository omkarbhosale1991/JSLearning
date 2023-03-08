console.log(`================= Find total element ===============`);
const arrayNumbers = [ 20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11 ];
console.log(arrayNumbers);
console.log(`Length of array is :${arrayNumbers.length}`);
console.log(`================== first element and last element ==============`);
console.log(arrayNumbers);
const valueAtIndex0=arrayNumbers[0]
console.log(`first element using (const valueAtIndex0=arrayNumbers[0]) is ${valueAtIndex0}`);
console.log(arrayNumbers);
const firstEle=arrayNumbers.shift()
const lastEle =arrayNumbers.slice(-1)
console.log(`first element (using shift) And last element is ${firstEle},${lastEle}`);

console.log(`============ third last element using length property==============`);
console.log(arrayNumbers);
const last3rdElement=arrayNumbers[arrayNumbers.length-3]; 
console.log(` Find out value of third last element using length property is ${last3rdElement}`);

console.log(`================= all even numbers in array ===============`);
console.log(arrayNumbers);
let sumOfEvn=0;
for (let index = 0; index < arrayNumbers.length; index++) {
    const num = arrayNumbers[index];
    if (num %2==0) {
        console.log(`Even no. in array is ${num}`);
       sumOfEvn= sumOfEvn+ num;
    }  
}
console.log(`total sum of even number is ${sumOfEvn}`);

console.log(`================= all odd numbers in array ===============`);
console.log(arrayNumbers);
let sumOfOdd = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
  const num = arrayNumbers[index];
  if (num % 2 == 1) {
    console.log(`Odd no. in array is ${num}`);
    sumOfOdd = sumOfOdd + num;
  }
}
console.log(`total sum of odd number is ${sumOfOdd}`);



console.log(`================= Sum of all even numbers index in array ===============`);
console.log(arrayNumbers);
const evenNumb=[];
let sum=0;
for (let index = 0; index < arrayNumbers.length; index++) {
    const sumOfeven=arrayNumbers[index]
    sum=sum + sumOfeven;
     // sum=sum+2;
    if (sum%2==0) {

evenNumb.push(sum)
      

    }
}
console.log(`Sum of all even numbers index in array ${sum}`);

console.log(`================= Sum of all odd numbers index in array ===============`);
console.log(arrayNumbers);
console.log(`Sum of all odd numbers index in array is:`);
console.log(arrayNumbers);
console.log(`================= Sum of all element in array ===============`);
console.log(arrayNumbers);
console.log(`Sum of all element in array is:`);

// console.log(arrayNumbers);
 
// totalcount=0;
// for (let index = 0; index < arrayNumbers.length; index++) {
//     const totalcount= totalSumOfEle + 
    
// }
console.log(`================= Numbers which are multiple of 5 ==========================`);
console.log(arrayNumbers);
console.log(`================== Is number 115 available in arrayNumbers ? ==================`);
console.log(arrayNumbers);
let availableOrNot=arrayNumbers.includes(115);
console.log(`  Is number 115 available in array then true or not available then false ==>> ${availableOrNot}`);
let availableOrNot23=arrayNumbers.includes(23);
console.log(`  Is number 115 available in array then true or not available then false ==>> ${availableOrNot23}`);

console.log(`===================== Insert numbers =================`);
console.log(arrayNumbers);
arrayNumbers.splice(3,0,55,60)// no need give var,let,const
console.log(` 55,60 inserted at index position 3 then array is [${arrayNumbers}]`);
console.log(`======================== Delete 3 elements starting from index 4 ==================`);
console.log(arrayNumbers);
arrayNumbers.splice(4,4);
console.log(` Delete 3 elements starting from index 4 then array is [${arrayNumbers}]`);
