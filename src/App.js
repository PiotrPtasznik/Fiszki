import React, { useState, useEffect } from "react";
import { Button, ButtonGroup, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


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
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleNextButton = () => {
    setCurrentIndex(currentIndex + 1);
    setFlashcardData(data[currentIndex].frontside, data[currentIndex].backside)
  };

  const handlePreviousButton = () => {
    setCurrentIndex(currentIndex - 1);
    setFlashcardData(
      data[currentIndex].frontside,
      data[currentIndex].backside)
  };

  return (
    <div >

      <div class="container-fluid">
        <Card>
          <Card.Body>
            <div className="row">
              <Card.Title>
                <p>Fiszka :   Index:{currentIndex}</p>
              </Card.Title>
            </div>


            <div className="d-flex justify-content-center mb-4">
              <Card className="d-flex justify-content-center flashcard-display">
                {flashcard.frontside}||{flashcard.backside}
              </Card>
            </div>



            <div className="d-flex">
              <ButtonGroup className="col-sm text-center mt-4">
                <Button className="button" onClick={handlePreviousButton}>Previous</Button>
                <Button className="button" onClick={handleNextButton}>Next</Button>
              </ButtonGroup>
            </div>

          </Card.Body>
        </Card>


      </div>


    </div>
  );

}

export default App;









