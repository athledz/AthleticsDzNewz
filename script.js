// Sélectionner le bouton hamburger et la liste de navigation
const hamburgerMenu = document.getElementById('hamburger-menu');
const navLinks = document.getElementById('nav-links');

// Ajouter un gestionnaire d'événements au clic
hamburgerMenu.addEventListener('click', () => {
    // Alterner la classe "active" sur la liste de navigation
    navLinks.classList.toggle('active');
});