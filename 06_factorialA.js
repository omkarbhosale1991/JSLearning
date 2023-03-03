function fact(num) {
let factorial=1;
  for (let index = num; index >= 1; index--) {
    
factorial=factorial*index;

  }
  if (num == null || num == undefined || num==0) {
    var str=console.log(`re-enter correct value`);
    return str;
  }
  
}
fact(5);
console.log(`factorial of ${num} is ${factorial}`);
