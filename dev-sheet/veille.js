// Mode nuit
const toggleButton = document.getElementById("toggleNightMode");
const icon = toggleButton.querySelector(".icon");

if (localStorage.getItem("nightMode") === "enabled") {
  document.body.classList.add("night-mode");
  icon.textContent = "🌙";
}

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("night-mode");

  if (document.body.classList.contains("night-mode")) {
    localStorage.setItem("nightMode", "enabled");
    icon.textContent = "🌙";
  } else {
    localStorage.setItem("nightMode", "disabled");
    icon.textContent = "🌞";
  }
});

// Trie des articles
document.getElementById("sortByDate").addEventListener("click", function () {
  sortArticles("date");
});

document.getElementById("sortByNote").addEventListener("click", function () {
  sortArticles("note");
});

function sortArticles(criteria) {
  const articlesContainer = document.querySelector(".articles-container");
  const articles = Array.from(articlesContainer.querySelectorAll(".article"));

  articles.sort((a, b) => {
    const aValue = a.dataset[criteria];
    const bValue = b.dataset[criteria];

    if (criteria === "date") {
      return new Date(bValue) - new Date(aValue); // Tri décroissant pour les dates
    } else if (criteria === "note") {
      return bValue - aValue;
    }
  });

  articles.forEach((article) => articlesContainer.appendChild(article));
}

// Gestion des boutons Voir Détails et Aller à l'Article
document.addEventListener("DOMContentLoaded", function () {
  // Gestion des boutons "Voir Détails"
  document.querySelectorAll(".toggle-detail").forEach((button) => {
    button.addEventListener("click", function () {
      // Trouve le parent article
      const article = this.closest(".article");
      // Trouve le paragraphe de détails dans cet article
      const articleDetail = article.querySelector(".article-detail");

      // Bascule l'affichage
      if (
        articleDetail.style.display === "none" ||
        articleDetail.style.display === ""
      ) {
        articleDetail.style.display = "block";
        this.textContent = "Masquer Détails";
      } else {
        articleDetail.style.display = "none";
        this.textContent = "Voir Détails";
      }
    });
  });

  // Gestion des boutons "Aller à l'Article"
  document.querySelectorAll(".view-link").forEach((button) => {
    button.addEventListener("click", function () {
      const url = this.getAttribute("data-url");
      if (url) {
        window.open(url, "_blank");
      }
    });
  });
});
