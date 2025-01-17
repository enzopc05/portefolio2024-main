// Sélectionner tous les boutons "En savoir plus"
const buttons = document.querySelectorAll(".btn");

// Sélectionner toutes les modales
const modals = document.querySelectorAll(".modal");

// Sélectionner toutes les icônes de fermeture
const closeButtons = document.querySelectorAll(".close");

// Fonction pour ouvrir la modale
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const modalId = this.getAttribute("data-modal");
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
  });
});

// Fonction pour fermer la modale en cliquant sur le bouton de fermeture
closeButtons.forEach((close) => {
  close.addEventListener("click", function () {
    this.parentElement.parentElement.style.display = "none";
  });
});

// Fermer la modale en cliquant à l'extérieur de la boîte modale
window.onclick = function (event) {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
  }
};

function validatePassword(inputId, docsId) {
  console.log(`Validating password for ${inputId}`);
  const password = document.getElementById(inputId).value;
  const docs = document.getElementById(docsId);
  if (password === "Zazou2005*") {
    console.log("Password correct");
    docs.style.display = "block";
  } else {
    console.log("Password incorrect");
    alert("Mot de passe incorrect !");
  }
}

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
