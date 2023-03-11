const sbiBank = {
bankName: `State Bank Of India`,
location: `Kolhapur`,
accountNo:123466789,
ifscCode: `SBI00001234`,
interrestRate: `12%`, 
showDetails: function () {
    console.log(` bankName is ${this.bankName},location is ${this.location}, account Number is ${this.accountNo},
    ifsc code of bank is ${this.ifscCode}, bank intrest rate is ${this.interrestRate} `);
}
}
let sbibank=sbiBank.showDetails()
console.log(sbibank);

const axisBank = {
bankName:`axisBank`,
location:`Pune`,
accountNo:0987546459,
ifscCode:`AXIS0007845`,
interrestRate:`10%`,
showDetails: function () {
    console.log(` bankName is ${this.bankName},location is ${this.location}, account Number is ${this.accountNo},
    ifsc code of bank is ${this.ifscCode}, bank intrest rate is ${this.interrestRate} `);
}
}
let axisbank=axisBank.showDetails()
console.log(axisbank);
const hdfcBank = {
    bankName:`hdfcBank`,
    location: `Satara`,
    accountNo:145689153315,
    ifscCode:`HDFC002457`,
    interrestRate:`14%`,
    showDetails: function () {
        console.log(` bankName is ${this.bankName},location is ${this.location}, account Number is ${this.accountNo},
        ifsc code of bank is ${this.ifscCode}, bank intrest rate is ${this.interrestRate} `);
    }
}
let hdfcbank=axisBank.showDetails()
console.log(hdfcbank);
 const yesBank = {
    bankName:`yesBank`,
    location:`Sangli`,
    accountNo:16649879523,
    ifscCode:`YESY0004578`,
    interrestRate:`13%`,
    showDetails: function () {
        console.log(` bankName is ${this.bankName},location is ${this.location}, account Number is ${this.accountNo},
        ifsc code of bank is ${this.ifscCode}, bank intrest rate is ${this.interrestRate} `);
    }
 }
 let yesbank=axisBank.showDetails()
 console.log(yesbank);