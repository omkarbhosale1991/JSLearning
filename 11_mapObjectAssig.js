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

// mapOfAllBanks.set(`axis`,account_no)
// const ele = mapOfAllBanks.get(`axis`)
// console.log(ele);                --------------------------- wrong---------

//  mapOfAllBanks.set(`axis001`,axisBank)
//  const ele = mapOfAllBanks.get(`axis001`)
// console.log(ele); // ---------------------all ele details ------------

// mapOfAllBanks.set(`axis001`,axisBank)
//  const ele = mapOfAllBanks.get(`axis001`)
// console.log(ele.account_no); //-------------------- use forof loop and " keys" for finding valu of all bank acc no.
mapOfAllBanks.set(`0145789456`,axisBank);
mapOfAllBanks.set(`45934456`,sbiBank);
mapOfAllBanks.set(`47894310456`,iciciBank);
mapOfAllBanks.set(`01564894554`,kotakBank);
mapOfAllBanks.set(`4845134658`,hdfcBank);
mapOfAllBanks.set(`486131612`,panjabBank);

 const keyInMap=mapOfAllBanks.keys()

 for (const key of keyInMap) {
    const ele = mapOfAllBanks.get(key)
    console.log(key,ele);
 }

 for (const value of mapOfAllBanks) {
   // console.log(value,ele); // error
    console.log(value,keyInMap);
    // console.log(`${value.bank_name},${value.account_no},${value.interest_rate}`);
    
 }