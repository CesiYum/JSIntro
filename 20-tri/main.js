const produits = [{ nom: 'A', prix: 30 }, { nom: 'B', prix: 10 }];
const produitsTries = [...produits].sort((a, b) => a.prix - b.prix)
console.log(produitsTries.map((produit) => produit.nom))
console.log(produits.map((produit) => produit.nom))
