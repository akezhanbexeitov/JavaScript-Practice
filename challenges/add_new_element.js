let navBar = document.createElement('nav')
navBar.classList.add('nav-menu')
let menuItems = `
    <ul class='nav-item'><a href='#'> Home</a></ul>
    <ul class='nav-item'><a href='#'> About Us</a></ul>
    <ul class='nav-item'><a href='#'> F.A.Q.</a></ul>
    <ul class='nav-item'><a href='#'> Contact Us</a></ul>
    <ul class='nav-item'><a href='#'> Address</a></ul>
`
navBar.innerHTML = menuItems
document.querySelector('header').append(navBar)