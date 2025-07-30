'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.textContent.trim() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

const detailBox = document.getElementById("portfolio-detail");

const detailContent = document.getElementById("detail-content");

const closeDetailBtn = document.getElementById("close-detail");


const detailMap = {

  ue4: `
  <section class="about-text">
    <h2>UE 4 - Gérer</h2>

      <p class="desc"> Administrer une base de données, concervoir et réaliser des systèmes d'information décisionnels </p>
      <br>

    <h2>Apprentissage critique</h2><hr>

      <h3 class="AC">AC1 | Capturer et stocker des ensembles volumineux et complexes de données hétérogènes </h3>
      <i> Ressource associé : SAE501 - Proposer une solution optimisée à partir de données internes et externes </i>

        <p class="gras">Analyse auto-réflexive :</p>  

          <p class="timeline-text" > 
            Dans le cadre de mon projet, j'avais comme besoin de récupérer un nombre de données important,
            provenant de différentes sources de données hétérogènes (CSV, SQL, API) disponible sur différentes plateforme (INPN, FranceMétéo, Vélib...) et ayant différentes structure.<br>
            Pour gérer correctement ce besoin, il a fallut effectuer unu nettoyage des données, c'est à dire, filtrer les données importé et récupérer seulement les information utiles aux besoins du projet.<br>
            La stratégie que j'ai effectué pour mener à bien ce rojet consiste à écrire un programme qui importe les données, les converties en un format homgène puis vie un système de clé-valeur, supprime les informations non-utile.
          </p>
          <br>
  
        <ul class="diff"> <b> Difficultés rencontrées : </b>

            <li>Gérer la volumétrie importante</li>
            <li>Abscence de certaines données imporantes </li>
            <li>Formats de données incohérents (dates, types, coordonnées géographique)</li>
            <li>Automatiser les flux d’intégration</li>
            
        </ul>

        <p class="gras"> Résultat Obtenue & Traces : </p>
          <p> Pipeline de chargement automatisé, données nettoyées, centralisées et prêtes à être exploitée.</p>


      <h3 class="AC">AC2 | Préparer et extraire les données pour l’exploitation : </h3>
      <i> Ressource associé : SAE501 - Proposer une solution optimisée à partir de données internes et externes </i>

        <p class="gras">Analyse auto-réflexive :</p>

          <p class="timeline-text"> 
            Pour préparer mes données, et les rendres homogènes, j'ai du les convertirs en un même format.<br>
            Le format que j'ai choisi est le JSON, car il est simple à manipuler et il permet de faciliter l'exploiation. <br>
          </p>
          <br>

        <ul class="diff"> <b>Difficultés rencontrées : </b>

          <li>Requêtes lentes ou inefficaces</li>
          <li>Données incomplètes ou mal renseignées</li>
          <li>Adaptation aux exigences de l’utilisateur final</li>

        </ul>

        <p class="gras">Résultat Obtenue & Traces : </p>
        <p> Jeu de données fiable, extraction pertinente pour les besoins métiers et préparation simplifiée pour l’analyse </p>
    

      <h3 class="AC">AC3 | Appliquer des méthodes d’exploration et d’exploitation des données : </h3>
      <i> Ressource associé : R5.C.04 - Programmation au format Web des informations décisionnelles</i>

        <p class="gras">Analyse auto-réflexive :</p>

          <p class="timeline-text"> 
          J'ai créer des KPI métiers en partant d'un jeux de données non-nettoyé, qui j'ai mis en forme de façon claire et lisible à l'aide de l'outil PowerBi.<br>
          Une fois nettoyé, j'ai pur organisé mon jeu de données de façon à pouvoir les analyser, les comparer entre elles et obtenir une visualisation du résultat.<br>
          Pour cela, j'ai utiliser différents filtre dynamiques et segments en fonction de l'analyse et du format de celle-ci.
          </p>

        <ul class="diff"> <b>Difficultés rencontrées : </b>

          <li>Identifier les bons indicateurs à suivre<li>
          <li>Éviter les visualisations inutiles ou redondantes<li>
          <li>Prise en main de l’outil Power BI (et PowerQueris)<li>

        </ul>

        <p class="gras">Résultat Obtenue & Traces : </p>


      <h3 class="AC">AC4 | Mettre en production et optimiser le système de gestion de données de l’entreprise :</h3>
      <i> Ressource associé : SAE501 - Proposer une solution optimisée à partir de données internes et externes</i>
      
        <p class="gras">Analyse auto-réflexive :</p>
          <p class="timeline-text">
          J'ai du faire une première études des outils de mise en production disponible en fonction de mes besoins, de la performance des outils et de leur accessibilité (coût).<br>
          puis j'ai migrer nos bases de données dans une VM Arzur pour la mise en production, en utilisant Docker qui m'a permis de contenerier mon projet et d'btenir un espace de production et de programmation séparé.<br>
          </p>
        
        <p class="gras">Difficultés rencontrées : </p>
        <p class="gras">Résultat Obtenue & Traces : </p>


    <br><h2> Situation profesionnel</h2><hr>
      <p>Lancer un nouveau projet</p>
      <p>Sécuriser des données</p>
      <p>Exploiter des données pour la prise de décisions</p>
  </section>
  `,

  ue5: `
  <section class="about-text">
  <h2>UE 5 - Conduire</h2>

    <p class="desc">Participer à la conception et à la mise en œuvre d’un projet système d’information</p><br>

  <h2>Apprentissage critique</h2>
  <i> Ressource associé : SAE501 - Proposer une solution optimisée à partir de données internes et externes</i>
  <hr>

    <h3 class="AC">AC1 | Mesurer les impacts économiques, sociétaux et technologiques d’un projet informatique : </h3>

      <p class="gras">Analyse auto-réflexive :</p>
        <p class="timeline-text">
          Lors de la SAE de conception d’un système d’information pour une association ou une entreprise (comme celle sur la gestion de stock ou de suivi de clients), 
          j’ai été amenée à réfléchir aux impacts du projet : 
        </p>
        <br>

        <ul>
          <li><b>Économiques : </b> réduction des coûts manuels, amélioration de la traçabilité</li>
          <li><b>Sociétaux : </b> accessibilité accrue à l’information, meilleure qualité de service</li>
          <li><b>Technologiques : </b> choix d’outils modernes (PHP, MySQL, ou Power BI) adaptés aux ressources de l’entreprise </li>
        </ul><br>
    
        <p class="timeline-text"> Cela m’a permis de prendre conscience que tout choix technique a des conséquences concrètes sur les utilisateurs finaux et le budget.</p>

      <ul class="diff"><b>Difficultés rencontrées :</b>

        <li class="renc">Anticiper les vrais besoins des utilisateurs</li>
        <li classe="renc">Mesurer les coûts cachés (maintenance, formation)</li>
        <li>Trouver un bon équilibre entre innovation et faisabilité</li>
        
      </ul>

      <p class="gras">Résultat Obtenue & Traces : </p>
        <p class="timeline-text"> 
          Rédaction d’une analyse d’impact claire pour les parties prenantes, effectuer des choix d’outils open-source pour limiter les coûts en sachant présenter et argumenter sur ces choix.
        </p>
    

    <h3 class="AC">AC2 | Savoir intégrer un projet informatique dans le système d’information d’une organisation : </h3>
    <i> Ressource associé : Missions en entreprise</i>

      <p class="gras">Analyse auto-réflexive :</p>
        <p class="timeline-text"> 
          dans le cadre de mon activité en tant qu'apprentie administratrice de base de données j'ai développer plusieurs programmes qui servent "d'outils d'aide à la décision" : 
        </p>

        <ul>
          <li>L'un des programme permet de calculer la saturation d'une base base de données pour permettre de la configurer correctement. </li>
          <li> Et l'autre permet de facilité la lecture d'un plan d'execution dans le but d'optimiser des requêtes longues.</li>
        </ul>
        <br>

        <p>Ce sont des petits projet informatique que j'ai pue intégrer aux taches quotidienne d'un dba au sein d'un système d'information.</p>

      <ul class="diff"><b>Difficultés rencontrées : </b>

        <li>Identifier un besoin au sein de l'équipe et apporter une solution accessible.</li>
        <li>Développer un outil en respectant les normes de sécurité et la protection des données de l'entreprise.</li>
        <li>S'assurer de la fiabilité de l'outil pour assurer son utilisation sur le long therme.</li>
        
      </ul>

      <p class="gras">Résultat Obtenue & Traces : </p>


    <h3 class="AC">AC3 | Savoir adapter un système d’information : </h3>
    <i> Ressource associé : SAE501 - Proposer une solution optimisée à partir de données internes et externes</i>

      <p class="gras">Analyse auto-réflexive :</p>
        <p class="timeline-text">
          Suite aux différents retour que mon équipe et moi avons reçus sur notre projet, nous avons modifier notre application dans le but de l'adapter aux nouveaux besoin et de la rendre évolutive (ex : ajout de nouvelles fonctionnalités dans une interface utilisateur).<br>
          Ce qui m'a appris à modifier le code sans casser l’existant et tenir compte des retours utilisateurs pour améliorer l’ergonomie.
        </p>

      <ul class="diff"><b>Difficultés rencontrées : </b>

        <li>Maintenir la compatibilité avec les données existantes</li>
        <li>Gérer les imprévus de dernière minute</li>

      </ul>

      <p class="gras">Résultat Obtenue & Traces : </p>
        <p class="timeline-text"> 
          Application enrichie avec de nouvelles fonctionnalités, Meilleure expérience utilisateur, Satisfaction des modifications par les utilisateurs et de nouvelles idées d'améliorations proposé
        </p> 

  <br><h2> Situation profesionnel</h2><hr>
    <p>Lancer un nouveau projet</p>
    <p>Piloter le maintient d'un projet en condition opérationnelle</p>
    <p>Faire évoluer un système d'information</p>
  </section>
`,

  ue6: `
    <section class="about-text">
    <h2>UE 6 - Collaborer</h2>
      <p class="desc">Manager une équipe informatique</p><br>
  
    <h2>Apprentissage critique</h2><hr>
      <h3>AC1 | Organiser et partager une veille numérique : </h3>  
      <p class="gras">Analyse auto-réflexive :</p>
      <p class="gras">Difficultés rencontrées : </p>
      <p class="gras">Résultat Obtenue & Traces : </p>

      <h3>AC2 | Identifier les enjeux de l'économie de l'innovation numérique : </h3>    
      <p class="gras">Analyse auto-réflexive :</p>
      <p class="gras">Difficultés rencontrées : </p>
      <p class="gras">Résultat Obtenue & Traces : </p>

      <h3>AC3 | Guider la conduite du changement informatique au sein d'une organisation : </h3>
      <p class="gras">Analyse auto-réflexive :</p>
      <p class="gras">Difficultés rencontrées : </p>
      <p class="gras">Résultat Obtenue & Traces : </p>

      <h3>AC4 | Accompagner le management de projet informatique : </h3>    
      <p class="gras">Analyse auto-réflexive :</p>
      <p class="gras">Difficultés rencontrées : </p>
      <p class="gras">Résultat Obtenue & Traces : </p>

  
    <br><h3> Situation profesionnel</h3><hr>
      <p>Lancer un nouveau projet</p>
      <p>Piloter le maintient d'un projet en condition opérationnelle</p>
      <p>Faire évoluer un système d'information</p>
    </section>

  `

};


const blogItems = document.querySelectorAll(".blog-post-item");


blogItems.forEach(item => {

  item.addEventListener("click", function (e) {

    e.preventDefault(); // empêche le lien de scroller en haut

    const key = this.dataset.detail;

    if (detailMap[key]) {

      detailContent.innerHTML = detailMap[key];

      detailBox.classList.remove("hidden");


      // cacher la liste des items de blog

      document.querySelector(".blog-posts").style.display = "none";

    }

  });

});


closeDetailBtn.addEventListener("click", () => {

  detailBox.classList.add("hidden");

  document.querySelector(".blog-posts").style.display = "block";

});


