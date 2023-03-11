console.log(`----------------------------- Class 1 --------------------`);
class vehicle {
  carName;
  saftyRating;
  yearOfLaunch;
  SeetingCapacity;
  mileage;
  color;
  constructor(carName,saftyRating,yearOfLaunch,SeetingCapacity,mileage,color) 
  {
    this.carName = carName;
    this.saftyRating = saftyRating;
    this.yearOfLaunch = yearOfLaunch;
    this.SeetingCapacity = SeetingCapacity;
    this.mileage = mileage;
    this.color = color;
  }
}
const tata = new vehicle("TATA Nexon EX ", 4.5, 2023, 4, 20,"read");
console.log(tata);
const bmw = new vehicle( "BMW i7",5,2022,4,10,"gray");
console.log(bmw);
const  mahindra = new vehicle ("mahindra thar",3.5,2018,2,10,"Black");
console.log( mahindra);
const Ferrari = new vehicle("Ferrari F8 Tributo",5,2021,2,8,"Red");
console.log(Ferrari);
const Mercedes = new vehicle( "Mercedes-Benz GLS",4,2022,4,15,"Blue");
console.log(Mercedes);

console.log(`------------------- Traversing  Object in array ----------------`);
 const arrayOfVehicle=[tata,bmw,mahindra,Ferrari,Mercedes]
 for (const value of arrayOfVehicle) {
    console.log(`${value.carName},${value.saftyRating},${value.yearOfLaunch},
    ${value.SeetingCapacity},${value.mileage},${value.color}`);
 } 
 console.log(`----------------------------- Class 2  ------------------------------`);
  class college {
    collegeName;
    location;
    facalty;
    numberOfTeachers;
    numberOfStudent;
    constructor (collegeName,location,facalty,numberOfTeachers,numberOfStudent)
    {
        this.collegeName=collegeName;
        this.location=location;
        this.facalty=facalty;
        this.numberOfTeachers=numberOfTeachers;
        this.numberOfStudent=numberOfStudent;
    }
  }
  const ait = new college("AIT","VITA","Engineering", 50,1200);
  console.log(ait);
  const spcoe =new college("SPCOE","Pune","Engineering",35,700);
  console.log(spcoe);
  const sktn =new college( "SKTN","Sangli","Science",5,120);
  console.log(sktn);
  const ghali = new college("Ghali college","Gadhinglaj",40,800);
  console.log(ghali);
  const coep = new college("COEP","Pune","Engineering",100,1500);
  console.log(coep);

  console.log(`-------------------- using function ---------------`);
//   function traveseObject(arg1)
//    {
//     arg={}
//    for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
//    } 
//   }
console.log(` ------------------- Finding prime no. ------------------`);

function primeNum(num) {
    if (num%2==0 ) {
        console.log(`${num} is not prime number`);    
    } 
    if (num%2==1 && num/num==1) {
        console.log(`${num} is prime number`); 
    }
}
let primeNumber=primeNum(11);
console.log(primeNumber);