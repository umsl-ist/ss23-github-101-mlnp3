console.log("Hello World");
console.warn("INFO LOG ");
console.error("ERROR LOG");

// window.alert("HI! This is an alert")
// window.confirm("Are you over 21?")

// Declaring X
let x;

x = 5;

//Initializing Y
let y = 10;

let z = x + y;
z = x - y;

z /= 10;

// Data Type
let num = 1; // Number
const pi = 3.14; // Const Number

let fName = "Mohamed"; // String
let isGrad = false; // Boolean
let grades = [100, 89, 95]; // Array
let student = {
  name: "Mohamed Langi",
  gpa: 3.5,
  isGrad: false,
  courses: ["course 1", 3465, "Web Dev"],
}; // Object

console.log(num);
console.log(pi);
console.log(fName);
console.log(grades);
console.log(student);

// console.log(grades[0]);
// console.log(grades[1]);
// console.log(grades[2]);
for (let i = 0; i < grades.length; i++) {
  console.log(grades[i]);
}

// console.log(student["name"]);
// console.log(student["gpa"]);
// console.log(student["isGrad"]);

for (const k in student) {
  console.log(k + ":" + student[k]);
}

// calcTwoNum(5, 10, "-");
// calcTwoNum(15, 20, "/");
// calcTwoNum(5, 2000, "*");
// calcTwoNum(90, 9901, "+");

function calcTwoNum() {
  let num1 = document.getElementById("num1").valueAsNumber;
  let num2 = document.getElementById("num2").valueAsNumber;
  let mathType = document.getElementById("mathType").value;
  let res;
  if (mathType === "-") {
    res = num1 - num2;
    console.log(`${num1} - ${num2} = ${res}`);
  } else if (mathType === "/") {
    res = num1 / num2;
    console.log(`${num1} / ${num2} = ${res}`);
  } else if (mathType === "*") {
    res = num1 * num2;
    console.log(`${num1} * ${num2} = ${res}`);
  } else if (mathType === "+") {
    res = num1 + num2;
    console.log(`${num1} + ${num2} = ${res}`);
  } else {
    console.warn("WRONG MATH TYPE! ");
  }

  document.getElementById("results").innerText = res;
}
