import panc from "../image/panclick.png";
import projet2 from "../image/aventuresAtmo.png";
import projet3 from "../image/celebre.png";
import projet4 from "../image/street.png";
import projet5 from "../image/pimpmyproduct.png";

const projets = [
  {
    id: 4,
    name: "PIMPMYPRODUCT",
    description: "Développement d’un outil de gestion de catalogue produits.",
    image: projet5,

    lien: "https://predeploy.students-cda-js-2.wilders.dev/portal",
  },
  {
    id: 4,
    name: "STREET ART HUNTER",
    description:
      "Jeux d’orientation qui consiste à utiliser la technique du géo-positionnement par satellite (GPS) pour rechercher ou ajouter œuvre de rue, dans divers endroits à travers la France.",
    image: projet4,
    compétence:
      "Figma /React /API /SCSS /SASS /Javascript /Node /Express /Mysql /Cors /Méthode Agile avec SCRUM /Git /Github",
    lien: "https://npm-code.remote-6.wilders.dev",
  },

  {
    id: 3,
    name: "Échappee Célèbrement Fastasque",
    description:
      "24h pour créer un projet en équipe de 5 personnes, sur le thème Nature & Évasion en mélangeant plusieurs classes et différent language de programmation.",
    image: projet3,
    compétence: "Filgma / HTML / CSS / Javascript / Git / Github",
    lien: "https://github.com/WildCodeSchool-2024-02/wcs-Protojam-goupeA.git",
  },
  {
    id: 2,
    name: "AventuresAtmo",
    description:
      "Application de proposition d’activités à Tours selon la météo.",
    image: projet2,
    compétence:
      "Figma / React/ API /SCSS / SASS / Javascript / Node / Méthode Agile avec SCRUM / Git / Github",
    lien: "https://github.com/WildCodeSchool-2024-02/JS-RemoteFR-Gridception-P2-Plapimad.git",
  },
  {
    id: 1,
    name: "Pan'click",
    description:
      "Jeux vidéo dont l'objectif est de produire un maximum de pancake.",
    image: panc,
    compétence:
      "Figma / React/ API /SCSS / SASS / Javascript / Node / Méthode Agile avec SCRUM / Git / Github",
    lien: "https://github.com/WildCodeSchool-2024-02/JS-RemoteFR-P1-StackQAMP.git",
  },
];
export default projets;
