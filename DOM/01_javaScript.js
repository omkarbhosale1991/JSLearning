//--------------- debug console throw error so crome web ==> inspect > console ------------------- //

console.log("====== API getElementsByTagName() to select element by tag name  =====");
const h2Element = document.getElementsByTagName("h2"); // element by tag name
// console.log(h2Element);
//  console.log(typeof h2Element);  -->> // object
console.log(h2Element[1].innerHTML);
h2Element[1].innerHTML = "My Hobbies"; 
 // for change/Update (Hobbies -->> My Hobbies ) propeties of element ( DOM manupulation )


console.log("====== API getElementById() to select element by id  =====");
const elementProfile = document.getElementById("profile");
console.log(elementProfile.innerHTML);

console.log("====== API getElementsByClassName() to select element class Name  =====");
const elementLi =document.getElementsByClassName("liItem");
console.log(elementLi); // list of collection shown //
// console.log(elementLi[1].innerHTML); // shown second element in list 

console.log("====== API querySelector() to select element by id  ====="); 
// querySelector return only one element
const elementProfileByQuery = document.querySelector("#profile"); // for id #
console.log(elementProfileByQuery);

console.log("====== API querySelector() to select element by class  ====="); 
// querySelector return only one element
const elementByQuery= document.querySelector(".liItem"); // for class .
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
const eleProfile =document.querySelector("#profile")
eleProfile.style.color="Blue";

// delete <li> agile and jira </li>

const removeElement = document.querySelector("#unorderList");
const removeEle = document.querySelector(".liItem");
elementDivProject.removeChild(removeElement[1]);





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