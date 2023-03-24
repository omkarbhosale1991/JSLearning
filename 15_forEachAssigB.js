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

console.log(`------------ TCS employee Details ---------`);
arrayEmployee.forEach(emp=>
    {
    let empCompanyName=emp.empCompany;
    if (empCompanyName==`TCS`){
     console.log(`Name of  employee is:${emp.empName} & Comapany is: ${emp.empCompany}`);        
    }
});
console.log(` --------------salary >= 50000---------------`);
arrayEmployee.forEach(employee=>
    {
    let salary=employee.empSalary;
    if (salary >=50000){
     console.log(employee);       
    }
});

console.log(` --------------sum of all employees salary ---------------`);
sum=0;
arrayEmployee.forEach(employee=>{
   
    sum= sum+ employee;
    console.log(sum); 

});

console.log(`---------- avrage salary ----------`);
//avg=sum of salary/ no. of emp

console.log(`----------- it of hr employees salary >=75000 ------------`);

arrayEmployee.forEach(employee => {
let salary=0;
    if( salary>=75000 && employee.empDept==`IT`|| employee.empDept==`HR`) {
        console.log(employee);
    }
});





