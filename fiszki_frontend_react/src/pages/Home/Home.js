import React from 'react';
import './Home.css'
import {Button} from "react-bootstrap";

const HomePage = () => {
    return (
        <div className="home-page">
            <h1>Welcome to Flashcards App</h1>
            <p>Start learning with interactive flashcards!</p>
            <p>1.Click manage in navbar and create set of flashcards</p>
            <p>2.Click play on navbar and start learning</p>
            <Button href="/manage">Get Started</Button>
        </div>
    );
};

export default HomePage;
