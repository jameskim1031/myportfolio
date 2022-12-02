const project = document.getElementById("view-project")
const project2 = document.getElementById("view-project2")
const card = document.getElementById("card")

project.addEventListener("click", flipCard);
project2.addEventListener("click", flipCard);

function flipCard() {
    card.classList.toggle("flipCard");
}