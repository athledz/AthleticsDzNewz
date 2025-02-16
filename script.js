// Gestion du formulaire de contact
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Empêche le rechargement de la page

    const nom = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const message = document.querySelector('textarea').value;

    if (nom && email && message) {
        alert(`Merci ${nom} ! Votre message a été envoyé.`);
        this.reset(); // Réinitialise le formulaire
    } else {
        alert('Veuillez remplir tous les champs.');
    }
});