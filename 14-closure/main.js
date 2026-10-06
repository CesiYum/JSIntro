function creerCompteur() {
    let valeur = 0
    return () => ++valeur
}

const compteur1 = creerCompteur()
const compteur2 = creerCompteur()

console.log(compteur1(), compteur1(), compteur2())
