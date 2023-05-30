import React from 'react';
import ReactDOM from 'react-dom/client';
import FlashcardsCarousel from './components/FlashcardsCarousel';
import AppNavbar from "./components/Navbar/AppNavbar";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <AppNavbar/>
    <FlashcardsCarousel/>
  </React.StrictMode>
);
