// Script para ocultar la flecha y controlar el navbar
const arrow = document.querySelector('.arrow-down-svg');
const navbar = document.querySelector('.navbar');
const navbarLinks = document.querySelector('.navbar-links');
const navbarLogo = document.querySelector('.navbar-logo');
const logoImg = document.querySelector('.navbar-logo img');
const logoText = document.querySelector('.navbar-logo span');
const hamburgerMenu = document.querySelector('.hamburger-menu');

// Toggle del menú hamburguesa
hamburgerMenu.addEventListener('click', function() {
    this.classList.toggle('active');
    navbarLinks.classList.toggle('active');
});

// Cerrar menú al hacer click en un enlace
const navButtons = document.querySelectorAll('.nav-button');
navButtons.forEach(button => {
    button.addEventListener('click', function() {
        hamburgerMenu.classList.remove('active');
        navbarLinks.classList.remove('active');
    });
});

// Cerrar menú al hacer click fuera de él
document.addEventListener('click', function(event) {
    const isClickInsideNav = navbar.contains(event.target);
    if (!isClickInsideNav && navbarLinks.classList.contains('active')) {
        hamburgerMenu.classList.remove('active');
        navbarLinks.classList.remove('active');
    }
});

window.addEventListener('scroll', function() {
    
    // Colapsar navbar a los 40px
    if (window.scrollY > 40) {
        navbar.classList.add('collapsed');
        navbarLinks.classList.add('hidden');
        navbarLogo.classList.add('slide-right');
        logoImg.classList.add('hamburger');
        logoText.classList.add('hidden');
    } else {
        navbar.classList.remove('collapsed');
        navbarLinks.classList.remove('hidden');
        navbarLogo.classList.remove('slide-right');
        logoImg.classList.remove('hamburger');
        logoText.classList.remove('hidden');
    }

    // Ocultar flecha a los 100px
    if (window.scrollY > 100) {
        arrow.classList.add('hidden');
    } else {
        arrow.classList.remove('hidden');
    }
});

// Opcional: hacer scroll suave al hacer click en la flecha
arrow.addEventListener('click', function() {
    window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
    });
});
