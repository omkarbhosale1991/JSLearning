class Bank {
    bank_name;
     location;
      account_no;
       ifsc ;
       interest_rate;
    constructor(bank_name, location, account_no, ifsc, interest_rate)
    {
        this.bank_name=bank_name;
        this.location=location;
         this.account_no=account_no;
         this.ifsc=ifsc;
         this.interest_rate=interest_rate;
    }
}
const axisBank=new Bank(`axis_bank`,`Pimpri`,`0145789456`,`AXIS0007894`,`13%`);
const sbiBank = new Bank(`sbi_bank`,`Satara`,`45934456`,`SBI000457`,`12%`);
const iciciBank = new Bank( `ICICI_bank`,`Solapur`,`47894310456`,`ICIC0006785`,`12%`);
const kotakBank= new Bank(`kotak Bank`,`Chinchwad`,`01564894554`,`KOTK007475`,`15%`);
const hdfcBank= new Bank(`HDFC Bank`,`Nagpur`,`4845134658`,`HDFC0002647`,`15%`);
const panjabBank= new Bank(`Panjab National Bank`,`Baramati`,`486131612`,`PANB0001467`,`16%`);

// const setOfAllBank= new set(); // set() =====>> wrong ====/ Set() is correct
const setOfAllBank= new Set();
setOfAllBank.add(axisBank);
setOfAllBank.add(sbiBank);
setOfAllBank.add(iciciBank);
setOfAllBank.add(kotakBank);
setOfAllBank.add(hdfcBank);
setOfAllBank.add(panjabBank);

console.log(setOfAllBank);

console.log(`------------- traversing in set ------------`);
for (const value of setOfAllBank) //-----------traversing -------------
 {
    console.log(`${value.bank_name},${value.location},${value.account_no},${value.ifsc},${value.interest_rate}`);
}

// for (const value of setOfAllBank) {      //----------- For all Details -----------
//     console.log(value);    
// }

