// function calculateGrade() {
//   let total = 0;
//   let subjects = 5;

//   for (let i = 1; i <= subjects; i++) {
//     let mark = parseFloat(prompt(`Enter marks for subject ${i} (out of 100):`));

//     while (isNaN(mark) || mark < 0 || mark > 100) {
//       mark = parseFloat(prompt(`Invalid input. Please enter marks for subject ${i} (0-100):`));
//     }

//     total += mark;
//   }

//   let average = total / subjects;
//   let grade = '';

//   if (average >= 90) {
//     grade = 'A+';
//   } else if (average >= 80) {
//     grade = 'A';
//   } else if (average >= 70) {
//     grade = 'B';
//   } else if (average >= 60) {
//     grade = 'C';
//   } else if (average >= 50) {
//     grade = 'D';
//   } else {
//     grade = 'F';
//   }

//   alert(`Total Marks: ${total}\nAverage Marks: ${average.toFixed(2)}\nGrade: ${grade}`);
// }
function calculateGrade() {
  let s1 = prompt("Enter marks for Subject 1:");
  let s2 = prompt("Enter marks for Subject 2:");
  let s3 = prompt("Enter marks for Subject 3:");
  let s4 = prompt("Enter marks for Subject 4:");
  let s5 = prompt("Enter marks for Subject 5:");

  // Convert input to numbers
  let total = Number(s1) + Number(s2) + Number(s3) + Number(s4) + Number(s5);
  let average = total / 5;

  let grade;

  if (average >= 90) {
    grade = "A+";
  } else if (average >= 80) {
    grade = "A";
  } else if (average >= 70) {
    grade = "B";
  } else if (average >= 60) {
    grade = "C";
  } else if (average >= 50) {
    grade = "D";
  } else {
    grade = "F";
  }

  alert("Total Marks: " + total + "\nAverage: " + average + "\nGrade: " + grade);
}
