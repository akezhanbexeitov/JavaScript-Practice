// functin declaration
// function expression
// arrow function - стрелочный функции


// function declaration
// function showInfo(name) {
//     alert(`Hello ${name}`)
// }
// showInfo("Akezhan");


// // function expression // sum(4,5)
// let sum = function(num1, num2) {
//     document.write(num1 + num2);
// }
// sum(4,5);


// arrow function
// let sum = (num1, num2) => {
//     document.write(num1 + num2);
// }
// sum(4,10)


// Local, Global
// 1, 2, 3, 4, 5
// let counter = 0;
// function evenNumber (a, b) {
//     for(let i = a; i <= b; i++) {
//         if (i % 2 == 0) {
//             counter++;
//         }
//     }
// }

// evenNumber(1,5)
// document.write(counter)


// function sayHello () {
//     let name = prompt("What is your name?");
//     alert(`Hello ${name}`);
// }
// document.write("<br>");
// document.write("<br>");


// // Question 1
// function numberCube (number) {
//     cube = number * number * number;
//     document.write(number);
// }
// numberCube(2);
// document.write("<br>");
// document.write("<br>");


// // Question 2
// function writeWeekday (number) {
//     if (number == 1) {
//         document.write("Понедельник");
//     } if (number == 2) {
//         document.write("Вторник");
//     } if (number == 3) {
//         document.write("Среда");
//     } if (number == 4) {
//         document.write("Четверг");
//     } if (number == 5) {
//         document.write("Пятница");
//     } if (number == 6) {
//         document.write("Суббота");
//     } if (number == 7) {
//         document.write("Воскресенье");
//     } 
// }
// writeWeekday(5);
// document.write("<br>");
// document.write("<br>");


// // Question 3
// function switchPlaces (a, b) {
//     document.write(a, b);
//     document.write("<br>");
//     let c = a;
//     a = b
//     b = c
//     document.write(a, b);
// }
// switchPlaces(4, 5);
// document.write("<br>");
// document.write("<br>");


// // Question 4
// function isEven (number) {
//     if (number % 2 == 0) {
//         document.write("Number is even")
//     } else {
//         document.write("Number is odd")
//     }
// }
// isEven(8)
// document.write("<br>");
// document.write("<br>");


// // Question 5
// let numbers = [13, 3, 4, 5, 66];
// let max_number = 0;
// function maxNumber () {
//     for (let i = 0; i < numbers.length; i++) {
//         if (max_number < numbers[i]) {
//             max_number = numbers[i];
//         }
//     }
//     document.write(max_number);
// }
// maxNumber();



// function sum(a, b) {
//     return a + b;
// }

// result = sum(4, 5);
// document.write(result);