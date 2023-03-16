console.log(`--------------- shallow clone===>>>>>>55,66 using push () ------------------`);
const arrayNums = [ 20, 3, 4, 56, 90, 400, 49 ]
console.log(`Orignal array is [${arrayNums}]`);
const uppdatedArray=arrayNums.push(55,66)//shallow clone===>>>>>> 55,66 using push ()
console.log(`updated with value 55,66 then array is [${arrayNums}]`);
console.log(`-------------------- Deep clone 10,25 at end of  array (using concat)-----------------`);

console.log(`Orignal array is [${arrayNums}]`);
const newArray=[10,25]
console.log(`Adding  ${newArray} value in array`);
const concatArray= arrayNums.concat(newArray)
console.log(concatArray);

console.log(`------------------ Using spread oprator adding Arrays--------------`);
console.log(`Orignal array is [${arrayNums}]`);
arrayEven = [ 2, 30, 14, 8]
const evenArra=[...arrayEven,...arrayNums]
console.log(evenArra);

//...............................................................................

const employeeInfo={
    empId:27,
    empName:`John doe`,
    salary:{
        julyMonth:`40000 INR`,
        augMonth:`50000 INR`,
        juneMonth:`65000 INR`
    },
    address:{
        locality:{
            colony:`Om Vrinduvan Society`,
            street:`Kanch Pokali,43122`,
        },
        city:`Mumbai`,
        state:`Maharashtra`,
        country:`India`
    },
   mobileNumber:[ `+91 8600 3456 88`,`1800 4567 32`,` +91-9096 5678  77`]
}
