import React, { Component, useState, useEffect } from "react";
import Flashcard from "./components/Flashcard"


const App = () => {

  const [data, setData] = useState([])

  const [flashcard, setFlashcard] = useState({
    frontside: "default frontside",
    backside: "default backside"
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const setFlashcardData = (frontsideData, backsideData) => {
    setFlashcard(() => {
      return {
        frontside: frontsideData,
        backside: backsideData
      }
    });
  }

  const fetchData = async () => {
    const response = await fetch('http://localhost:8080/flashcards');
    const data = await response.json();
    setData(data);
    setFlashcardData(
      data[0].frontside,
      data[0].backside)
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleNextButton = () => {
    setCurrentIndex(currentIndex + 1);
    setFlashcardData(
      data[currentIndex].frontside,
      data[currentIndex].backside)
  };

  const handlePreviousButton = () => {
    setCurrentIndex(currentIndex - 1);
    setFlashcardData(
      data[currentIndex].frontside,
      data[currentIndex].backside)
  };

  return (
    <div>
      <div>
        <p>Fiszka : {flashcard.frontside}|{flashcard.backside} {currentIndex}</p>
        
      </div>
      <button onClick={handlePreviousButton}>Previous</button>
      <button onClick={handleNextButton}>Next</button>
    </div>
  );

}

export default App;









