import React from 'react';
import ReactDOM from 'react-dom/client';
import FlashcardsCarousel from './pages/FlashcardCarousel/FlashcardsCarousel';
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import ManageFlashcards from "./pages/ManageFlashcards/ManageFlashcards";
import Footer from "./components/Footer/Footer";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
         <App/>
         <FlashcardsCarousel/>
         <ManageFlashcards/>
         <Footer/>
     </BrowserRouter>

  </React.StrictMode>
);
