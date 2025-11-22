import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { HashRouter } from 'react-router-dom'; // <--- import HashRouter

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);
