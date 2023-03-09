const sbiBank = {
bankName: `State Bank Of India`,
location: `Kolhapur`,
accountNo:123466789,
ifscCode: `SBI00001234`,
interstRate: `12%`, 
showDetails: function () {
    console.log(` bankName is ${this.bankName},location is ${this.location}, account Number is ${this.accountNo},
    ifsc code of bank is ${this.ifscCode}, bank intrest rate is ${this.interstRate} `);
}
}
let sbibank=sbiBank.showDetails()
console.log(sbibank);

const axisBank = {
bankName:`axisBank`,
location:`Pune`,
accountNo:0987546459,
ifscCode:`AXIS0007845`,
interstRate:`10%`,
showDetails: function () {
    console.log(` bankName is ${this.bankName},location is ${this.location}, account Number is ${this.accountNo},
    ifsc code of bank is ${this.ifscCode}, bank intrest rate is ${this.interstRate} `);
}
}
let axisbank=axisBank.showDetails()
console.log(axisbank);
const hdfcBank = {
    bankName:`hdfcBank`,
    location: `Satara`,
    accountNo:145689153315,
    ifscCode:`HDFC002457`,
    interstRate:`14%`,
    showDetails: function () {
        console.log(` bankName is ${this.bankName},location is ${this.location}, account Number is ${this.accountNo},
        ifsc code of bank is ${this.ifscCode}, bank intrest rate is ${this.interstRate} `);
    }
}
let hdfcbank=axisBank.showDetails()
console.log(hdfcbank);
 const yesBank = {
    bankName:`yesBank`,
    location:`Sangli`,
    accountNo:16649879523,
    ifscCode:`YESY0004578`,
    interstRate:`13%`,
    showDetails: function () {
        console.log(` bankName is ${this.bankName},location is ${this.location}, account Number is ${this.accountNo},
        ifsc code of bank is ${this.ifscCode}, bank intrest rate is ${this.interstRate} `);
    }
 }
 let yesbank=axisBank.showDetails()
 console.log(yesbank);