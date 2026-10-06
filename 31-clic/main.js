let score = 0;
const bouton = document.querySelector("#ajouter")
const affichage = document.querySelector("#score")

bouton.addEventListener("click", () => {
  score++
  affichage.textContent = score
})
