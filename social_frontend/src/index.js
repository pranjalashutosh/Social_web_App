import React from 'react';
import ReactDOM from 'react-dom/client'; // Use ReactDOM.createRoot for latest React
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// Wrap the entire application with the BrowserRouter component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>  
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
); // there we go our applciation just became multipage


