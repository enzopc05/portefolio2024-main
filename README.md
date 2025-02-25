# Portfolio d'Enzo Pace

Ce projet est un portfolio personnel développé dans le cadre du BTS SIO SLAM. Il présente mes compétences, mes réalisations, et mon parcours professionnel de manière interactive et moderne.

## 📋 Table des matières

- [Présentation](#présentation)
- [Fonctionnalités](#fonctionnalités)
- [Structure du projet](#structure-du-projet)
- [Technologies utilisées](#technologies-utilisées)
- [Installation](#installation)
- [Guide des fichiers](#guide-des-fichiers)
- [Mode nuit](#mode-nuit)
- [Filtres des réalisations](#filtres-des-réalisations)
- [Idées d'améliorations](#idées-daméliorations)
- [Contributions](#contributions)
- [Licence](#licence)

## 📄 Présentation

Ce portfolio a été conçu pour mettre en avant mon parcours, mes compétences et mes réalisations en tant qu'étudiant en BTS SIO SLAM. Il sert également de vitrine pour mes expériences professionnelles chez RE/MAX France et Eurodislog.

## ✨ Fonctionnalités

- **Design responsive** : adaptation à tous types d'écrans
- **Mode nuit/jour** : changement de thème pour une meilleure lisibilité
- **Frise chronologique interactive** : présentation de mon parcours
- **Galerie de projets** : présentation de mes réalisations avec filtres par technologie
- **Section veille technologique** : articles avec triage par date ou note
- **Modales détaillées** : informations approfondies sur projets et expériences
- **Formulaire de contact** : possibilité de s'abonner à la newsletter

## 🏗️ Structure du projet

```
portfolio/
├── site-sheet/          # Pages HTML du site
│   ├── accueil.html     # Page d'accueil
│   ├── entreprise.html  # Page des entreprises
│   ├── realisations.html # Page des projets
│   ├── veille.html      # Page de veille technologique
│   └── bilan.html       # Page de bilan
├── style-sheet/         # Fichiers CSS
│   ├── accueil.css
│   ├── entreprise.css
│   ├── realisations.css
│   ├── veille.css
│   └── bilan.css
├── dev-sheet/           # Scripts JavaScript
│   ├── accueil.js
│   ├── entreprise.js
│   ├── realisations.js
│   ├── veille.js
│   └── bilan.js
├── picture/             # Images utilisées sur le site
├── personnage/          # Images des mascottes (jour/nuit)
├── doc/                 # Documents téléchargeables
└── README.md            # Documentation du projet
```

## 🔧 Technologies utilisées

- **HTML5** : structure des pages
- **CSS3** : mise en forme et animations
- **JavaScript** : interactions, modales, filtres, mode nuit
- **Font Awesome** : icônes
- **Devicon** : icônes pour les langages et technologies
- **Google Fonts** : police Poppins

## 🚀 Installation

1. Clonez ce dépôt :
   ```bash
   git clone https://github.com/enzopc05/portfolio.git
   ```
2. Ouvrez le fichier `site-sheet/accueil.html` dans votre navigateur pour accéder au portfolio.

_Note: Aucun serveur ou dépendance n'est nécessaire pour exécuter ce projet. Il s'agit d'un site web statique._

## 📁 Guide des fichiers

### Pages HTML

- **accueil.html** : Présentation personnelle, compétences et chronologie
- **entreprise.html** : Présentation des entreprises où j'ai travaillé
- **realisations.html** : Présentation de mes projets avec filtres
- **veille.html** : Articles sur ma veille technologique
- **bilan.html** : Bilan de ma formation

### JavaScript

- **accueil.js** : Gestion des modales et du mode nuit
- **entreprise.js** : Changement dynamique des informations d'entreprise
- **realisations.js** : Filtrage des projets et gestion des modales
- **veille.js** : Tri des articles et animations
- **bilan.js** : Mode nuit uniquement

## 🌙 Mode nuit

Le portfolio intègre un mode nuit/jour basé sur un thème orange-marron pour le jour et bleu foncé pour la nuit. Le mode est persistant grâce au stockage local (localStorage) et peut être changé via un bouton présent dans l'en-tête de chaque page.

```javascript
// Extrait du code de gestion du mode nuit
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("night-mode");

  if (document.body.classList.contains("night-mode")) {
    localStorage.setItem("nightMode", "enabled");
    icon.textContent = "🌙"; // Icône lune
  } else {
    localStorage.setItem("nightMode", "disabled");
    icon.textContent = "🌞"; // Icône soleil
  }
});
```

## 🔍 Filtres des réalisations

La page des réalisations intègre un système de filtrage par technologie utilisée. Chaque projet possède des attributs `data-tech` qui permettent de les filtrer dynamiquement.

```javascript
techSelect.addEventListener("change", function () {
  const selectedTech = this.value;

  projects.forEach((project) => {
    const projectTechs = project.getAttribute("data-tech") || "";

    if (selectedTech === "all" || projectTechs.includes(selectedTech)) {
      // Affiche le projet
      project.style.display = "block";
    } else {
      // Cache le projet
      project.style.display = "none";
    }
  });
});
```

## 💡 Idées d'améliorations

(Ajoutez vos idées d'améliorations ici)

- Réalisations -> Implémentant une animation de transition quand les projets apparaissent/disparaissent
- Réalisations -> Créer une visualisation interactive de vos compétences (par exemple, un graphique radar)
- Réalisations -> un système de filtres plus avancé
- Ajouter des effets de parallaxe subtils pour donner de la profondeur
- Ajouter des animations lorsque l'utilisateur défile (animations au scroll)
- Implémenter un système de retour en haut de page élégant
- Système de changement de langue (français/anglais)
- Plusieurs thèmes de couleurs personnalisables
- Transformer certaines sections en composants React
- Ajouter des animations avec Framer Motion
- Responsive Design

## Outils et Technologies Recommandés

- React/Next.js pour les interactions
- Framer Motion pour les animations
- Tailwind CSS pour le design responsive
- Firebase pour les fonctionnalités dynamiques

## 🤝 Contributions

## Ce portfolio est un projet personnel, mais toute suggestion d'amélioration est la bienvenue. N'hésitez pas à me contacter pour des suggestions ou des commentaires.

Créé par Enzo Pace - 2025
