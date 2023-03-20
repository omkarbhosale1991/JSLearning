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


console.log(`------- Find all the employees working in ‘TCS’--------`);

arrayEmployees=[`empAnil`,`empRadha`,`empRishi`,`empSonali`,`empMonika`,`empViny`,`empMahi`];

for (const value of arrayEmployees) {
if (value==`TCS`) {
  console.log(value);
}
}

// let array1=[]
// if (arrayEmployees==`TCS`) {

//     console.log(`employees working in ‘TCS’ is ${array1} `);
// }
