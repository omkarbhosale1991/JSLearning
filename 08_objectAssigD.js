let professor = {
  firstName: "Ganesh",
  lastName: "Patil",
  age: 30,
  gender: "male",
  marritalStatus: "No",
  totalExperiance: "10 years",
  degree: {
    mainDegree: " CSC",
    PHD: " Advance Computing",
    langvage: "Java",
    cource: "Angular",
    certificate: [
      "Hacker Rank participation",
      "Certificate in Advance Programming"
    ],
  },
  teacherDegree: function () {
    return `Teacher total degree are Main degree ${this.degree.mainDegree},Phd in ${this.degree.PHD},
        Specialization langvage is ${this.degree.langvage},complatd cource is ${this.degree.cource}, 
        cerification in ${this.degree.certificate} `;
  },
  newExpi: {
    addedNewExperience: "14 Year",
  },
};
console.log(professor);
let degreeInfo = professor.teacherDegree();
console.log(degreeInfo);
console.log(professor.newExpi);
console.log(`================ Modifed/update property ===============`);

let  marritalStatus= `yes`;
console.log(`updated marrital status is ${ marritalStatus}`);

console.log(`========= (update/modifed) add certificate at end of array ===============`);
//  certificate.push(`Oracle certified`);
//   console.log(certificate);

