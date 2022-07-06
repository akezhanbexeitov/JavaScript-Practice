console.log('Exercise 2: Recursion')

function isEven(number) {
    if (number === 0) {
        return true
    } else if (number === 1) {
        return false
    } else if (number < 0) {
        return isEven(-number)
    } else {
        return isEven(number - 2)
    }
}

console.log(isEven(50))
console.log(isEven(75))
console.log(isEven(0))
console.log(isEven(1))
console.log(isEven(-1))
console.log(isEven(-50))
console.log(isEven(-75))
console.log('')

// Shorter answer
// function isEven(n) {
//     if (n == 0) return true;
//     else if (n == 1) return false;
//     else if (n < 0) return isEven(-n);
//     else return isEven(n - 2);
//   }