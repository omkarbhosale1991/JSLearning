function greaterNum(num1,num2)
 {
var result=num1>num2 ?num1:num2;
console.log(`Greater number amongust ${num1} , ${num2} is ${result}`); // no return value
}
greaterNum(10,-10);
greaterNum(800,899);

//===================================================================
// function greaterNum(num1,num2)
//  {
// var result=num1>num2 ?num1:num2;
//  return result; //  return value
// }
// var result=greaterNum(10,-10)
// console.log(`${result}`);  // somthing going wrong...............

function evenOrOdd(num) {
   var result=num%2==0 ?true:false  // % use to finding reminder ( num%2==0 then even)
return result;
    
}
var result=evenOrOdd(20);
console.log(`value 20 is true then even or false then odd ${result}`);
var result= evenOrOdd(31);
console.log(`value 31 is true then even or false then odd ${result}`);


console.log(`value 22 is true then even or false then odd ${evenOrOdd(22)}`);// also write this
console.log(`value 37 is true then even or false then odd ${evenOrOdd(37)}`);// also write this

//with return value
//return value (result) and var value on console (result) is need to same
//......................................................................................

// var abc=evenOrOdd(20);
// console.log(`${num}`);
// var xyz= evenOrOdd(31);
// console.log(`${num}`);
//return value (result) and var value on console (result) is need to same 

// ------------------------------------------------------------------------------------

// var result=evenOrOdd(20);
// console.log(`${num}`);
// var result= evenOrOdd(31);
// console.log(`${num}`);
//====================================show error=====================

// var abc=evenOrOdd(20);
// console.log(`${num}`);
// var xyz= evenOrOdd(31);
// console.log(`${num}`);
// ==================show error=============

function wordLength(word) {
    var length=word.length
    var result=length%2==0 ?`Even`:`Odd`;
    return result;
}
var result=wordLength(`Java Script`);
var result=wordLength(`Devloper`);
// console.log(`given string is ${wordLength(`Java Script`)}`);
// console.log(`given string is ${wordLength(`Devloper`)}`);
