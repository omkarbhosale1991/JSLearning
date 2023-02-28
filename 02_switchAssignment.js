// leap year-Leap years are the ones with 366 days instead of 365. 
// Year is multiple of 400.
// Year is multiple of 4 and not multiple of 100.

var check_leap_Year = function (leap_year) {
  if (year) {
    year % 4 === 0;
    year % 400 === 0;
    year % 100 === 0;
    console.log(`this is leap year`);
  }
   else 
   {
    console.log(`this is not leap year`);
  }
};
check_leap_Year(2000);
check_leap_Year(2024);
