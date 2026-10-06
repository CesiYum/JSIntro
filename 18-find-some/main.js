const produits = [{ id: 1, prix: 20 }, { id: 2, prix: 80 }];
const produitRecherche = produits.find((produit) => produit.id == 2)
const prixSup50 = produits.some((produit) => produit.prix > 50)
console.log(produitRecherche)
console.log(prixSup50)
