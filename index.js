function checkLeapYear() {
    // get the value of the year from the form
    var year = document.getElementById("year").value;
  
    // use an if/else statement to check if the year is a leap year
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400 === 0) {
          // if the year is divisible by 4, 100, and 400, it is a leap year
          document.getElementById("result").innerHTML = year + " is a leap year.";
        } else {
          // if the year is divisible by 4 and 100, but not 400, it is not a leap year
          document.getElementById("result").innerHTML = year + " is not a leap year.";
        }
      } else {
        // if the year is divisible by 4, but not 100, it is a leap year
        document.getElementById("result").innerHTML = year + " is a leap year.";
      }
    } else {
      // if the year is not divisible by 4, it is not a leap year
      document.getElementById("result").innerHTML = year + " is not a leap year.";
    }
  }
  