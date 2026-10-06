const prix = 12.345;
const prixArrondi = Math.round(prix * 100) / 100
const prixFormate = new Intl.NumberFormat("fr-FR", {style: "currency", currency: "EUR"}).format(prixArrondi)
console.log(prixFormate);
