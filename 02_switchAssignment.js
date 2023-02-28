// leap year-Leap years are the ones with 366 days instead of 365. 
// Year is multiple of 400.
// Year is multiple of 4 and not multiple of 100.

var check_leap_Year = function (leap_year) {
  if ( leap_year % 4 == 0 && leap_year % 100 != 0 || leap_year % 400 == 0 )
  {
    console.log(`${leap_year} is leap year`);
  }
   else 
   {
    console.log(`${leap_year} is not leap year`);
  }
};
check_leap_Year(2020)
check_leap_Year(2021);
check_leap_Year(2022);
check_leap_Year(2023);
check_leap_Year(2024);
check_leap_Year(2025);;
