// JS DOM - JavaScript Document Object Model
// document.getElementById() -> 1 элемент
// document.getElementsByClassName() -> 1, ..., n
// document.getElementsByTagName() -> 1, ..., n

// let p = document.getElementById("txt");
// p.innerHTML = "Decode <a href='https://msiter.ru/tutorials/javascript/js_htmldom'>Decode</a>";
// // p.innerText = "Almaty <a href='https://msiter.ru/tutorials/javascript/js_htmldom'>Decode</a>";

// p.style.color = "red";

// let list = document.getElementsByClassName("list-item")
// for (let item of list) {
//     item.innerHTML = "Decode"
// }

// for (let items in list) {
//     list[items].innerHTML = "School"
// }
// // of - object
// // in - index

// let paragraph = document.getElementsByTagName("p");
// for (let item of paragraph) {
//     item.innerHTML = "Almaty";
//     item.style.color = "blue"
//     item.style.textAlign = "center"
// }


// // querySelector, querySelectorAll
// document.querySelector(".list-item").innerHTML = "Decode"

// let listItem = document.querySelectorAll(".list-item")
// for (let item of listItem) {
//     item.innerHTML = "Almaty"
// }


// document.querySelector(".img").setAttribute("alt", "Decode")
// // document.querySelector(".img").removeAttribute("alt")


// document.querySelector(".img").classList.add("image", "images")
// document.querySelector(".img").classList.remove("image")


// button input decode@mail.ru
function pasteEmail() {
    document.querySelector(".input").setAttribute("value", "decode@mail.ru")
}
