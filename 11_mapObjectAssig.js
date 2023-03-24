class Bank {
    bankName;
     location;
      accountNo;
       ifsc ;
       interestRate;
    constructor(bankName, location, accountNo, ifsc, interestRate)
    {
        this.bankName=bankName;
        this.location=location;
         this.accountNo=accountNo;
         this.ifsc=ifsc;
         this.interestRate=interestRate;
    }
}
const axisBank=new Bank(`axis_bank`,`Pimpri`,`0145789456`,`AXIS0007894`,`13%`);
const sbiBank = new Bank(`sbi_bank`,`Satara`,`45934456`,`SBI000457`,`12%`);
const iciciBank = new Bank( `ICICI_bank`,`Solapur`,`47894310456`,`ICIC0006785`,`12%`);
const kotakBank= new Bank(`kotak Bank`,`Chinchwad`,`01564894554`,`KOTK007475`,`15%`);
const hdfcBank= new Bank(`HDFC Bank`,`Nagpur`,`4845134658`,`HDFC0002647`,`15%`);
const panjabBank= new Bank(`Panjab National Bank`,`Baramati`,`486131612`,`PANB0001467`,`16%`);

const mapOfAllBanks = new Map(); //             new ===>> don't forgot

const acc =mapOfAllBanks.set(`axis`,axisBank); // value ==>> bank name
const element = mapOfAllBanks.get(`axis`);
console.log(element.accountNo);  // to get element in bank
console.log(element.interestRate); // to get element in bank

//  mapOfAllBanks.set(`axis001`,axisBank)
//  const ele = mapOfAllBanks.get(`axis001`)
// console.log(ele); // ---------------------all ele details ------------

// mapOfAllBanks.set(`axis001`,axisBank)
//  const ele = mapOfAllBanks.get(`axis001`)
// console.log(ele.account_no); //-------------------- use forof loop and " keys" for finding value of all bank acc no.
mapOfAllBanks.set(`axisBank001`,axisBank);
mapOfAllBanks.set(`sbiBank002`,sbiBank);
mapOfAllBanks.set(`iciciBank003`,iciciBank);
mapOfAllBanks.set(`kotakBank004`,kotakBank);
mapOfAllBanks.set(`hdfcBank005`,hdfcBank);
mapOfAllBanks.set(`panjabBank006`,panjabBank);

console.log(`---------------------- travarsing map -------------------`);
 const keyInMap=mapOfAllBanks.keys()
 for (const key of keyInMap) {
    const ele = mapOfAllBanks.get(key);
    console.log(key,ele);
 }


 