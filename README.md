petite explication de mon script formvalid.js

const lastname = document.getElementById("lastname").value.trim(); // Récupère la valeur du champ "Nom"

Décomposition de la ligne de code

    const lastname :
        const : C'est un mot-clé en JavaScript utilisé pour déclarer une constante. Une constante est une variable dont la valeur ne peut pas être réassignée après sa déclaration.
        lastname : C'est le nom de la constante que nous créons. Elle sera utilisée pour stocker la valeur récupérée du champ "Nom".
    document.getElementById("lastname") :
        document : C'est un objet global qui représente le document HTML chargé dans le navigateur. Il permet d'accéder et de manipuler le contenu de la page.
        .getElementById("lastname") : C'est une méthode de l'objet document. Elle recherche un élément HTML ayant un attribut id égal à "lastname".
            Fonctionnement :
                Cette méthode parcourt l'ensemble du document et retourne le premier élément qui correspond à l'ID spécifié.
                Si aucun élément avec cet ID n'existe, elle renvoie null.
            Importance : Utiliser getElementById est très pratique pour accéder directement à un élément unique sur la page, ce qui est souvent nécessaire pour lire ou modifier ses propriétés.
    .value :
        .value : C'est une propriété de l'élément HTML récupéré (dans ce cas, un champ de saisie <input>). Elle contient la valeur actuelle saisie par l'utilisateur dans ce champ.
        Contexte : Pour les éléments de formulaire comme <input>, <textarea>, etc., la propriété value permet d'obtenir ou de définir le texte que l'utilisateur a entré.
    .trim() :
        .trim() : C'est une méthode de chaîne en JavaScript qui supprime les espaces blancs au début et à la fin d'une chaîne de caractères.
            Espaces blancs inclus : Cela inclut les espaces, les tabulations (\t) et les sauts de ligne (\n).
            Utilité : Cette méthode est particulièrement utile pour nettoyer les entrées utilisateur, car elle élimine les espaces inutiles qui pourraient causer des problèmes lors du traitement des données (par exemple, lors de la validation ou de l'envoi à un serveur).
            Immutabilité des chaînes : Notez que trim() ne modifie pas la chaîne d'origine ; elle renvoie une nouvelle chaîne avec les espaces supprimés.

Résumé
En résumé, cette ligne de code effectue les opérations suivantes :

    Elle déclare une constante nommée lastname.
    Elle utilise document.getElementById("lastname") pour accéder à l'élément HTML avec l'ID "lastname".
    Elle récupère la valeur actuelle saisie dans ce champ.
    Elle applique .trim() pour nettoyer cette valeur en supprimant les espaces superflus au début et à la fin.
    Finalement, cette valeur nettoyée est stockée dans la constante lastname, prête à être utilisée pour d'autres opérations (comme la validation ou l'envoi).

////////////////////////////////////////////////////////

Les données restent visibles dans la console à chaque validation du formulaire en raison de la façon dont le script JavaScript est conçu pour gérer les événements de soumission. Voici une explication détaillée de ce comportement :

Explication du comportement des console.log

    Écouteur d'événements pour la soumission :
        Dans votre code JavaScript, vous avez un écouteur d'événements qui se déclenche lorsque le formulaire est soumis. Cela se fait grâce à la ligne suivante :

    javascript
    form.addEventListener("submit", function(event) {

    Cette ligne indique que chaque fois que l'utilisateur essaie de soumettre le formulaire, la fonction fournie sera exécutée.

Récupération des valeurs des champs :

    À l'intérieur de cette fonction, vous récupérez les valeurs des différents champs du formulaire :

    javascript
    const lastname = document.getElementById("lastname").value.trim();

    Chaque fois que le formulaire est soumis, ces lignes sont exécutées, ce qui signifie que les valeurs actuelles des champs sont toujours récupérées et affichées dans la console.

Affichage dans la console :

    Les lignes suivantes affichent ces valeurs dans la console :

        javascript
        console.log("Nom:", lastname);
        console.log("Prénom:", firstname);
        console.log("Email:", mail);
        console.log("Sujet:", subject);
        console.log("Message:", message);

        Chaque fois que vous soumettez le formulaire (même si les données sont déjà présentes), ces valeurs sont enregistrées et affichées à nouveau dans la console.
    Validation et prévention de l'envoi :
        La fonction empêche l'envoi du formulaire par défaut avec event.preventDefault();. Cela signifie que même si les données sont validées, elles ne sont pas envoyées au serveur, mais restent visibles dans la console tant que vous ne rafraîchissez pas la page ou ne fermez pas l'onglet.
        Si les validations échouent (par exemple, si un champ est vide ou si l'email n'est pas valide), un message d'alerte s'affiche, mais les valeurs continuent d'être visibles dans la console lors de chaque tentative de soumission.
    Réinitialisation du formulaire :
        Si vous souhaitez que les données ne restent pas visibles après une soumission réussie, vous pouvez utiliser form.reset(); pour vider tous les champs du formulaire après une validation réussie. Cependant, cela ne supprimera pas les messages précédents dans la console ; ils resteront visibles jusqu'à ce que vous actualisiez la page.

Conclusion
En résumé, chaque fois que vous soumettez le formulaire, le script exécute les instructions pour récupérer et afficher les valeurs des champs dans la console. Cela se produit indépendamment du fait que les données soient valides ou non. Les console.log affichent simplement l'état actuel des valeurs des champs à chaque soumission. Pour voir un comportement différent (comme effacer les logs), vous devrez soit rafraîchir la page, soit modifier le script pour ne pas afficher ces valeurs à chaque validation si cela n'est pas nécessaire.