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

  const newArray = arrayEmployee.filter((value)=>{if (arrayEmployee.empCompany==`TCS`) {
    return console.log(`companyName ${value.arrayEmployee.empCompany} and name of  employee is ${value.arrayEmployee.empName}`);;
  }});
  console.log(newArray);

  console.log(`------- avg salary of employee ---------`);
  const salaryArray = arrayEmployee.filter((value)=>{if (arrayEmployee.empCompany==`Wipro`) {
return value;
  }});
  console.log(salaryArray);
  
  console.log(`------- avg salary of employee wipro and infy ---------`);
  const salaryTwoArray = arrayEmployee.filter((value)=>
  {if (arrayEmployee.empCompany==`Wipro` || arrayEmployee.empCompany==`Infy`) {
return value;
  }});
  console.log(salaryTwoArray);
  

