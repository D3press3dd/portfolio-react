import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';

import './styles/styles.scss';

console.log(
  '%c👀👀¿Que haces aqui en las developer tools?👀👀',
  'color: #e9322f; font-size: 20px; background: #f9f9f9; padding: 10px; border-radius: 5px; box-shadow: 0 0 10px #e9322f;'
);

console.log(
  '%cSi quieres ver el codigo fuente, esta en mi repositorio, si lo usas de inspiracion dejame una estrella',
  'color: #e9322f; font-size: 16px; background: #f9f9f9; padding: 10px; border-radius: 5px; box-shadow: 0 0 10px #e9322f;'
);

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
