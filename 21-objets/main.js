const profil = { nom: 'Maya', role: 'membre' };
const { nom, ville = "Inconnue" } = profil
const profilAdmin = { ...profil, role: "admin" }
console.log(nom, ville, profilAdmin, profil.role)
