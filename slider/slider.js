let img = document.querySelector(".modal-img")
let allImages = document.querySelector(".images")
let slideDots = document.querySelector(".slide-dots")

let images = [
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y29tcHV0ZXJ8ZW58MHx8MHx8&w=1000&q=80",
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    "https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
]

let outputImage = ''
let outputDots = ''
images.forEach((img, i) => {
    outputImage += `<img src="${img}" class="slide-img" onclick="showImg(${i})">`
    outputDots += `<p class="dots"></p>`
})

allImages.innerHTML = outputImage
slideDots.innerHTML = outputDots

function modal(action) {
    if (action === "open") {
        document.querySelector(".modal-window").classList.add("active")
    } else {
        document.querySelector(".modal-window").classList.remove("active")
    }
}

let slideIndex = 0
dotActive(slideIndex)

function showImg(index) {
    modal("open")
    if (index >= images.length) {
        index = 0
    } 
    if (index < 0) {
        index = images.length - 1
    }
    slideIndex = index
    img.src = images[index]
    dotActive(slideIndex)
}

function nextPrevImg(n) {
    slideIndex += n
    showImg(slideIndex)
}

function dotActive(n) {
    const dots = document.querySelectorAll(".dots")
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active")
    }
    dots[n].classList.add("active")
    slideIndex = n
}