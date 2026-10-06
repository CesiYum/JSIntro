function calculerTTC(prixHT, taux) {
  return prixHT * (1 + taux)
}

console.log(calculerTTC(100, 0.2))
