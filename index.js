const Navbar = document.querySelector('.Navbar');
const MenuItems = document.querySelectorAll('.menu-item');
const Hamburger = document.querySelector('.Hamburger');
const closeIcon = document.querySelector('.closeIcon');
const menuIcon = document.querySelector('.menuIcon');

function toggleNavbar() {
    if (Navbar.classList.contains('showNav')) {
        Navbar.classList.remove('showNav');
        closeIcon.style.display = 'none';
        menuIcon.style.display = 'block';
    } else {
        Navbar.classList.add('showNav');
        closeIcon.style.display = 'block';
        menuIcon.style.display = 'none';
    }
}

Hamburger.addEventListener("click", toggleNavbar);