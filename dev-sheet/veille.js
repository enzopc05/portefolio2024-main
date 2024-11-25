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
            return new Date(aValue) - new Date(bValue); // Tri par date croissante
        } else if (criteria === "note") {
            return bValue - aValue; // Tri par note décroissante
        }
    });

    articlesContainer.innerHTML = "";
    articles.forEach((article) => articlesContainer.appendChild(article));
}

document.querySelectorAll('.toggle-detail').forEach(button => {
    button.addEventListener('click', function () {
        const popup = document.getElementById('popup');
        const summary = this.getAttribute('data-summary');

        document.getElementById('popupSummary').textContent = summary;
        popup.classList.remove('hidden');
    });
});

document.getElementById('closePopup').addEventListener('click', function () {
    document.getElementById('popup').classList.add('hidden');
});

