var arraySeasonalFruits=["Banana","Orange","Apple","Mango","Water melon"]

console.log(`============ log first and last element ============`);

console.log(`=============== log first ele ==================`);//wrong
console.log(arraySeasonalFruits);
arraySeasonalFruits.push();
console.log(`Last element of array is ==>> ${arraySeasonalFruits}`);

console.log(`================ log last element==============`);//wrong
console.log(arraySeasonalFruits);

console.log(`========== add  element in first place ===============`);
console.log(arraySeasonalFruits);
arraySeasonalFruits.unshift("Papaya");
console.log(`Papaya add in first place ==>> ${arraySeasonalFruits}`);

console.log(`========== Remove element in last place ===============`);
console.log(arraySeasonalFruits);
arraySeasonalFruits.pop();
console.log(`remove element in last place from array ==>> ${arraySeasonalFruits}`);

console.log(`========== Add  element in last place ===============`);
console.log(arraySeasonalFruits);
arraySeasonalFruits.push("Pineapple")
console.log(` add  element in last place is : ${arraySeasonalFruits}`);

console.log(`========== insert a element without replacing ===============`);

console.log(arraySeasonalFruits);
arraySeasonalFruits.splice(4,0,"Dragon fruit")
console.log(`Insert dragon fruit before water melon ==>> ${arraySeasonalFruits}`);

console.log(`========== replace element  ===============`);
var arraySeasonalFruits=["Banana","Orange","Apple","Mango","Water melon"]
console.log(`Before replacing element is==>> ${arraySeasonalFruits}`);
arraySeasonalFruits[2] = "kiwi"
console.log(`Replace Orange with Kivi is: ${arraySeasonalFruits[2]} `);

// const kiwi=arraySeasonalFruits.splice(1,"Orange","Kiwi");
// console.log(`Replace Orange with Kivi is: ${kiwi}`);

// arraySeasonalFruits.replace("Orange","Kivi");// ------------wrong logic


console.log(`==================== Log a element 1 to 4 index ==================== `); 
var arraySeasonalFruits=["Banana","Orange","Apple","Mango","Water melon"] 
console.log(arraySeasonalFruits);
const subarray1To4=arraySeasonalFruits.slice(1,4)
console.log(`index position 1 to 4 is ==>> ${subarray1To4}`);

console.log(`==================== Select last 3 element ==================== `); 
console.log(arraySeasonalFruits);
const n = 3;
const last3Ele = arraySeasonalFruits.slice
console.log(`Select last 3 element is ==>> ${last3Ele}`);
