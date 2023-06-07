import React from 'react';
import {Route, Routes} from 'react-router-dom';
import FlashcardsCarousel from "./pages/FlashcardCarousel/FlashcardsCarousel";
import AppNavbar from "./components/Navbar/AppNavbar";
import './Global.css'

const App = () => {
    return (
        <AppNavbar>
        {/*    <div className="container body">*/}
        {/*<Routes>*/}
        {/*        <Route exact path="/FlashcardCarousel" component={<FlashcardsCarousel/>} />*/}
        {/*</Routes>*/}
        {/*    </div>*/}
        </AppNavbar>
    );
};

export default App;
