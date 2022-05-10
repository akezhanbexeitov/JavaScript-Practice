let array = [12 ,34, 56, 78];
// console.log(array);

// // 12, 34, 56, 78 - индексы массива
// // 0 ,  1,  2,  3 - индексы элементов (начинается с нуля)

// console.log(array[2]);

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// puss(), pop(), unshift(), shift()
// array.push(89, 90); // добавляет элементы в конец массива
// console.log(array);

// array.pop(); // удаляет последний элемент массива
// console.log(array);

// array.unshift(10, 11); // добавляет элементы в начало массива
// console.log(array);
 
// array.shift() // удаляет первый элемент массива
// console.log(array);

// // slice(), splice()
// let a = array.slice(0, 3); // копирует определенные элементы массива [0, 3)
// console.log(a);

// array.splice(0, 3); // удаляет определенные элементы массива [индекс массива, количество элементов)
// console.log(array);

// array.splice(2, 0, 22, 33);
// console.log(array);

// //  1 2 3 4 5     5 4 3 2 1
// console.log(array.reverse());



// let b = [22, 25, 234, 1, 12, 45, 67, 678];
// console.log(b.sort());

// let c = ["Taraz", "Shymkent", "Almaty"];
// console.log(c.sort());



// let images = [
//     "https://template66383.motopreview.com/mt-demo/66300/66383/mt-content/uploads/2018/03/mt-1378-home-our-projects1.jpg",
//     "https://template66383.motopreview.com/mt-demo/66300/66383/mt-content/uploads/2018/03/mt-1378-home-our-projects2.jpg",
//     "https://template66383.motopreview.com/mt-demo/66300/66383/mt-content/uploads/2018/03/mt-1378-home-our-projects3.jpg"
// ]

// for (i = 0; i < images.length; i++) {
//     document.write(`
//         <img src="${images[i]}">
//     `);
// }



// Question 2
let a = [5, -5, 6, -7, 10];
let b = [];
for (let i = 0; i < a.length; i++) {
    if (a[i] > 0) {
        b.push(a[i]);
    } 
}
console.log(b);


// Question 3 
a = [112, -5, 65, -57, 85];
b = [];
for (let i = 0; i < a.length; i++) {
    if (a[i] < 0) {
        b.push(a[i]);
    } 
}
console.log(b);


// Question 4
a = [1, -5, 6, -7, 8];
b = [];
for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 == 0) {
        b.push(a[i]);
    } 
}
console.log(b);


// Question 6
a = [1, -5, 6, -7, 4, 10, 4, 4, 4];
for (let i = 0; i < a.length; i++) {
    if (a[i] == 4) {
        console.log("YES");
        break;
    }
}


// Question 7
a = [1, 2, 3, 4, 5];
b = a.slice(0, 3);
console.log(b);


// Question 8 
a = [1, 2, 3, 4, 5];
a.splice(3, 0, "a", "b", "c");
console.log(a);


// Question 9
a = [2, 5, 7, 9, 10];
let output = 0;
for (let i = 0; i < a.length; i++) {
    output += a[i];
}
console.log(output)


// Question 10
a = [2, 5, -7, 3, 8, 9];
output = 0;
for (let i = 0; i < a.length; i++) {
    if (a[i] > 0) {
        output += a[i];
    } 
}
console.log(output)


// Question 11
a = [2, 6, 8, 4, -9, -10];
let count = 0;
for (let i = 0; i < a.length; i++) {
    if (a[i] > 0) {
        count += 1
    } 
}
console.log(count);


// Question 12
a = [2, 5, 6, 7, 8, 20, 34];
let maximum_number = 0;
for (let i = 0; i < a.length; i++) {
    if (a[i] > maximum_number) {
        maximum_number = a[i];
    }
}
console.log(maximum_number);




