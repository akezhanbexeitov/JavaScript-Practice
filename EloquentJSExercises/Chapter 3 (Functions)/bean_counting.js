console.log('Exercise 3: Bean Counting')

function countBs(string) {
    let count = 0
    for (let i = 0; i <= string.length; i++) {
        if (string[i] === 'B') {
            count += 1
        }
    } 
    return count
}

console.log(countBs('BBC'))
console.log(countBs('Be right Back'))
console.log(countBs('Be right Back Bag'))

function countChar(string, character) {
    let count = 0
    for (let i = 0; i <= string.length; i++) {
        if (string[i] === character) {
            count += 1
        }
    } 
    return count
}

console.log(countChar("kakkerlak", "k"))
console.log(countChar("Be right Back Bag", "a"))

// Shorter answer
// function countChar(string, ch) {
//     let counted = 0;
//     for (let i = 0; i < string.length; i++) {
//       if (string[i] == ch) {
//         counted += 1;
//       }
//     }
//     return counted;
//   }
  
// function countBs(string) {
//     return countChar(string, "B");
// }