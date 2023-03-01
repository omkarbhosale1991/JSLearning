// leap year-Leap years are the ones with 366 days instead of 365. 
// Year is multiple of 400.
// Year is multiple of 4 and not multiple of 100.

var check_leap_Year = function (leap_year) {
    //unhappy path
    if (leap_year= null || leap_year==undefined || leap_year=="twenty twenty"  ) 
    {
    console.log(`Please re-enter Year correctly`);  
    }
  
    
    function nan(num)
     {
      if (isNaN(num))
      console.log(`Please re-enter Year correctly`);
      
    }
  if ( leap_year % 4 == 0 && leap_year % 100 != 0 && leap_year % 400 == 0 )
  {
    console.log(`${leap_year} is leap year`);
  }
   else 
   {
    console.log(`${leap_year} is not leap year`);
  }
};
check_leap_Year(2020);
check_leap_Year(1999);
check_leap_Year(1600);
check_leap_Year(2022);
check_leap_Year(1945);
check_leap_Year(null);
check_leap_Year("twenty twenty");
check_leap_Year(undefined);
check_leap_Year(NaN);
check_leap_Year(1750);
