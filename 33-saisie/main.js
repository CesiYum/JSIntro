const noms = ['Maya', 'Noa', 'Lina'];
const recherche = document.querySelector("#recherche");
const liste = document.querySelector("#resultats");

function afficherResultats() {
  const miniRecherche = recherche.value.trim().toLowerCase()
  const resultats = noms.filter((nom) => nom.toLowerCase().includes(miniRecherche))
  liste.replaceChildren()

  if (resultats.length == 0) {
    const element = document.createElement("li")
    element.textContent = "Aucun résultat"
    liste.append(element)
    return
  }

  for (const nom of resultats) {
    const element = document.createElement("li")
    element.textContent = nom
    liste.append(element)
  }
}

recherche.addEventListener("input", afficherResultats)
afficherResultats()
