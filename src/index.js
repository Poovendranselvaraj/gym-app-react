import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'

import App from './App.js';

const root=ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <BrowserRouter>
  {/* browser router is used for routing   , react router is used for routing */}
    <App />
    
   </BrowserRouter>
);