console.log(`========== Last word char count =======`);
function lastWordcharCount (str) 
{
  var reverse= ` `; 
  for (let index = str.length-1;index >=0;index++)
  {
var char=str.charAt(index);
  if (char==``)
    {
    break;
   }
     reverse=reverse+char;
   }
    
  return reverse;
};
var reverse =lastWordcharCount(`JavaScript is langvage of internet `);
console.log(`Last word char count of string => JavaScript is langvage of internet  is ${reverse}`);
var reverse = lastWordcharCount(`I am Angular Devloper`);
console.log(`Last word char count of string => I am Angular Devloper is ${reverse}`);
var reverse = lastWordcharCount(`Hardwork and commitment is the key of success`);
console.log(`Last word char count of string => Hardwork and commitment is the key of success is ${reverse}`);

// var str =lastWordcharCount(`JavaScript is langvage of internet `);
// console.log(`Last word char count of string => JavaScript is langvage of internet  is ${str}`);
// var str = lastWordcharCount(`I am Angular Devloper`);
// console.log(` Last word char count of string => I am Angular Devloper is ${str}`);
// var str = lastWordcharCount(`Hardwork and commitment is the key of success`);
// console.log(`Last word char count of string => Hardwork and commitment is the key of success is ${str}`);