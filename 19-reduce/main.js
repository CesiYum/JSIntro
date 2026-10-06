const panier = [{ prix: 10, quantite: 2 }, { prix: 7, quantite: 3 }];
const total = panier.reduce((somme, ligne) => somme + ligne.prix * ligne.quantite, 0)
console.log(total)
