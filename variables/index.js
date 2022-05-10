// let, const, var - создание переменных
// int, double, bool, string, char - остальные языки программирования

// number, string, undefined, null, objects, boolean - JS типы данных

let num = 5;
console.log(num);
// document.write(num);
// alert(num);
// confirm(num);
// let name = prompt("Enter name: ");
// document.write(`<h1>${name}</h1>`);

// let num = 12;
// document.write(num);

// let num2 = 10;
// document.write(num + num2);

let str = "12";
// document.write(str);
console.log(str);
console.log(num + str); // 512 Конкатинация 
console.log(num - str); // -7

let n = "we";
let m = "we";

console.log(n + m); // 35
console.log(n - m); // NaN
console.log(Number(str));
console.log(parseInt(str));
console.log(+str);


document.write(`abs / pow / sqrt <p>${Math.abs(-34)}</p>`) // Модуль
document.write(`<p>${Math.pow(3, 8)}</p>`) // Степень 
document.write(`<p>${Math.sqrt(81)}</p><hr>`) // Квадратный корень
document.write(`max / min<p>${Math.max(1, 45, -9, 23, 56)}</p>`) // Максимальное число
document.write(`<p>${Math.min(1, 45, -9, 23, 56)}</p><hr>`) // Минимальное число
document.write(`floor<p>${Math.floor(3.4)}</p>`)
document.write(`<p>${Math.floor(3.8)}</p><hr>`)

document.write(`round<p>${Math.round(3.4)}</p>`)
document.write(`<p>${Math.round(3.5)}</p>`)
document.write(`<p>${Math.round(3.8)}</p><hr>`)

document.write(`ceil<p>${Math.ceil(3.4)}</p>`)
document.write(`<p>${Math.ceil(3.8)}</p><hr>`)

document.write(`random<p>${Math.floor(Math.random() * 100)}</p><hr>`)


let s = "Decode"
document.write(`<p>${s.toLowerCase()}</p>`)
document.write(s[0]) 
// Decode
// 012345