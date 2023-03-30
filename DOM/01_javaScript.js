//--------------- debug console throw error so crome web ==> inspect > console ------------------- //

console.log(
  "====== API getElementsByTagName() to select element by tag name  ====="
);
const h2Element = document.getElementsByTagName("h2"); // element by tag name
// console.log(h2Element);
//  console.log(typeof h2Element);  -->> // object
console.log(h2Element[1].innerHTML);
h2Element[1].innerHTML = "My Hobbies";
// for change/Update (Hobbies -->> My Hobbies ) propeties of element ( DOM manupulation )

console.log("====== API getElementById() to select element by id  =====");
const elementProfile = document.getElementById("profile");
console.log(elementProfile.innerHTML);

console.log(
  "====== API getElementsByClassName() to select element class Name  ====="
);
const elementLi = document.getElementsByClassName("liItem");
console.log(elementLi); // list of collection shown //
// console.log(elementLi[1].innerHTML); // shown second element in list

console.log("====== API querySelector() to select element by id  =====");
// querySelector return only one element
const elementProfileByQuery = document.querySelector("#profile"); // for id #
console.log(elementProfileByQuery);

console.log("====== API querySelector() to select element by class  =====");
// querySelector return only one element
const elementByQuery = document.querySelector(".liItem"); // for class .
console.log(elementByQuery);

console.log("====== API querySelectorAll() to select element by class  =====");
// querySelectorAll return  all element
const elementsByQuery = document.querySelectorAll(".liItem");
console.log(elementsByQuery);

console.log(` ===== text modification =====`);
//for change/Update ( "Database" -->> "Oracle Database" ) propeties of element ( DOM manupulation )
elementsByQuery[3].innerHTML = "Oracle Database";
console.log(elementsByQuery[3]);

console.log("====== Changing the attribute of an element =====");
const elementMyProfile = document.querySelector("#myProfile");
// console.log(elementMyProfile );
elementMyProfile.setAttribute("href", "https://www.linkedin.com/");
console.log(elementMyProfile);

console.log("====== Changing the CSS properties =====");
// not used but use case -->> use css propeties for changes
const elementTechStack = document.querySelector("#techStack");
elementTechStack.style.color = "red";
elementTechStack.style.fontFamily = "Areial";

console.log("====== Remove Element =====");
const elementDivProject = document.querySelector("#divProject");
const elementProject = document.querySelector("#project");
elementDivProject.removeChild(elementProject);

//assignment B change coclor of  <h2>
const eleProfile = document.querySelector("#profile");
eleProfile.style.color = "Blue";

// delete <li> agile and jira </li>
// const  removeElement = document.querySelector("#unorderlist",[1]);  // help from anather student
// const removeElement = document.querySelector("#unorderList");
// const removeEle = document.querySelector(".liItem");
// removeElement.removeChild(removeEle);

// const removeElement=document.querySelectorAll(".liItem");

// removeElement[1].innerHTML =" ";
// console.log(removeElement[1]);

// const removeElement=document.querySelector("#unorderList");
// const removeEle=document.querySelector("#agile")[1];
// removeElement.removeChild(removeEle);

// const list = document.getElementById("#unorderList");

// if (list.hasChildNodes()) {
//   list.removeChild(list.children[1]);
// }
console.log("====== Adding Element =====");
const elementDiv = document.querySelector("#divProject");
const elementP = document.createElement("p");
const elementText = document.createTextNode("Team Size - 7");
elementP.appendChild(elementText);
elementDiv.appendChild(elementP);

function show() {
console.log( ` click element `);  // old way 
}


const elementAddress = document.querySelector("#address");  // new way of use
elementAddress.addEventListener("click", ()=>{
   console.log("Listening click event.....");
  //  alert(" You have click...") //  for no info attache only show masgg.
  prompt("title","default value") //accept info for user or allow input
 });
 elementAddress.addEventListener("mouseover", ()=>{
  console.log("mouse over.....");
  elementAddress.style.color="red"; 
});
//-------------------------------------------------------------
//  Assignment ==>> three hobbies in o/p ?

const elementHobbies = document.querySelector("#addHobbies");  // new way of use
elementHobbies.addEventListener("click", ()=>{
   const addHobbiesEle = document.querySelector("#divHobbies");

   const addele1= document.createElement("p");
   addHobbiesEle.uppendChild(addele1);
   const addText1=document.createTextNode("Reading");
   addele1.uppendChild(addText1);

   const addEle2= document.createElement("p");
   addHobbiesEle.uppendChild(addEle2)
   const addText2=document.createTextNode("Coding");
   addEle2.uppendChild(addText2);

   const addEle3 =document.createElement("p");
   addHobbiesEle.uppendChild(addEle3);
   const addText3=document.createTextNode("Cycling");
   addEle3.uppendChild(addText3);
});

// const evenEle = document.querySelector(`#isevenButton`);

// console.log(inputValue);
const primeNumElement= document.querySelector("#primeNumber");

primeNumElement.addEventListener("click",()=>{
  const inputNum= prompt("Please enter number here",0)
for (let index = 2; index < inputNum; index++)
 {
 if (inputNum%index==0) {
  return false;
  
 }
 else

  return true;

  
 };