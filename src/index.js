import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App';
import Contact from './components/Contact';

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));

render((
  <BrowserRouter>
      <div>Contact</div>
  </BrowserRouter>
), document.getElementById('contact'));


