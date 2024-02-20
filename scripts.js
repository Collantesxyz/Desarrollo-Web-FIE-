document.addEventListener('DOMContentLoaded', function() {
    const searchContainer = document.getElementById('search-container');
    const searchInput = document.getElementById('search-input');

    // Evento para desplegar la barra de búsqueda
    searchInput.addEventListener('focus', function() {
        searchContainer.classList.add('active');
    });

    // Evento para contraer la barra de búsqueda cuando se hace clic fuera
    document.addEventListener('click', function(e) {
        if (!searchContainer.contains(e.target)) {
            searchContainer.classList.remove('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const navRapidaTrigger = document.getElementById('nav-rapida-trigger');
    const navRapidaMenu = document.getElementById('nav-rapida-menu');

    navRapidaTrigger.addEventListener('click', function(event) {
        event.preventDefault(); // Previene la navegación
        navRapidaMenu.classList.toggle('active'); // Muestra u oculta el menú
    });

    // Opcional: Cerrar el menú si se hace clic fuera de él
    document.addEventListener('click', function(event) {
        if (!navRapidaMenu.contains(event.target) && !navRapidaTrigger.contains(event.target)) {
            navRapidaMenu.classList.remove('active');
        }
    });
});