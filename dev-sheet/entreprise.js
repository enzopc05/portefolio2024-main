const logoRemax = document.getElementById("logo-remax");
const logoEurodislog = document.getElementById("logo-eurodislog");
const remaxContent = document.getElementById("remax-content");
const eurodislogContent = document.getElementById("eurodislog-content");

function switchContent(contentToShow) {
  remaxContent.style.display = "none";
  eurodislogContent.style.display = "none";

  contentToShow.style.display = "block";
}

logoRemax.addEventListener("click", () => {
  switchContent(remaxContent);
});

logoEurodislog.addEventListener("click", () => {
  switchContent(eurodislogContent);
});

document.addEventListener("DOMContentLoaded", () => {
  remaxContent.style.display = "block";
  eurodislogContent.style.display = "none";
});

// Sélectionner le bouton et l'icône
const toggleButton = document.getElementById("toggleNightMode");
const icon = toggleButton.querySelector(".icon");

// Vérifier si le mode nuit est activé dans le stockage local
if (localStorage.getItem("nightMode") === "enabled") {
  document.body.classList.add("night-mode");
  icon.textContent = "🌙"; // Icône lune
}

// Ajouter un gestionnaire d'événements pour le clic
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("night-mode");

  // Basculer entre les icônes soleil et lune
  if (document.body.classList.contains("night-mode")) {
    localStorage.setItem("nightMode", "enabled");
    icon.textContent = "🌙"; // Icône lune
  } else {
    localStorage.setItem("nightMode", "disabled");
    icon.textContent = "🌞"; // Icône soleil
  }
});
