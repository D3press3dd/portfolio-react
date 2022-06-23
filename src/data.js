import logo45 from './img/clients-logos/logo-45.png';
import logoAdidas from './img/clients-logos/logo-adidas.png';
import logoAv from './img/clients-logos/logo-av.png';
import logoDupont from './img/clients-logos/logo-dupont.png';
import logoEzia from './img/clients-logos/logo-ezia.png';
import logoPharmacology from './img/clients-logos/logo-pharmacology.png';
import logoPlan from './img/clients-logos/logo-plan.png';
import logoReebok from './img/clients-logos/logo-reebok.png';
import logoRun from './img/clients-logos/logo-run.png';
import logoSprite from './img/clients-logos/logo-sprite.png';
import { idGenerator } from './helpers/idGenerator';

import html from './img/skill-logos/html.png';
import css from './img/skill-logos/css.png';
import js from './img/skill-logos/js.png';
import npm from './img/skill-logos/npm.png';
import react from './img/skill-logos/react.png';
import reactRouter from './img/skill-logos/react-router.png';
import sass from './img/skill-logos/sass.png';
import styled from './img/skill-logos/styled.png';
import vsCode from './img/skill-logos/vs-code.png';
import redux from './img/skill-logos/redux.png';
import typescript from './img/skill-logos/typescript.png';

import awsAmplify from './img/skill-logos/awsAmplify.webp';
import emotion from './img/skill-logos/emotion.png';
import eslintImage from './img/skill-logos/eslint.jpg';
import formik from './img/skill-logos/formik.png';
import materialUi from './img/skill-logos/materialUi.png';
import framerMotion from './img/skill-logos/framerMotion.png';

export const data = {
  saludoEn: ['H', 'I', ',', 'I', "'", 'M'],
  saludoEnSecond: [
    '<',
    'A',
    'N',
    'T',
    'H',
    'O',
    'N',
    'Y',
    '-',
    'R',
    'O',
    'S',
    'M',
    'A',
    'N',
    '/>',
  ],
  saludoEs: ['H', 'O', 'L', 'A', ',', 'S', 'O', 'Y'],
  saludoEsSecond: [
    '<',
    'A',
    'N',
    'T',
    'H',
    'O',
    'N',
    'Y',
    '-',
    'R',
    'O',
    'S',
    'M',
    'A',
    'N',
    '/>',
  ],
};

export const clientsLogos = [
  {
    id: 1,
    name: 'Hotel 45 by director',
    link: 'https://45bydirector.cl/',
    img: logo45,
  },
  {
    id: 2,
    name: 'Adidas',
    link: 'https://www.latin-america.adidas.com/',
    img: logoAdidas,
  },
  {
    id: 3,
    name: 'Av comparatives',
    link: 'https://www.av-comparatives.org/',
    img: logoAv,
  },
  {
    id: 4,
    name: 'Dupont',
    link: 'https://www.dupont.com/',
    img: logoDupont,
  },
  {
    id: 5,
    name: 'Ezia',
    link: 'https://ezia.us/',
    img: logoEzia,
  },
  {
    id: 6,
    name: 'Pharmacology university',
    link: 'https://www.pharmacologyuniversity.com/',
    img: logoPharmacology,
  },
  {
    id: 7,
    name: 'Plan international',
    link: 'https://plan-international.es/',
    img: logoPlan,
  },
  {
    id: 8,
    name: 'Reebok',
    link: 'https://www.reebok.com/us',
    img: logoReebok,
  },
  {
    id: 9,
    name: 'Run the year',
    link: 'https://runtheedge.com/',
    img: logoRun,
  },
  {
    id: 10,
    name: 'Sprite',
    link: 'https://www.sprite.com/',
    img: logoSprite,
  },
];

