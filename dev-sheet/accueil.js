// Fonction pour ouvrir les modales
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
}

// Fonction pour fermer les modales
function closeModal(modal) {
    modal.style.display = "none";
}

// Ajout des événements de clic sur les cases de la frise
document.getElementById('bts').onclick = function () {
    openModal('modal-bts');
};
document.getElementById('remax').onclick = function () {
    openModal('modal-remax');
};
document.getElementById('eurodislog').onclick = function () {
    openModal('modal-eurodislog');
};
document.getElementById('bac').onclick = function () {
    openModal('modal-bac');
};

// Fermeture des modales lorsqu'on clique sur le bouton "close"
document.querySelectorAll('.close').forEach(btn => {
    btn.onclick = function () {
        const modal = this.closest('.modal');
        closeModal(modal);
    };
});

// Fermeture de la modale lorsqu'on clique en dehors du contenu
window.onclick = function (event) {
    if (event.target.classList.contains('modal')) {
        closeModal(event.target);
    }
};
