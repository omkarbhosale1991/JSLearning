// console.log("----------------Step 1--------------");
// -------------this is wrong code------------
// var sweety="Sweety";
// console.log(sweety);
// var cutie="Cutie";
// console.log(cutie);
// var temp= sweety;
// sweety=cutie;
// console.log(temp);
// cutie=temp;
// console.log(temp);

// console.log("------------step 2-------------");
// var num1= 100;
// console.log("num1 value is:",num1);
// var num2=200;
// console.log("num2 value is:",num2);
// var num3=300;
// console.log("num3 value is:",num3);
// num1=num2;
// num2=num3;
// num3=temp2;
// console.log("temp2 file is",temp2);

console.log("--------Step 1 ----------");
console.log("swipping variable");
var str1 = "Sweety"; //step1
var str2 = "Cutie"; //step1
var temp = str1; //step 2
str1 = str2; //step 3
str2 = temp; //step 4
console.log(str1, str2); //step 5
console.log("----------Step 2---------");
var num1 = 100; //200
var num2 = 200; //300
var num3 = 300; //100
console.log("value before swap is", num1, num2, num3);
var temp = num1;
num1 = num2;
num2 = temp;
num2 = num3;
num3 = temp;
console.log("Swapping value of number is:", num1, num2, num3);
