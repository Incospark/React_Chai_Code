import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


// createRoot expects you to pick an element from html and then it will render the component inside that element.


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App /> // Render App component inside the root element
);

