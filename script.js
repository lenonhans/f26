/*
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
*/


let studentGrade;
studentGrade = 69;

if (studentGrade < 0 || studentGrade > 100) {
  console.log("Invalid grade");
} else if (studentGrade >= 90) {
  console.log("A");
} else if (studentGrade >= 80) {
    console.log("B");
} else if (studentGrade >= 70) {
    console.log("C");
} else if (studentGrade >= 60) {
    console.log("D");
} else {
    console.log("F");
}