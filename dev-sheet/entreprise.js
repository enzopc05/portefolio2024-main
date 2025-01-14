// Récupérer les éléments des boutons et des sections de contenu
const logoRemax = document.getElementById("logo-remax");
const logoEurodislog = document.getElementById("logo-eurodislog");
const remaxContent = document.getElementById("remax-content");
const eurodislogContent = document.getElementById("eurodislog-content");

// Fonction pour masquer tous les contenus et afficher le contenu ciblé
function switchContent(contentToShow) {
  // Masquer toutes les sections
  remaxContent.style.display = "none";
  eurodislogContent.style.display = "none";

  // Afficher uniquement la section ciblée
  contentToShow.style.display = "block";
}

// Ajouter les événements de clic sur les boutons
logoRemax.addEventListener("click", () => {
  switchContent(remaxContent); // Affiche la section RE/MAX
});

logoEurodislog.addEventListener("click", () => {
  switchContent(eurodislogContent); // Affiche la section Eurodislog
});

// Initialisation : Masquer toutes les sections sauf celle active par défaut
document.addEventListener("DOMContentLoaded", () => {
  remaxContent.style.display = "block"; // Active par défaut
  eurodislogContent.style.display = "none"; // Masquée par défaut
});
