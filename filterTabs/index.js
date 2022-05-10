let projects = [
    {
        id: 1,
        img: "https://template66383.motopreview.com/mt-demo/66300/66383/mt-content/uploads/2018/03/mt-1378-home-our-projects1.jpg",
        category: "Business"
    },

    {
        id: 2,
        img: "https://template66383.motopreview.com/mt-demo/66300/66383/mt-content/uploads/2018/03/mt-1378-home-our-projects2.jpg",
        category: "Business"
    },

    {
        id: 3,
        img: "https://template66383.motopreview.com/mt-demo/66300/66383/mt-content/uploads/2018/03/mt-1378-home-our-projects3.jpg",
        category: "Restaurant"
    },

    {
        id: 4,
        img: "https://template66383.motopreview.com/mt-demo/66300/66383/mt-content/uploads/2018/03/mt-1378-home-our-projects4.jpg",
        category: "Restaurant"
    },

    {
        id: 5,
        img: "https://template66383.motopreview.com/mt-demo/66300/66383/mt-content/uploads/2018/03/mt-1378-home-our-projects5.jpg",
        category: "Art"
    },
    
    {
        id: 6,
        img: "https://template66383.motopreview.com/mt-demo/66300/66383/mt-content/uploads/2018/03/mt-1378-home-our-projects6.jpg",
        category: "Art"
    },

    {
        id: 7,
        img: "https://template66383.motopreview.com/mt-demo/66300/66383/mt-content/uploads/2018/03/mt-1378-home-our-projects7.jpg",
        category: "Technologies"
    },

    {
        id: 8,
        img: "https://template66383.motopreview.com/mt-demo/66300/66383/mt-content/uploads/2018/03/mt-1378-home-our-projects8.jpg",
        category: "Technologies"
    }
]


let tabNavs = document.querySelector(".tab-navs")
let tabContent = document.querySelector(".tab-content")


let categories = []
for (let item of projects) {
    categories.push(item.category)  
}
// indexOf == index
// Array - экземпляр массива, Set - уникальные данные массива
// spread - получаеи элементы массива по отдельности
categories = [... new Set(categories)]
console.log(categories)
let outputCategory = ""
for (let category of categories) {
    outputCategory += `<button onclick="filter('${category}')" class="btn">${category}</button>`
}
tabNavs.innerHTML = outputCategory;


let categoryName = "Business"
let output = ""
for (item of projects) {
    if (item.category === categoryName) {      
        output += `<img class="content-img" src="${item.img}">`
    }
}
tabContent.innerHTML = output


function filter (categoryName) {
    let result = ""
    for (item of projects) {
        if (item.category === categoryName) {                        // == - название, значение
            result += `<img class="content-img" src="${item.img}">`   // === - название, значение, тип
        }
    }
    tabContent.innerHTML = result;
}