const liste = document.querySelector("#taches")

liste.addEventListener("click", (event) => {
  if (event.target.tagName == "BUTTON") {
    event.target.parentElement.remove()
  }
})
