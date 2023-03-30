function maleMarriageEligiblity(gender,age,boyName) // arg with no return value
{
var age;
var gender;
var result= gender=="Male" ? age>=21 : boyName; // console -->>> true ot false
console.log(result);
// var TernaryOprator=console.log(`${result}Hey ${ boyName} are eligible for marriage`);
// return TernaryOprator;

}
maleMarriageEligiblity("Male",22,"BillGates");

// var bill=maleMarriageEligiblity(Male,22,"BillGates");
// console.log(bill);