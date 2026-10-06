const categories = ['jeu', 'musique', 'jeu'];
const categoriesUniques = [...new Set(categories)];

const occurrences = new Map();

for (const categorie of categories) {
    if (occurrences.has(categorie)) {
        occurrences.set(categorie, occurrences.get(categorie) + 1);
    } else {
        occurrences.set(categorie, 1);
    }
}

console.log(categoriesUniques, occurrences.get("jeu"));
