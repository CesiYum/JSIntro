function verifierAge(age) {
  if (age !== "number") {
    throw new TypeError("Âge invalide")
  }
  if (age < 0) {
    throw new RangeError("Âge négatif")
  }
}

try {
  verifierAge(-2)
} catch (erreur) {
  console.log(erreur.message)
}
