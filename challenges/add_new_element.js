let navItems = `
    <li class='nav-item'><a href='#'> Home</a></li>
    <li class='nav-item'><a href='#'> About Us</a></li>
    <li class='nav-item'><a href='#'> F.A.Q.</a></li>
    <li class='nav-item'><a href='#'> Contact Us</a></li>
    <li class='nav-item'><a href='#'> Address</a></li>
`

let navBar = document.createElement('nav')
navBar.classList.add('nav-menu')

let navList = document.createElement('ul')
navList.innerHTML = navItems

navBar.append(navList)
document.querySelector('header').append(navBar)