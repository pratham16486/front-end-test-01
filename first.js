// multiplicationTable
function multiplicationTable(number) {
    console.log("Multiplication Table for " + number);
    for (let i = 1; i <= 10; i++) {
      console.log(number + " x " + i + " = " + (number * i));
    }
  }
  multiplicationTable(10);

//   Q. 2 

// Positive or Negative Number Checker

function positiveOrNegative(number) {
    if (number > 0) {
      console.log("The number is positive.");
    } else if (number < 0) {
      console.log("The number is negative.");
    } else {
      console.log("The number is zero.");
    }
  }
  positiveOrNegative(-7);
  positiveOrNegative(9);
  positiveOrNegative(0);