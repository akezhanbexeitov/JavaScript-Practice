console.log('Exercise 1: Minimum')

function min (num1, num2) {
    if (num1 < num2) {
        return num1
    } else if (num2 < num1) {
        return num2
    } else {
        return num1 || num2
    }
}

console.log(min(1, 1))
console.log(min(4, 2))
console.log(min(1, 5))
console.log(min(0, 10))
console.log(min(0, -10))
console.log('')

// Shorter answer
// function min(a, b) {
//     if (a < b) return a;
//     else return b;
// }
// console.log('')