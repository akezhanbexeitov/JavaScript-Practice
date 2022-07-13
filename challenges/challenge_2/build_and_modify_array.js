// Create an array with several items
let array = ['bottle', 'phone', 'earphones', 'notebook', 'glasses']
console.log(array)

// Remove the last item
array.pop()
console.log(array)

// Move the last item to the first position
array.unshift(array.pop())
console.log(array)

// Sort the items alphabetically
array.sort()
console.log(array)

// Find a specific item in the array
console.log(array[2])

// Remove an item with specific content from the array
// for (let i = 0; i <= array.length; i++) {
//     if (array[i] == 'notebook') {
//         array.splice(i, 1, )
//     }
// }
// console.log(array)

// Better solution
let remove = 'notebook'
array.splice(array.indexOf(remove), 1)
console.log(array)
