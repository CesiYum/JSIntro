const categories = ['Musique', 'Sport', 'Jeux'];
const liste = document.querySelector("#liste");
for (let categorie of categories) {
  const element = document.createElement("li");
  element.textContent = categorie;
  liste.append(element);
}
