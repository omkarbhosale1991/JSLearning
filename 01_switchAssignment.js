function monthOfYear(monthNumber)
{
switch (monthNumber) 
{
    case 1:console.log(`Month of Year is ${monthNumber} January`);
        break;
        case 2:
            console.log(`Month of Year is ${monthNumber} February`);
        
        break;
        case 3:console.log(`Month of Year is ${monthNumber} March`);
        
        break;
        case 4:console.log(`Month of Year is ${monthNumber} April`);
        
        break;
        case 5:console.log(`Month of Year is ${monthNumber} May`);
        
        break;
        case 6:console.log(`Month of Year is ${monthNumber} June`);
        
        break;
        case 7:console.log(`Month of Year is ${monthNumber} July`);
        
        break;
        case 8:console.log(`Month of Year is ${monthNumber} August`);
        
        break;
        case 9:console.log(`Month of Year is ${monthNumber} September`);
        
        break;
        case 10:console.log(`Month of Year is ${monthNumber} October`);
        
        break;
        case 11:console.log(`Month of Year is ${monthNumber} November`);
        
        break;
        case 12:console.log(`Month of Year is ${monthNumber} December`);
        
        break;
    default:
        console.log(`Invalid Data,Please re-enter`);
        break;
}
console.log(`In year this number of month is ${monthNumber}`);
}
monthOfYear(1);
monthOfYear(2);
monthOfYear(3);
monthOfYear(4);
monthOfYear(5);
monthOfYear(6);
monthOfYear(7);
monthOfYear(8);
monthOfYear(9);
monthOfYear(10);
monthOfYear(11);
monthOfYear(12);
monthOfYear(-1);
monthOfYear(15);
monthOfYear(null);
monthOfYear(NaN);
monthOfYear(undefined);
monthOfYear("ABC");
monthOfYear(`abc`);
monthOfYear('Q');
