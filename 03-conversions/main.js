const saisie = '7';
// Essayez aussi 'abc' et '0'.

try {
    let enNombre = Number(saisie);
    console.log("Actuel: " + enNombre)

    while (enNombre % 2 != 0) {
        enNombre *= 2
        console.log("Actuel: " + enNombre)
    }
} catch {
    console.log("la saisie n'est pas un nombre")
}
