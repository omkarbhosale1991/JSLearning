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

  console.log(`-------- find emp work in TCS --------`);
const arrayOfTcs=arrayEmployee.filter((employee)=>{
  return employee.empCompany ==`TCS`;
});
arrayOfTcs.forEach((employee)=>{
  console.log(employee);
});
 
  console.log(`------- avg salary of employee ---------`);
  const arrayOfWipro=arrayEmployee.filter((employee)=>{
    return employee.empCompany ==`Wipro`;
  });
  const totalSalary= arrayOfWipro.reduce((runningTotal,salarytInArrayEmployee)=>{
    return (runningTotal + salarytInArrayEmployee.empSalary);
  },0);
  console.log(`Avg salary of employee work in Wipro is : ${totalSalary/arrayOfWipro.length}`);
 
  
  console.log(`------- avg salary of employee wipro and infy ---------`);

  const arraySalaryWiproAndInfy =arrayEmployee.filter((employee)=>{
return (employee.empCompany==`Infy`|| employee.empCompany==`Wipro`)   
  });
  const totalSalaryOfEmp= arraySalaryWiproAndInfy.reduce((runningTotalSalary,salaryInArrayEmployee)=>{
return runningTotalSalary+salaryInArrayEmployee.empSalary;
  },0);
  console.log(`Avg salary of employee work in Wipro and Infy is : ${totalSalaryOfEmp/arraySalaryWiproAndInfy.length}`);

  

