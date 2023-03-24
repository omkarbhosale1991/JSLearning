class Employee {
    constructor(empId, empName, empDept, empSalary, empCompany) {
      this.empId = empId;
      this.empName = empName;
      this.empDept = empDept;
      this.empSalary = empSalary;
      this.empCompany = empCompany;
    }
  }
  const empAnil = new Employee(22, `Anil`, `IT`, 50000, `TCS`);
  const empRadha = new Employee(33, `Radha`, `HR`, 74000, `Wipro`);
  const empRishi = new Employee(55, `Rishi`, `Finance`, 47000, `TCS`);
  const empSonali = new Employee(66, `Sonali`, `Finance`, 45000, `Infy`);
  const empMonika = new Employee(77, `Monika`, `IT`, 40000, `Wipro`);
  const empViny = new Employee(88,`Vinayak`, `IT`, 75000, `TCS`);
  const empMahi = new Employee(99, `Mahesh`, `HR`, 85000, `Infy`);

  const arrayEmployee = [empAnil, empRadha, empRishi, empSonali, empMonika, empViny, empMahi];

  const mapEmployee= new Map();
  mapEmployee.set(`emp1`,empAnil);
  mapEmployee.set(`emp2`,empRadha);
  mapEmployee.set(`emp3`,empRishi);
  mapEmployee.set(`emp4`,empSonali);
  mapEmployee.set(`emp5`,empMonika);
  mapEmployee.set(`emp6`,empViny);
  mapEmployee.set(`emp7`,empMahi);

  arrayEmployee.forEach(element => {
    const ele =mapEmployee.get(key)
console.log(ele.empName);    
  });
// const keyInMap=mapEmployee.keys()
// for (const key of keyInMap) {
//    const ele = mapEmployee.get(key);
//    console.log(key,ele);
// }
console.log(`---------- list of department ---------`);

console.log(` -------- list of emp id --------`);

console.log( `------- emp work in TCS -------`);