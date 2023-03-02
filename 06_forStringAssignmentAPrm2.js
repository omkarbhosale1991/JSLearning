console.log(`========== Last word char count =======`);
function lastWordcharCount (str) 
{
  var count = 0; 
  var string= str.split(` `)
  for (let index = 0;index <= str.length;index++)
  {
  
   if (index===str.length-1)
    {
    count = string(index).length;
   }
     
   }
    
  return count;
};

var str =lastWordcharCount(`JavaScript is langvage of internet `);
console.log(`Last word char count of string => JavaScript is langvage of internet  is ${str}`);
var str = lastWordcharCount(`I am Angular Devloper`);
console.log(` Last word char count of string => I am Angular Devloper is ${str}`);
var str = lastWordcharCount(`Hardwork and commitment is the key of success`);
console.log(`Last word char count of string => Hardwork and commitment is the key of success is ${str}`);