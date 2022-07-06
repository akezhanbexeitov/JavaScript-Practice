console.log("Exercise 3: Chessboard")
let chessboard = ''
width = 8
height = 8

for (let i = 0; i < height; i++) {
    if (i % 2 == 0) {
        for (let i = 0; i < width; i++) {
            if (i % 2 == 0) {
                chessboard += '#'
            } else {
                chessboard += ' '
            }
       
        }
        chessboard += '\n'
    } else {
        for (let i = 0; i < width; i++) {
            if (i % 2 == 1) {
                chessboard += '#'
            } else {
                chessboard += ' '
            }
       
        }
        chessboard += '\n'
    }
    
}

console.log(chessboard)
console.log('')

// Shorter answer
// let size = 8;

// let board = "";

// for (let y = 0; y < size; y++) {
//   for (let x = 0; x < size; x++) {
//     if ((x + y) % 2 == 0) {
//       board += " ";
//     } else {
//       board += "#";
//     }
//   }
//   board += "\n";
// }

// console.log(board);