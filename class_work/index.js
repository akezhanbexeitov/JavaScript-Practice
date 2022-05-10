// Q2
let a = 10;
let b = 2;
document.write(`Q2<p>${a + b}</p>`)
document.write(`<p>${a - b}</p>`)
document.write(`<p>${a * b}</p>`)
document.write(`<p>${a / b}</p><hr>`)

// Q3
let c = 15;
let d = 2
let result = c + d;
document.write(`Q3<p>${result}</p><hr>`)

// Q4
a = 10;
b = 2;
c = 5;
document.write(`Q4<p>${a + b + c}</p><hr>`)

// Q5
a = 25;
b = 30;
c = 10;
let mean = (a + b + c) / 3;
document.write(`Q5<p>${mean}</p><hr>`)

// Q6
let number = prompt("Enter number: ")
alert(number * number)

// Q7 
let num1 = 15
let num2 = num1
document.write(`Q7<p>${num2}</p><hr>`)

// Q8
a = parseInt(prompt("Enter first number: "))
b = parseInt(prompt("Enter second number: "))
c = parseInt(prompt("Enter third number: "))
let formula = (a + b) / 2 + (b + c) / 2;
document.write(`Q8<p>${formula}</p><hr>`)

// Q9
a = parseInt(prompt("Enter first leg: "))
b = parseInt(prompt("Enter second leg: "))
let pythagorean_theorem = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
document.write(`Q9<p>${pythagorean_theorem}</p><hr>`)

// Q10
let second = 1;
let minute = second * 60;
let hour = minute * 60;
document.write(`Q10<p>${hour}</p><hr>`)
