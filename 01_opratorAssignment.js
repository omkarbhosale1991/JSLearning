console.log(`================= Step 1 =====================`);
function squreOfWordLength(word)
{
    var findLength = word.length;
    var squreOfLength = word.length**2;

    var result=console.log(`The word length is ${findLength} and squre of length is ${squreOfLength}`);

 return result; 

}
// squreOfWordLength("Java Script");
// squreOfWordLength("Google Chrome");
// squreOfWordLength("Devlaper Smart");
// console.log(result);

var reResult= squreOfWordLength("Java Script");
var reResult= squreOfWordLength("Google Chrome");
var reResult= squreOfWordLength("Devlaper Smart");
console.log(reResult);

console.log(`============= Step 2=============`);

function angularDev()
{
var str="I am Angular Devloper";
var strLength=str.length;
console.log(`length of string is ${strLength}`);
var splitResult=str.split(" ");
var result =console.log(`Total no. of words ${splitResult.length}`);
// console.log(`Total no. of words ${splitResult,length}`);=========wrong===
var div = strLength/result;
// var ans= 21/4;
// console.log(`${ans}`);
console.log(`length of string divided by total words is ${div}`);
var multi = strLength*result;
console.log(`length of string multipled by total words is ${multi}`);
// var ans= 21*4;
// console.log(`${ans}`);


}
angularDev();