// Q2937
let num = parseInt(prompt("Enter number (-10.000 < number < 10.000: "))
let next_number = num + 1;
let previous_number = num - 1;
document.write(`Q2937<p>The next number for the number ${num} is ${next_number}</p>`)
document.write(`<p>The next number for the number ${num} is ${previous_number}</p><hr>`)

// Q2938
let pupil = parseInt(prompt("Enter number of pupils: "))
let apple = parseInt(prompt("Enter number of apples: "))
let per_student = Math.floor(apple / pupil) 
document.write(`Q2938<p>${per_student}</p>`)