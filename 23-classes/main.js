class Carte {
  constructor(nom, puissance) {
    this.nom = nom;
    this.puissance = puissance;
  }

  decrire() {
    return `${this.nom} (${this.puissance})`;
  }
}

const carte = new Carte("Éclair", 5);
console.log(carte.decrire());
