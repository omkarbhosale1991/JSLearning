console.log(`==========Vowels=======`);
var vowels = function vowelsName (str) {
  count = 0; //step 3 IMP STEP
  for (
    let index = 0;index <= str.length;index++ //step 2
  )
  {
    var charAt = str.charAt(index);
    if (
      charAt == `a` || charAt == `A` ||charAt == `e` ||charAt == `E` ||
      charAt == `i` ||charAt == `I` ||charAt == `o` ||charAt == `O` || charAt == `u` ||charAt == `U`
    ) {
      //step 4
      count = count + 1; //step 5 IMP 
     
    }
    
  }
  return count;
};

var str = vowels(`JavaScript is langvage of internet `);
console.log(`vowels count of string => JavaScript is langvage of internet is ${str}`);
var str = vowels(`I am Angular Devloper`);
console.log(` vowels count of string => I am Angular Devloper is ${str}`);
var str = vowels(`Hardwork and commitment is the key of success`); // last step
console.log(`vowels count of string => Hardwork and commitment is the key of success is ${str}`);


