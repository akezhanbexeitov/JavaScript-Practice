/*
    1) for() {}
    2) while() {}
    3) do{} while()

    for(init; condition; increment) {}

    increment, decrement i++; ++i
    let i = 1;
    document.write(++i) // сразу привсвоили 1
    document.write(i++) // при следующем объявлении прибавит 1
*/





// цикл for
// 1-10
// for(let i = 1; i <= 10; i++) {
//     document.write(i);
// }
// document.write("<hr>")
// // четные элементы
// for(let i = 1; i <= 10; i++) {
//     if(i % 2 == 0) {
//         document.write(i)
//     }
// }
// document.write("<hr>")





// цикл while
// 1-20
// let i = 1;
// while(i <= 20) {
//     console.log(i); // 1 2 3 4 ... 20
//     i++;
// }
// console.log(i); // 21





// цикл do, while
// let i = 1;
// do {
//     console.log(i);
//     i++;
// } while (i <= 20);





// Question 1
// let i = 1;
// while (i <= 100) {
//     document.write(i + " ");
//     i++;
// }
// document.write("<hr>")



// // Question 2
// for (let i = 5; i >= 1; i--) {
//     document.write(i);
// }
// document.write("<hr>")



// // Question 3
// i = 35
// while (i <= 87) {
//     if (i % 7 == 1 || i % 7 == 2 || i % 7 == 5) {
//         console.log(i);
//     }
//     i++;
// }



// // Question 4
// for (let i = 10; i <= 20; i++) {
//     document.write(i * i + " ");
// }
// document.write("<hr>")



// // Question 5
// i = 1;
// while (i <= 100) {
//     if (i % 2 == 0) {
//         document.write(i + " ");
//     }
//     i++;
// }
// document.write("<hr>")



// // Question 6
// let count = 0;
// for (let i = 35; i <= 87; i++) {
//     if (i % 2 == 0) {
//         count += 1;
//     }
// }
// document.write("Number of even numbers between 35 and 87: " + count)
// document.write("<hr>")



// // Question 7
// i = 45;
// count = 0;
// while (i <= 90) {
//     if (i % 2 == 1) {
//         count += 1;
//     }
//     i++;
// }
// document.write("Number of even numbers between 45 and 90: " + count)
// document.write("<hr>")



// // Question 8
// min = parseInt(prompt("Enter minimal number: "));
// max = parseInt(prompt("Enter maximal number: "));
// step = parseInt(prompt("Enter step: "));
// for (let i = min; i <= max; i += step) {
//     document.write(i + " ");
// }
// document.write("<hr>")



// // Question 9
// let number = parseInt(prompt("Enter a number: "));
// i = 1;
// let output = 0;
// while (i <= number) {
//     output += i
//     i++
// }
// document.write(output)
// document.write("<hr>")



// // Question 10
// number = parseInt(prompt("Enter a number: "));
// for (let i = 1; i <= 10; i++) {
//     document.write(`${number} * ${i} = ${number * i} <br>`)
// }
// document.write("<hr>")



// // Question 11
// let first_number = parseInt(prompt("Enter first number: "));
// let second_number = parseInt(prompt("Enter second number: "));
// i = first_number;
// output = 0;
// while (i <= second_number) {
//     if (i % 2 == 1) {
//         output += i;
//     }
//     i++;
// }
// document.write(output)



// Question 12
// count = 0;
// number = parseInt(prompt("Enter a number: "))
// i = number;
// while (i > 0) {
//     if ((i % 10) % 2 == 0) {
//         count += 1;
//     }
//     i = Math.floor(i / 10);
// }
// document.write(count);
// document.write("<hr>")


// Question 13
number = parseInt(prompt("Enter a number: "))
i = number;
let maximum_number = 0;
while (i > 0) {
    let last_number = i % 10;
    if (last_number > maximum_number) {
        maximum_number = i;
    }
    i = Math.floor(i / 10);
}
console.log(maximum_number);



