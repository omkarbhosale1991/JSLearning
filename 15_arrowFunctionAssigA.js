console.log(`--------------- arrow function with no args and no return value -----------`);
let show=()=>{
    console.log(`Good Morning today is monday` );
}
show();
console.log(`--------------- arrow function with args and no return value for multiplication -----------`);

let show1=(arg1,arg2,arg3=1)=>{
    console.log(`Using arrow function with args and no return value for multiplication is: ${arg1*arg2*arg3}`);
    

}
show1(5,5,2)
show1(10,4)
console.log(`--------------- arrow function with args and return value for addition -----------`);

// let show2=(arg1,arg2,arg3,arg4,arg5)=>{
//     let addition= arg1+arg2+arg3+arg4+arg5;
//     return console.log(addition);

// }
// show2(100, 100, 200, 349, 756)
// show2(`i am`,` learning`,` ES6`,` features`,` in depth`)

let show2=(arg1,arg2,arg3,arg4,arg5)=>{
    let addition= arg1+arg2+arg3+arg4+arg5;
    return addition;

}
let result=show2(100, 100, 200, 349, 756);
console.log(`Addition of given number is: ${result}`);
let result1=show2(`i am`,` learning`,` ES6`,` features`,` in depth`);
console.log(`Addition of given number is: ${result1}`);

