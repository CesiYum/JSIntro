const prix = 60;
const reduction = 20;
// Complétez ici.

let prixReduc = prix * (1-(reduction/100))
let boole = prixReduc < 50

if (boole) {
    console.log("Le prix est < à 50 : " + prixReduc)
}
