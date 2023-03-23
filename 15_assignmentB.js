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


console.log(`------- Find all the employees working in TCS--------`);

const arrayEmployees=[empAnil,empRadha,empRishi,empSonali,empMonika,empViny,empMahi];
// using for  loop------------------
// for (let index = 0; index < arrayEmployees.length; index++) {
//   const element = arrayEmployees[index];
//   if (Employee.empCompany==`TCS`) {
//     console.log(`Employee Name is:${empName} Company Name is: ${empCompany}`);
    
//   }

// }

// using forof loop------------
for (const value of arrayEmployees) {
  if (value.empCompany ==`TCS`) {
    const empDetails=empAnil.empCompany;
    console.log(empDetails);

    // console.log(`Employee Name is:${empName} & Company Name is: ${empCompany}`);  
  }

}
