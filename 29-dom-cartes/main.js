const produits = [{ nom: 'Casque', prix: 40, stock: 2 }, { nom: 'Micro', prix: 30, stock: 0 }];
const cartes = document.querySelector("#cartes")
const produitsEnStock = produits.filter((produit) => produit.stock > 0)

if (produitsEnStock.length == 0) {
  cartes.textContent = "Aucun produit disponible."
} else {
  for (const produit of produitsEnStock) {
    const carte = document.createElement("div") /* à la place de l'article :) */
    const nom = document.createElement("h2")
    const prix = document.createElement("p")
    nom.textContent = produit.nom
    prix.textContent = `${produit.prix} €`
    carte.append(nom, prix)
    cartes.append(carte)
  }
}
