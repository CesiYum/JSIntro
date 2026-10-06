const utilisateur = { stats: { points: 0 } };
const pseudo = utilisateur.profil?.pseudo ?? "Anonyme";
const points = utilisateur.stats?.points ?? 0;
console.log(pseudo, points)
