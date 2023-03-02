function tcsInterviewCheck(gradScore,hscScore,sccScore,candidateName)
 {
    var result=(gradScore>=70 || hscScore>=80 || sccScore>90) 
    ? `Congratulation you are eligible for TCS interview `
    :`Unfortunatly you are not eligible for initerview`
return result;
 }
var result=tcsInterviewCheck(80,86,88,`Omkar`);
console.log(`TCS Interview check is ${result}`);
var result=tcsInterviewCheck(70,65,55,`Saddam`);
console.log(`TCS Interview check is ${result}`);
var result=tcsInterviewCheck(60,79,88,`Amit`);
console.log(`TCS Interview check is ${result}`);
