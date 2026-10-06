# Exercices JavaScript 

58 exercices, associés aux 28 chapitres du JavaScript Lab. Chaque dossier possède son propre README, ses données et ses fichiers. Vous pouvez commencer par n’importe lequel même s’il est mieux de les réaliser dans l’ordre.

Le code à écrire est en JavaScript moderne (ES6 et plus récent). Les anciennes syntaxes ES5 sont présentes dans le lab pour les reconnaître, mais aucun exercice ne demande de les employer.

Les dossiers 01 à 26 et 45 à 48 s’exécutent avec Node.js 20 ou plus. Les exercices 27 à 44, sauf le 40, s’ouvrent par double-clic sur index.html. Pour le 40 et les exercices 49 à 52, lancez le serveur Node.js inclus. Les exercices 53 à 57 nécessitent npm install dans chaque dossier concerné. L’exercice 58 utilise node --test. 

## Parcours

| Exercice | Objectif | Notion |
| --- | --- | --- |
| [01](./01-variables/README.md) | Préparer une fiche produit | const, let, types et interpolation |
| [02](./02-operateurs/README.md) | Calculer une remise | opérateurs arithmétiques et comparaison |
| [03](./03-conversions/README.md) | Lire une quantité saisie | Number, Number.isNaN, égalité stricte |
| [04](./04-conditions-if/README.md) | Afficher un tarif selon l’âge | if, else if, else |
| [05](./05-conditions-switch/README.md) | Choisir un statut de commande | switch et break |
| [06](./06-boucle-for/README.md) | Numéroter des billets | boucle for |
| [07](./07-boucle-while/README.md) | Atteindre un objectif | boucle while |
| [08](./08-boucle-do-while/README.md) | Effectuer une tentative | boucle do...while |
| [09](./09-boucle-for-of/README.md) | Additionner des prix | for...of |
| [10](./10-boucle-for-in/README.md) | Lire des réglages | for...in et propriétés d’objet |
| [11](./11-break-continue/README.md) | Ignorer les places invalides | continue et break |
| [12](./12-fonction/README.md) | Calculer un total TTC | fonction, paramètres, return |
| [13](./13-flechee/README.md) | Formater des noms | fonction fléchée et map |
| [14](./14-closure/README.md) | Créer un compteur indépendant | portée et closure |
| [15](./15-chaines/README.md) | Nettoyer une recherche | trim, toLowerCase, includes |
| [16](./16-nombres/README.md) | Afficher un prix français | Intl.NumberFormat et arrondi |
| [17](./17-filter/README.md) | Filtrer un catalogue | filter |
| [18](./18-find-some/README.md) | Rechercher une entrée | find et some |
| [19](./19-reduce/README.md) | Totaliser un panier | reduce |
| [20](./20-tri/README.md) | Trier des cartes par prix | sort, copie de tableau |
| [21](./21-objets/README.md) | Décomposer une fiche | destructuration, valeur par défaut, spread |
| [22](./22-collections/README.md) | Supprimer les doublons | Set et Map |
| [23](./23-classes/README.md) | Créer une carte de jeu | class, constructeur, méthode, this |
| [24](./24-modules/README.md) | Séparer un calcul | import et export ES6 |
| [25](./25-erreurs/README.md) | Gérer une donnée incorrecte | throw, try/catch, message d’erreur |
| [26](./26-syntaxe-recente/README.md) | Définir des valeurs de secours | ?. et ?? (après ES6) |
| [27](./27-dom-texte/README.md) | Modifier un titre | querySelector, textContent |
| [28](./28-dom-liste/README.md) | Créer une liste | createElement, append, textContent |
| [29](./29-dom-cartes/README.md) | Rendre des cartes | tableau, filter, DOM |
| [30](./30-dom-securite/README.md) | Afficher une donnée non fiable | textContent et injection HTML |
| [31](./31-clic/README.md) | Réagir à un clic | addEventListener, état, textContent |
| [32](./32-delegation/README.md) | Supprimer un élément de liste | délégation, closest, remove |
| [33](./33-saisie/README.md) | Filtrer en direct | input, filter, rendu |
| [34](./34-formulaire/README.md) | Valider une inscription | submit, preventDefault, FormData |
| [35](./35-checkbox/README.md) | Activer un bouton | change, checked, disabled |
| [36](./36-classe-css/README.md) | Afficher un panneau | classList, aria-expanded |
| [37](./37-select-tri/README.md) | Trier un catalogue | select, change, sort, DOM |
| [38](./38-favoris/README.md) | Ajouter aux favoris | événement, Set, DOM |
| [39](./39-stockage/README.md) | Mémoriser un thème | localStorage, événement, initialisation |
| [40](./40-url/README.md) | Lire un filtre dans l’URL | URLSearchParams, DOM |
| [41](./41-dates/README.md) | Afficher une date lisible | Date, Intl.DateTimeFormat |
| [42](./42-navigation-clavier/README.md) | Fermer un panneau au clavier | keydown, Escape, focus |
| [43](./43-rendu-etat-vide/README.md) | Gérer un état vide | fonction de rendu, DOM |
| [44](./44-dataset/README.md) | Choisir une catégorie | dataset et délégation |
| [45](./45-promesse/README.md) | Attendre un résultat | Promise, then, catch |
| [46](./46-async-await/README.md) | Attendre avec async / await | async, await, try/catch |
| [47](./47-promesses-paralleles/README.md) | Charger deux ressources | Promise.all |
| [48](./48-promesses-partielles/README.md) | Afficher les réussites | Promise.allSettled |
| [49](./49-fetch-liste/README.md) | Charger un catalogue | fetch, response.ok, json |
| [50](./50-fetch-erreur/README.md) | Traiter une réponse HTTP invalide | HTTP 503, response.ok, catch |
| [51](./51-fetch-post/README.md) | Envoyer une commande | POST, JSON.stringify, en-tête HTTP |
| [52](./52-fetch-annulation/README.md) | Annuler une requête | AbortController et AbortError |
| [53](./53-ts-types/README.md) | Typer une fonction | types primitifs, paramètres, retour |
| [54](./54-ts-objets/README.md) | Décrire une fiche produit | type, propriété optionnelle |
| [55](./55-ts-union/README.md) | Gérer un état de requête | union discriminée et narrowing |
| [56](./56-ts-generique/README.md) | Retourner le premier élément | générique et undefined |
| [57](./57-ts-inconnu/README.md) | Valider une donnée externe | unknown et garde de type |
| [58](./58-tests/README.md) | Tester une règle métier | node:test, assertions, cas limites |

## Priorités pour l’intégration front end

Travaillez en particulier les tableaux (17 à 21), la manipulation du DOM (27 à 30), les événements et formulaires (31 à 39), le stockage et l’URL (40 à 41), puis les requêtes HTTP (49 à 52). Ces exercices restent indépendants : les numéros indiquent une progression conseillée.

