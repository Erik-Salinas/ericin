document.addEventListener('DOMContentLoaded', function () { //Buena practica DOMContentLoaded
    document.addEventListener('click', function (event) {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        const navbarToggler = document.querySelector('.navbar-toggler');

        // Verificar si se hizo clic dentro del menú desplegable o en el botón de la hamburguesa
        const isClickInsideNavbar = navbarCollapse.contains(event.target);
        const isClickInsideToggler = navbarToggler.contains(event.target);

        // Si el menú está abierto y el clic no fue dentro del menú ni en el botón de la hamburguesa, cierra el menú
        if (navbarCollapse.classList.contains('show') && !isClickInsideNavbar && !isClickInsideToggler) {
            navbarCollapse.classList.remove('show');
        }
    });
});