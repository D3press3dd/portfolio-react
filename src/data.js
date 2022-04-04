import logo45 from "./img/clients-logos/logo-45.png";
import logoAdidas from "./img/clients-logos/logo-adidas.png";
import logoAv from "./img/clients-logos/logo-av.png";
import logoDupont from "./img/clients-logos/logo-dupont.png";
import logoEzia from "./img/clients-logos/logo-ezia.png";
import logoPharmacology from "./img/clients-logos/logo-pharmacology.png";
import logoPlan from "./img/clients-logos/logo-plan.png";
import logoReebok from "./img/clients-logos/logo-reebok.png";
import logoRun from "./img/clients-logos/logo-run.png";
import logoSprite from "./img/clients-logos/logo-sprite.png";
import { idGenerator } from "./helpers/idGenerator";

import html from "./img/skill-logos/html.png";
import css from "./img/skill-logos/css.png";
import js from "./img/skill-logos/js.png";
import npm from "./img/skill-logos/npm.png";
import react from "./img/skill-logos/react.png";
import reactRouter from "./img/skill-logos/react-router.png";
import sass from "./img/skill-logos/sass.png";
import styled from "./img/skill-logos/styled.png";
import vsCode from "./img/skill-logos/vs-code.png";
import redux from "./img/skill-logos/redux.png";

export const data = {
  saludoEn: ["H", "I", ",", "I", "'", "M"],
  saludoEnSecond: [
    "<",
    "A",
    "N",
    "T",
    "H",
    "O",
    "N",
    "Y",
    "-",
    "R",
    "O",
    "S",
    "M",
    "A",
    "N",
    "/>",
  ],
  saludoEs: ["H", "O", "L", "A", ",", "S", "O", "Y"],
  saludoEsSecond: [
    "<",
    "A",
    "N",
    "T",
    "H",
    "O",
    "N",
    "Y",
    "-",
    "R",
    "O",
    "S",
    "M",
    "A",
    "N",
    "/>",
  ],
};

export const clientsLogos = [
  {
    id: 1,
    name: "Hotel 45 by director",
    link: "https://45bydirector.cl/",
    img: logo45,
  },
  {
    id: 2,
    name: "Adidas",
    link: "https://www.latin-america.adidas.com/",
    img: logoAdidas,
  },
  {
    id: 3,
    name: "Av comparatives",
    link: "https://www.av-comparatives.org/",
    img: logoAv,
  },
  {
    id: 4,
    name: "Dupont",
    link: "https://www.dupont.com/",
    img: logoDupont,
  },
  {
    id: 5,
    name: "Ezia",
    link: "https://ezia.us/",
    img: logoEzia,
  },
  {
    id: 6,
    name: "Pharmacology university",
    link: "https://www.pharmacologyuniversity.com/",
    img: logoPharmacology,
  },
  {
    id: 7,
    name: "Plan international",
    link: "https://plan-international.es/",
    img: logoPlan,
  },
  {
    id: 8,
    name: "Reebok",
    link: "https://www.reebok.com/us",
    img: logoReebok,
  },
  {
    id: 9,
    name: "Run the year",
    link: "https://runtheedge.com/",
    img: logoRun,
  },
  {
    id: 10,
    name: "Sprite",
    link: "https://www.sprite.com/",
    img: logoSprite,
  },
];

export const herramientas = [
  {
    id: idGenerator,
    name: "HTML",
    link: "https://developer.mozilla.org/es/docs/Web/HTML",
    img: html,
  },
  {
    id: idGenerator,
    name: "Css",
    link: "https://developer.mozilla.org/es/docs/Web/CSS",
    img: css,
  },
  {
    id: idGenerator,
    name: "Javascript",
    link: "https://developer.mozilla.org/es/docs/Web/JavaScript",
    img: js,
  },
  { id: idGenerator, name: "Sass", link: "https://sass-lang.com/", img: sass },
  {
    id: idGenerator,
    name: "styled componenes",
    link: "https://styled-components.com/",
    img: styled,
  },
  {
    id: idGenerator,
    name: "react",
    link: "https://es.reactjs.org/",
    img: react,
  },
  {
    id: idGenerator,
    name: "react router",
    link: "https://reactrouter.com/",
    img: reactRouter,
  },
  {
    id: idGenerator,
    name: "redux",
    link: "https://es.redux.js.org/",
    img: redux,
  },
  { id: idGenerator, name: "npm", link: "https://www.npmjs.com/", img: npm },
  {
    id: idGenerator,
    name: "Vscode",
    link: "https://code.visualstudio.com/",
    img: vsCode,
  },
];

export const projects = [
  {
    id: "1",
    name: "Rest Countries App",
    livePreview: "https://rest-countries-app-ar.netlify.app/",
    img: "https://raw.githubusercontent.com/D3press3dd/portfolio-react/main/public/projects-img/rest-api-app.png",
    alt: "Imagen about the rest api project",
    description: {
      en: {
        desc: "A challenge that i did in frontend mentor using the REST Countries V2 API to pull country data and display it like in the designs.",
        list: [
          "See all countries from the API on the homepage, ",
          "Search for a country using an input field, ",
          "Filter countries by region, ",
          "Click on a country to see more detailed information on a separate page, ",
          "Toggle the color scheme between light and dark mode ",
        ],
      },
      es: {
        desc: "Un reto que hice en frontend mentor usando la API REST Countries V2 para extraer datos de los paises y mostrarlos en pantalla.",
        list: [
          "Ver todos los países de la API en la página de inicio",
          "Buscar un país usando un campo de texto",
          "Filtrar países por región",
          "Ver información más detallada en una página separada acerca del pais seleccionado",
          "Alternar el tema entre el modo claro y oscuro",
        ],
      },
    },

    repository: "https://github.com/D3press3dd/rest-countries-app-with-context",
    technologies: ["React", "React Router", "Context API", "Sass"],
  },

  {
    id: "2",
    name: "Portfolio",
    livePreview: "https://anthonyrosman.com/",
    img: "https://raw.githubusercontent.com/D3press3dd/portfolio-react/main/public/projects-img/portfolio.png",
    alt: "Portfolio background",
    description: {
      en: {
        desc: "My portfolio using react with context to manage the language.",
        list: [
          "Design and construction of my portfolio using react, ",
          "adding cool animations with framer motion",
        ],
      },
      es: {
        desc: "Mi portafolio usando react y context para manejar el cambio de idioma.",
        list: [
          "Diseño y construccion de mi portafolio usando react, ",
          "añadiendo animaciones interesante con framer motion",
        ],
      },
    },

    repository: "https://github.com/D3press3dd/portfolio-react#",
    technologies: ["React", "React Router", "Context API", "Sass"],
  },
];
