import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { ScrollToTop } from './components/index.jsx';

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <ScrollToTop />
        <App />
    </Router>
  
  </StrictMode>,
)