export const herramientas = [
  {
    id: idGenerator,
    name: 'HTML',
    link: 'https://developer.mozilla.org/es/docs/Web/HTML',
    img: html,
  },
  {
    id: idGenerator,
    name: 'Css',
    link: 'https://developer.mozilla.org/es/docs/Web/CSS',
    img: css,
  },
  {
    id: idGenerator,
    name: 'Javascript',
    link: 'https://www.typescriptlang.org/',
    img: js,
  },
  {
    id: idGenerator,
    name: 'Typescript',
    link: 'https://developer.mozilla.org/es/docs/Web/JavaScript',
    img: typescript,
  },
  { id: idGenerator, name: 'Sass', link: 'https://sass-lang.com/', img: sass },
  {
    id: idGenerator,
    name: 'styled componenes',
    link: 'https://styled-components.com/',
    img: styled,
  },
  {
    id: idGenerator,
    name: 'react',
    link: 'https://es.reactjs.org/',
    img: react,
  },
  {
    id: idGenerator,
    name: 'react router',
    link: 'https://reactrouter.com/',
    img: reactRouter,
  },
  {
    id: idGenerator,
    name: 'redux',
    link: 'https://es.redux.js.org/',
    img: redux,
  },
  { id: idGenerator, name: 'npm', link: 'https://www.npmjs.com/', img: npm },
  {
    id: idGenerator,
    name: 'Vscode',
    link: 'https://code.visualstudio.com/',
    img: vsCode,
  },
  ///////////////////////////////////////////////////////////////////////////////
  {
    id: idGenerator,
    name: 'Aws Amplify',
    link: 'https://aws.amazon.com/es/amplify/',
    img: awsAmplify,
  },
  {
    id: idGenerator,
    name: 'Emotion/styled components',
    link: 'https://emotion.sh/docs/styled',
    img: emotion,
  },
  {
    id: idGenerator,
    name: 'Eslint',
    link: 'https://eslint.org/',
    img: eslintImage,
  },
  {
    id: idGenerator,
    name: 'Formik',
    link: 'https://formik.org/',
    img: formik,
  },
  {
    id: idGenerator,
    name: 'Framer motion',
    link: 'https://www.framer.com/motion/',
    img: framerMotion,
  },
  {
    id: idGenerator,
    name: 'Material Ui',
    link: 'https://mui.com/',
    img: materialUi,
  },
];

