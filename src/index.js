import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import theme from './styles/theme';
import GlobalStyles from './styles/GrobalStyles';
import App from './App';
import "./index.css";
import ScrollToTop from './components/common/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Router>
        <ScrollToTop />
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);