let user = {
    "name": "Decode",
    "age": 20,
    position: "Developer"
}

console.log(user.age, user["age"])

let language = {
    1: "C++",
    2: "Python",
    3: "JS"
}

console.log(language[1])

let student = {
    name: "Moldir",
    email: ["akidulatini@gmail.com", "decode@gmail.com"],
    password: "123456789"
}

console.log(student.email[0])


let products = [
    {
        name: "Poco X3 Pro 8/256Gb черный",
        img: "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h53/heb/34279403782174/poco-x3-pro-8-256gb-cernyj-101372406-1-Container.jpg",
        price: 129188
    },

    {
        name: "Смартфон Apple iPhone 13 128Gb черный",
        img: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h91/h1d/46392661737502/apple-iphone-13-128gb-sinij-102298364-1-Container.jpg",
        price: 478000
    },

    {
        name: "Смартфон Apple iPhone 11 128Gb Slim Box черный",
        img: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3a/hb4/33208264228894/apple-iphone-11-128gb-slim-box-belyj-100692385-1-Container.jpg",
        price: 366700 
    }
]


document.write(`<div class="products">`)
for (let i = 0; i < products.length; i++) {
    document.write (`
        <div class="product">
            <img src="${products[i].img}">
            <h1>${products[i].name}</h1>
            <p>${products[i].price} тг.</p>
        </div>
    `);
}
document.write(`</div>`)


// let max_price = 0
// for (let i = 0; i < products.length; i++) {
//     if (max_price < products[i].price) {
//         max_price = products[i].price
//     }
// }

// document.write(`<div class="products">`)
// for (let i = 0; i < products.length; i++) {
//     if (products[i].price == max_price) {
//         document.write (`
//         <div class="product">
//             <img src="${products[i].img}">
//             <h1>${products[i].name}</h1>
//             <p>${products[i].price} тг.</p>
//         </div>
//     `);
//     }
// }
// document.write(`</div>`)


// in, of
// in - index
// of - object