export const projects = [
  {
    id: '1',
    name: 'Rest Countries App',
    livePreview: 'https://rest-countries-app-ar.netlify.app/',
    img: 'https://raw.githubusercontent.com/D3press3dd/portfolio-react/main/public/projects-img/rest-api-app.png',
    alt: 'Imagen about the rest api project',
    description: {
      en: {
        desc: 'A challenge that i did in frontend mentor using the REST Countries V2 API to pull country data and display it like in the designs.',
        list: [
          'See all countries from the API on the homepage, ',
          'Search for a country using an input field, ',
          'Filter countries by region, ',
          'Click on a country to see more detailed information on a separate page, ',
          'Toggle the color scheme between light and dark mode ',
        ],
      },
      es: {
        desc: 'Un reto que hice en frontend mentor usando la API REST Countries V2 para extraer datos de los paises y mostrarlos en pantalla.',
        list: [
          'Ver todos los países de la API en la página de inicio',
          'Buscar un país usando un campo de texto',
          'Filtrar países por región',
          'Ver información más detallada en una página separada acerca del pais seleccionado',
          'Alternar el tema entre el modo claro y oscuro',
        ],
      },
    },

    repository: 'https://github.com/D3press3dd/rest-countries-app-with-context',
    technologies: ['React', 'React Router', 'Context API', 'Sass'],
  },

  {
    id: '2',
    name: 'Portfolio',
    livePreview: 'https://anthonyrosman.com/',
    img: 'https://raw.githubusercontent.com/D3press3dd/portfolio-react/main/public/projects-img/portfolio.png',
    alt: 'Portfolio background',
    description: {
      en: {
        desc: 'My portfolio using react with context to manage the language.',
        list: [
          'Design and construction of my portfolio using react, ',
          'adding cool animations with framer motion',
        ],
      },
      es: {
        desc: 'Mi portafolio usando react y context para manejar el cambio de idioma.',
        list: [
          'Diseño y construccion de mi portafolio usando react, ',
          'añadiendo animaciones interesante con framer motion',
        ],
      },
    },

    repository: 'https://github.com/D3press3dd/portfolio-react#',
    technologies: ['React', 'React Router', 'Context API', 'Sass'],
  },
  {
    id: '3',
    name: 'First Portfolio',
    livePreview: 'https://anthony-rosman.netlify.app/',
    img: 'https://github.com/D3press3dd/portfolio-react/blob/main/public/projects-img/primer-portfolio.png?raw=true',
    alt: 'Portfolio background',
    description: {
      en: {
        desc: 'My first portfolio using vanilla js and some libraries.',
        list: [
          'Design and construction of my first portfolio using vanilla js, ',
          'adding cool animations with typed js and jquery',
        ],
      },
      es: {
        desc: 'Mi primer portafolio usando vanilla js y algunas librerias externas.',
        list: [
          'Diseño y construccion de mi primer portafolio usando solo vanilla js, ',
          'añadiendo animaciones interesantes con typed js y jquery',
        ],
      },
    },

    repository: 'https://github.com/D3press3dd/Portfolio',
    technologies: ['HTML', 'CSS', 'Javascript', 'Typed.js'],
  },
  {
    id: '4',
    name: 'Advice Generator',
    livePreview: 'https://advice-generator-app-anthonyrosman.netlify.app/',
    img: 'https://github.com/D3press3dd/portfolio-react/blob/main/public/projects-img/advice.png?raw=true',
    alt: 'Advice image',
    description: {
      en: {
        desc: 'Simple advice generator using advice slip api.',
        list: [
          'Solving a challenge on frontend mentor, ',
          'doing an advice generator using the api',
        ],
      },
      es: {
        desc: 'Generador de consejos simple usando la api "advice-api".',
        list: [
          'Resolviendo un desafio de frontend mentor , ',
          'haciendo un generador de consejos usando la api',
        ],
      },
    },

    repository: 'https://github.com/D3press3dd/advice-generator-app',
    technologies: ['HTML', 'CSS', 'Javascript', 'Typed.js'],
  },
  {
    id: '5',
    name: 'Social media dashboard with theme changer and custom toggle button',
    livePreview: 'https://social-dashboard-anthony-rosman.netlify.app/',
    img: 'https://github.com/D3press3dd/portfolio-react/blob/main/public/projects-img/social%20media.png?raw=true',
    alt: 'Social media dashboard image',
    description: {
      en: {
        desc: 'Social media dashboard on frontend mentor.',
        list: [
          'Solving a challenge on frontend mentor, ',
          'doing a social media dashboard responsive with theme changer and a custom toggle button .',
        ],
      },
      es: {
        desc: 'Panel de redes socials.',
        list: [
          'Resolviendo un desafio de frontend mentor , ',
          'haciendo un panel de redes sociales totalmente responsive con cambio de tema y un boton personalizado para el cambio del mismo.',
        ],
      },
    },

    repository: 'https://github.com/D3press3dd/social-media-dashboard',
    technologies: ['React', 'CSS', 'Flexbox', 'Grid'],
  },
  {
    id: '6',
    name: 'Time Tracker',
    livePreview: 'https://time-tracker-react-anthonyrosman.netlify.app/',
    img: 'https://raw.githubusercontent.com/D3press3dd/portfolio-react/main/public/projects-img/time%20tracker.png',
    alt: 'Time tracker image',
    description: {
      en: {
        desc: 'Time tracker challenge on frontend mentor.',
        list: [
          'Solving a challenge on frontend mentor, ',
          'doing and time tracker.',
        ],
      },
      es: {
        desc: 'Rastreador de tiempo .',
        list: [
          'Resolviendo un desafio de frontend mentor , ',
          'haciendo un rastreador de tiempo responsive',
        ],
      },
    },

    repository: 'https://github.com/D3press3dd/time-tracker-responsive-react',
    technologies: ['React', 'CSS', 'Flexbox', 'Grid'],
  },
];
