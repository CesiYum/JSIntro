const saisie = "abc";
// Essayez aussi 'abc' et '0'.

try {
    let enNombre = Number(saisie)
    if (isNaN(enNombre)) throw "not a number"
    console.log("Actuel: " + enNombre)

    while (enNombre % 2 != 0) {
        enNombre *= 2
        console.log("Actuel: " + enNombre)
    }
} catch (error) {
    console.log("Error : " + error)
}
