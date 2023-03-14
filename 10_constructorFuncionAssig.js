console.log(`--------------------------- constructor Function ------------------ `);
function Bank (bankName, location, ifscCode, branchCode)

    {
this.bankName=bankName;
this.location=location;
this.ifscCode=ifscCode;
this.branchCode=branchCode;
this.showDetails = function(){
    console.log(`Details of banks is: ${this.bankName},${this.location},${this.ifscCode},${this.branchCode} `);
    }
}
Bank.prototype.time = `Open at Time = “9 AM IST” and Close at Time = “6 AM IST”`;


const yesBank=new Bank(`Yes Bank`,`Pune`,`YESO000145`,1245)
yesBank.showDetails();
// console.log(yesBank);
const sbiBank=new Bank(`State Bank Of India`,`Kolhapur`,`SBI000457`,4526)
sbiBank.showDetails();
// console.log(sbiBank);
const mahBanK=new Bank(`Maharatra Bank`,`Satara`,`MAH000365`,7856)
mahBanK.showDetails();
// console.log(mahBanK);
const axisBank= new Bank (`Axis Bank`,`Sangli`,`AXI000456`,12367)
axisBank.showDetails();
// console.log(axisBank);

console.log(`---------------------Add member ------------------`);
yesBank.showDetails();
console.log(` YES Bank working time is: ${yesBank.time}`);
sbiBank.showDetails();
console.log(` SBI Bank working time is: ${sbiBank.time}`);
mahBanK.showDetails();
console.log(` Maharashtra Bank working time is: ${mahBanK.time}`);
axisBank.showDetails();
console.log(`Axis Bank working time is: ${axisBank.time}`);
console.log(`------------------- SBI Working time--------------`);
console.log(` SBI Bank working time is: ${sbiBank.time}`);
mahBanK.showDetails();



