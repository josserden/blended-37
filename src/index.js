import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import 'modern-normalize/modern-normalize.css';
import { Global } from '@emotion/react';
import { GlobalStyles } from './index.styled';

import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Global styles={GlobalStyles} />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
