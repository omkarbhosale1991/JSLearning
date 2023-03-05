
function factorialOfNumber(num)
 {

if (num == null || num ==undefined || (isNaN(num) && typeof num === "str"))
 {
  console.log(`Given value ==>> ${num} is invalid , re-enter correct value`);
}
factorial=1;
  for (let index = num; index >= 1; index--)              
   {
    factorial=index* factorial;
   }
   console.log(`factorial of ${num} is ${factorial}`);
  }

factorialOfNumber(5);
factorialOfNumber(3);
factorialOfNumber(null);
factorialOfNumber(8);
factorialOfNumber(undefined); //unexpected result
factorialOfNumber(9)
factorialOfNumber(0)




