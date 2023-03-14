console.log(`----------- step 1 ------------`);
const bankSbi={
     bankName: `State Bank Of India`,
     ifsc:`SBIO0000458`,
     phoneNumber:`0223457864`,
     sbiEmail:`00157sbi.co.in`,
     branchCode:517,
        // showDetails:function()
        // {
        //     console.log(`${this.bankName},${this.ifsc},${this.phoneNumber},${this.sbiEmail},${this.branchCode}`)
        // }

}
// let sbi=bankSbi.showDetails();
// console.log(sbi);
// console.log(`${bankSbi}`); // o/p ==>> object
console.log(bankSbi);

console.log(`----------- step 2 -----------`);
const bankLocation={
    street:`GM road`,
     city:`Pune`,
      pinCode:`451435`
}
console.log(bankLocation);

console.log(`------------ step 3 ------------`);
console.log(`------------ using objectAssign ------------`);
const objectAssign =Object.assign({},bankSbi,bankLocation)
console.table(objectAssign);
console.log(`two object marge using objectAssign oprator is : ${objectAssign}`);
console.log(`------------ using spread optator ------------`);
const newSpread = {...bankSbi,...bankLocation};
console.table(newSpread);
console.log(`two object marge using spread oprator is : ${objectAssign}`);

const rateOfInterest={
    homeLoanInterest:`12%`,
     personalLoanInterest:`10%`,
     dueInterest:`14%`
}
console.log(`---------------------- step 4,5 -------------`);
const sbiDetails= Object.assign({},bankSbi,bankLocation,rateOfInterest)
console.table(sbiDetails);
console.log(`------------------- step 6 -----------------------`);
 for (const key in sbiDetails) {
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
        const element = sbiDetails[key];
        
    }
 }
const keysOfSbiDetails = Object.keys(sbiDetails)
console.log(keysOfSbiDetails);
// const keyOfSbiDetails = Object.values(sbiDetails)
// console.log(keysOfSbiDetails);