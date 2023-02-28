console.log("-------step 1---------");

function book()
{
    // var book="Ikigai"
    // console.log(book);
    // console.log(Book);
    console.log("Book name is Ikigai");
}
book();
// ----------------------------------------------------------------------------------------
function office()
{console.log("Design Deluxe");
    
}
office();
// --------------------------------------------------------------------------------------

// function office()             // WRONG PROGRAM PRACTICE //
// {                              // WRONG PROGRAM PRACTICE //
// var office;                    // WRONG PROGRAM PRACTICE //
// office="Design Deluxe";    // WRONG PROGRAM PRACTICE //
// }                          // WRONG PROGRAM PRACTICE //
// office();                  // WRONG PROGRAM PRACTICE //
console.log("------------------ step 2-------------");

// function persnalDetails(firstName,LastName,collageName)      // this is wrong prm
// {
//   console.log(Omkar,Bhosale,Ait);  
// }
// persnalDetails(firstName,LastName,collageName);

function persnalDetails(firstName,LastName,collageName) 
{
    console.log(firstName,LastName,collageName);
}
persnalDetails("Omkar","Bhosale","AIT,Vita")



console.log("------------------------- Step 3 ---------------------------");
function swapValuesDude(value1,value2)
{
    console.log("value before swapping is",value1,value2);
    var temp=value1;
    value1=value2;
    value2=temp;
    console.log("value after swapping",value1,value2);   
}
swapValuesDude("Virat","Anushka");
var swap= swapValuesDude(1000,2000);


console.log("--------------------step 4---------------------");

function addThreeValues(num1,num2,num3)
{
var sum = num1+num2+num3;
return sum;
}
// console.log(addThreeValues);
 var result =addThreeValues(10.23,600,40);
//  console.log(addThreeValues);------------this line is wrong
console.log(result);
// --------------------------------------------------------------------------
function addThreeValue(value1,value2,value3)
{
    console.log(value1,value2,value3);
return;
}
addThreeValue("hello","Good","Morning");
