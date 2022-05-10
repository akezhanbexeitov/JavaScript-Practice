let img = document.querySelector(".modal-img")

function closeModal() {
    document.querySelector(".modal-window").classList.remove("active")
}

function openModal() {
    document.querySelector(".modal-window").classList.add("active")
}

function openImg(e) {
    openModal();
    img.src = e.target.src;
}
