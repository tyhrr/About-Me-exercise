// Script para fade out del logo y ocultar la flecha
const arrow = document.querySelector('.arrow-down-svg');
const logo = document.querySelector('.navbar-logo img');

window.addEventListener('scroll', function() {
    // Fade out logo a los 50px
    if (window.scrollY > 50) {
        logo.classList.add('fade-out');
    } else {
        logo.classList.remove('fade-out');
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
