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


for (let i = 2; i <= 20; i+=2) {
    console.log(i);
}


const randomNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

for (let i = 0; i < randomNumbers.length; i++) {
  sum += randomNumbers[i];
}
console.log(sum);
*/

const a = [12, 34, 56, 1,];
let maxValue = 0;

for (let i = 0; i < a.length; i++) {
    if (a[i] > maxValue) {
        maxValue = a[i];
    }
}
console.log(maxValue);
