console.log(`================= Step 1 =====================`); // arg with return value
function squreOfWordLength(word)
{
    var findLength = word.length;
    var squreOfLength = word.length**2; // for squre **
   
    var result=console.log(`The word length is ${findLength} and squre of length is ${squreOfLength}`);
 return result; // Illegal return statment (what to do ?)

}
// squreOfWordLength("Java Script");
// squreOfWordLength("Google Chrome");
// squreOfWordLength("Devlaper Smart");
// console.log(result);

var reResult= squreOfWordLength("Java Script");
console.log(reResult);
var reResult= squreOfWordLength("Google Chrome");
console.log(reResult);
var reResult= squreOfWordLength("Devlaper Smart");
console.log(reResult);

console.log(`============= Step 2=============`); // no arg with no return value

function angularDev()
{
var str="I am Angular Devloper";
var strLength=str.length;

console.log(`length of string is ${strLength}`);
var splitResult=str.split(" ");
console.log(`Total no. of words ${splitResult.length}`);

// console.log(`Total no. of words ${splitResult,length}`); =========wrong===


var div= 21/4; // var div = (strLength/result) ;  ???????????

console.log(`length of string divided by total words is ${div}`);


var multi= 21*4; // var multi = strLength*result; ??????????
console.log(`length of string multipled by total words is ${multi}`);
}
angularDev();