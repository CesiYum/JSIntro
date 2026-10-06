const produits = [{ nom: 'A', stock: 2 }, { nom: 'B', stock: 0 }, { nom: 'C', stock: 4 }];
const produitsEnStock = produits.filter((produit) => produit.stock > 0)
console.log(produitsEnStock.map((produit) => produit.nom))
