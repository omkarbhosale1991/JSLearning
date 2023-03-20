// 0  1  1   2   3   5   8

function fabSeries(fabTerm){
    let first = 0;
    let second = 1;
    let next = 0;
    for (let index = 1; index <= fabTerm; index++) {
     console.log(first);   
      next = first + second; 
      first = second;
      second = next;  
    }
}
fabSeries(7);

// const fabonacci= function fabonacciSeries(num) {
//     for (let index = 0; index <= num; index++) {
    
//         let num1=0+1+num;
//         let num2= num1++
//        const result=num2
//        return result
//     }


    
// }
// const result=fabonacci(10);
// console.log(result);
