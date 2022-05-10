// Рекурсивная функция - функция, которая вызывает саму себя

// function show(n) {
//     if (n > 10) {
//         return;
//     } else {
//         console.log(n)
//         show(n + 1) // 2
//     }
// }
// show(1)


// let output = 1;
// function factorial (n) {
//     if (n == 0) {
//         console.log(output);
//         return;
//     } else {
//         let result = 0;
//         result = output * n;
//         output = result;
//         factorial(n-1)
//     }
// }
// factorial(5)


// function factorial(n) {
//     if (n == 0 || n == 1) {
//         return 1;
//     } else {
//         return n * factorial(n-1)
//     }
// }
// console.log(factorial(5));


// setTimeOut, setInterval
// setTimeOut - помогает вывести данные, вызывать функции один раз через определенный временной интервал
// setTimeOut - помогает вывести данные, вызывать функции регулярно через определенный временной интервал

// setTimeout(() => {
//     console.log("Decode")
// }, 5000);
// function show(name, year) {
//     alert("Almaty " + name + year)
// }
// // setTimeout(show, 2000, "Decode", 2022);
// setInterval(show, 2000, "Decode", 2022)


// let str = "Decode"
// console.log(str.charAt(4))
// console.log(str.substr(2, 4))


let words = [
    "Asyl",
    "Shokan",
    "Akezhan",
    "Ayan",
    "Tatty",
    "Abylaikhan",
    "Alikhan"
]

let span = document.querySelector("#txt");
let wordIndex = 0;
let charIndex = 0;

function printWords() {
    if (words[wordIndex].length > charIndex) {
        span.innerHTML += words[wordIndex].charAt(charIndex)
        charIndex++
        setTimeout(printWords, 100)
    } else {
        deleteWords()
    }
}

printWords()

function deleteWords() {
    if (charIndex >= 0) {
        span.innerHTML = words[wordIndex].substr(0, charIndex)
        charIndex--
        setTimeout(deleteWords, 100)
    } else {
        wordIndex++
        if (wordIndex == words.length) {
            wordIndex = 0
        }
        setTimeout(printWords, 100)
    }
}

