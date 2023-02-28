function sringHandsOn() {
  console.log(`========== step 1=============`);
  console.log("    Hey you are doing  good keep it up     ");
  console.log(`========== step 2 =============`);
  var str = "    Hey you are doing  good keep it up     "; //caluclate length
  var findLength = str.length;
  console.log("Length of string is", findLength);
  console.log(`========== step 3=============`);
  var  strAfterTrim = str.trim;
  console.log("extra spaces removed from str string is", str.trim()," and its length is",str.length);
  console.log(`========== step 4=============`);
  console.log("Remove extra spaces",strAfterTrim);
  var resultCount = findLength - strAfterTrim;
  console.log(resultCount);// need help
  console.log(`========== step 5=============`);
  console.log(` frist and last char after trim`);
var hcharAtIndex= str.indexOf('H');       
console.log("index of char which is  H is",hcharAtIndex);
var pcharAtIndex= str.indexOf('p');       
console.log("index of char which is  p is",pcharAtIndex);
// var charAtIndex4 =str.charAt(4);
// var charAtIndex31 =str.charAt(31);
// console.log("frist and last char after trim",charAtIndex3,charAtIndex31);------need help---------

  console.log(`========== step 6=============`);
  console.log(`index of good`);

var goodcharAtIndex= str.indexOf("good"); 
console.log("index of char which is  good is",goodcharAtIndex);

  console.log(`========== step 7=============`);

  console.log(`substring start from index 22 `);
  var charAtIndex22 =str.charAt(22);
console.log(" char at 22 is",charAtIndex22);

  console.log(`========== step 8=============`);

  console.log(`string end with up after step 3`);


  console.log(`========== step 9=============`);
  console.log(`string start with hey`);
}
sringHandsOn();
