// Attendre que le DOM (Document Object Model) soit complètement chargé avant d'exécuter le script
document.addEventListener("DOMContentLoaded", function() {
    // Sélectionner le formulaire par son ID 'form'
    const form = document.getElementById("form");

    // Ajouter un écouteur d'événements pour l'envoi du formulaire
    form.addEventListener("submit", function(event) {
        // Empêcher l'envoi du formulaire par défaut (comportement standard du navigateur)
        event.preventDefault();

        // Récupérer les valeurs des champs du formulaire et supprimer les espaces inutiles
        const lastname = document.getElementById("lastname").value.trim(); // Récupère la valeur du champ "Nom"
        // trim () => une méthode de chaîne en JavaScript qui supprime les espaces blancs 
        // au début et à la fin d'une chaîne de caractères.
        const firstname = document.getElementById("firstname").value.trim(); // Récupère la valeur du champ "Prénom"
        const mail = document.getElementById("mail").value.trim(); // Récupère la valeur du champ "Email"
        const subject = document.getElementById("subject").value.trim(); // Récupère la valeur du champ "Sujet"
        const message = document.getElementById("message").value.trim(); // Récupère la valeur du champ "Message"

        // Afficher les valeurs dans la console pour vérification
        console.log("Nom:", lastname); // Affiche le nom dans la console
        console.log("Prénom:", firstname); // Affiche le prénom dans la console
        console.log("Email:", mail); // Affiche l'email dans la console
        console.log("Sujet:", subject); // Affiche le sujet dans la console
        console.log("Message:", message); // Affiche le message dans la console

        // Vérifier si tous les champs sont remplis
        if (!lastname || !firstname || !mail || !subject || !message) {
            alert("Veuillez remplir tous les champs."); // Alerte l'utilisateur si un ou plusieurs champs sont vides
            return; // Sortir de la fonction si des champs sont vides, ne pas soumettre le formulaire
        }

        // Vérifier si l'email est valide avec une expression régulière simple
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Modèle pour vérifier la validité de l'email
        if (!emailPattern.test(mail)) {
            alert("Veuillez entrer une adresse email valide."); // Alerte l'utilisateur si l'email n'est pas valide
            return; // Sortir de la fonction si l'email n'est pas valide, ne pas soumettre le formulaire
        }

        // Si toutes les validations passent, afficher un message de succès
        alert("Formulaire soumis avec succès !"); // Message indiquant que le formulaire est prêt à être soumis

        // Réinitialiser les champs du formulaire après soumission réussie
        form.reset(); // Cette ligne vide tous les champs du formulaire

        // Ici, vous pouvez soumettre le formulaire ou faire une requête AJAX pour envoyer les données.
        // form.submit(); // Décommenter cette ligne pour soumettre le formulaire après validation.
    });
});
